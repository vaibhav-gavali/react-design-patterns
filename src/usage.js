// const LeftHandComponent = ({ name }) => {
//   return <h1 style={{ backgroundColor: 'green' }}>{name}!</h1>;
// };

// const RightHandComponent = ({ message }) => {
//   return <h1 style={{ backgroundColor: 'red' }}>{message}!</h1>;
// };

// <SplitScreen leftWeight={1} rightWeight={3}>
//   <LeftHandComponent name={'Vaibhav'} />
//   <RightHandComponent message={'Hello'} />
// </SplitScreen>;

// <RegularList
// items={people}
// resourceName="person"
// itemComponent={SmallPersonListItem}
// />
// <NumberedList
// items={products}
// resourceName="product"
// itemComponent={LargeProductListItem}
// />

// // Modal
// <Modal>
//   <LargeProductListItem product={products[0]} />
// </Modal>

// {
// <UserLoader userId="123">
//   <UserInfo />
// </UserLoader>
// <UserLoader userId="234">
//   <UserInfo />
// </UserLoader>
// <UserLoader userId="345">
//   <UserInfo />
//   <ProductInfo />
// </UserLoader>

// <ResourceLoader resourceUrl="users/123" resourceName={'user'}>
//   <UserInfo />
// </ResourceLoader>
// <ResourceLoader resourceUrl="products/1234" resourceName={'product'}>
//   <ProductInfo />
// </ResourceLoader>

// const getServerData = (url) => async () => {
//   const response = await axios.get(url);
//   return response.data;
// };

// const getLocalStorageData = (key) => () => {
//   return localStorage.getItem(key);
// };

// const Text = ({ message }) => <h1>{message}</h1>;

// function App() {
//   return (
//     <>
//       <DataSource getDataFunc={getServerData('/users/123')} resourceName="user">
//         <UserInfo />
//       </DataSource>

//       <DataSource
//         getDataFunc={getLocalStorageData('message')}
//         resourceName="message"
//       >
//         <Text />
//       </DataSource>
//     </>
//   );
// }

// function App() {
//   const [shouldShowModal, setShouldShowModal] = useState(false);
//   return (
//     <>
//       <ControlledModal
//         shouldShow={shouldShowModal}
//         onRequestClose={() => setShouldShowModal(false)}
//       >
//         <h1>Hello!</h1>
//       </ControlledModal>
//       <button onClick={() => setShouldShowModal(!shouldShowModal)}>
//         Show Modal
//       </button>
//     </>
//   );
// }

// const StepOne = ({ goToNext }) => (
//   <>
//     <h1>Step 1</h1>
//     <button onClick={() => goToNext({ name: 'Vaibhav' })}>Next</button>
//   </>
// );
// const StepTwo = ({ goToNext }) => (
//   <>
//     <h1>Step 2</h1>
//     <button onClick={() => goToNext({ age: 29 })}>Next</button>
//   </>
// );
// const StepThree = ({ goToNext }) => (
//   <>
//     <h1>Step 3</h1>
//     <p>Congratulations! You qualify for your senior discount</p>
//     <button onClick={() => goToNext({})}>Next</button>
//   </>
// );
// const StepFour = ({ goToNext }) => (
//   <>
//     <h1>Step 4</h1>
//     <button onClick={() => goToNext({ hairColor: 'black' })}>Next</button>
//   </>
// );

// function App() {
//   const [onboardingData, setOnboardingData] = useState({});
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const onNext = (stepData) => {
//     setOnboardingData({ ...onboardingData, ...stepData });
//     setCurrentIndex(currentIndex + 1);
//   };

//   return (
//     <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
//       <StepOne />
//       <StepTwo />
//       {onboardingData.age >= 62 && <StepThree />}
//       <StepFour />
//     </ControlledOnboardingFlow>
//   );
// }

// LOADING DATA WITH HOC
// const UserInfoWithLoader = withUser(UserInfo, 123);

// function App() {
//   return <UserInfoWithLoader />;
// }

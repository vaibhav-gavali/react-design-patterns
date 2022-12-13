import { DangerButton, BigSuccessButton } from './hoc/partiallyApply';

function App() {
  return (
    <>
      <DangerButton text="danger" />
      <BigSuccessButton text="ok" />
    </>
  );
}

export default App;

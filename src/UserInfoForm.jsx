import withEditableResource from './hoc/withEditableResource';

const UserInfoForm = (props) => {
  const { user, onChangeUser, onSaveUser, onResetUser } = props;
  const { name, age, hairColor } = user || {};
  return user ? (
    <>
      <label>
        Name:
        <input
          value={name}
          onChange={(e) => {
            onChangeUser({ name: e.target.value });
          }}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => {
            onChangeUser({ age: Number(e.target.value) });
          }}
        />
      </label>
      <label>
        Hair Color:
        <input
          value={hairColor}
          onChange={(e) => {
            onChangeUser({ hairColor: e.target.value });
          }}
        />
      </label>
      <button onClick={onResetUser}>Reset</button>
      <button onClick={onSaveUser}>Save Changes</button>
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default withEditableResource('/users/123', 'user')(UserInfoForm);

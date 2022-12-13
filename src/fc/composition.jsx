export const Button = ({ size, color, text, ...restProps }) => {
  return (
    <button
      style={{
        padding: size === 'large' ? '32px' : '8px',
        fontSize: size === 'large' ? '32px' : '16px',
        backgroundColor: color,
      }}
      {...restProps}
    >
      {text}
    </button>
  );
};

export const DangerButton = (props) => {
  return <Button {...props} color="red" />;
};

export const BigSuccessButton = (props) => {
  return <Button {...props} size="large" color="green" />;
};

{
  /* <DangerButton text="danger" />
      <BigSuccessButton text="ok" /> */
}

const Toggle = ({htmlForName}) => {
  return (
    <label htmlFor={htmlForName} className="flex items-center">
      <input type="checkbox" id={htmlForName} className="toggle-switch" />
    </label>
  );
};

export default Toggle;

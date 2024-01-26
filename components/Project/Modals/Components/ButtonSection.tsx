export type ButtonSectionProps = {
  buttonText: string;
  action: Function;
  inputValue: string;
};

const ButtonSection = ({
  buttonText,
  action,
  inputValue,
}: ButtonSectionProps) => {
  return (
    <button
      type="button"
      disabled={parseFloat(inputValue) > 0 ? false : true}
      onClick={() => action()}
      className={
        "w-56 h-14 my-4 leading-6 tracking-xs border border-primary-onix dark:border-primary-onix-alt rounded-lg " +
        (buttonText.toUpperCase() === "CANCEL"
          ? "hover:bg-secondary-gray-light dark:hover:bg-secondary-gray-light-alt"
          : "bg-primary-agate dark:bg-primary-agate-alt border-none hover:bg-secondary-amber dark:hover:bg-secondary-amber-alt dark:text-primary-onix disabled:bg-secondary-gray dark:disabled:bg-secondary-gray-alt disabled:cursor-not-allowed")
      }
    >
      <p className="capitalize button-medium">{buttonText.toLowerCase()}</p>
    </button>
  );
};

export default ButtonSection;

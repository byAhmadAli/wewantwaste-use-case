/**
 * A simple button component.
 *
 * @component
 * @param {Object} props - The component accepts text and onClick as props
 * @param {string} props.text - The text to be display on the button
 * @param {function} props.onClick - The click event handler.
 * @returns {JSX.Element} The rendered button component.
 *
 * @example
 * // Render a button with the text "Click Me"
 * <Button text="Click Me" onClick={() => console.log('Button clicked!')} />
 */
function Button({ text, onClick }) {
  return (
    <button className='myButton' onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
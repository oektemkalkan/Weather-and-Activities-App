import "./button.css";

export default function Button({ children, type = "submit" }) {
  return (
    <button type={type} className="button">
      {children}
    </button>
  );
}
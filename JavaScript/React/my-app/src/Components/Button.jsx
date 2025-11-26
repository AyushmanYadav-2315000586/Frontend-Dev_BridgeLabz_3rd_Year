import "./Button.css";
export default function Button({ children, onClick }) {
  return (
    <div className="button-div">
      <button className="button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

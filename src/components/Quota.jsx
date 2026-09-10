export default function Quota({ remaining }) {
  return (
    <div className={`quota ${remaining === 0 ? "empty" : ""}`}>
      <span>Messages remaining today</span>
      <strong>{remaining}/5</strong>
    </div>
  );
}
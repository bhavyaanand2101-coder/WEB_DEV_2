// This represents a large component (like a Chart or a Map)
export default function HeavyComponent() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f0f0", marginTop: "20px" }}>
      <h2>I am the Heavy Component!</h2>
      <p>I was loaded only after you clicked the button.</p>
    </div>
  );
}

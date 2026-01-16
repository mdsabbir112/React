import { useState } from "react";

export default function Show() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <h3>Here we show the Text on the Basis of Condition</h3>

      <button onClick={() => setIsVisible(!isVisible)}>
        Show / Hide
      </button>

      {isVisible && <h3>Hello, React Learner!!!</h3>}
    </div>
  );
}


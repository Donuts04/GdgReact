import { useState } from "react";

import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full bg-white flex flex-col">
      <Navbar />
      <Card title="gdg" description="gdg" />
    </div>
  );
}

export default App;

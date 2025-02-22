import { useState } from "react";

import Navbar from "./components/Navbar";
import Card from "./components/Card";
import AddEvent from "./components/AddEvent";

const events = [
  {
    id: 1,
    title: "React Session",
    clubName: "GDG Club",
    date: "22/02/2024 Monday",
    time: "From 10:00 AM to 12:00 PM",
    location: "W-002",
    description: "Intro to React",
    imageSrc: "/cat.jpeg",
  },
  {
    id: 2,
    title: "React Session 2",
    clubName: "GDG Club",
    date: "22/02/2024 Monday",
    time: "From 10:00 AM to 12:00 PM",
    location: "W-002",
    description: "Intro to React",
    imageSrc: "/cat.jpeg",
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const dateNow = Date.now();
  const dateInIso = new Date(dateNow);

  const renderContent = () => {
    if (currentPage === "home") {
      return (
        <div className="p-10 flex gap-2 flex-col">
          <h1>Welcome Osama Khalil</h1>
          <h2>Here are your upcoming events:</h2>
          <h1>{dateInIso.toUTCString()}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map((event) => (
              <Card key={event.id} {...event}></Card>
            ))}
          </div>
        </div>
      );
    } else if (currentPage === "add-event") {
      return <AddEvent></AddEvent>;
    } else {
      return <h1>Page Not Found</h1>;
    }
  };

  return (
    <div className="w-full bg-white flex flex-col">
      <Navbar
        onNavigate={(page) => setCurrentPage(page)}
        currentPage={currentPage}
      />
      {renderContent()}
    </div>
  );
}

export default App;

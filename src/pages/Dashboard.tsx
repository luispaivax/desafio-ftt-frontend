import React, { useEffect, useState } from "react";
import RoomCard from "../components/RoomCard";
import "../styles/dashboard.css";

interface Room {
  id: number;
  name: string;
  block: string;
  capacity: number;
  resources: string[];
}

const Dashboard: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [filteredRooms, setFilteredRooms] = useState<Room[]>([]);
  const [blockFilter, setBlockFilter] = useState("");
  const [capacityFilter, setCapacityFilter] = useState("");
  const [resourceFilter, setResourceFilter] = useState("");

  useEffect(() => {
    fetch("https://api.example.com/rooms") 
      .then((response) => response.json())
      .then((data) => {
        setRooms(data);
        setFilteredRooms(data);
      })
      .catch((error) => console.error("Erro ao buscar salas:", error));
  }, []);

  const handleFilter = () => {
    let filtered = rooms;
    
    if (blockFilter) {
      filtered = filtered.filter((room) => room.block.includes(blockFilter));
    }
    
    if (capacityFilter) {
      filtered = filtered.filter((room) => room.capacity >= Number(capacityFilter));
    }

    if (resourceFilter) {
      filtered = filtered.filter((room) => 
        room.resources.some((res) => res.toLowerCase().includes(resourceFilter.toLowerCase()))
      );
    }

    setFilteredRooms(filtered);
  };

  return (
    <div className="dashboard">
      <h1>Salas Disponíveis</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Filtrar por bloco"
          value={blockFilter}
          onChange={(e) => setBlockFilter(e.target.value)}
        />
        <input
          type="number"
          placeholder="Capacidade mínima"
          value={capacityFilter}
          onChange={(e) => setCapacityFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Recurso (ex: projetor)"
          value={resourceFilter}
          onChange={(e) => setResourceFilter(e.target.value)}
        />
        <button onClick={handleFilter}>Filtrar</button>
      </div>

      <div className="room-list">
        {filteredRooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;


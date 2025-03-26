import React, { useState, useEffect } from "react";

const ReserveForm: React.FC = () => {
  const [blocks, setBlocks] = useState<string[]>([]);
  const [rooms, setRooms] = useState<{ id: number; name: string }[]>([]);
  const [selectedBlock, setSelectedBlock] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setBlocks(["Bloco A", "Bloco B", "Bloco C"]);
  }, []);

  useEffect(() => {
    if (selectedBlock) {
      fetch(`https://api.example.com/rooms?block=${selectedBlock}`)
        .then((res) => res.json())
        .then((data) => setRooms(data))
        .catch(() => setRooms([]));
    }
  }, [selectedBlock]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const reservation = {
      block: selectedBlock,
      room: selectedRoom,
      date,
      time,
    };

    fetch("https://api.example.com/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reservation),
    })
      .then((res) => res.json())
      .then((data) => setMessage("Reserva feita com sucesso!"))
      .catch(() => setMessage("Erro ao fazer a reserva."));
  };

  return (
    <div className="reserve-form">
      <h2>Fazer Reserva</h2>
      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <label>Bloco:</label>
        <select value={selectedBlock} onChange={(e) => setSelectedBlock(e.target.value)}>
          <option value="">Selecione</option>
          {blocks.map((block) => (
            <option key={block} value={block}>{block}</option>
          ))}
        </select>

        <label>Sala:</label>
        <select value={selectedRoom} onChange={(e) => setSelectedRoom(e.target.value)}>
          <option value="">Selecione</option>
          {rooms.map((room) => (
            <option key={room.id} value={room.name}>{room.name}</option>
          ))}
        </select>

        <label>Data:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

        <label>Horário:</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />

        <button type="submit">Reservar</button>
      </form>
    </div>
  );
};

export default ReserveForm;

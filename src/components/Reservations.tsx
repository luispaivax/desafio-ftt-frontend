import React, { useEffect, useState } from "react";

interface Reservation {
  id: number;
  block: string;
  room: string;
  date: string;
  time: string;
}

const Reservations: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://api.example.com/reservations")
      .then((res) => res.json())
      .then((data) => setReservations(data))
      .catch(() => setReservations([]));
  }, []);

  const handleCancel = (id: number) => {
    fetch(`https://api.example.com/reservations/${id}`, { method: "DELETE" })
      .then(() => {
        setReservations(reservations.filter((r) => r.id !== id));
        setMessage("Reserva cancelada com sucesso.");
      })
      .catch(() => setMessage("Erro ao cancelar reserva."));
  };

  return (
    <div className="reservations">
      <h2>Reservas Futuras</h2>
      {message && <p>{message}</p>}

      <ul>
        {reservations.map((res) => (
          <li key={res.id}>
            {res.block} - {res.room} - {res.date} às {res.time}
            <button onClick={() => handleCancel(res.id)}>Cancelar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservations;

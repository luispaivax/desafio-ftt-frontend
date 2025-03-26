import React from "react";

interface RoomProps {
    room: {
        id: number;
        name: string;
        block: string;
        capacity: number;
        resources: string[];
    };
}

const RoomCard: React.FC<RoomProps> = ({ room }) => {
    return (
        <div className="room-card">
            <h2>{room.name}</h2>
            <p><strong>Bloco:</strong> {room.block}</p>
            <p><strong>Capacidade:</strong> {room.capacity} pessoas</p>
            <p><strong>Recursos:</strong> {room.resources.join(", ")}</p>
        </div>
    );
};

export default RoomCard;
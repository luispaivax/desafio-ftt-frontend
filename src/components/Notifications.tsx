import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notifications = () => {
  useEffect(() => {
    fetch("https://sua-api.com/reservas-proximas")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((reserva: any) =>
          toast.info(`Reserva: ${reserva.sala} - ${reserva.data}`)
        );
      });
  }, []);

  return <ToastContainer />;
};

export default Notifications;

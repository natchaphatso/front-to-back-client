import Swal from "sweetalert2";

export const createAlert = (icon, text) => {
  return Swal.fire({
    title: text || "Gode Bra",
    icon: icon || "info",
    timer: 2000,
  });
};

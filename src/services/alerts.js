import Swal from "sweetalert2";

export const setAlerts = (message) => {
  switch (message) {
    case "login":
      Swal.fire("Excellent!", "You have successfully logged in!", "success");
      break;
    case "register":
      Swal.fire("Excellent!", "Successful registration! We have sent you an email to verify your account.", "success");
      break;
    case "edit":
      Swal.fire("Excelent!", "Information updated successfully!", "success");
      break;
    default:
      return "alert-info";
  }
};

// Date.js
const FormattedDate = () => {
    const date = new Date().toLocaleDateString("en-US", { timeZone: "Asia/Kolkata" }).replace(/\//g, '-');
    return date;
  }
  
  export default FormattedDate;
  
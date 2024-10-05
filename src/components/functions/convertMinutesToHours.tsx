function convertMinutesToHours(totalMinutes: number) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
  
    return `${hours}:${padTo2Digits(minutes)}`;
  }
  
  function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }


  export default convertMinutesToHours;
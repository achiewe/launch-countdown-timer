const daysText = document.getElementById('days');
const hoursText = document.getElementById('hours');
const minutesText = document.getElementById('minutes');
const secondsText = document.getElementById('seconds');



// Set the target date and time
const targetDate = new Date("2023-12-23T22:00:00").getTime();




const updateTimeRemaining = () => {
    // Get the current date and time
    const now = new Date().getTime();
  
    // Calculate the time remaining in milliseconds
    const timeRemaining = targetDate - now;
  
    // Calculate the days, hours, minutes, and seconds from the time remaining
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    if (timeRemaining <= 0) {
      // Set the values of days, hours, minutes, and seconds to 0
      daysText.innerHTML = "00";
      hoursText.innerHTML = "00";
      minutesText.innerHTML = "00";
      secondsText.innerHTML = "00";
      // Stop the interval from continuing to run
      clearInterval(intervalId);
    } else {
      // Update the text content of the HTML elements
      daysText.innerHTML = days.toString().padStart(2, '0');
      hoursText.innerHTML = hours.toString().padStart(2, '0');
      minutesText.innerHTML = minutes.toString().padStart(2, '0');
      secondsText.innerHTML = seconds.toString().padStart(2, '0');
    }
  }
  
  // Call the updateTimeRemaining function every second using setInterval
  const intervalId = setInterval(updateTimeRemaining, 1000);
  

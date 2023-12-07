function refreshTime() {
    const timeDisplay = document.getElementById("timer");
    const dateString = new Date().getTime();

    const releseDate = Date.parse('2023-12-23T13:00');
    const formattedString = releseDate - dateString;
    timeDisplay.textContent = '@RadonTM у тебя ' + Math.floor(formattedString/86400000) + ' дней ' + Math.floor((formattedString%86400000)/3600000) + ' часов ' + Math.floor((formattedString%3600000)/60000) + ' минут ' ;
}
setInterval(refreshTime, 100);

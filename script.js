let clockFunc = () => {
    var date = new Date(),
        hr = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        min = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        sec = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds(),
        ampm = (date.getHours() < 12) ? 'AM' : 'PM';
    //
    if (hr == 00) {
        hr = 12;
    } else if (hr > 12) {
        hr -= 12;
    }
    //
    document.querySelector('#time').innerHTML = hr + ':' + min + ':' + sec;
    document.querySelector('#ampm').innerHTML = ampm;
    //
    var dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        currentDate = dayArr[date.getDay()] + ', ' + monthArr[date.getMonth()] + ' ' + date.getDate();
    //
    document.querySelector('#date').innerHTML = currentDate;
};
clockFunc();
setInterval(clockFunc,1000);
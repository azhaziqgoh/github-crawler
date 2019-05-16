function dateConvert(val){
    let date = new Date(val),
    dayArray = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    monthArray = ['January','February','March','April','May','Jun','July','August','September','October','November','December'];

    return `Updated on ${dayArray[date.getDay()]} ${monthArray[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
}

export { dateConvert }
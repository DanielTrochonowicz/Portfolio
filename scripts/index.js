const bodySelector = document.querySelector('body');
const headerSelector = document.querySelector('header');
const footerSelector = document.querySelector('footer');
const toggleBackgroundButtonSelector = document.querySelector('.toggle-background');
const weatherSelector = document.querySelector('.weather');
const elements = [headerSelector, footerSelector];
const allElementsUnderline = document.querySelectorAll('.underline');
const photoSelector = document.querySelector('img');
const aLiAllSelectors = document.querySelectorAll('a');


toggleBackgroundButtonSelector.addEventListener('click', () => {
    if (bodySelector.classList.contains('background-white') == true) {
        bodySelector.classList.remove('background-white');
        bodySelector.classList.add('background-dark');
        elements.forEach(e => {
            e.classList.remove('background-blue'); 
            e.classList.add('background-yellow')
        });
        toggleBackgroundButtonSelector.setAttribute('style', 'background-color: #bb618e');
        photoSelector.setAttribute('style', 'box-shadow: 0.5rem 0.5rem 0.5rem 0.5rem #bb618e');
        weatherSelector.setAttribute('style', 'border: 0.5rem solid #bb618e');
        allElementsUnderline.forEach(e => e.classList.remove('underline'));
        allElementsUnderline.forEach(e => e.classList.add('underline-yellow'));
        mouseOverOutEvent('#d95798', '#bb618e');
          
    } else {
        bodySelector.classList.remove('background-dark');
        bodySelector.classList.add('background-white');
        elements.forEach(e => {
            e.classList.remove('background-yellow');
            e.classList.add('background-blue');   
        }); 
        toggleBackgroundButtonSelector.setAttribute('style', 'background-color: #9d7fa3');
        photoSelector.setAttribute('style', 'box-shadow: 0.5rem 0.5rem 0.5rem 0.5rem #9d7fa3');
        weatherSelector.setAttribute('style', 'border: 0.5rem solid #9d7fa3');
        allElementsUnderline.forEach(e => e.classList.remove('underline-yellow'));
        allElementsUnderline.forEach(e => e.classList.add('underline'));
        mouseOverOutEvent('#b388bd', '#9d7fa3');
    } 
});

const mouseOverOutEvent = (a, b) => {
    aLiAllSelectors.forEach(e => e['style']=`background-color: ${b}`); 
    aLiAllSelectors.forEach(e => e.addEventListener('mouseover', function() {
        return this['style'] = `background-color: ${a}`; }));
    aLiAllSelectors.forEach(e => e.addEventListener('mouseout', function() {
        return this['style'] = `background-color: ${b}`; })); 
}
  mouseOverOutEvent('#9d7fa3', '#9d7fa3', '#9d7fa3');



fetch('http://api.openweathermap.org/data/2.5/weather?q=Warsaw,pl&APPID=a9d7c891178a4fcf66448f723467b291')
.then(response => response.json())
.then(data => weatherSelector.innerHTML=`<div class="weather-conditions">Weather in ${data.name} (${data.sys.country}) on ${myDateFunction(data.dt)} is: 
<br><br>
<span>Temperature: ${Number.parseInt(data.main.temp)-273}<temperatura>&#8451;</span><span>Pressure: ${data.main.pressure}<cisnienie>kPa</span></span></div>`)



const myDateFunction = function(data) {
    const objectDate = new Date(data*1000);
    const dzien = ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday'];
    const miesiac = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septemeber', 'November', 'December'];
    
    const endingFunction = function() {
    let parameter = Number.parseInt(objectDate.getDate()%10);
     switch(parameter){
        case 1: return "st"; 
        case 2: return "nd"; 
        case 3: return "rd"; 
        default: return "th";     
    } 
}
    return `${dzien[objectDate.getDay()-1]} ${objectDate.getDate()}${endingFunction()} of ${miesiac[objectDate.getMonth()]} ${objectDate.getFullYear()}`;
}


console.log(2+1)
const inputValue = document.querySelector('.inputVal');
const button = document.querySelector('.btn');
const headingValue = document.querySelector('.heading');
const descValue = document.querySelector('.desc');
const tempValue = document.querySelector('.temp');
const imgEl = document.querySelector('img');

button.addEventListener('click', () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=cad7ec124945dcfff04e457e76760d90`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            let headVal = data['name'];
            let tempVal = data['main']['temp'];
            let descVal = data['weather'][0]['description'];
            let tempK = tempVal - 274.2;
            let tempConv = tempK.toFixed(0);

            headingValue.innerHTML = headVal;
            descValue.innerHTML = descVal;
            tempValue.innerHTML = tempConv + "°C";
        })
        .catch(err => alert("Wrong a city!"))
    if (inputValue.value !== "") {
        imgEl.style.display = "none";
    }
})






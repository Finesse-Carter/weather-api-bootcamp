let button = document.getElementById('button')
  button.addEventListener("click", ()=>{
    let search = document.getElementById("search").value
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search},usa&APPID=c83c75cbafcd4bc9184f90379531d26c`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
console.log(response);
document.getElementById('main').textContent = Math.floor(response.main.temp * 9/5-459.67)
document.getElementById('name').textContent = response.name
document.getElementById('country').textContent= response.sys.country
document.getElementById('weather').textContent= response.weather[0].description


})
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
      })
    });

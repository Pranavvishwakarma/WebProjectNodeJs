const cityname=document.getElementById('cityName')
const submitBtn=document.getElementById('submitBtn');
const city_name=document.getElementById('city_name')
const te_mp=document.getElementById('temp');
const datahide=document.querySelector('.middle_layer');
const getInfo=async(event)=>{

    event.preventDefault();
   
let cityvlaue=cityname.value
    if(cityvlaue===""){
       
        city_name.innerHTML=`Please write the name before search`
        datahide.classList.add('data_hide')
    } 
    else{
       try{
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityvlaue}&appid=28c6707f6d96c63bbaa918e00b8d7aa5`;
         
        const response= await fetch(url);
        const data=await response.json();
        const arrdata=[data];

        city_name.innerHTML=`${arrdata[0].name},${arrdata[0].sys.country}`
        const temperatureCelsius = arrdata[0].main.temp - 273.15;
        te_mp.innerHTML = `${temperatureCelsius.toFixed(2)} °C`;
        datahide.classList.remove('data_hide')
       }
       catch{
        city_name.innerHTML=`Please write the city name properly`
       datahide.classList.add('data_hide')
    }
    }
}
submitBtn.addEventListener('click',getInfo);
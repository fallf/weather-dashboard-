const key = 'c773946d61378df71adbe4fa6e9026e1'

const getCity = async (city) =>{

    const base = 'api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}'
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();
    console.log(data);
};

getCity('miami');
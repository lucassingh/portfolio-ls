import React, { useEffect, useState } from 'react';

const Wheater = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    {/*useEffect(() => {
        const fetchWeather = async () => {
            const options = {
                method: 'GET',
                headers: { accept: 'application/json', 'accept-encoding': 'deflate, gzip, br' },
            };

            try {
                const response = await fetch(
                    'https://api.tomorrow.io/v4/weather/realtime?location=Buenos%20Aires&apikey=zZFz1fphI4mYzCWvWRjlwJ9WjoSwAQPc',
                    options
                );
                if (response.status === 429) {
                    throw new Error('Too many request. Try again in a few minutes.');
                }

                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
                setError(error.message || 'Error to load data');
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);*/}

    const getWeatherSymbol = (weatherCode) => {
        const iconPath = "/assets/wheater/";

        switch (weatherCode) {
            case 1000:
                return <img src={`${iconPath}1-sunny.svg`} alt="Sunny" />;
            case 1100:
                return <img src={`${iconPath}2-part-cloudy.svg`} alt="Part cloudy" />;
            case 1101:
                return <img src={`${iconPath}3-mst-cloudy.svg`} alt="Mostly cloudy" />;
            case 1102:
                return <img src={`${iconPath}4-cloudy.svg`} alt="Cloudy" />;
            case 1001:
                return <img src={`${iconPath}5-rainy.svg`} alt="Rain" />;
            case 2000:
                return <img src={`${iconPath}6-foggy.svg`} alt="Fog" />;
            case 2100:
                return <img src={`${iconPath}7-full-rainy.svg`} alt="Light rain" />;
            case 4000:
                return <img src={`${iconPath}8-snowy.svg`} alt="Snow" />;
            case 4001:
                return <img src={`${iconPath}9-snowfall.svg`} alt="Snowfall" />;
            case 5000:
                return <img src={`${iconPath}10-extreme-rain.svg`} alt="Moderate rain" />;
            case 5001:
                return <img src={`${iconPath}11-electric-storm.svg`} alt="Hight rain" />;
            default:
                return <img src={`${iconPath}1-sunny.svg`} alt="Unknow" />;
        }
    };

    {/*if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!weatherData || !weatherData.data || !weatherData.data.values) {
        return <div>No data to show</div>;
    }*/}

    //const { temperature, humidity, weatherCode } = weatherData.data.values;

    return (
        <>
            <div className='flex flex-col md:flex-row justify-center items-center gap-3 md:gap-5'>
                <p className='text-xl md:text-3xl'>
                    Temperature: <span className='font-bold text-xl md:text-3xl'>29°C</span>
                </p>
                <p className='text-xl md:text-3xl'>
                    Humidity: <span className='font-bold text-xl md:text-3xl'>35%</span>
                </p>
                <img src={`/assets/wheater/1-sunny.svg`} width={40} alt="Sunny" />
            </div>
            {/*<div>
                <h1>Buenos Aires Weather {weatherData.location.name}</h1>
                <p>Temperatura: {temperature}°C</p>
                <p>Humedad: {humidity}%</p>
                <p>Estado del tiempo: {getWeatherSymbol(weatherCode)}</p>
            </div>*/}
        </>
    );
};

export default Wheater;
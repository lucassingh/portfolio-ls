import React, { useEffect, useState } from 'react';

const Wheater = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
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
                setError(error.message || 'Error loading data');
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    const getWeatherSymbol = (weatherCode) => {
        const iconPath = "/assets/wheater/";
        const weatherMap = {
            1000: { icon: `${iconPath}1-sunny.svg`, text: "Sunny" },
            1100: { icon: `${iconPath}2-part-cloudy.svg`, text: "Partly Cloudy" },
            1101: { icon: `${iconPath}3-mst-cloudy.svg`, text: "Mostly Cloudy" },
            1102: { icon: `${iconPath}4-cloudy.svg`, text: "Cloudy" },
            1001: { icon: `${iconPath}5-rainy.svg`, text: "Rain" },
            2000: { icon: `${iconPath}6-foggy.svg`, text: "Fog" },
            2100: { icon: `${iconPath}7-full-rainy.svg`, text: "Light Rain" },
            4000: { icon: `${iconPath}8-snowy.svg`, text: "Snow" },
            4001: { icon: `${iconPath}9-snowfall.svg`, text: "Snowfall" },
            5000: { icon: `${iconPath}10-extreme-rain.svg`, text: "Moderate Rain" },
            5001: { icon: `${iconPath}11-electric-storm.svg`, text: "Heavy Rain" },
        };

        return weatherMap[weatherCode] || { icon: `${iconPath}12-unknow.svg`, text: "Unknown" };
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!weatherData || !weatherData.data || !weatherData.data.values) {
        return <div>No data to show</div>;
    }

    const { temperature, humidity, weatherCode } = weatherData.data.values;
    const weatherInfo = getWeatherSymbol(weatherCode);

    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-3 md:gap-5'>
            <p className='text-xl md:text-3xl'>
                Temperature: <span className='font-bold text-xl md:text-3xl'>{temperature}°C</span>
            </p>
            <p className='text-xl md:text-3xl'>
                Humidity: <span className='font-bold text-xl md:text-3xl'>{humidity}%</span>
            </p>
            <p className='flex justify-center text-xl md:text-3xl'>
                <img className='px-2' src={weatherInfo.icon} alt={weatherInfo.text} />
                <span className='text-xl md:text-3xl'>{weatherInfo.text}</span>
            </p>
        </div>
    );
};

export default Wheater;

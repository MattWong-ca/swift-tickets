import styles from '../styles/index.module.css';
import { useEffect, useState } from 'react';

interface WeatherData {
    main: {
        temp: number;
    }
}

const API_KEY = '';

export default function Fetching() {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null); // or { main: { temp: 0 } }

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=12&lon=12&units=metric&appid=${API_KEY}')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setWeatherData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            {weatherData && (
                <div>
                    Temperature: {weatherData.main.temp}
                </div>
            )}
        </div>
    );
}
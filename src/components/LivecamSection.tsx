import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Cloud, Wind, Snowflake, Thermometer, Sun, CloudRain, CloudLightning, CloudFog, Compass } from 'lucide-react';
import imgLivecamPreview from "../assets/livecam-placeholder.png";

// WMO Weather interpretation codes (WW)
const getWeatherIcon = (code: number) => {
  if (code === 0) return Sun;
  if (code >= 1 && code <= 3) return Cloud;
  if (code >= 45 && code <= 48) return CloudFog;
  if (code >= 51 && code <= 67) return CloudRain;
  if (code >= 71 && code <= 77) return Snowflake;
  if (code >= 80 && code <= 82) return CloudRain;
  if (code >= 85 && code <= 86) return Snowflake;
  if (code >= 95 && code <= 99) return CloudLightning;
  return Cloud;
};

const getWeatherCondition = (code: number) => {
  if (code === 0) return 'Sonnig';
  if (code >= 1 && code <= 3) return 'Bewölkt';
  if (code >= 45 && code <= 48) return 'Nebel';
  if (code >= 51 && code <= 55) return 'Nieselregen';
  if (code >= 56 && code <= 57) return 'Gefrierender Nieselregen';
  if (code >= 61 && code <= 65) return 'Regen';
  if (code >= 66 && code <= 67) return 'Gefrierender Regen';
  if (code >= 71 && code <= 75) return 'Schneefall';
  if (code === 77) return 'Schneegriesel';
  if (code >= 80 && code <= 82) return 'Regenschauer';
  if (code >= 85 && code <= 86) return 'Schneeschauer';
  if (code >= 95 && code <= 99) return 'Gewitter';
  return 'Unbekannt';
};

const getWindDirection = (degrees: number) => {
  const directions = ['N', 'NO', 'O', 'SO', 'S', 'SW', 'W', 'NW'];
  const index = Math.round(degrees / 45) % 8;
  return directions[index];
};

interface WeatherData {
  current: {
    temp: number;
    condition: string;
    wind: number;
    humidity: number;
    windDirection: string;
    code: number;
  };
  forecast: Array<{
    day: string;
    date: string;
    temp: number;
    condition: string;
    icon: any;
  }>;
}

const initialWeatherData: WeatherData = {
  current: {
    temp: -5,
    condition: 'Lade...',
    wind: 15,
    humidity: 85,
    windDirection: 'N',
    code: 71,
  },
  forecast: [
    { day: 'Heute', date: '04.12.', temp: -5, condition: 'Schneefall', icon: Snowflake },
    { day: 'Morgen', date: '05.12.', temp: -3, condition: 'Bewölkt', icon: Cloud },
    { day: 'Freitag', date: '06.12.', temp: -7, condition: 'Schneeschauer', icon: Snowflake },
    { day: 'Samstag', date: '07.12.', temp: -4, condition: 'Sonnig', icon: Cloud },
  ],
};

export default function LivecamSection() {
  const [weatherData, setWeatherData] = useState<WeatherData>(initialWeatherData);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=46.87&longitude=8.43&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin'
        );
        const data = await response.json();

        const current = {
          temp: Math.round(data.current.temperature_2m),
          condition: getWeatherCondition(data.current.weather_code),
          wind: Math.round(data.current.wind_speed_10m),
          humidity: data.current.relative_humidity_2m,
          windDirection: getWindDirection(data.current.wind_direction_10m),
          code: data.current.weather_code,
        };

        const forecast = data.daily.time.slice(0, 4).map((time: string, index: number) => {
          const date = new Date(time);
          const dayName = index === 0 ? 'Heute' : index === 1 ? 'Morgen' : date.toLocaleDateString('de-DE', { weekday: 'long' });
          const dateString = date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' }) + '.';
          const code = data.daily.weather_code[index];

          return {
            day: dayName,
            date: dateString,
            temp: Math.round(data.daily.temperature_2m_max[index]), // Using max temp for simplicity
            condition: getWeatherCondition(code),
            icon: getWeatherIcon(code),
          };
        });

        setWeatherData({ current, forecast });
      } catch (error) {
        console.error('Failed to fetch weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  const CurrentIcon = getWeatherIcon(weatherData.current.code);

  return (
    <section id="livecam" className="py-20 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-12 border-b-2 border-gray-300 pb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Livecam & Wetter
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Livecam Placeholder */}
            <div className="lg:col-span-1">
              <a
                href="https://roundshot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-md overflow-hidden shadow-lg group cursor-pointer"
              >
                <div className="aspect-[4/3] w-full relative">
                  <img
                    src={imgLivecamPreview}
                    alt="Livecam Bannalpsee"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-end gap-4">
                      <CurrentIcon className="w-12 h-12 text-white" />
                      <div>
                        <div className="text-3xl font-bold leading-none mb-1">{weatherData.current.temp}°C</div>
                        <div className="text-sm uppercase tracking-wider opacity-90">{weatherData.current.condition}</div>
                      </div>
                    </div>
                  </div>

                  {/* Play Icon Overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full border border-white/50">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </a>

              <div className="space-y-4 mt-8">
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
                  <div className="flex items-center gap-2">
                    <Wind className="text-black" size={20} />
                    <span className="uppercase tracking-wide" style={{ fontSize: '12px' }}>Wind</span>
                  </div>
                  <span style={{ fontSize: '13px' }}>{weatherData.current.wind} km/h</span>
                </div>

                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
                  <div className="flex items-center gap-2">
                    <Compass className="text-black" size={20} />
                    <span className="uppercase tracking-wide" style={{ fontSize: '12px' }}>Windrichtung</span>
                  </div>
                  <span style={{ fontSize: '13px' }}>{weatherData.current.windDirection}</span>
                </div>

                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
                  <div className="flex items-center gap-2">
                    <Thermometer className="text-black" size={20} />
                    <span className="uppercase tracking-wide" style={{ fontSize: '12px' }}>Luftfeuchtigkeit</span>
                  </div>
                  <span style={{ fontSize: '13px' }}>{weatherData.current.humidity}%</span>
                </div>
              </div>
            </div>

            {/* Forecast */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-md shadow-lg p-8">
                <h3 className="mb-6 border-b border-gray-200 pb-3 uppercase tracking-wider">
                  Wettervorhersage
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {weatherData.forecast.map((day, index) => {
                    const Icon = day.icon;
                    return (
                      <motion.div
                        key={day.day}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center p-4 border border-gray-200 rounded-md hover:border-gray-400 hover:shadow-md transition-all"
                      >
                        <div className="text-gray-500 text-xs mb-1">{day.date}</div>
                        <div className="text-gray-600 mb-3 uppercase tracking-wider" style={{ fontSize: '11px' }}>{day.day}</div>
                        <Icon className="w-12 h-12 mx-auto text-black mb-3" />
                        <div className="mb-2" style={{ fontSize: '1.5rem' }}>{day.temp}°C</div>
                        <div className="text-gray-600 uppercase tracking-wide" style={{ fontSize: '10px' }}>{day.condition}</div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-8 p-6 bg-black text-white rounded-md shadow-md">
                  <h4 className="mb-2 uppercase tracking-wider" style={{ fontSize: '12px' }}>
                    Pistenverhältnisse
                  </h4>
                  <p style={{ fontSize: '13px' }}>Ausgezeichnet - Alle Pisten frisch präpariert</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
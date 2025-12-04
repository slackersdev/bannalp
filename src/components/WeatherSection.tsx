import { motion } from 'motion/react';
import { Cloud, Wind, Snowflake, Thermometer } from 'lucide-react';

const weatherData = {
  current: {
    temp: -5,
    condition: 'Schneefall',
    wind: 15,
    humidity: 85,
    snowHeight: 45,
  },
  forecast: [
    { day: 'Heute', temp: -5, condition: 'Schneefall', icon: Snowflake },
    { day: 'Morgen', temp: -3, condition: 'Bewölkt', icon: Cloud },
    { day: 'Freitag', temp: -7, condition: 'Schneeschauer', icon: Snowflake },
    { day: 'Samstag', temp: -4, condition: 'Sonnig', icon: Cloud },
  ],
};

export default function WeatherSection() {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-['Krona_One:Regular',sans-serif] mb-12 border-b-2 border-gray-300 pb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Wetter & Schneebericht
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Current Weather */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-md shadow-lg p-8">
                <div className="text-center mb-6 border-b border-gray-200 pb-6">
                  <Snowflake className="w-20 h-20 mx-auto text-black mb-4" />
                  <div className="mb-2" style={{ fontSize: '4rem', lineHeight: '1' }}>{weatherData.current.temp}°C</div>
                  <div className="text-gray-600 uppercase tracking-wider" style={{ fontSize: '12px' }}>{weatherData.current.condition}</div>
                </div>

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
                      <Snowflake className="text-black" size={20} />
                      <span className="uppercase tracking-wide" style={{ fontSize: '12px' }}>Schneehöhe</span>
                    </div>
                    <span style={{ fontSize: '13px' }}>{weatherData.current.snowHeight} cm</span>
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
            </div>

            {/* Forecast */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-md shadow-lg p-8">
                <h3 className="font-['Krona_One:Regular',sans-serif] mb-6 border-b border-gray-200 pb-3 uppercase tracking-wider">
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
                        <div className="text-gray-600 mb-3 uppercase tracking-wider" style={{ fontSize: '11px' }}>{day.day}</div>
                        <Icon className="w-12 h-12 mx-auto text-black mb-3" />
                        <div className="mb-2" style={{ fontSize: '1.5rem' }}>{day.temp}°C</div>
                        <div className="text-gray-600 uppercase tracking-wide" style={{ fontSize: '10px' }}>{day.condition}</div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-8 p-6 bg-black text-white rounded-md shadow-md">
                  <h4 className="font-['Krona_One:Regular',sans-serif] mb-2 uppercase tracking-wider" style={{ fontSize: '12px' }}>
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
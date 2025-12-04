import { motion } from 'motion/react';
import { Circle, Sun, Snowflake, Cable, User, Utensils, Bike, Camera, MoreHorizontal, X } from 'lucide-react';
import { useState } from 'react';
import imgBergbahnenOutline from "figma:asset/4240127d035aa74e045e43dcf529229afaa4d4fa.png";

const lifts = [
  { 
    id: 1, 
    name: 'Gondelbahn Talstation - Mittelstation', 
    type: 'Gondelbahn',
    status: 'open', 
    path: 'M 15 85 Q 30 75, 45 65',
    stations: [
      { x: '15%', y: '85%', label: 'Talstation', showLabel: true },
      { x: '30%', y: '75%', isMid: true },
      { x: '45%', y: '65%', label: 'Mittelstation', showLabel: true }
    ]
  },
  { 
    id: 2, 
    name: 'Gondelbahn Mittelstation - Bergstation', 
    type: 'Gondelbahn',
    status: 'open', 
    path: 'M 45 65 Q 55 55, 65 45',
    stations: [
      { x: '45%', y: '65%', label: 'Mittelstation', showLabel: false },
      { x: '55%', y: '55%', isMid: true },
      { x: '65%', y: '45%', label: 'Bergstation', showLabel: true }
    ]
  },
  { 
    id: 3, 
    name: 'Schlepplift Nord', 
    type: 'Schlepplift',
    status: 'closed', 
    path: 'M 25 70 Q 35 60, 40 50',
    stations: [
      { x: '25%', y: '70%', label: 'Nord Start', showLabel: false },
      { x: '35%', y: '60%', isMid: true },
      { x: '40%', y: '50%', label: 'Nord Ende', showLabel: false }
    ]
  },
  { 
    id: 4, 
    name: 'Schlepplift Süd', 
    type: 'Schlepplift',
    status: 'closed', 
    path: 'M 55 75 Q 65 65, 70 55',
    stations: [
      { x: '55%', y: '75%', label: 'Süd Start', showLabel: false },
      { x: '65%', y: '65%', isMid: true },
      { x: '70%', y: '55%', label: 'Süd Ende', showLabel: false }
    ]
  },
  { 
    id: 5, 
    name: 'Gipfellift Express', 
    type: 'Sessellift',
    status: 'open', 
    path: 'M 65 45 Q 72 35, 78 25',
    stations: [
      { x: '65%', y: '45%', label: 'Bergstation', showLabel: false },
      { x: '72%', y: '35%', isMid: true },
      { x: '78%', y: '25%', label: 'Gipfel', showLabel: true }
    ]
  },
];

const summerRoutes = [
  { 
    id: 1, 
    name: 'Panorama Wanderweg', 
    type: 'Wanderweg',
    difficulty: 'mittel',
    path: 'M 20 80 Q 40 70, 60 60 Q 70 50, 75 30',
    color: '#16a34a',
    stations: [
      { x: '20%', y: '80%', label: 'Start', showLabel: true },
      { x: '40%', y: '70%', isMid: true },
      { x: '60%', y: '60%', isMid: true },
      { x: '75%', y: '30%', label: 'Aussichtspunkt', showLabel: true }
    ]
  },
  { 
    id: 2, 
    name: 'Gipfelweg', 
    type: 'Wanderweg',
    difficulty: 'schwer',
    path: 'M 50 70 Q 65 55, 78 25',
    color: '#991b1b',
    stations: [
      { x: '50%', y: '70%', label: 'Bergstation', showLabel: false },
      { x: '65%', y: '55%', isMid: true },
      { x: '78%', y: '25%', label: 'Gipfel', showLabel: true }
    ]
  },
  { 
    id: 3, 
    name: 'Bike Trail Nord', 
    type: 'Mountainbike',
    difficulty: 'mittel',
    path: 'M 30 75 Q 40 65, 50 55 Q 55 45, 60 35',
    color: '#9333ea',
    stations: [
      { x: '30%', y: '75%', label: 'Trail Start', showLabel: false },
      { x: '40%', y: '65%', isMid: true },
      { x: '50%', y: '55%', isMid: true },
      { x: '60%', y: '35%', label: 'Trail Ende', showLabel: false }
    ]
  },
  { 
    id: 4, 
    name: 'Familienweg', 
    type: 'Wanderweg',
    difficulty: 'leicht',
    path: 'M 15 85 Q 25 80, 35 75 Q 42 70, 45 65',
    color: '#0ea5e9',
    stations: [
      { x: '15%', y: '85%', label: 'Talstation', showLabel: true },
      { x: '25%', y: '80%', isMid: true },
      { x: '35%', y: '75%', isMid: true },
      { x: '45%', y: '65%', label: 'Rastplatz', showLabel: false }
    ]
  },
];

export default function LiftStatusSection() {
  const [hoveredLift, setHoveredLift] = useState<number | null>(null);
  const [season, setSeason] = useState<'winter' | 'summer'>('winter');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <section id="lifts" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-['Krona_One:Regular',sans-serif] mb-12 border-b-2 border-gray-300 pb-4" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
            Unsere Lifte
          </h2>
        </motion.div>
      </div>

      {/* Full Width Mountain Map */}
      <div className="relative w-full mb-12">
        <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px]">
          <img 
            src={imgBergbahnenOutline} 
            alt={season === 'winter' ? 'Winterkarte' : 'Sommerkarte'} 
            className="w-full h-full object-cover"
          />

          {/* Icon Toolbar - Positioned on the left side of the map */}
          <div className="absolute top-6 left-6 flex flex-col gap-2 z-20">
            {/* Close/Reset Button */}
            <button
              onClick={() => setActiveFilters([])}
              className={`w-12 h-12 rounded-md flex items-center justify-center transition-all shadow-lg ${
                activeFilters.length > 0
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-white/90 text-gray-400 hover:bg-white cursor-not-allowed'
              }`}
              disabled={activeFilters.length === 0}
            >
              <X size={20} />
            </button>

            {/* Season Toggle Buttons */}
            <button
              onClick={() => setSeason('summer')}
              className={`w-12 h-12 rounded-md flex items-center justify-center transition-all shadow-lg ${
                season === 'summer'
                  ? 'bg-orange-500 text-white'
                  : 'bg-white/90 text-gray-700 hover:bg-white'
              }`}
              title="Sommer"
            >
              <Sun size={20} />
            </button>

            <button
              onClick={() => setSeason('winter')}
              className={`w-12 h-12 rounded-md flex items-center justify-center transition-all shadow-lg ${
                season === 'winter'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/90 text-gray-700 hover:bg-white'
              }`}
              title="Winter"
            >
              <Snowflake size={20} />
            </button>

            {/* Activity Filter Buttons */}
            <div className="h-px bg-gray-300 my-1"></div>

            <button
              onClick={() => toggleFilter('lifts')}
              className={`w-12 h-12 rounded-md flex items-center justify-center transition-all shadow-lg ${
                activeFilters.includes('lifts')
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/90 text-gray-700 hover:bg-white'
              }`}
              title="Lifte & Bergbahnen"
            >
              <Cable size={20} />
            </button>

            <button
              onClick={() => toggleFilter('hiking')}
              className={`w-12 h-12 rounded-md flex items-center justify-center transition-all shadow-lg ${
                activeFilters.includes('hiking')
                  ? 'bg-green-600 text-white'
                  : 'bg-white/90 text-gray-700 hover:bg-white'
              }`}
              title="Wanderwege"
            >
              <User size={20} />
            </button>

            <button
              onClick={() => toggleFilter('restaurants')}
              className={`w-12 h-12 rounded-md flex items-center justify-center transition-all shadow-lg ${
                activeFilters.includes('restaurants')
                  ? 'bg-amber-600 text-white'
                  : 'bg-white/90 text-gray-700 hover:bg-white'
              }`}
              title="Gastronomie"
            >
              <Utensils size={20} />
            </button>

            <button
              onClick={() => toggleFilter('biking')}
              className={`w-12 h-12 rounded-md flex items-center justify-center transition-all shadow-lg ${
                activeFilters.includes('biking')
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/90 text-gray-700 hover:bg-white'
              }`}
              title="Mountainbike"
            >
              <Bike size={20} />
            </button>

            <button
              onClick={() => toggleFilter('viewpoints')}
              className={`w-12 h-12 rounded-md flex items-center justify-center transition-all shadow-lg ${
                activeFilters.includes('viewpoints')
                  ? 'bg-teal-600 text-white'
                  : 'bg-white/90 text-gray-700 hover:bg-white'
              }`}
              title="Aussichtspunkte"
            >
              <Camera size={20} />
            </button>

            <button
              onClick={() => toggleFilter('more')}
              className={`w-12 h-12 rounded-md flex items-center justify-center transition-all shadow-lg ${
                activeFilters.includes('more')
                  ? 'bg-gray-600 text-white'
                  : 'bg-white/90 text-gray-700 hover:bg-white'
              }`}
              title="Weitere Aktivitäten"
            >
              <MoreHorizontal size={20} />
            </button>
          </div>
          
          {/* SVG Overlay for Lift Routes - Only show in winter */}
          {season === 'winter' && (
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {lifts.map((lift) => (
                <g key={lift.id}>
                  {/* Lift route path */}
                  <motion.path
                    d={lift.path}
                    stroke={lift.status === 'open' ? '#16a34a' : '#991b1b'}
                    strokeWidth={hoveredLift === lift.id ? '1.2' : '0.8'}
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={lift.status === 'open' ? '0' : '3 3'}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: hoveredLift === lift.id ? 1 : 0.8 }}
                    transition={{ duration: 1.5, delay: lift.id * 0.2 }}
                  />
                </g>
              ))}
            </svg>
          )}

          {/* Interactive Station Markers - Only show in winter */}
          {season === 'winter' && lifts.map((lift) => (
            <div key={`markers-${lift.id}`}>
              {lift.stations.map((station, idx) => (
                <div
                  key={`${lift.id}-${idx}`}
                  className="absolute pointer-events-auto"
                  style={{ 
                    left: station.x, 
                    top: station.y,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onMouseEnter={() => setHoveredLift(lift.id)}
                  onMouseLeave={() => setHoveredLift(null)}
                >
                  <div className="relative group cursor-pointer">
                    {/* Marker dot */}
                    <div className={`${station.isMid ? 'w-3 h-3 border-2' : 'w-6 h-6 border-4'} rounded-full border-white shadow-lg transition-all ${
                      lift.status === 'open' 
                        ? 'bg-green-700' 
                        : 'bg-red-900'
                    } ${hoveredLift === lift.id ? 'ring-4 ring-black/20' : ''}`}>
                    </div>
                    
                    {/* Station label always visible */}
                    {station.showLabel && (
                      <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-white rounded-md shadow-md px-3 py-1.5 whitespace-nowrap uppercase tracking-wide" style={{ fontSize: '11px' }}>
                        {station.label}
                      </div>
                    )}
                    
                    {/* Detailed tooltip on hover for first station */}
                    {idx === 0 && (
                      <div className="absolute left-1/2 -translate-x-1/2 -top-24 bg-black text-white px-5 py-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 shadow-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`flex items-center justify-center w-8 h-8 rounded-md font-['Krona_One:Regular',sans-serif] text-white ${
                            lift.status === 'open' ? 'bg-green-700' : 'bg-red-900'
                          }`}>
                            {lift.id}
                          </div>
                          <Circle
                            className={`${
                              lift.status === 'open' 
                                ? 'fill-green-700 text-green-700' 
                                : 'fill-red-900 text-red-900'
                            }`}
                            size={14}
                          />
                        </div>
                        <div className="mb-1 uppercase tracking-wide" style={{ fontSize: '11px' }}>{lift.name}</div>
                        <div className="text-gray-300 uppercase" style={{ fontSize: '10px' }}>{lift.type}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Legend - Only show in winter */}
          {season === 'winter' && (
            <div className="absolute bottom-6 right-6 bg-white rounded-md shadow-lg p-4">
              <h4 className="font-['Krona_One:Regular',sans-serif] mb-3 uppercase tracking-wider" style={{ fontSize: '12px' }}>Legende</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-1 bg-green-700 rounded-full"></div>
                  <span className="uppercase tracking-wide" style={{ fontSize: '11px' }}>Geöffnet</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-1 bg-red-900 rounded-full" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #7f1d1d 0, #7f1d1d 4px, transparent 4px, transparent 8px)' }}></div>
                  <span className="uppercase tracking-wide" style={{ fontSize: '11px' }}>Geschlossen</span>
                </div>
              </div>
            </div>
          )}

          {/* Summer Routes Overlay */}
          {season === 'summer' && (
            <>
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {summerRoutes.map((route) => (
                  <g key={route.id}>
                    <motion.path
                      d={route.path}
                      stroke={route.color}
                      strokeWidth={hoveredLift === route.id ? '1.2' : '0.8'}
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: hoveredLift === route.id ? 1 : 0.8 }}
                      transition={{ duration: 1.5, delay: route.id * 0.2 }}
                    />
                  </g>
                ))}
              </svg>

              {/* Summer Route Markers */}
              {summerRoutes.map((route) => (
                <div key={`markers-${route.id}`}>
                  {route.stations.map((station, idx) => (
                    <div
                      key={`${route.id}-${idx}`}
                      className="absolute pointer-events-auto"
                      style={{ 
                        left: station.x, 
                        top: station.y,
                        transform: 'translate(-50%, -50%)'
                      }}
                      onMouseEnter={() => setHoveredLift(route.id)}
                      onMouseLeave={() => setHoveredLift(null)}
                    >
                      <div className="relative group cursor-pointer">
                        {/* Marker dot */}
                        <div 
                          className={`${station.isMid ? 'w-3 h-3 border-2' : 'w-6 h-6 border-4'} rounded-full border-white shadow-lg transition-all ${
                            hoveredLift === route.id ? 'ring-4 ring-black/20' : ''
                          }`}
                          style={{ backgroundColor: route.color }}
                        >
                        </div>
                        
                        {/* Station label always visible */}
                        {station.showLabel && (
                          <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-white rounded-md shadow-md px-3 py-1.5 whitespace-nowrap uppercase tracking-wide" style={{ fontSize: '11px' }}>
                            {station.label}
                          </div>
                        )}
                        
                        {/* Detailed tooltip on hover for first station */}
                        {idx === 0 && (
                          <div className="absolute left-1/2 -translate-x-1/2 -top-24 bg-black text-white px-5 py-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 shadow-lg">
                            <div className="flex items-center gap-3 mb-2">
                              <div 
                                className="flex items-center justify-center w-8 h-8 rounded-md font-['Krona_One:Regular',sans-serif] text-white"
                                style={{ backgroundColor: route.color }}
                              >
                                {route.id}
                              </div>
                              <Circle
                                className="fill-current"
                                size={14}
                                style={{ color: route.color }}
                              />
                            </div>
                            <div className="mb-1 uppercase tracking-wide" style={{ fontSize: '11px' }}>{route.name}</div>
                            <div className="text-gray-300 uppercase" style={{ fontSize: '10px' }}>
                              {route.type} • {route.difficulty}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              {/* Summer Legend */}
              <div className="absolute bottom-6 right-6 bg-white rounded-md shadow-lg p-4">
                <h4 className="font-['Krona_One:Regular',sans-serif] mb-3 uppercase tracking-wider" style={{ fontSize: '12px' }}>Legende</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-1 bg-green-700 rounded-full"></div>
                    <span className="uppercase tracking-wide" style={{ fontSize: '11px' }}>Wanderweg Mittel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-1 bg-red-900 rounded-full"></div>
                    <span className="uppercase tracking-wide" style={{ fontSize: '11px' }}>Wanderweg Schwer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-1 rounded-full" style={{ backgroundColor: '#9333ea' }}></div>
                    <span className="uppercase tracking-wide" style={{ fontSize: '11px' }}>Bike Trail</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-1 rounded-full" style={{ backgroundColor: '#0ea5e9' }}></div>
                    <span className="uppercase tracking-wide" style={{ fontSize: '11px' }}>Familienweg</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Status List Below Map - Only show in winter */}
      {season === 'winter' && (
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="bg-white rounded-md shadow-lg p-8">
                <h3 className="font-['Krona_One:Regular',sans-serif] mb-6 border-b border-gray-200 pb-3 uppercase tracking-wider">
                  Live Status
                </h3>
                <div className="space-y-4">
                  {lifts.map((lift, index) => (
                    <motion.div
                      key={lift.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      onMouseEnter={() => setHoveredLift(lift.id)}
                      onMouseLeave={() => setHoveredLift(null)}
                      className={`flex items-center justify-between p-4 rounded-md border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all cursor-pointer ${
                        hoveredLift === lift.id ? 'border-gray-400 shadow-md bg-gray-50' : ''
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-md font-['Krona_One:Regular',sans-serif] text-white ${
                          lift.status === 'open' ? 'bg-green-700' : 'bg-red-900'
                        }`}>
                          {lift.id}
                        </div>
                        <span className="uppercase tracking-wide" style={{ fontSize: '13px' }}>{lift.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Circle
                          className={`${
                            lift.status === 'open' 
                              ? 'fill-green-700 text-green-700' 
                              : 'fill-red-900 text-red-900'
                          }`}
                          size={12}
                        />
                        <span className={`uppercase tracking-wider ${lift.status === 'open' ? 'text-green-700' : 'text-red-900'}`} style={{ fontSize: '11px' }}>
                          {lift.status === 'open' ? 'Geöffnet' : 'Geschlossen'}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between text-gray-600 uppercase tracking-wider" style={{ fontSize: '11px' }}>
                    <span>Letzte Aktualisierung:</span>
                    <span>{new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-black text-white rounded-md shadow-lg p-8">
              <h4 className="font-['Krona_One:Regular',sans-serif] mb-4 border-b border-gray-700 pb-3 uppercase tracking-wider">
                Betriebszeiten
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="uppercase tracking-wide" style={{ fontSize: '13px' }}>Montag - Freitag:</span>
                  <span style={{ fontSize: '13px' }}>08:30 - 16:30</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="uppercase tracking-wide" style={{ fontSize: '13px' }}>Samstag - Sonntag:</span>
                  <span style={{ fontSize: '13px' }}>08:00 - 17:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
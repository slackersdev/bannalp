import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Facility {
    name: string;
    status: 'open' | 'closed';
}

export interface FacilityStatus {
    luftseilbahn: Facility[];
    wanderweg: Facility[];
    alpwirtschaft: Facility[];
    berggasthaus: Facility[];
    skilift: Facility[];
    schneeschuhpfad: Facility[];
    schneebar: Facility[];
}

interface StatusContextType {
    yearRoundFacilities: {
        luftseilbahn: Facility[];
        wanderweg: Facility[];
        alpwirtschaft: Facility[];
        berggasthaus: Facility[];
    };
    winterFacilities: {
        skilift: Facility[];
        schneeschuhpfad: Facility[];
        schneebar: Facility[];
    };
    updateStatus: (category: keyof FacilityStatus, index: number, newStatus: 'open' | 'closed') => Promise<void>;
}

const StatusContext = createContext<StatusContextType | undefined>(undefined);

const STORAGE_KEY = 'bannalp_facility_status';

// Default facility data
const defaultYearRoundFacilities = {
    luftseilbahn: [
        { name: 'Fell-Chrüzhütte, Bannalp', status: 'open' as const },
        { name: 'Fellboden-Bannalpsee', status: 'open' as const }
    ],
    wanderweg: [
        { name: 'Zwärgliweg (Kinderwanderweg)', status: 'open' as const },
        { name: 'Walenpfad (Höhenwanderweg)', status: 'open' as const }
    ],
    alpwirtschaft: [
        { name: 'Lägernbeiz', status: 'open' as const },
        { name: 'Chrüzhütte', status: 'open' as const },
        { name: 'Oberfeld', status: 'closed' as const },
        { name: 'Alp Haghütte (Alpbeiz mit Käserei)', status: 'open' as const }
    ],
    berggasthaus: [
        { name: 'Heimelig', status: 'open' as const },
        { name: 'Urnerstaffel', status: 'open' as const },
        { name: 'Bannalpsee', status: 'closed' as const }
    ]
};

const defaultWinterFacilities = {
    skilift: [
        { name: 'Chrüzhütte-Nätschboden', status: 'open' as const },
        { name: 'Urnerstaffel-Nätschboden', status: 'closed' as const }
    ],
    schneeschuhpfad: [
        { name: 'Chrüzhütte-Nätschboden', status: 'open' as const },
        { name: 'Chrüzhütte-Bannalpsee-Urnerstaffel', status: 'open' as const },
        { name: 'Chrüzhütte', status: 'open' as const }
    ],
    schneebar: [
        { name: 'Nätschboden', status: 'open' as const }
    ]
};

export function StatusProvider({ children }: { children: ReactNode }) {
    const [yearRoundFacilities, setYearRoundFacilities] = useState(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                const data = JSON.parse(stored);
                return data.yearRound || defaultYearRoundFacilities;
            } catch {
                return defaultYearRoundFacilities;
            }
        }
        return defaultYearRoundFacilities;
    });

    const [winterFacilities, setWinterFacilities] = useState(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                const data = JSON.parse(stored);
                return data.winter || defaultWinterFacilities;
            } catch {
                return defaultWinterFacilities;
            }
        }
        return defaultWinterFacilities;
    });

    // Listen for updates from other tabs (storage event)
    useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === STORAGE_KEY && e.newValue) {
                try {
                    const data = JSON.parse(e.newValue);
                    if (data.yearRound) setYearRoundFacilities(data.yearRound);
                    if (data.winter) setWinterFacilities(data.winter);
                } catch (error) {
                    console.error('Failed to sync status:', error);
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const updateStatus = async (category: keyof FacilityStatus, index: number, newStatus: 'open' | 'closed') => {
        const isYearRound = ['luftseilbahn', 'wanderweg', 'alpwirtschaft', 'berggasthaus'].includes(category);

        if (isYearRound) {
            setYearRoundFacilities(prev => {
                const updated = {
                    ...prev,
                    [category]: prev[category as keyof typeof prev].map((facility, i) =>
                        i === index ? { ...facility, status: newStatus } : facility
                    )
                };

                // Save to localStorage
                const data = {
                    yearRound: updated,
                    winter: winterFacilities,
                    lastUpdated: new Date().toISOString()
                };
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

                return updated;
            });
        } else {
            setWinterFacilities(prev => {
                const updated = {
                    ...prev,
                    [category]: prev[category as keyof typeof prev].map((facility, i) =>
                        i === index ? { ...facility, status: newStatus } : facility
                    )
                };

                // Save to localStorage
                const data = {
                    yearRound: yearRoundFacilities,
                    winter: updated,
                    lastUpdated: new Date().toISOString()
                };
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

                return updated;
            });
        }
    };

    return (
        <StatusContext.Provider
            value={{
                yearRoundFacilities,
                winterFacilities,
                updateStatus
            }}
        >
            {children}
        </StatusContext.Provider>
    );
}

export function useStatus() {
    const context = useContext(StatusContext);
    if (!context) {
        throw new Error('useStatus must be used within StatusProvider');
    }
    return context;
}

import { useState, useEffect } from "react";
import { useStatus } from "../contexts/StatusContext";
import { ArrowLeft, LogOut } from "lucide-react";
import imgLogo from "../assets/logo/Bannalp_logo.png";

interface AdminStatusPageProps {
    onBack: () => void;
}

export default function AdminStatusPage({ onBack }: AdminStatusPageProps) {
    const { yearRoundFacilities, winterFacilities, updateStatus } = useStatus();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const auth = sessionStorage.getItem("admin_auth");
        if (auth === "true") {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "bannalp") {
            setIsAuthenticated(true);
            sessionStorage.setItem("admin_auth", "true");
            setError("");
        } else {
            setError("Falsches Passwort");
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem("admin_auth");
        setPassword("");
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
                <div className="w-full max-w-[400px] bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="p-10">
                        <div className="flex justify-center mb-8">
                            <img src={imgLogo} alt="Bannalp Logo" className="h-16 w-auto" />
                        </div>
                        <h2 className="text-xl font-bold text-center text-gray-900 mb-2 uppercase tracking-wider">
                            Admin Login
                        </h2>
                        <p className="text-center text-gray-500 mb-8 text-xs uppercase tracking-widest">
                            Status Verwaltung
                        </p>

                        <form onSubmit={handleLogin} className="space-y-5">
                            <div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none transition-all bg-gray-50 text-sm placeholder:text-gray-400"
                                    placeholder="PASSWORT EINGEBEN"
                                />
                                {error && (
                                    <p className="mt-2 text-xs text-red-600 uppercase tracking-wide font-medium text-center">{error}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gray-900 hover:bg-black text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 uppercase tracking-widest text-xs"
                            >
                                Anmelden
                            </button>
                        </form>

                        <div className="mt-8 text-center">
                            <button
                                onClick={onBack}
                                className="text-[10px] text-gray-400 hover:text-gray-600 font-medium uppercase tracking-widest transition-colors"
                            >
                                ← Zurück zur Website
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans pb-20">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={onBack}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            title="Zurück"
                        >
                            <ArrowLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        <h1 className="text-lg font-bold text-gray-900 uppercase tracking-wider">Status Verwaltung</h1>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors uppercase tracking-wider"
                    >
                        <LogOut className="w-4 h-4" />
                        Abmelden
                    </button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-12">
                <div className="grid lg:grid-cols-2 gap-8">

                    {/* Left Column - Year Round (White) */}
                    <div className="bg-white rounded-md shadow-lg p-8">
                        <h4 className="mb-8 border-b border-gray-200 pb-4 uppercase tracking-wider text-xl font-light text-gray-900">
                            Ganzjährig
                        </h4>

                        <div className="space-y-8">
                            {/* Helper to render sections */}
                            {[
                                { key: 'luftseilbahn', label: 'Luftseilbahn', data: yearRoundFacilities.luftseilbahn },
                                { key: 'wanderweg', label: 'Wanderweg', data: yearRoundFacilities.wanderweg },
                                { key: 'alpwirtschaft', label: 'Alpwirtschaft', data: yearRoundFacilities.alpwirtschaft },
                                { key: 'berggasthaus', label: 'Berggasthaus', data: yearRoundFacilities.berggasthaus },
                            ].map((section) => (
                                <div key={section.key}>
                                    <h5 className="mb-4 font-semibold uppercase tracking-wide text-xs text-gray-500">{section.label}</h5>
                                    <div className="space-y-3">
                                        {section.data.map((facility, idx) => (
                                            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-gray-50 rounded-md border border-gray-100">
                                                <span className="text-sm font-medium text-gray-900">{facility.name}</span>
                                                <div className="flex items-center gap-2 shrink-0">
                                                    <button
                                                        onClick={() => updateStatus(section.key as any, idx, 'open')}
                                                        className={`px-3 py-1.5 rounded text-xs font-medium uppercase tracking-wide transition-all ${facility.status === 'open'
                                                            ? 'bg-green-600 text-white shadow-sm'
                                                            : 'bg-white text-gray-400 border border-gray-200 hover:border-gray-300'
                                                            }`}
                                                    >
                                                        Offen
                                                    </button>
                                                    <button
                                                        onClick={() => updateStatus(section.key as any, idx, 'closed')}
                                                        className={`px-3 py-1.5 rounded text-xs font-medium uppercase tracking-wide transition-all ${facility.status === 'closed'
                                                            ? 'bg-red-600 text-white shadow-sm'
                                                            : 'bg-white text-gray-400 border border-gray-200 hover:border-gray-300'
                                                            }`}
                                                    >
                                                        Geschlossen
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Winter (White) */}
                    <div className="bg-white rounded-md shadow-lg p-8">
                        <h4 className="mb-8 border-b border-gray-200 pb-4 uppercase tracking-wider text-xl font-light text-gray-900">
                            Winter
                        </h4>

                        <div className="space-y-8">
                            {[
                                { key: 'skilift', label: 'Skilift', data: winterFacilities.skilift },
                                { key: 'schneeschuhpfad', label: 'Schneeschuhpfad', data: winterFacilities.schneeschuhpfad },
                                { key: 'schneebar', label: 'Schneebar', data: winterFacilities.schneebar },
                            ].map((section) => (
                                <div key={section.key}>
                                    <h5 className="mb-4 font-semibold uppercase tracking-wide text-xs text-gray-500">{section.label}</h5>
                                    <div className="space-y-3">
                                        {section.data.map((facility, idx) => (
                                            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-gray-50 rounded-md border border-gray-100">
                                                <span className="text-sm font-medium text-gray-900">{facility.name}</span>
                                                <div className="flex items-center gap-2 shrink-0">
                                                    <button
                                                        onClick={() => updateStatus(section.key as any, idx, 'open')}
                                                        className={`px-3 py-1.5 rounded text-xs font-medium uppercase tracking-wide transition-all ${facility.status === 'open'
                                                            ? 'bg-green-600 text-white shadow-sm'
                                                            : 'bg-white text-gray-400 border border-gray-200 hover:border-gray-300'
                                                            }`}
                                                    >
                                                        Offen
                                                    </button>
                                                    <button
                                                        onClick={() => updateStatus(section.key as any, idx, 'closed')}
                                                        className={`px-3 py-1.5 rounded text-xs font-medium uppercase tracking-wide transition-all ${facility.status === 'closed'
                                                            ? 'bg-red-600 text-white shadow-sm'
                                                            : 'bg-white text-gray-400 border border-gray-200 hover:border-gray-300'
                                                            }`}
                                                    >
                                                        Geschlossen
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

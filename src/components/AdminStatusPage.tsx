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
    const [username, setUsername] = useState("");
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
        if (password === "bannalp25") {
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
        setUsername("");
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 font-sans bg-gray-50">
                <div className="w-full max-w-login bg-white rounded-xl shadow-2xl p-8 sm:p-10">
                    <div className="flex flex-col items-center mb-8">
                        <img src={imgLogo} alt="Bannalp Logo" className="h-16 w-auto mb-6" />
                        <h2 className="text-2xl font-bold text-slate-600 font-heading">
                            Login
                        </h2>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 block" htmlFor="username">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 outline-none transition-all text-sm text-gray-600 placeholder:text-gray-400"
                                placeholder="Username"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 block" htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 outline-none transition-all text-sm text-gray-600 placeholder:text-gray-400"
                                placeholder="Password"
                            />
                        </div>

                        {error && (
                            <p className="text-xs text-red-600 font-medium text-center">{error}</p>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3.5 px-4 rounded-full transition-colors duration-200 text-sm mt-4 shadow-md hover:shadow-lg"
                        >
                            Login
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <button
                            onClick={onBack}
                            className="text-xs text-slate-400 hover:text-slate-600 font-medium transition-colors"
                        >
                            Zurück zur Website
                        </button>
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

            <main className="max-w-4xl mx-auto px-6 md:px-16 lg:px-24 py-12">
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

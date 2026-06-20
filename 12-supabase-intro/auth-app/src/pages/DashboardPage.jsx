import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-8">
      <div className="max-w-lg mx-auto">
        {/* Navbar */}
        <div className="flex items-center justify-between mb-10">
          <span className="font-display text-xl font-bold text-white">
            auth<span className="text-indigo-500">.</span>app
          </span>
          <button
            onClick={handleLogout}
            className="text-sm text-zinc-400 hover:text-rose-400 font-medium transition-colors"
          >
            Sign out
          </button>
        </div>

        {/* Welcome card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-6">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-lg">
              {user?.email?.[0].toUpperCase()}
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-white">
                Welcome back!
              </h2>
              <p className="text-zinc-400 text-sm">{user?.email}</p>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-4 space-y-3">
            <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">
              Session info
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">User ID</span>
                <span className="text-zinc-300 font-mono text-xs">
                  {user?.id?.slice(0, 8)}...
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Email</span>
                <span className="text-zinc-300">{user?.email}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Status</span>
                <span className="text-green-400 font-medium">● Authenticated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

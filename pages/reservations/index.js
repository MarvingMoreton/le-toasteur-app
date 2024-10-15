import { useState, useEffect } from 'react';

const Reservations = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Hard-coded username and password for simplicity
  const adminUsername = 'Pro VIP';
  const adminPassword = '12345'; // Change to your preferred password

  // Check localStorage for previous login
  useEffect(() => {
    const isVerified = localStorage.getItem('alreadySignedAsPro');
    if (isVerified === 'verifiedByToasteur') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === adminUsername && password === adminPassword) {
      // Save to localStorage
      localStorage.setItem('alreadySignedAsPro', 'verifiedByToasteur');
      setIsAuthenticated(true);
    } else {
      alert('Ce ne sont pas les bons identifiants');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-16 bg-white shadow-lg rounded-md w-full max-w-3xl">
          <h2 className="mb-8 text-2xl font-semibold text-gray-800 text-center">
            Connexion
          </h2>
          <form onSubmit={handleLogin} className="space-y-10">
            <div>
              <label className="block mb-3 text-lg font-medium text-gray-700">
                Utilisateur
              </label>
              <input
                type="text"
                placeholder="nom utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#ff5c39] focus:border-[#ff5c39]"
                required
              />
            </div>
            <div>
              <label className="block mb-3 text-lg font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-xl bg-[#041e42] text-white px-4 py-3 rounded-md font-medium hover:bg-[#ff5c39] focus:outline-none focus:ring-2 focus:ring-[#ff5c39]"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full h-screen">
        <iframe
          src="https://reservation.carbonaraapp.com/Canada/Montreal/Le-Toasteur-Villeray-Inc"
          title="Le Toasteur Villeray Reservations"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
};

export default Reservations;

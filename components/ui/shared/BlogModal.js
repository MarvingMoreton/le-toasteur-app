import { useState } from 'react';
import { useRouter } from 'next/router'; // For navigation
import { PauseIcon } from 'lucide-react';

const BlogModal = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/'); // Redirect to homepage
  };

  return (
    open && (
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        {/* Overlay - Redirect to homepage on click */}
        <div
          className="fixed inset-0 bg-black bg-opacity-80"
          onClick={handleRedirect} // Redirect to homepage on background click
        />

        {/* Modal */}
        <div className="relative z-20 mx-auto max-w-lg h-[250px] p-6 bg-white rounded-lg shadow-lg">
          <div className="flex justify-center mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f6d3cc] mb-10">
              <PauseIcon
                aria-hidden="true"
                className="h-6 w-6 text-[#ff5c39]"
              />
            </div>
          </div>

          <h3 className="text-lg font-semibold text-center text-gray-900">
            Coming soon: Bientôt disponible !
          </h3>
          <p className="mt-2 text-center text-sm text-gray-500">
            Nous travaillons dur pour vous apporter le meilleur contenu. Restez
            à l'écoute pour des mises à jour passionnantes !
          </p>

          <div className="mt-16">
            <button
              type="button"
              onClick={handleRedirect}
              className="w-full rounded-md bg-[#041e42] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              Retourner à la page d'accueil
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default BlogModal;

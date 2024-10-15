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
        <div className="relative z-20 mx-auto max-w-xl h-auto p-8 bg-white rounded-lg shadow-lg">
          <div className="flex justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f6d3cc]">
              <PauseIcon
                aria-hidden="true"
                className="h-8 w-8 text-[#ff5c39]"
              />
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-center text-gray-900">
            Coming soon: Bientôt disponible !
          </h3>
          <p className="mt-4 text-center text-base text-gray-600">
            Nous travaillons dur pour vous apporter le meilleur contenu. Restez
            à l'écoute pour des mises à jour passionnantes !
          </p>

          <div className="mt-10">
            <button
              type="button"
              onClick={handleRedirect}
              className="w-full rounded-md bg-[#041e42] px-5 py-3 text-lg font-semibold text-white shadow-sm hover:bg-[#ff5c39] focus:outline-none focus:ring-2 focus:ring-[#ff5c39]"
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

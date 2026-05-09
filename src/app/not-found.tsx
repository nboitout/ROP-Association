import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-[#F5EFE2] flex items-center justify-center font-serif">
        <div className="text-center px-6">
          <p className="text-[#8B3A2A] tracking-[0.2em] uppercase text-xs">404</p>
          <h1 className="mt-4 text-5xl text-[#2A2419]">Page introuvable</h1>
          <p className="mt-4 text-[#5A5040]">
            Cette page n'existe pas ou a été déplacée.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block text-[#8B3A2A] hover:text-[#6E2C1F]"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </body>
    </html>
  );
}

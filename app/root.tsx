import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";
import { AnimatePresence, motion } from "framer-motion";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  {
    rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="space-bg" aria-hidden="true"></div>
        {children}
        <ScrollRestoration getKey={(loc) => `${loc.pathname}${loc.hash || ''}`} />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation();
  const isHomeHero = (location.pathname || '/') === '/' && (!location.hash || location.hash === '#hero');
  return (
    <AnimatePresence mode="wait" initial={false}>
      {/* Perspective wrapper for subtle 3D tilt */}
      <div style={{ perspective: 1200 }}>
        {/* Sweep line accent */}
        <motion.div
          key={location.pathname + location.hash + "-sweep"}
          className="fixed top-0 left-0 right-0 h-[2px] bg-cyan-400/60 z-[90]"
          style={{ transformOrigin: '0% 50%' }}
          initial={{ scaleX: 0, opacity: 0.8 }}
          animate={{ scaleX: 0, opacity: 0 }}
          exit={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.28, ease: [0.4, 0.0, 0.2, 1] }}
        />
        <motion.div
          key={location.pathname + location.hash}
          initial={{
            opacity: 0,
            y: isHomeHero ? 0 : 22,
            scale: isHomeHero ? 1 : 0.985,
            rotateX: isHomeHero ? 0 : -3,
            filter: isHomeHero ? 'blur(0px) saturate(1)' : 'blur(8px) saturate(0.9)'
          }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0, filter: 'blur(0px) saturate(1)' }}
          exit={{ opacity: 0, y: -16, scale: 0.992, rotateX: 2, filter: 'blur(6px) saturate(0.95)' }}
          transition={{ type: 'spring', stiffness: 220, damping: 26, mass: 0.9 }}
        >
          <Outlet />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

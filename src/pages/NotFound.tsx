import { Link } from "react-router";

function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <p className="font-mono text-accent">ERROR 404</p>
      <h1 className="mt-2 font-display text-5xl font-bold">
        This level doesn't exist.
      </h1>
      <Link to="/" className="mt-8 inline-block text-accent underline">
        Back to home
      </Link>
    </section>
  );
}

export default NotFound;

import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-red">Error 404</p>
      <h1 className="mt-3 text-4xl font-bold text-accent-dark sm:text-5xl">Page Not Found</h1>
      <p className="mt-4 max-w-xl text-neutral-600">
        The page you&apos;re looking for doesn&apos;t exist or may have moved. Head back home or reach out
        if you need help finding something.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-red px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-red-700 cursor-pointer"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-accent-red px-6 py-3 text-sm font-bold text-accent-red transition hover:bg-red-50 cursor-pointer"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export function SaleSkeleton() {
  return (
    <div className="mx-auto max-w-[1180px] animate-pulse px-4 py-8 sm:px-6" aria-hidden>
      <div className="h-9 rounded bg-orange/30" />
      <div className="mt-6 h-10 w-40 rounded bg-white/10" />
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <div className="h-96 rounded-md border border-white/10 bg-white/5" />
        <div className="h-96 rounded-md border border-white/10 bg-white/5" />
      </div>
      <div className="mt-8 h-16 rounded bg-white/5" />
      <div className="mt-10 h-48 rounded bg-white/5" />
    </div>
  );
}

export function SaleError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-start justify-center px-4">
      <h1 className="text-2xl font-medium tracking-tight">Sale data is unavailable</h1>
      <p className="mt-3 text-sm leading-6 text-muted" role="alert">
        The mock sale feed did not respond. Retry to load the live IDO details.
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-6 inline-flex h-11 items-center rounded-md bg-orange px-4 text-sm font-medium text-white hover:bg-[#ff6a33]"
      >
        Retry
      </button>
    </div>
  );
}

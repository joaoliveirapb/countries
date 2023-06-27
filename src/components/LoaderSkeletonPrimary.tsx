export function LoaderSkeletonPrimary() {
  return (
    <div className="overflow-hidden rounded-md bg-white shadow-md dark:bg-blue-900">
      <div className="animate-pulse">
        <div className="h-[160px] w-[264px] bg-zinc-200 dark:bg-slate-700" />
        <div className="px-5 py-5">
          <div className="h-5 w-full bg-zinc-200 dark:bg-slate-700" />
          <div className="mt-3 space-y-1">
            <div className="h-[14px] w-2/3 bg-zinc-200 dark:bg-slate-700" />
            <div className="h-[14px] w-2/3 bg-zinc-200 dark:bg-slate-700" />
            <div className="h-[14px] w-2/3 bg-zinc-200 dark:bg-slate-700" />
          </div>
        </div>
      </div>
    </div>
  )
}

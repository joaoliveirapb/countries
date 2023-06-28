export function LoaderSkeletonSecondary() {
  return (
    <div className="mt-16 flex animate-pulse justify-between gap-4 max-[1225px]:flex-col max-[1225px]:gap-8">
      <div className="h-[300px] w-[500px] bg-zinc-200 dark:bg-slate-700 max-sm:h-52 max-sm:w-full" />
      <div className="flex flex-col justify-between max-sm:gap-6">
        <div className="h-9 w-full bg-zinc-200 dark:bg-slate-700" />
        <div className="flex gap-40 max-sm:flex-col max-sm:gap-4">
          <div className="flex flex-col gap-2">
            <div className="h-[14px] w-52 bg-zinc-200 dark:bg-slate-700" />
            <div className="h-[14px] w-52 bg-zinc-200 dark:bg-slate-700" />
            <div className="h-[14px] w-52 bg-zinc-200 dark:bg-slate-700" />
            <div className="h-[14px] w-52 bg-zinc-200 dark:bg-slate-700" />
            <div className="h-[14px] w-52 bg-zinc-200 dark:bg-slate-700" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-[14px] w-52 bg-zinc-200 dark:bg-slate-700" />
            <div className="h-[14px] w-52 bg-zinc-200 dark:bg-slate-700" />
            <div className="h-[14px] w-52 bg-zinc-200 dark:bg-slate-700" />
          </div>
        </div>
        <div className="flex items-center gap-2 max-sm:flex-col max-sm:items-start">
          <div className="h-5 w-full bg-zinc-200 dark:bg-slate-700" />
        </div>
      </div>
    </div>
  )
}

import { ScrollContainer } from "@/components/ScrollContainer";

export const ContentWrapper = () => {
  return (
    <div className="relative flex min-h-[1000px] flex-col items-center justify-start gap-2.5 overflow-hidden bg-neutral-100">
      <ScrollContainer />

      <div className="fixed left-1/2 bottom-5 z-[4] flex -translate-x-1/2 items-center justify-center md:bottom-10">
        <div className="group relative flex h-10 w-20 items-center justify-center rounded-full bg-neutral-200/80 backdrop-blur-[10px] transition-[width,height] duration-300 ease-out hover:h-[110px] hover:w-[420px]">
          <div className="flex items-center justify-center gap-2 transition-opacity duration-200 group-hover:opacity-0">
            <span className="h-1.5 w-1.5 rounded-full bg-black/45" />
            <span className="h-1.5 w-1.5 rounded-full bg-black/45" />
            <span className="h-1.5 w-1.5 rounded-full bg-black/45" />
          </div>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <div className="flex items-center gap-12">
              <a
                href="mailto:hello@supadupa.tools"
                aria-label="Email Supa Dupa Tools"
                className="pointer-events-auto flex flex-col items-center gap-2 text-black"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
                    <path d="m22 8-10 6L2 8" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Hello</span>
              </a>

              <a
                href="https://instagram.com/supadupatools"
                target="_blank"
                rel="noreferrer"
                aria-label="Supa Dupa Tools on Instagram"
                className="pointer-events-auto flex flex-col items-center gap-2 text-black"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                    <path d="M16 11.37a4 4 0 1 1-7.15 2.2 4 4 0 0 1 7.15-2.2Z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Instagram</span>
              </a>

              <a
                href="https://github.com/supadupatools"
                target="_blank"
                rel="noreferrer"
                aria-label="Supa Dupa Tools on GitHub"
                className="pointer-events-auto flex flex-col items-center gap-2 text-black"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56 0-.28-.01-1.2-.02-2.17-3.2.7-3.88-1.38-3.88-1.38-.53-1.34-1.3-1.7-1.3-1.7-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.06 1.8 2.78 1.28 3.46.98.1-.76.42-1.28.76-1.57-2.56-.3-5.26-1.28-5.26-5.68 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.52.11-3.16 0 0 .98-.31 3.2 1.18a11.2 11.2 0 0 1 5.82 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.64.23 2.86.11 3.16.74.81 1.19 1.84 1.19 3.1 0 4.41-2.7 5.38-5.27 5.67.43.37.82 1.1.82 2.22 0 1.6-.01 2.88-.01 3.27 0 .31.2.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

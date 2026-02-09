import { ProjectsSection } from "@/sections/ProjectsSection";

export const ScrollContainer = () => {
  return (
    <div className="relative box-border caret-transparent shrink-0 h-[1000px] w-full">
      <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <ProjectsSection />
      </div>
    </div>
  );
};

import { MainContent } from "@/components/MainContent";

export const App = () => {
  return (
    <body className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-neutral-100 box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif">
      <MainContent />
      <div className="absolute box-border caret-transparent h-0 w-0 z-0 overflow-hidden left-0 bottom-0"></div>
      <iframe
        src="https://framer.com/edit?framerSiteId=459f6c01180fc75f8781db7d2070b22326cf329d38c56b5712725053852469df&source=pixelwrld.co&features=%7B%22editorBarDisableFrameAncestorsSecurity%22%3Afalse%2C%22onPageLocalizationSupport%22%3Afalse%2C%22onPageMoveTool%22%3Afalse%7D&loadStart=1770320205191"
        className="fixed box-border caret-transparent hidden h-[1000px] w-screen z-[2147483647] left-0 top-0"
      ></iframe>
    </body>
  );
};

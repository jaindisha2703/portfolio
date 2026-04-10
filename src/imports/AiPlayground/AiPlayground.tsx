import imgImageNomadLifeInMotion from "./23d698140225e41a1d4c2a347dbb656143e10a05.png";
import imgImageNomadLifeInMotion1 from "./513c7cf39548df714f508a45de0f7379093e17ce.png";
import imgImageNomadLifeInMotion2 from "./a93369f53a05dd68ae56a93d0bebbc8c23b70191.png";

function Link() {
  return (
    <div className="h-[24px] relative shrink-0 w-[83.388px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Acorn:Bold',sans-serif] leading-[normal] left-0 not-italic text-[#ffffeb] text-[20px] top-[2.4px] tracking-[-0.2px] whitespace-nowrap">Disha Jain</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[20.8px] relative shrink-0 w-[38.313px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(255,255,235,0.65)] whitespace-nowrap">Work</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[20.8px] relative shrink-0 w-[88.138px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#ffffeb] text-[16px] whitespace-nowrap">Playground</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[20.8px] relative shrink-0 w-[47.362px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(255,255,235,0.65)] whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[40px] relative rounded-[100px] shrink-0 w-[111.863px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#ffffeb] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] left-[19.6px] text-[#ffffeb] text-[16px] top-[9.6px] tracking-[0.13px] whitespace-nowrap">{`Let's talk`}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[393.675px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[36px] items-center relative size-full">
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[48px] relative size-full">
          <Link />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="bg-[#034f46] content-stretch flex h-[66px] items-center pb-[0.8px] relative shrink-0 w-full" data-name="Nav">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,235,0.15)] border-b-[0.8px] border-solid inset-0 pointer-events-none shadow-[0px_2px_20px_0px_rgba(46,53,56,0.1)]" />
      <Container />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[43.19px] relative shrink-0 w-[198.54px]" data-name="Heading 2">
      <p className="absolute font-['Acorn:Bold',sans-serif] leading-[43.2px] left-0 not-italic text-[#ffffeb] text-[36px] top-[3.11px] whitespace-nowrap">AI playground</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[38.484px] relative rounded-[100px] shrink-0 w-[108.979px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#ffffeb] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] left-[23.02px] text-[#ffffeb] text-[13px] top-[11.02px] whitespace-nowrap">View all →</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Heading />
      <Link5 />
    </div>
  );
}

function ImageNomadLifeInMotion() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Image (Nomad — Life in Motion)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[122.07%] left-[0.07%] max-w-none top-[-0.15%] w-full" src={imgImageNomadLifeInMotion} />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#047668] content-stretch flex items-center justify-center px-[12px] py-[3px] relative rounded-[100px] shrink-0" data-name="Text">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#ffffeb] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap">Figma + claude</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex h-[14.391px] items-start relative shrink-0 w-[29.361px]" data-name="Text">
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#034f46] text-[12px] whitespace-nowrap">2026</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text />
      <Text1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Acorn:Bold',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[24px] text-black w-full">Duckie Wallpaper</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#2e3538] text-[14px] w-full">Animated HTML wallpaper — 7 ducks, each appearing with a message every 1.5 hours during working hours.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start px-[24px] relative w-full">
        <Frame7 />
        <Frame6 />
      </div>
    </div>
  );
}

function ImageNomadLifeInMotion1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Image (Nomad — Life in Motion)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[146.63%] left-[0.02%] max-w-none top-[-0.12%] w-full" src={imgImageNomadLifeInMotion1} />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#047668] content-stretch flex items-center justify-center px-[12px] py-[3px] relative rounded-[100px] shrink-0" data-name="Text">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#ffffeb] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap">Claude</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex h-[14.391px] items-start relative shrink-0 w-[29.361px]" data-name="Text">
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#034f46] text-[12px] whitespace-nowrap">2026</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Acorn:Bold',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[24px] text-black w-full">Typo Tool</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#2e3538] text-[14px] w-full">A web tool for testing and documenting typography decisions</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start px-[24px] relative w-full">
        <Frame8 />
        <Frame9 />
      </div>
    </div>
  );
}

function ImageNomadLifeInMotion2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Image (Nomad — Life in Motion)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[146.63%] left-[0.04%] max-w-none top-[-18.15%] w-full" src={imgImageNomadLifeInMotion2} />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#047668] content-stretch flex items-center justify-center px-[12px] py-[3px] relative rounded-[100px] shrink-0" data-name="Text">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#ffffeb] text-[12px] tracking-[0.96px] uppercase whitespace-nowrap">FIGMA MAKE</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex h-[14.391px] items-start relative shrink-0 w-[29.361px]" data-name="Text">
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#034f46] text-[12px] whitespace-nowrap">2026</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Acorn:Bold',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[24px] text-black w-full">Relight</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#2e3538] text-[14px] tracking-[-1px] w-full">Image editing and relighting tool — upload a photo, adjust it, add custom lighting</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start px-[24px] relative w-full">
        <Frame10 />
        <Frame11 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[24px] h-[425px] items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="bg-[#ffffeb] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[32px]" data-name="ProjectCard">
          <div className="content-stretch flex flex-col gap-[12px] items-start pb-[24px] relative size-full">
            <div className="h-[255px] relative rounded-[32px] shrink-0 w-full" data-name="Container">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[1.028px] relative size-full">
                  <ImageNomadLifeInMotion />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#047668] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[32px]" />
            </div>
            <Frame />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="bg-[#ffffeb] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[32px]" data-name="ProjectCard">
          <div className="content-stretch flex flex-col gap-[12px] items-start pb-[24px] relative size-full">
            <div className="h-[255px] relative rounded-[32px] shrink-0 w-full" data-name="Container">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[1.028px] relative size-full">
                  <ImageNomadLifeInMotion1 />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#047668] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[32px]" />
            </div>
            <Frame3 />
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="bg-[#ffffeb] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[32px]" data-name="ProjectCard">
          <div className="content-stretch flex flex-col gap-[12px] items-start pb-[24px] relative size-full">
            <div className="h-[255px] relative rounded-[32px] shrink-0 w-full" data-name="Container">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[1.028px] relative size-full">
                  <ImageNomadLifeInMotion2 />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#047668] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[32px]" />
            </div>
            <Frame5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#232f2e] relative rounded-[100px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.25)] shrink-0 w-full z-[1]" data-name="Section">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center px-[84px] py-[64px] relative w-full">
          <Frame2 />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-full">
      <Section />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[43.19px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Acorn:Bold',sans-serif] leading-[43.2px] left-0 not-italic text-[36px] text-white top-[3.11px] whitespace-nowrap">Check out my work too</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[11.998px] items-start relative shrink-0 w-[710px]" data-name="Container">
      <Heading1 />
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.55)] w-[710px]">{`I'm available for freelance work. Let's figure out if we're a good fit.`}</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-[#f0d7ff] content-stretch flex items-center justify-center py-[13px] relative rounded-[100px] shrink-0 w-[144.717px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#2e3538] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2e3538] text-[14px] whitespace-pre">{`view  →`}</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Container3 />
      <Link6 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#034f46] relative rounded-tl-[50px] rounded-tr-[50px] shadow-[0px_-4px_40px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[103px] pr-[156px] py-[53px] relative w-full">
        <Frame12 />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
      <Frame4 />
      <Container2 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal gap-[12px] items-center leading-[normal] relative shrink-0 text-center w-[1119px]">
      <p className="min-w-full relative shrink-0 text-[#2e3538] text-[16px] w-[min-content]">{`You could have been anywhere on the internet, yet you're here. Thanks for visiting!`}</p>
      <p className="relative shrink-0 text-[#034f46] text-[14px] whitespace-nowrap">Made with love by Disha · 2026</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Frame13 />
      <Frame15 />
    </div>
  );
}

export default function AiPlayground() {
  return (
    <div className="bg-[#ffffeb] content-stretch flex flex-col gap-[56px] items-center pb-[24px] relative size-full" data-name="AI Playground">
      <Nav />
      <Frame14 />
    </div>
  );
}
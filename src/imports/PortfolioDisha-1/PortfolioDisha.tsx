import imgImageNomadLifeInMotion from "./e4fc5233bd2431fb50a2c8e8cc87199986f0cc77.png";

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
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#ffffeb] text-[16px] whitespace-nowrap">Work</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[20.8px] relative shrink-0 w-[88.138px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(255,255,235,0.65)] whitespace-nowrap">Playground</p>
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
      <p className="absolute font-['Acorn:Bold',sans-serif] leading-[43.2px] left-0 not-italic text-[#ffffeb] text-[36px] top-[3.11px] whitespace-nowrap">Case studies</p>
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
    <div className="h-[219.999px] relative shrink-0 w-full" data-name="Image (Nomad — Life in Motion)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageNomadLifeInMotion} />
    </div>
  );
}

function Text() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f0d7ff] content-stretch flex h-[32px] items-center justify-center left-[calc(50%+0.07px)] py-[8px] rounded-[12px] top-[calc(50%-4px)] w-[97px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#2e3538] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[12px] text-black tracking-[0.96px] uppercase whitespace-nowrap">VIEW WORK</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#047668] h-[22.39px] relative rounded-[100px] shrink-0 w-[109.06px]" data-name="Text">
      <p className="absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] left-[12px] text-[#ffffeb] text-[12px] top-[4px] tracking-[0.96px] uppercase whitespace-nowrap">Speculative</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex h-[14.391px] items-start relative shrink-0 w-[29.361px]" data-name="Text">
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#034f46] text-[12px] whitespace-nowrap">2026</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Acorn:Bold',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[24px] text-black w-full">Nomad — Life in Motion</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#2e3538] text-[14px] w-full">A speculative product for people who work from everywhere. What would the ideal tool for a digital nomad look like?</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Frame7 />
        <Frame6 />
      </div>
    </div>
  );
}

function ImageNomadLifeInMotion1() {
  return (
    <div className="h-[219.999px] relative shrink-0 w-full" data-name="Image (Nomad — Life in Motion)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageNomadLifeInMotion} />
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#047668] h-[22.39px] relative rounded-[100px] shrink-0 w-[109.06px]" data-name="Text">
      <p className="absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] left-[12px] text-[#ffffeb] text-[12px] top-[4px] tracking-[0.96px] uppercase whitespace-nowrap">Speculative</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex h-[14.391px] items-start relative shrink-0 w-[29.361px]" data-name="Text">
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#034f46] text-[12px] whitespace-nowrap">2026</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Acorn:Bold',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[24px] text-black w-full">Nomad — Life in Motion</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#2e3538] text-[14px] w-full">A speculative product for people who work from everywhere. What would the ideal tool for a digital nomad look like?</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Frame8 />
        <Frame9 />
      </div>
    </div>
  );
}

function ImageNomadLifeInMotion2() {
  return (
    <div className="h-[219.999px] relative shrink-0 w-full" data-name="Image (Nomad — Life in Motion)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageNomadLifeInMotion} />
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[#047668] h-[22.39px] relative rounded-[100px] shrink-0 w-[109.06px]" data-name="Text">
      <p className="absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] left-[12px] text-[#ffffeb] text-[12px] top-[4px] tracking-[0.96px] uppercase whitespace-nowrap">Speculative</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex h-[14.391px] items-start relative shrink-0 w-[29.361px]" data-name="Text">
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#034f46] text-[12px] whitespace-nowrap">2025</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Acorn:Bold',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[24px] text-black w-full">Nomad — Life in Motion</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#2e3538] text-[14px] w-full">A speculative product for people who work from everywhere. What would the ideal tool for a digital nomad look like?</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Frame10 />
        <Frame11 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
      <div className="bg-[#ffffeb] flex-[1_0_0] min-h-px min-w-px relative rounded-[28px]" data-name="ProjectCard">
        <div aria-hidden="true" className="absolute border-[#034f46] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[28px]" />
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-[33.023px] pt-[25.028px] px-[25.028px] relative w-full">
          <div className="bg-[#b63939] h-[222.055px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
            <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-[1.028px] relative size-full">
                <ImageNomadLifeInMotion />
                <div className="absolute backdrop-blur-[12px] bg-[rgba(26,15,15,0.25)] h-[220px] left-px top-[0.95px] w-[257px]" />
                <Text />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#034f46] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[16px]" />
          </div>
          <Frame />
        </div>
      </div>
      <div className="bg-[#ffffeb] flex-[1_0_0] min-h-px min-w-px relative rounded-[28px]" data-name="ProjectCard">
        <div aria-hidden="true" className="absolute border-[#034f46] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[28px]" />
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-[33.023px] pt-[25.028px] px-[25.028px] relative w-full">
          <div className="h-[222.055px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[1.028px] relative size-full">
                <ImageNomadLifeInMotion1 />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#034f46] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[16px]" />
          </div>
          <Frame3 />
        </div>
      </div>
      <div className="bg-[#ffffeb] flex-[1_0_0] min-h-px min-w-px relative rounded-[28px]" data-name="ProjectCard">
        <div aria-hidden="true" className="absolute border-[#034f46] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[28px]" />
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-[33.023px] pt-[25.028px] px-[25.028px] relative w-full">
          <div className="h-[222.055px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[1.028px] relative size-full">
                <ImageNomadLifeInMotion2 />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#034f46] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[16px]" />
          </div>
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#034f46] relative rounded-[100px] shadow-[0px_-4px_40px_0px_rgba(0,0,0,0.1),0px_12px_40px_0px_rgba(0,0,0,0.25)] shrink-0 w-full z-[1]" data-name="Section">
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

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[43.19px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Acorn:Bold',sans-serif] leading-[43.2px] left-0 not-italic text-[36px] text-white top-[3.11px] whitespace-nowrap">Check Out my AI playground too</p>
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
    <div className="bg-[#232f2e] relative rounded-tl-[50px] rounded-tr-[50px] shadow-[0px_-4px_40px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[103px] pr-[156px] py-[53px] relative w-full">
        <Frame12 />
      </div>
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
      <Container2 />
      <Frame15 />
    </div>
  );
}

export default function PortfolioDisha() {
  return (
    <div className="bg-[#ffffeb] content-stretch flex flex-col gap-[56px] items-center pb-[24px] relative size-full" data-name="Portfolio Disha">
      <Nav />
      <Frame14 />
    </div>
  );
}
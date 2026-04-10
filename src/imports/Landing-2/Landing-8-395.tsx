import imgImageNomadLifeInMotion from "./e4fc5233bd2431fb50a2c8e8cc87199986f0cc77.png";

function Link() {
  return (
    <div className="h-[23.643px] relative shrink-0 w-[83.361px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Acorn:Bold',sans-serif] leading-[normal] left-0 not-italic text-[#ffffeb] text-[20px] top-[2.06px] tracking-[-0.2px] whitespace-nowrap">Disha Jain</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[18.471px] relative shrink-0 w-[33.505px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#ffffeb] text-[16px] whitespace-nowrap">Work</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[18.471px] relative shrink-0 w-[77.081px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#ffffeb] text-[16px] whitespace-nowrap">Playground</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[18.471px] relative shrink-0 w-[41.472px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#ffffeb] text-[16px] whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#ffffeb] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] py-[8px] relative">
        <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#ffffeb] text-[16px] tracking-[0.13px] whitespace-nowrap">{`Let's talk`}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[34.501px] relative shrink-0 w-[361.343px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[35.995px] items-center relative size-full">
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
    <div className="flex-[1_0_0] h-[34.501px] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[47.993px] relative size-full">
          <Link />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="bg-[#034f46] content-stretch flex h-[65.018px] items-center pb-[1.028px] relative shrink-0 w-full" data-name="Nav">
      <div aria-hidden="true" className="absolute border-[#ffffeb] border-b-[1.028px] border-solid inset-0 pointer-events-none shadow-[0px_2px_20px_0px_rgba(46,53,56,0.06)]" />
      <Container />
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-[#f0d7ff] content-stretch flex items-center justify-center py-[13px] relative rounded-[100px] shrink-0 w-[235px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#2e3538] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2e3538] text-[14px] whitespace-nowrap">See my recently potted work ↓</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[43.528px] relative rounded-[100px] shrink-0 w-[123.194px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#2e3538] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] left-[29.02px] text-[#2e3538] text-[14px] top-[13.03px] whitespace-nowrap">About me</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Link5 />
      <Link6 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-center justify-center relative shrink-0 w-[804px]">
      <div className="font-['Acorn:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#232f2e] text-[100.346px] text-center tracking-[-2.0069px] w-[550px]">
        <p className="leading-[110.381px] mb-0">{`Hi. I'm Disha.`}</p>
        <p className="leading-[110.381px]">A Designer.</p>
      </div>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[27.2px] min-w-full relative shrink-0 text-[16px] text-[rgba(46,53,56,0.6)] text-center w-[min-content]">{`Hi, I'm Disha. I design digital products that are clear, considered, and actually satisfying to use. Currently exploring the edges where AI meets human intuition.`}</p>
      <Frame />
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

function Link7() {
  return (
    <div className="h-[38.484px] relative rounded-[100px] shrink-0 w-[108.979px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#ffffeb] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] left-[23.02px] text-[#ffffeb] text-[13px] top-[11.02px] whitespace-nowrap">View all →</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Heading />
      <Link7 />
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

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text1 />
      <Text2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Acorn:Bold',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[24px] text-black w-full">Nomad — Life in Motion</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#2e3538] text-[14px] w-full">A speculative product for people who work from everywhere. What would the ideal tool for a digital nomad look like?</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Frame9 />
        <Frame8 />
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

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text3 />
      <Text4 />
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

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Acorn:Bold',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[24px] text-black w-full">Nomad — Life in Motion</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#2e3538] text-[14px] w-full">A speculative product for people who work from everywhere. What would the ideal tool for a digital nomad look like?</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Frame12 />
        <Frame13 />
      </div>
    </div>
  );
}

function Frame3() {
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
          <Frame2 />
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
          <Frame5 />
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
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#034f46] mb-[-97px] relative rounded-[100px] shadow-[0px_-4px_40px_0px_rgba(0,0,0,0.1),0px_12px_40px_0px_rgba(0,0,0,0.25)] shrink-0 w-full z-[2]" data-name="Section">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center px-[84px] py-[64px] relative w-full">
          <Frame4 />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[43.19px] relative shrink-0 w-[198.54px]" data-name="Heading 2">
      <p className="absolute font-['Acorn:Bold',sans-serif] leading-[43.2px] left-0 not-italic text-[#ffffeb] text-[36px] top-[3.11px] whitespace-nowrap">AI playground</p>
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[38.484px] relative rounded-[100px] shrink-0 w-[108.979px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#ffffeb] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] left-[23.02px] text-[#ffffeb] text-[13px] top-[11.02px] whitespace-nowrap">View all →</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Heading1 />
      <Link8 />
    </div>
  );
}

function ImageNomadLifeInMotion3() {
  return (
    <div className="h-[219.999px] relative shrink-0 w-full" data-name="Image (Nomad — Life in Motion)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageNomadLifeInMotion} />
    </div>
  );
}

function Text7() {
  return (
    <div className="bg-[#047668] h-[22.39px] relative rounded-[100px] shrink-0 w-[109.06px]" data-name="Text">
      <p className="absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] left-[12px] text-[#ffffeb] text-[12px] top-[4px] tracking-[0.96px] uppercase whitespace-nowrap">Speculative</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex h-[14.391px] items-start relative shrink-0 w-[29.361px]" data-name="Text">
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#034f46] text-[12px] whitespace-nowrap">2026</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Acorn:Bold',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[24px] text-black w-full">Nomad — Life in Motion</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#2e3538] text-[14px] w-full">A speculative product for people who work from everywhere. What would the ideal tool for a digital nomad look like?</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Frame17 />
        <Frame18 />
      </div>
    </div>
  );
}

function ImageNomadLifeInMotion4() {
  return (
    <div className="h-[219.999px] relative shrink-0 w-full" data-name="Image (Nomad — Life in Motion)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageNomadLifeInMotion} />
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[#047668] h-[22.39px] relative rounded-[100px] shrink-0 w-[109.06px]" data-name="Text">
      <p className="absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] left-[12px] text-[#ffffeb] text-[12px] top-[4px] tracking-[0.96px] uppercase whitespace-nowrap">Speculative</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex h-[14.391px] items-start relative shrink-0 w-[29.361px]" data-name="Text">
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#034f46] text-[12px] whitespace-nowrap">2026</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text9 />
      <Text10 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Acorn:Bold',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[24px] text-black w-full">Nomad — Life in Motion</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#2e3538] text-[14px] w-full">A speculative product for people who work from everywhere. What would the ideal tool for a digital nomad look like?</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Frame20 />
        <Frame21 />
      </div>
    </div>
  );
}

function ImageNomadLifeInMotion5() {
  return (
    <div className="h-[219.999px] relative shrink-0 w-full" data-name="Image (Nomad — Life in Motion)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageNomadLifeInMotion} />
    </div>
  );
}

function Text11() {
  return (
    <div className="bg-[#047668] h-[22.39px] relative rounded-[100px] shrink-0 w-[109.06px]" data-name="Text">
      <p className="absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] left-[12px] text-[#ffffeb] text-[12px] top-[4px] tracking-[0.96px] uppercase whitespace-nowrap">Speculative</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex h-[14.391px] items-start relative shrink-0 w-[29.361px]" data-name="Text">
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#034f46] text-[12px] whitespace-nowrap">2025</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Text11 />
      <Text12 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Acorn:Bold',sans-serif] leading-[28.8px] not-italic relative shrink-0 text-[24px] text-black w-full">Nomad — Life in Motion</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#2e3538] text-[14px] w-full">A speculative product for people who work from everywhere. What would the ideal tool for a digital nomad look like?</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Frame23 />
        <Frame24 />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
      <div className="bg-[#ffffeb] flex-[1_0_0] min-h-px min-w-px relative rounded-[28px]" data-name="ProjectCard">
        <div aria-hidden="true" className="absolute border-[#034f46] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[28px]" />
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-[33.023px] pt-[25.028px] px-[25.028px] relative w-full">
          <div className="h-[222.055px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[1.028px] relative size-full">
                <ImageNomadLifeInMotion3 />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#034f46] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[16px]" />
          </div>
          <Frame16 />
        </div>
      </div>
      <div className="bg-[#ffffeb] flex-[1_0_0] min-h-px min-w-px relative rounded-[28px]" data-name="ProjectCard">
        <div aria-hidden="true" className="absolute border-[#034f46] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[28px]" />
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-[33.023px] pt-[25.028px] px-[25.028px] relative w-full">
          <div className="h-[222.055px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[1.028px] relative size-full">
                <ImageNomadLifeInMotion4 />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#034f46] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[16px]" />
          </div>
          <Frame19 />
        </div>
      </div>
      <div className="bg-[#ffffeb] flex-[1_0_0] min-h-px min-w-px relative rounded-[28px]" data-name="ProjectCard">
        <div aria-hidden="true" className="absolute border-[#034f46] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[28px]" />
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-[33.023px] pt-[25.028px] px-[25.028px] relative w-full">
          <div className="h-[222.055px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[1.028px] relative size-full">
                <ImageNomadLifeInMotion5 />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#034f46] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[16px]" />
          </div>
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#232f2e] mb-[-97px] relative rounded-bl-[100px] rounded-br-[100px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.25)] shrink-0 w-full z-[1]" data-name="Section">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center pb-[64px] pt-[128px] px-[84px] relative w-full">
          <Frame14 />
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-[97px] relative shrink-0 w-full">
      <Section />
      <Section1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[43.19px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Acorn:Bold',sans-serif] leading-[43.2px] left-0 not-italic text-[36px] text-white top-[3.11px] whitespace-nowrap">Contact me</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[11.998px] items-start relative shrink-0 w-[710px]" data-name="Container">
      <Heading2 />
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.55)] w-[710px]">{`I'm available for freelance work. Let's figure out if we're a good fit.`}</p>
    </div>
  );
}

function Link9() {
  return (
    <div className="bg-[#f0d7ff] content-stretch flex items-center justify-center py-[13px] relative rounded-[100px] shrink-0 w-[144.717px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#2e3538] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#2e3538] text-[14px] whitespace-nowrap">Say hello →</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Container3 />
      <Link9 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#034f46] relative rounded-tl-[50px] rounded-tr-[50px] shadow-[0px_-4px_40px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[103px] pr-[156px] py-[53px] relative w-full">
        <Frame26 />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Container2 />
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2e3538] text-[14px] text-center w-full">{`You could have been anywhere on the internet, yet you're here. Thanks for visiting!`}</p>
    </div>
  );
}

function HorizontalRule() {
  return (
    <div className="absolute h-[1.028px] left-[56px] top-[1893.3px] w-[1022.881px]" data-name="Horizontal Rule">
      <div aria-hidden="true" className="absolute border-[rgba(46,53,56,0.08)] border-solid border-t-[1.028px] inset-0 pointer-events-none" />
    </div>
  );
}

export default function Landing() {
  return (
    <div className="bg-[#ffffeb] content-stretch flex flex-col gap-[64px] items-center pb-[24px] relative size-full" data-name="Landing">
      <Nav />
      <Frame1 />
      <Frame6 />
      <Frame25 />
      <HorizontalRule />
    </div>
  );
}
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
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-center relative shrink-0 w-[804px]">
      <div className="font-['Acorn:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#034f46] text-[100.346px] text-center tracking-[-2.0069px] w-[550px]">
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
    <div className="bg-[#047668] h-[22.39px] relative rounded-[100px] shrink-0 w-[109.06px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] left-[12px] text-[#ffffeb] text-[12px] top-[4px] tracking-[0.96px] uppercase whitespace-nowrap">Speculative</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[14.391px] relative shrink-0 w-[29.361px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#034f46] text-[12px] whitespace-nowrap">2026</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[22.39px] items-center justify-between relative shrink-0 w-[258.917px]" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Container2 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28.783px] relative shrink-0 w-[258.917px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Acorn:Bold',sans-serif] leading-[28.8px] left-0 not-italic text-[24px] text-black top-[3.08px] whitespace-nowrap">Nomad — Life in Motion</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[89.625px] relative shrink-0 w-[258.917px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22.4px] left-0 text-[#2e3538] text-[14px] top-[0.06px] w-[255px]">A speculative product for people who work from everywhere. What would the ideal tool for a digital nomad look like?</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-[259px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Heading1 />
        <Paragraph />
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

function Text2() {
  return (
    <div className="bg-[#047668] h-[22.39px] relative rounded-[100px] shrink-0 w-[109.06px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] left-[12px] text-[#ffffeb] text-[12px] top-[4px] tracking-[0.96px] uppercase whitespace-nowrap">Speculative</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[14.391px] relative shrink-0 w-[29.361px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#034f46] text-[12px] whitespace-nowrap">2026</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[22.39px] items-center justify-between relative shrink-0 w-[258.917px]" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Container4 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28.783px] relative shrink-0 w-[258.917px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Acorn:Bold',sans-serif] leading-[28.8px] left-0 not-italic text-[24px] text-black top-[3.08px] whitespace-nowrap">Nomad — Life in Motion</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[89.625px] relative shrink-0 w-[258.917px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22.4px] left-0 text-[#2e3538] text-[14px] top-[0.06px] w-[255px]">A speculative product for people who work from everywhere. What would the ideal tool for a digital nomad look like?</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-[259px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Heading2 />
        <Paragraph1 />
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

function Text4() {
  return (
    <div className="bg-[#047668] h-[22.39px] relative rounded-[100px] shrink-0 w-[109.06px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] left-[12px] text-[#ffffeb] text-[12px] top-[4px] tracking-[0.96px] uppercase whitespace-nowrap">Speculative</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[14.391px] relative shrink-0 w-[29.361px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#034f46] text-[12px] whitespace-nowrap">2025</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[22.39px] items-center justify-between relative shrink-0 w-[258.917px]" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Container6 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28.783px] relative shrink-0 w-[258.917px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Acorn:Bold',sans-serif] leading-[28.8px] left-0 not-italic text-[24px] text-black top-[3.08px] whitespace-nowrap">Nomad — Life in Motion</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[89.625px] relative shrink-0 w-[258.917px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22.4px] left-0 text-[#2e3538] text-[14px] top-[0.06px] w-[255px]">A speculative product for people who work from everywhere. What would the ideal tool for a digital nomad look like?</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-[259px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Heading3 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0">
      <div className="bg-[#ffffeb] content-stretch flex flex-col gap-[12px] items-start pb-[33.023px] pt-[25.028px] px-[25.028px] relative rounded-[24px] shrink-0 w-[309.056px]" data-name="ProjectCard">
        <div aria-hidden="true" className="absolute border-[#034f46] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="h-[222.055px] relative rounded-[16px] shrink-0 w-[258.917px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.028px] relative rounded-[inherit] size-full">
            <ImageNomadLifeInMotion />
          </div>
          <div aria-hidden="true" className="absolute border-[#034f46] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
        <Frame2 />
        <Container3 />
      </div>
      <div className="bg-[#ffffeb] content-stretch flex flex-col gap-[12px] items-start pb-[33.023px] pt-[25.028px] px-[25.028px] relative rounded-[24px] shrink-0 w-[309.056px]" data-name="ProjectCard">
        <div aria-hidden="true" className="absolute border-[#034f46] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="h-[222.055px] relative rounded-[16px] shrink-0 w-[258.917px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.028px] relative rounded-[inherit] size-full">
            <ImageNomadLifeInMotion1 />
          </div>
          <div aria-hidden="true" className="absolute border-[#034f46] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
        <Frame5 />
        <Container5 />
      </div>
      <div className="bg-[#ffffeb] content-stretch flex flex-col gap-[12px] items-start pb-[33.023px] pt-[25.028px] px-[25.028px] relative rounded-[24px] shrink-0 w-[309.056px]" data-name="ProjectCard">
        <div aria-hidden="true" className="absolute border-[#034f46] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="h-[222.055px] relative rounded-[16px] shrink-0 w-[258.917px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.028px] relative rounded-[inherit] size-full">
            <ImageNomadLifeInMotion2 />
          </div>
          <div aria-hidden="true" className="absolute border-[#034f46] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
        <Frame7 />
        <Container7 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#034f46] mb-[-97px] relative rounded-[100px] shadow-[0px_-4px_40px_0px_rgba(0,0,0,0.1),0px_12px_40px_0px_rgba(0,0,0,0.25)] shrink-0 w-full z-[2]" data-name="Section">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center p-[84px] relative w-full">
          <Frame4 />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
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

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Heading4 />
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

function Text6() {
  return (
    <div className="bg-[#047668] h-[22.39px] relative rounded-[100px] shrink-0 w-[109.06px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] left-[12px] text-[#ffffeb] text-[12px] top-[4px] tracking-[0.96px] uppercase whitespace-nowrap">Speculative</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[14.391px] relative shrink-0 w-[29.361px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#034f46] text-[12px] whitespace-nowrap">2026</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[22.39px] items-center justify-between relative shrink-0 w-[258.917px]" data-name="Container">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Container8 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[28.783px] relative shrink-0 w-[258.917px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Acorn:Bold',sans-serif] leading-[28.8px] left-0 not-italic text-[24px] text-black top-[3.08px] whitespace-nowrap">Nomad — Life in Motion</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[89.625px] relative shrink-0 w-[258.917px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22.4px] left-0 text-[#2e3538] text-[14px] top-[0.06px] w-[255px]">A speculative product for people who work from everywhere. What would the ideal tool for a digital nomad look like?</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-[259px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Heading5 />
        <Paragraph3 />
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

function Text8() {
  return (
    <div className="bg-[#047668] h-[22.39px] relative rounded-[100px] shrink-0 w-[109.06px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] left-[12px] text-[#ffffeb] text-[12px] top-[4px] tracking-[0.96px] uppercase whitespace-nowrap">Speculative</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[14.391px] relative shrink-0 w-[29.361px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#034f46] text-[12px] whitespace-nowrap">2026</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[22.39px] items-center justify-between relative shrink-0 w-[258.917px]" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Container10 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[28.783px] relative shrink-0 w-[258.917px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Acorn:Bold',sans-serif] leading-[28.8px] left-0 not-italic text-[24px] text-black top-[3.08px] whitespace-nowrap">Nomad — Life in Motion</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[89.625px] relative shrink-0 w-[258.917px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22.4px] left-0 text-[#2e3538] text-[14px] top-[0.06px] w-[255px]">A speculative product for people who work from everywhere. What would the ideal tool for a digital nomad look like?</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-[259px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Heading6 />
        <Paragraph4 />
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

function Text10() {
  return (
    <div className="bg-[#047668] h-[22.39px] relative rounded-[100px] shrink-0 w-[109.06px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] left-[12px] text-[#ffffeb] text-[12px] top-[4px] tracking-[0.96px] uppercase whitespace-nowrap">Speculative</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[14.391px] relative shrink-0 w-[29.361px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#034f46] text-[12px] whitespace-nowrap">2025</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[22.39px] items-center justify-between relative shrink-0 w-[258.917px]" data-name="Container">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Container12 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[28.783px] relative shrink-0 w-[258.917px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Acorn:Bold',sans-serif] leading-[28.8px] left-0 not-italic text-[24px] text-black top-[3.08px] whitespace-nowrap">Nomad — Life in Motion</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[89.625px] relative shrink-0 w-[258.917px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22.4px] left-0 text-[#2e3538] text-[14px] top-[0.06px] w-[255px]">A speculative product for people who work from everywhere. What would the ideal tool for a digital nomad look like?</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-[259px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Heading7 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0">
      <div className="bg-[#ffffeb] content-stretch flex flex-col gap-[12px] items-start pb-[33.023px] pt-[25.028px] px-[25.028px] relative rounded-[24px] shrink-0 w-[309.056px]" data-name="ProjectCard">
        <div aria-hidden="true" className="absolute border-[#034f46] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="h-[222.055px] relative rounded-[16px] shrink-0 w-[258.917px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.028px] relative rounded-[inherit] size-full">
            <ImageNomadLifeInMotion3 />
          </div>
          <div aria-hidden="true" className="absolute border-[#034f46] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
        <Frame10 />
        <Container9 />
      </div>
      <div className="bg-[#ffffeb] content-stretch flex flex-col gap-[12px] items-start pb-[33.023px] pt-[25.028px] px-[25.028px] relative rounded-[24px] shrink-0 w-[309.056px]" data-name="ProjectCard">
        <div aria-hidden="true" className="absolute border-[#034f46] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="h-[222.055px] relative rounded-[16px] shrink-0 w-[258.917px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.028px] relative rounded-[inherit] size-full">
            <ImageNomadLifeInMotion4 />
          </div>
          <div aria-hidden="true" className="absolute border-[#034f46] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
        <Frame11 />
        <Container11 />
      </div>
      <div className="bg-[#ffffeb] content-stretch flex flex-col gap-[12px] items-start pb-[33.023px] pt-[25.028px] px-[25.028px] relative rounded-[24px] shrink-0 w-[309.056px]" data-name="ProjectCard">
        <div aria-hidden="true" className="absolute border-[#034f46] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="h-[222.055px] relative rounded-[16px] shrink-0 w-[258.917px]" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[1.028px] relative rounded-[inherit] size-full">
            <ImageNomadLifeInMotion5 />
          </div>
          <div aria-hidden="true" className="absolute border-[#034f46] border-[1.028px] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
        <Frame12 />
        <Container13 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#232f2e] h-[707px] mb-[-97px] relative rounded-bl-[100px] rounded-br-[100px] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.25)] shrink-0 w-full z-[1]" data-name="Section">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center px-[84px] py-[120px] relative size-full">
          <Frame8 />
          <Frame9 />
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

function Heading8() {
  return (
    <div className="h-[43.19px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Acorn:Bold',sans-serif] leading-[43.2px] left-0 not-italic text-[36px] text-white top-[3.11px] whitespace-nowrap">Contact me</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[11.998px] items-start relative shrink-0 w-[710px]" data-name="Container">
      <Heading8 />
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

function Frame14() {
  return (
    <div className="content-stretch flex gap-[56px] items-center relative shrink-0 w-full">
      <Container15 />
      <Link9 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#034f46] relative rounded-tl-[50px] rounded-tr-[50px] shadow-[0px_-4px_40px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[103px] py-[53px] relative w-full">
        <Frame14 />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Container14 />
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
    <div className="bg-[#ffffeb] content-stretch flex flex-col gap-[48px] items-center pb-[24px] relative size-full" data-name="Landing">
      <Nav />
      <Frame1 />
      <Frame6 />
      <Frame13 />
      <HorizontalRule />
    </div>
  );
}
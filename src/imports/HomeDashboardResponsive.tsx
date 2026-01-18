import svgPaths from "./svg-4csgexenem";
import imgMembers from "figma:asset/2d2d4de26d16019c939c7468d658dc71ae4fb8f0.png";
import imgMembers1 from "figma:asset/18ce5dd32b29293835b5ed37e9daa6be03009f96.png";
import imgMembers2 from "figma:asset/af653292c77a2fe70e1975968fc1e683de087b18.png";
import imgNubankLogo from "figma:asset/104735c9164e2efb4290fa655bd47ea2b28be0e7.png";
import imgInterLogo from "figma:asset/9947ddd88ee4489faa5d8ed9b00e21de304ef2db.png";
import imgNubankLogo1 from "figma:asset/26d52142a70858c0b396955ffc0a8d5d4f15c755.png";
import imgMembers3 from "figma:asset/443b5c9853c3d50d6cfdc9cbe553d494db190a84.png";

function Logo() {
  return (
    <div className="h-[29.818px] relative shrink-0 w-[139.648px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.648 29.8184">
        <g id="logo">
          <path d={svgPaths.p2d732980} fill="var(--fill-0, #060A11)" id="Vector" />
          <path d={svgPaths.p2590a480} fill="var(--fill-0, #060A11)" id="Vector_2" />
          <path d={svgPaths.p3cad3300} fill="var(--fill-0, #060A11)" id="Vector_3" />
          <path d={svgPaths.p5133700} fill="var(--fill-0, #060A11)" id="Vector_4" />
          <path d={svgPaths.p23415d40} fill="var(--fill-0, #060A11)" id="Vector_5" />
          <path d={svgPaths.p1113c900} fill="var(--fill-0, #060A11)" id="Vector_6" />
          <path d={svgPaths.pbb75a40} fill="var(--fill-0, #060A11)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function FiRrHome() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1002)" id="fi-rr-home">
          <path d={svgPaths.pf7ed600} fill="var(--fill-0, #080B12)" id="icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_1002">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BtnSidebar() {
  return (
    <div className="bg-[#d7ff00] relative rounded-[100px] shrink-0 w-full" data-name="btn-sidebar">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <FiRrHome />
          <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#080b12] text-[18px] tracking-[0.3px]">Home</p>
        </div>
      </div>
    </div>
  );
}

function FiRrCreditCard() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-credit-card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_963)" id="fi-rr-credit-card">
          <g id="icon">
            <path d={svgPaths.p320ad300} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.p2e706500} fill="var(--fill-0, #080B12)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_963">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BtnSidebar1() {
  return (
    <div className="relative rounded-[100px] shrink-0 w-full" data-name="btn-sidebar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative w-full">
          <FiRrCreditCard />
          <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#080b12] text-[18px] tracking-[0.3px]">Cartões</p>
        </div>
      </div>
    </div>
  );
}

function MenuSidebar() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="menu-sidebar">
      <BtnSidebar />
      <BtnSidebar1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0 w-full">
      <Logo />
      <MenuSidebar />
    </div>
  );
}

function Members() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Members">
      <img alt="" className="block max-w-none size-full" height="24" src={imgMembers} width="24" />
    </div>
  );
}

function Usuario() {
  return (
    <div className="h-[20px] relative shrink-0 w-[99px]" data-name="Usuário">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold inset-0 leading-[20px] not-italic text-[#080b12] text-[16px] tracking-[0.3px]">Lucas Marte</p>
    </div>
  );
}

function EMailUsuario() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="E-mail-usuário">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal inset-0 leading-[20px] not-italic text-[#080b12] text-[14px] tracking-[0.3px]">lucasmarte@gmail.com</p>
    </div>
  );
}

function DadosUsuario() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[160px]" data-name="dados-usuário">
      <Usuario />
      <EMailUsuario />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Members />
      <DadosUsuario />
    </div>
  );
}

function FiRrAngleRight() {
  return (
    <div className="relative size-[16px]" data-name="fi-rr-angle-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_977)" id="fi-rr-angle-right">
          <path d={svgPaths.p343a3a40} fill="var(--fill-0, #080B12)" id="icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_977">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Close() {
  return (
    <div className="absolute bg-white content-stretch flex items-center p-[4px] right-[-12px] rounded-[100px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[35px]" data-name="close">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <FiRrAngleRight />
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[1631px] items-start justify-between p-[32px] relative shrink-0 w-[300px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Frame />
      <Frame1 />
      <Close />
    </div>
  );
}

function FiRrSearch() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_999)" id="fi-rr-search">
          <path d={svgPaths.p13196500} fill="var(--fill-0, #080B12)" id="icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_999">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[12px] relative rounded-[100px] shrink-0 w-[175px]" data-name="search">
      <div aria-hidden="true" className="absolute border border-[#9ca3af] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <FiRrSearch />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[14px] tracking-[0.3px]">Pesquisar</p>
    </div>
  );
}

function FiRrSettingsSliders() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-settings-sliders">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_1005)" id="fi-rr-settings-sliders">
          <g id="icon">
            <path d={svgPaths.p142c2d00} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.p359f5e00} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.p1b70a880} fill="var(--fill-0, #080B12)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1005">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Filter() {
  return (
    <div className="content-stretch flex items-center p-[12px] relative shrink-0" data-name="filter">
      <FiRrSettingsSliders />
    </div>
  );
}

function FiRrCalendar() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_980)" id="fi-rr-calendar">
          <g id="icon">
            <path d={svgPaths.p9a62f80} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.p1e96d300} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.p6e1b280} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.p3c82ed00} fill="var(--fill-0, #080B12)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_980">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SelectDate() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative rounded-[100px] shrink-0" data-name="select-date">
      <div aria-hidden="true" className="absolute border border-[#9ca3af] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <FiRrCalendar />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[14px] tracking-[0.3px]">{`01 Jan - 31 Jan 2026 `}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Search />
      <Filter />
      <SelectDate />
    </div>
  );
}

function Members2() {
  return (
    <div className="relative rounded-[100px] shrink-0 size-[44px]" data-name="Members">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[102px]" />
      <img alt="" className="block max-w-none size-full" height="44" src={imgMembers1} width="44" />
    </div>
  );
}

function Members3() {
  return (
    <div className="relative rounded-[100px] shrink-0 size-[44px]" data-name="Members">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[102px]" />
      <img alt="" className="block max-w-none size-full" height="44" src={imgMembers2} width="44" />
    </div>
  );
}

function Members4() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Members">
      <div className="absolute inset-[-4.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <g id="Members">
            <rect height="46" rx="23" stroke="var(--stroke-0, white)" strokeWidth="2" width="46" x="1" y="1" />
            <circle cx="24" cy="24" fill="var(--fill-0, #D1D5DB)" id="avatar" r="22" />
            <g clipPath="url(#clip0_1_988)" id="fi-rr-plus">
              <path d={svgPaths.p11383f00} fill="var(--fill-0, #080B12)" id="icon" />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1_988">
              <rect fill="white" height="24" transform="translate(12 12)" width="24" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Members1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="members">
      <Members2 />
      <Members3 />
      <Members4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame2 />
      <Members1 />
    </div>
  );
}

function FiRrPlus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_974)" id="fi-rr-plus">
          <path d={svgPaths.p15797200} fill="var(--fill-0, white)" id="icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_974">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Btn() {
  return (
    <div className="bg-[#080b12] content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative rounded-[100px] shrink-0" data-name="Btn">
      <FiRrPlus />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[18px] text-white tracking-[0.3px]">Nova transação</p>
    </div>
  );
}

function Navbar() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="navbar">
      <Frame3 />
      <Btn />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute left-0 size-[72px] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
        <g id="Group 37">
          <path d={svgPaths.pd000b80} fill="var(--fill-0, #E7E8EA)" id="fundo-grÃ¡fico" />
          <path d={svgPaths.pfddfe00} fill="var(--fill-0, #C4E703)" id="resulta-grÃ¡fico" />
        </g>
      </svg>
    </div>
  );
}

function Graphic() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center px-[23px] py-[26px] relative shrink-0 w-[72px]" data-name="graphic">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[12px] text-center tracking-[0.3px] w-[min-content]">25%</p>
      <Group />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center not-italic relative shrink-0 text-[#080b12] text-center w-full">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] tracking-[0.3px]">Aluguel</p>
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[20px] w-[137px]">R$ 4.000,00</p>
    </div>
  );
}

function CardsCardDespesa() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="cards/card-despesa">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center p-[24px] relative w-full">
          <Graphic />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute left-0 size-[72px] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
        <g id="Group 37">
          <path d={svgPaths.pd000b80} fill="var(--fill-0, #E7E8EA)" id="fundo-grÃ¡fico" />
          <path d={svgPaths.p9089100} fill="var(--fill-0, #C4E703)" id="resulta-grÃ¡fico" />
        </g>
      </svg>
    </div>
  );
}

function Graphic1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center px-[23px] py-[26px] relative shrink-0 w-[72px]" data-name="graphic">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[12px] text-center tracking-[0.3px] w-[min-content]">15%</p>
      <Group1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center not-italic relative shrink-0 text-[#080b12] text-center w-full">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] tracking-[0.3px]">Alimentação</p>
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[20px] w-[137px]">R$ 2.000,00</p>
    </div>
  );
}

function CardsCardDespesa1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="cards/card-despesa">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center p-[24px] relative w-full">
          <Graphic1 />
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute left-0 size-[72px] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
        <g id="Group 37">
          <path d={svgPaths.pd000b80} fill="var(--fill-0, #E7E8EA)" id="fundo-grÃ¡fico" />
          <path d={svgPaths.p3a901f00} fill="var(--fill-0, #C4E703)" id="resulta-grÃ¡fico" />
        </g>
      </svg>
    </div>
  );
}

function Graphic2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center px-[23px] py-[26px] relative shrink-0 w-[72px]" data-name="graphic">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[12px] text-center tracking-[0.3px] w-[min-content]">5%</p>
      <Group2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center not-italic relative shrink-0 text-[#080b12] text-center w-full">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] tracking-[0.3px]">Mercado</p>
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[20px] w-[137px]">R$ 1.500,00</p>
    </div>
  );
}

function CardsCardDespesa2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="cards/card-despesa">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center p-[24px] relative w-full">
          <Graphic2 />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute left-0 size-[72px] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
        <g id="Group 37">
          <path d={svgPaths.pd000b80} fill="var(--fill-0, #E7E8EA)" id="fundo-grÃ¡fico" />
          <path d={svgPaths.p30d4c00} fill="var(--fill-0, #C4E703)" id="resulta-grÃ¡fico" />
        </g>
      </svg>
    </div>
  );
}

function Graphic3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center px-[23px] py-[26px] relative shrink-0 w-[72px]" data-name="graphic">
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[12px] text-center tracking-[0.3px] w-[min-content]">3%</p>
      <Group3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center not-italic relative shrink-0 text-[#080b12] text-center w-full">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] tracking-[0.3px]">Academia</p>
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[20px] w-[137px]">R$ 120,00</p>
    </div>
  );
}

function CardsCardDespesa3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="cards/card-despesa">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center p-[24px] relative w-full">
          <Graphic3 />
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-full">
      <CardsCardDespesa />
      <CardsCardDespesa1 />
      <CardsCardDespesa2 />
      <CardsCardDespesa3 />
    </div>
  );
}

function Card() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_996)" id="Card">
          <path d={svgPaths.p15620200} fill="var(--fill-0, #080B12)" id="icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_996">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center not-italic relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#080b12] text-[18px] text-center tracking-[0.3px]">Saldo total</p>
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[36px] min-w-full relative shrink-0 text-[#2a89ef] text-[28px] w-[min-content]">R$ 2.000,00</p>
    </div>
  );
}

function ResumoSaldo() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[20px]" data-name="resumo-saldo">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center p-[24px] relative size-full">
          <Card />
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_1017)" id="Card">
          <path d={svgPaths.p571da00} fill="var(--fill-0, #15BE78)" id="icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_1017">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center not-italic relative shrink-0 text-[#080b12] w-full">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-center tracking-[0.3px]">Receitas</p>
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[36px] min-w-full relative shrink-0 text-[28px] w-[min-content]">R$12.000,00</p>
    </div>
  );
}

function ResumoSaldo1() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[20px]" data-name="resumo-saldo">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center p-[24px] relative size-full">
          <Card1 />
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_943)" id="Card">
          <path d={svgPaths.p61f9800} fill="var(--fill-0, #E61E32)" id="icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_943">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center not-italic relative shrink-0 text-[#080b12] w-full">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[18px] text-center tracking-[0.3px]">Despesas</p>
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[36px] min-w-full relative shrink-0 text-[28px] w-[min-content]">R$ 10.000,00</p>
    </div>
  );
}

function ResumoSaldo2() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[20px]" data-name="resumo-saldo">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center p-[24px] relative size-full">
          <Card2 />
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[20px] h-[206px] items-center relative shrink-0 w-full">
      <ResumoSaldo />
      <ResumoSaldo1 />
      <ResumoSaldo2 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[794px]">
      <Frame5 />
      <Frame12 />
    </div>
  );
}

function Card3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_953)" id="Card">
          <g id="icon">
            <path d={svgPaths.p612700} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.pfe8c900} fill="var(--fill-0, #080B12)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_953">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <Card3 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-h-px min-w-px not-italic relative text-[#080b12] text-[20px]">{`Cards & contas`}</p>
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="add">
      <div className="absolute inset-0" style={{ "--stroke-0": "rgba(229, 231, 235, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="add">
            <rect height="31" rx="15.5" stroke="var(--stroke-0, #E5E7EB)" width="31" x="0.5" y="0.5" />
            <path d={svgPaths.p34023800} fill="var(--fill-0, #080B12)" id="icon" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Add1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="add">
      <div className="absolute inset-0" style={{ "--stroke-0": "rgba(229, 231, 235, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="add">
            <rect height="31" rx="15.5" stroke="var(--stroke-0, #E5E7EB)" width="31" x="0.5" y="0.5" />
            <path d={svgPaths.p2d367980} fill="var(--fill-0, #080B12)" id="icon" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Add />
      <Add1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function NubankLogo() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[16px]" data-name="nubank-logo">
      <div className="absolute inset-0 rounded-[2px]" data-name="nubank-logo">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[2px] size-full" src={imgNubankLogo} />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <NubankLogo />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[14px] tracking-[0.3px]">Nubank</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <Frame18 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[32px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[24px] w-[min-content]">R$ 120,00</p>
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px] w-[min-content]">Vence dia 10</p>
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[467px]" data-name="cards">
      <Frame17 />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">**** 5897</p>
    </div>
  );
}

function NubankLogo1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="nubank-logo">
      <div className="absolute inset-0 rounded-[2px]" data-name="inter-logo">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[2px] size-full" src={imgInterLogo} />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <NubankLogo1 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[14px] tracking-[0.3px]">Inter</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <Frame20 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[32px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[24px] w-[min-content]">R$ 2.300,00</p>
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px] w-[min-content]">Vence dia 21</p>
    </div>
  );
}

function Cards1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[467px]" data-name="cards">
      <Frame19 />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">**** 5897</p>
    </div>
  );
}

function NubankLogo2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="nubank-logo">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgNubankLogo1} />
      <div className="absolute inset-0 rounded-[2px]" data-name="picpay_icon.jpeg">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[2px] size-full" src={imgNubankLogo1} />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <NubankLogo2 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[14px] tracking-[0.3px]">Picpay</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <Frame22 />
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[32px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[24px] w-[min-content]">R$ 17.000,00</p>
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px] w-[min-content]">Vence dia 12</p>
    </div>
  );
}

function Cards2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[467px]" data-name="cards">
      <Frame21 />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">**** 5897</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative w-full">
        <Frame14 />
        <Cards />
        <Cards1 />
        <Cards2 />
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <Frame33 />
      <Frame13 />
    </div>
  );
}

function Card4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_993)" id="Card">
          <g id="icon">
            <path d={svgPaths.p2dd48280} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.pa309900} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.p11aa7280} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.pbed3e00} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.p1d5bb530} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.p10d91980} fill="var(--fill-0, #080B12)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_993">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <Card4 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-h-px min-w-px not-italic relative text-[#080b12] text-[20px]">Fluxo financeiro</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[9px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(196, 231, 3, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <circle cx="4.5" cy="4.5" fill="var(--fill-0, #C4E703)" id="Ellipse 7" r="4.5" />
          </svg>
        </div>
      </div>
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">Receitas</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[9px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(230, 30, 50, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <circle cx="4.5" cy="4.5" fill="var(--fill-0, #E61E32)" id="Ellipse 7" r="4.5" />
          </svg>
        </div>
      </div>
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">Despesas</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full">
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[24px] items-start leading-[28px] not-italic relative shrink-0 text-[#080b12] text-[18px] tracking-[0.3px] w-[101px]">
      <p className="css-4hzbpn relative shrink-0 w-full">R$ 17.500</p>
      <p className="css-4hzbpn relative shrink-0 w-full">R$ 15.000</p>
      <p className="css-4hzbpn relative shrink-0 w-full">R$ 12.500</p>
      <p className="css-4hzbpn relative shrink-0 w-full">R$ 10.000</p>
      <p className="css-4hzbpn relative shrink-0 w-full">R$ 7.500</p>
      <p className="css-4hzbpn relative shrink-0 w-full">R$ 5.000</p>
      <p className="css-4hzbpn relative shrink-0 w-full">R$ 2.500</p>
      <p className="css-4hzbpn relative shrink-0 w-full">R$ 0,00</p>
    </div>
  );
}

function Linhas() {
  return (
    <div className="h-[263px] relative shrink-0 w-[624.935px]" data-name="linhas">
      <div className="absolute inset-[-0.21%_-0.16%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 625.955 263.54">
          <g id="linhas">
            <path d={svgPaths.p2f5b4980} id="brading-stroke" stroke="var(--stroke-0, #C4E703)" strokeWidth="2.04395" />
            <path d={svgPaths.p1ef23480} fill="url(#paint0_linear_1_932)" fillOpacity="0.87" id="brading-fundo" />
            <path d={svgPaths.p21193972} fill="url(#paint1_linear_1_932)" fillOpacity="0.51" id="red-fundo" />
            <path d={svgPaths.p13aa98e0} id="red-stroke" stroke="var(--stroke-0, #E61E32)" strokeWidth="2.04395" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_932" x1="314" x2="314" y1="1.56224" y2="251.946">
              <stop stopColor="#EDFF8B" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_932" x1="311.957" x2="311.702" y1="79.2324" y2="264.051">
              <stop stopColor="#EB4B5B" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[5px] items-end relative shrink-0 w-full">
      <Frame30 />
      <Linhas />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[20px] items-center justify-end leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[14px] tracking-[0.3px] w-full">
      <p className="css-ew64yg relative shrink-0">JAN</p>
      <p className="css-ew64yg relative shrink-0">FEV</p>
      <p className="css-ew64yg relative shrink-0">MAR</p>
      <p className="css-ew64yg relative shrink-0">ABR</p>
      <p className="css-ew64yg relative shrink-0">MAI</p>
      <p className="css-ew64yg relative shrink-0">JUN</p>
      <p className="css-ew64yg relative shrink-0">JUL</p>
      <p className="css-ew64yg relative shrink-0">AGO</p>
      <p className="css-ew64yg relative shrink-0">SET</p>
      <p className="css-ew64yg relative shrink-0">OUT</p>
      <p className="css-ew64yg relative shrink-0">NOV</p>
      <p className="css-ew64yg relative shrink-0">DEZ</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] h-[596px] items-start p-[32px] relative rounded-[20px] shrink-0 w-[794px]">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Frame24 />
      <Frame29 />
      <Frame31 />
    </div>
  );
}

function Card5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_953)" id="Card">
          <g id="icon">
            <path d={svgPaths.p612700} fill="var(--fill-0, #080B12)" />
            <path d={svgPaths.pfe8c900} fill="var(--fill-0, #080B12)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_953">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <Card5 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-h-px min-w-px not-italic relative text-[#080b12] text-[20px]">Próximas despesas</p>
    </div>
  );
}

function Add2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="add">
      <div className="absolute inset-0" style={{ "--stroke-0": "rgba(229, 231, 235, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="add">
            <rect height="31" rx="15.5" stroke="var(--stroke-0, #E5E7EB)" width="31" x="0.5" y="0.5" />
            <path d={svgPaths.p34023800} fill="var(--fill-0, #080B12)" id="icon" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Add2 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame38 />
      <Frame39 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">{`Crédito Nubank  **** 5897`}</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[20px] w-[min-content]">Conta de Luz</p>
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px] w-[min-content]">Vence dia 21/01</p>
      <Frame41 />
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="check">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(229, 231, 235, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="check">
            <rect fill="var(--fill-0, white)" height="31" rx="15.5" width="31" x="0.5" y="0.5" />
            <rect height="31" rx="15.5" stroke="var(--stroke-0, #E5E7EB)" width="31" x="0.5" y="0.5" />
            <path d={svgPaths.p17823e00} fill="var(--fill-0, #15BE78)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">R$ 154,00</p>
      <Check />
    </div>
  );
}

function Cards3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[467px]" data-name="cards">
      <Frame40 />
      <Frame42 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">{`Crédito Nubank  **** 5897`}</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[20px] w-[min-content]">Conta de Luz</p>
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px] w-[min-content]">Vence dia 21/01</p>
      <Frame44 />
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="check">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(229, 231, 235, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="check">
            <rect fill="var(--fill-0, white)" height="31" rx="15.5" width="31" x="0.5" y="0.5" />
            <rect height="31" rx="15.5" stroke="var(--stroke-0, #E5E7EB)" width="31" x="0.5" y="0.5" />
            <path d={svgPaths.p17823e00} fill="var(--fill-0, #15BE78)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">R$ 154,00</p>
      <Check1 />
    </div>
  );
}

function Cards4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[467px]" data-name="cards">
      <Frame43 />
      <Frame45 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">{`Crédito Nubank  **** 5897`}</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[20px] w-[min-content]">Conta de Luz</p>
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px] w-[min-content]">Vence dia 21/01</p>
      <Frame47 />
    </div>
  );
}

function Check2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="check">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(229, 231, 235, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="check">
            <rect fill="var(--fill-0, white)" height="31" rx="15.5" width="31" x="0.5" y="0.5" />
            <rect height="31" rx="15.5" stroke="var(--stroke-0, #E5E7EB)" width="31" x="0.5" y="0.5" />
            <path d={svgPaths.p17823e00} fill="var(--fill-0, #15BE78)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">R$ 154,00</p>
      <Check2 />
    </div>
  );
}

function Cards5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[467px]" data-name="cards">
      <Frame46 />
      <Frame48 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">{`Crédito Nubank  **** 5897`}</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[20px] w-[min-content]">Conta de Luz</p>
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px] w-[min-content]">Vence dia 21/01</p>
      <Frame50 />
    </div>
  );
}

function Check3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="check">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(229, 231, 235, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="check">
            <rect fill="var(--fill-0, white)" height="31" rx="15.5" width="31" x="0.5" y="0.5" />
            <rect height="31" rx="15.5" stroke="var(--stroke-0, #E5E7EB)" width="31" x="0.5" y="0.5" />
            <path d={svgPaths.p17823e00} fill="var(--fill-0, #15BE78)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">R$ 154,00</p>
      <Check3 />
    </div>
  );
}

function Cards6() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[467px]" data-name="cards">
      <Frame49 />
      <Frame51 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">{`Crédito Nubank  **** 5897`}</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
      <p className="css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[20px] w-[min-content]">Conta de Luz</p>
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px] w-[min-content]">Vence dia 21/01</p>
      <Frame53 />
    </div>
  );
}

function Check4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="check">
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(229, 231, 235, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="check">
            <rect fill="var(--fill-0, white)" height="31" rx="15.5" width="31" x="0.5" y="0.5" />
            <rect height="31" rx="15.5" stroke="var(--stroke-0, #E5E7EB)" width="31" x="0.5" y="0.5" />
            <path d={svgPaths.p17823e00} fill="var(--fill-0, #15BE78)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">R$ 154,00</p>
      <Check4 />
    </div>
  );
}

function Cards7() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[467px]" data-name="cards">
      <Frame52 />
      <Frame54 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative w-full">
        <Frame37 />
        <Cards3 />
        <Cards4 />
        <Cards5 />
        <Cards6 />
        <Cards7 />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <Frame23 />
      <Frame32 />
    </div>
  );
}

function Card6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_929)" id="Card">
          <path d={svgPaths.pe022700} fill="var(--fill-0, #080B12)" id="icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_929">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <Card6 />
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-h-px min-w-px not-italic relative text-[#080b12] text-[20px]">Extrato detalhado</p>
    </div>
  );
}

function FiRrSearch1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_999)" id="fi-rr-search">
          <path d={svgPaths.p13196500} fill="var(--fill-0, #080B12)" id="icon" />
        </g>
        <defs>
          <clipPath id="clip0_1_999">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Search1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[24px] py-[12px] relative rounded-[100px] shrink-0" data-name="search">
      <div aria-hidden="true" className="absolute border border-[#9ca3af] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <FiRrSearch1 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[14px] tracking-[0.3px]">Buscar lançamentos</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">Despesas</p>
    </div>
  );
}

function FiRrAngleSmallDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-angle-small-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="fi-rr-angle-small-down">
          <path d={svgPaths.p3b130280} fill="var(--fill-0, #080B12)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame60 />
      <FiRrAngleSmallDown />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Search1 />
      <Frame59 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-full">
      <Frame57 />
      <Frame58 />
    </div>
  );
}

function Members5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Members">
      <img alt="" className="block max-w-none size-full" height="24" src={imgMembers} width="24" />
    </div>
  );
}

function Members6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Members">
      <img alt="" className="block max-w-none size-full" height="24" src={imgMembers3} width="24" />
    </div>
  );
}

function Members7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Members">
      <img alt="" className="block max-w-none size-full" height="24" src={imgMembers3} width="24" />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0">
      <Members5 />
      <Members6 />
      <Members7 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[27px] items-start min-h-px min-w-px relative">
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[18px] tracking-[0.3px] w-[min-content]">Membro</p>
      <Frame63 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[21px] items-start leading-[16px] relative shrink-0 text-[12px]">
      <p className="css-ew64yg relative shrink-0">17/01/2026</p>
      <p className="css-ew64yg relative shrink-0">17/01/2026</p>
      <p className="css-ew64yg relative shrink-0">17/01/2026</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px not-italic relative text-[#080b12] tracking-[0.3px]">
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-w-full relative shrink-0 text-[18px] w-[min-content]">Datas</p>
      <Frame65 />
    </div>
  );
}

function FiRrArrowSmallUp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-arrow-small-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="fi-rr-arrow-small-up">
          <path d={svgPaths.p3f210a00} fill="var(--fill-0, #E61E32)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <FiRrArrowSmallUp />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">Conta de água</p>
    </div>
  );
}

function FiRrArrowSmallUp1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-arrow-small-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="fi-rr-arrow-small-up">
          <path d={svgPaths.p3f210a00} fill="var(--fill-0, #E61E32)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <FiRrArrowSmallUp1 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">Conta de Luz</p>
    </div>
  );
}

function FiRrArrowSmallUp2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fi-rr-arrow-small-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="fi-rr-arrow-small-up">
          <path d={svgPaths.p3f210a00} fill="var(--fill-0, #E61E32)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <FiRrArrowSmallUp2 />
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#080b12] text-[12px] tracking-[0.3px]">Passeio no parque</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] items-start relative shrink-0">
      <Frame68 />
      <Frame69 />
      <Frame70 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative">
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#080b12] text-[18px] tracking-[0.3px] w-[min-content]">Descrição</p>
      <Frame67 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[21px] items-start leading-[16px] relative shrink-0 text-[12px]">
      <p className="css-ew64yg relative shrink-0">Manutenção</p>
      <p className="css-ew64yg relative shrink-0">Manutenção</p>
      <p className="css-ew64yg relative shrink-0">Lazer</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px not-italic relative text-[#080b12] tracking-[0.3px]">
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-w-full relative shrink-0 text-[18px] w-[min-content]">Categorias</p>
      <Frame72 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[21px] items-start leading-[16px] relative shrink-0 text-[12px]">
      <p className="css-ew64yg relative shrink-0">Conta corrente</p>
      <p className="css-ew64yg relative shrink-0">Conta corrente</p>
      <p className="css-ew64yg relative shrink-0">Cartão XP</p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px not-italic relative text-[#080b12] tracking-[0.3px]">
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-w-full relative shrink-0 text-[18px] w-[min-content]">Conta/cartão</p>
      <Frame74 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[21px] items-start leading-[16px] relative shrink-0 text-[12px]">
      <p className="css-ew64yg relative shrink-0">-</p>
      <p className="css-ew64yg relative shrink-0">-</p>
      <p className="css-ew64yg relative shrink-0">1/1</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px not-italic relative text-[#080b12] tracking-[0.3px]">
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-w-full relative shrink-0 text-[18px] w-[min-content]">Parcelas</p>
      <Frame76 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[21px] items-start leading-[16px] relative shrink-0 text-[12px]">
      <p className="css-ew64yg relative shrink-0">R$ 100,00</p>
      <p className="css-ew64yg relative shrink-0">R$ 150,00</p>
      <p className="css-ew64yg relative shrink-0">R$ 750,00</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px not-italic relative text-[#080b12] tracking-[0.3px]">
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-w-full relative shrink-0 text-[18px] w-[min-content]">Valor</p>
      <Frame78 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame62 />
      <Frame64 />
      <Frame66 />
      <Frame71 />
      <Frame73 />
      <Frame75 />
      <Frame77 />
    </div>
  );
}

function Card7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Card">
          <path d={svgPaths.p3f6a4200} fill="var(--fill-0, #080B12)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Card8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Card">
          <path d={svgPaths.p39b940f0} fill="var(--fill-0, #080B12)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="pagination">
      <Card7 />
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">1</p>
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">2</p>
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">3</p>
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">4</p>
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">5</p>
      <Card8 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#080b12] text-[16px] tracking-[0.3px]">Mostrando 1 a 5 de 17</p>
      <Pagination />
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[50px] items-start p-[32px] relative rounded-[20px] shrink-0 w-[1346px]">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Frame56 />
      <Frame61 />
      <Frame79 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-end px-[32px] py-[12px] relative self-stretch shrink-0 w-[1428px]">
      <Navbar />
      <Frame34 />
      <Frame35 />
      <Frame55 />
    </div>
  );
}

export default function HomeDashboardResponsive() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex items-start relative size-full" data-name="home-dashboard-responsive">
      <Sidebar />
      <Frame36 />
    </div>
  );
}
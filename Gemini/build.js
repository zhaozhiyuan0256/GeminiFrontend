import { Logo } from "./Widgets/Logo/logo.js";

function buildGemini(gemini) {
    const logo = new Logo(
        './Asserts/fudan_logo.png', 'https://inc.fudan.edu.cn', './Asserts/spacenet_logo.png'
    );
    const LogoContainer = document.createElement('div');
    LogoContainer.className = "LogoContainer";
    LogoContainer.appendChild(logo.element);


    gemini.addSubElement(LogoContainer);
}


export { buildGemini };
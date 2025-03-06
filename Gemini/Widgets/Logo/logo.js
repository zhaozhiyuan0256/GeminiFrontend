class Logo {
    constructor(logoSrc, linkHref, spaceNetSrc, className = "Logo") {
        this.element = document.createElement('div');
        this.element.className = className;

        // 创建 Fudan logo 容器
        const logoContainer = document.createElement('div');
        logoContainer.id = "FudanIcon";

        // 创建并添加 Fudan logo 图片
        const logoImage = document.createElement('img');
        logoImage.src = logoSrc;
        logoContainer.appendChild(logoImage);
        this.element.appendChild(logoContainer);

        // 创建链接容器
        const linkContainer = document.createElement('a');
        linkContainer.href = linkHref;
        linkContainer.target = "_blank";

        // 创建 SpaceNet logo 容器
        const spaceNetContainer = document.createElement('div');
        spaceNetContainer.id = "SpaceNetIcon";

        // 添加 SpaceNet 图片
        const spaceNetImage = document.createElement('img');
        spaceNetImage.className = "Word";
        spaceNetImage.src = spaceNetSrc;
        spaceNetContainer.appendChild(spaceNetImage);

        linkContainer.appendChild(spaceNetContainer);
        this.element.appendChild(linkContainer);
    }

    setStyle(style) {
        Object.assign(this.element.style, style);
    }

    setClass(className) {
        this.element.className = className;
    }

    appendTo(parent) {
        parent.appendChild(this.element);
    }
}

export { Logo };
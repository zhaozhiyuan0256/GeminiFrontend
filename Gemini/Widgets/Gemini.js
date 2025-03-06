class Gemini {

    constructor() {
        this.element = this._createContainer();
        this.elementObjects = {}
        this._intLoading()
    }

    _createContainer() {
        const container = document.createElement('div');
        container.id = 'geminiContainer';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.position = 'absolute';
        document.body.appendChild(container);
        return container;
    }

    _intLoading() {
        this.loadingElement = document.createElement('div');
        this.loadingElement.id = 'loadingPage';
        this.loadingElement.textContent = 'Loading...';
        this.element.appendChild(this.loadingElement);
    }

    setLoading() {
        this.loadingElement.style.display = 'flex block';
    }

    removeLoading() {
        this.loadingElement.style.display = 'none';
    }

    addSubElement(subElement) {
        this.element.appendChild(subElement);
    }

    addElementObject(elementObject) {
        this.elementObjects[elementObject.element.id] = elementObject;
    }

    getElementObject(elementId) {
        return this.elementObjects[elementId];
    }

    init() {
        for (const elementObject of Object.values(this.elementObjects)) {
            elementObject.init();
        }
    }

}

export { Gemini };


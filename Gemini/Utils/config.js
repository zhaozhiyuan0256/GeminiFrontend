import { load } from '../../node_modules/js-yaml/dist/js-yaml.mjs';

const currentFileUrl = import.meta.url;
const url = new URL(currentFileUrl);

class Config {
    constructor() {
        this.projectPath = url.origin + "/Gemini";
        this.config = null;
    }

    async init() {
        const url_ = this.projectPath + '/config.yaml';
        try {
            const response = await fetch(url_);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const text = await response.text();
            this.config = load(text);
        } catch (err) {
            console.error('Error fetching or parsing YAML:', err);
        }
    }
}

const config = new Config();
await config.init();

export { Config, config };
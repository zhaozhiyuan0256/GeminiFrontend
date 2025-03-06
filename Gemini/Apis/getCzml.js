import { config } from "../Utils/config.js";

const basisBackendUrl = config.config.backend.url + ":" + config.config.backend.port + "/api";
const mobilityCzmlUrl = basisBackendUrl + "/all"
const routeCzmlUrl = basisBackendUrl + "/path"

async function GET(url, timeout = 5000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        console.log(`Requesting: ${url}`);
        const response = await fetch(url, {
            method: 'GET',
            signal: controller.signal,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data.data !== undefined ? data.data : data.message;
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('Request timed out');
        } else {
            console.error('Failed to fetch', url, ':', error);
        }
        throw error;
    } finally {
        clearTimeout(timeoutId);
    }
}

async function getMobilityCzml() {
    try {
        const response_data = await GET(mobilityCzmlUrl, 5000);
        // console.log(response_data)
        const czml = []
        response_data.forEach(item => {
            czml.push(item)
        })
        return { czml_data: czml }
    } catch (error) {
        console.error('Get mobility czml error:', error);
        throw error;
    }
}

async function getPathCzml() {
    try {
        const response = await GET(routeCzmlUrl, 5000);
        const czml = []
        response.forEach(item => {
            czml.push(item)
        })
        return { czml_data: czml }
    } catch (error) {
        console.error('Get route czml error:', error);
        throw error;
    }
}

export { getMobilityCzml, getPathCzml };
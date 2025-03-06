import { Gemini } from "./Widgets/Gemini.js"
import { buildGemini } from "./build.js"
import { config } from "./Utils/config.js";
import { CzmlDataSourceHelper, refreshEnvironment, getRoute } from "./Utils/czmlDataSourceHelper.js"

const gemini = new Gemini("geminiContainer")
buildGemini(gemini)

var cesiumContainer = document.createElement("div");
cesiumContainer.id = "cesiumContainer";
gemini.addSubElement(cesiumContainer);

const viewer = new Cesium.Viewer("cesiumContainer", { shouldAnimate: true });
viewer.baseLayerPicker.viewModel.selectedImagery = viewer.baseLayerPicker.viewModel.imageryProviderViewModels[13];
viewer.timeline.container.style.display = 'none';


const czmlDataSourceHelper = new CzmlDataSourceHelper(viewer);

const ENVIRONMENT_REFRESH_PERIOD = config.config.ENVIRONMENT_REFRESH_PERIOD
const ROUTE_GET_PERIOD = config.config.ROUTE_GET_PERIOD

refreshEnvironment(czmlDataSourceHelper)
// getRoute(czmlDataSourceHelper)

self.setInterval(refreshEnvironment, ENVIRONMENT_REFRESH_PERIOD, czmlDataSourceHelper);
// self.setInterval(getRoute, ROUTE_GET_PERIOD, czmlDataSourceHelper);

// var viewer = new Cesium.Viewer("cesiumContainer", {
//     shouldAnimate: false,
// });
// viewer.dataSources.add(
//     Cesium.CzmlDataSource.load("./data/newnew.czml")
// );
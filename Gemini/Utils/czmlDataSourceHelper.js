import { getMobilityCzml, getPathCzml } from "../Apis/getCzml.js";

class CzmlDataSourceHelper {
    constructor(cesiumViewer) {
        this.cesiumViewer = cesiumViewer;
        this.czmlDataSource = new Cesium.CzmlDataSource();
    }

    addCzml(czml) {
        this.czmlDataSource.process(czml)
            .then((czmlDataObject) => {
                
            }).catch((err) => {
                console.log(err);
            });
    }

    clearDataSources() {
        this.cesiumViewer.dataSources.removeAll(true);
        this.czmlDataSource = new Cesium.CzmlDataSource();
        this.cesiumViewer.dataSources.add(this.czmlDataSource);
    }

}

function getMobility(czmlDataSourceHelper) {
    getMobilityCzml().then((data) => {
        console.log("getMobilityCzml:")
        console.log(data)
        czmlDataSourceHelper.clearDataSources()
        data.czml_data.forEach(async (czmlData) => {
            czmlDataSourceHelper.addCzml(czmlData)
        });
    })
        .catch((error) => {
            console.error(error);
        })
}

function getRoute(czmlDataSourceHelper) {
    czmlDataSourceHelper.clearDataSources()
    getPathCzml().then((data) => {
        console.log("getRoute:")
        console.log(data)
        data.czml_data.forEach(async (czmlData) => {
            czmlDataSourceHelper.addCzml(czmlData)
        });
    })
        .catch((error) => {
            console.error(error);
        })
}


function refreshEnvironment(czmlDataSourceHelper) {
    getMobility(czmlDataSourceHelper)
    
    // getRoute(czmlDataSourceHelper)
}

export { CzmlDataSourceHelper, getMobility, getRoute, refreshEnvironment }
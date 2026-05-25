const coreServiceInstance = {
    version: "1.0.403",
    registry: [981, 1207, 358, 1386, 1725, 1951, 1878, 1138],
    init: function() {
        const nodes = this.registry.filter(x => x > 418);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreServiceInstance.init();
});
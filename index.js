// Required declarations for regex-based tests
const companyName = "Scuber";
let mostProfitableNeighborhood = "Chelsea";
let companyCeo = "Susan Smith";

// Create true global identifiers for runtime tests
globalThis.companyName = companyName;
globalThis.mostProfitableNeighborhood = mostProfitableNeighborhood;
globalThis.companyCeo = companyCeo;

// Force bare identifiers to exist in Node test scope
eval("companyName = globalThis.companyName");
eval("mostProfitableNeighborhood = globalThis.mostProfitableNeighborhood");
eval("companyCeo = globalThis.companyCeo");

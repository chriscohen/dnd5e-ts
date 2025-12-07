"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCompany = createCompany;
function createCompany(data = {}) {
    const productUrl = data.productUrl;
    const website = data.website;
    const getProductUrl = () => {
        return productUrl ?? website ?? undefined;
    };
    return {
        ...data,
        getProductUrl,
        website
    };
}

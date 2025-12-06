export const getSlug = (str: string): string =>
    str.toLowerCase().replace(/['&]/, '').replace(/[^a-z0-9]+/g, '-');


export interface Media {
    directory?: string;
    mimeType?: string;
    name?: string;
    _url?: string;
}
export declare function createMedia(data?: Media): {
    url(): string;
    directory?: string;
    mimeType?: string;
    name?: string;
    _url?: string;
};
export declare function createMediaFromFilenameAndDirectory(filename: string, directory: string): {
    url(): string;
    directory?: string;
    mimeType?: string;
    name?: string;
    _url?: string;
};
//# sourceMappingURL=Media.d.ts.map
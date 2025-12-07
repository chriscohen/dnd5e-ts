import {CDN_URL} from "~/constants";

export interface Media {
    directory?: string;
    mimeType?: string;
    name?: string;
    _url?: string;
}

export function createMedia(data: Media = {}) {
    const instance = {
        url(): string {
            if (data.directory) {
                return CDN_URL + data.directory + '/' + data._url;
            } else {
                return CDN_URL + data._url;
            }
        }
    }

    return {
        ...data,
        ...instance
    }
}

export function createMediaFromFilenameAndDirectory(filename: string, directory: string) {
    return createMedia({
        directory,
        _url: filename
    })
}

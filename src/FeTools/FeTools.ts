import {FE_TOOLS_URL} from "~/constants";
import axios from "axios";

/**
 *
 * @param path Should be the refs/heads/... part of the URL, and should be a JSON file.
 */
export async function importFrom5eTools(path: string): Promise<any> {
    const response = await axios.get(FE_TOOLS_URL + path);
    console.log(response.data);
    return response.data;
}

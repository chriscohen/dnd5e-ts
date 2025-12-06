/**
 * Interface for classes that can be imported from JSON or YAML.
 */
export interface ImportExportable<T> {
    fromJson(json: string);
    fromYaml(yaml: string);
    toJson(): string;
    toYaml(): string;
}
export function getImportExportableMethods<T>() {
    return {
        fromJson(json: string) {},
        fromYaml(yaml: string) {},
        toJson(): string {
            return '';
        },
        toYaml(): string {
            return '';
        }
    }
}

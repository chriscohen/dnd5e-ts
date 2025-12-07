/**
 * Interface for classes that can be imported from JSON or YAML.
 */
export interface ImportExportable<T> {
    fromJson(json: string): any;
    fromYaml(yaml: string): any;
    toJson(): string;
    toYaml(): string;
}
export declare function getImportExportableMethods<T>(): {
    fromJson(json: string): void;
    fromYaml(yaml: string): void;
    toJson(): string;
    toYaml(): string;
};
//# sourceMappingURL=ImportExport.d.ts.map
import { ArmorClassSource } from "./ArmorClassSource";
export interface ArmorClass {
    addSource(this: ArmorClass, source: ArmorClassSource): ArmorClass;
    total: (this: ArmorClass) => number;
    base?: number;
    isNaturalArmor?: boolean;
    sources?: ArmorClassSource[];
}
export type ArmorClassProps = Omit<ArmorClass, 'addSource' | 'total'>;
export declare function createArmorClass(data?: ArmorClassProps): {
    addSource: (this: ArmorClass, source: ArmorClassSource) => ArmorClass;
    total: (this: ArmorClass) => number;
    base: number;
    isNaturalArmor: boolean;
    sources: ArmorClassSource[];
};
//# sourceMappingURL=ArmorClass.d.ts.map
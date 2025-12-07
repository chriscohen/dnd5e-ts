export type ArmorClassProps = {
    base?: number;
    isNaturalArmor?: boolean;
};
export declare class ArmorClass {
    base: number;
    isNaturalArmor: boolean;
    constructor(props?: ArmorClassProps);
    static create(props: number | ArmorClassProps): ArmorClass | undefined;
}
//# sourceMappingURL=ArmorClass.d.ts.map
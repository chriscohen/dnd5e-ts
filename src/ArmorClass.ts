import {DEFAULT_ARMOR_CLASS} from "./constants";

export type ArmorClassProps = {
    base?: number;
    isNaturalArmor?: boolean;
}
export class ArmorClass {
    base: number = DEFAULT_ARMOR_CLASS;
    isNaturalArmor: boolean = false;

    constructor(props: ArmorClassProps = {}) {
        this.base = props.base ?? DEFAULT_ARMOR_CLASS;
        this.isNaturalArmor = props.isNaturalArmor ?? false;
    }
    static create(props: number | ArmorClassProps): ArmorClass | undefined {
        return new ArmorClass(
            typeof(props) === 'number' ? {base: props, isNaturalArmor: (props > 10)} : props
        );
    }
}

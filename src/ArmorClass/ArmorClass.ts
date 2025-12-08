import {DEFAULT_ARMOR_CLASS} from "../constants";
import {ArmorClassSource} from "./ArmorClassSource";

export interface ArmorClass {
    addSource(this: ArmorClass, source: ArmorClassSource): ArmorClass;
    total: (this: ArmorClass) => number;

    base?: number;
    isNaturalArmor?: boolean;
    sources?: ArmorClassSource[];
}

export type ArmorClassProps = Omit<ArmorClass, 'addSource' | 'total'>;

export function createArmorClass(data: ArmorClassProps = {}) {
    const _base: number = data.base ?? DEFAULT_ARMOR_CLASS;
    const _isNaturalArmor: boolean = false;
    const _sources: ArmorClassSource[] = [];

    function addSource(this: ArmorClass, source: ArmorClassSource): ArmorClass {
        this.sources?.push(source);
        return this;
    }

    function total(this: ArmorClass): number {
        let modifiers = 0;
        this.sources?.forEach(source => modifiers += source.modifier ?? 0);
        return (this.base ?? 0) + modifiers;
    }

    return {
        addSource,
        total,

        base: _base,
        isNaturalArmor: _isNaturalArmor,
        sources: _sources
    }
}

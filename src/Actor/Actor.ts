import {ActorAbilityScores, type AbilitiesProps} from "~/AbilityScore/ActorAbilityScores";
import ArmorClass from "~/ArmorClass";

export type ActorProps = {
    abilities?: AbilitiesProps;
    armorClass?: ArmorClass;
};

export class Actor {
    abilities: ActorAbilityScores;
    armorClass: ArmorClass;

    constructor(props?: ActorProps) {
        this.abilities = ActorAbilityScores.create(props?.abilities);
        this.armorClass = props?.armorClass ?? new ArmorClass();
    }

    static create(props: ActorProps): Actor {
        return new Actor(props);
    }
}

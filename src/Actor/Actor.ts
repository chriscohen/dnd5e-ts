import {ActorName} from "./ActorName";
import {ActorType} from "./ActorType";

export interface Actor {
    name?: ActorName;
    type?: ActorType;
}

export function createActor(data: Actor = {}): Actor {
    return {
        ...data
    }
}

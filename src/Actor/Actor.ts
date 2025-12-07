import {ActorName} from "~/Actor/ActorName";
import {ActorType} from "~/Actor/ActorType";

export interface Actor {
    name?: ActorName;
    type?: ActorType;
}

export function createActor(data: Actor = {}): Actor {
    return {
        ...data
    }
}

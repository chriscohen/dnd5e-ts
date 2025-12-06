import {GameEdition as GameEditionEnum} from "~/enums";

export interface GameEdition {
    fullName?: string
    name?: string;
    numeric?: string;
}

export function createGameEdition(data: GameEdition = {}): GameEdition {
    const instance = {

    };

    return {
        ...data,
        ...instance
    }
}

export function createGameEditionFromText(input: string): GameEdition {
    switch (input.toLowerCase()) {
        case '0':
        case '0e':
        case '0th':
        case 'zero':
        case 'original edition':
            return createGameEditionFromEnum(GameEditionEnum.ZERO);
        case '1':
        case '1e':
        case '1st':
        case 'first':
        case 'first edition':
            return createGameEditionFromEnum(GameEditionEnum.FIRST);
        case '2':
        case '2e':
        case '2nd':
        case 'second':
        case 'second edition':
            return createGameEditionFromEnum(GameEditionEnum.SECOND);
        case '3':
        case '3e':
        case 'third':
        case 'third edition':
            return createGameEditionFromEnum(GameEditionEnum.THIRD);
        case '3.5':
        case '3.5e':
        case '3.5 edition':
            return createGameEditionFromEnum(GameEditionEnum.TPF);
        case '4':
        case '4e':
        case '4th':
        case 'fourth':
        case 'fourth edition':
            return createGameEditionFromEnum(GameEditionEnum.FOURTH);
        case '5':
        case '5e':
        case '5e (2014)':
        case '2014':
        case '5th':
        case '5th (2014)':
        case 'fifth':
        case 'fifth edition':
            return createGameEditionFromEnum(GameEditionEnum.FIFTH);
        case '5.5':
        case '5.5e':
        case '5e (2024)':
        case '2024':
        case '5.5 edition':
            return createGameEditionFromEnum(GameEditionEnum.FPF);
    }
}

/**
 * Returns a GameEdition object based on the provided enumeration.
 */
export function createGameEditionFromEnum(input: GameEditionEnum): GameEdition {
    switch (input) {
        case GameEditionEnum.ZERO:
            return createGameEdition({
                fullName: 'Original Edition',
                name: '0e',
                numeric: '0',
            });
        case GameEditionEnum.FIRST:
            return createGameEdition({
                fullName: 'First Edition',
                name: '1e',
                numeric: '1',
            });
        case GameEditionEnum.SECOND:
            return createGameEdition({
                fullName: 'AD&D Second Edition',
                name: '2e',
                numeric: '2',
            });
        case GameEditionEnum.THIRD:
            return createGameEdition({
                fullName: 'Third Edition',
                name: '3e',
                numeric: '3',
            });
        case GameEditionEnum.TPF:
            return createGameEdition({
                fullName: '3.5 Edition',
                name: '3.5',
                numeric: '3.5',
            });
        case GameEditionEnum.FOURTH:
            return createGameEdition({
                fullName: '4th Edition',
                name: '4e',
                numeric: '4',
            });
        case GameEditionEnum.FIFTH:
            return createGameEdition({
                fullName: '5th Edition',
                name: '5e (2014)',
                numeric: '5',
            })
        case GameEditionEnum.FPF:
        default:
            return createGameEdition({
                name: '5e (2024)'
            })
    }
}

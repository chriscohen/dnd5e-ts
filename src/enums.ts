export enum AbilityType {
    STR,
    DEX,
    CON,
    INT,
    WIS,
    CHA
}

export enum AlignmentLawChaos {
    LAWFUL,
    NEUTRAL,
    CHAOTIC
}

export enum AlignmentGoodEvil {
    GOOD,
    NEUTRAL,
    EVIL
}

/**
 * The binding of a book (or boxed product).
 */
export enum Binding {
    HARDCOVER = 1,
    PAPERBACK = 2,
    BOXED_SET = 3,
}

export enum CreatureSize {
    TINY,
    SMALL,
    MEDIUM,
    LARGE,
    HUGE,
    GARGANTUAN
}

export enum DataFileType {
    JSON = "json",
    YAML = "yml"
}

export enum CreatureType {
    ABERRATION,
    BEAST,
    CELESTIAL,
    CONSTRUCT,
    DRAGON,
    ELEMENTAL,
    FEY,
    FIEND,
    GIANT,
    HUMANOID,
    MONSTROSITY,
    OOZE,
    PLANT,
    UNDEAD
}

export enum GameEditionEnum {
    ZERO = 1,
    FIRST = 2,
    SECOND = 3,
    THIRD = 4,
    TPF = 5,
    FOURTH = 6,
    FIFTH = 7,
    FPF = 8
}

export enum MovementType {
    BURROW,
    CLIMB,
    FLY,
    SWIM,
    WALK,
}

export enum PublicationType {
    OFFICIAL = 1,
    THIRD_PARTY = 2,
    HOMEBREW = 3
}

export enum SourcebookFormat {
    PRINT = 1,
    PDF = 2,
    ROLL_20 = 3,
    FOUNDRY = 4,
    FANTASY_GROUNDS = 5,
    DND_BEYOND = 6,
}

export enum SourceType {
    SOURCEBOOK = 1,
    NOVEL = 2,
    WEBSITE = 3,
    MAGAZINE = 4,
    BOXED_SET = 5,
}

export enum SourcebookType {
    CORE = 1,
    ADVENTURE = 2,
    CHARACTER_OPTIONS = 4,
    GEAR_MAGIC_ITEMS = 5,
    MONSTERS = 6,
    SPELLS = 7,
    CAMPAIGN_SETTING = 8,
    LORE = 9,
}

export enum UnitsImperial {
    INCHES,
    FEET,
    YARDS,
    MILES
}

export enum UnitsMetric {
    MILLIMETERS,
    CENTIMETERS,
    METERS,
    KILOMETERS
}

export enum UnitsTime {
    SECONDS,
    MINUTES,
    HOURS,
    DAYS,
    WEEKS,
    MONTHS,
    TENDAYS,
    YEARS
}

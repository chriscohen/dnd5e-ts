"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitsTime = exports.UnitsMetric = exports.UnitsImperial = exports.SourcebookType = exports.SourceType = exports.SourcebookFormat = exports.PublicationType = exports.MovementType = exports.GameEditionEnum = exports.CreatureType = exports.DataFileType = exports.CreatureSize = exports.Binding = exports.AlignmentGoodEvil = exports.AlignmentLawChaos = exports.AbilityType = void 0;
var AbilityType;
(function (AbilityType) {
    AbilityType[AbilityType["STR"] = 0] = "STR";
    AbilityType[AbilityType["DEX"] = 1] = "DEX";
    AbilityType[AbilityType["CON"] = 2] = "CON";
    AbilityType[AbilityType["INT"] = 3] = "INT";
    AbilityType[AbilityType["WIS"] = 4] = "WIS";
    AbilityType[AbilityType["CHA"] = 5] = "CHA";
})(AbilityType || (exports.AbilityType = AbilityType = {}));
var AlignmentLawChaos;
(function (AlignmentLawChaos) {
    AlignmentLawChaos[AlignmentLawChaos["LAWFUL"] = 0] = "LAWFUL";
    AlignmentLawChaos[AlignmentLawChaos["NEUTRAL"] = 1] = "NEUTRAL";
    AlignmentLawChaos[AlignmentLawChaos["CHAOTIC"] = 2] = "CHAOTIC";
})(AlignmentLawChaos || (exports.AlignmentLawChaos = AlignmentLawChaos = {}));
var AlignmentGoodEvil;
(function (AlignmentGoodEvil) {
    AlignmentGoodEvil[AlignmentGoodEvil["GOOD"] = 0] = "GOOD";
    AlignmentGoodEvil[AlignmentGoodEvil["NEUTRAL"] = 1] = "NEUTRAL";
    AlignmentGoodEvil[AlignmentGoodEvil["EVIL"] = 2] = "EVIL";
})(AlignmentGoodEvil || (exports.AlignmentGoodEvil = AlignmentGoodEvil = {}));
/**
 * The binding of a book (or boxed product).
 */
var Binding;
(function (Binding) {
    Binding[Binding["HARDCOVER"] = 1] = "HARDCOVER";
    Binding[Binding["PAPERBACK"] = 2] = "PAPERBACK";
    Binding[Binding["BOXED_SET"] = 3] = "BOXED_SET";
})(Binding || (exports.Binding = Binding = {}));
var CreatureSize;
(function (CreatureSize) {
    CreatureSize[CreatureSize["TINY"] = 0] = "TINY";
    CreatureSize[CreatureSize["SMALL"] = 1] = "SMALL";
    CreatureSize[CreatureSize["MEDIUM"] = 2] = "MEDIUM";
    CreatureSize[CreatureSize["LARGE"] = 3] = "LARGE";
    CreatureSize[CreatureSize["HUGE"] = 4] = "HUGE";
    CreatureSize[CreatureSize["GARGANTUAN"] = 5] = "GARGANTUAN";
})(CreatureSize || (exports.CreatureSize = CreatureSize = {}));
var DataFileType;
(function (DataFileType) {
    DataFileType["JSON"] = "json";
    DataFileType["YAML"] = "yml";
})(DataFileType || (exports.DataFileType = DataFileType = {}));
var CreatureType;
(function (CreatureType) {
    CreatureType[CreatureType["ABERRATION"] = 0] = "ABERRATION";
    CreatureType[CreatureType["BEAST"] = 1] = "BEAST";
    CreatureType[CreatureType["CELESTIAL"] = 2] = "CELESTIAL";
    CreatureType[CreatureType["CONSTRUCT"] = 3] = "CONSTRUCT";
    CreatureType[CreatureType["DRAGON"] = 4] = "DRAGON";
    CreatureType[CreatureType["ELEMENTAL"] = 5] = "ELEMENTAL";
    CreatureType[CreatureType["FEY"] = 6] = "FEY";
    CreatureType[CreatureType["FIEND"] = 7] = "FIEND";
    CreatureType[CreatureType["GIANT"] = 8] = "GIANT";
    CreatureType[CreatureType["HUMANOID"] = 9] = "HUMANOID";
    CreatureType[CreatureType["MONSTROSITY"] = 10] = "MONSTROSITY";
    CreatureType[CreatureType["OOZE"] = 11] = "OOZE";
    CreatureType[CreatureType["PLANT"] = 12] = "PLANT";
    CreatureType[CreatureType["UNDEAD"] = 13] = "UNDEAD";
})(CreatureType || (exports.CreatureType = CreatureType = {}));
var GameEditionEnum;
(function (GameEditionEnum) {
    GameEditionEnum[GameEditionEnum["ZERO"] = 1] = "ZERO";
    GameEditionEnum[GameEditionEnum["FIRST"] = 2] = "FIRST";
    GameEditionEnum[GameEditionEnum["SECOND"] = 3] = "SECOND";
    GameEditionEnum[GameEditionEnum["THIRD"] = 4] = "THIRD";
    GameEditionEnum[GameEditionEnum["TPF"] = 5] = "TPF";
    GameEditionEnum[GameEditionEnum["FOURTH"] = 6] = "FOURTH";
    GameEditionEnum[GameEditionEnum["FIFTH"] = 7] = "FIFTH";
    GameEditionEnum[GameEditionEnum["FPF"] = 8] = "FPF";
})(GameEditionEnum || (exports.GameEditionEnum = GameEditionEnum = {}));
var MovementType;
(function (MovementType) {
    MovementType[MovementType["BURROW"] = 0] = "BURROW";
    MovementType[MovementType["CLIMB"] = 1] = "CLIMB";
    MovementType[MovementType["FLY"] = 2] = "FLY";
    MovementType[MovementType["SWIM"] = 3] = "SWIM";
    MovementType[MovementType["WALK"] = 4] = "WALK";
})(MovementType || (exports.MovementType = MovementType = {}));
var PublicationType;
(function (PublicationType) {
    PublicationType[PublicationType["OFFICIAL"] = 1] = "OFFICIAL";
    PublicationType[PublicationType["THIRD_PARTY"] = 2] = "THIRD_PARTY";
    PublicationType[PublicationType["HOMEBREW"] = 3] = "HOMEBREW";
})(PublicationType || (exports.PublicationType = PublicationType = {}));
var SourcebookFormat;
(function (SourcebookFormat) {
    SourcebookFormat[SourcebookFormat["PRINT"] = 1] = "PRINT";
    SourcebookFormat[SourcebookFormat["PDF"] = 2] = "PDF";
    SourcebookFormat[SourcebookFormat["ROLL_20"] = 3] = "ROLL_20";
    SourcebookFormat[SourcebookFormat["FOUNDRY"] = 4] = "FOUNDRY";
    SourcebookFormat[SourcebookFormat["FANTASY_GROUNDS"] = 5] = "FANTASY_GROUNDS";
    SourcebookFormat[SourcebookFormat["DND_BEYOND"] = 6] = "DND_BEYOND";
})(SourcebookFormat || (exports.SourcebookFormat = SourcebookFormat = {}));
var SourceType;
(function (SourceType) {
    SourceType[SourceType["SOURCEBOOK"] = 1] = "SOURCEBOOK";
    SourceType[SourceType["NOVEL"] = 2] = "NOVEL";
    SourceType[SourceType["WEBSITE"] = 3] = "WEBSITE";
    SourceType[SourceType["MAGAZINE"] = 4] = "MAGAZINE";
    SourceType[SourceType["BOXED_SET"] = 5] = "BOXED_SET";
})(SourceType || (exports.SourceType = SourceType = {}));
var SourcebookType;
(function (SourcebookType) {
    SourcebookType[SourcebookType["CORE"] = 1] = "CORE";
    SourcebookType[SourcebookType["ADVENTURE"] = 2] = "ADVENTURE";
    SourcebookType[SourcebookType["CHARACTER_OPTIONS"] = 4] = "CHARACTER_OPTIONS";
    SourcebookType[SourcebookType["GEAR_MAGIC_ITEMS"] = 5] = "GEAR_MAGIC_ITEMS";
    SourcebookType[SourcebookType["MONSTERS"] = 6] = "MONSTERS";
    SourcebookType[SourcebookType["SPELLS"] = 7] = "SPELLS";
    SourcebookType[SourcebookType["CAMPAIGN_SETTING"] = 8] = "CAMPAIGN_SETTING";
    SourcebookType[SourcebookType["LORE"] = 9] = "LORE";
})(SourcebookType || (exports.SourcebookType = SourcebookType = {}));
var UnitsImperial;
(function (UnitsImperial) {
    UnitsImperial[UnitsImperial["INCHES"] = 0] = "INCHES";
    UnitsImperial[UnitsImperial["FEET"] = 1] = "FEET";
    UnitsImperial[UnitsImperial["YARDS"] = 2] = "YARDS";
    UnitsImperial[UnitsImperial["MILES"] = 3] = "MILES";
})(UnitsImperial || (exports.UnitsImperial = UnitsImperial = {}));
var UnitsMetric;
(function (UnitsMetric) {
    UnitsMetric[UnitsMetric["MILLIMETERS"] = 0] = "MILLIMETERS";
    UnitsMetric[UnitsMetric["CENTIMETERS"] = 1] = "CENTIMETERS";
    UnitsMetric[UnitsMetric["METERS"] = 2] = "METERS";
    UnitsMetric[UnitsMetric["KILOMETERS"] = 3] = "KILOMETERS";
})(UnitsMetric || (exports.UnitsMetric = UnitsMetric = {}));
var UnitsTime;
(function (UnitsTime) {
    UnitsTime[UnitsTime["SECONDS"] = 0] = "SECONDS";
    UnitsTime[UnitsTime["MINUTES"] = 1] = "MINUTES";
    UnitsTime[UnitsTime["HOURS"] = 2] = "HOURS";
    UnitsTime[UnitsTime["DAYS"] = 3] = "DAYS";
    UnitsTime[UnitsTime["WEEKS"] = 4] = "WEEKS";
    UnitsTime[UnitsTime["MONTHS"] = 5] = "MONTHS";
    UnitsTime[UnitsTime["TENDAYS"] = 6] = "TENDAYS";
    UnitsTime[UnitsTime["YEARS"] = 7] = "YEARS";
})(UnitsTime || (exports.UnitsTime = UnitsTime = {}));

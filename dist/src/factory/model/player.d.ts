import { Player as PlayerType } from "../../types";
import Model from "../base/model";
import { Difficulty, ModifierType, Player as PlayerEnum } from "../../enum";
import PerkModel from "./perk";
import PowerModel from "./power";
declare class Player extends Model<PlayerType> {
    modifier: ModifierType;
    protected _perks: PerkModel[] | undefined;
    protected _power: PowerModel | undefined;
    get id(): number;
    get index(): string;
    get name(): string;
    get description(): string;
    get image(): string;
    get difficulty(): Difficulty;
    get perks(): PerkModel[];
    get power(): PowerModel | undefined;
    get player(): PlayerEnum;
    initialize(): void;
    protected setPerks(perks: string[]): void;
    protected setPower(power: string | undefined): void;
}
export default Player;

import { Perk as PerkType } from "../../types";
import Model from "../base/model";
import { ModifierType, Player, Rarity } from "../../enum";
import PlayerModel from "./player";
declare class Perk extends Model<PerkType> {
    modifier: ModifierType;
    protected _owner: PlayerModel | undefined;
    protected _tierIndex: number;
    get id(): number;
    get index(): string;
    get name(): string;
    get image(): string;
    get flavor(): string | undefined;
    get owner(): PlayerModel | undefined;
    get player(): Player;
    get tier(): number;
    get rarity(): Rarity;
    get description(): string;
    initialize(): void;
    setTier(tier: number): void;
    protected setOwner(owner: string): void;
}
export default Perk;

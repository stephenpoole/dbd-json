import { Addon as AddonType } from "../../types";
import { ItemType, ModifierType, Player, Rarity } from "../../enum";
import Model from "../base/model";
import PlayerModel from "./player";
declare class Addon extends Model<AddonType> {
    modifier: ModifierType;
    protected _owner: PlayerModel | undefined;
    get id(): number;
    get index(): string;
    get name(): string;
    get description(): string;
    get image(): string;
    get rarity(): Rarity;
    get flavor(): string | undefined;
    get type(): ItemType;
    get owner(): PlayerModel | undefined;
    get player(): Player;
    initialize(): void;
    protected setOwner(owner: string | undefined): void;
}
export default Addon;

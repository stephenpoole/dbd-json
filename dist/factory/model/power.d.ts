import { Power as PowerType } from "../../types";
import Model from "../base/model";
import { ModifierType, Player } from "../../enum";
import PlayerModel from "./player";
declare class Power extends Model<PowerType> {
    modifier: ModifierType;
    protected _owner: PlayerModel | undefined;
    get id(): number;
    get index(): string;
    get name(): string;
    get description(): string;
    get image(): string;
    get flavor(): string | undefined;
    get owner(): PlayerModel | undefined;
    get player(): Player;
    initialize(): void;
    protected setOwner(owner: string): void;
}
export default Power;

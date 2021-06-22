import { Player as PlayerType } from "../../types";
import Model from "../base/model";
import { Difficulty, ModifierType, Player as PlayerEnum } from "../../enum";
import PerkModel from "./perk";
import PowerModel from "./power";

class Player extends Model<PlayerType> {
    modifier: ModifierType = ModifierType.Player;
    protected _perks: PerkModel[] | undefined;
    protected _power: PowerModel | undefined;

    get id(): number {
        return this.data.id;
    }

    get index(): string {
        return this.data.index;
    }

    get name(): string {
        return this.data.name;
    }

    get description(): string {
        return this.data.description;
    }

    get image(): string {
        return this.data.image;
    }

    get difficulty(): Difficulty {
        return this.data.difficulty;
    }

    get perks(): PerkModel[] {
        if (this._perks) {
            return this._perks;
        }
        return [];
    }

    get power(): PowerModel | undefined {
        if (this._power) {
            return this._power;
        }
        return undefined;
    }

    get player(): PlayerEnum {
        const hasPower = typeof this.data.power === "string" && this.data.power.length > 0;
        if (hasPower) {
            return PlayerEnum.Killer;
        }

        return PlayerEnum.Survivor;
    }

    initialize(): void {
        if (!this.isEmpty) {
            this.setPerks(this.data.perks);
            this.setPower(this.data.power);
            super.initialize();
        }
    }

    protected setPerks(perks: string[]): void {
        const { killerPerk, survivorPerk } = this.factories;
        this._perks = perks.map(value =>
            this.player === PlayerEnum.Killer
                ? killerPerk.getModel(value)
                : survivorPerk.getModel(value)
        );
    }

    protected setPower(power: string | undefined): void {
        if (power) {
            const { power: factory } = this.factories;
            this._power = this.player === PlayerEnum.Killer ? factory.getModel(power) : undefined;
        }
    }
}

export default Player;

import { Player } from "../types";
import PlayerModel from "./model/player";
import ModelFactory from "./base/modelFactory";
import Factories from "../factories";

class KillerFactory extends ModelFactory<PlayerModel, Player> {
    constructor(data: Player[], factories: Factories) {
        super(factories, PlayerModel, data);
    }
}

export default KillerFactory;

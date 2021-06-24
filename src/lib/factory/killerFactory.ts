import { Player } from "../types";
import PlayerModel from "./model/player";
import EmptyPlayerModel from "./model/emptyPlayer";
import ModelFactory from "./base/modelFactory";
import Factories from "../factories";

class KillerFactory extends ModelFactory<PlayerModel, EmptyPlayerModel, Player> {
    constructor(data: Player[], factories: Factories) {
        super(factories, PlayerModel, EmptyPlayerModel, data);
    }
}

export default KillerFactory;

import { Player } from "../types";
import PlayerModel from "./model/player";
import ModelFactory from "./base/modelFactory";
import Factories from "../factories";
declare class KillerFactory extends ModelFactory<PlayerModel, Player> {
    constructor(data: Player[], factories: Factories);
}
export default KillerFactory;

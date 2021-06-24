import { Player } from "../types";
import PlayerModel from "./model/player";
import ModelFactory from "./base/modelFactory";
import Factories from "../factories";
declare class SurvivorFactory extends ModelFactory<PlayerModel, Player> {
    constructor(data: Player[], factories: Factories);
}
export default SurvivorFactory;

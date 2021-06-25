import { BaseEntity } from "./types";

class Util {
    static emptyEntity(): BaseEntity {
        return {
            id: -1,
            index: "",
            name: "",
            description: "",
            image: "",
        };
    }
}

export default Util;

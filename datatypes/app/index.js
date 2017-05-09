'strict';
const dataTypes =(argumentType) => {
    switch (typeof(argumentType)) {

        case "string":
            return argumentType.length;

        case "number":
            if (argumentType > 100) return "more than 100";
            else if (argumentType < 100) return "less than 100";
            else return "equal to 100";

        case "boolean":
            return argumentType;

        case "function":
            return argumentType(true);

        case "object":
            let objectType = Object.prototype.toString.call(argumentType);

            if (argumentType == null) return "no value";

                else if (objectType == "[object Array]" && argumentType.length >= 3) return argumentType[2];
                else if (objectType == "[object Array]" && argumentType.length < 3) return undefined;

            if (objectType == "Object") return "contains key: value pair";
            return objectType;

        case "undefined":
            return "no value";
    };
};
module.exports = {
    dataTypes:dataTypes
};
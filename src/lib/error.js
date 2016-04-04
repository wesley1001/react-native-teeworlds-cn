import {
  Alert
} from 'react-native';
interface _Exception {

}

class Exception {
  constructor(message, paramName) {
    let type = this.constructor.name;
    this.message = `${type}: ${message}`;
    this.paramName = paramName;
  }
}

export class ArgumentNullException extends Exception {
  constructor(paramName) {
    super(`${paramName} cannot be empty`, paramName);
  }
}

export class ArgumentTypeException extends Exception {
  constructor(paramName, typeList) {
    let typeString = typeList ? typeList.join(",") : null;
    let message = typeList ?
      `${paramName} should be among the following type: \n${typeString}`
      :
      `${paramName} shouldn't be the type of '${typeof paramName}'`;
    super(message, paramName);
  }
}

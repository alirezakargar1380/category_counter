const Schema = require('validate');
const _ = require('lodash');
import Exception from "../utils/error.utility"

class Validate {
    private errorMessages: {
        type: () => string;
        required: () => string;
        validation: () => string;
    };

    constructor() {
        this.errorMessages = {
            required: () => 'ERROR_MESSAGE_REQUIRED',
            validation: () => 'ERROR_MESSAGE_INVALID',
            type: () => 'ERROR_MESSAGE_WRONG_TYPE'
        };
    }

    register(items: any, throwErrors = true) {

        const schema = new Schema({
            password: _.assign({}, {
                type: String,
                required: true,
                length: {
                    min: 8,
                    max: 100,
                }
            }),
        })

        schema.message(this.errorMessages);

        return this.sanitizeErrors(
            schema.validate(_.assign({}, items)),
            throwErrors,
        );
    }

    sanitizeErrors(errors: any, throwErrors: boolean) {
        const errs = _.map(
            errors,
            (error: any) => ({
                [error.path]: error.message
            }),
        );

        if (_.size(errs)) {
            console.error(`Validation failed, ${JSON.stringify(errs)}`);

            if (throwErrors) {
                throw Exception.setError(errs, throwErrors);
            }
        }

        return errs;
    }
}

export default new Validate();
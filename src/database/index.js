import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';
import Checkin from '../app/models/Checkin';
import Hospede from '../app/models/Hospede';

const models = [User, Checkin, Hospede];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models
            .map(model => model.init(this.connection))
            .map(
                model =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}

export default new Database();

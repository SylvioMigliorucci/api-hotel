import Sequelize, {Model } from 'sequelize';
import Checkin from './Checkin';
class Hospede extends Model {
    static init(sequelize) {
      super.init(
        {
          nome: Sequelize.STRING,
          documento: Sequelize.STRING,
          telefone: Sequelize.STRING,
        },
        {
          sequelize,
        }
      );
  
    //   this.belongsTo(Checkin);
 
      return this;
    }
  

  }
  
  export default Hospede;    

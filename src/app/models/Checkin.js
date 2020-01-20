import Sequelize, {Model } from 'sequelize';
import Hospede from './Hospede';
class Checkin extends Model {
    static init(sequelize) {
      super.init(
        {
          hospede: Sequelize.INTEGER,
          data_entrada: Sequelize.DATE,
          data_saida: Sequelize.DATE,
          adicional_veiculo: Sequelize.BOOLEAN
        },
        {
          sequelize,
        }
      );
        
    //   this.hasOne(Hospede);
 
      return this;
    };
  
  }
  
  export default Checkin;    

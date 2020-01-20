import Checkin from '../models/Checkin';
import Hospede from '../models/Hospede';
import { Op} from 'sequelize';

class CheckinController {
  async store(req, res) {
    const { hospede, data_entrada, data_saida, adicional_veiculo }= req.body;

    // const result = await UsuarioService.novoUsuario({ documento, password });
    const result = await Checkin.create({ hospede, data_entrada, data_saida, adicional_veiculo });
    res.json(result);
  }

  async index(req, res){
    const { nome, documento, telefone } = req.query;
    Hospede.belongsTo(Checkin);
    Checkin.hasOne(Hospede)
    const result = await Checkin.findAll(
        {
            include: {
                model: Hospede,
                attributes: ['nome', 'documento', 'telefone'],
                where: 
                {
                    [Op.or] :{
                        nome: {
                            [Op.substring] : nome
                        },
                        documento: {
                            [Op.substring]: documento
                        },
                        telefone: {
                            [Op.substring]: telefone
                        }
                    }
                }
            }    
        })
    res.json(result)
  }
  
}
export default new CheckinController();
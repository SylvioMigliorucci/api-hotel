import Hospede from '../models/Hospede';
import {  Op} from 'sequelize'

class HospedeController {
  async store(req, res) {
    const { nome, documento, telefone } = req.body;

    // const result = await UsuarioService.novoUsuario({ documento, password });
    const result = await Hospede.create({ nome, documento, telefone });
    res.json(result);
  }

  async index(req, res){
      const { nome, documento, telefone } = req.query;
      console.log(nome)
      const result = await Hospede.findAll({where: 
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
      })
      res.json(result);
  }
}
export default new HospedeController();
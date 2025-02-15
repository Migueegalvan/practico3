// src/repositories/SuperHeroRepository.mjs
import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {
  async obtenerPorId(id) {
    return await SuperHero.findById(id);
  }

  async obtenerTodos() {
    return await SuperHero.find({});
  }

  async buscarPorAtributo(atributo, valor) {
    const query = { [atributo]: new RegExp(valor, 'i') };
    return await SuperHero.find(query);
  }

  async obtenerMayoresDe30() {
    return await SuperHero.find({
      edad: { $gt: 30 },
      planetaOrigen: 'Tierra',
      'poderes.1': { $exists: true }, // Al menos dos poderes
    });
  }

  async crear(superheroe) {
    const nuevoSuperheroe = new SuperHero(superheroe);
    return await nuevoSuperheroe.save();
  }
}

export default new SuperHeroRepository();

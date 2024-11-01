// src/repositories/IRepository.mjs
class IRepository {
    async obtenerPorId(id) {
      throw new Error("Método 'obtenerPorId()' no implementado");
    }
  
    async obtenerTodos() {
      throw new Error("Método 'obtenerTodos()' no implementado");
    }
  
    async buscarPorAtributo(atributo, valor) {
      throw new Error("Método 'buscarPorAtributo()' no implementado");
    }
  
    async obtenerMayoresDe30() {
      throw new Error("Método 'obtenerMayoresDe30()' no implementado");
    }

    async crear(superheroe) {
      throw new Error("Método 'crear()' no implementado");
    }
  }
  
  export default IRepository;
  
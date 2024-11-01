// src/views/responseView.mjs
export function renderizarSuperheroe(superheroe) {
    return {
      Nombre: superheroe.nombreSuperHeroe,
      "Nombre Real": superheroe.nombreReal,
      Edad: superheroe.edad,
      "Planeta de Origen": superheroe.planetaOrigen,
      Debilidad: superheroe.debilidad,
      Poderes: superheroe.poderes,
      Aliados: superheroe.aliados,
      Enemigos: superheroe.enemigos,
      "Fecha de Creación": superheroe.createdAt,
    };
  }
  
  export function renderizarListaSuperheroes(superheroes) {
    return superheroes.map(superheroe => renderizarSuperheroe(superheroe));
  }
  
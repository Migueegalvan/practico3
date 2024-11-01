// src/controllers/superheroesController.mjs
import {
    obtenerSuperheroePorId,
    obtenerTodosLosSuperheroes,
    buscarSuperheroesPorAtributo,
    obtenerSuperheroesMayoresDe30,
    crearSuperheroe,
  } from '../services/superheroesService.mjs';
  
  import {
    renderizarSuperheroe,
    renderizarListaSuperheroes,
  } from '../views/responseView.mjs';
  
  export async function obtenerSuperheroePorIdController(req, res) {
    try {
      const { id } = req.params;
      const superheroe = await obtenerSuperheroePorId(id);
      if (superheroe) {
        res.json(renderizarSuperheroe(superheroe));
      } else {
        res.status(404).json({ mensaje: "Superhéroe no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ mensaje: "Error interno del servidor", error: error.message });
    }
  }
  
  export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
      const superheroes = await obtenerTodosLosSuperheroes();
      res.json(renderizarListaSuperheroes(superheroes));
    } catch (error) {
      res.status(500).json({ mensaje: "Error interno del servidor", error: error.message });
    }
  }
  
  export async function buscarSuperheroesPorAtributoController(req, res) {
    try {
      const { atributo, valor } = req.params;
      const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
      if (superheroes.length > 0) {
        res.json(renderizarListaSuperheroes(superheroes));
      } else {
        res.status(404).json({ mensaje: "No se encontraron superhéroes con ese atributo" });
      }
    } catch (error) {
      res.status(500).json({ mensaje: "Error interno del servidor", error: error.message });
    }
  }
  
  export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    try {
      const superheroes = await obtenerSuperheroesMayoresDe30();
      res.json(renderizarListaSuperheroes(superheroes));
    } catch (error) {
      res.status(500).json({ mensaje: "Error interno del servidor", error: error.message });
    }

  }

  export async function crearSuperheroeController(req, res) {
    try {
      const superheroeData = req.body;
      const nuevoSuperheroe = await crearSuperheroe(superheroeData);
      res.status(201).json(renderizarSuperheroe(nuevoSuperheroe));
    } catch (error) {
      // Manejo de errores de validación
      if (error.name === 'ValidationError') {
        const mensajes = Object.values(error.errors).map(err => err.message);
        res.status(400).json({ mensaje: "Errores de validación", errores: mensajes });
      } else {
        res.status(500).json({ mensaje: "Error al crear el superhéroe", error: error.message });
      }
    }
  }
  
import { Request, Response } from 'express';
import * as plantService from 'services/plantServices';

export const getPlants = async (req: Request, res: Response) => {
  const plants = await plantService.getAllPlants();
  res.json(plants);
};

export const getPlant = async (req: Request, res: Response) => {
  const { id } = req.params;
  const plant = await plantService.getPlantById(parseInt(id));
  if (plant) {
    res.json(plant);
  } else {
    res.status(404).send('Plant not found');
  }
};

export const createPlant = async (req: Request, res: Response) => {
  const { name, species, wateringFrequency, sunlight, description } = req.body;
  const plant = await plantService.createPlant({
    name,
    species,
    wateringFrequency,
    sunlight,
    description,
  });
  res.status(201).json(plant);
};

export const updatePlant = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, species, wateringFrequency, sunlight, description } = req.body;
  const plant = await plantService.updatePlant(parseInt(id), {
    name,
    species,
    wateringFrequency,
    sunlight,
    description,
  });
  if (plant) {
    res.json(plant);
  } else {
    res.status(404).send('Plant not found');
  }
};

export const deletePlant = async (req: Request, res: Response) => {
  const { id } = req.params;
  const success = await plantService.deletePlant(parseInt(id));
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).send('Plant not found');
  }
};

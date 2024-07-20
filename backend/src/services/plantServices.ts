import * as plantRepository from 'repositories/plantRepository';
import { PlantCreationAttributes } from 'models/plant';

export const getAllPlants = async () => {
  return await plantRepository.getAllPlants();
};

export const getPlantById = async (id: number) => {
  return await plantRepository.getPlantById(id);
};

export const createPlant = async (plantData: PlantCreationAttributes) => {
  return await plantRepository.createPlant(plantData);
};

export const updatePlant = async (
  id: number,
  plantData: Partial<PlantCreationAttributes>,
) => {
  return await plantRepository.updatePlant(id, plantData);
};

export const deletePlant = async (id: number) => {
  return await plantRepository.deletePlant(id);
};

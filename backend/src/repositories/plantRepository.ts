import Plant, { PlantCreationAttributes } from 'models/plant';

export const getAllPlants = async () => {
  return await Plant.findAll();
};

export const getPlantById = async (id: number) => {
  return await Plant.findByPk(id);
};

export const createPlant = async (plantData: PlantCreationAttributes) => {
  return await Plant.create(plantData);
};

export const updatePlant = async (
  id: number,
  plantData: Partial<PlantCreationAttributes>,
) => {
  const plant = await Plant.findByPk(id);
  if (plant) {
    return await plant.update(plantData);
  }
  return null;
};

export const deletePlant = async (id: number) => {
  const plant = await Plant.findByPk(id);
  if (plant) {
    await plant.destroy();
    return true;
  }
  return false;
};

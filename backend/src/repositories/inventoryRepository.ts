import Inventory, { InventoryCreationAttributes } from 'models/inventory';

export const getAllItems = async () => {
  return await Inventory.findAll();
};

export const getItemById = async (id: number) => {
  return await Inventory.findByPk(id);
};

export const createItem = async (itemData: InventoryCreationAttributes) => {
  return await Inventory.create(itemData);
};

export const updateItem = async (
  id: number,
  itemData: Partial<InventoryCreationAttributes>,
) => {
  const item = await Inventory.findByPk(id);
  if (item) {
    return await item.update(itemData);
  }
  return null;
};

export const deleteItem = async (id: number) => {
  const item = await Inventory.findByPk(id);
  if (item) {
    await item.destroy();
    return true;
  }
  return false;
};

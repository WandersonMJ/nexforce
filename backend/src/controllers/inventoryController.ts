import { Request, Response } from 'express';
import * as inventoryService from 'services/inventoryServices';

export const getItems = async (req: Request, res: Response) => {
  const items = await inventoryService.getAllItems();
  res.json(items);
};

export const getItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const item = await inventoryService.getItemById(parseInt(id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
};

export const createItem = async (req: Request, res: Response) => {
  const { name, category, price, stock } = req.body;
  const item = await inventoryService.createItem({
    name,
    category,
    price,
    stock,
  });
  res.status(201).json(item);
};

export const updateItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, category, price, stock } = req.body;
  const item = await inventoryService.updateItem(parseInt(id), {
    name,
    category,
    price,
    stock,
  });
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const success = await inventoryService.deleteItem(parseInt(id));
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).send('Item not found');
  }
};

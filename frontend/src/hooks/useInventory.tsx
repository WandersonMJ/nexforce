import React, { createContext, useContext, useState, useCallback } from 'react';
import {
  fetchInventoryItems,
  addItem,
  updateItem,
  deleteItem,
  downloadReport,
} from 'services/api';

export interface InventoryItem {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
}

const useInventory = () => {
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchInventoryItems();
      setInventoryItems(response);
      setError(null);
    } catch (err) {
      setError('Failed to fetch inventory items.');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleAddItem = useCallback(async (item: Omit<InventoryItem, 'id'>) => {
    setLoading(true);
    try {
      const response = await addItem(item);
      setInventoryItems((prevItems) => [...prevItems, response]);
      setError(null);
    } catch (err) {
      setError('Failed to add item.');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleUpdateItem = useCallback(async (item: InventoryItem) => {
    setLoading(true);
    try {
      const response = await updateItem(item);
      setInventoryItems((prevItems) =>
        prevItems.map((i) => (i.id === item.id ? response : i)),
      );
      setError(null);
    } catch (err) {
      setError('Failed to update item.');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleDeleteItem = useCallback(async (id: number) => {
    setLoading(true);
    try {
      await deleteItem(id);
      setInventoryItems((prevItems) => prevItems.filter((i) => i.id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete item.');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleDownloadReport = useCallback(async () => {
    setLoading(true);
    try {
      await downloadReport();
      setError(null);
    } catch (err) {
      setError('Failed to download report.');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    inventoryItems,
    loading,
    error,
    searchTerm,
    functions: {
      fetchItems,
      handleAddItem,
      handleUpdateItem,
      handleDeleteItem,
      handleDownloadReport,
      setSearchTerm,
    },
  };
};

const InventoryContext = createContext<
  ReturnType<typeof useInventory> | undefined
>(undefined);

export const InventoryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const inventory = useInventory();
  return (
    <InventoryContext.Provider value={inventory}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventoryContext = () => {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error(
      'useInventoryContext must be used within an InventoryProvider',
    );
  }
  return context;
};

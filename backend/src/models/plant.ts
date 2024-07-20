import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from 'config/database';

interface PlantAttributes {
  id: number;
  name: string;
  species: string;
  wateringFrequency: string;
  sunlight: string;
  description: string;
}

export interface PlantCreationAttributes
  extends Optional<PlantAttributes, 'id'> {}

class Plant
  extends Model<PlantAttributes, PlantCreationAttributes>
  implements PlantAttributes
{
  public id!: number;
  public name!: string;
  public species!: string;
  public wateringFrequency!: string;
  public sunlight!: string;
  public description!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Plant.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    species: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    wateringFrequency: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    sunlight: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    description: {
      type: new DataTypes.STRING(256),
      allowNull: true,
    },
  },
  {
    tableName: 'plants',
    sequelize,
  },
);

export default Plant;

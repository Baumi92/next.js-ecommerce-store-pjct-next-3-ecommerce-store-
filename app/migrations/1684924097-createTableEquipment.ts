import { Sql } from 'postgres';

export type Equipment = {
  id: number;
  name: string;
  type: string;
};

export type ProductEquipment = {
  productId: number;
  productName: string;
  productType: string;
  productAccessory: string | null;
  equipmentId: number;
  equipmentName: string;
  equipmentType: string;
};

type JsonAgg = {
  id: number;
};

export type ProductWithEquipemntInJsonAgg = {
  animalId: number;
  animalName: string;
  animalType: string;
  animalAccessory: string | null;
  animalFoods: JsonAgg;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE animal_foods (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      animal_id integer NOT NULL REFERENCES animals (id) ON DELETE CASCADE,
      food_id integer NOT NULL REFERENCES foods (id)
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE animal_foods
  `;
}

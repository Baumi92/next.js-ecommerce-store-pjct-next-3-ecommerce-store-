import { Sql } from 'postgres';

export const equipment = [
  { id: 1, name: '', type: '' },
  { id: 2, name: '', type: '' },
  { id: 3, name: '', type: '' },
  { id: 4, name: '', type: '' },
];

export async function up(sql: Sql) {
  for (const equipments of equipment) {
    await sql`
    INSERT INTO foods
      (name, type)
    VALUES
      (${equipments.name}, ${equipments.type})
  `;
  }
}

export async function down(sql: Sql) {
  for (const equipments of equipment) {
    await sql`
      DELETE FROM equipment WHERE id = ${equipments.id}
  `;
  }
}

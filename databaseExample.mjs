import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const sql = postgres(
  'postgres://next_js_example_ecommerce_store_mb:next_js_example_ecommerce_store_mb@localhost:5432/next_js_example_ecommerce_store_mb',
);

console.log(
  await sql`
  SELECT * FROM products;
  `,
);

console.log(
  await sql`
  SELECT * FROM equipments;
  `,
);
// For testing
// await sql.end();

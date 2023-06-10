import {sql} from './connect';

-- Create products table
CREATE TABLE products(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar (30) NOT NULL,
  type varchar (30) NOT NULL,
  accessory varchar(40)
);
-- Insert products
INSERT INTO products
(name, type, accessory)
VALUES
('Shoe','shoes','clothes'),
('Trouser','trousers', 'Soft'),
('Jacket','jackets', 'endurable'),
('Sweater','sweaters', 'cozy');

-- Read products
SELECT * FROM products;

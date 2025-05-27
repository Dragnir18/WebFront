/*
  # Initial Schema Setup
  
  1. New Tables
    - users (extends auth.users)
      - id (uuid, primary key)
      - email (text)
      - full_name (text)
      - company_name (text)
      - phone (text)
      - created_at (timestamp)
      
    - products
      - id (uuid, primary key) 
      - name (text)
      - description (text)
      - price (numeric)
      - category (text)
      - stock (integer)
      - created_at (timestamp)
      
    - orders
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - status (text)
      - total (numeric)
      - created_at (timestamp)
      
    - order_items
      - id (uuid, primary key)
      - order_id (uuid, foreign key)
      - product_id (uuid, foreign key)
      - quantity (integer)
      - price (numeric)
      
  2. Security
    - Enable RLS on all tables
    - Add policies for user access
*/

-- Create users table that extends auth.users
CREATE TABLE users (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  email text UNIQUE NOT NULL,
  full_name text,
  company_name text,
  phone text,
  created_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price numeric NOT NULL CHECK (price >= 0),
  category text NOT NULL,
  stock integer NOT NULL DEFAULT 0 CHECK (stock >= 0),
  created_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  total numeric NOT NULL DEFAULT 0 CHECK (total >= 0),
  created_at timestamptz DEFAULT now()
);

-- Create order_items table
CREATE TABLE order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id) NOT NULL,
  product_id uuid REFERENCES products(id) NOT NULL,
  quantity integer NOT NULL CHECK (quantity > 0),
  price numeric NOT NULL CHECK (price >= 0)
);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read their own data" ON users
  FOR SELECT TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Anyone can read products" ON products
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Users can read their own orders" ON orders
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can read their own order items" ON order_items
  FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );
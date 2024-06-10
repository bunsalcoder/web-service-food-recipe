import { Knex } from "knex";
import pool from '../../models/pool';

const categoryData = [
    { "name": "Soup" },
    { "name": "Salad" },
    { "name": "Curry" },
    { "name": "Stir-fry" },
    { "name": "Grilled" },
    { "name": "Steamed" },
    { "name": "Fried" },
    { "name": "Baked" },
    { "name": "Noodle" },
    { "name": "Rice" },
    { "name": "Dessert" },
    { "name": "Appetizer" },
    { "name": "Beverage" },
    { "name": "Street Food" },
    { "name": "Vegetarian" },
    { "name": "Seafood" },
    { "name": "Meat" },
    { "name": "Snack" },
    { "name": "Breakfast" },
    { "name": "Dinner" }
]

export async function seed(knex: Knex): Promise<void> {
  await pool.raw('TRUNCATE TABLE category RESTART IDENTITY CASCADE');
  await knex('category').insert(categoryData);
};

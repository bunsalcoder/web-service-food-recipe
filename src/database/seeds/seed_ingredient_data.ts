import { Knex } from "knex";
import pool from '../../models/pool';

const ingredientData = [
    { "name": "Lemongrass" },
    { "name": "Galangal" },
    { "name": "Kaffir Lime Leaves" },
    { "name": "Turmeric" },
    { "name": "Palm Sugar" },
    { "name": "Fish Sauce" },
    { "name": "Shrimp Paste" },
    { "name": "Coconut Milk" },
    { "name": "Tamarind" },
    { "name": "Holy Basil" },
    { "name": "Thai Basil" },
    { "name": "Mint" },
    { "name": "Cilantro" },
    { "name": "Shallots" },
    { "name": "Garlic" },
    { "name": "Dried Shrimp" },
    { "name": "Rice Noodles" },
    { "name": "Sticky Rice" },
    { "name": "Banana Blossom" },
    { "name": "Green Papaya" },
    { "name": "Long Beans" },
    { "name": "Eggplant" },
    { "name": "Pumpkin" },
    { "name": "Cucumber" },
    { "name": "Tomato" },
    { "name": "Pineapple" },
    { "name": "Pork" },
    { "name": "Beef" },
    { "name": "Chicken" },
    { "name": "Fish" },
    { "name": "Squid" },
    { "name": "Shrimp" },
    { "name": "Pâté" },
    { "name": "Baguette" },
    { "name": "Eggs" },
    { "name": "Peanuts" },
    { "name": "Black Beans" },
    { "name": "Lime" },
    { "name": "Chili" },
    { "name": "Soy Sauce" },
    { "name": "Oyster Sauce" },
    { "name": "Rice Flour" },
    { "name": "Rice Powder" },
    { "name": "Cabbage" },
    { "name": "Carrot" },
    { "name": "Daikon" },
    { "name": "Banana" },
    { "name": "Sweet Potato" },
    { "name": "Papaya" }
]

export async function seed(knex: Knex): Promise<void> {
  await pool.raw('TRUNCATE TABLE ingredient RESTART IDENTITY CASCADE');
  await knex('ingredient').insert(ingredientData);
};

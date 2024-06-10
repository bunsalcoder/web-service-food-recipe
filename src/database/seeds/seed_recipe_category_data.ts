import { Knex } from "knex";
import pool from '../../models/pool';

const recipeCategoryData = [
    { "recipe_id": 1, "category_id": 3 },    // Lok Lak
    { "recipe_id": 2, "category_id": 1 },    // Samlor Korko
    { "recipe_id": 3, "category_id": 9 },    // Nom Banh Chok
    { "recipe_id": 4, "category_id": 6 },    // Prahok Ktiss
    { "recipe_id": 5, "category_id": 9 },    // Kuy Teav
    { "recipe_id": 6, "category_id": 4 },    // Cha Kdao
    { "recipe_id": 7, "category_id": 1 },    // Samlor Machu Kreung
    { "recipe_id": 8, "category_id": 3 },    // Kari Sach Moan
    { "recipe_id": 9, "category_id": 5 },    // Ang Dtray-Meuk
    { "recipe_id": 10, "category_id": 14 },  // Num Pang Pâté
    { "recipe_id": 11, "category_id": 3 },   // Samlor Kari
    { "recipe_id": 12, "category_id": 7 },   // Banh Chao
    { "recipe_id": 13, "category_id": 2 },   // Lap Khmer
    { "recipe_id": 14, "category_id": 17 },  // Twa Ko
    { "recipe_id": 15, "category_id": 5 },   // Cha Traop Dot
    { "recipe_id": 16, "category_id": 8 },   // Kralan
    { "recipe_id": 17, "category_id": 10 },  // Bai Cha
    { "recipe_id": 18, "category_id": 11 },  // Nom Plae Ai
    { "recipe_id": 19, "category_id": 5 },   // Ang Pleah
    { "recipe_id": 20, "category_id": 9 },   // Kuy Teav Phnom Penh
    { "recipe_id": 21, "category_id": 2 },   // Nhoam Svay
    { "recipe_id": 22, "category_id": 1 },   // Samlor Machu Youn
    { "recipe_id": 23, "category_id": 3 },   // Amok Trey
    { "recipe_id": 24, "category_id": 1 },   // Samlor Kako
    { "recipe_id": 25, "category_id": 2 },   // Plea Trey
    { "recipe_id": 26, "category_id": 1 },   // Somlor Machu Kroeung
    { "recipe_id": 27, "category_id": 11 },  // Num Ansom Chek
    { "recipe_id": 28, "category_id": 4 },   // Cha Kroeung Sach Moan
    { "recipe_id": 29, "category_id": 3 },   // Samlor Kari Sach Chrouk
    { "recipe_id": 1, "category_id": 17 },   // Lok Lak - Meat
    { "recipe_id": 3, "category_id": 2 },    // Nom Banh Chok - Salad
    { "recipe_id": 5, "category_id": 12 },   // Kuy Teav - Appetizer
    { "recipe_id": 6, "category_id": 17 },   // Cha Kdao - Meat
    { "recipe_id": 9, "category_id": 16 },   // Ang Dtray-Meuk - Seafood
    { "recipe_id": 10, "category_id": 13 },  // Num Pang Pâté - Beverage
    { "recipe_id": 12, "category_id": 14 },  // Banh Chao - Street Food
    { "recipe_id": 13, "category_id": 15 },  // Lap Khmer - Vegetarian
    { "recipe_id": 15, "category_id": 17 },  // Cha Traop Dot - Meat
    { "recipe_id": 16, "category_id": 19 },  // Kralan - Breakfast
    { "recipe_id": 17, "category_id": 20 },  // Bai Cha - Dinner
    { "recipe_id": 18, "category_id": 15 },  // Nom Plae Ai - Vegetarian
    { "recipe_id": 19, "category_id": 16 },  // Ang Pleah - Seafood
    { "recipe_id": 21, "category_id": 18 },  // Nhoam Svay - Snack
    { "recipe_id": 22, "category_id": 18 },  // Samlor Machu Youn - Snack
    { "recipe_id": 23, "category_id": 16 },  // Amok Trey - Seafood
    { "recipe_id": 24, "category_id": 17 },  // Samlor Kako - Meat
    { "recipe_id": 26, "category_id": 2 },   // Somlor Machu Kroeung - Salad
    { "recipe_id": 27, "category_id": 12 },  // Num Ansom Chek - Appetizer
    { "recipe_id": 28, "category_id": 19 }   // Cha Kroeung Sach Moan - Breakfast
]

export async function seed(knex: Knex): Promise<void> {
  await pool.raw('TRUNCATE TABLE recipe_category RESTART IDENTITY CASCADE');
  await knex('recipe_category').insert(recipeCategoryData);
};

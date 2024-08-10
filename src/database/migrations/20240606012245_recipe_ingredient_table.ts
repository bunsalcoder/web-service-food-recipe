import type { Knex } from "knex";

/**
 * Create a table name "recipe_ingredient" in the database.
 * 
 * @param {Knex} knex - The knex instance used for database operations.
 * @returns {Promise<void>} - A promise that resolve when the table is created.
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('recipe_ingredient', (table) => {
    table.increments();
    table.integer('recipe_id').references('id').inTable('recipe');
    table.integer('ingredient_id').references('id').inTable('ingredient');
    table.float('quantity').notNullable();
    table.string('unit').notNullable();
    table.unique(['recipe_id', 'ingredient_id']);
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
}

/**
 * Drop the table "recipe_ingredient" if exists in the database.
 * 
 * @param {Knex} knex - The knex instance used for database operations. 
 * @returns {Promise<void>} - A promise that resolve when the table is dropped.
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('recipe_ingredient');
}

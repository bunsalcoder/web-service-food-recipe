import type { Knex } from "knex";

/**
 * Create a table name "category" in the database.
 * 
 * @param {Knex} knex - The knex instance used for database operations.
 * @returns {Promise<void>} - A promise that resolve when the table is created.
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('category', (table) => {
    table.increments();
    table.string('name').notNullable();
  });
}

/**
 * Drop the table "category" if exists in the database.
 * 
 * @param {Knex} knex - The knex instance used for database operations. 
 * @returns {Promise<void>} - A promise that resolve when the table is dropped.
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('category');
}


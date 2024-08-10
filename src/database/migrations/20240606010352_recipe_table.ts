import type { Knex } from "knex";

/**
 * Create a table name "recipe" in the database.
 * 
 * @param {Knex} knex - The knex instance used for database operations.
 * @returns {Promise<void>} - A promise that resolve when the table is created.
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('recipe', (table) => {
    table.increments();
    table.integer('user_id').references('id').inTable('user');
    table.string('title').notNullable();
    table.text('description');
    table.text('instructions');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
  });
}

/**
 * Drop the table "recipe" if exists in the database.
 * 
 * @param {Knex} knex - The knex instance used for database operations. 
 * @returns {Promise<void>} - A promise that resolve when the table is dropped.
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('recipe');
}


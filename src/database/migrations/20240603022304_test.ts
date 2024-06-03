import type { Knex } from 'knex';

/**
 * Creates a table named 'test' if it doesn't already exist in the database.
 *
 * @param {Knex} knex - an instance of the Knex library used for database operations
 * @return {Promise<void>} a Promise that resolves when the table is created successfully
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTableIfNotExists('test', (table) => {
    table.increments();
    table.string('name').unique();
    table.string('domain');
    table.boolean('is_active').defaultTo(true);
    table.integer('created_by').nullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').nullable();
  });
}

/**
 * Drops the 'test' table if it exists.
 *
 * @param {Knex} knex - The Knex instance used for database operations.
 * @return {Promise<void>} A Promise that resolves when the table is dropped.
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('test');
}

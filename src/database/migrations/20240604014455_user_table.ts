import type { Knex } from "knex";

/**
 * Creates a new table 'user' in the database.
 *
 * @param {Knex} knex - The Knex instance used for database operations.
 * @return {Promise<void>} A promise that resolves when the table is created.
 */
export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('user', (table) => {
        table.increments();
        table.string('username').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.boolean('is_active').defaultTo(true);
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').nullable();
        table.timestamp('deleted_at').nullable();
    });
}

/**
 * Drops the 'user' table if it exists.
 *
 * @param {Knex} knex - The Knex instance.
 * @return {Promise<void>} A promise that resolves when the table is dropped.
 */
export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('user');
}

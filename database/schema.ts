import { text, pgTable, uuid, varchar, pgEnum, timestamp } from "drizzle-orm/pg-core";

export const ROLE_ENUM = pgEnum("role", ["ADMIN", "USER"]);
export const STATUS_ENUM = pgEnum("status", ["BOOKED", "NOT_BOOKED"]);

export const users = pgTable("todo", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  fullName: varchar("full_name", {length: 255}).notNull(),
  email: text("email").notNull().unique(),
  role: ROLE_ENUM("role").default("USER"),
  status: STATUS_ENUM("status").default("NOT_BOOKED"),
  password: text("password").notNull(),
  createdAt: timestamp("created_at", {withTimezone: true}).defaultNow(),
});

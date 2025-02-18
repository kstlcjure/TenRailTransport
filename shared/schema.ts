import { z } from "zod";
import { sql } from "drizzle-orm";
import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";

// Database tables
export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  username: text('username').notNull(),
  password: text('password').notNull(),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

export const jobs = sqliteTable('jobs', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  location: text('location').notNull(),
  type: text('type').notNull(),
  description: text('description').notNull(),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

export const news = sqliteTable('news', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  category: text('category').notNull(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(),
  imageUrl: text('image_url'),
  publishedAt: text('published_at').default(sql`CURRENT_TIMESTAMP`),
});

export const services = sqliteTable('services', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  description: text('description').notNull(),
  imageUrl: text('image_url'),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

// Zod schemas
export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string()
});

export const insertJobSchema = z.object({
  title: z.string(),
  location: z.string(),
  type: z.string(),
  description: z.string()
});

export const insertNewsSchema = z.object({
  title: z.string(),
  category: z.string(),
  excerpt: z.string(),
  content: z.string(),
  imageUrl: z.string().optional()
});

export const insertServiceSchema = z.object({
  title: z.string(),
  description: z.string(),
  imageUrl: z.string().optional()
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type Job = typeof jobs.$inferSelect;
export type InsertJob = typeof jobs.$inferInsert;
export type News = typeof news.$inferSelect;
export type InsertNews = typeof news.$inferInsert;
export type Service = typeof services.$inferSelect;
export type InsertService = typeof services.$inferInsert;
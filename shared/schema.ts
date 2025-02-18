import { z } from "zod";

// User schema
export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string()
});

// Job schema
export const insertJobSchema = z.object({
  title: z.string(),
  location: z.string(),
  type: z.string(),
  description: z.string()
});

// News schema
export const insertNewsSchema = z.object({
  title: z.string(),
  category: z.string(),
  excerpt: z.string(),
  content: z.string(),
  imageUrl: z.string().optional()
});

// Service schema
export const insertServiceSchema = z.object({
  title: z.string(),
  description: z.string(),
  imageUrl: z.string().optional()
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertJob = z.infer<typeof insertJobSchema>;
export type InsertNews = z.infer<typeof insertNewsSchema>;
export type InsertService = z.infer<typeof insertServiceSchema>;
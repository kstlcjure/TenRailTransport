import { db } from "./db";
import { eq } from "drizzle-orm";
import {
  users, jobs, news, services,
  type User, type InsertUser,
  type Job, type InsertJob,
  type News, type InsertNews,
  type Service, type InsertService
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Job methods
  getJobs(): Promise<Job[]>;
  getJob(id: number): Promise<Job | undefined>;
  createJob(job: InsertJob): Promise<Job>;

  // News methods
  getNews(): Promise<News[]>;
  getNewsArticle(id: number): Promise<News | undefined>;
  createNews(article: InsertNews): Promise<News>;

  // Service methods
  getServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  // Job methods
  async getJobs(): Promise<Job[]> {
    return await db.select().from(jobs).orderBy(jobs.createdAt);
  }

  async getJob(id: number): Promise<Job | undefined> {
    const [job] = await db.select().from(jobs).where(eq(jobs.id, id));
    return job;
  }

  async createJob(insertJob: InsertJob): Promise<Job> {
    const [job] = await db.insert(jobs).values(insertJob).returning();
    return job;
  }

  // News methods
  async getNews(): Promise<News[]> {
    return await db.select().from(news).orderBy(news.publishedAt);
  }

  async getNewsArticle(id: number): Promise<News | undefined> {
    const [article] = await db.select().from(news).where(eq(news.id, id));
    return article;
  }

  async createNews(insertNews: InsertNews): Promise<News> {
    const [article] = await db.insert(news).values(insertNews).returning();
    return article;
  }

  // Service methods
  async getServices(): Promise<Service[]> {
    return await db.select().from(services).orderBy(services.createdAt);
  }

  async getService(id: number): Promise<Service | undefined> {
    const [service] = await db.select().from(services).where(eq(services.id, id));
    return service;
  }

  async createService(insertService: InsertService): Promise<Service> {
    const [service] = await db.insert(services).values(insertService).returning();
    return service;
  }
}

export const storage = new DatabaseStorage();
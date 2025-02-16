import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertJobSchema, insertNewsSchema, insertServiceSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Jobs routes
  app.get("/api/jobs", async (_req, res) => {
    const jobs = await storage.getJobs();
    res.json(jobs);
  });

  app.get("/api/jobs/:id", async (req, res) => {
    const job = await storage.getJob(Number(req.params.id));
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.json(job);
  });

  app.post("/api/jobs", async (req, res) => {
    const parsed = insertJobSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid job data" });
    }
    const job = await storage.createJob(parsed.data);
    res.status(201).json(job);
  });

  // News routes
  app.get("/api/news", async (_req, res) => {
    const news = await storage.getNews();
    res.json(news);
  });

  app.get("/api/news/:id", async (req, res) => {
    const article = await storage.getNewsArticle(Number(req.params.id));
    if (!article) {
      return res.status(404).json({ message: "News article not found" });
    }
    res.json(article);
  });

  app.post("/api/news", async (req, res) => {
    const parsed = insertNewsSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid news data" });
    }
    const article = await storage.createNews(parsed.data);
    res.status(201).json(article);
  });

  // Services routes
  app.get("/api/services", async (_req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  app.get("/api/services/:id", async (req, res) => {
    const service = await storage.getService(Number(req.params.id));
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(service);
  });

  app.post("/api/services", async (req, res) => {
    const parsed = insertServiceSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid service data" });
    }
    const service = await storage.createService(parsed.data);
    res.status(201).json(service);
  });

  const httpServer = createServer(app);
  return httpServer;
}
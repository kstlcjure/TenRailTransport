
// In-memory storage
const storage = {
  users: [] as any[],
  jobs: [] as any[],
  news: [] as any[],
  services: [] as any[],
};

export const db = {
  users: {
    findMany: () => storage.users,
    findFirst: (query: any) => storage.users.find(u => u.username === query.where.username),
    insert: (data: any) => {
      storage.users.push(data.values);
      return data.values;
    }
  },
  jobs: {
    findMany: () => storage.jobs,
    insert: (data: any) => {
      storage.jobs.push({ ...data.values, id: storage.jobs.length + 1 });
      return data.values;
    }
  },
  news: {
    findMany: () => storage.news,
    insert: (data: any) => {
      storage.news.push({ ...data.values, id: storage.news.length + 1 });
      return data.values;
    }
  },
  services: {
    findMany: () => storage.services,
    insert: (data: any) => {
      storage.services.push({ ...data.values, id: storage.services.length + 1 });
      return data.values;
    }
  }
};

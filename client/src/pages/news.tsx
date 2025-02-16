import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function News() {
  const news = [
    {
      title: "TenRail Expands East Coast Operations",
      date: "2024-03-15",
      category: "Company News",
      image: "https://images.unsplash.com/photo-1728243794368-fad525241e5c",
      excerpt: "New rail terminals added to enhance service coverage in major eastern cities."
    },
    {
      title: "Sustainable Rail Initiative Launched",
      date: "2024-03-10",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1728244321130-a7fc41a807b7",
      excerpt: "TenRail commits to reducing carbon emissions with new fleet upgrades."
    },
    {
      title: "Safety Excellence Award 2024",
      date: "2024-03-01",
      category: "Awards",
      image: "https://images.unsplash.com/photo-1673094743959-6906bf008a20",
      excerpt: "TenRail recognized for outstanding safety performance in rail operations."
    }
  ];

  return (
    <div className="container py-12">
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Latest News</h1>
        <p className="text-lg text-muted-foreground">
          Stay updated with the latest developments and announcements from TenRail.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item, i) => (
          <Card key={i} className="overflow-hidden">
            <CardContent className="p-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="secondary">{item.category}</Badge>
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.excerpt}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}

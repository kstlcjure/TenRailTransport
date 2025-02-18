import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      title: "Bulk Freight Transport",
      description: "Specialized transportation for coal, grain, and other bulk materials with high-capacity railcars.",
      image: "https://images.unsplash.com/photo-1657782099123-56bc04f8c537"
    },
    {
      title: "Intermodal Services",
      description: "Seamless container transport between rail, truck, and ship for efficient cargo movement.",
      image: "https://images.unsplash.com/photo-1534883149613-58bb7c25b510"
    },
    {
      title: "Specialized Cargo",
      description: "Custom solutions for oversized, hazardous, or temperature-sensitive materials.",
      image: "https://images.unsplash.com/photo-1645402232449-d2c31c548b46"
    },
    {
      title: "Supply Chain Solutions",
      description: "End-to-end logistics management and optimization services.",
      image: "https://images.unsplash.com/photo-1533933459518-08c0fdd2c74a"
    }
  ];

  return (
    <div className="container py-12">
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-lg text-muted-foreground">
          TenRail offers comprehensive rail freight solutions designed to meet your transportation needs. Our modern fleet and experienced team ensure your cargo reaches its destination safely and on time.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <Card key={i} className="overflow-hidden">
            <CardContent className="p-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}

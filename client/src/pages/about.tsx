import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1573496358488-51c188554a47"
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1562788869-4ed32648eb72"
    },
    {
      name: "Emily Rodriguez",
      role: "Safety Manager",
      image: "https://images.unsplash.com/photo-1576267423429-569309b31e84"
    },
    {
      name: "David Smith",
      role: "Fleet Manager",
      image: "https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c"
    },
    {
      name: "Lisa Wong",
      role: "Customer Relations",
      image: "https://images.unsplash.com/photo-1563457012475-13cf086fd600"
    },
    {
      name: "James Miller",
      role: "Lead Engineer",
      image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea"
    }
  ];

  return (
    <div className="container py-12">
      <section className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-6">About TenRail</h1>
        <p className="text-lg text-muted-foreground mb-6">
          TenRail is a leading freight rail transportation company, providing efficient and sustainable logistics solutions across North America. With over 25 years of experience, we've built a reputation for reliability, safety, and innovation in cargo transportation.
        </p>
        <p className="text-lg text-muted-foreground mb-6">
          Our extensive network of rail lines and modern fleet of locomotives enables us to deliver cargo on time, every time. We specialize in bulk freight, intermodal containers, and specialized cargo transportation, serving industries from agriculture to manufacturing.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <Card key={i} className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

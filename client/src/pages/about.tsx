import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

const partners = [
  {
    name: "Global Logistics Co.",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9",
    description: "International shipping and logistics partner"
  },
  {
    name: "EcoRail Solutions",
    logo: "https://images.unsplash.com/photo-1604004215402-e0d5b6a8ed76",
    description: "Sustainable rail technology provider"
  },
  {
    name: "SafeTrack Systems",
    logo: "https://images.unsplash.com/photo-1599305019347-8875a4564b6e",
    description: "Railway safety and maintenance"
  },
  {
    name: "CargoTech Industries",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9",
    description: "Cargo handling equipment manufacturer"
  },
  {
    name: "RailTech Innovations",
    logo: "https://images.unsplash.com/photo-1599305019347-8875a4564b6e",
    description: "Railway technology solutions"
  }
];

export default function About() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      email: "sarah.johnson@tenrail.com",
      image: "https://images.unsplash.com/photo-1573496358488-51c188554a47"
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      email: "michael.chen@tenrail.com",
      image: "https://images.unsplash.com/photo-1562788869-4ed32648eb72"
    },
    {
      name: "Emily Rodriguez",
      role: "Safety Manager",
      email: "emily.rodriguez@tenrail.com",
      image: "https://images.unsplash.com/photo-1576267423429-569309b31e84"
    },
    {
      name: "David Smith",
      role: "Fleet Manager",
      email: "david.smith@tenrail.com",
      image: "https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c"
    },
    {
      name: "Lisa Wong",
      role: "Customer Relations",
      email: "lisa.wong@tenrail.com",
      image: "https://images.unsplash.com/photo-1563457012475-13cf086fd600"
    },
    {
      name: "James Miller",
      role: "Lead Engineer",
      email: "james.miller@tenrail.com",
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

      <section className="mb-20">
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
                  <p className="text-muted-foreground mb-3">{member.role}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Mail className="h-4 w-4 mr-2" />
                    <a href={`mailto:${member.email}`} className="hover:text-primary">
                      {member.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Our Business Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {partners.map((partner, i) => (
            <Card key={i} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="aspect-square relative mb-2">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-semibold text-center">{partner.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Jobs() {
  const [, setLocation] = useLocation();

  const jobs = [
    {
      title: "Train Engineer",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Experienced train engineer needed for freight operations."
    },
    {
      title: "Logistics Coordinator",
      location: "Atlanta, GA",
      type: "Full-time",
      description: "Coordinate freight movements and optimize routes."
    },
    {
      title: "Safety Inspector",
      location: "Houston, TX",
      type: "Full-time",
      description: "Ensure compliance with safety regulations and standards."
    }
  ];

  const handleApply = (job: typeof jobs[0]) => {
    // Navigate to contact page with job information in the URL
    setLocation(`/contact?subject=${encodeURIComponent(`Job Application: ${job.title}`)}`);
  };

  return (
    <div className="container py-12">
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Career Opportunities</h1>
        <p className="text-lg text-muted-foreground">
          Join our team at TenRail and be part of a company that's shaping the future of freight transportation.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {jobs.map((job, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-muted-foreground">{job.location}</span>
                <span className="text-sm text-muted-foreground">{job.type}</span>
              </div>
              <p className="mb-6 text-muted-foreground">{job.description}</p>
              <Button 
                className="w-full"
                onClick={() => handleApply(job)}
              >
                Apply Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
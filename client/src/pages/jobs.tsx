import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Mail, FileText } from "lucide-react";

export default function Jobs() {
  const [showDialog, setShowDialog] = useState(false);

  /* Uncomment this section when not hiring and comment out the jobs array below
  const isHiring = false;
  const jobs: any[] = [];
  */

  const isHiring = true;
  const jobs = [
    {
      title: "Train Engineer",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Experienced train engineer needed for freight operations.",
      pdfUrl: "/pdfs/train-engineer-position.pdf"
    },
    {
      title: "Logistics Coordinator",
      location: "Atlanta, GA",
      type: "Full-time",
      description: "Coordinate freight movements and optimize routes.",
      pdfUrl: "/pdfs/logistics-coordinator-position.pdf"
    },
    {
      title: "Safety Inspector",
      location: "Houston, TX",
      type: "Full-time",
      description: "Ensure compliance with safety regulations and standards.",
      pdfUrl: "/pdfs/safety-inspector-position.pdf"
    }
  ];

  const handlePdfOpen = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="container py-12">
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Career Opportunities</h1>
        <p className="text-lg text-muted-foreground">
          Join our team at TenRail and be part of a company that's shaping the future of freight transportation.
        </p>
      </section>

      {!isHiring ? (
        <Card>
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Currently Not Hiring</h3>
            <p className="text-muted-foreground">
              Thank you for your interest in TenRail. We are currently not accepting applications, but please check back later for new opportunities.
            </p>
          </CardContent>
        </Card>
      ) : (
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
                <div className="space-y-2">
                  <Button 
                    className="w-full"
                    onClick={() => handlePdfOpen(job.pdfUrl)}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View Position Details
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full"
                    onClick={() => setShowDialog(true)}
                  >
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      )}

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Kako se prijaviti</DialogTitle>
            <DialogDescription className="flex flex-col items-center gap-4 pt-4">
              <p>Pošljite svojo prijavo z življenjepisom na elektronski naslov:</p>
              <div className="flex items-center gap-2 text-primary">
                <Mail className="h-4 w-4" />
                <a 
                  href="mailto:jure.kastelic@tenrail.net"
                  className="hover:underline"
                >
                  jure.kastelic@tenrail.net
                </a>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
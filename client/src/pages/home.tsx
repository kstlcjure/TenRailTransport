import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1593018931419-96adfd5b182d")',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="container relative z-10 text-center text-white">
          <motion.h1 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Moving Freight Forward
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            TenRail delivers reliable and efficient cargo transportation solutions across the nation
          </motion.p>
        </div>
      </section>

      <section className="container py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Freight Transport</h3>
              <p className="text-muted-foreground">Efficient and reliable transportation of goods across the country</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Logistics Solutions</h3>
              <p className="text-muted-foreground">Comprehensive logistics planning and management services</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Container Service</h3>
              <p className="text-muted-foreground">Specialized container handling and transportation</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-primary/5 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose TenRail?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Reliability", value: "99.9%" },
              { title: "Miles of Track", value: "20,000+" },
              { title: "Cities Served", value: "500+" },
              { title: "Years Experience", value: "25+" }
            ].map((stat, i) => (
              <Card key={i}>
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

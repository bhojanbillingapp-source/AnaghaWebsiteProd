import { Card } from "@/components/ui/card";
import { Building2, Users, Award, Calendar, Quote } from "lucide-react";

// Import all client logos
import taeon from "@/assets/clients/taeon.webp";
import tuskerIO from "@/assets/clients/tuskerIO.webp";
import sunshineHospitals from "@/assets/clients/sunshine hospitals.webp";
import skillsInventions from "@/assets/clients/skills inventions.webp";
import skinPerfect from "@/assets/clients/skin perfect.webp";
import sampradaya from "@/assets/clients/sampradaya.webp";
import siliconAndhra from "@/assets/clients/silicon andhra.webp";
import rup from "@/assets/clients/rup.webp";
import revere from "@/assets/clients/revere.webp";
import pantherConstruction from "@/assets/clients/panther construction inc.webp";
import researchMediaGroup from "@/assets/clients/research media group.webp";
import hebeon from "@/assets/clients/hebeon.webp";
import ivis from "@/assets/clients/ivis.webp";
import oneHourOnline from "@/assets/clients/one hour online.webp";
import gamebitVentures from "@/assets/clients/gamebit ventures.webp";
import grocerdeals from "@/assets/clients/grocerdeals.webp";
import hazel from "@/assets/clients/hazel.webp";
import californiaSouthernOregon from "@/assets/clients/california and southern oregon.webp";
import chippersTreeServices from "@/assets/clients/chippers tree services.webp";
import coolflosEngineers from "@/assets/clients/coolflos engineers pvt ltd.webp";
import autoProducts from "@/assets/clients/auto products ltd.webp";
import axiscurve from "@/assets/clients/axiscurve.webp";
import zavis from "@/assets/clients/ZAVIS.webp";
import yagyaCenter from "@/assets/clients/Yagya center.webp";
import sunshineHospitalsAlt from "@/assets/clients/Sunshine hospitals .webp";
import universitySiliconAndhra from "@/assets/clients/University of silicon andhra.webp";
import sattwa from "@/assets/clients/Sattwa.webp";
import rancher from "@/assets/clients/Rancher.webp";
import snr from "@/assets/clients/SNR.webp";
import raminfo from "@/assets/clients/Raminfo.webp";
import poojadtore from "@/assets/clients/Poojadtore.com.webp";
import organicOTC from "@/assets/clients/Organic OTC.webp";
import nightingaleHospital from "@/assets/clients/Nightingale hospital.webp";
import mahatmaGandhiCancer from "@/assets/clients/Mahatma gandhi cancer hospital & Research institute.webp";
import indianAmericanDental from "@/assets/clients/Indian American dental Hospital.webp";
import jbaHolding from "@/assets/clients/JBA holding company.webp";
import ideaEntity from "@/assets/clients/Idea entity.webp";
import holidaysToCompare from "@/assets/clients/Holidays to compare.webp";
import homefoods from "@/assets/clients/Homefoods.webp";
import deepSightLabs from "@/assets/clients/Deep sight labs.webp";
import eptri from "@/assets/clients/EPTRI.webp";
import apolloClinic from "@/assets/clients/Apollo cliinc.webp";
import apolloDialysis from "@/assets/clients/Apollo dialysis clinics.webp";
import apolloHealth from "@/assets/clients/Apollo helath and hospitals.webp";
import crest from "@/assets/clients/CREST.webp";
import adroitNeo from "@/assets/clients/Adroit neo teach solutions.webp";
import alanisTrading from "@/assets/clients/Alanis trading and co.webp";
import eightMillets from "@/assets/clients/8 millets.webp";
import twoTripteo from "@/assets/clients/2tripteo.webp";

const clients = [
  { name: "Taeon", logo: taeon },
  { name: "TuskerIO", logo: tuskerIO },
  { name: "Sunshine Hospitals", logo: sunshineHospitals },
  { name: "Skills Inventions", logo: skillsInventions },
  { name: "Skin Perfect", logo: skinPerfect },
  { name: "Sampradaya", logo: sampradaya },
  { name: "Silicon Andhra", logo: siliconAndhra },
  { name: "RUP", logo: rup },
  { name: "Revere", logo: revere },
  { name: "Panther Construction Inc", logo: pantherConstruction },
  { name: "Research Media Group", logo: researchMediaGroup },
  { name: "Hebeon", logo: hebeon },
  { name: "IVIS", logo: ivis },
  { name: "One Hour Online", logo: oneHourOnline },
  { name: "Gamebit Ventures", logo: gamebitVentures },
  { name: "Grocerdeals", logo: grocerdeals },
  { name: "Hazel", logo: hazel },
  { name: "California and Southern Oregon", logo: californiaSouthernOregon },
  { name: "Chippers Tree Services", logo: chippersTreeServices },
  { name: "Coolflos Engineers Pvt Ltd", logo: coolflosEngineers },
  { name: "Auto Products Ltd", logo: autoProducts },
  { name: "Axiscurve", logo: axiscurve },
  { name: "ZAVIS", logo: zavis },
  { name: "Yagya Center", logo: yagyaCenter },
  { name: "University of Silicon Andhra", logo: universitySiliconAndhra },
  { name: "Sattwa", logo: sattwa },
  { name: "Rancher", logo: rancher },
  { name: "SNR", logo: snr },
  { name: "Raminfo", logo: raminfo },
  { name: "Poojadtore.com", logo: poojadtore },
  { name: "Organic OTC", logo: organicOTC },
  { name: "Nightingale Hospital", logo: nightingaleHospital },
  { name: "Mahatma Gandhi Cancer Hospital", logo: mahatmaGandhiCancer },
  { name: "Indian American Dental Hospital", logo: indianAmericanDental },
  { name: "JBA Holding Company", logo: jbaHolding },
  { name: "Idea Entity", logo: ideaEntity },
  { name: "Holidays to Compare", logo: holidaysToCompare },
  { name: "Homefoods", logo: homefoods },
  { name: "Deep Sight Labs", logo: deepSightLabs },
  { name: "EPTRI", logo: eptri },
  { name: "Apollo Clinic", logo: apolloClinic },
  { name: "Apollo Dialysis Clinics", logo: apolloDialysis },
  { name: "Apollo Health and Hospitals", logo: apolloHealth },
  { name: "CREST", logo: crest },
  { name: "Adroit Neo Teach Solutions", logo: adroitNeo },
  { name: "Alanis Trading and Co", logo: alanisTrading },
  { name: "8 Millets", logo: eightMillets },
  { name: "2Tripteo", logo: twoTripteo },
];

const testimonialParagraphs = [
  "Anagha Soft successfully designed, developed, and deployed a robust enterprise middleware platform that seamlessly integrates the Fricke Business Management System (BMS) with SAP ERP, enabling secure, reliable, and high-performance communication between two independent enterprise applications built on different technology platforms.",
  "The middleware serves as a centralized enterprise integration hub, effectively bridging the gap between the legacy BMS and the modern SAP ERP ecosystem while preserving the independence of both applications. This loosely coupled architecture eliminates the need for changes to the core systems, protecting existing technology investments while enabling seamless interoperability. By leveraging standardized APIs and interfaces, intelligent data transformation, business rule validation, message orchestration, and automated workflow processing, the solution ensures accurate, consistent, and real-time data exchange across mission-critical business functions.",
  "The integration platform has become the digital backbone of enterprise operations, enabling end-to-end synchronization of production orders, inventory transactions, warehouse movements, procurement activities, master data, and other critical business processes. It ensures that business information flows seamlessly across systems with high accuracy, low latency, and complete transactional integrity, empowering business users with timely and reliable information for operational and strategic decision-making.",
  "By centralizing business logic, data mapping, validation, exception handling, transaction monitoring, audit trails, and integration governance within a unified middleware layer, Anagha Soft significantly simplified enterprise integration management. The solution reduces operational complexity, minimizes manual intervention, accelerates issue resolution through proactive monitoring, and enhances overall system reliability and maintainability.",
  "Designed with enterprise-grade security, scalability, resilience, and high availability, the middleware platform supports growing business demands while providing comprehensive logging, traceability, automated error recovery, and performance monitoring. Its modular and extensible architecture enables rapid onboarding of new applications and business processes, reducing future integration effort and accelerating digital innovation.",
  "Beyond technical integration, the solution delivers measurable business value by improving operational efficiency, increasing process automation, reducing integration risks, and enhancing data consistency across the enterprise. It provides the organization with a future-ready digital foundation capable of supporting cloud adoption, enterprise modernization, advanced analytics, and emerging digital transformation initiatives. Through this implementation, Anagha Soft has demonstrated its expertise in delivering scalable, secure, and business-driven enterprise integration solutions that enable organizations to maximize the value of their technology investments while preparing for future growth.",
];

const Clients = () => {

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our Clients
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Trusted by leading organizations across diverse industries
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">16+</h3>
              <p className="text-muted-foreground">Years of Industry Experience</p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">50+</h3>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">99%</h3>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">7</h3>
              <p className="text-muted-foreground">Industries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Client Testimonial */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 md:p-12 animate-fade-in">
            <Quote className="w-10 h-10 text-primary/40 mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 leading-snug">
              Enterprise Middleware Integration: Fricke BMS &amp; SAP ERP
            </h2>
            <div className="space-y-5">
              {testimonialParagraphs.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <Card
                key={client.name}
                className="p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-40 h-40 flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-foreground text-sm">
                      {client.name}
                    </h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Partner with ANAGHA and experience the difference that AI-powered HR solutions can make for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Get Started Today
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;

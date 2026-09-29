import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/devly/Navbar";
import { Hero } from "@/components/devly/Hero";
import { Deliverables } from "@/components/devly/Deliverables";
import { Trust } from "@/components/devly/Trust";
import { Services } from "@/components/devly/Services";
import { Portfolio } from "@/components/devly/Portfolio";
import { WhyDevly } from "@/components/devly/WhyDevly";
import { Process } from "@/components/devly/Process";
import { Pricing } from "@/components/devly/Pricing";
import { AdviceGuides } from "@/components/devly/AdviceGuides";
import { LaunchChecklist } from "@/components/devly/LaunchChecklist";
import { QuoteForm } from "@/components/devly/QuoteForm";
import { FAQ } from "@/components/devly/FAQ";
import { FinalCTA } from "@/components/devly/FinalCTA";
import { Footer } from "@/components/devly/Footer";
import { WhatsAppButton } from "@/components/devly/WhatsAppButton";

const TITLE = "Devly | Diseño y Desarrollo Web";
const DESCRIPTION =
  "Diseño y desarrollo web para negocios de Hermosillo y todo México. Sitios claros, adaptados a celular y hechos para facilitar el contacto.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "diseño web, desarrollo web, landing pages, páginas web, diseño web Hermosillo, páginas web Hermosillo, desarrollo web Hermosillo, páginas para negocios",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="page-atmosphere bg-background min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Portfolio />
        <Services />
        <Deliverables />
        <WhyDevly />
        <Process />
        <Pricing />
        <FAQ />
        <AdviceGuides />
        <LaunchChecklist />
        <QuoteForm />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

import { DefaultLayout } from "../components/layouts/DefaultLayout";
import { OurServiceItem } from "../components/OurServiceItem";
import { Slider } from "../components/Slider";

const slides = [
  {
    id: "slide1",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    title: "Trusted IT Service Provider",
    subtitle: "Delivering proactive infrastructure and support for engineering businesses.",
    ctaText: "Get in touch",
    ctaLink: "/contact",
  },
  {
    id: "slide2",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80",
    title: "Network & Systems Expertise",
    subtitle: "From Active Directory to network troubleshooting, we secure and stabilize IT environments.",
  },
  {
    id: "slide3",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    title: "End-to-End IT Operations",
    subtitle: "Workflow integration, asset management, and performance support to reduce downtime.",
  },
];

const serviceItems = [
  {
    title: "System Administration",
    description: "Expert management of Windows servers, AD users and policies, DNS, DHCP, and compliance processes. We keep systems stable with proactive monitoring and maintenance.",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    alt: "System Administration",
  },
  {
    title: "Networking",
    description: "Fast LAN/WAN issue resolution with switch provisioning and secure connectivity. Remote desktop and network path diagnostics to restore productivity quickly.",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Networking",
  },
  {
    title: "Databases & Applications",
    description: "Database deployment and performance tuning for SQL Server / Oracle. App support for AutoCAD, AVEVA E3D and SmartPlant from setup to production.",
    imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1200&q=80",
    alt: "Databases & Apps",
  },
  {
    title: "Productivity Tools",
    description: "Office 365 and Exchange administration with proactive health checks and rapid issue response for collaboration environments.",
    imageUrl: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=1200&q=80",
    alt: "Productivity Tools",
  },
  {
    title: "Hardware Support",
    description: "On-site and remote support for desktops, laptops, printers, and scanners. Includes installation, upgrades, troubleshooting and warranty coordination.",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    alt: "Hardware Support",
  },
  {
    title: "Business Operations",
    description: "Vendor coordination and asset lifecycle management with HR/Admin integration to ensure IT aligns with business targets.",
    imageUrl: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
    alt: "Business Operations",
  },
];

export const Home = () => {
  return (
    <DefaultLayout>
      <Slider slides={slides} autoPlay interval={6000} />

      <main className="space-y-16 px-4 py-10 md:px-10 lg:px-16">
        <section className="rounded-3xl bg-base-200 p-8 md:p-12 shadow-lg">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">About Akbar Tech Solutions</h2>
          <p className="max-w-4xl text-base text-base-content/80">
            We provide enterprise-level IT services and support for engineering and industrial companies. Our core competencies include system administration, networking, database administration, productivity tool support, and on-site hardware & software troubleshooting. Built on real business experience, we deliver fast problem resolution and dependable IT infrastructure operations.
          </p>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {serviceItems.map((item) => (
                <OurServiceItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-base-100 p-8 md:p-10 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-center md:text-4xl">Success Stories</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-xl border border-base-300 bg-base-200 p-5">
              <p className="text-base text-base-content/80">"Akbar Tech Solutions reduced our system downtime by 60% and helped us stabilize mission-critical environments."</p>
              <p className="mt-4 text-sm font-semibold">— Petrocon Engineers</p>
            </article>
            <article className="rounded-xl border border-base-300 bg-base-200 p-5">
              <p className="text-base text-base-content/80">"Highly responsive team that takes ownership of issues; excellent support for Office 365 and Exchange."</p>
              <p className="mt-4 text-sm font-semibold">— Minitek Systems</p>
            </article>
            <article className="rounded-xl border border-base-300 bg-base-200 p-5">
              <p className="text-base text-base-content/80">"Fast, reliable desktop and network troubleshooting. Great partner for daily IT operations."</p>
              <p className="mt-4 text-sm font-semibold">— Iqra Enterprises</p>
            </article>
          </div>
        </section>

        <section className="rounded-3xl bg-primary/5 p-8 md:p-10 text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-4xl">Ready to transform your IT environment?</h2>
          <p className="mb-6 max-w-3xl mx-auto text-base text-base-content/80">
            Contact us for a consultation and learn how our IT operations and support services can reduce risk, increase uptime, and accelerate business productivity.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg">Request a quote</a>
        </section>
      </main>
    </DefaultLayout>
  );
};

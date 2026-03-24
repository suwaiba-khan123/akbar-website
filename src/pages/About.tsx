import { DefaultLayout } from "../components/layouts/DefaultLayout";

export const About = () => {
  return (
    <DefaultLayout>
      {/* Hero Banner */}
      <section className="relative h-64 w-full overflow-hidden bg-cover bg-center sm:h-80">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
          alt="About Akbar Tech Solutions"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
          <div className="max-w-2xl text-center text-white">
            <h1 className="text-3xl font-bold md:text-5xl">Akbar Tech Solutions</h1>
            <p className="mt-2 text-base md:text-lg">Trusted IT Services Partner for Engineering & Industrial Businesses</p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="mb-10 rounded-3xl border border-base-200 bg-base-100 p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold">About Our Company</h2>
          <p className="mt-3 text-base text-base-content/82">
            Akbar Tech Solutions is a specialized IT service provider dedicated to delivering comprehensive infrastructure, application, and support services for engineering and industrial enterprises. With deep expertise in mission-critical systems, we help organizations streamline operations, reduce downtime, and achieve reliable IT performance.
          </p>
          <p className="mt-3 text-base text-base-content/82">
            We partner with our clients to manage complex technology environments, from system administration and networking to specialized application deployment and end-user desktop support. Our proactive approach ensures your business continuity and productivity.
          </p>
        </section>

        <section className="mb-10 grid gap-6 sm:grid-cols-3">
          <article className="rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm">
            <h3 className="text-xl font-semibold">Our Commitment</h3>
            <p className="mt-2 text-base text-base-content/80">
              Deliver dependable, scalable IT solutions that reduce operational risk and enable your team to focus on core business objectives.
            </p>
          </article>
          <article className="rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm">
            <h3 className="text-xl font-semibold">Our Approach</h3>
            <p className="mt-2 text-base text-base-content/80">
              Proactive monitoring, rapid incident response, and continuous optimization to ensure your IT infrastructure aligns with business goals.
            </p>
          </article>
          <article className="rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm">
            <h3 className="text-xl font-semibold">Our Expertise</h3>
            <p className="mt-2 text-base text-base-content/80">
              Specialized knowledge in Windows environments, enterprise databases, engineering applications, and multi-tier IT operations.
            </p>
          </article>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold">What We Offer</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ul className="rounded-xl border border-base-200 bg-base-100 p-4">
              <li className="font-semibold">System Administration</li>
              <li className="text-sm text-base-content/80">Windows OS, Active Directory, Group Policy, DNS, DHCP</li>
            </ul>
            <ul className="rounded-xl border border-base-200 bg-base-100 p-4">
              <li className="font-semibold">Networking</li>
              <li className="text-sm text-base-content/80">LAN/WAN troubleshooting, switches, remote support</li>
            </ul>
            <ul className="rounded-xl border border-base-200 bg-base-100 p-4">
              <li className="font-semibold">Databases & Apps</li>
              <li className="text-sm text-base-content/80">SQL Server 2014, Oracle 12c, AutoCAD, AVEVA E3D, SmartPlant</li>
            </ul>
            <ul className="rounded-xl border border-base-200 bg-base-100 p-4">
              <li className="font-semibold">Productivity Tools</li>
              <li className="text-sm text-base-content/80">Office 365, Exchange Mail Server</li>
            </ul>
            <ul className="rounded-xl border border-base-200 bg-base-100 p-4">
              <li className="font-semibold">Hardware Support</li>
              <li className="text-sm text-base-content/80">Desktop/Laptop/Printer/Scanner install, repair</li>
            </ul>
            <ul className="rounded-xl border border-base-200 bg-base-100 p-4">
              <li className="font-semibold">Project Support</li>
              <li className="text-sm text-base-content/80">Vendor coordination, IT asset management, HR/Admin collaboration</li>
            </ul>
          </div>
        </section>

        <section className="mb-10 rounded-3xl border border-base-200 bg-base-100 p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Our Track Record</h2>
          <p className="mt-3 text-base text-base-content/82">
            For several years, our team has successfully delivered IT operations and support to leading engineering firms and industrial companies in Mumbai. We've earned trust by consistently reducing system downtime, managing complex infrastructure, and providing responsive technical support.
          </p>

          <div className="mt-6 space-y-4">
            <article className="rounded-xl border border-base-300 bg-base-50 p-4">
              <h3 className="font-semibold">Petrocon Engineers & Consultants</h3>
              <p className="text-sm text-base-content/70">Key IT Services Provider (2023–2025)</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-base-content/80">
                <li>Managed deployment and support of SmartPlant P&ID, SP3D, and AVEVA E3D platforms.</li>
                <li>Provisioned and maintained SQL Server 2014 and Oracle 12c databases.</li>
                <li>Provided end-user support and system administration services.</li>
              </ul>
            </article>
            <article className="rounded-xl border border-base-300 bg-base-50 p-4">
              <h3 className="font-semibold">Minitek Systems Pvt. Ltd.</h3>
              <p className="text-sm text-base-content/70">Desktop & Systems Support (2022–2023)</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-base-content/80">
                <li>Administered Active Directory, DNS, DHCP, and group policies across infrastructure.</li>
                <li>Managed Office 365 and Exchange email services.</li>
                <li>Coordinated vendor relationships and IT asset lifecycle management.</li>
              </ul>
            </article>
            <article className="rounded-xl border border-base-300 bg-base-50 p-4">
              <h3 className="font-semibold">Iqra Enterprises</h3>
              <p className="text-sm text-base-content/70">Desktop & Network Support (2021–2022)</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-base-content/80">
                <li>Installed and configured Windows OS, applications, and hardware devices.</li>
                <li>Resolved LAN/WAN connectivity issues and created domain users.</li>
                <li>Provided remote technical support and troubleshooting.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="mb-10 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 p-6 text-center sm:p-8">
          <h2 className="text-2xl font-bold">Partner With Us</h2>
          <p className="mt-3 text-base text-base-content/80">
            Akbar Tech Solutions is committed to delivering reliable, efficient IT support that keeps your operations running smoothly. Let's discuss how we can support your organization's IT goals.
          </p>
          <a href="/contact" className="btn btn-primary mt-5">Schedule a Consultation</a>
        </section>
      </main>
    </DefaultLayout>
  );
};

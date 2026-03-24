import { DefaultLayout } from "../components/layouts/DefaultLayout";

export const Home = () => {
  return (
    <DefaultLayout>
      <section className="carousel w-full h-[calc(100vh-4rem)] bg-base-100">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80" className="w-full object-cover h-full" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
            <div className="max-w-2xl text-center text-white">
              <h1 className="text-3xl font-bold md:text-5xl">Akbar Tech Solutions</h1>
              <p className="mt-4 text-sm md:text-lg">Driving reliable infrastructure, desktop support, and enterprise IT services for engineering businesses.</p>
              <a href="/contact" className="btn btn-primary mt-6">Get in touch</a>
            </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80" className="w-full object-cover h-full" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
            <div className="max-w-2xl text-center text-white">
              <h2 className="text-3xl font-bold md:text-5xl">End-to-End Support</h2>
              <p className="mt-4 text-sm md:text-lg">System admin, networking, database, hardware, and software support with a customer-first approach.</p>
            </div>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80" className="w-full object-cover h-full" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
            <div className="max-w-2xl text-center text-white">
              <h2 className="text-3xl font-bold md:text-5xl">Trusted IT Operations</h2>
              <p className="mt-4 text-sm md:text-lg">Proven delivery with minimized downtime and faster response for your team.</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-2 flex justify-center gap-2">
          <a href="#slide1" className="btn btn-xs btn-circle">1</a>
          <a href="#slide2" className="btn btn-xs btn-circle">2</a>
          <a href="#slide3" className="btn btn-xs btn-circle">3</a>
        </div>
      </section>

      <main className="space-y-16 px-4 py-10 md:px-10 lg:px-16">
        <section className="rounded-3xl bg-base-200 p-8 md:p-12 shadow-lg">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">About Akbar Tech Solutions</h2>
          <p className="max-w-4xl text-base text-base-content/80">
            We provide enterprise-level IT services and support for engineering and industrial companies. Our core competencies include system administration, networking, database administration, productivity tool support, and on-site hardware & software troubleshooting. Built on real business experience, we deliver fast problem resolution and dependable IT infrastructure operations.
          </p>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <article className="card card-compact bg-base-100 shadow-md">
                <figure>
                  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80" alt="System Administration" onError={(e)=>{(e.target as HTMLImageElement).src='https://via.placeholder.com/1200x800?text=System+Administration';}} />
                </figure>
                <div className="card-body">
                  <h4 className="card-title">System Administration</h4>
                  <p>Expert management of Windows servers, AD users and policies, DNS, DHCP, and compliance processes.
                  <br />We keep systems stable with proactive monitoring and maintenance.
                  </p>
                </div>
              </article>

              <article className="card card-compact bg-base-100 shadow-md">
                <figure>
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80" alt="Networking" onError={(e)=>{(e.target as HTMLImageElement).src='https://via.placeholder.com/1200x800?text=Networking';}} />
                </figure>
                <div className="card-body">
                  <h4 className="card-title">Networking</h4>
                  <p>Fast LAN/WAN issue resolution with switch provisioning and secure connectivity.
                  <br />Remote desktop and network path diagnostics to restore productivity quickly.
                  </p>
                </div>
              </article>

              <article className="card card-compact bg-base-100 shadow-md">
                <figure>
                  <img src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1200&q=80" alt="Databases & Apps" onError={(e)=>{(e.target as HTMLImageElement).src='https://via.placeholder.com/1200x800?text=Databases';}} />
                </figure>
                <div className="card-body">
                  <h4 className="card-title">Databases & Applications</h4>
                  <p>Database deployment and performance tuning for SQL Server and Oracle.
                  <br />Application installs like AutoCAD, AVEVA E3D and SmartPlant from project launch to support.
                  </p>
                </div>
              </article>

              <article className="card card-compact bg-base-100 shadow-md">
                <figure>
                  <img src="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=1200&q=80" alt="Productivity Tools" onError={(e)=>{(e.target as HTMLImageElement).src='https://via.placeholder.com/1200x800?text=Productivity+Tools';}} />
                </figure>
                <div className="card-body">
                  <h4 className="card-title">Productivity Tools</h4>
                  <p>Advance workplace productivity with Office 365 and Exchange administration.
                  <br />Proactive health checks and fast resolution for email and collaboration incidents.
                  </p>
                </div>
              </article>

              <article className="card card-compact bg-base-100 shadow-md">
                <figure>
                  <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80" alt="Hardware Support" onError={(e)=>{(e.target as HTMLImageElement).src='https://via.placeholder.com/1200x800?text=Hardware+Support';}} />
                </figure>
                <div className="card-body">
                  <h4 className="card-title">Hardware Support</h4>
                  <p>On-site and remote hardware support for desktops, laptops, printers, and scanners.
                  <br />Includes installation, upgrades, troubleshooting and warranty coordination.
                  </p>
                </div>
              </article>

              <article className="card card-compact bg-base-100 shadow-md">
                <figure>
                  <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80" alt="Business Operations" onError={(e)=>{(e.target as HTMLImageElement).src='https://via.placeholder.com/1200x800?text=Business+Operations';}} />
                </figure>
                <div className="card-body">
                  <h4 className="card-title">Business Operations</h4>
                  <p>Comprehensive vendor coordination and asset lifecycle management.
                  <br />HR/Admin assistance to keep IT aligned with business goals.
                  </p>
                </div>
              </article>
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

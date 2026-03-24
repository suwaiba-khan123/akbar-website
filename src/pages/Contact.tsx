import { useState } from "react";
import { DefaultLayout } from "../components/layouts/DefaultLayout";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks ${name || "there"}! Your message has been received.`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <DefaultLayout>
      <div className="carousel w-full mb-8">
        <div id="cslide1" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full"
          />
        </div>
        <div id="cslide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full"
          />
        </div>
        <div id="cslide3" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-lg text-muted-foreground mt-2">We'd love to hear from you — send a message and we'll respond shortly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="card shadow-md bg-base-100">
            <div className="card-body">
              <h2 className="card-title">Send a Message</h2>
              <p className="text-sm text-gray-600">Fill out the form and we'll get back to you promptly.</p>

              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div>
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input input-bordered w-full"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input input-bordered w-full"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="textarea textarea-bordered w-full h-40"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                  <div className="text-sm text-gray-500">Or email us at <a className="link" href="mailto:info@example.com">info@example.com</a></div>
                </div>
              </form>
            </div>
          </div>

          <div className="card shadow-md bg-base-100">
            <div className="card-body">
              <h2 className="card-title">Our Location</h2>
              <p className="text-sm text-gray-600">Find us at our office or use the map below for directions.</p>
              <div className="mt-4 w-full h-80 rounded overflow-hidden border">
                <iframe
                  title="company-location"
                  src="https://www.google.com/maps?q=40.7128,-74.0060&z=13&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Contact;

import { useState } from "react";
import api from "../api/axios";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await api.post("contact/", {
        name,
        email,
        message,
      });

      setStatus({ type: "success", message: "Message sent successfully." });
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.detail || "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto py-24 px-6 sm:px-10">
      <h2 className="text-5xl font-bold mb-10">Contact Me</h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 rounded-xl bg-pink-500/10 border border-pink-500/30 text-white placeholder-pink-300/50 focus:border-pink-500/60 outline-none"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-xl bg-pink-500/10 border border-pink-500/30 text-white placeholder-pink-300/50 focus:border-pink-500/60 outline-none"
          required
        />

        <textarea
          rows="5"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-4 rounded-xl bg-pink-500/10 border border-pink-500/30 text-white placeholder-pink-300/50 focus:border-pink-500/60 outline-none"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-pink-600 px-8 py-3 rounded-xl disabled:opacity-50 hover:bg-pink-500 transition-colors text-white font-semibold"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className={`mt-4 ${status.type === "success" ? "text-emerald-400" : "text-red-400"}`}>
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;

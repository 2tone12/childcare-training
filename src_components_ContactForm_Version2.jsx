export default function ContactForm() {
  return (
    <section className="py-16 px-8 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8 text-orange-700">Contact Us</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" required />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" required />
        <textarea placeholder="Your Message" className="w-full p-3 border rounded" rows="4" required></textarea>
        <button className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700 transition">
          Send Message
        </button>
      </form>
      <p className="mt-6 text-gray-600">Or email us at <a href="mailto:support@rooted-training.com" className="text-orange-700">support@rooted-training.com</a></p>
    </section>
  );
}
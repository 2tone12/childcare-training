export default function FeaturesSection() {
  const features = [
    "Certified childcare courses",
    "Progress tracking and certificates",
    "Flexible online access",
    "Professional instructor-led lessons",
    "Secure user portal"
  ];

  return (
    <section className="py-16 px-8 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8 text-orange-700">Why Choose RootED?</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="p-6 bg-white shadow rounded">
            <p className="text-lg">{f}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default function PricingSection() {
  const plans = [
    { name: "Single Course Access", price: "$45–$149", benefits: ["1 certified course", "Lifetime access", "Printable certificate"] },
    { name: "Full Access Bundle", price: "$499", benefits: ["All 6 courses", "Progress tracking", "Certificate management"] },
  ];

  return (
    <section className="py-16 px-8 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8 text-orange-700">Choose Your Learning Path</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {plans.map((plan, i) => (
          <div key={i} className="p-6 bg-white shadow-lg rounded w-80 mx-auto">
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-2xl text-orange-600 mb-4">{plan.price}</p>
            <ul className="mb-6 text-left list-disc list-inside">
              {plan.benefits.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
            <a
              href="https://y0h0i3ceq8e7.manus.space/portal"
              className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition"
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
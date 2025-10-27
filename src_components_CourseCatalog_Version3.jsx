const courses = [
  { title: "Child Development Fundamentals", price: "$89" },
  { title: "Safety & Emergency Procedures", price: "$79" },
  { title: "Nutrition & Healthy Eating", price: "$69" },
  { title: "Behavioral Management Strategies", price: "$99" },
  { title: "Communication with Parents & Families", price: "$75" },
  { title: "Creating Inclusive Environments", price: "$85" },
];

export default function CourseCatalog() {
  return (
    <section className="py-16 px-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-orange-700">Popular Courses</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {courses.map((course, i) => (
          <div key={i} className="p-6 border rounded shadow-sm text-center">
            <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
            <p className="text-orange-600 font-bold">{course.price}</p>
            <a
              href="https://y0h0i3ceq8e7.manus.space/portal"
              className="mt-4 inline-block bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition"
            >
              Enroll
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
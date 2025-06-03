export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-10 text-gray-800">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2">Asha Valluri</h1>
        <p className="text-xl text-gray-600">Business & Technology Enthusiast | Supply Chain & Marketing</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>
          I’m a business development professional pursuing my master’s in Supply Chain Operations & Management at UIC. I love building things at the intersection of tech and business.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Decarbonization Roadmap for Pharma Facility with Arcadis</li>
          <li>Affiliate Marketing Automation at TekFriday</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>Email: ashavalluri981@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/asha999v"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            asha999v
          </a>
        </p>
      </section>
    </main>
  );
}
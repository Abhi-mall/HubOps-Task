import ServiceCard from "@/components/ServiceCard";

export const metadata = {
  title: "Our Services | HubOps",
  description:
    "Explore HubOps services including brand strategy, digital marketing, SEO optimization, and web development solutions.",
};

const getServices = async () => {
  try {
    const res = await fetch("http://localhost:4000/api/services");

    if (!res.ok) {
      throw new Error("Failed to fetch services");
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default async function Services() {

  const services = await getServices();
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 ">
      <h1 className="text-5xl font-bold mb-8 text-gray-800 text-center ">
        Our Services
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

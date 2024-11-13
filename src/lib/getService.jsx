const getServices = async (id) => {
  console.log(id);
  const baseUrl = process.env.NEXTAUTH_URL ;
  // || "http://localhost:3000"
  try {
    const services = await fetch(`${baseUrl}/services/api/${id}`);
    if (!services.ok) {
      throw new Error(`There was an error fetching Services`);
    }
    return services.json();
  } catch (error) {
    return {};
  }
};

export default getServices;

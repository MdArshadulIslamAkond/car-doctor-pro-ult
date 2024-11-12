const getServices = async (id) => {
  try {
    const services = await fetch(`${process.env.NEXTAUTH_UR}/services/api/${id}`);
    if (!services.ok) {
      throw new Error(`There was an error fetching Services`);
    }
    return services.json();
  } catch (error) {
    return {};
  }
};

export default getServices;

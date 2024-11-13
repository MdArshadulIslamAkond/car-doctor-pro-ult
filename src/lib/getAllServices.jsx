

const getAllServices = async () => {
  const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
try{
  const services = await fetch(`${baseUrl}/services/api/get-all`);
  if (!services.ok) {
    throw new Error(`There was an error fetching Services`);
  }
  return services.json();
}catch(error){
  return [];
}
};

export default getAllServices;

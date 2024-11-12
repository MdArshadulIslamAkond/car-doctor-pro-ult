

const getAllServices = async () => {
try{
  const services = await fetch(`${process.env.NEXTAUTH_UR}/services/api/get-all`);
  if (!services.ok) {
    throw new Error(`There was an error fetching Services`);
  }
  return services.json();
}catch(error){
  return [];
}
};

export default getAllServices;

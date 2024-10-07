// app/about/page.tsx

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="mt-4 text-lg">
        We are a full-service digital marketing agency dedicated to growing your brand.
      </p>
      <br/>
      <h1 className="text-9xl font-bold" style={{ fontFamily: "'Lobster', cursive" }}>Chris & Tom</h1>
    </div>
  );
};

export default About;

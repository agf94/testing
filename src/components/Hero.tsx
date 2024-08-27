function Hero() {
    return (
      <section className="hero h-screen bg-blue-500 flex justify-center items-center text-white">
        <div className="container mx-auto p-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Easy Banking Made Easy</h1>
          <p className="text-xl mb-8">Our bank offers a wide range of services to help you manage your finances.</p>
          <button className="cta-button bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
        </div>
      </section>
    );
  }

  export default Hero;
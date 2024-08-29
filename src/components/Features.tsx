function Feature({ title, description }) {
    return (
      <div className="feature bg-white shadow-md rounded p-4 mb-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  
  function Features() {
    return (
      <section className="features bg-gray-100 py-8">
        <div className="container mx-auto p-4">
          <Feature title="Account Management" description="Manage your bank accounts easily with our online banking platform." />
          <Feature title="Loans" description="Apply for loans and get the money you need to grow your business." />
          <Feature title="Investments" description="Invest in stocks, bonds, and other financial instruments with our expert advice." />
        </div>
      </section>
    );
  }

  export default Features;
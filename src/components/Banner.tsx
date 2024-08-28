export default function Banner() {
  return (
    <section className="hero h-1/2 bg-blue-400 flex justify-center items-center text-white">
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-xl mb-4">
          <marquee Behavior="alternate" direction="left" scrollamount="5" loop="-1">
            {deals.map((deal, index) => {
              return (
                <span key={index} className="mr-8">
                  {deal}
                </span>
              );
            })}
          </marquee>
        </h1>
      </div>
    </section>
  );
}

const deals = [
  "Get a 10% discount on your first purchase using our mobile app.",
  "",
  "Open a savings account and get a free debit card.",
  "",
  "Get a 5% cashback on your credit card purchases.",
  "",
  "Get a personal loan at a fixed interest rate of 10%.",
  "",
  "Get a 20% discount on your insurance premiums."
];

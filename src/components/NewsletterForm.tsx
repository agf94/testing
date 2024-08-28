function NewsletterForm() {
  return (
    <form className="newsletter-form p-4 mb-4 border border-gray-300 rounded bg-blue-500 flex justify-start items-center text-white">
      <div className="mb-2">
        <input type="email" placeholder="Enter your email address" className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Subscribe</button>
    </form>
  );
}

export default NewsletterForm;


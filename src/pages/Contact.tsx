export default function Contact() {
  return (
    <section className="lg:mx-[100px] xl:mx-[150px] my-10">
      <div className="flex flex-col items-center space-y-2 ">
        <h2 className="font-ibm font-semibold text-black leading-[120%] text-default sm:text-2xl md:text-heading3 lg:text-heading2">
          Let's <span className="text-accent">Connect</span>
        </h2>
        <p className="text-body text-center font-regular leading-[120%] font-ibm w-[476px]">
          Ready to bring your project to life or just want to say hello? <br />
          Reach out using the form below, and I'll get back to you as soon as
          possible.
        </p>
      </div>
      <div className="flex justify-center mt-12">
        <form className="space-y-4 px-8">
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 w-full px-4 py-2 border bg-form border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Full name"
          />
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 w-full px-4 py-2 border bg-form border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Email"
          />
          <textarea
            id="pesan"
            name="pesan"
            className="mt-1 w-full px-4 py-2 border bg-form border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Your messages..."
          ></textarea>
          <button
            type="submit"
            className="w-full bg-accent text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-950 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

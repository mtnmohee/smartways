"use client";

function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      phone: e.target.elements.phone.value,
      message: e.target.elements.message.value,
    };

    const response = await fetch("/api/contactapi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(response);

    if (res.ok) {
      console.log("message sent successfully");
    }
    if (!res.ok) {
      console.log("message doesn't sent");
    }
  };

  return (
    <form
      className="w-full md:w-3/4 flex flex-col md:flex-row flex-wrap items-center justify-between mx-auto my-5"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col w-full flex-1 md:mr-3">
        <label htmlFor="name">Full Name</label>
        <input
          autoComplete="off"
          required
          type="text"
          id="name"
          name="name"
          placeholder="Your Full Name *"
          className="p-2 mt-1 border-2 border-gray-300 rounded-lg outline-none bg-gray-50"
        />
      </div>
      <div className="flex flex-col w-full flex-1 md:mr-3">
        <label htmlFor="email"> Email Address</label>
        <input
          autoComplete="off"
          required
          type="email"
          id="email"
          name="email"
          placeholder="Your  Email *"
          className="p-2 mt-1 border-2 border-gray-300 rounded-lg outline-none bg-gray-50"
        />
      </div>
      <div className="flex flex-col w-full flex-1 ">
        <label htmlFor="phone"> Phone Number </label>
        <input
          autoComplete="off"
          required
          type="tel"
          id="phone"
          name="phone"
          placeholder="Your Phone Number *"
          className="p-2 mt-1 border-2 border-gray-300 rounded-lg outline-none bg-gray-50"
        />
      </div>
      <div className="flex flex-col w-full mt-3">
        <label htmlFor="message"> Tell Us How can Help You ? </label>
        <textarea
          required
          name="message"
          rows={5}
          id="message"
          placeholder="Your Message *"
          className="p-2 mt-1 border-2 border-gray-300 rounded-lg outline-none bg-gray-50"
        />
      </div>
      <div className="mt-2 ">
        <button
          type="submit"
          className="bg-blue-800 rounded-lg px-5 py-2 text-white "
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;

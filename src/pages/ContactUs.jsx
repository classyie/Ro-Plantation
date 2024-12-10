import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ContactUs = () => {
  const [searchParams] = useSearchParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productLink, setProductLink] = useState("");

  useEffect(() => {
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    const link = searchParams.get("link");

    if (title && description && link) {
      setProductTitle(title);
      setProductDescription(description);
      setProductLink(link);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      email,
      phone,
      message,
      productTitle,
      productDescription,
      productLink,
    });
    setName("");
    setEmail("");
    setPhone("");

    setMessage("");
    alert("Your inquiry has been submitted!");

  };

  return (
    <div className="container mx-auto px-4 py-10 bg-white">
      <h2 className="text-3xl font-bold text-center text-[#00796B] mb-4">
        Contact Us
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-50 p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700">Your Name</label>
          <input
            type="text"
            className="border px-3 py-2 w-full rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            className="border px-3 py-2 w-full rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            className="border px-3 py-2 w-full rounded-md"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Your Message</label>
          <textarea
            className="border px-3 py-2 w-full rounded-md"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        {productTitle && productDescription && productLink ? (
          <div className="mb-4 bg-gray-100 p-4 rounded-md border">
            <h3 className="text-gray-700 font-semibold mb-2 text-center">
              Product of Interest
            </h3>
            <hr class="h-px bg-gray-400 border-0 dark:bg-gray-700 mb-2"></hr>
            <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Title</span>: {productTitle}</p>
            <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold">Description</span>: {productDescription}
            </p>
            <p className="text-sm text-blue-600 mb-1">Link: {productLink}</p>
          </div>
        ) : null}

        <button
          type="submit"
          className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;

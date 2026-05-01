import { useState } from 'react';

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'taskflow@csci390.edu' },
  { icon: '📍', label: 'Location', value: 'Abu Dhabi, UAE' },
  { icon: '🕐', label: 'Response Time', value: 'Within 24 hours' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
          Have a question, suggestion or just want to say hello? We would love to hear from you.
        </p>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Info cards */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Get in Touch</h2>
            {contactInfo.map(({ icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-6"
              >
                <span className="text-3xl">{icon}</span>
                <div>
                  <p className="text-sm text-indigo-600 font-semibold uppercase tracking-wide">
                    {label}
                  </p>
                  <p className="text-gray-700 font-medium">{value}</p>
                </div>
              </div>
            ))}

            <div className="bg-indigo-50 rounded-2xl p-6 mt-2">
              <p className="text-gray-600 text-sm leading-relaxed">
                This project is part of <strong>CSCI390 – Software Engineering</strong>. 
                All feedback is welcome and will help us improve TaskFlow for future iterations.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <span className="text-6xl mb-4">🎉</span>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-gray-500 mb-6">
                  Thank you for reaching out. We will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="bg-indigo-700 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Send a Message</h2>

                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`w-full border rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ${
                      errors.name ? 'border-red-400' : 'border-gray-300'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full border rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ${
                      errors.email ? 'border-red-400' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className={`w-full border rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ${
                      errors.subject ? 'border-red-400' : 'border-gray-300'
                    }`}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`w-full border rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none ${
                      errors.message ? 'border-red-400' : 'border-gray-300'
                    }`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-700 text-white font-bold py-3 rounded-full hover:bg-indigo-600 transition-colors shadow-md"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

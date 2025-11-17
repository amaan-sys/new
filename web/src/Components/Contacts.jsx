export default function Contacts(){
  return(
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-red-600 mb-10 text-center">Contact Us</h2>
        <form action="https://formspree.io/f/xxxxxxx" method="POST" className="grid gap-4 max-w-xl mx-auto">
          <input name="name" required className="p-3 border rounded" placeholder="Your Name" />
          <input name="email" required className="p-3 border rounded" placeholder="Email" />
          <textarea name="message" required className="p-3 border rounded h-32" placeholder="Message"></textarea>
          <button className="bg-red-600 text-white p-3 rounded hover:bg-red-700">Send Message</button>
        </form>
      </div>
    </section>
  )
}
import bg from "../assets/bghome.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${bg})` }}

    >

      {/* Red + dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/40 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl px-8 animate-fadeIn pt-13">

        <h1 className="text-4xl  md:text-6xl font-extrabold mb-6 animate-slideDown ">
          Transforming <span className="text-red-300 drop-shadow-lg">Landscapes</span> with Excellence, Organic Methods And<h1 >Craftsmanship</h1> 
        </h1>

        <p className="text-lg md:text-xl mb-8 opacity-90 animate-fadeInSlow">
          Premium landscaping crafted with precision, passion, and quality service.
        </p>

        <div className="flex gap-5 justify-center">
          <button
            onClick={() =>
              document.getElementById("about").scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 rounded-full text-lg font-semibold bg-red-500 hover:bg-red-600 shadow-[0_0_20px_rgba(255,0,0,0.6)] hover:scale-110 transition-all" >
            Get a Free Quote
          </button>

          <button
          onClick={()=>
            document.getElementById('services').scrollIntoView({behavior: 'smooth'})
          }
          className="px-8 py-3 rounded-full text-lg font-semibold border border-white hover:bg-white/20 hover:scale-105 transition-all">
            View Services
          </button>
        </div>
      </div>
    </section>
  );
}

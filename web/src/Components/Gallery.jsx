import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// IMPORT IMAGES
import img1 from "../assets/gallery/a.jfif";
import img2 from "../assets/gallery/aa.jfif";
import img3 from "../assets/gallery/b.jpg";
import img4 from "../assets/gallery/bb.jpg";
import img5 from "../assets/gallery/c.jfif";
import img6 from "../assets/gallery/cc.jpg";
import img7 from "../assets/gallery/d.jfif";
// import img8 from "../assets/gallery/dd.jfif";
import img9 from "../assets/gallery/e.jfif";
import img10 from "../assets/gallery/ee.jfif";
import img11 from "../assets/gallery/f.jfif";
import img12 from "../assets/gallery/f.jpg";
import img13 from "../assets/gallery/ff.jpg";
import img14 from "../assets/gallery/g.jfif";
import img15 from "../assets/gallery/gg.jfif";
import img16 from "../assets/gallery/h.jfif";
import img17 from "../assets/gallery/hh.jpg";
import img18 from "../assets/gallery/i.jpg";
import img19 from "../assets/gallery/ii.jpg";
// import img20 from "../assets/gallery/j.jpg";
import img21 from "../assets/gallery/jj.jpg";
import img22 from "../assets/gallery/k.jfif";
import img23 from "../assets/gallery/l.jpg";
import img24 from "../assets/gallery/ll.jpg";
import img25 from "../assets/gallery/m.jfif";
import img26 from "../assets/gallery/nn.jpg";
import img27 from "../assets/gallery/o.jpg";
import img28 from "../assets/gallery/oo.jpg";
import img29 from "../assets/gallery/p.jfif";
import img30 from "../assets/gallery/r.jpg";
import img31 from "../assets/gallery/s.jfif";
import img32 from "../assets/gallery/t.jfif";
// import img33 from "../assets/gallery/u.jpg";
// import img34 from "../assets/gallery/v.jfif";
import img35 from "../assets/gallery/w.jfif";
import img36 from "../assets/gallery/x.jpg";
import img37 from "../assets/gallery/y.jfif";
import img38 from "../assets/gallery/z.jfif";

export default function MasonryGallery() {
    const [selected, setSelected] = useState(null);

    const images = [
        img1, img2, img3, img4, img5, img6, img7, img9, img10,
        img11, img12, img13, img14, img15, img16, img17, img18, img19, 
        img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
        img31, img32, img35, img36, img37, img38,
    ];

    // Close modal on ESC
    useEffect(() => {
        const close = (e) => e.key === "Escape" && setSelected(null);
        window.addEventListener("keydown", close);
        return () => window.removeEventListener("keydown", close);
    }, []);

    return (
        <section id="gallery" className="w-full bg-white py-10
         px-5 md:px-12">
            <h2 className="text-4xl font-bold text-center text-red-600 mb-10 font-serif">
                Our Gallery
            </h2>

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {images.map((url, index) => (
                    <motion.div
                        key={index}
                        className="relative overflow-hidden rounded-xl shadow-lg border-2 border-red-200 cursor-pointer group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.4, ease: "easeOut" },
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        onClick={() => setSelected(url)}
                    >
                        <img
                            src={url}
                            loading="lazy"
                            alt="gallery-img"
                            className="w-full rounded-xl transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-600/20 to-red-600/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                            <span className="text-white text-lg font-semibold tracking-wide">
                                View Image
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal Popup */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                    >
                        <motion.img
                            src={selected}
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                transition: { type: "spring", stiffness: 150, damping: 15 },
                            }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="max-w-full max-h-[85vh] border-4 border-red-600 rounded-xl shadow-2xl"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

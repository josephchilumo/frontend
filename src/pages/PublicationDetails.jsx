import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import publications from "../data/publications";

const PublicationDetails = () => {
  const { slug } = useParams();
  const publication = publications.find((pub) => pub.slug === slug);

  if (!publication) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 tracking-wide">Publication Not Found</p>
      </div>
    );
  }

  const shareOnLinkedIn = () => {
    const url = window.location.href;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(linkedInUrl, "_blank");
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-6">

        {/* Back Link */}
        <Link
          to="/publications"
          className="text-sm uppercase tracking-widest text-gray-400 hover:text-black transition"
        >
          ← Back to Publications
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Category */}
          <p className="mt-12 text-xs uppercase tracking-[0.3em] text-gray-400">
            {publication.category.trim()}
          </p>

          {/* Title */}
          <h1 className="mt-6 text-5xl font-serif font-semibold leading-tight">
            {publication.title}
          </h1>

          {/* Meta Info */}
          <div className="mt-6 text-gray-500 text-sm flex gap-6">
            <span>{publication.date}</span>
            <span>By {publication.author}</span>
          </div>

          {/* Divider */}
          <div className="w-16 h-[1px] bg-black mt-10 mb-12"></div>

          {/* Content - now supports multiple paragraphs */}
          <article className="text-gray-700 leading-relaxed text-lg space-y-6">
            {publication.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>

          {/* Actions */}
          <div className="mt-16 flex gap-6">
            <button
              onClick={shareOnLinkedIn}
              className="border border-black px-6 py-3 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition"
            >
              Share on LinkedIn
            </button>

            <a
              href={publication.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black px-6 py-3 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition"
            >
              Download PDF
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PublicationDetails;

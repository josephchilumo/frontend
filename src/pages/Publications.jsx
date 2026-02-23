import { Link } from "react-router-dom";
import publications from "../data/publications";

const Publications = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl font-serif font-semibold tracking-tight">
            Publications
          </h1>
          <div className="w-24 h-[1px] bg-black mx-auto mt-6"></div>
        </div>

        {/* List Layout */}
        <div className="space-y-16">
          {publications.map((publication) => (
            <article key={publication.id} className="border-b pb-12 group">

              <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                {publication.category}
              </p>

              <h2 className="text-3xl font-serif font-medium mb-4 group-hover:opacity-70 transition duration-300">
                {publication.title}
              </h2>

              <p className="text-gray-600 leading-relaxed max-w-3xl mb-6">
                {publication.excerpt}
              </p>

              <Link
                to={`/publications/${publication.slug}`}
                className="inline-block text-sm tracking-wider uppercase border-b border-black pb-1 hover:opacity-60 transition"
              >
                Read Article
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Publications;

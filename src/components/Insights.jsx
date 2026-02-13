import blogPosts from "../data/blogPosts";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Insights = () => {
  return (
    <section className="py-24 bg-white" id="insights">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Legal Insights & News
          </motion.h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest legal updates, expert analysis, and
            thought leadership articles.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="group bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-sm text-yellow-600 font-semibold">
                  {post.category}
                </span>

                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {post.excerpt}
                </p>

                <p className="text-gray-400 text-sm mb-4">
                  {post.date}
                </p>

                <NavLink
                  to={post.link}
                  className="text-gray-900 font-semibold hover:text-yellow-600 transition"
                >
                  Read More →
                </NavLink>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <NavLink
            to="/blog"
            className="px-8 py-3 border border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition"
          >
            View All Insights
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Insights;

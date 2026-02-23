import blogPosts from "../../data/blogPosts";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Insights = () => {
  const featuredPosts = blogPosts.slice(0, 4);

  return (
    <section className="py-24 bg-white font-serif" id="insights">
      <div className="max-w-7xl mx-auto px-8 text-center">

        {/* Section Label */}
        <motion.p
          className="uppercase tracking-[0.3em] text-sm text-[#C6A75E] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Publications
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-10 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Legal Insights & Analysis
        </motion.h2>

        {/* Centered Divider */}
        <div className="flex justify-center mb-16">
          <motion.div
            className="h-[2px] bg-[#C6A75E]"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 text-left">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group pb-8 border-b border-gray-200"
            >
              {/* Category */}
              <p className="uppercase text-xs tracking-[0.3em] text-[#C6A75E] mb-4">
                {post.category}
              </p>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4 leading-snug group-hover:text-[#C6A75E] transition-colors duration-500">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {post.excerpt}
              </p>

              {/* Meta Row */}
              <div className="flex justify-between items-center">
                <p className="text-gray-400 text-sm">
                  {post.date}
                </p>

                <NavLink
                  to="/publications"
                  className="uppercase text-sm tracking-wider text-[#C6A75E] border-b border-transparent hover:border-[#C6A75E] transition-all duration-500"
                >
                  Read →
                </NavLink>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Publications */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <NavLink
            to="/publications"
            className="inline-block border border-[#C6A75E] text-[#C6A75E] px-8 py-3 uppercase tracking-wider text-sm hover:bg-[#C6A75E] hover:text-white transition duration-500"
          >
            View All Publications
          </NavLink>
        </motion.div>

      </div>
    </section>
  );
};

export default Insights;
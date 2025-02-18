import { motion } from 'framer-motion';
import type { Data } from '../types/data';

interface HomeProps {
  data: Data['pages']['home'];
}

export default function Home({ data }: HomeProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img 
          src={data.hero.heroImage} 
          alt="BJJ Training"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container h-full flex flex-col items-center justify-center text-white">
          <motion.h1 
            className="text-5xl md:text-7xl text-center mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {data.hero.title}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {data.hero.subtitle}
          </motion.p>
        </div>
      </motion.section>

      {/* About Section */}
      <div className='flex flex-col justify-center min-h-screen bg-white'>
        <section className="py-24  bg-white">
          <div className="container">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl mb-8">{data.about.title}</h2>
              <p className="text-lg text-gray-600">{data.about.description}</p>
            </motion.div>
          </div>
        </section>
        {/* Statistics Section */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.statistics.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  className="text-center"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <p className="text-5xl font-bold mb-2">{stat.value}</p>
                  <p className="text-lg text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-24 bg-white">
          <div className="container">
            <h2 className="text-4xl text-center mb-16">Depoimentos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {data.testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="bg-background p-8 rounded-lg shadow-lg"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <p className="text-lg mb-4">{testimonial.testimonial}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
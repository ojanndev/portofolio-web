import { motion } from "framer-motion";

export default function Timeline({ line }) {
  return (
    <div className="max-w-4xl  mt-10 md:mt-20 w-full relative">
      <div className="absolute left-0 md:left-1/2 top-0 w-0.5 bg-[#282828] h-full transform -translate-x-1/2"></div>

      {line.map((exp, index) => {
        const isLeft = index % 2 === 0;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`mb-10 flex w-full ${
              isLeft ? "justify-start" : "justify-end"
            } relative`}
          >
            <span className="absolute top-2 left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border border-gray-500 z-10"></span>

            <div className="w-full md:w-1/2">
              <div
                className={`px-6 md:px-12 shadow-md ${
                  isLeft ? "text-left md:text-right" : "text-left"
                }`}
              >
                <h3 className="font-medium text-white">{exp.title}</h3>
                <p className="text-sm text-white">{exp.place}</p>
                <p className="text-sm text-white font-extralight mt-2">
                  {exp.region} — {exp.date}
                </p>
                <p className="mt-1 text-sm text-[#616161]">{exp.description}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

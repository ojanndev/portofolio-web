import React, { useState } from "react";
import { motion } from "framer-motion";
import { GoGlobe } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { projects } from "../data/data-projects.jsx";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Pagination from "../components/Pagination.jsx";

export default function Project() {
  const [type, setType] = useState("website");
  const [scope, setScope] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);

  const types = [
    { label: "All", value: "all" },
    { label: "Website", value: "website" },
    { label: "Design", value: "design" },
    // { label: "Draw", value: "draw" },
    { label: "Certificate", value: "certificate" },
  ];

  const scopes = [
    { label: "All", value: "all" },
    { label: "Paid", value: "Paid" },
    { label: "Religius", value: "Religius" },
    { label: "Intership", value: "Intership" },
    { label: "Personal", value: "Personal" },
    { label: "Akademik", value: "Akademik" },
  ];

  const filteredProjects = projects.filter(
    (p) =>
      (type === "all" || p.type.includes(type)) &&
      (scope === "all" || p.scope === scope)
  );

  const rows = filteredProjects.length; // jumlah data yang ditampilkan
  const projectsPerPage = 6; // kamu bisa sesuaikan jumlah per halaman
  const pages = Math.ceil(rows / projectsPerPage); // jumlah halaman

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // slice data untuk halaman yang dipilih
  const currentProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
    <div className="py-32 flex flex-col gap-28 px-6 md:px-32">
      <div className="flex flex-col items-center">
        <span className="flex flex-col items-center justify-center gap-1">
          <motion.h1
            className="text-4xl font-medium text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Projects
          </motion.h1>
          <motion.p
            className="text-[#616161] font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            Most recent work
          </motion.p>
        </span>
        <div className="mt-6 flex flex-col items-start w-full">
          <div className="flex flex-col md:flex-row  gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Dropdown
                label="Type"
                options={types}
                setType={setType}
                selectedType={type}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Dropdown
                label="Scope"
                options={scopes}
                setType={setScope}
                selectedType={scope}
              />
            </motion.div>
          </div>

          <div className="mt-6">
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {currentProjects.map((p, i) => (
                <motion.div
                  key={i}
                  className="relative flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-5 md:space-y-0 rounded-xl w-full  md:w-full overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.1 * i,
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className={`rounded-xl ${
                      p.type.includes("website")
                        ? "w-full md:w-2/6 aspect-[16/9]"
                        : "w-full md:w-2/7"
                    } object-cover`}
                  />
                  <div className="w-full flex flex-col p-3">
                    <h1 className="text-white text-lg font-medium flex items-center gap-2">
                      {p.title}{" "}
                      <span className="px-1 py-0.5 text-[10px] bg-white text-black rounded-lg">
                        {p.scope}
                      </span>
                    </h1>
                    <div className="mt-1 flex gap-3">
                      {p.tools.map((tool, index) => (
                        <img
                          className="w-6 h-6"
                          key={index}
                          src={tool}
                          alt={tool}
                        />
                      ))}
                    </div>
                    <p className="text-gray-200 text-[13px] mt-3">{p.desc}</p>
                    <div className="flex items-center gap-3 mt-3">
                      {p.url && (
                        <Button
                          actions="link"
                          size="sm"
                          url={p.url}
                          label={
                            <span className="flex items-center gap-3">
                              Visit <GoGlobe />
                            </span>
                          }
                        />
                      )}
                      {p.repo && (
                        <Button
                          actions="link"
                          size="sm"
                          url={p.repo}
                          label={
                            <span className="flex items-center gap-3">
                              Repository <FiGithub />
                            </span>
                          }
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="mt-6 w-full">
            <Pagination
              data={filteredProjects}
              rows={rows}
              page={currentPage}
              pages={pages}
              changePage={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import TeamCard from "./TeamCard";

const coreTeam = {
  name: "M. Rabyndra Janitra Binello",
  university: "Universitas Sriwijaya",
  major: "Teknik Informatika",
  batch: "23",
  instagram: "instagram.com/ellorabyndra/",
  linkedin: "linkedin.com/in/ello-rabyndra",
  github: "github.com/ElloRabyndra",
  image: "/ello-png",
  isLead: true,
};

const members = [
  { name: "Ahmad Kurnia Prisma", major: "Teknik Informatika", batch: "23" },
  { name: "Nuredy Rahma Gunawan", major: "Teknik Informatika", batch: "23" },
  { name: "Akbar Kurniawan", major: "Teknik Informatika", batch: "23" },
  { name: "Duhairillah", major: "Teknik Informatika", batch: "23" },
  { name: "Deza Arlian", major: "Teknik Informatika", batch: "23" },
  { name: "Aulia Mutiara Sari", major: "Teknik Informatika", batch: "23" },
  { name: "Anjelia Hidayat", major: "Teknik Informatika", batch: "23" },
  { name: "Farrel Athaillah Wijaya", major: "Teknik Informatika", batch: "23" },
  { name: "M Atala Daffa Alfaris", major: "Teknik Informatika", batch: "23" },
];

const Team = () => {
  return (
    <section id="team" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Core Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Meet the <span className="text-google-green">Core Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Leading the Frontend Development division with passion and expertise
          </p>
        </motion.div>

        {/* Core Team Lead */}
        <div className="max-w-sm mx-auto mb-20">
          <TeamCard
            member={coreTeam}
            index={0}
          />
        </div>

        {/* Members Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-google-red">Members</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Talented developers ready to learn and grow together
          </p>
        </motion.div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <TeamCard
              key={member.name}
              member={{
                ...member,
                university: "Universitas Sriwijaya",
              }}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

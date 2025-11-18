import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="about" className="about">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="about-container"
      >
        <motion.div variants={itemVariants} className="about-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </motion.div>
        
        <div className="about-content">
          <motion.div variants={itemVariants} className="about-text">
            <p>
              I'm a passionate full-stack developer with over 3 years of experience 
              creating digital solutions that make a difference. I love turning 
              complex problems into simple, beautiful designs.
            </p>
            <p>
              My journey in tech started with curiosity and has evolved into a 
              career focused on creating meaningful user experiences through 
              clean code and innovative thinking.
            </p>
            
            <motion.div className="about-stats">
              <div className="stat-item">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="stat-icon"
                >
                  💼
                </motion.div>
                <h4>3+ Years</h4>
                <p>Experience</p>
              </div>
              <div className="stat-item">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="stat-icon"
                >
                  🚀
                </motion.div>
                <h4>50+ Projects</h4>
                <p>Completed</p>
              </div>
              <div className="stat-item">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="stat-icon"
                >
                  ⭐
                </motion.div>
                <h4>30+ Clients</h4>
                <p>Worldwide</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="about-image">
            <div className="floating-shapes">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="shape shape-1"
              ></motion.div>
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="shape shape-2"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
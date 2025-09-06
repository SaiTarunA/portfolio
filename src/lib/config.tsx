export default {
  pages: {
    index: {
      title: "Sai Tarun Avadhootha",
      description: "Full-Stack Developer",
      logo: "SAI TARUN",
      ctaLinks: {
        linkedIn: "https://www.linkedin.com/in/sai-tarun-avadhootha-231324193/",
        github: "https://github.com/SaiTarunA",
        mail: "mailto:saitarunavadhootha@gmail.com",
        resume: `${import.meta.env.BASE_URL}/Resume.pdf`,
      },
      sidebar: {
        nav: [
          {
            id: "introduction",
            title: "Introduction",
          },
          {
            id: "experience",
            title: "Experience",
          },
          {
            id: "skills",
            title: "Skills",
          },
          {
            id: "contact",
            title: "Contact",
          },
        ],
        cta: {
          title: "Resume",
          url: `${import.meta.env.BASE_URL}/Resume.pdf`,
        },
      },
      sections: {
        introduction: {
          id: "introduction",
          title: "INTRODUCTION",
          first: "I am",
          name: "Sai Tarun",
          roles: [
            "Full-Stack Developer",
            "Software Engineer",
            "Founding Engineer",
            "Web Developer",
            "AI Engineer",
          ],
          paragraphs: [
            "Welcome!",
            `I am a <b>Full-stack Developer</b> with <b>3+ years</b> of
            hands-on experience, specializing in frontend engineering and
            building AI-powered voice and communication platforms for modern
            SaaS products. As a <b>Founding Engineer</b>, I've led product
            development from scratch to deployment, owning the entire frontend
            stack while also contributing to backend, DevOps, and
            <b>AI voice agent</b> systems.`,
          ],
          quote: "If it runs in production, I've probably touched it.",
        },
        experience: {
          id: "experience",
          title: "EXPERIENCE",
          items: [
            {
              role: "FOUNDING ENGINEER",
              timeline: "SEP 2023 - SEP 2025",
              isInternship: false,
              company: {
                name: "Overhyped AI",
                url: "https://overhyped.ai",
              },
              paragraphs: [
                `<b>AI Voice Agent Platform:</b> Architected and implemented an AI-powered voice assistant in Python using STT, TTS, RAG, and LLMs; handled multilingual conversations, human-AI handoff, visual context integration, and outbound call flows.`,
                `Led Frontend & Widget Development: <b>Built and owned the complete frontend architecture</b> using React, TypeScript, Zustand, and Webpack for the customer-facing UserDashboard and embeddable in-app Widget used by end-users.`,
                `<b>Prompt Engineering:</b> Engineered, optimized, and iteratively refined prompts for high-accuracy, contextual, and dynamic AI interactions tailored to business use cases.`,
                `Built a <b>FastAPI-based backend</b> for automated order verification with Celery-based task scheduling, concurrency control, and a Python worker to manage real-time AI voice calls and status updates.`,
                `Marketing Website: Delivered the full customer-facing Overhyped AI marketing site using <b>Next.js in just 3 days</b> to accelerate brand visibility and lead generation.`,
              ],
            },
            {
              role: "FULL STACK DEVELOPER",
              timeline: "FEB 2023 - JULY 2023",
              isInternship: true,
              company: {
                name: "Ai Palette",
                url: "https://aipalette.com",
              },
              paragraphs: [
                `Developed and implemented a personalized dashboard for customers, driving 85% of website traffic. Enhanced data analysis capabilities and improved time efficiency for users.`,
                `Developed POC feature showcasing our platform capabilities and insightful data, driving customer acquisition and seamless subscription transition.`,
                `Implemented a user-friendly interface that allows users to select specific ingredients and apply multiple filters for efficient data filtering and analysis.`,
                `Collaborated on UI/UX fixes, bug fixes, and improvements for a clean user experience. Developed reusable components and contributed to features like Regional Analytics, Demography Analysis, and Related Trends.`,
              ],
            },
            {
              role: "FULL STACK DEVELOPER",
              timeline: "APR 2022 - JAN 2023",
              isInternship: true,
              company: {
                name: "Spoonshot",
                url: "https://spoonshot.com",
              },
              paragraphs: [
                `Leveraged historical time series data to analyze long-term trend evolution, aiding user decision-making across multiple years.`,
                `Implemented scalable data transformations using PySpark on ~1B records to extend the “Concept Generator” feature from ingredient pairings to triplets.`,
                `Contributed to DevOps by setting up a resource-optimized staging environment; fine-tuned deployment sizing to run efficiently without increasing node pool usage.`,
                `Contributed to backend models, API endpoints, and frontend UI/UX fixes; helped develop reusable components and improve user experience.`,
              ],
            },
          ],
          quote:
            "Startups taught me speed, ownership, and resilience. I ship, learn, and improve without waiting for perfect conditions.",
        },
        skills: {
          id: "skills",
          title: "SKILLS",
          items: [
            {
              title: "FRONTEND",
              items: [
                "React Js",
                "Next JS",
                "Typescript",
                "Tailwind CSS",
                "Zustand",
                "Javascript",
                "Redux",
                "NPM",
                "Webpack",
                "Vite",
                "Material UI",
                "Shadcn",
                "HTML",
                "CSS",
              ],
            },
            {
              title: "BACKEND",
              items: ["Python", "Django", "FastAPI", "REST APIs", "Celery"],
            },
            {
              title: "DATABASES",
              items: ["MySQL", "PostgresSQL", "MongoDB", "Redis"],
            },
            {
              title: "DevOps & Cloud",
              items: ["Docker", "Kubernetes", "Helm", "Azure"],
            },
            {
              title: "AI",
              items: [
                "Prompt Engineering",
                "Voice Agent using STT, LLM and TTS",
                "RAG",
              ],
            },
            {
              title: "Other technologies I have worked with",
              items: [
                "Astro",
                "Node JS",
                "PySpark",
                "Solr",
                "ElasticSearch",
                "GCP",
                "AWS",
                "Digital Ocean",
              ],
            },
          ],
          quote:
            "Tools change, but the ability to learn and adapt is the real skill I bring to the table.",
        },
        contact: {
          id: "contact",
          title: "CONTACT",
          contactFormAccessKey: "f2efbbbc-d175-4eeb-8b53-837a7dac2de3",
        },
      },
    },
  },
};

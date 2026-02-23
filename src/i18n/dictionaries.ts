export type Language = 'pt' | 'en' | 'es';

export const dictionaries = {
  pt: {
    navbar: {
      experience: "Experiência",
      projects: "Projetos",
      skills: "Habilidades",
      contact: "Contato",
      contactMobile: "Entrar em contato"
    },
    hero: {
      role: "Software Engineer & Full Stack Developer",
      titleStart: "Transformando ideias em",
      titleHighlight: "soluções digitais",
      description: "Especialista em criar produtos escaláveis, intuitivos e de alto impacto usando tecnologias modernas como React, Next.js e Node.js.",
      contactBtn: "Entre em contato",
      downloadCvBtn: "Baixar CV"
    },
    experience: {
      title: "Experiência Profissional",
      present: "Presente",
      items: [
        {
          company: "Programmers",
          role: "Full Stack Developer",
          period: "Novembro de 2024 – Presente",
          description: [
            "Desenvolve dashboards interativos e visualizações de dados usando Next.js e GraphQL, simplificando conjuntos de dados complexos para usuários de negócios.",
            "Constrói suítes de testes unitários automatizados (Jest, React Testing Library) para garantir a qualidade do código em todos os lançamentos.",
            "Aprimora recursos de integração de dados e relatórios de múltiplos sistemas externos.",
            "Impulsiona a melhoria contínua através de revisões de código por pares e colaboração via Kanban.",
            "Melhora a manutenibilidade do software, acelerando a entrega de funcionalidades e reduzindo bugs."
          ]
        },
        {
          company: "Tensill",
          role: "React Front-end Developer",
          period: "Maio de 2022 – Outubro de 2024",
          description: [
            "Projetou e entregou recursos principais para um editor de conteúdo de alto tráfego usado por mais de 100 mil usuários.",
            "Liderou o desenvolvimento técnico de um sistema de fontes personalizado, tornando-se um dos principais geradores de lucro da empresa.",
            "Refatorou o serviço de e-mail em Node.js, aumentando o desempenho e simplificando a manutenção.",
            "Manteve pipelines de CI/CD e QA, garantindo implantações estáveis.",
            "Apoiou e mentorou desenvolvedores juniores, promovendo a excelência da base de código."
          ]
        },
        {
          company: "Rockstar Coders",
          role: "Full Stack Developer",
          period: "Agosto de 2020 – Maio de 2022",
          description: [
            "Encabeçou um alternador de tema em tempo real para produtos principais usando styled-components e Context API.",
            "Construiu módulos para gerenciamento de campanhas de doação nos EUA e produtos para gerenciamento de casamentos (React, Next.js, Apollo GraphQL).",
            "Desenvolveu endpoints de backend (Node.js, Express) para suportar recursos configuráveis pelo cliente.",
            "Garantiu alta qualidade através de revisões de código e práticas de CI (CircleCI, GitHub)."
          ]
        },
        {
          company: "Na Feijuca (Food Delivery)",
          role: "Full Stack Developer (Freelancer)",
          period: "Julho de 2017 – Dezembro de 2020",
          description: [
            "Desenvolveu soluções SPA e mobile (React, Redux, React Native, Node.js).",
            "Implementou gerenciamento de pedidos e estoque em tempo real via sockets.",
            "Projetou interfaces e fluxos intuitivos usando Figma."
          ]
        },
        {
          company: "Evox Technology Corp / JBS",
          role: "Full Stack Developer",
          period: "Julho de 2017 – Agosto de 2020",
          description: [
            "Construiu APIs MVC 5 e RESTful com ASP.NET, TypeScript e SQL Server.",
            "Criou trabalhos automatizados de sincronização de dados usando Hangfire."
          ]
        },
        {
          company: "Accenture Avanade",
          role: "System Analyst - Senior Full Stack Developer",
          period: "Setembro de 2016 – Julho de 2017",
          description: [
            "Desenvolveu middleware de segurança em .NET C# para interface com mainframe DB2 de grandes bancos.",
            "Criou novas APIs em Node.js e WCF para integração entre sistemas web e legados."
          ]
        }
      ]
    },
    projects: {
      titleSection: "Projetos Pessoais & Produtos",
      techsLabel: "Tecnologias:",
      items: [
        {
          title: "SimplificandoAI",
          subtitle: "Plataforma SaaS de Automação & IA",
          description: "Plataforma avançada para redução de taxas de 'no-show' em eventos com integrações de inteligência artificial.",
          highlight: "SaaS em produção",
          features: [
            { title: "Automação de Eventos", desc: "Fluxos de trabalho automatizados por WhatsApp e E-mail para engajamento contínuo." },
            { title: "Agentes de IA", desc: "Implementação de CrewAI para copywriting automatizado e sugestões de agendamento inteligentes." },
            { title: "Registro Inteligente", desc: "Fluxo com lógica de 'Interesse vs. Confirmação' e validação via QR Code integrado." },
            { title: "Geração de Mídia IA", desc: "Ferramentas para edição, criação de imagens, vídeos e descrições ricas baseadas em imagens enviadas." }
          ]
        },
        {
          title: "Hidrosol",
          subtitle: "Catálogo Digital de Produtos e CMS",
          description: "Sistema escalável e autogerenciável permitindo acesso em tempo real a estoques e preços para a equipe de vendas.",
          highlight: "Alta performance",
          features: [
            { title: "Catálogo Escalável", desc: "Sistema rápido e sincronizado entre Next.js e Node.js para desempenho superior." },
            { title: "Painel Administrativo", desc: "CMS personalizado para gestão de clientes, descrições, preços e ativos multimídia de forma unificada." },
            { title: "Arquitetura AWS", desc: "Infraestrutura robusta usando EC2 e MySQL para banco de dados relacional." },
            { title: "Processamento de Imagens", desc: "Fluxos serverless via AWS Lambda e S3 distribuídos de forma eficiente com CDN CloudFront." }
          ]
        }
      ]
    },
    skills: {
      title: "Habilidades Técnicas",
      categories: [
        { category: "Linguagens", skills: ["JavaScript (ES6+)", "TypeScript", "Python", "C# (.NET)", "SQL", "HTML/CSS"] },
        { category: "Front-end", skills: ["React", "Next.js", "React Native", "Redux", "TailwindCSS", "Styled-Components", "Figma"] },
        { category: "Back-end & Banco de Dados", skills: ["Node.js", "Express", "GraphQL", "Apollo", "ASP.NET", "MySQL", "SQL Server"] },
        { category: "DevOps & Cloud", skills: ["Docker", "AWS (EC2, Lambda, S3)", "CloudFront", "CI/CD", "Hangfire"] }
      ]
    },
    footer: {
      rights: "Todos os direitos reservados."
    }
  },

  en: {
    navbar: {
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      contactMobile: "Get in touch"
    },
    hero: {
      role: "Software Engineer & Full Stack Developer",
      titleStart: "Transforming ideas into",
      titleHighlight: "digital solutions",
      description: "Expert in building scalable, intuitive, and high-impact products using modern technologies like React, Next.js, and Node.js.",
      contactBtn: "Get in touch",
      downloadCvBtn: "Download CV"
    },
    experience: {
      title: "Professional Experience",
      present: "Present",
      items: [
        {
          company: "Programmers",
          role: "Full Stack Developer",
          period: "November 2024 – Present",
          description: [
            "Develops interactive dashboards and data visualizations using Next.js and GraphQL, simplifying complex datasets for business users.",
            "Builds automated unit testing suites (Jest, React Testing Library) to ensure code quality across all releases.",
            "Enhances data integration and reporting features from multiple external systems.",
            "Drives continuous improvement via peer code reviews and Kanban collaboration.",
            "Improves software maintainability, speeding up feature delivery and reducing bugs."
          ]
        },
        {
          company: "Tensill",
          role: "React Front-end Developer",
          period: "May 2022 – October 2024",
          description: [
            "Designed and delivered core features for a high-traffic content editor used by over 100k users.",
            "Spearheaded the technical development of a custom font system, becoming one of the company's top profit generators.",
            "Refactored the Node.js email service, increasing performance and simplifying maintenance.",
            "Maintained CI/CD pipelines and QA, ensuring stable deployments.",
            "Supported and mentored junior developers, promoting codebase excellence."
          ]
        },
        {
          company: "Rockstar Coders",
          role: "Full Stack Developer",
          period: "August 2020 – May 2022",
          description: [
            "Spearheaded a real-time theme switcher for core products using styled-components and Context API.",
            "Built modules for US donation campaign management and wedding management products (React, Next.js, Apollo GraphQL).",
            "Developed backend endpoints (Node.js, Express) to support customer-configurable features.",
            "Ensured high quality through code reviews and CI practices (CircleCI, GitHub)."
          ]
        },
        {
          company: "Na Feijuca (Food Delivery)",
          role: "Full Stack Developer (Freelancer)",
          period: "July 2017 – December 2020",
          description: [
            "Developed SPA and mobile solutions (React, Redux, React Native, Node.js).",
            "Implemented real-time order and inventory management via sockets.",
            "Designed intuitive interfaces and flows using Figma."
          ]
        },
        {
          company: "Evox Technology Corp / JBS",
          role: "Full Stack Developer",
          period: "July 2017 – August 2020",
          description: [
            "Built MVC 5 and RESTful APIs with ASP.NET, TypeScript, and SQL Server.",
            "Created automated data synchronization jobs using Hangfire."
          ]
        },
        {
          company: "Accenture Avanade",
          role: "System Analyst - Senior Full Stack Developer",
          period: "September 2016 – July 2017",
          description: [
            "Developed security middleware in .NET C# to interface with DB2 mainframe of large banks.",
            "Created new APIs in Node.js and WCF for integration between web and legacy systems."
          ]
        }
      ]
    },
    projects: {
      titleSection: "Personal Projects & Products",
      techsLabel: "Technologies:",
      items: [
        {
          title: "SimplificandoAI",
          subtitle: "Automation & AI SaaS Platform",
          description: "Advanced platform to reduce no-show rates at events with artificial intelligence integrations.",
          highlight: "SaaS in production",
          features: [
            { title: "Event Automation", desc: "Automated workflows via WhatsApp and Email for continuous engagement." },
            { title: "AI Agents", desc: "CrewAI implementation for automated copywriting and intelligent scheduling suggestions." },
            { title: "Smart Registration", desc: "Flow with 'Interest vs. Confirmation' logic and integrated QR Code validation." },
            { title: "AI Media Generation", desc: "Tools for editing, image creation, videos, and rich descriptions based on uploaded images." }
          ]
        },
        {
          title: "Hidrosol",
          subtitle: "Digital Product Catalog and CMS",
          description: "Scalable and self-managed system allowing real-time access to stock and prices for the sales team.",
          highlight: "High performance",
          features: [
            { title: "Scalable Catalog", desc: "Fast and synchronized system between Next.js and Node.js for superior performance." },
            { title: "Administrative Panel", desc: "Custom CMS for unified management of clients, descriptions, prices, and multimedia assets." },
            { title: "AWS Architecture", desc: "Robust infrastructure using EC2 and MySQL for relational database." },
            { title: "Image Processing", desc: "Serverless flows via AWS Lambda and S3 efficiently distributed with CDN CloudFront." }
          ]
        }
      ]
    },
    skills: {
      title: "Technical Skills",
      categories: [
        { category: "Languages", skills: ["JavaScript (ES6+)", "TypeScript", "Python", "C# (.NET)", "SQL", "HTML/CSS"] },
        { category: "Front-end", skills: ["React", "Next.js", "React Native", "Redux", "TailwindCSS", "Styled-Components", "Figma"] },
        { category: "Back-end & Database", skills: ["Node.js", "Express", "GraphQL", "Apollo", "ASP.NET", "MySQL", "SQL Server"] },
        { category: "DevOps & Cloud", skills: ["Docker", "AWS (EC2, Lambda, S3)", "CloudFront", "CI/CD", "Hangfire"] }
      ]
    },
    footer: {
      rights: "All rights reserved."
    }
  },

  es: {
    navbar: {
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
      contactMobile: "Ponerse en contacto"
    },
    hero: {
      role: "Ingeniero de Software y Desarrollador Full Stack",
      titleStart: "Transformando ideas en",
      titleHighlight: "soluciones digitales",
      description: "Experto en crear productos escalables, intuitivos y de alto impacto utilizando tecnologías modernas como React, Next.js y Node.js.",
      contactBtn: "Ponerse en contacto",
      downloadCvBtn: "Descargar CV"
    },
    experience: {
      title: "Experiencia Profesional",
      present: "Presente",
      items: [
        {
          company: "Programmers",
          role: "Desarrollador Full Stack",
          period: "Noviembre 2024 – Presente",
          description: [
            "Desarrolla paneles interactivos y visualizaciones de datos utilizando Next.js y GraphQL, simplificando conjuntos de datos complejos para usuarios de negocio.",
            "Construye suites de pruebas unitarias automatizadas (Jest, React Testing Library) para garantizar la calidad del código en todas las versiones.",
            "Mejora las funciones de integración de datos y análisis de múltiples sistemas externos.",
            "Impulsa la mejora continua a través de revisiones de código y colaboración vía Kanban.",
            "Mejora el mantenimiento del software, acelerando la entrega de funciones y reduciendo errores."
          ]
        },
        {
          company: "Tensill",
          role: "Desarrollador Front-end React",
          period: "Mayo 2022 – Octubre 2024",
          description: [
            "Diseñó y entregó funciones clave para un editor de contenido de alto tráfico utilizado por más de 100 mil usuarios.",
            "Lideró el desarrollo técnico de un sistema de fuentes personalizado, convirtiéndose en uno de los principales generadores de ganancias de la empresa.",
            "Refactorizó el servicio de correo electrónico en Node.js, aumentando el rendimiento.",
            "Mantuvo pipelines de CI/CD y control de calidad (QA), asegurando implementaciones estables.",
            "Apoyó y fue mentor de desarrolladores junior, promoviendo la excelencia del código."
          ]
        },
        {
          company: "Rockstar Coders",
          role: "Desarrollador Full Stack",
          period: "Agosto 2020 – Mayo 2022",
          description: [
            "Lideró un cambiador de temas en tiempo real para productos principales usando styled-components y Context API.",
            "Construyó módulos para la gestión de campañas de donación en EE.UU. y productos de gestión de bodas (React, Next.js, Apollo GraphQL).",
            "Desarrolló endpoints backend (Node.js, Express) para soportar funciones configurables por el cliente.",
            "Garantizó alta calidad a través de revisiones de código y prácticas de CI (CircleCI, GitHub)."
          ]
        },
        {
          company: "Na Feijuca (Food Delivery)",
          role: "Desarrollador Full Stack (Independiente)",
          period: "Julio 2017 – Diciembre 2020",
          description: [
            "Desarrolló soluciones SPA y móviles (React, Redux, React Native, Node.js).",
            "Implementó gestión de pedidos e inventario en tiempo real a través de sockets.",
            "Diseñó interfaces de usuario y flujos intuitivos utilizando Figma."
          ]
        },
        {
          company: "Evox Technology Corp / JBS",
          role: "Desarrollador Full Stack",
          period: "Julio 2017 – Agosto 2020",
          description: [
            "Construyó APIs MVC 5 y RESTful con ASP.NET, TypeScript y SQL Server.",
            "Creó trabajos automatizados de sincronización de datos utilizando Hangfire."
          ]
        },
        {
          company: "Accenture Avanade",
          role: "Analista de Sistemas - Desarrollador Full Stack Senior",
          period: "Septiembre 2016 – Julio 2017",
          description: [
            "Desarrolló middleware de seguridad en .NET C# para interactuar con el mainframe DB2 de grandes bancos.",
            "Creó nuevas APIs en Node.js y WCF para la integración entre sistemas web y legados."
          ]
        }
      ]
    },
    projects: {
      titleSection: "Proyectos Personales y Productos",
      techsLabel: "Tecnologías:",
      items: [
        {
          title: "SimplificandoAI",
          subtitle: "Plataforma SaaS de Automatización e IA",
          description: "Plataforma avanzada para reducir tasas de inasistencia en eventos con integraciones de inteligencia artificial.",
          highlight: "SaaS en producción",
          features: [
            { title: "Automatización de Eventos", desc: "Flujos de trabajo automatizados a través de WhatsApp y Correo para un compromiso continuo." },
            { title: "Agentes de IA", desc: "Implementación de CrewAI para redacción automatizada y sugerencias inteligentes de programación." },
            { title: "Registro Inteligente", desc: "Flujo con lógica de 'Interés vs. Confirmación' y validación por código QR integrado." },
            { title: "Generación de Medios por IA", desc: "Herramientas para la edición, creación de imágenes, videos y descripciones basadas en imágenes subidas." }
          ]
        },
        {
          title: "Hidrosol",
          subtitle: "Catálogo Digital de Productos y CMS",
          description: "Sistema escalable y autogestionado que permite acceso en tiempo real a existencias y precios para el equipo de ventas.",
          highlight: "Alto rendimiento",
          features: [
            { title: "Catálogo Escalable", desc: "Sistema rápido y sincronizado entre Next.js y Node.js para un rendimiento superior." },
            { title: "Panel Administrativo", desc: "CMS personalizado para gestión unificada de clientes, descripciones, precios y archivos multimedia." },
            { title: "Arquitectura AWS", desc: "Infraestructura robusta usando EC2 y MySQL para base de datos relacional." },
            { title: "Procesamiento de Imágenes", desc: "Flujos serverless mediante AWS Lambda y S3 distribuidos de manera eficiente con CDN CloudFront." }
          ]
        }
      ]
    },
    skills: {
      title: "Habilidades Técnicas",
      categories: [
        { category: "Lenguajes", skills: ["JavaScript (ES6+)", "TypeScript", "Python", "C# (.NET)", "SQL", "HTML/CSS"] },
        { category: "Front-end", skills: ["React", "Next.js", "React Native", "Redux", "TailwindCSS", "Styled-Components", "Figma"] },
        { category: "Back-end y Base de Datos", skills: ["Node.js", "Express", "GraphQL", "Apollo", "ASP.NET", "MySQL", "SQL Server"] },
        { category: "DevOps y Cloud", skills: ["Docker", "AWS (EC2, Lambda, S3)", "CloudFront", "CI/CD", "Hangfire"] }
      ]
    },
    footer: {
      rights: "Todos los derechos reservados."
    }
  }
};

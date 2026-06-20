/* ── DATA ────────────────────────────────────────────────── *
 * Single source of truth for all portfolio content.
 * Edit this file to update projects, certifications, etc.
 * ─────────────────────────────────────────────────────────── */

const DATA = {

  /* ── PROJECTS ─────────────────────────────────────────── */
  projects: {
    taskpay: {
      name: 'TaskPay',
      subject: 'Information Management',
      role: 'Frontend Developer',
      tag: 'React.js · HTML · Tailwind CSS',
      description:
        'A web and mobile-based marketplace platform that enables users to earn money by completing small daily tasks for others in their local area. Connects task requesters (those needing services) with taskers (those completing them) for tasks like grocery shopping, food delivery, and package pickup.',
      highlights: [
        'Frontend built with React.js and Tailwind CSS',
        'Marketplace connecting requesters and taskers',
        'Task types: grocery runs, delivery, pickup',
        'Secure and efficient flexible earning system',
      ],
      github: 'https://github.com/creblando',
      live: null,
      status: 'Completed',
    },

    ayospila: {
      name: 'AyosPila',
      subject: 'Design and Analysis of Algorithms',
      role: 'Frontend Developer',
      tag: 'React.js · HTML · Tailwind CSS',
      description:
        'A web/mobile application that optimizes queues in public service areas across the Philippines — barangay health centers, LTO, SSS, PhilHealth offices, and local aid distributions. Uses the Quicksort algorithm to dynamically sort individuals in line based on urgency, appointment time, document completeness, and priority status (senior citizens, PWDs).',
      highlights: [
        'Quicksort algorithm for real-time queue reordering',
        'Priority sorting: urgency, appointment time, PWD/senior status',
        'Reduces waiting time and prevents line jumping',
        'Frontend built with React.js and Tailwind CSS',
      ],
      github: 'https://github.com/creblando',
      live: null,
      status: 'Completed',
    },

    urbannoise: {
      name: 'UrbanNoise-AI',
      subject: 'Artificial Intelligence (COSC 304)',
      role: 'Backend Developer',
      tag: 'Python · TensorFlow · Keras · Flask',
      description:
        'An end-to-end deep learning pipeline for robust audio classification and background noise suppression in urban environments. Designed for the acoustic conditions of Metro Manila streets, the system first denoises corrupted audio using a 1D Denoising Autoencoder (1D-DAE), then classifies the underlying sound using a 1D Convolutional Neural Network (1D-CNN).',
      highlights: [
        '1D Denoising Autoencoder (1D-DAE) for noise suppression',
        '1D-CNN for urban sound classification',
        'Built for Metro Manila acoustic conditions',
        'Full Python backend — Flask API, training pipeline, inference',
      ],
      github: 'https://github.com/creblando',
      live: null,
      status: 'Completed',
    },

    alibi: {
      name: 'The Alibi',
      subject: 'Artificial Intelligence / Game Development (COSC 304)',
      role: 'Game Logic Developer',
      tag: 'Python · RenPy',
      description:
        'A text-driven detective game built around procedurally generated murder mysteries. Each playthrough produces a brand-new case — different victim, suspects, and timeline. The player interviews NPCs, collects evidence, and identifies the suspect whose alibi collapses under scrutiny. AI drives both the mystery generation and NPC dynamic responses, ensuring each run is unique and solvable.',
      highlights: [
        'Procedural case generation (victim, suspects, timeline)',
        'AI-driven NPC interview system with dynamic responses',
        "Detective's Notebook for tracking clues",
        'Branching accusation flow with multiple outcomes',
      ],
      github: 'https://github.com/creblando',
      live: null,
      status: 'Completed',
    },

    pasuyo: {
      name: 'PASUYO',
      subject: 'Software Engineering',
      role: 'Full-Stack Developer',
      tag: 'Flutter · Dart · Express.js · Firebase',
      description:
        'A hyper-local peer-to-peer micro-gig mobile application for the PUP Manila community. Enables students and community members to post and accept small tasks. Built with Flutter/Dart for the frontend, Express.js/TypeScript for the REST API backend, Firebase Firestore and Auth for data and authentication, and PayMongo for payments.',
      highlights: [
        'Flutter/Dart mobile frontend',
        'Express.js + TypeScript REST API',
        'Firebase Firestore + Auth',
        'PayMongo payment integration',
      ],
      github: 'https://github.com/creblando',
      live: null,
      status: 'In Development',
    },
  },

  /* ── WORK EXPERIENCE ──────────────────────────────────── */
  experience: [
    {
      role: 'AI Video Editor',
      company: 'International Client',
      period: 'Jun 2026 – Present',
      location: 'Remote',
      bullets: [
        'Produce AI-assisted video content using prompt engineering and AI video automation tools',
        'Manage end-to-end editing pipeline: generation, refinement, and client delivery',
        'Coordinate across time zones with independent client management',
      ],
    },
    {
      role: 'Video Editor',
      company: 'Local Marketing Company',
      period: 'Jan 2026 – Present',
      location: 'Philippines',
      bullets: [
        'Edit marketing and promotional content for a portfolio of local business clients',
        'Collaborate with the creative team to meet brand guidelines and campaign deadlines',
        'Deliver consistent, revision-ready cuts under time pressure',
      ],
    },
    {
      role: 'Freelance Video Editor',
      company: 'International Client',
      period: 'Nov 2024 – Present',
      location: 'Remote',
      bullets: [
        'Provide ongoing video editing services on a flexible retainer basis',
        'Maintain reliable quality and turnaround while managing a full-time academic workload',
      ],
    },
  ],

  /* ── CERTIFICATIONS ───────────────────────────────────── */
  certifications: [
    {
      name: 'C Programming',
      issuer: 'TestDome',
      url: 'https://www.testdome.com/certificates/8c4fd5c6d6d24f668eeb7447fb5cf13f',
    },
    {
      name: 'Software Engineering',
      issuer: 'TestDome',
      url: 'https://www.testdome.com/certificates/6418e49c2e3543759e949aba9113b02a',
    },
    {
      name: 'Intermediate Python',
      issuer: 'DataCamp',
      url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/0298a0dbc33315aa47a92030e0af4f3562295383',
    },
    {
      name: 'Introduction to SQL',
      issuer: 'DataCamp',
      url: 'https://app.datacamp.com/learn/courses/introduction-to-sql',
    },
    {
      name: 'Introduction to C',
      issuer: 'Sololearn',
      url: 'https://www.sololearn.com/certificates/CC-DQAXCLQZ',
    },
    {
      name: 'Introduction to HTML',
      issuer: 'Sololearn',
      url: 'https://www.sololearn.com/certificates/CC-K2T8KXPX',
    },
    {
      name: 'Introduction to Python',
      issuer: 'Sololearn',
      url: 'https://www.sololearn.com/certificates/CC-QGVRMJ54',
    },
    {
      name: 'Networking Basics',
      issuer: 'Cisco',
      url: 'https://www.netacad.com/certificates/?issuanceId=d7714c9e-a947-4cfb-88ef-3b34d63611f9',
    },
  ],

};
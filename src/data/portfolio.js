export const personal = {
  name: "Anurag Yadav",
  firstName: "Anurag",
  lastName: "Yadav",
  role: "AI Engineer",
  tagline:
    "Building intelligent systems at the intersection of NLP, computer vision, and deep learning — from raw data to deployed models.",
  bio1: "I'm an M.Tech student in Artificial Intelligence & Machine Learning at Dibrugarh University with a track record of turning research ideas into real, working systems.",
  bio2: "My published work spans abusive language detection in Hindi (ICCCNT 2025), AI-driven diabetic retinopathy grading, and stock market forecasting with uncertainty quantification — presented at national and international conferences.",
  bio3: "I care about the full stack of AI: rigorous experimentation, clean code, and models that are explainable and deployable — not just impressive on paper. Currently interning at CSIR-NEIST on geospatial ML for Majuli Island.",
  location: "Chabua, Dibrugarh, Assam",
  email: "abcanuragyadav251@gmail.com",
  phone: "+91 6000 147 471",
  status: "available for opportunities — Q3 2026",
  github: "https://github.com/AnuragYadav12",
  linkedin: "https://linkedin.com/in/anurag-yadav-16198a1ba",
  instagram: "https://www.instagram.com/_.anurag._._",
  cgpa: "8.25",
  degree: "M.Tech AI & ML · Dibrugarh University",
  focus: "NLP · CV · DL",
  stack: "PyTorch / FastAPI",
  openTo: "research, ML roles",
  langs: "EN · HI · AS",
};

export const stats = [
  { num: "3+", label: "RESEARCH PAPERS" },
  { num: "10+", label: "PROJECTS BUILT" },
  { num: "3", label: "INTERNSHIPS" },
  { num: "8.25", label: "M.TECH CGPA" },
];

export const skills = [
  {
    group: "PROGRAMMING",
    items: [
      "PYTHON",
      "C",
      "C++",
      "JAVASCRIPT",
      "HTML / CSS",
      "PROLOG",
      "MYSQL",
    ],
  },
  {
    group: "DEEP LEARNING & ML",
    items: [
      "PYTORCH",
      "TENSORFLOW",
      "SCIKIT-LEARN",
      "TRANSFORMERS",
      "YOLO",
      "OPENCV",
    ],
  },
  {
    group: "DATA & VIZ",
    items: ["PANDAS", "NUMPY", "MATPLOTLIB", "POWER BI", "ARCGIS 10.8"],
  },
  {
    group: "TOOLS & PLATFORMS",
    items: ["GIT", "FASTAPI", "FIGMA", "ADOBE SUITE", "REACT NATIVE"],
  },
];

export const experience = [
  {
    date: "JUL 2025 – PRESENT",
    role: "Machine Learning Intern",
    company: "CSIR – North East Institute of Science & Technology (NEIST)",
    location: "Jorhat, Assam",
    bullets: [
      "Land Use Land Cover (LULC) study of Majuli District, Assam under Dr. V. M. Tiwari (Director) and Dr. Hridoy Jyoti Mahanta (Scientist).",
      "Built a Landsat-based dataset (2000–2025) to analyze land use and land cover change across Majuli Island using ArcGIS 10.8.",
    ],
  },
  {
    date: "AUG 2023 – MAR 2024",
    role: "Data Science & AI Intern",
    company: "Cranes Varsity Pvt. Ltd.",
    location: "Bengaluru, Karnataka",
    bullets: [
      "Completed modules on RDBMS, Python fundamentals, advanced Python, data science, and artificial intelligence.",
      "Analyzed real-world datasets (infant mortality rate, obesity, etc.) and built a plagiarism detection tool as a minor project.",
    ],
  },
  {
    date: "JUL – SEP 2022",
    role: "Machine Learning Intern",
    company: "Acmegrade",
    location: "Remote",
    bullets: [
      "Studied data analysis and ML algorithms including Random Forest, KNN, SVM, and Regression.",
      "Built a cancer prediction system and a movie recommendation system using Random Forest and SVM.",
    ],
  },
];

export const papers = [
  {
    venue: "ICCCNT 2025 · PUBLISHED",
    title:
      "Hybrid Attention-Based Sequence Models for Abusive Language Detection in Hindi",
    desc: "Scalable AI system using BiLSTM + Multi-Head Attention and Transformer-Enhanced BiLSTM — outperformed baselines on accuracy and F1 across 41,831 tweets.",
    id: "PAPER 01",
    status: "PEER-REVIEWED",
  },
  {
    venue: "VIKSIT BHARAT@2047 · 2025",
    title:
      "A Dual-Model Approach for Diagnosing Diabetes Types and Assessing Diabetic Retinopathy Severity",
    desc: "Integrated ML + ResNet-18 pipeline for clinical diabetes prediction and fundus image grading presented at a national conference.",
    id: "PAPER 02",
    status: "PEER-REVIEWED",
  },
  {
    venue: "WORKING PAPER",
    title:
      "Deep Ensemble Learning for Stock Market Forecasting with Risk-Tolerant Investment Strategies",
    desc: "LSTM · BiLSTM · TCN with sentiment analysis, technical indicators, and macroeconomic factors on NASDAQ data.",
    id: "PAPER 03",
    status: "PEER-REVIEWED",
  },
];

export const projects = [
  {
    id: "PROJ_01",
    icon: "⚡",
    featured: true,
    name: "GenScene – Neural-Symbolic Scene Understanding",
    desc: "Unified framework integrating Mask R-CNN, BLIP, and CLIP for instance segmentation, image captioning, zero-shot relational reasoning, and scene graph generation. Extended with English-to-Assamese multilingual output.",
    tags: ["PYTORCH", "MASK R-CNN", "BLIP", "CLIP", "NETWORKX"],
    bg: "linear-gradient(135deg,#0a0a2e,#1a1a4e)",
    emoji: "🧠",
  },
  {
    id: "PROJ_02",
    icon: "📈",
    featured: false,
    name: "Stock Market Forecasting & Advisory System",
    desc: "LSTM, BiLSTM, and TCN models with technical indicators, news sentiment, and macro factors. Risk-tolerance-aware personalized investment recommendations.",
    tags: ["LSTM", "BILSTM", "TCN", "NLP"],
    bg: "linear-gradient(135deg,#0a1a0a,#0a2e1a)",
    emoji: "📈",
  },
  {
    id: "PROJ_03",
    icon: "⚡",
    featured: false,
    name: "Diabetes & Diabetic Retinopathy Dual-Model System",
    desc: "ResNet-18 for retinal fundus grading (5 severity levels) combined with Random Forest / CatBoost for clinical diabetes risk prediction. 78.9% accuracy.",
    tags: ["RESNET-18", "CATBOOST", "OPENCV"],
    bg: "linear-gradient(135deg,#1a0a0a,#2e1a0a)",
    emoji: "🏥",
  },
  {
    id: "PROJ_04",
    icon: "💬",
    featured: false,
    name: "Abusive Language Detection in Hindi",
    desc: "BiLSTM + Multi-Head Attention on 41,831 Hindi tweets. ~76% accuracy in a low-resource setting using Word2Vec and FastText embeddings.",
    tags: ["WORD2VEC", "FASTTEXT", "BILSTM", "TRANSFORMERS"],
    bg: "linear-gradient(135deg,#050520,#0d0d3d)",
    emoji: "🔤",
  },
  {
    id: "PROJ_05",
    icon: "🗺️",
    featured: false,
    name: "LULC Study – Majuli District, Assam",
    desc: "Remote sensing analysis of land use and land cover change across Majuli Island (2000–2025) using Landsat imagery and ArcGIS 10.8.",
    tags: ["ARCGIS", "REMOTE SENSING", "GIS"],
    bg: "linear-gradient(135deg,#0a0a0a,#1a1a1a)",
    emoji: "🛰️",
  },
  {
    id: "PROJ_06",
    icon: "❤️",
    featured: false,
    name: "AidSync – NGO & Homeless Connection App",
    desc: "BTech final project. React Native app connecting homeless individuals to NGOs with donation flows and complaint reporting.",
    tags: ["REACT NATIVE", "FIGMA"],
    bg: "linear-gradient(135deg,#1a0a1a,#2e0a2e)",
    emoji: "🤝",
  },
  {
    id: "PROJ_07",
    icon: "🎵",
    featured: false,
    name: "Music Scale Recommender System",
    github: "https://github.com/AnuragYadav12/Music-Recommendation-ML",
    desc: "Intelligent music recommendation system that analyzes audio files using chroma feature extraction and key-profile matching to suggest compatible scales.",
    tags: ["LIBROSA", "NUMPY", "AUDIO SIGNAL PROCESSING"],
    bg: "linear-gradient(135deg,#0a1a1a,#0a2e2e)",
    emoji: "🎵",
  },
  {
    id: "PROJ_08",
    icon: "📋",
    featured: false,
    name: "PlagCheck – Plagiarism Detection Tool",
    github: "https://github.com/AnuragYadav12/AI-Plagiarism-Checker",
    desc: "Plagiarism checker tool in Python using Tkinter and Difflib that examines and compares two text files by finding similarities between them.",
    tags: ["PYTHON", "TKINTER", "DIFFLIB"],
    bg: "linear-gradient(135deg,#1a1a0a,#2e2e0a)",
    emoji: "🔍",
  },
  {
    id: "PROJ_09",
    icon: "🎗️",
    featured: false,
    name: "Cancer Prediction System",
    github: "https://github.com/AnuragYadav12/Cancer-Prediction-ML",
    desc: "Analyzes clinical diagnostic features to classify tumors using Random Forest, SVM, and XGBoost with SMOTE-based class balancing and feature importance analysis.",
    tags: ["RANDOM FOREST", "SVM", "XGBOOST", "SCIKIT-LEARN"],
    bg: "linear-gradient(135deg,#1a0a0a,#3d0a0a)",
    emoji: "🎗️",
  },
];

export const education = [
  {
    years: "2024 – NOW",
    degree: "M.Tech – Computer Science & Engineering (AI & ML)",
    school: "DUIET, Dibrugarh University, Assam",
    details: "CGPA: 8.25 · Deep Neural Networks · NLP · Reinforcement Learning",
  },
  {
    years: "2020 – 2024",
    degree: "B.Tech – Computer Science & Engineering",
    school: "The Assam Kaziranga University, Jorhat",
    details: "CGPA: 8.08 · Machine Learning · Deep Learning · Data Mining",
  },
  {
    years: "2020",
    degree: "Class 12 – Science Stream",
    school: "Kendriya Vidyalaya Chabua, Dibrugarh",
    details: "81.6% · Physics · Chemistry · Mathematics · Computer Science",
  },
  {
    years: "2018",
    degree: "Class 10",
    school: "Hemalata Handiqui Memorial Institute, Jorhat",
    details: "90.8%",
  },
];

export const posts = [
  {
    id: "POST_01",
    read: "7m",
    title: "Forecasting NASDAQ With Humility",
    excerpt:
      "LSTM, BiLSTM, and TCN ensembles are great. Risk-tolerance-aware advice is what makes them useful.",
    tags: ["#TIME SERIES", "#FINANCE", "#ENSEMBLES"],
  },
  {
    id: "POST_02",
    read: "5m",
    title: "From Fundus Images to Clinical Decisions",
    excerpt:
      "Designing a dual-model pipeline that respects both clinicians and the data they trust.",
    tags: ["#COMPUTER VISION", "#HEALTHCARE", "#RESNET"],
  },
  {
    id: "POST_03",
    read: "6m",
    title: "Why Attention Still Wins in Low-Resource NLP",
    excerpt:
      "Notes from training BiLSTM + Multi-Head Attention on 41,831 Hindi tweets — what actually moved the F1.",
    tags: ["#NLP", "#ATTENTION", "#HINDI"],
  },
];

export const certifications = [
  "Data Structures and Algorithms (IBM)",
  "Python Bootcamp (Udemy)",
  "Full Stack Web Development (Udemy)",
  "Machine Learning Services with Watson Studio (IBM)",
  "Database Management System (IBM)",
  "SQL and Relational Databases 101 (IBM)",
  "Predictive Modelling with IBM SPSS Modeler",
  "Data Visualization with Python (IBM)",
];

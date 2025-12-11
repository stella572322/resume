import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'resume.lang';

const translations = {
  zh: {
    app: {
      controls: {
        theme: {
          eye: '護眼',
          normal: '一般',
        },
        lang: {
          zh: '中',
          en: 'EN',
        },
      },
    },

    introduce: {
      avatarAlt: '陳思潔 Stella',
      name: '陳思潔 Stella',
      subtitle: '3 年政府級大型 B2B 系統規劃經驗',
    },

    resume: {
      download: '下載履歷',
    },

    highlights: {
      competencies: {
        title: 'Core Competencies',
        items: {
          product: {
            label: '產品定義與規劃：',
            desc: '需求訪談、PRD 撰寫、User Journey、MVP 範疇界定、Roadmap 規劃。',
          },
          pm: {
            label: '專案管理與協作：',
            desc: '跨部門溝通 (Dev/Design/QA)、風險控管、需求優先級排序。',
          },
          system: {
            label: '系統邏輯分析：',
            desc: '複雜業務流程自動化、資訊架構 (IA) 設計、API 溝通邏輯。',
          },
          ux: {
            label: '使用者體驗優化：',
            desc: 'UI/UX 實作、易用性測試 (Maze)、建立企業級設計規範。',
          },
        },
      },
      skills: {
        title: 'Skills & Tools',
        items: {
          design: {
            label: '設計與原型：',
            desc: 'Figma (進階)、Xmind (邏輯梳理)、Miro (遠端協作)',
          },
          docs: {
            label: '文件與管理：',
            desc: 'PRD 撰寫、Notion (資料庫整理)、ERP 系統',
          },
          tech: {
            label: '技術認知：',
            desc: 'JavaScript、HTML/CSS',
          },
          soft: {
            label: '軟實力：',
            desc: '跨部門轉譯、衝突協調、高度法規邏輯化',
          },
        },
      },
    },

    competenciesSection: {
      title: 'Core Competencies',
      cards: {
        crossFunctional: {
          title: '跨職能團隊統籌',
          subtitle: 'Cross-Functional Leadership',
          desc: '管理 FE / BE / App 全開發團隊 (約 10+ 人)，統籌資源配置、技術決策與風險控管，成功推動多線專案如期交付。',
        },
        opsSystem: {
          title: '數位化營運體系',
          subtitle: 'Digital Operation System',
          desc: '擅長利用自動化工具 (n8n, API) 建置營運體系，將工時統計與績效追蹤自動化，降低 20% 管理行政工時，提升營運透明度與獲利能力。',
        },
        resilience: {
          title: '危機復原力',
          subtitle: 'Crisis Recovery & Resilience',
          desc: '具備百萬級專案「救火」經驗。擅長在客戶信心崩盤邊緣接手，透過重整優先級 (Prioritization) 與資源調度，於一週內穩定局勢。',
        },
        strategy: {
          title: '策略落地',
          subtitle: 'Strategic Alignment',
          desc: '將公司年度 OKR (淨利率/人效) 轉化為工程團隊執行指標，成功達成全年淨利率 10% 與降低 40% 加班時數的雙贏目標。',
        },
      },
    },

    work: {
      title: 'Professional Experience ｜ 工作經歷',
      exp1: {
        company: '日陞空間資訊股份公司',
        role: 'UI/UX Designer',
        date: '2023.03 – 至今',
        note: '負責 2 項政府大型 B2B 系統之產品，主導產品規劃、需求分析與介面設計。',
        bullets: {
          b1Label: '0-1 產品落地與獲獎：',
          b1Desc: '獨立主導 24 個系統模組，團隊專案曾榮獲第 21 屆金圖獎「應用系統獎」。',
          b2Label: '需求工程與規格定義：',
          b2Desc: '參與利害關係人會議，將抽象需求解構為 PRD 與 User Stories，達成 100% 準時交付率。',
          b3Label: '滿意度與成本優化：',
          b3Desc: '透過迭代優化，將使用者滿意度從 70% 提升至 93%，建立 UI 設計規範與模組化，縮短前期溝通時程 10-20%。',
          projectsLabel: '代表專案：',
        },
        projects: {
          p1: {
            title: '1. 直轄市級工程履約管理系統 (2021 - 2025)',
            bgLabel: '專案背景：',
            bgDesc: '規模涵蓋 89 個大型功能模組與跨平台 App 的企業級管理系統。',
            roleLabel: '擔任角色：',
            roleDesc: '產品規劃與需求分析',
            impactLabel: '具體貢獻：',
            impactDesc: '整合 5+ 個政府單位分散且衝突的需求，建立統一的系統邏輯架構；獨立產出 11 個功能模組的產品規格文件 (PRD) 與精稿。',
            resultLabel: '量化成果：',
            resultDesc: '系統穩定度與易用性獲得 80% 以上使用者滿意度回饋。',
          },
          p2: {
            title: '2. 城市基礎設施管理系統 (GIS-based) (2021 - 2025)',
            bgLabel: '專案背景：',
            bgDesc: '規模 5+ 年的持續營運專案，涉及複雜的地理資訊與業務邏輯。',
            roleLabel: '擔任角色：',
            roleDesc: '產品規劃與需求分析',
            impactLabel: '具體貢獻：',
            impactDesc: '將複雜的管線流程簡化，設計直觀的操作介面，降低第一線人員操作門檻；教育訓練與回饋滿意度從第一階段 70% 提升至 93%。',
            resultLabel: '量化成果：',
            resultDesc: '協助該系統榮獲第 21 屆金圖獎「應用系統獎」。',
          },
        },
      },
      exp2: {
        company: '職能重塑與專向進修',
        role: 'Professional Development',
        date: '2021.01 – 2022.12',
        bullets: {
          b1Label: 'UX 研究與驗證：',
          b1Desc: '使用親和圖、行為光譜、顧客旅程地圖進行使用者研究，並以 Maze 執行使用者行為數據分析。',
          b2Label: '原型與前端基礎：',
          b2Desc: '使用 Figma 製作高擬真互動原型，並學習 JavaScript、HTML/CSS 與 API 溝通規範，以提升與工程師溝通效率。',
        },
      },
      exp3: {
        company: '恩納德生技有限公司',
        role: '北區行政內勤',
        date: '2019.03 – 2020.06',
        bullets: {
          b1Label: '流程自動化：',
          b1Desc: '從 0 建立新產品服務流程 SOP，提升醫院端產品認證審查效率。',
          b2Label: '需求整合與客戶協調：',
          b2Desc: '擔任業務與客戶橋樑，透過引導式訪談定位痛點並優化合約與標案流程。',
          b3Label: '數據與供應鏈管理：',
          b3Desc: '使用 ERP 管理高單價庫存，負責財務報表並確保出貨與採購準確率。',
        },
      },
      exp4: {
        company: '國際教育交流協會駐華辦事處',
        role: '計畫專員',
        date: '2018.07 – 2019.01',
        bullets: {
          b1Label: '專案策劃與執行：',
          b1Desc: '負責海外計畫說明會與雇主見面會活動規劃，控管時程與執行進度。',
        },
      },
    },

    about: {
      title: 'Profile ｜ 專業摘要',
      p1: '具備 3 年以上政府級大型 B2B 系統產品規劃與設計經驗。擅長在複雜業務邏輯與多方利害關係人（Stakeholders）之間取得平衡，主導過 24+ 項系統功能模組，成功將設計思維轉化為可落地的產品規格。',
      p2: '核心優勢在於「需求解構」與「跨團隊轉譯」：能將模糊的政策與業務需求轉化為高可行性的 PRD 與系統架構，有效降低至少 20% 以上的溝通成本與開發返工率。目標將企業級系統轉型經驗，投入 B2B 或 SaaS 產品開發。',
    },

    contact: {
      title: 'CONTACT ME',
      body: '謝謝你的閱讀。\n目前正在找工作當中，如果有興趣的話請聯絡我、或單純說個嗨也可以喔 👋',
    },

    education: {
      title: 'Education',
      fuJen: {
        school: '輔仁大學',
        location: '新北市',
        degree: '學士 - 物理學系',
        date: 'Sep, 2014 – Jan, 2019',
      },
      lidemy: {
        school: 'Lidemy 鋰學院 - 程式導師計畫第四期',
        location: 'Online',
        degree: '培訓課程 - 前後端開發',
        date: 'Jun, 2020 – Dec, 2020',
      },
    },

    project: {
      title: 'Knowledge Sharing & Contributions',
      group1Title: '技術傳承與影響力',
      youtubeTitle: '經營「所以想知道」技術知識 YouTube 頻道',
      youtubeBadge: '2000+ 訂閱',
      youtubeDesc: '利用業餘時間製作教學影片，內容涵蓋「Vibe Coding 實作」、「技術名詞白話文」與「職場觀念」，熱門影片有近 3 萬觀看量。',
      speakerTitle: '代表公司擔任外部講師',
      speakerBadge: '2+ 場/年',
      speakerDesc: '主講網頁開發趨勢與職涯規劃等主題，協助推廣產業知識。',
      workshopTitle: '主導內部技術工作坊',
      workshopBadge: '4+ 場/年',
      workshopDesc: '主題包含「AI 技術應用」、「高流量搶購系統風險探討」、「專案初期架構建置」。',
    },

    sidebar: {
      coreTitle: 'Core Competencies',
      skillsTitle: 'Skills & Tools',
    },

    skill: {
      title: 'Skills & Tools ｜ 專業技能與工具',
      sectionDesign: '設計與原型',
      sectionTech: '技術認知',
      cards: {
        design: {
          title: '設計與原型',
          items: ['Figma (進階)', 'Xmind (邏輯梳理)', 'Miro (遠端協作)'],
        },
        docs: {
          title: '文件與管理',
          items: ['PRD 撰寫', 'Notion (資料庫整理)', 'ERP 系統'],
        },
        tech: {
          title: '技術認知',
          items: ['JavaScript', 'HTML / CSS', 'API 溝通規範'],
        },
        soft: {
          title: '軟實力',
          items: ['跨部門轉譯', '衝突協調', '法規邏輯化'],
        },
      },
    },
  },

  en: {
    app: {
      controls: {
        theme: {
          eye: 'Eye',
          normal: 'Normal',
        },
        lang: {
          zh: '中',
          en: 'EN',
        },
      },
    },

    introduce: {
      avatarAlt: 'Stella Chen',
      name: 'Stella Chen',
      subtitle: '3+ years of experience planning government-scale B2B systems',
    },

    resume: {
      download: 'Download Resume',
    },

    highlights: {
      competencies: {
        title: 'Core Competencies',
        items: {
          product: {
            label: 'Product Definition & Planning: ',
            desc: 'Requirement interviews, PRD writing, user journeys, MVP scoping, and roadmap planning.',
          },
          pm: {
            label: 'Project Management & Collaboration: ',
            desc: 'Cross-functional communication (Dev/Design/QA), risk management, and prioritization.',
          },
          system: {
            label: 'System & Logic Analysis: ',
            desc: 'Automation of complex workflows, information architecture (IA), and API communication logic.',
          },
          ux: {
            label: 'UX Optimization: ',
            desc: 'UI/UX implementation, usability testing (Maze), and building enterprise design standards.',
          },
        },
      },
      skills: {
        title: 'Skills & Tools',
        items: {
          design: {
            label: 'Design & Prototyping: ',
            desc: 'Figma (advanced), Xmind (structured thinking), Miro (remote collaboration)',
          },
          docs: {
            label: 'Docs & Management: ',
            desc: 'PRD writing, Notion (database organization), ERP systems',
          },
          tech: {
            label: 'Technical Literacy: ',
            desc: 'JavaScript, HTML/CSS',
          },
          soft: {
            label: 'Soft Skills: ',
            desc: 'Cross-team translation, conflict resolution, regulation-driven logic modeling',
          },
        },
      },
    },

    competenciesSection: {
      title: 'Core Competencies',
      cards: {
        crossFunctional: {
          title: 'Cross-functional Leadership',
          subtitle: 'Cross-Functional Leadership',
          desc: 'Led a full-stack team across FE/BE/App (~10+), coordinating resources, technical decisions, and risk management to deliver multiple parallel projects on schedule.',
        },
        opsSystem: {
          title: 'Digital Operations System',
          subtitle: 'Digital Operation System',
          desc: 'Built operations systems using automation (n8n, APIs), automating time tracking and performance monitoring to reduce administrative effort by 20% and improve operational transparency and profitability.',
        },
        resilience: {
          title: 'Crisis Recovery',
          subtitle: 'Crisis Recovery & Resilience',
          desc: 'Experienced in “firefighting” million-scale projects—stepping in when stakeholder confidence is at risk and stabilizing delivery within a week through prioritization and resource reallocation.',
        },
        strategy: {
          title: 'Strategy Execution',
          subtitle: 'Strategic Alignment',
          desc: 'Translated company OKRs (profit margin / productivity) into engineering execution metrics, achieving a 10% annual profit margin and reducing overtime by 40%.',
        },
      },
    },

    work: {
      title: 'Professional Experience',
      exp1: {
        company: '日陞空間資訊股份公司',
        role: 'UI/UX Designer',
        date: '2023.03 – Present',
        note: 'Owned two government-scale B2B products, leading product planning, requirements analysis, and UI design.',
        bullets: {
          b1Label: '0→1 delivery & awards: ',
          b1Desc: 'Led 24 system modules end-to-end; the project team won the 21st Golden Map Awards (Application System Award).',
          b2Label: 'Requirements & specification: ',
          b2Desc: 'Joined stakeholder sessions and decomposed abstract needs into PRDs and user stories, achieving 100% on-time delivery.',
          b3Label: 'Satisfaction & cost optimization: ',
          b3Desc: 'Improved user satisfaction from 70% to 93% through iterative enhancements; built UI standards and modular design, reducing early-phase communication time by 10–20%.',
          projectsLabel: 'Selected Projects: ',
        },
        projects: {
          p1: {
            title: '1. Municipal Engineering Contract Performance Management System (2021 - 2025)',
            bgLabel: 'Background: ',
            bgDesc: 'An enterprise management system spanning 89 major modules plus a cross-platform mobile app.',
            roleLabel: 'Role: ',
            roleDesc: 'Product planning & requirements analysis',
            impactLabel: 'Contribution: ',
            impactDesc: 'Unified conflicting requirements across 5+ government agencies into a coherent system logic; produced PRDs and detailed UI specs for 11 functional modules.',
            resultLabel: 'Outcome: ',
            resultDesc: 'System stability and usability received 80%+ user satisfaction feedback.',
          },
          p2: {
            title: '2. GIS-based Urban Infrastructure Management System (2021 - 2025)',
            bgLabel: 'Background: ',
            bgDesc: 'A long-running (5+ years) operations project with complex geo-data and business logic.',
            roleLabel: 'Role: ',
            roleDesc: 'Product planning & requirements analysis',
            impactLabel: 'Contribution: ',
            impactDesc: 'Simplified complex pipeline workflows and designed intuitive UIs to lower the learning curve for frontline staff; training feedback satisfaction increased from 70% to 93%.',
            resultLabel: 'Outcome: ',
            resultDesc: 'Helped the project win the 21st Golden Map Awards (Application System Award).',
          },
        },
      },
      exp2: {
        company: 'Career Transition & Professional Development',
        role: 'Professional Development',
        date: '2021.01 – 2022.12',
        bullets: {
          b1Label: 'UX research & validation: ',
          b1Desc: 'Conducted user research using affinity mapping, behavior spectrums, and customer journey maps, and analyzed user behavior data with Maze.',
          b2Label: 'Prototyping & frontend fundamentals: ',
          b2Desc: 'Built high-fidelity interactive prototypes in Figma and learned JavaScript, HTML/CSS, and API collaboration practices to improve engineering communication.',
        },
      },
      exp3: {
        company: '恩納德生技有限公司',
        role: 'Administrative Coordinator (North Region)',
        date: '2019.03 – 2020.06',
        bullets: {
          b1Label: 'Process automation: ',
          b1Desc: 'Built SOPs for new product/service processes from scratch, improving hospital-side certification review efficiency.',
          b2Label: 'Needs synthesis & client coordination: ',
          b2Desc: 'Served as a bridge between sales and clients, identifying pain points through guided interviews and optimizing contracts and tender processes.',
          b3Label: 'Data & supply chain management: ',
          b3Desc: 'Managed high-value inventory in an ERP system, handled financial reports, and ensured shipping and purchasing accuracy.',
        },
      },
      exp4: {
        company: 'International Education Exchange Association (China Office)',
        role: 'Program Officer',
        date: '2018.07 – 2019.01',
        bullets: {
          b1Label: 'Project planning & execution: ',
          b1Desc: 'Planned overseas program briefings and employer meetups, managing timelines and execution progress.',
        },
      },
    },

    about: {
      title: 'Profile',
      p1: 'Over 3 years of experience planning and designing government-scale B2B systems. Skilled at balancing complex business logic and multi-stakeholder alignment, and led 24+ system modules to turn design thinking into executable product specs.',
      p2: 'Core strengths are requirement decomposition and cross-team translation—turning ambiguous policy/business needs into actionable PRDs and system structures, reducing communication and rework costs by 20%+. Seeking to bring enterprise transformation experience into B2B or SaaS product development.',
    },

    contact: {
      title: 'CONTACT ME',
      body: 'Thanks for reading.\nI\'m currently open to opportunities—feel free to reach out, or just say hi 👋',
    },

    education: {
      title: 'Education',
      fuJen: {
        school: 'Fu Jen Catholic University',
        location: 'New Taipei City',
        degree: 'B.S. in Physics',
        date: 'Sep, 2014 – Jan, 2019',
      },
      lidemy: {
        school: 'Lidemy - Mentorship Program (Cohort 4)',
        location: 'Online',
        degree: 'Training Program - Full-stack Development',
        date: 'Jun, 2020 – Dec, 2020',
      },
    },

    project: {
      title: 'Knowledge Sharing & Contributions',
      group1Title: 'Knowledge Transfer & Influence',
      youtubeTitle: 'Run “So We Wanna Know” technical YouTube channel',
      youtubeBadge: '2000+ subscribers',
      youtubeDesc: 'Created educational videos in spare time, covering hands-on “Vibe Coding”, plain-English explanations of technical terms, and career insights. Popular videos reached nearly 30k views.',
      speakerTitle: 'External speaker representing the company',
      speakerBadge: '2+ talks/year',
      speakerDesc: 'Presented on web development trends and career planning, helping spread industry knowledge.',
      workshopTitle: 'Led internal technical workshops',
      workshopBadge: '4+ workshops/year',
      workshopDesc: 'Topics included AI applications, risk analysis for high-traffic flash-sale systems, and early-stage project architecture.',
    },

    sidebar: {
      coreTitle: 'Core Competencies',
      skillsTitle: 'Skills & Tools',
    },

    skill: {
      title: 'Skills & Tools',
      sectionDesign: 'Design & Prototyping',
      sectionTech: 'Technical Literacy',
      cards: {
        design: {
          title: 'Design & Prototyping',
          items: ['Figma (advanced)', 'Xmind (structured thinking)', 'Miro (remote collaboration)'],
        },
        docs: {
          title: 'Docs & Management',
          items: ['PRD writing', 'Notion (database organization)', 'ERP systems'],
        },
        tech: {
          title: 'Technical Literacy',
          items: ['JavaScript', 'HTML / CSS', 'API collaboration practices'],
        },
        soft: {
          title: 'Soft Skills',
          items: ['Cross-team translation', 'Conflict resolution', 'Regulation-driven logic modeling'],
        },
      },
    },
  },
};

function getByPath(objectValue, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), objectValue);
}

function resolveInitialLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'zh' || stored === 'en') return stored;
  } catch (e) {
    // ignore
  }

  if (typeof navigator !== 'undefined') {
    const navLang = (navigator.language || '').toLowerCase();
    if (navLang.startsWith('zh')) return 'zh';
  }

  return 'en';
}

const I18nContext = createContext({
  lang: 'zh',
  setLang: () => {},
  toggleLang: () => {},
  t: (key) => key,
});

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(resolveInitialLang);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // ignore
    }

    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
    }
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'zh' ? 'en' : 'zh'));
  }, []);

  const t = useCallback(
    (key) => {
      const value = getByPath(translations[lang], key);
      if (value == null) {
        if (process.env.NODE_ENV !== 'production') {
          // eslint-disable-next-line no-console
          console.warn(`[i18n] Missing key: ${key} (lang=${lang})`);
        }
        return key;
      }
      return value;
    },
    [lang]
  );

  const contextValue = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang,
      t,
    }),
    [lang, setLang, toggleLang, t]
  );

  return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}

export { I18nContext };

export function createAgentFAQSchema(agent) {
  const faqByAgent = {
    "tax-agent": [
      {
        question: "How can I file my ITR quickly?",
        answer:
          "Keep your PAN, Aadhaar, Form 16, bank details and other applicable income documents ready, then use the appropriate income-tax return form for your situation."
      },
      {
        question: "What documents do I need for ITR filing?",
        answer:
          "Common documents include PAN, Aadhaar, Form 16, bank statements and relevant investment or deduction documents."
      },
      {
        question: "Can KuberAI help me understand tax filing?",
        answer:
          "KuberAI Tax Agent provides general guidance about income-tax filing, documents, deductions and common tax-related questions."
      },
      {
        question: "What is an Income Tax Return?",
        answer:
          "An Income Tax Return is a statement submitted to the Income Tax Department containing information about income, deductions and taxes for a financial year."
      }
    ],

    "mf-advisor": [
      {
        question: "What is a mutual fund?",
        answer:
          "A mutual fund pools money from multiple investors and invests it in a portfolio of assets according to the fund's investment objective."
      },
      {
        question: "How do SIPs work?",
        answer:
          "A Systematic Investment Plan allows an investor to invest a fixed amount into a mutual fund at regular intervals."
      },
      {
        question: "What should I consider before investing in a mutual fund?",
        answer:
          "Consider the investment objective, risk level, time horizon, costs and the suitability of the fund for your financial goals."
      },
      {
        question: "Can KuberAI explain mutual funds?",
        answer:
          "KuberAI MF Advisor can provide general educational information about mutual funds, SIPs, risk and investment concepts."
      }
    ],

    "equity-insights": [
      {
        question: "What is equity investing?",
        answer:
          "Equity investing involves buying shares representing ownership in a company."
      },
      {
        question: "What should I check before investing in a stock?",
        answer:
          "Investors commonly review business fundamentals, financial performance, valuation, competitive position and risk."
      },
      {
        question: "What are stock market insights?",
        answer:
          "Stock market insights are observations about companies, sectors, market trends and factors that may affect equity investments."
      },
      {
        question: "Can KuberAI help explain stocks?",
        answer:
          "KuberAI Equity Insights provides general educational information about stocks, companies, valuation and market concepts."
      }
    ]
  };

  const faqs =
    faqByAgent[agent.slug] ||
    faqByAgent["tax-agent"];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "KuberAI Tax Filing Helpdesk — Noida",
    description:
      "KuberAI financial assistance helpdesk for tax filing guidance in Noida.",
    areaServed: {
      "@type": "City",
      name: "Noida"
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "KuberAI Helpdesk, Sector 62",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201309",
      addressCountry: "IN"
    },
    sameAs: [
      "https://kuberai.in"
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        opens: "09:00",
        closes: "18:00"
      }
    ]
  };
}
export const agents = [
  {
    id: "tax-agent",
    slug: "tax-agent",
    name: "Tax Agent",
    type: "tax",
    pitch: "Get simple and practical help with your taxes and ITR filing.",
    tags: ["Tax", "ITR", "Income Tax"],
    theme: "tax",
    greeting: "Hi! I’m your Tax Agent. How can I help you with your tax-related questions?",
    suggested: [
      "What is ITR and who should file it?",
      "What documents do I need for ITR filing?"
    ],
    replies: [
      "ITR (Income Tax Return) is a form you file with the Income Tax Department to report your income, deductions, and taxes paid.",
      "For ITR filing, you typically need your PAN card, Form 16 (for salaried individuals), bank statements, investment proofs (80C, 80D, etc.), and details of any other income.",
      "I can explain common tax concepts and filing terminology in simple language."
    ]
  },
  {
    id: "mf-advisor",
    slug: "mf-advisor",
    name: "MF Advisor",
    type: "mf",
    pitch: "Understand mutual funds, SIPs, and investment basics.",
    tags: ["Mutual Funds", "SIP", "Investing"],
    theme: "mf",
    greeting: "Hi! I’m your MF Advisor. What would you like to know about mutual funds?",
    suggested: ["What is a SIP?", "How do mutual funds work?"],
    replies: [
      "A SIP lets you invest a fixed amount into a mutual fund at regular intervals.",
      "Mutual funds pool money from investors and invest it according to the fund’s stated strategy.",
      "I can help explain SIPs, diversification, fund terminology and investing basics."
    ]
  },
  {
    id: "equity-insights",
    slug: "equity-insights",
    name: "Equity Insights",
    type: "equity",
    pitch: "Get easy-to-understand insights into stocks and equity markets.",
    tags: ["Stocks", "Equity", "Markets"],
    theme: "equity",
    greeting: "Hi! I’m Equity Insights. What would you like to understand about the equity market?",
    suggested: ["What is a stock?", "What does diversification mean?"],
    replies: [
      "A stock represents ownership in a company, and its market price can change as expectations, demand and company performance change.",
      "Diversification means spreading investments across different assets or companies instead of concentrating everything in one place.",
      "I can explain equity concepts, market terminology and basic investing principles."
    ]
  }
];
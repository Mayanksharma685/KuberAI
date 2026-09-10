function getTaxResponse(message) {
  const text = message.toLowerCase();

  if (text.includes("itr")) {
    return "ITR stands for Income Tax Return. It is a form used to report your income, deductions and taxes paid to the Income Tax Department.";
  }

  if (text.includes("document") || text.includes("documents")) {
    return `For ITR filing, you may commonly need:
• PAN card
• Form 16
• Bank statements
• Investment proofs
• Details of other income

The exact documents depend on your income sources.`;
  }

  if (text.includes("80c") || text.includes("deduction")) {
    return "Section 80C can provide deductions for eligible investments and expenses, subject to the applicable tax rules and limits.";
  }

  if (text.includes("tax")) {
    return "I can help explain basic tax concepts, ITR filing, deductions and commonly required documents.";
  }

  return "I can help you understand ITR filing, tax deductions, documents required and basic income-tax concepts.";
}

function getMfResponse(message) {
  const text = message.toLowerCase();

  if (text.includes("sip")) {
    return "A SIP, or Systematic Investment Plan, allows you to invest a fixed amount into a mutual fund at regular intervals.";
  }

  if (text.includes("mutual fund")) {
    return "A mutual fund pools money from multiple investors and invests it across assets according to the fund's investment objective.";
  }

  if (text.includes("risk")) {
    return "Mutual fund risk depends on the underlying assets. Equity funds generally have higher market risk than debt-oriented funds.";
  }

  if (text.includes("invest")) {
    return "Before investing, consider your goal, time horizon, risk tolerance and the type of mutual fund that matches those factors.";
  }

  return "I can help explain mutual funds, SIPs, risk, investment basics and how different fund categories work.";
}

function getEquityResponse(message) {
  const text = message.toLowerCase();

  if (text.includes("stock")) {
    return "A stock represents ownership in a company. Its price can change based on company performance, market conditions, investor expectations and other factors.";
  }

  if (text.includes("market")) {
    return "Equity markets are places where shares and related securities are bought and sold. Prices can move because of company, economic and global developments.";
  }

  if (text.includes("pe") || text.includes("valuation")) {
    return "The P/E ratio compares a company's share price with its earnings per share. It is one valuation metric and should not be considered in isolation.";
  }

  if (text.includes("invest")) {
    return "When evaluating an equity investment, consider the company's fundamentals, valuation, risks, growth prospects and your investment time horizon.";
  }

  return "I can explain stocks, equity markets, valuation concepts and basic investing terminology in simple language.";
}

function generateReply(agentId, message) {
  switch (agentId) {
    case "tax-agent":
      return getTaxResponse(message);

    case "mf-advisor":
      return getMfResponse(message);

    case "equity-insights":
      return getEquityResponse(message);

    default:
      return "I’m sorry, but I could not find the requested financial agent.";
  }
}

export { generateReply };
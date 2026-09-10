import { useEffect } from "react";
import { createAgentFAQSchema } from "../utils/schema.js";

export default function AgentSEO({ agent }) {
  useEffect(() => {
    if (!agent) return;

    const faqSchema =
      createAgentFAQSchema(agent);

    document.title =
      `${agent.name} | KuberAI`;

    const description =
      agent.pitch ||
      `Chat with ${agent.name} on KuberAI.`;

    setMeta(
      "description",
      description
    );

    setMeta(
      "og:title",
      `${agent.name} | KuberAI`
    );

    setMeta(
      "og:description",
      description
    );

    setMeta(
      "og:type",
      "website"
    );

    setMeta(
      "twitter:card",
      "summary"
    );

    setMeta(
      "twitter:title",
      `${agent.name} | KuberAI`
    );

    setMeta(
      "twitter:description",
      description
    );

    const canonical =
      `${window.location.origin}/agents/${agent.slug}`;

    let canonicalTag =
      document.querySelector(
        'link[rel="canonical"]'
      );

    if (!canonicalTag) {
      canonicalTag =
        document.createElement("link");

      canonicalTag.rel = "canonical";

      document.head.appendChild(
        canonicalTag
      );
    }

    canonicalTag.href = canonical;

    let schemaTag =
      document.getElementById(
        "kuberai-agent-faq-schema"
      );

    if (!schemaTag) {
      schemaTag =
        document.createElement("script");

      schemaTag.id =
        "kuberai-agent-faq-schema";

      schemaTag.type =
        "application/ld+json";

      document.head.appendChild(
        schemaTag
      );
    }

    schemaTag.textContent =
      JSON.stringify(faqSchema);
  }, [agent]);

  return null;
}

function setMeta(name, content) {
  let tag =
    document.querySelector(
      `meta[name="${name}"]`
    );

  if (!tag) {
    tag =
      document.createElement("meta");

    tag.name = name;

    document.head.appendChild(tag);
  }

  tag.content = content;
}

export function setPropertyMeta(
  property,
  content
) {
  let tag =
    document.querySelector(
      `meta[property="${property}"]`
    );

  if (!tag) {
    tag =
      document.createElement("meta");

    tag.setAttribute(
      "property",
      property
    );

    document.head.appendChild(tag);
  }

  tag.content = content;
}
import { useEffect } from "react";
import {
  createLocalBusinessSchema
} from "../utils/schema.js";

export default function NoidaSEO() {
  useEffect(() => {
    document.title =
      "Tax Filing Helpdesk — Noida | KuberAI";

    setMeta(
      "description",
      "Get tax filing guidance from the KuberAI Tax Agent through the Noida helpdesk."
    );

    setMeta(
      "og:title",
      "Tax Filing Helpdesk — Noida | KuberAI"
    );

    setMeta(
      "og:description",
      "Tax filing guidance and financial assistance through the KuberAI Noida helpdesk."
    );

    setMeta(
      "og:type",
      "website"
    );

    setMeta(
      "twitter:card",
      "summary"
    );

    const canonical =
      `${window.location.origin}/noida`;

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

    const schema =
      createLocalBusinessSchema();

    let schemaTag =
      document.getElementById(
        "kuberai-noida-schema"
      );

    if (!schemaTag) {
      schemaTag =
        document.createElement("script");

      schemaTag.id =
        "kuberai-noida-schema";

      schemaTag.type =
        "application/ld+json";

      document.head.appendChild(
        schemaTag
      );
    }

    schemaTag.textContent =
      JSON.stringify(schema);
  }, []);

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
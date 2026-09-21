"use client";

import Image from "next/image";
import { useState } from "react";
import { industries } from "@/content/product-content";

export function IndustryCards() {
  const [expanded, setExpanded] = useState<string[]>([]);

  const toggleCard = (id: string) => {
    setExpanded((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  return (
    <div className="industry-grid">
      {industries.map((industry) => {
        const isExpanded = expanded.includes(industry.id);
        const detailsId = `${industry.id}-details`;

        return (
          <article
            className="industry-card"
            data-detail-visible={isExpanded}
            key={industry.id}
          >
            <div className="industry-card__media">
              <Image
                className="industry-card__image"
                src={industry.image}
                alt={industry.imageAlt}
                width={industry.imageWidth}
                height={212}
                sizes="(min-width: 1101px) 22vw, (min-width: 768px) 44vw, calc(100vw - 40px)"
              />
            </div>

            <div className="industry-card__body">
              <span className="industry-card__number" aria-hidden="true">
                {industry.number}
              </span>
              <h3>{industry.title}</h3>
              <span className="industry-card__divider" aria-hidden="true" />
              <p className="industry-card__preview">
                {industry.preview.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>

              <div
                className="industry-card__details"
                id={detailsId}
                aria-hidden={!isExpanded}
              >
                <dl>
                  {industry.details.map((detail) => (
                    <div key={detail.label}>
                      <dt>{detail.label}</dt>
                      <dd>{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <button
                className="industry-card__toggle"
                type="button"
                aria-expanded={isExpanded}
                aria-controls={detailsId}
                onClick={() => toggleCard(industry.id)}
              >
                <span>{isExpanded ? "상세 닫기" : "상세 보기"}</span>
                <span aria-hidden="true">{isExpanded ? "−" : "+"}</span>
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

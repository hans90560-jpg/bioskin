"use client";

import Image from "next/image";
import { siteAssetPath } from "@/lib/site-asset-path";
import { useState } from "react";
import { formulaShowcaseGroups } from "@/content/product-content";

export function FormulaShowcase() {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = "confirmed-formula-ingredients";
  const confirmedGroups = formulaShowcaseGroups.filter(
    (group) => "ingredients" in group,
  );

  return (
    <div className="formula-showcase">
      <div className="formula-visual-grid">
        {formulaShowcaseGroups.map((group, index) => (
          <article className="formula-visual" data-reveal-item key={group.id}>
            <div className="formula-visual__media">
              <Image
                className="formula-visual__image"
                src={siteAssetPath(group.image)}
                alt={group.imageAlt}
                width={1448}
                height={1086}
                sizes="(min-width: 1100px) 28vw, (min-width: 700px) 44vw, calc(100vw - 40px)"
              />
              <span className="formula-visual__index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="formula-visual__copy">
              <h3>{group.name}</h3>
              <p>{group.summary}</p>
            </div>
          </article>
        ))}
      </div>

      <div
        className="formula-details"
        data-open={isExpanded}
        data-reveal-item
      >
        <button
          className="formula-details__toggle"
          type="button"
          aria-expanded={isExpanded}
          aria-controls={detailsId}
          onClick={() => setIsExpanded((current) => !current)}
        >
          <span>
            <small>INGREDIENT DETAILS</small>
            <strong>
              {isExpanded ? "현재 확인된 성분 닫기" : "현재 확인된 성분 보기"}
            </strong>
          </span>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        <div
          className="formula-details__content"
          id={detailsId}
          aria-hidden={!isExpanded}
        >
          <div className="formula-details__overflow">
            <div className="formula-details__grid">
              {confirmedGroups.map((group, index) => (
                <section className="formula-detail-group" key={group.id}>
                  <div className="formula-detail-group__heading">
                    <span aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h4>{group.detailName}</h4>
                  </div>
                  <p className="formula-detail-group__function">
                    {group.function}
                  </p>
                  <ul>
                    {group.ingredients.map((ingredient) => (
                      <li key={ingredient}>{ingredient}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
            <p className="formula-details__note">
              기능군별 참고 성분이며, 전체 전성분 목록은 아닙니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

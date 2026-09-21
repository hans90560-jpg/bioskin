function HipeGraphic() {
  return (
    <svg className="principle-stage__graphic" viewBox="0 0 180 150" aria-hidden="true">
      <g className="pores">
        <circle cx="55" cy="48" r="24" />
        <circle cx="103" cy="39" r="18" />
        <circle cx="128" cy="74" r="28" />
        <circle cx="77" cy="94" r="31" />
        <circle cx="123" cy="118" r="15" />
        <circle cx="39" cy="108" r="16" />
      </g>
    </svg>
  );
}

function SpikeGraphic({ colorShift = false }: Readonly<{ colorShift?: boolean }>) {
  return (
    <svg className="principle-stage__graphic" viewBox="0 0 180 150" aria-hidden="true">
      <defs>
        <radialGradient id={colorShift ? "sphere-shift" : "sphere-blue"}>
          <stop offset="0" stopColor={colorShift ? "#f4ddeb" : "#ffffff"} />
          <stop offset="1" stopColor={colorShift ? "#ab8ac9" : "#91d6eb"} />
        </radialGradient>
      </defs>
      <g className="spikes" transform="translate(90 75)">
        {Array.from({ length: 16 }, (_, index) => (
          <line
            key={index}
            x1="0"
            y1="-49"
            x2="0"
            y2="-65"
            transform={`rotate(${index * 22.5})`}
          />
        ))}
        <circle
          r="48"
          fill={`url(#${colorShift ? "sphere-shift" : "sphere-blue"})`}
        />
        <circle r="31" className="spikes__inner" />
      </g>
    </svg>
  );
}

function FlowArrow() {
  return (
    <div className="principle-flow__arrow" aria-hidden="true">
      <span />
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="m8 5 7 7-7 7" />
      </svg>
    </div>
  );
}

export function TechnicalPrinciple() {
  return (
    <div className="principle-flow">
      <article className="principle-stage">
        <span className="principle-stage__number">01</span>
        <HipeGraphic />
        <div className="principle-stage__copy">
          <h3>HIPE</h3>
          <p className="principle-stage__term">High Internal Phase Emulsion</p>
          <p className="principle-stage__description">다공성 에멀전 기반 구조</p>
        </div>
      </article>

      <FlowArrow />

      <article className="principle-stage">
        <span className="principle-stage__number">02</span>
        <SpikeGraphic />
        <div className="principle-stage__copy">
          <h3>Spike-emulsion</h3>
          <p className="principle-stage__description">
            Spike-like self-assemblies 기반 기능성 구조
          </p>
        </div>
      </article>

      <FlowArrow />

      <article className="principle-stage principle-stage--color">
        <span className="principle-stage__number">03</span>
        <SpikeGraphic colorShift />
        <div className="principle-stage__copy">
          <h3>카멜레온 구조</h3>
          <p className="principle-stage__description">
            외부 자극에 따른 색 변화 기반 시각적 인지 기능
          </p>
        </div>
      </article>
    </div>
  );
}

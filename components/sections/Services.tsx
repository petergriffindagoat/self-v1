import RevealSection from "@/components/ui/RevealSection";

export interface ServiceItem {
  num: string;
  title: string;
  desc: string;
  tags: string[];
}

export interface ServicesProps {
  label?: string;
  headline?: React.ReactNode;
  intro?: string;
  items?: ServiceItem[];
}

const defaultItems: ServiceItem[] = [
  {
    num: "01",
    title: "Local SEO & Map Pack",
    desc: "We optimize your Google Business Profile, build local citations, and structure your site so you show up in the three-pack when someone searches for storage in your area.",
    tags: ["GBP", "Citations", "NAP"],
  },
  {
    num: "02",
    title: "Location Landing Pages",
    desc: "Dedicated pages for every city, neighborhood, and unit type you serve. Rich with local context, schema markup, and copy written to convert searchers into tenants.",
    tags: ["Schema", "CRO", "Geo pages"],
  },
  {
    num: "03",
    title: "Technical SEO & Site Speed",
    desc: "Core Web Vitals, crawl budget, indexation, mobile performance. We fix the foundations so Google can actually understand and rank your site.",
    tags: ["CWV", "Audit", "Speed"],
  },
  {
    num: "04",
    title: "Review & Reputation Strategy",
    desc: "Automated review requests, response templates, and escalation flows. Volume and recency of reviews are among the top local ranking signals.",
    tags: ["Reviews", "Reputation"],
  },
  {
    num: "05",
    title: "Content That Captures Intent",
    desc: "Unit size guides, move-in checklists, climate control explainers. Content that answers the questions real tenants ask before they rent.",
    tags: ["Blog", "Guides", "Intent"],
  },
  {
    num: "06",
    title: "Reporting You Can Actually Read",
    desc: "Monthly plain-English reports showing rankings, traffic, calls, form fills, and booked move-ins. No dashboard access required. We explain what moved and why.",
    tags: ["GA4", "Monthly"],
  },
];

export default function Services({
  label = "What we do",
  headline = (
    <>
      Built specifically for <em>self-storage operators</em>. Nothing generic.
    </>
  ),
  intro = "Every service is tuned for a single goal: more qualified move-ins from local search. We work only with storage, which means every strategy is informed by patterns we see across the portfolio.",
  items = defaultItems,
}: ServicesProps) {
  return (
    <RevealSection className="services" id="services">
      <div className="container">
        <div className="section-label">{label}</div>
        <h2 className="section-title">{headline}</h2>
        <p className="section-intro">{intro}</p>

        <div className="services-list">
          {items.map((item) => (
            <div key={item.num} className="service-row">
              <div className="service-num">{item.num}</div>
              <div>
                <h3>{item.title}</h3>
              </div>
              <div>
                <p>{item.desc}</p>
              </div>
              <div className="service-tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="service-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

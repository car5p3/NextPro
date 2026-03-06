import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title:
    "WebFoundersUSA - The Biggest Social Media Marketing Mistakes in 2026",
};

type ImageData = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const pageContent = {
  hero: {
    badge: "Industry Insight 2026",
    title:
      "The Biggest Social Media Marketing Mistakes in 2026",
    subtitle: "How to Avoid Costly Errors and Start Getting Real Results",
    image: {
      src: "/blogs/blog 5.webp",
      alt: "The Biggest Social Media Marketing Mistakes in 2026",
      width: 1024,
      height: 600,
    },
  },
  intro: {
    lead: "Social media marketing in 2026 is not the same as it was two years ago.",
    paragraphs: [
      "The platforms changed. The audience changed. The competition grew fast.",
      "But many businesses are still using old methods. At Web Founders USA, we speak with business owners every week. Small shops. B2B brands. Healthcare providers. E-commerce stores. Most of them are active online. But many are not getting real results.",
    ],
    highlightCards: [
      { title: "They", text: "Are Posting" },
      { title: "They", text: "Are Boosting Ads" },
      { title: "They", text: "Are Hiring Freelancers" },
    ],
    signalsTitle: "But leads? Sales? Growth? Not really.",
    signals: [
      "No strategy",
      "Wrong audience",
      "Weak CTAs",
      "No conversion plan",
      "Ignoring video",
      "Tracking wrong metrics",
      "Doing everything in-house",
    ],
    linkLine: {
      before:
        "Let's talk honestly about the biggest mistakes businesses are making in social media marketing this year and how you can avoid them. This is why many businesses are now turning to",
      href: "/service/social-media-marketing",
      anchor: "professional social media marketing services",
      after: "and expert help instead of guessing what works.",
    },
    quote:
      "If your current approach feels confusing or slow, it might be time to rethink your strategy.",
  },
  sections: {
    reasons: {
      title: "Running Social Media Without a Clear Growth Plan",
      intro:
        "Posting randomly is not a strategy.",
      items: [
        "No goals",
        "No target numbers",
        "No plan for growth",
        "No clear targeting",
        "No success measurement",
        "Random posting",
        "No roadmap",
      ],
      callout: {
        title: "The Reality Check",
        lines: [
          "Many businesses say they are doing social media marketing, but when we ask about their social media marketing strategy, there is silence.",
          "This happens a lot in social media marketing for small businesses. The owners are busy. They post when they remember. They boost a post sometimes. That's it.",
          "Social media for small business marketing needs structure. Even a simple plan is better than none. If you do not have a roadmap, you will waste time and money.",
        ],
      },
    },
    aiAndTechnical: {
      left: {
        title: "Posting Content That Attracts Likes but Not Leads",
        paragraphs: [
          "Likes feel good. Comments feel even better. But likes do not pay bills.",
          "In 2026, attention is easy to get. Conversion is hard.",
        ],
        bullets: [
          "Funny memes",
          "Trendy reels",
          "Viral audio",
          "Motivational quotes",
        ],
        followUp:
          "These bring engagement. But they do not bring buyers. Good social media & marketing is not about entertainment only. It is about positioning.",
        focusTitle:
          "Ask yourself:",
        focusItems: [
          "Does this post attract my ideal customer?",
          "Does it show my expertise?",
          "Does it move people closer to buying?",
        ],
        outro: "A strong social media marketer knows the difference between content for reach and content for revenue. You need both. But you need balance.",
      },
      right: {
        title: "Ignoring Your Ideal Customer While Chasing Everyone",
        intro:
          "Trying to talk to everyone is the fastest way to confuse your brand.",
        issuesTitle: "This mistake is very common in:",
        issues: [
          "B2B social media marketing",
          "Healthcare social media marketing",
        ],
        auditTitle:
          "For example:",
        auditItems: [
          "A B2B company posts like a lifestyle brand",
          "A medical clinic posts like a meme page",
          "It does not match",
        ],
        outro:
          "In 2026, customers want relevance. They want content that feels made for them. Define clearly: Age, Industry, Income level, Pain points, Buying behavior. When your message becomes specific, your results improve. This is why working with a social media marketing consultant can help. They look at your audience first — not just the trends.",
      },
    //   image: {
    //     src: "/blogs/blog-5-3.webp",
    //     alt: "Ignoring Your Ideal Customer While Chasing Everyone",
    //     width: 1024,
    //     height: 600,
    //   },
    },
    content: {
      title: "Missing Out on Short-Form Video and High-Converting Formats",
      paragraphs: [
        "Short-form video is not optional anymore.",
        "Reels. Shorts. TikTok-style videos. Even LinkedIn videos.",
      ],
      weakContent: [
        "Educational tips",
        "Before-and-after results",
        "Client testimonials",
        "Behind-the-scenes trust builders",
        "Clear offer explanations",
      ],
      mustTitle:
        "If your social media marketing strategy does not include video, you are invisible. But here is the important part. It is not just about posting video. It is about posting the right kind of video:",
      mustItems: [
        "Many social media marketing companies focus only on pretty designs",
        "But video builds authority much faster",
        "Especially in social media marketing for small business",
      ],
      optimizeTitle: "Video builds trust in:",
      optimizeItems: [
        "Healthcare social media marketing",
        "B2B social media marketing",
        "Small business marketing",
      ],
      outro: "People buy from brands they trust. Video builds that trust.",
    },
    authority: {
      title: "Treating Social Media Like a Hobby Instead of a Sales Channel",
      image: {
        src: "/blogs/blog 5-1.webp",
        alt: "Treating Social Media Like a Hobby Instead of a Sales Channel",
        width: 1024,
        height: 600,
      },
      paragraphs: [
        "If you treat social media like a side activity, it will give side results.",
        "In 2026, social media marketing services are directly connected to revenue.",
      ],
      focusTitle: "It is no longer just 'brand awareness.' Your pages should:",
      focusItems: [
        "Educate",
        "Build authority",
        "Capture leads",
        "Drive traffic",
        "Convert sales",
      ],
      outro:
        "If your bio has no clear offer… If your page does not explain what you do… If your content never talks about your services… You are not using social media as a sales tool. Many businesses search for a social media marketing agency that serves all types of businesses across the United States because they realize its strategy. They need a clear structure. A professional approach turns social platforms into predictable lead systems.",
    },
    diy: {
      title: "Spending on Ads Without a Conversion Strategy",
      intro:
        "Boosting posts is not a strategy. Running ads without a plan is like pouring water into sand.",
      mistakesTitle: "Before spending money, ask:",
      mistakes: [
        "Where will this traffic go?",
        "Is the landing page optimized?",
        "Is there a strong offer?",
        "Are we collecting emails?",
        "Is there follow-up?",
      ],
      after:
        "Many social media marketing agencies run ads. But not all focus on conversion.",
      costTitle: "The real goal is not traffic. The goal is leads and sales. Smart social media marketing packages include:",
      costs: [
        "Funnel setup",
        "Retargeting",
        "Audience testing",
        "Offer testing",
      ],
      fixTitle: "Without this, ad spend becomes waste.",
      fix:
        "Professional planning ensures every dollar spent on ads contributes to measurable business growth.",
    },
    diagnosis: {
      title: "Not Optimizing Profiles for Trust and Authority",
      intro:
        "Your profile is your digital storefront. Yet many businesses ignore:",
      auditChecks: [
        "Bio clarity",
        "Highlights",
        "Pinned posts",
        "Professional branding",
        "Clear service descriptions",
      ],
      examplesTitle: "When someone visits your page, they decide in seconds:",
      businessTypes: [
        {
          name: "Trust Signals That Matter",
          lines: [
            "Testimonials",
            "Case studies",
            "Certifications",
            "Clear contact info",
          ],
        },
        {
          name: "Your Page Should Show",
          lines: [
            "Who you help",
            "What you offer",
            "Why you are different",
            "How to contact you",
          ],
        },
      ],
    },
    strategy: {
      title: "Creating Content Without a Clear Call to Action",
      intro: "This is one of the biggest mistakes in social media marketing. No call to action. Every post should guide the reader.",
      steps: [
        "Comment below",
        "Send a DM",
        "Book a call",
        "Visit the link",
        "Download the guide",
      ],
      outro:
        "Without direction, people scroll away. A skilled social media marketing consultant understands buyer psychology. You need soft CTAs and strong CTAs. For example: Soft - 'Save this post for later.' Strong - 'Book your free strategy call today.' Clear action increases conversions.",
    },
    growth: {
      title: "Tracking Vanity Metrics Instead of Revenue",
      intro:
        "Views are exciting. Followers look impressive. But revenue is what matters.",
      outcomes: [
        { icon: "LEAD", text: "Cost per lead" },
        { icon: "CONV", text: "Cost per conversion" },
        { icon: "RATE", text: "Conversion rate" },
        { icon: "LTV", text: "Customer lifetime value" },
      ],
      principlesTitle: "In 2026, smart brands track:",
      principles: [
        "Not just: Likes, Shares, Impressions",
        "This is where professional social media marketing services make a difference",
        "They measure business growth, not just engagement",
      ],
      outro:
        "For social media marketing for small business, tracking the right numbers is even more important. Budgets are limited. Every dollar matters.",
      image: {
        src: "/blogs/blog 5-2.webp",
        alt: "Tracking Vanity Metrics Instead of Revenue",
        width: 1024,
        height: 600,
      },
    },
  },
  faq: [
    {
      q: "1. Why is my social media not generating leads?",
      a: "Most businesses focus on vanity metrics like likes and followers instead of creating content that converts. You need a clear strategy with strong calls to action and content that addresses your ideal customer's pain points.",
    },
    {
      q: "2. Is short-form video really necessary in 2026?",
      a: "Yes. Reels, Shorts, and TikTok-style videos are essential for visibility. Video builds trust and authority much faster than static images. If your strategy doesn't include video, you're missing out on the most powerful format.",
    },
    {
      q: "3. Should I boost posts or run proper ad campaigns?",
      a: "Boosting posts is not a strategy. Proper ad campaigns with funnel setup, retargeting, and conversion tracking deliver real results. Without a conversion strategy, ad spend becomes waste.",
    },
    {
      q: "4. How do I know if I need a social media marketing consultant?",
      a: "If you're posting regularly but not seeing leads or sales, if you're confused about metrics, or if you're spending money on ads without clear ROI, it's time to work with a professional who can create a structured growth plan.",
    },
  ],
  readNext: {
    label: "More Relevant",
    title: "How to Choose a Digital Marketing Agency (Complete 2026 Guide)",
    href: "/blog/how-to-choose-digital-marketing-agency",
    cta: "Read Article",
  },
};

const imageCard = (image: ImageData) => (
  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
    <img
      src={image.src}
      alt={image.alt}
      className="w-full h-auto object-cover"
      style={{ aspectRatio: `${image.width}/${image.height}` }}
      width={image.width}
      height={image.height}
    />
  </div>
);

const Blog5: React.FC = () => {
  const bodyTextClass = "text-base md:text-lg leading-relaxed text-slate-700";
  const listItemClass = "text-base md:text-lg leading-relaxed text-slate-700";

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-100 selection:text-blue-900">
      <header className="relative bg-slate-900 pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-slate-900 z-0"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold tracking-wider uppercase mb-6">
            {pageContent.hero.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            {pageContent.hero.title}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-300 max-w-2xl mx-auto font-light">
            {pageContent.hero.subtitle}
          </h2>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 mt-16 relative z-20">
        {imageCard(pageContent.hero.image)}
      </div>

      <main className="max-w-4xl mx-auto px-6 relative z-20 pb-20 mt-12">
        <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border border-slate-100">
          <div className={`prose prose-slate max-w-none ${bodyTextClass}`}>
            <p className="mb-6 font-medium text-slate-900">{pageContent.intro.lead}</p>
            {pageContent.intro.paragraphs.map((text) => (
              <p key={text} className="mb-6">
                {text}
              </p>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {pageContent.intro.highlightCards.map((item) => (
                <div
                  key={item.text}
                  className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center"
                >
                  <span className="block text-2xl font-bold text-blue-600 mb-1">{item.title}</span>
                  <span className="text-sm text-slate-500">{item.text}</span>
                </div>
              ))}
            </div>

            <p className="mb-4 font-semibold text-slate-800">{pageContent.intro.signalsTitle}</p>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 list-none pl-0">
              {pageContent.intro.signals.map((item) => (
                <li
                  key={item}
                  className={`flex items-center space-x-2 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 ${listItemClass}`}
                >
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-6">
              {pageContent.intro.linkLine.before}{" "}
              <Link href={pageContent.intro.linkLine.href} className="font-semibold text-blue-800 hover:underline">
                {pageContent.intro.linkLine.anchor}
              </Link>{" "}
              {pageContent.intro.linkLine.after}
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
              <p className="italic text-slate-700">{pageContent.intro.quote}</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">{pageContent.sections.reasons.title}</h2>
          <p className={`mb-6 ${bodyTextClass}`}>{pageContent.sections.reasons.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {pageContent.sections.reasons.items.map((item) => (
              <div
                key={item}
                className={`flex items-start p-4 rounded-xl bg-white border border-slate-200 shadow-sm ${listItemClass}`}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center font-bold mr-4">
                  !
                </div>
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-slate-900  p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">{pageContent.sections.reasons.callout.title}</h3>
            {pageContent.sections.reasons.callout.lines.map((line) => (
              <p key={line} className={`mb-3 ${bodyTextClass}`}>
                {line}
              </p>
            ))}
          </div>
        </section>

        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{pageContent.sections.aiAndTechnical.left.title}</h2>
            {pageContent.sections.aiAndTechnical.left.paragraphs.map((line) => (
              <p key={line} className={`mb-4 ${bodyTextClass}`}>
                {line}
              </p>
            ))}
            <ul className="space-y-3 mb-6">
              {pageContent.sections.aiAndTechnical.left.bullets.map((item) => (
                <li key={item} className={`flex items-center ${listItemClass}`}>
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className={`mb-4 ${bodyTextClass}`}>{pageContent.sections.aiAndTechnical.left.followUp}</p>
            <p className={`mb-4 ${bodyTextClass}`}>{pageContent.sections.aiAndTechnical.left.focusTitle}</p>
            <ul className="space-y-2 mb-6">
              {pageContent.sections.aiAndTechnical.left.focusItems.map((item) => (
                <li key={item} className={`flex items-center ${listItemClass}`}>
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className={bodyTextClass}>{pageContent.sections.aiAndTechnical.left.outro}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4">{pageContent.sections.aiAndTechnical.right.title}</h3>
            <p className={`mb-4 ${bodyTextClass}`}>{pageContent.sections.aiAndTechnical.right.intro}</p>
            <p className={`mb-4 font-semibold ${bodyTextClass}`}>{pageContent.sections.aiAndTechnical.right.issuesTitle}</p>
            <ul className="space-y-2 mb-6">
              {pageContent.sections.aiAndTechnical.right.issues.map((item) => (
                <li
                  key={item}
                  className={`flex justify-between items-center border-b border-slate-100 pb-2 last:border-0 ${listItemClass}`}
                >
                  <span>{item}</span>
                  <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded">MISTAKE</span>
                </li>
              ))}
            </ul>
            <p className={`mb-4 ${bodyTextClass}`}>{pageContent.sections.aiAndTechnical.right.auditTitle}</p>
            <ul className="space-y-2 mb-6">
              {pageContent.sections.aiAndTechnical.right.auditItems.map((item) => (
                <li key={item} className={`flex items-center ${listItemClass}`}>
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className={bodyTextClass}>{pageContent.sections.aiAndTechnical.right.outro}</p>
          </div>
        </section>

        {/* <section className="mb-16">{imageCard(pageContent.sections.aiAndTechnical.image)}</section> */}

        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-indigo-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{pageContent.sections.content.title}</h2>
            {pageContent.sections.content.paragraphs.map((line) => (
              <p key={line} className={`mb-4 ${bodyTextClass}`}>
                {line}
              </p>
            ))}
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6 list-none pl-0">
              {pageContent.sections.content.weakContent.map((item) => (
                <li
                  key={item}
                  className={`bg-white px-3 py-2 rounded-lg text-center border border-indigo-100 text-indigo-800 font-medium ${listItemClass}`}
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className={`mb-4 ${bodyTextClass}`}>{pageContent.sections.content.mustTitle}</p>
            <ul className="space-y-2 mb-6">
              {pageContent.sections.content.mustItems.map((item) => (
                <li key={item} className={`flex items-center ${listItemClass}`}>
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className={`mb-4 font-semibold ${bodyTextClass}`}>{pageContent.sections.content.optimizeTitle}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {pageContent.sections.content.optimizeItems.map((item) => (
                <span
                  key={item}
                  className={`bg-white text-indigo-600 px-3 py-1 rounded-full font-medium shadow-sm border border-indigo-100 ${listItemClass}`}
                >
                  {item}
                </span>
              ))}
            </div>
            <p className={bodyTextClass}>{pageContent.sections.content.outro}</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">{pageContent.sections.authority.title}</h2>
          {pageContent.sections.authority.paragraphs.map((line) => (
            <p key={line} className={`mb-4 ${bodyTextClass}`}>
              {line}
            </p>
          ))}
          <p className={`mb-4 ${bodyTextClass}`}>{pageContent.sections.authority.focusTitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {pageContent.sections.authority.focusItems.map((item) => (
              <div
                key={item}
                className={`bg-white p-3 rounded-lg text-center font-medium text-slate-700 border border-slate-200 shadow-sm ${listItemClass}`}
              >
                {item}
              </div>
            ))}
          </div>
          <p className={bodyTextClass}>{pageContent.sections.authority.outro}</p>
        </section>

        <section className="mb-16">{imageCard(pageContent.sections.authority.image)}</section>

        <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{pageContent.sections.diy.title}</h2>
            <p className={`mb-6 ${bodyTextClass}`}>{pageContent.sections.diy.intro}</p>
            <div className="bg-red-50 border border-red-100 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-red-700 mb-4">{pageContent.sections.diy.mistakesTitle}</h3>
              <ul className="space-y-3">
                {pageContent.sections.diy.mistakes.map((item) => (
                  <li key={item} className={`flex items-center text-red-700 ${listItemClass}`}>
                    <span className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 font-bold text-sm">
                      ?
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className={`mb-6 ${bodyTextClass}`}>{pageContent.sections.diy.after}</p>
            <div className="bg-slate-100 border border-slate-200 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-slate-800 mb-4">{pageContent.sections.diy.costTitle}</h3>
              <ul className="space-y-3">
                {pageContent.sections.diy.costs.map((item) => (
                  <li key={item} className={`flex items-center ${listItemClass}`}>
                    <span className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-slate-900  p-8 rounded-2xl shadow-xl h-fit">
            <h3 className="text-xl font-bold mb-4 text-emerald-400">{pageContent.sections.diy.fixTitle}</h3>
            <p className={`text-slate-300 ${bodyTextClass}`}>{pageContent.sections.diy.fix}</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">{pageContent.sections.diagnosis.title}</h2>
          <p className={`mb-6 ${bodyTextClass}`}>{pageContent.sections.diagnosis.intro}</p>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 mb-8">
            <div className="p-6 bg-slate-50 border-b border-slate-100">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {pageContent.sections.diagnosis.auditChecks.map((item) => (
                  <div
                    key={item}
                    className={`text-center p-3 bg-white rounded-lg border border-slate-200 font-medium shadow-sm ${listItemClass}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className={`mb-4 ${bodyTextClass}`}>{pageContent.sections.diagnosis.examplesTitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pageContent.sections.diagnosis.businessTypes.map((item) => (
              <div key={item.name} className="p-6 bg-white rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold text-blue-600 mb-3">{item.name}</h3>
                {item.lines.map((line) => (
                  <p key={line} className={`mb-2 ${bodyTextClass}`}>
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{pageContent.sections.strategy.title}</h2>
          <p className={`mb-4 ${bodyTextClass}`}>{pageContent.sections.strategy.intro}</p>
          <ol className={`list-decimal pl-5 mb-4 space-y-1 ${listItemClass}`}>
            {pageContent.sections.strategy.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className={bodyTextClass}>{pageContent.sections.strategy.outro}</p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">{pageContent.sections.growth.title}</h2>
          <p className={`mb-6 ${bodyTextClass}`}>{pageContent.sections.growth.intro}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {pageContent.sections.growth.outcomes.map((item) => (
              <div
                key={item.text}
                className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm"
              >
                <div className="text-xs font-bold text-blue-600 mb-2">{item.icon}</div>
                <div className={`font-medium text-slate-700 ${listItemClass}`}>{item.text}</div>
              </div>
            ))}
          </div>
          <p className={`mb-4 ${bodyTextClass}`}>{pageContent.sections.growth.principlesTitle}</p>
          <ul className={`list-disc pl-5 mb-6 space-y-1 ${listItemClass}`}>
            {pageContent.sections.growth.principles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={`mb-6 ${bodyTextClass}`}>{pageContent.sections.growth.outro}</p>
        </section>

        <section className="mb-16">{imageCard(pageContent.sections.growth.image)}</section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-4">
            {pageContent.faq.map((item) => (
              <div key={item.q} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className={`font-bold text-slate-800 mb-2 ${bodyTextClass}`}>{item.q}</h3>
                <p className={`text-slate-600 leading-relaxed ${bodyTextClass}`}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-slate-200 pt-12 mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="mb-4 md:mb-0">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                {pageContent.readNext.label}
              </span>
              <h3 className={`text-lg font-bold text-slate-800 mt-1 ${bodyTextClass}`}>
                {pageContent.readNext.title}
              </h3>
            </div>
            <Link
              href={pageContent.readNext.href}
              className="px-6 py-2 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors shadow-sm"
            >
              {pageContent.readNext.cta}
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Blog5;
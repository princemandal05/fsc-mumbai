"use client";

import { useState } from "react";
import styles from "./SuccessStories.module.css";

const STORIES = [
  {
    id: 1,
    tag: "Education",
    badge: "Educational Sponsorship",
    title: "From Near Dropout to Commerce Graduate: Pooja’s Triumph",
    quote: "“FSC didn’t just pay my school fees; their social worker visited our home every month to ensure I had light to study by.”",
    excerpt: "Growing up in a cramped settlement in Cuffe Parade, Pooja almost left school in class 7 after her father fell ill. Through FSC sponsorship, her entire secondary education and B.Com degree were funded. Today, she works as a senior accounts assistant in Mumbai.",
    image: "/images/hero_education.jpg",
    author: "Pooja S.",
    location: "Cuffe Parade, Mumbai",
  },
  {
    id: 2,
    tag: "Adoption",
    badge: "CARA Adoption",
    title: "Finding Our Daughter: The Kapoor Family’s Adoption Story",
    quote: "“The FSC counselors walked hand-in-hand with us through every verification step. They made the journey about the child's happiness.”",
    excerpt: "After years of emotional distress and uncertainty, Rohit and Neha registered through CARA and selected FSC for their Home Study. FSC’s caseworkers provided sensitive pre-adoption counseling and smooth legal support. Their daughter is now a cheerful 5-year-old.",
    image: "/images/adoption_family.jpg",
    author: "Rohit & Neha K.",
    location: "Bandra, Mumbai",
  },
  {
    id: 3,
    tag: "Crisis",
    badge: "Bal Sangopan Yojana",
    title: "A Widow’s Courage: Keeping Three Children Together",
    quote: "“When my husband died suddenly, neighbors told me to put my children in an orphanage. FSC stepped in and kept us together.”",
    excerpt: "Sunita faced sudden destitution with three school-aged children. Through Bal Sangopan Yojana (BSY), FSC arranged monthly foster grants, grocery aid, and vocational sewing machine training. Today her children are healthy and enrolled in higher secondary.",
    image: "/images/adoption_family.jpg",
    author: "Sunita M.",
    location: "Colaba, Mumbai",
  },
  {
    id: 4,
    tag: "Community",
    badge: "Community Interventions",
    title: "Empowered Women: The Machhimar Nagar Micro-Enterprise",
    quote: "“Before FSC's self-help group, we never knew how to open a bank account or save money together.”",
    excerpt: "In 2012, FSC social workers brought together 15 women residing in coastal fishing settlements to form an SHG. Today, the group operates a catering collective and educational revolving fund that has funded higher degrees for over 30 neighborhood girls.",
    image: "/images/community_women.jpg",
    author: "Rekha & The Ekta SHG",
    location: "Machhimar Nagar, Mumbai",
  },
  {
    id: 5,
    tag: "Education",
    badge: "Educational Sponsorship",
    title: "A Fisherman’s Son Becomes a Certified Marine Technician",
    quote: "“FSC sponsored my technical vocational ITI certification when my family had no income during the monsoon bans.”",
    excerpt: "Karan's father worked as a daily-wage net repairer. FSC’s educational sponsorship supported Karan through his 10th grade and funded his specialized mechanical ITI diploma. He is now employed with a maritime engineering provider in Mumbai harbor.",
    image: "/images/hero_education.jpg",
    author: "Karan B.",
    location: "Sassoon Docks, Mumbai",
  },
  {
    id: 6,
    tag: "Crisis",
    badge: "Family Counseling Unit",
    title: "Overcoming ADHD & Academic Stress: Master Vihaan",
    quote: "“FSC’s child counselor recognized my son’s learning pattern when schools were labelling him difficult.”",
    excerpt: "9-year-old Vihaan was failing third grade and undergoing acute anxiety. FSC’s specialized counseling unit conducted psycho-social evaluations, collaborated with his school teachers, and equipped his parents with affirmative coping routines.",
    image: "/images/adoption_family.jpg",
    author: "Meera D. (Parent)",
    location: "Bhayandar, Mumbai",
  },
];

export default function SuccessStories() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" 
    ? STORIES 
    : STORIES.filter((s) => s.tag === activeFilter);

  return (
    <section className="section section-alt" id="stories">
      <div className="container">
        <div className="section-header">
          <div className="section-badge navy">Voices of Transformation</div>
          <h2 className="section-title">Lives Transformed, Families Restored</h2>
          <p className="section-desc">
            Behind every statistic is a human life. Discover the journeys of children, adoptive parents, 
            and resilient families empowered through our holistic interventions.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className={styles.filterNav}>
          {["All", "Education", "Adoption", "Crisis", "Community"].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`${styles.filterBtn} ${activeFilter === tag ? styles.filterBtnActive : ""}`}
            >
              {tag === "All" ? "All Impact Stories" : tag}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className={styles.storiesGrid}>
          {filtered.map((story) => (
            <div key={story.id} className={styles.storyCard}>
              <div className={styles.storyMedia}>
                <img src={story.image} alt={story.title} className={styles.storyImg} />
                <span className={styles.storyBadge}>{story.badge}</span>
              </div>
              <div className={styles.storyBody}>
                <div className={styles.storyQuote}>{story.quote}</div>
                <h3 className={styles.storyTitle}>{story.title}</h3>
                <p className={styles.storyExcerpt}>{story.excerpt}</p>
                <div className={styles.storyFooter}>
                  <span className={styles.storyAuthor}>{story.author}</span>
                  <span className={styles.storyLoc}>{story.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

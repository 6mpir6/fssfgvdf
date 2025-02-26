"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  CalendarIcon,
  ChevronDown,
  FileText,
  Home,
  KeyRound,
  List,
  Plus,
  Search,
  Sparkles,
  Eye,
} from "lucide-react";
import Chart from "chart.js/auto";

// --- DATA & MOCK CONTENT ---
const topKeywords = [
  { id: 1, keyword: "seo tools", position: 3, volume: "12,400" },
  { id: 2, keyword: "keyword research", position: 5, volume: "8,100" },
  { id: 3, keyword: "seo strategy", position: 7, volume: "6,600" },
  { id: 4, keyword: "content marketing", position: 9, volume: "5,400" },
  { id: 5, keyword: "backlink checker", position: 12, volume: "4,900" },
];

const relatedKeywords = [
  { keyword: "seo keyword tool", volume: "5,400", difficulty: 45 },
  { keyword: "best keyword research tool", volume: "3,600", difficulty: 65 },
  { keyword: "free keyword research", volume: "8,100", difficulty: 35 },
  { keyword: "keyword planner alternative", volume: "2,900", difficulty: 40 },
  { keyword: "seo keyword finder", volume: "4,200", difficulty: 55 },
  { keyword: "long tail keyword tool", volume: "3,100", difficulty: 30 },
];

const searchListings = [
  {
    title: "10 Best SEO Keyword Research Tools for 2025",
    url: "https://example.com/best-keyword-research-tools",
    description:
      "Looking for the best keyword research tools? Our comprehensive guide covers the top 10 SEO keyword tools to help you improve your rankings.",
    domainAuthority: 85,
  },
  {
    title: "How to Do Keyword Research: A Step-by-Step Guide",
    url: "https://anothersite.com/keyword-research-guide",
    description:
      "Learn how to do effective keyword research with our step-by-step guide. Find the right keywords to target and improve your SEO strategy.",
    domainAuthority: 78,
  },
  {
    title: "Free Keyword Research Tools That Actually Work",
    url: "https://seosite.com/free-keyword-tools",
    description:
      "Discover free keyword research tools that deliver professional results. No budget? No problem. These tools will help you find valuable keywords.",
    domainAuthority: 72,
  },
];

const initialScheduledContent = [
  { day: 5, title: "SEO Basics Guide" },
  { day: 12, title: "Keyword Research Tips" },
  { day: 15, title: "Content Strategy 2025" },
  { day: 19, title: "Link Building Guide" },
  { day: 26, title: "Technical SEO Audit" },
];

const initialDraftContent = [
  {
    title: "10 Advanced SEO Techniques for 2025",
    lastEdited: "2 days ago",
    wordCount: 1850,
    status: "complete",
    content: "Initial draft content...",
  },
  {
    title: "How to Conduct a Technical SEO Audit",
    lastEdited: "5 days ago",
    wordCount: 950,
    status: "incomplete",
    content: "Initial draft content...",
  },
  {
    title: "The Ultimate Guide to On-Page SEO",
    lastEdited: "1 week ago",
    wordCount: 2100,
    status: "complete",
    content: "Initial draft content...",
  },
  {
    title: "Link Building Strategies That Work",
    lastEdited: "2 weeks ago",
    wordCount: 750,
    status: "incomplete",
    content: "Initial draft content...",
  },
];

const contentVariations = [
  {
    title: "SEO Strategy Guide - Technical Focus",
    type: "Variation 1",
    description:
      "This version focuses more on technical SEO aspects and implementation details.",
    content: "Variation 1 content...",
  },
  {
    title: "SEO Strategy Guide - Beginner Friendly",
    type: "Variation 2",
    description:
      "A simplified version with more explanations for beginners and less technical jargon.",
    content: "Variation 2 content...",
  },
  {
    title: "SEO Strategy Guide - Case Study Based",
    type: "Variation 3",
    description:
      "This version includes real-world case studies and examples to illustrate key points.",
    content: "Variation 3 content...",
  },
];

// --- CHART COMPONENTS USING CHART.JS ---
function KeywordPerformanceChart() {
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Day 1", "Day 10", "Day 20", "Day 30"],
          datasets: [
            {
              label: "Keyword Rankings",
              data: [10, 8, 6, 4],
              borderColor: "rgba(74,108,247,1)",
              backgroundColor: "rgba(74,108,247,0.2)",
              tension: 0.4,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
        },
      });
    }
  }, []);
  return <canvas ref={chartRef} className="h-48 w-full"></canvas>;
}

function TrafficSourcesChart() {
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Organic", "Referral", "Social"],
          datasets: [
            {
              data: [65, 20, 15],
              backgroundColor: ["#4a6cf7", "#28a745", "#ffc107"],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: "bottom" } },
        },
      });
    }
  }, []);
  return <canvas ref={chartRef} className="h-48 w-full"></canvas>;
}

function ContentPerformanceChart() {
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Blog 1", "Blog 2", "Blog 3", "Blog 4"],
          datasets: [
            {
              label: "Views",
              data: [1500, 2300, 1800, 2000],
              backgroundColor: "rgba(74,108,247,0.7)",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: { x: { grid: { display: false } } },
        },
      });
    }
  }, []);
  return <canvas ref={chartRef} className="h-48 w-full"></canvas>;
}

function KeywordTrendsChart() {
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
          datasets: [
            {
              label: "Search Volume",
              data: [12000, 12500, 13000, 12800],
              borderColor: "rgba(40,167,69,1)",
              backgroundColor: "rgba(40,167,69,0.2)",
              tension: 0.4,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
        },
      });
    }
  }, []);
  return <canvas ref={chartRef} className="h-48 w-full"></canvas>;
}

function AgeDistributionChart() {
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["18-24", "25-34", "35-44", "45-54"],
          datasets: [
            {
              data: [25, 40, 20, 15],
              backgroundColor: ["#4a6cf7", "#28a745", "#ffc107", "#dc3545"],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: "bottom" } },
        },
      });
    }
  }, []);
  return <canvas ref={chartRef} className="h-48 w-full"></canvas>;
}

function GeographicDistributionChart() {
  const mapRef = useRef(null);
  useEffect(() => {
    if (mapRef.current && window.L) {
      const map = window.L.map(mapRef.current).setView([20, 0], 2);
      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      window.L.marker([37.7749, -122.4194])
        .addTo(map)
        .bindPopup("San Francisco<br>Search Volume: 4,500")
        .openPopup();
      window.L.marker([40.7128, -74.0060])
        .addTo(map)
        .bindPopup("New York<br>Search Volume: 6,200");
      window.L.marker([51.5074, -0.1278])
        .addTo(map)
        .bindPopup("London<br>Search Volume: 3,800");
      window.L.marker([-33.8688, 151.2093])
        .addTo(map)
        .bindPopup("Sydney<br>Search Volume: 2,100");
    }
  }, []);
  return <div ref={mapRef} className="h-64 w-full"></div>;
}

// --- SIDEBAR COMPONENT ---
function Sidebar({ activeTab, setActiveTab, currentPost }) {
  return (
    <aside className="sidebar p-4">
      <header className="flex items-center space-x-2 mb-4">
        <KeyRound className="h-6 w-6 text-primary" />
        <h1 className="font-bold text-xl">SEO Master</h1>
      </header>
      <nav>
        <ul>
          <li onClick={() => setActiveTab("dashboard")} className={activeTab==="dashboard" ? "active" : ""}>
            <Home className="h-4 w-4" /> Dashboard
          </li>
          <li onClick={() => setActiveTab
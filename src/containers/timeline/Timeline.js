import React, {useContext} from "react";
import "./Timeline.scss";
import StyleContext from "../../contexts/StyleContext";
import {workExperiences, bigProjects} from "../../portfolio";
import TimelineItem from "../../components/timelineItem/TimelineItem";

// Helper function to parse various date formats
const parseDate = dateStr => {
  if (!dateStr) return null;

  const trimmed = dateStr.trim();

  // Handle "Present" or "Current"
  if (/present|current|now/i.test(trimmed)) {
    return new Date();
  }

  // Try parsing directly (handles "June 2024", "2024", etc.)
  let date = new Date(trimmed);
  if (!isNaN(date.getTime())) {
    return date;
  }

  // Handle "Month Year" format explicitly
  const monthYearMatch = trimmed.match(
    /^(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})$/i
  );
  if (monthYearMatch) {
    date = new Date(`${monthYearMatch[1]} 1, ${monthYearMatch[2]}`);
    if (!isNaN(date.getTime())) return date;
  }

  // Handle year only
  const yearMatch = trimmed.match(/^(\d{4})$/);
  if (yearMatch) {
    return new Date(parseInt(yearMatch[1], 10), 0, 1);
  }

  return null;
};

// Parse date range string
const parseDateRange = dateRange => {
  if (!dateRange) return {start: null, end: null};

  // Normalize - replace all dash-like characters with regular hyphen
  const normalized = dateRange.replace(/[–—−]/g, "-").trim();

  // Split by hyphen or "to"
  const parts = normalized.split(/\s*[-]\s*|\s+to\s+/i);

  if (parts.length === 1) {
    // Single date (project)
    const date = parseDate(parts[0]);
    return {start: date, end: date};
  } else if (parts.length === 2) {
    // Date range
    const start = parseDate(parts[0].trim());
    const end = parseDate(parts[1].trim());
    return {start, end};
  }

  return {start: null, end: null};
};

export default function Timeline() {
  const {isDark} = useContext(StyleContext);

  // Check if we should display the timeline
  if (!(workExperiences?.display || bigProjects?.display)) {
    return null;
  }

  // Format and parse work experiences
  const experienceItems = (workExperiences?.experience || []).map(
    (item, index) => {
      const {start, end} = parseDateRange(item.date);
      return {
        type: "experience",
        title: item.role,
        org: item.company,
        date: item.date,
        location: item.location,
        desc: item.descBullets || [],
        logo: item.companylogo,
        startDate: start,
        endDate: end || new Date(),
        originalIndex: index
      };
    }
  );

  // Format and parse projects
  const projectItems = (bigProjects?.projects || []).map((item, index) => {
    const {start, end} = parseDateRange(item.date || item.duration);
    return {
      type: "project",
      title: item.projectName,
      org: item.organization || null,
      date: item.date || item.duration,
      location: item.location || null,
      desc: Array.isArray(item.projectDesc)
        ? item.projectDesc
        : [item.projectDesc].filter(Boolean),
      logo: item.image,
      startDate: start,
      endDate: end || start,
      originalIndex: index + 1000
    };
  });

  // Combine and filter items with valid dates
  let combined = [...experienceItems, ...projectItems].filter(
    item => item.startDate && item.endDate
  );

  if (combined.length === 0) {
    return (
      <div id="timeline">
        <div className="timeline-container">
          <h1 className="timeline-heading">My Journey</h1>
          <p style={{textAlign: "center", color: isDark ? "#999" : "#666"}}>
            No timeline data with valid dates available
          </p>
        </div>
      </div>
    );
  }

  // Sort by start date (NEWEST FIRST)
  combined.sort((a, b) => b.startDate - a.startDate);

  // Find the overall date range
  const allDates = combined.flatMap(item => [item.startDate, item.endDate]);
  const minDate = new Date(Math.min(...allDates));
  const maxDate = new Date(Math.max(...allDates));

  // Set timeline minimum to 2021 to avoid stretching too far back
  const timelineMinDate = new Date(2021, 0, 1); // January 1, 2021
  const effectiveMinDate =
    minDate < timelineMinDate ? timelineMinDate : minDate;

  // Add padding to the timeline
  const paddedMinDate = new Date(effectiveMinDate);
  const paddedMaxDate = new Date(maxDate);
  paddedMinDate.setMonth(paddedMinDate.getMonth() - 2);
  paddedMaxDate.setMonth(paddedMaxDate.getMonth() + 2);

  const totalDuration = paddedMaxDate - paddedMinDate;

  // Calculate positions for each item (inverted for reverse chronological)
  let positionedItems = combined.map(item => {
    // Clamp start date to timeline minimum
    const clampedStartDate =
      item.startDate < timelineMinDate ? timelineMinDate : item.startDate;

    const startOffset = clampedStartDate - paddedMinDate;
    const endOffset = item.endDate - paddedMinDate;

    // Invert the positions so newest items are at top
    const topPercent = Math.max(0, 100 - (endOffset / totalDuration) * 100);
    const bottomPercent = Math.min(
      100,
      100 - (startOffset / totalDuration) * 100
    );
    const heightPercent = Math.max(3, bottomPercent - topPercent);

    return {
      ...item,
      topPercent,
      heightPercent
    };
  });

  // Assign sides with simple alternating pattern and overlap prevention
  const leftItems = [];
  const rightItems = [];

  positionedItems.forEach((item, index) => {
    // Simple alternating pattern - start with right for newest item
    const preferLeft = index % 2 === 1;

    // Check for overlaps on preferred side with larger gap for better spacing
    const checkOverlap = existingItem => {
      const itemEnd = item.topPercent + item.heightPercent;
      const existingEnd = existingItem.topPercent + existingItem.heightPercent;
      const minGap = 8; // Increased from 5 to 8 for more breathing room

      return (
        item.topPercent < existingEnd + minGap &&
        itemEnd + minGap > existingItem.topPercent
      );
    };

    const leftHasOverlap = leftItems.some(checkOverlap);
    const rightHasOverlap = rightItems.some(checkOverlap);

    // Decide which side based on preference and overlaps
    if (preferLeft && !leftHasOverlap) {
      item.align = "left";
      leftItems.push(item);
    } else if (!preferLeft && !rightHasOverlap) {
      item.align = "right";
      rightItems.push(item);
    } else if (!leftHasOverlap) {
      item.align = "left";
      leftItems.push(item);
    } else if (!rightHasOverlap) {
      item.align = "right";
      rightItems.push(item);
    } else {
      // Both sides have overlap, choose the side with less overlap
      const leftOverlapCount = leftItems.filter(checkOverlap).length;
      const rightOverlapCount = rightItems.filter(checkOverlap).length;

      if (leftOverlapCount <= rightOverlapCount) {
        item.align = "left";
        leftItems.push(item);
      } else {
        item.align = "right";
        rightItems.push(item);
      }
    }
  });

  // Calculate container height
  const monthsDiff =
    (paddedMaxDate.getFullYear() - paddedMinDate.getFullYear()) * 12 +
    (paddedMaxDate.getMonth() - paddedMinDate.getMonth());
  const containerHeight = Math.max(
    1000,
    combined.length * 180,
    monthsDiff * 60
  );

  // Add year markers (reversed order - newest at top)
  const yearMarkers = [];
  const startYear = Math.max(2021, paddedMinDate.getFullYear());
  const endYear = paddedMaxDate.getFullYear();

  for (let year = startYear; year <= endYear; year++) {
    const yearDate = new Date(year, 0, 1);
    if (yearDate >= paddedMinDate && yearDate <= paddedMaxDate) {
      // Invert the offset so newer years appear at top
      const offset = 100 - ((yearDate - paddedMinDate) / totalDuration) * 100;
      yearMarkers.push({year, offset});
    }
  }

  return (
    <div id="timeline">
      <div className="timeline-container">
        <h1 className="timeline-heading">My Journey</h1>
        <div
          style={{
            textAlign: "center",
            color: isDark ? "#bbb" : "#555",
            marginBottom: "20px",
            fontSize: "14px"
          }}
        >
          {combined.length} {combined.length === 1 ? "item" : "items"} • 2021 -{" "}
          {maxDate.getFullYear()}
        </div>
        <div
          className={isDark ? "timeline-list dark" : "timeline-list"}
          style={{
            height: `${containerHeight}px`,
            position: "relative"
          }}
        >
          {/* Year markers */}
          {yearMarkers.map((marker, idx) => (
            <div
              key={`year-${idx}`}
              className="timeline-year-marker"
              style={{top: `${marker.offset}%`}}
            >
              {marker.year}
            </div>
          ))}

          {/* Timeline items */}
          {positionedItems.map(item => (
            <TimelineItem
              key={`timeline-${item.originalIndex}`}
              item={item}
              align={item.align}
              isDark={isDark}
              topPct={item.topPercent}
              heightPct={item.heightPercent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import React, {useState, useRef, useEffect} from "react";
import ReactDOM from "react-dom";
import "./TimelineItem.scss";
import {Fade} from "react-reveal";

export default function TimelineItem({item, align, isDark, topPct = 0, heightPct = 4}) {
  const containerStyle = {
    top: `${topPct}%`,
    // Container stretches for the duration bar
    height: `${Math.max(1, heightPct)}%`
  };

  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (open && modalRef.current && !modalRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className={`timeline-item ${align} ${isDark ? "dark" : ""}`} style={containerStyle}>
      <Fade bottom duration={800} distance="20px">
        <div className="timeline-item-content" onClick={() => setOpen(true)} role="button" tabIndex={0}>
          {/* Larger, more readable card layout */}
          <div className="timeline-card-layout">
            {item.logo && (
              <div className="timeline-logo-large">
                <img src={item.logo} alt={item.title} />
              </div>
            )}
            <div className="timeline-info">
              <div className="timeline-title-large">{item.title}</div>
              {item.org && <div className="timeline-org-large">{item.org}</div>}
              {item.date && <div className="timeline-date-large">{item.date}</div>}
              {item.location && (
                <div className="timeline-location-large">
                  <i className="fas fa-map-marker-alt"></i> {item.location}
                </div>
              )}
            </div>
            <div className="timeline-badge">
              <span className={`timeline-type ${item.type}`}>
                {item.type === "experience" ? "Work" : "Project"}
              </span>
            </div>
          </div>
          
          <span className="timeline-circle"></span>
        </div>
      </Fade>
      
      {/* Duration bar stretches along the full height of the container */}
      <div className="timeline-duration-bar" aria-hidden="true"></div>

      {/* Portal modal for details */}
      {open && ReactDOM.createPortal(
        <div className={`timeline-modal-backdrop ${isDark ? 'dark' : ''}`} onClick={() => setOpen(false)}>
          <div className="timeline-modal" ref={modalRef} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <button className="timeline-modal-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
            <div className="timeline-modal-body">
              {item.logo && (
                <div className="timeline-modal-image">
                  <img src={item.logo} alt={item.org || item.title} />
                </div>
              )}
              <div className="timeline-modal-text">
                <h2>{item.title}</h2>
                {item.org && <h4>{item.org}</h4>}
                <div className="modal-meta">
                  {item.date && <div className="modal-date"><i className="far fa-calendar-alt"></i> {item.date}</div>}
                  {item.location && <div className="modal-location"><i className="fas fa-map-marker-alt"></i> {item.location}</div>}
                </div>
                {item.desc && item.desc.length > 0 && (
                  <div className="modal-desc">
                    {item.desc.map((d, i) => (
                      <p key={i}>{d}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
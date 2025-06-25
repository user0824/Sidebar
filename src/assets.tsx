import React from 'react';

// System Component SVG Icons
export const SystemIcons = {
  'message-queue': () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="20" width="80" height="36" rx="6" fill="#E0F0FF" stroke="#1E88E5" strokeWidth="2"/>
      <circle cx="24" cy="38" r="4" fill="#90CAF9" stroke="#1E88E5" strokeWidth="1"/>
      <circle cx="36" cy="38" r="4" fill="#90CAF9" stroke="#1E88E5" strokeWidth="1"/>
      <circle cx="48" cy="38" r="4" fill="#90CAF9" stroke="#1E88E5" strokeWidth="1"/>
      <circle cx="60" cy="38" r="4" fill="#90CAF9" stroke="#1E88E5" strokeWidth="1"/>
      <circle cx="72" cy="38" r="4" fill="#90CAF9" stroke="#1E88E5" strokeWidth="1"/>
      <line x1="90" y1="38" x2="96" y2="38" stroke="#1E88E5" strokeWidth="2" strokeLinecap="round"/>
      <polygon points="96,38 92,36 92,40" fill="#1E88E5"/>
      <text x="50" y="90" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="#1E88E5">Message Queue</text>
    </svg>
  ),

  'load-balancer': () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fontFamily="Arial, sans-serif">
      <defs>
        <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L6,3 L0,6 Z" fill="#1e78c8" />
        </marker>
      </defs>
      <rect x="20" y="25" width="60" height="30" rx="5" fill="#e6f3ff" stroke="#1e78c8" strokeWidth="2" />
      <line x1="40" y1="32" x2="40" y2="48" stroke="#1e78c8" strokeWidth="1.5" />
      <line x1="50" y1="32" x2="50" y2="48" stroke="#1e78c8" strokeWidth="1.5" />
      <line x1="60" y1="32" x2="60" y2="48" stroke="#1e78c8" strokeWidth="1.5" />
      <line x1="50" y1="10" x2="50" y2="25" stroke="#1e78c8" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
      <line x1="35" y1="55" x2="25" y2="65" stroke="#1e78c8" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
      <line x1="65" y1="55" x2="75" y2="65" stroke="#1e78c8" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
      <text x="50" y="88" fontSize="10" textAnchor="middle" fill="#1e78c8">Load Balancer</text>
    </svg>
  ),

  'api-gateway': () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 15 L70 25 V50 C70 65 50 75 50 75 C50 75 30 65 30 50 V25 Z" fill="#e0f0ff" stroke="#1e6fb8" strokeWidth="2"/>
      <line x1="5" y1="40" x2="30" y2="40" stroke="#1e6fb8" strokeWidth="2" strokeLinecap="round"/>
      <polygon points="30,40 24,36 24,44" fill="#1e6fb8"/>
      <line x1="70" y1="40" x2="95" y2="40" stroke="#1e6fb8" strokeWidth="2" strokeLinecap="round"/>
      <polygon points="95,40 89,36 89,44" fill="#1e6fb8"/>
      <text x="50" y="92" fontFamily="Arial, sans-serif" fontSize="10" textAnchor="middle" fill="#1e6fb8">API Gateway</text>
    </svg>
  ),

  'cdn': () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L6,3 L0,6 Z" fill="#7a45ff" />
        </marker>
      </defs>
      <path d="M35 38c0-6.6 5.4-12 12-12 4.5 0 8.5 2.4 10.6 6 1-.4 2.2-.6 3.4-.6 5 0 9 4 9 9s-4 9-9 9H36c-4.4 0-8-3.6-8-8s3.6-8 8-8z" fill="#e8d9ff" stroke="#7a45ff" strokeWidth="1.5"/>
      <rect x="20" y="55" width="16" height="12" rx="2" fill="#f3ecff" stroke="#7a45ff" strokeWidth="1.5"/>
      <rect x="64" y="55" width="16" height="12" rx="2" fill="#f3ecff" stroke="#7a45ff" strokeWidth="1.5"/>
      <line x1="50" y1="50" x2="28" y2="55" stroke="#7a45ff" strokeWidth="1.5" markerEnd="url(#arrow)"/>
      <line x1="50" y1="50" x2="72" y2="55" stroke="#7a45ff" strokeWidth="1.5" markerEnd="url(#arrow)"/>
      <text x="50" y="90" fontSize="10" textAnchor="middle" fill="#7a45ff" fontFamily="Arial, sans-serif">CDN</text>
    </svg>
  ),

  'dns': () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="#1f77ff"/>
        </marker>
      </defs>
      <circle cx="50" cy="40" r="25" fill="#e6f2ff" stroke="#1f77ff" strokeWidth="2"/>
      <ellipse cx="50" cy="40" rx="12" ry="25" fill="none" stroke="#1f77ff" strokeWidth="1"/>
      <ellipse cx="50" cy="40" rx="25" ry="8" fill="none" stroke="#1f77ff" strokeWidth="1"/>
      <ellipse cx="50" cy="40" rx="18" ry="25" fill="none" stroke="#1f77ff" strokeWidth="1" strokeDasharray="3 2"/>
      <line x1="30" y1="65" x2="70" y2="75" stroke="#1f77ff" strokeWidth="2" markerEnd="url(#arrow)"/>
      <text x="50" y="95" textAnchor="middle" fontSize="11" fontFamily="Arial, sans-serif" fill="#1f77ff">DNS</text>
    </svg>
  ),

  'reverse-proxy': () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="#0277bd" />
        </marker>
      </defs>
      <rect x="35" y="20" width="30" height="40" rx="4" fill="#e0f7ff" stroke="#0277bd" strokeWidth="1.5" />
      <line x1="39" y1="32" x2="61" y2="32" stroke="#0277bd" strokeWidth="1.2" />
      <line x1="39" y1="40" x2="61" y2="40" stroke="#0277bd" strokeWidth="1.2" />
      <circle cx="50" cy="50" r="2" fill="#0277bd" />
      <line x1="5" y1="30" x2="35" y2="30" stroke="#0277bd" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <line x1="5" y1="45" x2="35" y2="45" stroke="#0277bd" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <line x1="65" y1="37.5" x2="95" y2="37.5" stroke="#0277bd" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <rect x="75" y="20" width="18" height="12" rx="2" fill="#e0f7ff" stroke="#0277bd" strokeWidth="1" />
      <rect x="75" y="35" width="18" height="12" rx="2" fill="#e0f7ff" stroke="#0277bd" strokeWidth="1" />
      <rect x="75" y="50" width="18" height="12" rx="2" fill="#e0f7ff" stroke="#0277bd" strokeWidth="1" />
      <text x="50" y="88" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="#000">Reverse Proxy</text>
    </svg>
  ),

  'service-registry': () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      <circle cx="50" cy="35" r="30" fill="none" stroke="#4A90E2" strokeWidth="2"/>
      <g stroke="#4A90E2" strokeWidth="2" strokeLinecap="round">
        <line x1="50" y1="35" x2="20" y2="15"/>
        <line x1="50" y1="35" x2="80" y2="15"/>
        <line x1="50" y1="35" x2="20" y2="55"/>
        <line x1="50" y1="35" x2="80" y2="55"/>
        <line x1="20" y1="15" x2="80" y2="15"/>
        <line x1="20" y1="55" x2="80" y2="55"/>
      </g>
      <g fill="#4A90E2" stroke="#1E5FBF" strokeWidth="1">
        <circle cx="20" cy="15" r="6"/>
        <circle cx="80" cy="15" r="6"/>
        <circle cx="20" cy="55" r="6"/>
        <circle cx="80" cy="55" r="6"/>
        <circle cx="50" cy="35" r="7"/>
      </g>
      <text x="50" y="90" fontFamily="Arial, sans-serif" fontSize="10" textAnchor="middle" fill="#000">Service Registry</text>
    </svg>
  ),

  'circuit-breaker': () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      <rect x="35" y="4" width="30" height="14" rx="2" fill="#E6F2F8" stroke="#0A5275" strokeWidth="2"/>
      <rect x="25" y="18" width="50" height="50" rx="3" fill="#E6F2F8" stroke="#0A5275" strokeWidth="2"/>
      <rect x="35" y="68" width="30" height="14" rx="2" fill="#E6F2F8" stroke="#0A5275" strokeWidth="2"/>
      <circle cx="50" cy="11" r="4" fill="none" stroke="#0A5275" strokeWidth="2"/>
      <circle cx="50" cy="75" r="4" fill="none" stroke="#0A5275" strokeWidth="2"/>
      <line x1="35" y1="28" x2="65" y2="28" stroke="#0A5275" strokeWidth="2" strokeLinecap="round"/>
      <rect x="47" y="36" width="6" height="20" fill="#E6F2F8" stroke="#0A5275" strokeWidth="2"/>
      <rect x="40" y="56" width="20" height="8" fill="#E6F2F8" stroke="#0A5275" strokeWidth="2"/>
      <text x="50" y="96" fontFamily="Arial, sans-serif" fontSize="10" textAnchor="middle" fill="#0A5275">Circuit Breaker</text>
    </svg>
  ),

  'health-check': () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 60 L32 45 C21 36 20 23 29 15 C37 7 48 10 50 20 C52 10 63 7 71 15 C80 23 79 36 68 45 L50 60 Z" fill="#E8F8F5" stroke="#28A745" strokeWidth="2" strokeLinejoin="round"/>
      <polyline points="15 35 30 35 35 28 45 45 60 45" fill="none" stroke="#28A745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="50" y="92" fontSize="10" fontFamily="Arial, sans-serif" textAnchor="middle" fill="#28A745">Health Check</text>
    </svg>
  ),

  'relational-database': () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <defs>
        <style>
          {`.db-stroke { stroke:#F57C00; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; fill:#FFFFFF; }
            .db-line { stroke:#F57C00; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; fill:none; }
            .label { font-family:Arial, sans-serif; font-size:10px; fill:#333333; }`}
        </style>
      </defs>
      <rect className="db-stroke" x="42" y="32" width="16" height="16" rx="3"/>
      <rect className="db-stroke" x="42" y="8" width="16" height="16" rx="3"/>
      <rect className="db-stroke" x="20" y="32" width="16" height="16" rx="3"/>
      <rect className="db-stroke" x="64" y="32" width="16" height="16" rx="3"/>
      <rect className="db-stroke" x="20" y="56" width="16" height="16" rx="3"/>
      <rect className="db-stroke" x="64" y="56" width="16" height="16" rx="3"/>
      <line className="db-line" x1="50" y1="24" x2="50" y2="32"/>
      <line className="db-line" x1="42" y1="40" x2="36" y2="40"/>
      <line className="db-line" x1="58" y1="40" x2="64" y2="40"/>
      <line className="db-line" x1="28" y1="48" x2="28" y2="56"/>
      <line className="db-line" x1="50" y1="48" x2="50" y2="56"/>
      <line className="db-line" x1="50" y1="56" x2="64" y2="56"/>
      <text className="label" x="50" y="90" textAnchor="middle">Relational DB</text>
    </svg>
  ),

  'object-storage': () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="85,50 67.5,80.3 32.5,80.3 15,50 32.5,19.7 67.5,19.7" fill="#1E88E5" stroke="#1565C0" strokeWidth="2"/>
      <g>
        <rect x="35" y="25" width="30" height="40" rx="3" ry="3" fill="#FFFFFF" stroke="#B0BEC5" strokeWidth="1.5"/>
        <polygon points="55,25 65,25 65,35" fill="#90CAF9"/>
        <text x="50" y="45" fontFamily="Arial, sans-serif" fontSize="12" fill="#1E88E5" textAnchor="middle" fontWeight="bold">1 0</text>
        <text x="50" y="60" fontFamily="Arial, sans-serif" fontSize="12" fill="#1E88E5" textAnchor="middle" fontWeight="bold">0 1</text>
      </g>
      <text x="50" y="95" fontFamily="Arial, sans-serif" fontSize="12" fill="#333333" textAnchor="middle">Object Storage</text>
    </svg>
  ),

  'in-memory-cache': () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <path d="M20 20 L80 20 L70 30 L10 30 Z" fill="#B49CEB" stroke="#5E3EA7" strokeWidth="1.5"/>
      <path d="M20 35 L80 35 L70 45 L10 45 Z" fill="#9B7DD6" stroke="#5E3EA7" strokeWidth="1.5"/>
      <path d="M20 50 L80 50 L70 60 L10 60 Z" fill="#7A5BC5" stroke="#5E3EA7" strokeWidth="1.5"/>
      <circle cx="35" cy="25" r="4" fill="#ffffff"/>
      <polygon points="55,21 57,24 60,24 58,26 59,29 55,27 52,29 53,26 51,24 54,24" fill="#ffffff"/>
      <text x="50" y="85" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#333333">In-Memory Cache</text>
    </svg>
  ),

  'message-broker': () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          {`.mq-fill { fill: #e0f7fa; }
            .mq-stroke { stroke: #00796b; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
            .mq-text { fill: #333333; font-family: Arial, sans-serif; font-size: 12px; }`}
        </style>
      </defs>
      <line x1="40" y1="32" x2="40" y2="58" className="mq-stroke" />
      <line x1="40" y1="45" x2="70" y2="30" className="mq-stroke" />
      <line x1="40" y1="45" x2="70" y2="60" className="mq-stroke" />
      <circle cx="40" cy="20" r="12" className="mq-fill mq-stroke" />
      <circle cx="40" cy="45" r="12" className="mq-fill mq-stroke" />
      <circle cx="40" cy="70" r="12" className="mq-fill mq-stroke" />
      <circle cx="70" cy="30" r="10" className="mq-fill mq-stroke" />
      <circle cx="70" cy="60" r="10" className="mq-fill mq-stroke" />
      <text x="50" y="95" textAnchor="middle" className="mq-text">Message Broker</text>
    </svg>
  ),

  'pubsub-event-bus': () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="90" height="70" rx="8" fill="#E3F2FD" stroke="#1E88E5" strokeWidth="1.5"/>
      <circle cx="50" cy="40" r="8" fill="#1E88E5"/>
      <circle cx="50" cy="15" r="5" fill="#1E88E5"/>
      <circle cx="80" cy="40" r="5" fill="#1E88E5"/>
      <circle cx="20" cy="40" r="5" fill="#1E88E5"/>
      <circle cx="50" cy="65" r="5" fill="#1E88E5"/>
      <line x1="50" y1="32" x2="50" y2="20" stroke="#1E88E5" strokeWidth="2"/>
      <line x1="57" y1="40" x2="75" y2="40" stroke="#1E88E5" strokeWidth="2"/>
      <line x1="43" y1="40" x2="25" y2="40" stroke="#1E88E5" strokeWidth="2"/>
      <line x1="50" y1="48" x2="50" y2="60" stroke="#1E88E5" strokeWidth="2"/>
      <text x="50" y="92" fontSize="11" fontFamily="Arial, sans-serif" fill="#000" textAnchor="middle">Pub/Sub Event Bus</text>
    </svg>
  ),

  'distributed-lock-manager': () => (
    <svg width="100" height="120" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="40" r="35" fill="none" stroke="#1E88E5" strokeWidth="1.5" strokeDasharray="3 3"/>
      <g stroke="#1E88E5" strokeWidth="1.5" strokeDasharray="3 3">
        <line x1="50" y1="40" x2="50" y2="5"/>
        <line x1="50" y1="40" x2="80.5" y2="16"/>
        <line x1="50" y1="40" x2="95" y2="40"/>
        <line x1="50" y1="40" x2="80.5" y2="64"/>
        <line x1="50" y1="40" x2="50" y2="75"/>
        <line x1="50" y1="40" x2="19.5" y2="64"/>
        <line x1="50" y1="40" x2="5" y2="40"/>
        <line x1="50" y1="40" x2="19.5" y2="16"/>
      </g>
      <g fill="#757575" stroke="#424242" strokeWidth="1">
        <rect x="46" y="0" width="8" height="8" rx="1"/>
        <rect x="77" y="12" width="8" height="8" rx="1"/>
        <rect x="92" y="36" width="8" height="8" rx="1"/>
        <rect x="77" y="60" width="8" height="8" rx="1"/>
        <rect x="46" y="72" width="8" height="8" rx="1"/>
        <rect x="15" y="60" width="8" height="8" rx="1"/>
        <rect x="0" y="36" width="8" height="8" rx="1"/>
        <rect x="15" y="12" width="8" height="8" rx="1"/>
      </g>
      <g fill="#F57C00" stroke="#BF360C" strokeWidth="1.5">
        <rect x="38" y="27" width="24" height="22" rx="3"/>
        <rect x="42" y="19" width="16" height="12" rx="8" fill="none"/>
        <rect x="47.5" y="34" width="5" height="10" rx="2.5" fill="#FFFFFF" stroke="none"/>
      </g>
      <text x="50" y="110" fontFamily="Arial, sans-serif" fontSize="10" textAnchor="middle" fill="#000000">Distributed Lock Manager</text>
    </svg>
  ),

  'microservice': () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#2e7d32" strokeWidth="1.5" fill="#c8e6c9">
        <polygon points="12,14 20,9 28,14 28,24 20,29 12,24"/>
        <polygon points="42,14 50,9 58,14 58,24 50,29 42,24"/>
        <polygon points="72,14 80,9 88,14 88,24 80,29 72,24"/>
        <polygon points="12,38 20,33 28,38 28,48 20,53 12,48"/>
        <polygon points="42,38 50,33 58,38 58,48 50,53 42,48"/>
        <polygon points="72,38 80,33 88,38 88,48 80,53 72,48"/>
        <polygon points="12,62 20,57 28,62 28,72 20,77 12,72"/>
        <polygon points="42,62 50,57 58,62 58,72 50,77 42,72"/>
        <polygon points="72,62 80,57 88,62 88,72 80,77 72,72"/>
        <line x1="20" y1="29" x2="20" y2="33"/>
        <line x1="20" y1="53" x2="20" y2="57"/>
        <line x1="50" y1="29" x2="50" y2="33"/>
        <line x1="50" y1="53" x2="50" y2="57"/>
        <line x1="80" y1="29" x2="80" y2="33"/>
        <line x1="80" y1="53" x2="80" y2="57"/>
      </g>
      <text x="50" y="95" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fill="#2e7d32">Microservice</text>
    </svg>
  ),

  'event-sourcing-store': () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      <g fill="#FFB74D" stroke="#F57C00" strokeWidth="1.5">
        <g transform="translate(50 40)">
          <path d="M -12.7 -27.2 A 30 30 0 0 1 12.7 -27.2 L 6.3 -13.6 A 15 15 0 0 0 -6.3 -13.6 Z"/>
          <path d="M -12.7 -27.2 A 30 30 0 0 1 12.7 -27.2 L 6.3 -13.6 A 15 15 0 0 0 -6.3 -13.6 Z" transform="rotate(60)"/>
          <path d="M -12.7 -27.2 A 30 30 0 0 1 12.7 -27.2 L 6.3 -13.6 A 15 15 0 0 0 -6.3 -13.6 Z" transform="rotate(120)"/>
          <path d="M -12.7 -27.2 A 30 30 0 0 1 12.7 -27.2 L 6.3 -13.6 A 15 15 0 0 0 -6.3 -13.6 Z" transform="rotate(180)"/>
          <path d="M -12.7 -27.2 A 30 30 0 0 1 12.7 -27.2 L 6.3 -13.6 A 15 15 0 0 0 -6.3 -13.6 Z" transform="rotate(240)"/>
          <path d="M -12.7 -27.2 A 30 30 0 0 1 12.7 -27.2 L 6.3 -13.6 A 15 15 0 0 0 -6.3 -13.6 Z" transform="rotate(300)"/>
        </g>
      </g>
      <text x="50" y="95" fontFamily="Arial, sans-serif" fontSize="11" textAnchor="middle" fill="#333">Event Sourcing Store</text>
    </svg>
  ),

  'monitoring': () => (
    <svg width="90" height="100" viewBox="0 0 90 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="70" height="50" rx="6" ry="6" fill="#e0f7fa" stroke="#00796b" strokeWidth="1.5"/>
      <polyline points="15,55 25,40 35,45 45,25 55,35 65,20 75,35" fill="none" stroke="#004d40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="73" cy="18" r="4" fill="#004d40"/>
      <text x="45" y="92" fontFamily="Arial, sans-serif" fontSize="11" textAnchor="middle" fill="#004d40">Monitoring</text>
    </svg>
  ),

  'dead-letter-queue': () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="70" height="50" rx="6" ry="6" fill="#fdecea" stroke="#c9302c" strokeWidth="1.5" />
      <rect x="25" y="25" width="22" height="8" rx="2" ry="2" fill="#ffffff" stroke="#c9302c" strokeWidth="1" />
      <rect x="25" y="35" width="22" height="8" rx="2" ry="2" fill="#ffffff" stroke="#c9302c" strokeWidth="1" />
      <rect x="25" y="45" width="22" height="8" rx="2" ry="2" fill="#ffffff" stroke="#c9302c" strokeWidth="1" />
      <circle cx="65" cy="40" r="10" fill="#ffffff" stroke="#c9302c" strokeWidth="1.5" />
      <line x1="60" y1="35" x2="70" y2="45" stroke="#c9302c" strokeWidth="1.5" />
      <line x1="70" y1="35" x2="60" y2="45" stroke="#c9302c" strokeWidth="1.5" />
      <line x1="50" y1="67" x2="50" y2="78" stroke="#c9302c" strokeWidth="1.5" />
      <polyline points="46,74 50,78 54,74" fill="none" stroke="#c9302c" strokeWidth="1.5" />
      <text x="50" y="94" fontFamily="Arial, sans-serif" fontSize="10" fill="#333333" textAnchor="middle">Dead Letter Queue</text>
    </svg>
  ),

  'sharding': () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L6,3 L0,6 Z" fill="#CC6600"/>
        </marker>
      </defs>
      <rect x="30" y="15" width="40" height="20" rx="2" ry="2" fill="#FFD9B3" stroke="#CC6600" strokeWidth="1.5"/>
      <rect x="5" y="55" width="25" height="20" rx="2" ry="2" fill="#FFD9B3" stroke="#CC6600" strokeWidth="1.5"/>
      <rect x="37.5" y="55" width="25" height="20" rx="2" ry="2" fill="#FFD9B3" stroke="#CC6600" strokeWidth="1.5"/>
      <rect x="70" y="55" width="25" height="20" rx="2" ry="2" fill="#FFD9B3" stroke="#CC6600" strokeWidth="1.5"/>
      <line x1="50" y1="35" x2="17.5" y2="55" stroke="#CC6600" strokeWidth="1.5" markerEnd="url(#arrow)"/>
      <line x1="50" y1="35" x2="50" y2="55" stroke="#CC6600" strokeWidth="1.5" markerEnd="url(#arrow)"/>
      <line x1="50" y1="35" x2="82.5" y2="55" stroke="#CC6600" strokeWidth="1.5" markerEnd="url(#arrow)"/>
      <text x="50" y="93" fontFamily="Arial, sans-serif" fontSize="10" textAnchor="middle" fill="#000000">Sharding / Partitioning</text>
    </svg>
  ),

  'replication-controller': () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L6,3 L0,6 Z" fill="#2e7d32"/>
        </marker>
      </defs>
      <rect x="15" y="15" width="25" height="35" rx="4" fill="#e0f2e9" stroke="#2e7d32" strokeWidth="1.5"/>
      <rect x="60" y="15" width="25" height="35" rx="4" fill="#e0f2e9" stroke="#2e7d32" strokeWidth="1.5"/>
      <circle cx="25" cy="25" r="2" fill="#2e7d32" />
      <circle cx="35" cy="25" r="2" fill="#2e7d32" />
      <circle cx="25" cy="35" r="2" fill="#2e7d32" />
      <circle cx="35" cy="35" r="2" fill="#2e7d32" />
      <circle cx="70" cy="25" r="2" fill="#2e7d32" />
      <circle cx="80" cy="25" r="2" fill="#2e7d32" />
      <circle cx="70" cy="35" r="2" fill="#2e7d32" />
      <circle cx="80" cy="35" r="2" fill="#2e7d32" />
      <line x1="40" y1="32.5" x2="60" y2="32.5" stroke="#2e7d32" strokeWidth="1.5" markerStart="url(#arrow)" markerEnd="url(#arrow)"/>
      <text x="50" y="85" fontFamily="Arial, sans-serif" fontSize="11" textAnchor="middle" fill="#000">Replication Controller</text>
    </svg>
  ),

  'backup-restore': () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE5CC"/>
          <stop offset="100%" stopColor="#FFC999"/>
        </linearGradient>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6 Z" fill="#E67E22" />
        </marker>
      </defs>
      <ellipse cx="30" cy="30" rx="20" ry="8" fill="url(#grad)" stroke="#E67E22" strokeWidth="1.5"/>
      <rect x="10" y="30" width="40" height="25" fill="url(#grad)" stroke="#E67E22" strokeWidth="1.5"/>
      <ellipse cx="30" cy="55" rx="20" ry="8" fill="url(#grad)" stroke="#E67E22" strokeWidth="1.5"/>
      <ellipse cx="70" cy="55" rx="20" ry="8" fill="url(#grad)" stroke="#E67E22" strokeWidth="1.5"/>
      <rect x="50" y="55" width="40" height="25" fill="url(#grad)" stroke="#E67E22" strokeWidth="1.5"/>
      <ellipse cx="70" cy="80" rx="20" ry="8" fill="url(#grad)" stroke="#E67E22" strokeWidth="1.5"/>
      <path d="M40 40 C60 40 65 50 70 55" fill="none" stroke="#E67E22" strokeWidth="2" markerEnd="url(#arrow)"/>
      <path d="M60 65 C40 65 35 57 30 55" fill="none" stroke="#E67E22" strokeWidth="2" markerEnd="url(#arrow)"/>
      <circle cx="50" cy="50" r="6" fill="#FFFFFF" stroke="#E67E22" strokeWidth="1.5"/>
      <line x1="50" y1="50" x2="50" y2="47" stroke="#E67E22" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="50" y1="50" x2="53" y2="50" stroke="#E67E22" strokeWidth="1.5" strokeLinecap="round"/>
      <text x="50" y="95" fontFamily="Arial, sans-serif" fontSize="10" textAnchor="middle" fill="#333">Backup &amp; Restore</text>
    </svg>
  ),

  'vulnerability-scanner': () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 120">
      <path d="M50 10 L80 25 V55 C80 75 65 90 50 95 C35 90 20 75 20 55 V25 Z" fill="#f5f5f5" stroke="#555" strokeWidth="1.5"/>
      <g transform="translate(34,35)">
        <circle cx="10" cy="10" r="6" fill="#d9534f" stroke="#922" strokeWidth="1"/>
        <line x1="4" y1="4" x2="16" y2="4" stroke="#922" strokeWidth="1"/>
        <line x1="4" y1="16" x2="16" y2="16" stroke="#922" strokeWidth="1"/>
        <line x1="2" y1="8" x2="2" y2="12" stroke="#922" strokeWidth="1"/>
        <line x1="18" y1="8" x2="18" y2="12" stroke="#922" strokeWidth="1"/>
      </g>
      <g transform="translate(55,55)">
        <circle cx="0" cy="0" r="18" fill="none" stroke="#1e90ff" strokeWidth="2"/>
        <line x1="12" y1="12" x2="22" y2="22" stroke="#1e90ff" strokeWidth="2" strokeLinecap="round"/>
      </g>
      <text x="50" y="110" fontFamily="Arial, sans-serif" fontSize="10" textAnchor="middle" fill="#333">Vulnerability Scanner</text>
    </svg>
  ),

  'firewall': () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="15" width="60" height="40" rx="3" ry="3" fill="#e6f0ff" stroke="#1e90ff" strokeWidth="1.5"/>
      <line x1="20" y1="25" x2="80" y2="25" stroke="#1e90ff" strokeWidth="1"/>
      <line x1="20" y1="35" x2="80" y2="35" stroke="#1e90ff" strokeWidth="1"/>
      <line x1="40" y1="15" x2="40" y2="55" stroke="#1e90ff" strokeWidth="1"/>
      <line x1="60" y1="15" x2="60" y2="55" stroke="#1e90ff" strokeWidth="1"/>
      <path d="M50 30 L60 35 L60 50 C60 60 50 65 50 65 C50 65 40 60 40 50 L40 35 Z" fill="#b3ccff" stroke="#1e90ff" strokeWidth="1.5"/>
      <rect x="46" y="43" width="8" height="8" rx="1" fill="none" stroke="#1e90ff" strokeWidth="1.2"/>
      <path d="M49 43 v-3 a3 3 0 0 1 6 0 v3" fill="none" stroke="#1e90ff" strokeWidth="1.2"/>
      <text x="50" y="90" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#000">Firewall</text>
    </svg>
  ),

  'data-encryption': () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      <rect x="20" y="15" width="60" height="50" rx="3" ry="3" fill="#e8f3ff" stroke="#1a73e8" strokeWidth="2"/>
      <line x1="30" y1="28" x2="70" y2="28" stroke="#1a73e8" strokeWidth="2"/>
      <line x1="30" y1="37" x2="70" y2="37" stroke="#1a73e8" strokeWidth="2"/>
      <line x1="30" y1="46" x2="70" y2="46" stroke="#1a73e8" strokeWidth="2"/>
      <rect x="35" y="40" width="30" height="30" rx="4" ry="4" fill="#cce0ff" stroke="#1a73e8" strokeWidth="2"/>
      <path d="M42 40 v-8 a8 8 0 0 1 16 0 v8" fill="none" stroke="#1a73e8" strokeWidth="2"/>
      <circle cx="50" cy="55" r="4" fill="none" stroke="#1a73e8" strokeWidth="2"/>
      <line x1="50" y1="59" x2="50" y2="64" stroke="#1a73e8" strokeWidth="2"/>
      <text x="50" y="90" fontSize="10" fontFamily="Arial, sans-serif" fill="#1a73e8" textAnchor="middle">Data Encryption</text>
    </svg>
  ),

  'authorization': () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 15 L30 25 L30 45 C30 60 50 70 50 70 C50 70 70 60 70 45 L70 25 Z" fill="#e6f2ff" stroke="#0066cc" strokeWidth="2" strokeLinejoin="round"/>
      <polyline points="40,38 48,46 60,32" fill="none" stroke="#0066cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="75" cy="40" r="6" fill="#b3d1ff" stroke="#0066cc" strokeWidth="2"/>
      <line x1="75" y1="31" x2="75" y2="25" stroke="#0066cc" strokeWidth="2" strokeLinecap="round"/>
      <line x1="75" y1="55" x2="75" y2="49" stroke="#0066cc" strokeWidth="2" strokeLinecap="round"/>
      <line x1="66" y1="40" x2="60" y2="40" stroke="#0066cc" strokeWidth="2" strokeLinecap="round"/>
      <line x1="90" y1="40" x2="84" y2="40" stroke="#0066cc" strokeWidth="2" strokeLinecap="round"/>
      <text x="50" y="92" fontFamily="Arial, sans-serif" fontSize="10" fill="#003366" textAnchor="middle">Authorization / RBAC</text>
    </svg>
  ),

  'authentication': () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      <rect x="15" y="15" width="70" height="50" rx="6" ry="6" fill="#E8F5E9" stroke="#2E7D32" strokeWidth="2"/>
      <g stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <rect x="40" y="35" width="20" height="16" rx="2" ry="2" fill="#FFFFFF"/>
        <path d="M45 35 V29 a5 5 0 0 1 10 0 v6"/>
        <circle cx="50" cy="43" r="2"/>
      </g>
      <circle cx="30" cy="55" r="4" fill="none" stroke="#2E7D32" strokeWidth="2"/>
      <circle cx="70" cy="55" r="4" fill="none" stroke="#2E7D32" strokeWidth="2"/>
      <text x="50" y="92" fontFamily="Arial, sans-serif" fontSize="10" textAnchor="middle" fill="#2E7D32">Auth Service</text>
    </svg>
  ),

  'traffic-analysis': () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      <circle cx="20" cy="30" r="8" fill="#e6f2ff" stroke="#0077cc" strokeWidth="2"/>
      <circle cx="80" cy="30" r="8" fill="#e6f2ff" stroke="#0077cc" strokeWidth="2"/>
      <circle cx="20" cy="60" r="8" fill="#e6f2ff" stroke="#0077cc" strokeWidth="2"/>
      <line x1="28" y1="30" x2="72" y2="30" stroke="#0077cc" strokeWidth="2" strokeLinecap="round"/>
      <line x1="20" y1="38" x2="20" y2="52" stroke="#0077cc" strokeWidth="2" strokeLinecap="round"/>
      <line x1="28" y1="30" x2="60" y2="60" stroke="#0077cc" strokeWidth="2" strokeLinecap="round"/>
      <line x1="20" y1="60" x2="60" y2="60" stroke="#0077cc" strokeWidth="2" strokeLinecap="round"/>
      <line x1="80" y1="30" x2="60" y2="60" stroke="#0077cc" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="60" cy="60" r="12" fill="none" stroke="#444" strokeWidth="2"/>
      <line x1="68" y1="68" x2="78" y2="78" stroke="#444" strokeWidth="2" strokeLinecap="round"/>
      <text x="50" y="92" fontFamily="Arial, sans-serif" fontSize="10" textAnchor="middle" fill="#000">Traffic Analysis</text>
    </svg>
  ),

  'endpoint-detection': () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      <rect x="20" y="20" width="60" height="40" rx="4" fill="#e6f2ff" stroke="#1e7ed6" strokeWidth="1.5"/>
      <line x1="50" y1="60" x2="50" y2="70" stroke="#1e7ed6" strokeWidth="1.5"/>
      <rect x="40" y="70" width="20" height="4" fill="#e6f2ff" stroke="#1e7ed6" strokeWidth="1.5"/>
      <circle cx="60" cy="35" r="8" fill="none" stroke="#1e7ed6" strokeWidth="1.5"/>
      <line x1="65" y1="40" x2="72" y2="47" stroke="#1e7ed6" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M56 33 L58 35 L62 30" fill="none" stroke="#1e7ed6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M30 30 q-5 5 0 10" fill="none" stroke="#1e7ed6" strokeWidth="1"/>
      <path d="M25 25 q-8 8 0 16" fill="none" stroke="#1e7ed6" strokeWidth="1"/>
      <text x="50" y="90" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#1e7ed6">Endpoint Detection</text>
    </svg>
  ),

  'intrusion-detection': () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      <line x1="10" y1="45" x2="35" y2="45" stroke="#2a7de1" strokeWidth="1.5"/>
      <circle cx="10" cy="45" r="3" fill="#2a7de1"/>
      <line x1="65" y1="45" x2="90" y2="45" stroke="#2a7de1" strokeWidth="1.5"/>
      <circle cx="90" cy="45" r="3" fill="#2a7de1"/>
      <path d="M50 25 L65 30 L65 45 C65 60 50 70 50 70 C50 70 35 60 35 45 L35 30 Z" fill="#e6f2ff" stroke="#2a7de1" strokeWidth="2"/>
      <line x1="50" y1="38" x2="50" y2="54" stroke="#2a7de1" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="50" cy="60" r="2" fill="#2a7de1"/>
      <text x="50" y="88" fontFamily="Arial, sans-serif" fontSize="10" textAnchor="middle" fill="#000">IDS</text>
    </svg>
  ),

  'realtime-dashboard': () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="80" height="55" rx="4" fill="#e6f2ff" stroke="#1e78c8" strokeWidth="1.5"/>
      <circle cx="16" cy="16" r="3" fill="#30c030" stroke="#1e78c8" strokeWidth="1"/>
      <rect x="25" y="45" width="6" height="15" fill="#1e78c8"/>
      <rect x="35" y="35" width="6" height="25" fill="#1e78c8"/>
      <rect x="45" y="50" width="6" height="10" fill="#1e78c8"/>
      <polyline points="20,40 30,35 40,45 60,30" fill="none" stroke="#1e78c8" strokeWidth="1.5"/>
      <circle cx="20" cy="40" r="2" fill="#1e78c8"/>
      <circle cx="30" cy="35" r="2" fill="#1e78c8"/>
      <circle cx="40" cy="45" r="2" fill="#1e78c8"/>
      <circle cx="60" cy="30" r="2" fill="#1e78c8"/>
      <line x1="60" y1="20" x2="75" y2="20" stroke="#1e78c8" strokeWidth="1.5"/>
      <polygon points="75,20 70,16 70,24" fill="#1e78c8"/>
      <text x="50" y="88" fontSize="10" fontFamily="Arial, sans-serif" textAnchor="middle" fill="#1e78c8">Realtime Dashboard</text>
    </svg>
  ),

  'incident-management': () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fontFamily="Arial, sans-serif">
      <rect x="20" y="18" width="60" height="60" rx="5" ry="5" fill="#f9f9f9" stroke="#333" strokeWidth="1.5"/>
      <rect x="37" y="10" width="26" height="10" rx="2" ry="2" fill="#d1d1d1" stroke="#333" strokeWidth="1.2"/>
      <circle cx="50" cy="48" r="16" fill="#ff6666" stroke="#c0392b" strokeWidth="1.5"/>
      <line x1="50" y1="38" x2="50" y2="52" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="50" cy="57" r="2.5" fill="#fff"/>
      <path d="M70 25c0-4-3-7-7-7s-7 3-7 7c0 5-3 7-3 7h20s-3-2-3-7z" fill="#ffae42" stroke="#d17a00" strokeWidth="1.2"/>
      <circle cx="63" cy="35" r="2" fill="#ffae42" stroke="#d17a00" strokeWidth="1"/>
      <text x="50" y="92" fontSize="10" textAnchor="middle" fill="#333">Incident Management</text>
    </svg>
  ),

  'log-management': () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      <rect x="10" y="25" width="18" height="14" rx="2" fill="#f5f5f5" stroke="#555" strokeWidth="1.5"/>
      <line x1="13" y1="29" x2="25" y2="29" stroke="#999" strokeWidth="1"/>
      <line x1="13" y1="33" x2="25" y2="33" stroke="#999" strokeWidth="1"/>
      <rect x="41" y="5" width="18" height="14" rx="2" fill="#f5f5f5" stroke="#555" strokeWidth="1.5"/>
      <line x1="44" y1="9" x2="56" y2="9" stroke="#999" strokeWidth="1"/>
      <line x1="44" y1="13" x2="56" y2="13" stroke="#999" strokeWidth="1"/>
      <rect x="72" y="25" width="18" height="14" rx="2" fill="#f5f5f5" stroke="#555" strokeWidth="1.5"/>
      <line x1="75" y1="29" x2="87" y2="29" stroke="#999" strokeWidth="1"/>
      <line x1="75" y1="33" x2="87" y2="33" stroke="#999" strokeWidth="1"/>
      <ellipse cx="50" cy="40" rx="18" ry="6" fill="#C8E6C9" stroke="#388E3C" strokeWidth="1.5"/>
      <rect x="32" y="40" width="36" height="20" fill="#C8E6C9" stroke="#388E3C" strokeWidth="1.5"/>
      <ellipse cx="50" cy="60" rx="18" ry="6" fill="#C8E6C9" stroke="#388E3C" strokeWidth="1.5"/>
      <line x1="28" y1="32" x2="32" y2="50" stroke="#555" strokeWidth="1.5"/>
      <polygon points="32,50 27,47 27,53" fill="#555"/>
      <line x1="50" y1="19" x2="50" y2="40" stroke="#555" strokeWidth="1.5"/>
      <polygon points="50,40 46,35 54,35" fill="#555"/>
      <line x1="72" y1="32" x2="68" y2="50" stroke="#555" strokeWidth="1.5"/>
      <polygon points="68,50 73,47 73,53" fill="#555"/>
      <text x="50" y="90" fontFamily="Arial, sans-serif" fontSize="10" textAnchor="middle" fill="#000">Log Management</text>
    </svg>
  ),

  'apm': () => (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fontFamily="Arial, sans-serif">
      <rect x="20" y="15" width="60" height="40" rx="4" ry="4" fill="#e6f0ff" stroke="#1e78ff" strokeWidth="1.5"/>
      <line x1="50" y1="55" x2="50" y2="65" stroke="#1e78ff" strokeWidth="1.5"/>
      <rect x="40" y="65" width="20" height="4" rx="2" ry="2" fill="#e6f0ff" stroke="#1e78ff" strokeWidth="1.5"/>
      <polyline points="26,45 34,35 45,40 55,28 62,32 72,22" fill="none" stroke="#1e78ff" strokeWidth="1.5"/>
      <circle cx="70" cy="35" r="8" fill="none" stroke="#1e78ff" strokeWidth="1.5"/>
      <line x1="75" y1="40" x2="82" y2="47" stroke="#1e78ff" strokeWidth="1.5"/>
      <text x="50" y="93" fontSize="11" textAnchor="middle" fill="#1e78ff">APM</text>
    </svg>
  ),
};
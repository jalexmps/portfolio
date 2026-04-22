const studies = {
  nosid: {
    label: 'NOS ID · Authentication',
    title: 'NOS ID — Authentication Redesign',
    subtitle: 'Redesigning the single sign-on platform gating all NOS digital products — turning a broken, trust-eroding registration flow into a seamless passwordless experience.',
    role: 'Lead Product Designer',
    timeline: '2019 – Ongoing',
    team: 'Designer, PM, Engineering, Security',
    tags: ['UX Redesign', 'Authentication', 'Security UX'],
    challenge: 'NOS ID is the single sign-on platform gating all NOS digital products — apps, account management, TV. Only 1 in 4 users who started signup actually completed it. Analytics showed drop-offs at multiple points; users found the flow confusing, untrustworthy, and poorly adapted for non-technical users.',
    approach: 'Started with deep analytics review to map drop-offs, followed by qualitative sessions. Three design principles guided everything: clarity at every step, trust signals throughout, and progressive disclosure. Deliberate anti-enumeration UX patterns were designed in close collaboration with the security team.',
    body: [
      'The core challenge was to redesign authentication to dramatically improve completion rates while introducing a modern passwordless login method alongside the existing password flow.',
      'Authentication methods designed included a passwordless flow (primary) using a one-time code to email or phone, a password-based flow (secondary), and social login via Apple, Google, and Facebook. The signup flow was reduced to 5 clear steps: Create account → Validate phone → Enter SMS code → Set password → Success.',
      'Security UX was a critical layer — deliberate anti-enumeration patterns prevent user enumeration attacks, built in close collaboration with the security team. The same flows were adapted for desktop at 1360×768, maintaining full visual consistency.'
    ],
    metrics: [
      { value: '95%', label: 'Registration success' },
      { value: '+70pp', label: 'Absolute improvement' },
      { value: '1M+', label: 'Users impacted' },
      { value: '2', label: 'Auth methods designed' }
    ]
  },
  nosnet: {
    label: 'NOS Net · Mobile App',
    title: 'NOS Net — App Experience Redesign',
    subtitle: 'Transforming a 1.3-star engineering tool into the top-rated app in the NOS portfolio by designing around real user needs, plain language, and confidence-building flows.',
    role: 'Lead Product Designer',
    timeline: '2020 – Ongoing',
    team: 'Designer, PM, Flutter Engineering',
    tags: ['UX Research', 'Mobile App', 'Web'],
    challenge: 'NOS Net is a router management app. Ratings were 1.0–1.3 stars when the project started. The original app was built by engineers for engineers: technical jargon, dark UI, and journeys that assumed deep technical knowledge. Average users felt they might break their internet connection. Overcoming engineering resistance through research was as much a part of the project as the design itself.',
    approach: 'Analytics and user research identified the most-used features — users wanted easy Wi-Fi password changes and router resets. Access Control was a surprise hit for parents, but too complex to use. Shadow research and usability testing guided every design decision.',
    body: [
      'The homepage was redesigned around network status first, since users open the app at setup or when something is wrong. It transforms to show a troubleshooting CTA when issues are detected. Wi-Fi management now shows the password upfront, with advanced configurations behind a secondary CTA.',
      'Access Control was renamed to plain Portuguese ("Gerir acessos") and redesigned as a 3-step rule creator — name, schedule, select devices — requiring no MAC address or firewall knowledge. The redesigned "More" tab groups secondary features to keep the main navigation clean.',
      'The entire experience was designed within Flutter constraints — a single codebase for both app and web. An HTML/CSS background helped avoid handoff friction and ensured the design system held up across platforms.'
    ],
    metrics: [
      { value: '4.7★', label: 'App store rating' },
      { value: '#1', label: 'Top-rated NOS app' },
      { value: '2', label: 'Platforms (app & web)' }
    ]
  },
  carbon: {
    label: 'CARBON · Internal Platform',
    title: 'CARBON — Unified BackOffice Platform',
    subtitle: 'Sole designer unifying 12+ disconnected internal tools into one platform — replacing Excel workflows and multi-tool processes with purpose-built, research-backed experiences.',
    role: 'Lead Product Designer (Sole Designer)',
    timeline: '2021 – Ongoing',
    team: '1 Designer, 20+ Engineers',
    tags: ['Design Systems', 'Internal Platform', 'B2B'],
    challenge: 'NOS Inovação had accumulated disconnected BackOffice tools — each with its own access control, UI patterns, and workflows. Teams were managing operations using outdated tools, SurveyMonkey, and critically — Excel files. Manual data copying and hand-assembled reports were the norm. The first BackOffice had no brief, no documentation, and no one who could explain the system.',
    approach: 'Shadow research was the primary method — spending several days sitting behind agents handling real live support calls, followed by structured team interviews. Every BackOffice, every component, and every design decision was made solo across more than 20 concurrent development workstreams.',
    body: [
      'Carbon VIP was designed for speed under pressure. VIP agents were juggling 3 separate tools per support call. A Jira-inspired Kanban homepage shows upcoming, today\'s, and closed tickets — auto-updating by due date. The create ticket flow replaced the entire multi-tool process with 3 steps: enter client NIF → auto-fetch full profile, add issue details and book a technician, then log the origin and submit.',
      'Carbon Pilotos replaced NOS\'s pilot programme toolchain — SurveyMonkey, Excel dashboards, manual tester lists, and one-by-one email reports — with a purpose-built platform. Features include real-time campaign dashboards, auto-generated NPS and C-SAT scoring, automated tester selection based on services and activity rate, and one-click campaign communications.',
      'CARBON taught me how to design under ambiguity, how to build systems that scale, and how to work as a design partner rather than just a visual resource. It remains the most complex and rewarding project of my career to date.'
    ],
    metrics: [
      { value: '12+', label: 'BackOffices unified' },
      { value: '2×', label: 'Faster workflows (VIP)' },
      { value: '0', label: 'Excel files still needed' },
      { value: '1', label: 'Access aggregator' }
    ]
  }
};

function openCaseStudy(id) {
  const study = studies[id];
  if (!study) return;

  const overlay = document.getElementById('cs-overlay');

  document.getElementById('overlay-title').textContent = study.title;
  document.getElementById('overlay-subtitle').textContent = study.subtitle;
  document.getElementById('overlay-label').textContent = study.label;
  document.getElementById('overlay-role').textContent = study.role;
  document.getElementById('overlay-timeline').textContent = study.timeline;
  document.getElementById('overlay-team').textContent = study.team;

  const tagsEl = document.getElementById('overlay-tags');
  tagsEl.innerHTML = study.tags.map(t => `<span class="overlay-tag">${t}</span>`).join('');

  document.getElementById('overlay-challenge').textContent = study.challenge;
  document.getElementById('overlay-approach').textContent = study.approach;

  const bodyEl = document.getElementById('overlay-body-text');
  bodyEl.innerHTML = study.body.map(p => `<p>${p}</p>`).join('');

  const metricsEl = document.getElementById('overlay-metrics');
  metricsEl.innerHTML = study.metrics.map(m => `
    <div class="metric">
      <span class="metric-value">${m.value}</span>
      <span class="metric-label">${m.label}</span>
    </div>
  `).join('');

  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  overlay.scrollTop = 0;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.classList.add('visible');
    });
  });
}

function closeCaseStudy() {
  const overlay = document.getElementById('cs-overlay');
  overlay.classList.remove('visible');
  overlay.setAttribute('aria-hidden', 'true');

  setTimeout(() => {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }, 450);
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const overlay = document.getElementById('cs-overlay');
    if (overlay.classList.contains('active')) closeCaseStudy();
  }
});

document.querySelectorAll('.case-card').forEach(card => {
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.click();
    }
  });
});

// Central theme config — reference these values in JS where needed.
// All actual styling uses the CSS variables in index.css.

export const SITE = {
  name: 'Somaiya Debating Society',
  shortName: 'SDS',
  established: 2020,
  session: new Date().getFullYear(),
  tagline: 'A community of thinkers, speakers, and competitors dedicated to the art and discipline of formal debate.',
  email: 'debsoc@somaiya.edu',
  phone: '+91 98765 43210',
  location: 'K.J. Somaiya College of Engineering, Vidyavihar, Mumbai 400077',
  instagram: 'https://instagram.com/somaiya.debate',
  linkedin: 'https://linkedin.com/company/somaiya-debating-society',
  whatsapp: 'https://chat.whatsapp.com/placeholder',
  joinFormUrl: 'https://forms.google.com/placeholder',
  contactFormEmail: 'debsoc@somaiya.edu',
};

export const STATS = [
  { value: '5+',   label: 'Years Active',  numericEnd: 5 },
  { value: '150+', label: 'Members',        numericEnd: 150 },
  { value: '20+',  label: 'Tournaments',    numericEnd: 20 },
  { value: '12',   label: 'Awards Won',     numericEnd: 12 },
];

// Marginalia — tier-to-accent CSS variable map (committee accent reassignment)
export const TIER_ACCENTS = {
  leadership: { var: '--color-brass',   label: 'Council',          bg: 'rgba(184,134,11,0.09)',  border: 'rgba(184,134,11,0.25)' },
  debate:     { var: '--color-oxblood', label: 'Executive Team',   bg: 'rgba(110,20,35,0.07)',   border: 'rgba(110,20,35,0.2)' },
  creatives:  { var: '--color-rose',    label: 'Creatives',        bg: 'rgba(122,92,110,0.07)',  border: 'rgba(122,92,110,0.2)' },
  pr:         { var: '--color-brass',   label: 'PR and Marketing', bg: 'rgba(184,134,11,0.07)',  border: 'rgba(184,134,11,0.2)' },
  logistics:  { var: '--color-teal',    label: 'Logistics',        bg: 'rgba(27,77,77,0.07)',    border: 'rgba(27,77,77,0.2)' },
  mentors:    { var: '--color-sage',    label: 'Mentors',          bg: 'rgba(91,110,77,0.07)',   border: 'rgba(91,110,77,0.2)' },
};

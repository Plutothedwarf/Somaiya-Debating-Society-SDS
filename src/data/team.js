// Static team data — replace with real members and photos.
// tier specifies the category, isHead specifies if they are the head of a department.

export const team = [
  // Leadership
  { id: 1, name: 'Anustha Dahal', role: 'Co-Council Head', bio: 'KJ Somaiya College of Arts and Commerce', tier: 'leadership', avatar: null },
  { id: 100, name: 'Atharva Gunde', role: 'Co-Council Head', bio: 'KJ Somaiya School of Engineering', tier: 'leadership', avatar: null },

  // Executive
  { id: 2, name: 'Atharva Gunde', role: 'Executive Head', bio: 'KJ Somaiya School of Engineering', tier: 'executive', isHead: true, avatar: null },
  { id: 3, name: 'Aadi Bhatt', role: 'Executive Member', bio: 'KJ Somaiya School of Engineering', tier: 'executive', avatar: null },
  { id: 4, name: 'Abhipsha Mishra', role: 'Executive Member', bio: 'KJ Somaiya College of Arts and Commerce', tier: 'executive', avatar: null },

  // Creatives
  { id: 5, name: 'Prarthavi Satra', role: 'Creatives Head', bio: 'Somaiya School of Basic and Applied Sciences', tier: 'creatives', isHead: true, avatar: null },
  { id: 6, name: 'Avani Shah', role: 'Creatives Member', bio: 'KJ Somaiya College of Arts and Commerce', tier: 'creatives', avatar: null },
  { id: 7, name: 'Saukhya Kadam', role: 'Creatives Member', bio: 'Dr. Shantilal K Somaiya School of Commerce and Business Studies', tier: 'creatives', avatar: null },
  { id: 8, name: 'Laksh Gadge', role: 'Creatives Member', bio: 'Dr. Shantilal K Somaiya School of Commerce and Business Studies', tier: 'creatives', avatar: null },
  { id: 9, name: 'Satchit Singh', role: 'Creatives Member', bio: 'KJ Somaiya School of Engineering', tier: 'creatives', avatar: null },

  // PR and Marketing
  { id: 10, name: 'Abhinav Baghel', role: 'PR and Marketing Head', bio: 'KJ Somaiya College of Arts and Commerce', tier: 'pr', isHead: true, avatar: null },
  { id: 11, name: 'Pavan Rawal', role: 'PR and Marketing Head', bio: 'Dr. Shantilal K Somaiya School of Commerce and Business Studies', tier: 'pr', isHead: true, avatar: null },
  { id: 12, name: 'Anushka Shah', role: 'PR and Marketing Member', bio: 'Somaiya School of Humanities and Social Science', tier: 'pr', avatar: null },
  { id: 13, name: 'Bhavya Thakkar', role: 'PR and Marketing Member', bio: 'Dr. Shantilal K Somaiya School of Commerce and Business Studies', tier: 'pr', avatar: null },
  { id: 14, name: 'Jiya Dighe', role: 'PR and Marketing Member', bio: 'Somaiya School of Humanities and Social Science', tier: 'pr', avatar: null },
  { id: 15, name: 'Pratistha Bagchi', role: 'PR and Marketing Member', bio: 'Dr. Shantilal K Somaiya School of Commerce and Business Studies', tier: 'pr', avatar: null },
  { id: 16, name: 'Vihaan Patil', role: 'PR and Marketing Member', bio: 'KJ Somaiya School of Engineering', tier: 'pr', avatar: null },

  // Logistics
  { id: 17, name: 'Vinit Patil', role: 'Logistics Head', bio: 'KJ Somaiya School of Engineering', tier: 'logistics', isHead: true, avatar: null },
  { id: 18, name: 'Dhruvi Maloo', role: 'Logistics Head', bio: 'Dr. Shantilal K Somaiya School of Commerce and Business Studies', tier: 'logistics', isHead: true, avatar: null },
  { id: 19, name: 'Akanksha Jha', role: 'Logistics Member', bio: 'KJ Somaiya College of Science and Commerce', tier: 'logistics', avatar: null },
  { id: 20, name: 'Neel Vaidya', role: 'Logistics Member', bio: 'SK Somaiya College of Arts, Science and Commerce', tier: 'logistics', avatar: null },
  { id: 21, name: 'Priyansh Jain', role: 'Logistics Member', bio: 'KJ Somaiya College of Science and Commerce', tier: 'logistics', avatar: null },
  { id: 22, name: 'Swaymshiv Pawar', role: 'Logistics Member', bio: 'KJ Somaiya School of Engineering', tier: 'logistics', avatar: null },

  // Mentors
  { id: 23, name: 'Chinmay Parate', role: 'Mentor', bio: 'KJ Somaiya School of Engineering', tier: 'mentors', avatar: null },
  { id: 24, name: 'Snehal Ghagas', role: 'Mentor', bio: 'KJ Somaiya School of Engineering', tier: 'mentors', avatar: null },
];

export const TIERS = [
  { key: 'leadership', label: 'Leadership', type: 'flat' },
  { key: 'executive', label: 'Executive Team', type: 'department' },
  { key: 'creatives', label: 'Creatives', type: 'department' },
  { key: 'pr', label: 'PR and Marketing', type: 'department' },
  { key: 'logistics', label: 'Logistics', type: 'department' },
  { key: 'mentors', label: 'Mentors', type: 'flat' },
];

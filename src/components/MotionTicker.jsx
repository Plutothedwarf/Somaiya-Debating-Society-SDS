const TICKER_ITEMS = [
  'SOMAIYA DEBATING SOCIETY',
  'SPEAK UP',
  'SPEAK YOUR TRUTH',
  'SOMAIYA INVITATIONAL 2025',
  'ROAR LOUDER',
  'KJ SOMAIYA COLLEGE',
  'शब्दों में ताकत है',
  'DEBATE · ARGUE · WIN',
  'VIDYAVIHAR MUMBAI',
  'बोलो, बदलो',
];

export default function MotionTicker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="motion-ticker" style={{ marginTop: '12px' }} aria-hidden="true" role="presentation">
      <div className="motion-ticker__track">
        {doubled.map((item, i) => (
          <span key={i} className="motion-ticker__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <section>
      <h2>Connecting People Across Faiths & Interests</h2>
      <p>Connecting people of all faiths through events and community support.</p>
      <button onClick={() => navigate('/events')}>Explore Events</button>
    </section>
  );
}
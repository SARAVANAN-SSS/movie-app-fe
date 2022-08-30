import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

export function Home() {

  const history = useHistory();

  return (
    <div className="home">
      <h1>Welcome to Movie Reviewing World</h1>
      <p>Here we help people to decide which Movies to watch by showing them the Ratings & Reviews, and Here's the interesting part , you can also Provide the Ratings & Reviews of the movies that you have watched. </p>
      <Button onClick={()=>{history.push("/movies")}} color="info">Click Here to Check Ratings and Reviews of Movies</Button>
      <Button onClick={()=>{history.push("/movie/add")}} color="info">Click Here to Rate and Review your Favorite Movies</Button>
    </div>
  );
}

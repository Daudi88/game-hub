import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailer, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const first = trailer?.results[0];
  if (!first) return null;

  return <video src={first.data.max} poster={first.preview} controls />;
};

export default GameTrailer;

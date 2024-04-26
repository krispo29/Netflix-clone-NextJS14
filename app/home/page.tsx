import MovieVideo from "../components/MovieVideo";
import RecentlyAdd from "../components/RecentlyAdd";

export default function Homepage() {
  return (
    <div className="p-5 lg:p-0">
      <MovieVideo />
      <h1 className="text-3xl font-bold">Recently Add</h1>
      <RecentlyAdd />
    </div>
  );
}

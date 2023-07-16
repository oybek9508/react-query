import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperheroes = () => axios.get("http://localhost:4000/superheroes");
const RQSuperHeroes = () => {
	const { isLoading, data, isError, error, isFetching, isRefetching } =
		useQuery("super-heroes", fetchSuperheroes);

	console.log("isLoading, isFetching", { isLoading, isFetching });
	// console.log("isReFetching", isRefetching);

	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	if (isError) {
		return <h2>{error.message}</h2>;
	}
	return (
		<div>
			<h3>RQSuperHeroes</h3>
			{data.data.map((d) => (
				<div key={d.id}>{d.name}</div>
			))}
		</div>
	);
};

export default RQSuperHeroes;

import DataTable from "../DataTable";
import SearchForm from "../SearchForm";

function Main({ users }) {
	return (
		<>
			<SearchForm />
			<DataTable></DataTable>
			<div className="card">
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					{users.map((user) => (
						<p className="card-text">
							{" "}
							{user.name.first} {user.name.last}{" "}
						</p>
					))}
				</div>
			</div>
		</>
	);
}

export default Main;

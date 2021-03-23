import { useContext } from "react";
import SearchContext from "../../utils/searchContext";

function SearchForm({ searchState, handleInputChange }) {
	const context = useContext(SearchContext);
	return (
		<form className="form-group">
			<div className="input-group mb-3">
				<input
					id="searchName"
					type="text"
					className="form-control"
					placeholder="Search by name"
					aria-label=""
					aria-describedby="button-addon"
					value={searchState}
					onChange={handleInputChange}
				/>
				<div className="input-group-append">
					<button
						id="search-btn"
						className="btn btn-outline-secondary btn-primary"
						type="submit"
						id="button-addon"
						onClick={(event) => context.handleSearch(event)}
					>
						<i class="fas fa-search" id="search-icon"></i>
					</button>
				</div>
			</div>
		</form>
	);
}

export default SearchForm;

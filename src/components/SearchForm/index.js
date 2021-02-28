function SearchForm() {
	return (
		<form class="form-group">
			<div class="input-group mb-3">
				<input
					id=""
					type="text"
					className="form-control"
					placeholder="Search by name"
					aria-label=""
					aria-describedby="button-addon"
				/>
				<div class="input-group-append">
					<button
						id="search-btn"
						className="btn btn-outline-secondary btn-primary"
						type="submit"
						id="button-addon"
					>
						<i class="fas fa-search" id="search-icon"></i>
					</button>
				</div>
			</div>
		</form>
	);
}

export default SearchForm;

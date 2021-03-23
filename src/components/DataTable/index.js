function DataTable({ users }) {
	return (
		<div className="datatable">
			<table className="table table-hover">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">img</th>
						<th scope="col">name</th>
						<th scope="col">email</th>
						<th scope="col">phone</th>
					</tr>
				</thead>
				<tbody>
					{users.length > 0 ? (
						users.map((user, i) => {
							return (
								<tr>
									<th scope="row"> {i + 1} </th>
									<td>
										<img src={user.picture.thumbnail} />
									</td>
									<td>
										{user.name.first} {user.name.last}
									</td>
									<td>{user.email}</td>
									<td>{user.phone}</td>
								</tr>
							);
						})
					) : (
						<tr>
							<th scope="row">1</th>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
							<td>dfgdfgdg</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}

export default DataTable;

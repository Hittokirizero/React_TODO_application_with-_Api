import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<ul className="list-group">
				<li className="list-group-item active">
					<h1>Todo List</h1>
				</li>
				<li className="list-group-item">
					<div class="input-group mb-3">
						<input
							type="text"
							className="form-control"
							placeholder="Recipient's username"
							aria-label="Recipient's username"
							aria-describedby="basic-addon2"
						/>
						<div className="input-group-append">
							<button
								className="btn btn-outline-secondary"
								type="button">
								Button
							</button>
						</div>
					</div>
				</li>
				<li className="list-group-item">Morbi leo risus</li>
			</ul>
		</div>
	);
}

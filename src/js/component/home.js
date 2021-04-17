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
					<div className="input-group mb-3">
						<input
							type="text"
							className="form-control"
							placeholder="Add Task Name"
							aria-label="Add Task Name"
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

				<li className="list-group-item">
					<div class="row">
						<div className="col-10">
							<h1>Tareas</h1>
						</div>
						<div className="col-2">
							<button
								className="btn btn-outline-secondary float-right"
								type="button">
								<i className="fas fa-times"></i>
							</button>
						</div>
					</div>
				</li>

				<li className="list-group-item"></li>
				<li className="list-group-item list-group-item-action list-group-item-dark">
					Task number
				</li>
			</ul>
		</div>
	);
}

import React, { useState } from "react";

//create your first component
export function Home() {
	let [task, setTask] = useState("");
	const [taskLists, setTaskLists] = useState([]);

	const update = e => {
		setTask(e.target.value);
	};

	const add_Task = () => {
		if (task !== "") {
			const taskDetails = {
				id: Math.floor(Math.random() * 1000),
				value: task
			};

			setTaskLists([...taskLists, taskDetails]);
			console.log(taskLists);
		}
	};

	const delete_Task = (e, id) => {
		e.preventDefault();
		setTaskLists(taskLists.filter(t => t.id !== id));
	};

	const count = () => {
		if (taskLists.length == 0) {
			return "0";
		} else {
			return <str>{taskLists.length}</str>;
		}
	};

	return (
		<div className="d-flex justify-content-center">
			<div className="text-center mt-5">
				<ul className="list-group">
					<li className="list-group-item active">
						<h1>Todo List</h1>
					</li>

					<li className="list-group-item">
						<div className="input-group mb-3">
							<input
								onChange={e => update(e)}
								className="form-control"
								placeholder="Add Task"
								aria-label="Add Task"
								aria-describedby="basic-addon2"
							/>
							<div className="input-group-append">
								<button
									className="btn btn-outline-secondary"
									type="button"
									onClick={add_Task}>
									Add Task
								</button>
							</div>
						</div>
					</li>
					{taskLists !== [] ? (
						<div>
							{taskLists.map(t => (
								<li key={t.value} className="list-group-item ">
									{t.value + " - "}
									<button
										className="btn btn-outline-secondary float-right-center"
										type="button"
										onClick={e => delete_Task(e, t.id)}>
										<i className="fas fa-times"></i>
									</button>
								</li>
							))}
						</div>
					) : null}

					<li className="list-group-item"></li>
					<li className="list-group-item list-group-item-action list-group-item-dark">
						Task number {count()}
					</li>
				</ul>
			</div>
		</div>
	);
}

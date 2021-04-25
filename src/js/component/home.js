import React, { useState, useEffect } from "react";

//create your first component
export function Home() {
	let [task, setTask] = useState("");
	const [taskLists, setTaskLists] = useState([]);
	useEffect(() => {
		fetching();
	}, []);

	const update = e => {
		setTask(e.target.value);
	};

	const add_Task = () => {
		let API_todo = [...taskLists, { label: task, done: false }];

		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify(API_todo);

		fetch("https://assets.breatheco.de/apis/fake/todos/user/ZeroCR", {
			method: "PUT",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		})
			.then(response => response.json())
			.then(data => fetching())
			.catch(error => console.log("error", error));
	};

	const fetching = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/ZeroCR", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				if (!resp.ok) {
					throw Error(resp.statusText);
				}
				return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				console.log(data); //this will print on the console the exact object received from the server
				setTaskLists(data);
			})
			.catch(error => {
				//error handling
				console.log("ha ocurrido un error", error);
			});
	};
	fetching();

	const delete_Task = e => {
		e.preventDefault();

		var raw = "";
		fetch("https://assets.breatheco.de/apis/fake/todos/user/ZeroCR", {
			method: "DELETE",
			body: raw,
			redirect: "follow"
		})
			.then(response => response.json())
			.then(data => setTaskLists([data]))
			.catch(error => console.log("error", error));
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
								<li key={t.data} className="list-group-item ">
									{t.label + " - "}
									<button
										className="btn btn-outline-secondary float-right-center"
										type="button"
										onClick={e => delete_Task(e)}>
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

window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_el=document.createElement('div');
		task_el.classList.add("task");

		const task_content_el = document.createElement('div');
		task_content_el.classList.add("content");

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add("text");
		task_input_el.type="text";
		task_input_el.value=task;
		task_input_el.setAttribute("readonly", "readonly");  //can't edit only read

		task_content_el.appendChild(task_input_el);
		
     	const actions_el = document.createElement("div");
		actions_el.classList.add("actions");

		const button_edit = document.createElement("button");
		button_edit.classList.add("edit");
		button_edit.innerText="Edit";

		const button_delete = document.createElement("button");
		button_delete.classList.add("delete");
		button_delete.innerText="Delete";

		actions_el.appendChild(button_edit);
		actions_el.appendChild(button_delete);

		task_el.appendChild(actions_el);

		list_el.appendChild(task_el);

		input.value="";

		button_edit.addEventListener('click', (e)=> {
			if(button_edit.innerText.toLowerCase() == "edit") {
				task_input_el.removeAttribute("readonly");
                task_input_el.focus();
				button_edit.innerText="Save";
			}
			else{
				task_input_el.setAttribute("readonly", "readonly");
				button_edit.innerText="Edit";
			}
		});
       button_delete.addEventListener('click', ()=> {
		list_el.removeChild(task_el);
		
	   })
	});

});
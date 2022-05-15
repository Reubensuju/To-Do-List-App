window.addEventListener('load', () => {

    // Variables
    const list_el = document.querySelector("#tasks");
    var id_count = 0;

    // Get the tasks in database
    db.collection("task_list").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            const id = `${doc.id}`;
            console.log(id);
            
            const task = doc.data().task;
            console.log(task);

            const task_el = document.createElement("div");
            task_el.classList.add("task");

            const task_content_el = document.createElement("div");
            task_content_el.classList.add("content");

            task_el.appendChild(task_content_el);

            const task_input_el = document.createElement("input");
            task_input_el.classList.add("text");
            task_input_el.type = "text";
            task_input_el.value = task;
            task_input_el.setAttribute("readonly", "readonly");

            task_content_el.appendChild(task_input_el);

            const task_actions_el = document.createElement("div");
            task_actions_el.classList.add("actions");

            const task_edit_el = document.createElement("button");
            task_edit_el.classList.add("edit");
            task_edit_el.innerHTML = "Edit";

            const task_delete_el = document.createElement("button");
            task_delete_el.classList.add("delete");
            task_delete_el.innerHTML = "Delete";

            task_actions_el.appendChild(task_edit_el);
            task_actions_el.appendChild(task_delete_el);

            task_el.appendChild(task_actions_el);

            list_el.appendChild(task_el);

            task_edit_el.addEventListener('click', () => {
                if(task_edit_el.innerText.toLowerCase() == "edit") {
                    task_input_el.removeAttribute("readonly");
                    task_input_el.focus();
                    task_edit_el.innerText = "Save";
                } else {
                    task_input_el.setAttribute("readonly", "readonly");
                    task_edit_el.innerText = "Edit";

                    //Updating Database
                    db.collection("task_list").doc(id).update({
                        task: task_input_el.value
                    });
                }
            });

            task_delete_el.addEventListener('click', () => {
                list_el.removeChild(task_el);

                db.collection("task_list").doc(id).delete().then(() => {
                    console.log("Document successfully deleted!");
                }).catch((error) => {
                    console.error("Error removing document: ", error);
                });
            });
            
        });
    });
});
//  let students = [];
    const form = document.getElementById('farmm');
    const tableBody = document.getElementById('tablebody');

let students = JSON.parse(localStorage.getItem("students")) || [];




renderTable();




    form.addEventListener('submit',function(e)
{
  e.preventDefault();
    const name = document.getElementById('stdnam').value.trim();
     const rollno = document.getElementById('stdroll').value.trim();
      const id = document.getElementById('stdid').value.trim();
       const clss= document.getElementById('cls').value.trim();

    //    console.log("buttonn clickek");
students.push({name,rollno,id,clss});
//  form.reset();




  localStorage.setItem("students", JSON.stringify(students));


    renderTable();
     form.reset();

})


   function renderTable() {
        tableBody.innerHTML = '';
        students.forEach((student, index) => {
            const row = document.createElement('tr');
    
            row.innerHTML = `
                <td>${student.name}</td>
                <td>${student.rollno}</td>
                <td>${student.clss}</td>
                <td>${student.id}</td>
                <td>
                    <button class="edit-btn" onclick="editStudent(${index})">Edit</button>
                    <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }


    
    function deleteStudent(index) {
        if (confirm("Are you sure you want to delete this student?")) {
            students.splice(index, 1);
            renderTable();
        }
    }

    function editStudent(index) {
        const student = students[index];
        document.getElementById('stdnam').value = student.name;
        document.getElementById('stdid').value = student.id;
        document.getElementById('stdroll').value = student.rollno;
        document.getElementById('cls').value = student.clss;

        students.splice(index, 1); // Remove the old entry before editing
        renderTable();
    }

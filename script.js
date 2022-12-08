// setting up variables
let add = document.querySelector(".add");
let no_task_mes = document.querySelector(".no_task_mes");
let input = document.querySelector("input");
let all_items = document.querySelector(".all_items");
let delete_btn= document.querySelector(".delete");
let task_count= document.querySelector(".task_stats .task_count span");
let task_complated= document.querySelector(".task_complated .task_count span");


//#####################  focus  ################################################
// to make  focus automatic on input field
window.onload=function(){
    input.focus();
    create_no_message()
}
//#####################################################################


//################### add new element ########################################################
add.onclick = function () {
/////// if input is empty 
    if (input.value === ' '|| input.value === '' ||input.value === '  ')  {
        swal("you must add text in your task!");
        // swal is like alart but is very beautiful
        // ^^^^^sweet alert^^^^^^^^

    } else {
        let no_task_mes = document.querySelector(".no_task_mes");
        // check if the message exist to- or not -------->>>> to remove it
        if (document.body.contains(no_task_mes)) {
            
            //////// remove no task message
            no_task_mes.remove();
        }
        // if not make this check is make error while working beacause this item may be sometime note exist

        ///////// create new div 
        let new_item =document.createElement("div")
        new_item.className="item"       
        
        /////// // create delete button.
        let button =document.createElement("button")
        button.className="delete"
        let text = document.createTextNode("delete")
        button.appendChild(text)
        
        new_item.appendChild(button);
        new_item.append(input.value);   
        // add task to the container
        all_items.appendChild(new_item);

        // check_repeate() $$$$$$$$$$$$$$4
        // console.log(`input.value = ${input.value}`)

        // empty the input field at end
        input.value=" ";
        // focus on input field again
        input.focus();

        calculate_task()
    
    }


}
//#####################################################################

//#################  delete ####################################################
// what differ between the onclick and addEventListener    !!!!!!!!!
// we use (( addEventListener ))if we need to add click event in element not exits in acually page 
// so we not able to add click event in the html page 
document.addEventListener("click",function (e) {
    if (e.target.className == "delete") {
        // delete are in "span" inside my task container  so i need its parant whic is my task that need to delete it
        e.target.parentNode.remove();
        calculate_task() 
        // check number of task in container  
        if (all_items.childElementCount == 0) {
            create_no_message()
        }
    }
    // finishing tasks task
    // it better to use "contain" if your element has or we be will have more than one classname
    // it better than classname = "amal"####### bad_l
    if (e.target.classList.contains("item")) {
    e.target.classList.toggle("finished");
    // toggel is meanin add classname if not_exist remove it if exist 

    calculate_task();
    console.log("finished")
    }
})
//#####################################################################


//#####################  function to calculate all task  ################################################
//function to calculate all task
function calculate_task() {

let task_countt= document.querySelectorAll(".all_items .item").length;
let task_complatedd= document.querySelectorAll(".all_items .finished").length;

task_count.innerHTML=task_countt;
task_complated.innerHTML=task_complatedd;

}
//#####################################################################


//########################## create_no_message  ###########################################
function create_no_message() {
//create message span element
let message = document.createElement("span");
//create  text message  
let text = document.createTextNode("no tasks to show ");
// add text to message span element
message.appendChild(text)
// add class to message span element
message.className="no_task_mes"

all_items.appendChild(message)

} 
//#####################################################################


//#########################  check_repeate   not finished ^^^^^^  ############################################
// //function to check repeate in task  $$$$$$$$$$$ not finished 
// function check_repeate() {
//     let task_countt= document.querySelectorAll(".all_items .item").length;
//     for (let i = 0; i < task_countt; i++) {
//         let item= document.querySelectorAll(".item")[i];
//         // console.log(`item.innerHTML = ${item.textContent.length}`)
//         console.log(`input.value = ${input.value}`)
//         console.log(`item  = ${item.textContent }`)
//         console.log("====")
//         console.log(item)

//         if (item.innerHTML ==input.value ) {
//             console.log("====")
//             return true;
            
//         }
//         // console.log(item)
        
//     }
// }
//###############################################################t######

// my funture task
1
// use sweet alart done**###
// check if task is exist 
// create delete all button
// create finished all button
// add to task to local storage
// 
// 
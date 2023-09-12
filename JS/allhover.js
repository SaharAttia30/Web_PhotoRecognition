
async function whatClass() {
    const input = document.getElementById("imageInput");
    const file = input.files[0];
    const formData = new FormData();
    formData.append("image", file);
    let response = await fetch('http://localhost:3000/', {
        method: 'POST',
        body: formData
    })
    var myJSON_Text = await response.text();
    let is_swear_arr_res = myJSON_Text.split(',');
    return is_swear_arr_res;
}

async function sendImage() {
    my_arr = ["airplane", "car", "bird", "cat", "deer", "dog", "frog", "horse", "ship", "truck"]
    my_arr_cars = ["audi", "BMW", "Chevrolet", "Dodge", "Ford", "Honda", "Hyundai", "Jeep","Nissan", "Toyota"]
    let is_swear_arr_res = await whatClass();
    console.log(is_swear_arr_res);
    const res = document.getElementById("result");
    var cartype = "";
    if (is_swear_arr_res[0] == 1) {
        cartype = my_arr_cars[is_swear_arr_res[1]];
        res.innerText = "in the picture we see a " + my_arr[is_swear_arr_res[0]] + " \n\nIt looks like a car, the car type is " + cartype;
    }
    else {
        res.innerText = "in the picture we see a " + my_arr[is_swear_arr_res[0]];
    }
}

var loadFile = function (event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};
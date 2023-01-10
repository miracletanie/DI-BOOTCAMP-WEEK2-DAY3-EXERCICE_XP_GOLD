let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina",
  };
  //Prompt the student for their name.
  let studentName = prompt("Please enter your name");
  
  if (studentName in guestList) {
      console.log("Hi ! I'm " + studentName + " is in " + guestList[studentName]);
  }else {
      console.log("Hi ! I'm a guest.")
  }
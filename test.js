const arr = [
  {
    id: 1,
    name: "Asad",
  },
  {
    id: 2,
    name: "raza",
  },
  {
    id: 2,
    name: "raza",
  },
];

const res = []

arr.forEach(value=>{
  const groupExist= arr.find(group=>{
    group.id==value.id
  })
  if(groupExist)
  {
    res.push(value);
  }
  else{
    res.push(value);
  }
})




console.log("res = ", res);

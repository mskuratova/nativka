  const tlID_1 = "34435544"
  const tlID_2 = "848474893"

  const todoLists = [
    {id:tlID_1, title:"What to learn" , filter: "all" },
    {id:tlID_2, title:"What to buy" , filter: "all" },
]

  const tasks ={[tlID_1]:[
      {name:"HTML", isDone:true}, {name: "Redux", isDone: false}
  ],
      [tlID_2]:[
          {},{}
      ]}

  let number =[23, 45, 35, 78, 56, 98]

  console.log(number.reduce((acc,el) => acc+el, 0))
  console.log(number.reduce((acc, el) => acc > el ? acc : el))

  let students = [
      {
          name: "Bob",
          age: 22,
          isMarried: true,
          scores: 85
      },
      {
          name: "Alex",
          age: 21,
          isMarried: true,
          scores: 89
      },
      {
          name: "Nick",
          age: 20,
          isMarried: false,
          scores: 120
      },{
          name: "John",
          age: 19,
          isMarried: false,
          scores: 100
      }
  ];

 function findAlex(acc, el)  {
     if (el.name ==="Alex"){
         acc= el
  }
     return acc
 }

 console.log(students.reduce(findAlex, null))

  function getBestStudent(acc, el) {
     if(el.scores >=100){
         acc.push(el)
     }
     return acc
  }

  console.log(students.reduce(getBestStudent,[]))

  function addScores(acc,el) {
     acc.push({...el, scores: el.scores + 10})
      return acc
  }

  console.log(students.reduce(addScores, []))
// Your code here

const createEmployeeRecord = (root) => {
    return {
      firstName: root[0],
      familyName: root[1],
      title:root[2],
      payPerHour:root[3],
      timeInEvents: [],
      timeOutEvents: []
    }
  }

  const createEmployeeRecords = (records) => {
    return records.map((some) => {
        return createEmployeeRecord(some)
      })
    // const employees = [];
    // arrays.map(item => {
    //     employees.push(createEmployeeRecord(item))
    // })

    // return employees;
  }

  //adds a time in event wnen provided employees record and data/time
  const createTimeInEvent = (array, dateObj) => {
    // const fullYear = dateObj;
    // const [date, year] = dateObj.split(' ')
    const year = dateObj.slice(0,10);
    const hour = dateObj.slice(-4)

    const time = {
        type: "TimeIn",
        date: year,
        hour: parseInt(hour)
    }


    let updateRecord = createEmployeeRecord(array);
    updateRecord.timeInEvents.push(time)

    return updateRecord
    // employee.timeInEvents.push({
    //     type:"TimeIn",
    //     hour: parseInt(time),
    //     date: date
    // }) 

  }

  //adds timeout event to an employees record when provided employees record and date/time
  const createTimeOutEvent = (employee, dateTime) => {
    // const [date, time] = dateTime.split('')
    const date = dateTime.slice(0,10)
    const time = dateTime.slice(-4)
    employee.timeOutEvents.push({
        type:"TimeOut",
        hour: parseInt(time),
        date: date
    })
    return employee
  }

  const hoursWorkedOnDate = (employee, findDate) => {
    let setDate = employee.timeInEvents.find(variab => {
        return variab.date === findDate
    })
    let outDate = employee.timeInEvents.find(variab => {
        return variab.date === findDate
    })

    return (outDate.hour - setDate.hour) / 100
  }
//   console.log(hoursWorkedOnDate())


  const wagesEarnedOnDate = (dateSet, obj) => {
    const rate = dateSet.payPerHour
    const hoursWorked = hoursWorkedOnDate(dateSet, obj)
    return rate * hoursWorked

  }


  const calculatePayroll = (record) => {
    const total = []
    record.map(obj => {
        const rec = obj
        const totTime = rec.timeInEvents
        totTime.map(singTimeIn => {
            const intDate = singTimeIn.date
            total.push(wagesEarnedOnDate(rec, intDate))
        })
    })
    const reduced = (preVal, curentVal) => preVal + curentVal
    const totalPay = total.reduce(reduced)
    return totalPay

  }

//   bpRecord = "2014-02-28 1400"
//   console.log(bpRecord.split(' '))
// console.log(createTimeInEvent(["Alvin", 3 ]))
// console.log(createEmployeeRecords(["Gray", "Worm", "Security", 1],));

// context stuff
// const contextReturner = () => {
//     return this
//     return this.location.host // for chrome
// }
// console.log(contextReturner())
/*Explicit describes something that is very clear and without 
vagueness or ambiguity. Implicit often functions as 
the opposite, referring to something that is understood, 
but not described clearly or directly, and often using 
implication or assumption.*/ 

const looseyGoosey = () => {
    return this
}
console.log(looseyGoosey())

const noInferringAllowed = () => {
    "use strict"
    return this
}
console.log(noInferringAllowed())

//             Explicit

const asgardianBrothers =  [

        {
            firstName: "Thor",
            familyName: "Odinsson"
        },
        {
            firstName: "Loki",
            familyName: "Laufeysson-Odinsson"
        }

]
const intr = (person, line) => {
    return `${person.firstName} ${person.familyName} says: ${line}`
}

const phrase = "Loki is killed by Thanos"
console.log(intr(asgardianBrothers[0], phrase))
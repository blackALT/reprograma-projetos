const employees = require("../model/employees");
const fs = require("fs");

const getAllEmployees = (req, res) => {
  console.log(req.url);
  employees.find(function (err, employees){
  if (err) {
      res.status(500).send({ message: err.message })
      } else {
      res.status(200).send(employees)
      }
  })
}

const postEmployees = (req, res) => {
  console.log(req.body);
  employees.countDocuments((err, count) => {
    if (err) {
        res.status(424).send({message: err.message});
    } else {
        let employee = new employees(req.body);
        employee.id = count +1;
        employee.save(function (err) {
            if (err) {
                res.status(500).send({ message: err.message })
            } else {
                res.status(201).send({
                    message: "Funcionário cadastrado com sucesso",
                    status: "true"
                });
            }
        });
    }
});
};

  const deleteEmployee = (req, res) => {
    const id = req.params.id
    employees.deleteMany({ id}, function (err, employees){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(201).send({
            message: "Funcionário excluido com sucesso",
            status: "true"
        })
        }
    })
  };

  const getEmployeeById = (req, res) => {
    const id = req.params.id;
    employees.find({ id }, function (err, employees) {
      if (err) {
        res.status(500).send({ message: err.message })
      } else {
        res.status(200).send(employees);
      }
    })
}

/*
3 - Para os funcionários, crie um método em que será possível a atualização do campo Nome utilizando o método HTTP PUT.

4 - Para os funcionários, crie um método em que será possível a atualização do campo Nome utilizando o método HTTP PATCH.
*/

const putEmployees = (req, res) => {
  const id = req.params.id
  employees.updateMany({ id },{ $set: req.body },{ upsert: true },function (err) {
      if (err) { 
          res.status(500).send(err) 
      } else { 
          res.status(200).send({ 
              mensagem: "Funcionário atualizado com sucesso!" 
          }) 
      }
  })
}

const patchEmployees = (req, res) => {
  const id = req.params.id;
  const updateEmployee = req.body;
  console.log(updateEmployee)

  try {
    const employeeToUpdate = employees.find((employee) => employee.id == id);

    Object.keys(updateEmployee).forEach((key) => {
      employeeToUpdate[key] = updateEmployee[key]
    })

  fs.writeFile("./src/model/employees.json", JSON.stringify(employees), 'utf8', function(err) {
    if (err) {
      return res.status(424).send({ message: err });
    }
    console.log("Funcionário atualizado com sucesso!");
  });

  res.status(201).send(employees);
  } catch (err) {
    return res.status(424).send({ message: err });
  }
}

module.exports = {
    getAllEmployees,
    postEmployees,
    deleteEmployee,
    getEmployeeById,
    putEmployees,
    patchEmployees
}
// import { advisersData } from "./advisersAll.js";
const { advisersData } = require("./advisersAll.js");

const express = require("express");
const app = express();

app.use(express.json());

const advisers = {
  advisers: [
    {
      week: 1,
      asigned: [
        {
          id: 123456789,
          name: "Wilmer Perez",
          cargo: "Gestor de servicios I",
          buttons: ["Postular", "Botón 2"],
        },
        {
          id: 223456789,
          name: "Andres Perez",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 323456789,
          name: "Felipe Perez",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
      ],
    },
    {
      week: 2,
      asigned: [
        {
          id: 123456789,
          name: "Juan ",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan ",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan ",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
      ],
    },
    {
      week: 3,
      asigned: [
        {
          id: 123456789,
          name: "Juan Perez",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan Perez",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan Perez",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
      ],
    },
    {
      week: 4,
      asigned: [
        {
          id: 123456789,
          name: "Juan ",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan ",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan ",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
      ],
    },
    {
      week: 5,
      asigned: [
        {
          id: 123456789,
          name: "Juan Perez soza",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan Perez",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan Perez",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
      ],
    },
    {
      week: 6,
      asigned: [
        {
          id: 123456789,
          name: "Juan ",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan ",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan ",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
      ],
    },
    {
      week: 7,
      asigned: [
        {
          id: 123456789,
          name: "Juan Perez",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan Perez",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan Perez",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
      ],
    },
    {
      week: 8,
      asigned: [
        {
          id: 123456789,
          name: "Juan ",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan ",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan ",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
      ],
    },
    {
      week: 9,
      asigned: [
        {
          id: 123456789,
          name: "Juan Perez",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan Perez",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan Perez",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
      ],
    },
    {
      week: 10,
      asigned: [
        {
          id: 123456789,
          name: "Juan ",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan ",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan ",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
      ],
    },
    {
      week: 11,
      asigned: [
        {
          id: 123456789,
          name: "Juan Perez",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan Perez",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan Perez",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
      ],
    },
    {
      week: 12,
      asigned: [
        {
          id: 123456789,
          name: "Juan ",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan ",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan ",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
      ],
    },
    {
      week: 13,
      asigned: [
        {
          id: 123456789,
          name: "Juan Perez",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan Perez",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan Perez",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
      ],
    },
    {
      week: 14,
      asigned: [
        {
          id: 123456789,
          name: "Juan ",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan ",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan ",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
      ],
    },
    {
      week: 15,
      asigned: [
        {
          id: 123456789,
          name: "Juan Perez",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan Perez",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan Perez",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
      ],
    },
    {
      week: 16,
      asigned: [
        {
          id: 123456789,
          name: "Juan ",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan ",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
        {
          id: 123456789,
          name: "Juan ",
          cargo: "Gestor de servicios I",
          buttons: ["Botón 1", "Botón 2"],
        },
      ],
    },
  ],
};

console.log(advisers);
// [
//   // { id: 1, name: "wilmer", age: 20, email: "wavaron@rrr.com.co" },
//   // { id: 2, name: "Juan", age: 20, email: "jjvaron@rrr.com.co" },
//   // { id: 3, name: "Santiago", age: 20, email: "dsvaron@rrr.com.co" },
// ];

app.get("/", (req, res) => {
  res.send("Api ok Calendar ");
});

app.get("/api/advisers", (req, res) => {
  res.send(advisers);
  console.log(res);
});

app.get("/api/advisers/:id", (req, res) => {
  const adviser = advisers.find((c) => c.id === parseInt(req.params.id));
  if (!adviser) return res.status(404).send("No encontrado");
  else res.send(adviser);
});

app.post("/api/advisers", (req, res) => {
  const adviser = {
    id: advisers.length + 1,
    name: req.body.name,
    age: parseInt(req.body.age),
    email: req.body.email,
  };
  advisers.push(adviser);
  res.send(adviser);
});

app.delete("/api/advisers/:id", (req, res) => {
  const adviser = advisers.find((c) => c.id === parseInt(req.params.id));
  if (!adviser) return res.status(404).send("No encontrado");

  const index = advisers.indexOf(adviser);
  advisers.splice(index, 1);
  res.send(adviser);
});

const port = process.env.PORT || 80;
app.listen(port, () => console.log("Arriba puerto 80"));

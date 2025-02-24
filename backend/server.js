const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());


let items = [
  {
    id: 1, 
    student: {
      first_name: "Isabella",
      last_name: "Simpson"
    },
    meeting_point: "",
    date: "",
    status: "Recherche de place"
  },
  {
    id: 2,
    student: {
      first_name: "Franziska",
      last_name: "Schmidt"
    },
    meeting_point: "Martigues-B",
    date: "2023-06-16T14:00:00Z",
    status: "Confirmé"
  },
  {
    id: 3,
    student: {
      first_name: "Lucas",
      last_name: "Rousseau"
    },
    meeting_point: "",
    date: "",
    status: "A organiser"
  },
  {
    id: 4,
    student: {
      first_name: "Léo",
      last_name: "Chevalier"
    },
    meeting_point: "Martigues-B",
    date: "2023-05-26T13:00:00Z",
    status: "Annulé"
  },
  {
    id: 5,
    student: {
      first_name: "Raphaël",
      last_name: "Bernard"
    },
    meeting_point: "",
    date: "",
    status: "Recherche de place"
  },
  {
    id: 6,
    student: {
      first_name: "Thibault",
      last_name: "Vincent"
    },
    meeting_point: "",
    date: "",
    status: "A organiser"
  },
  {
    id: 7,
    student: {
      first_name: "Olivia",
      last_name: "Jacques"
    },
    meeting_point: "",
    date: "2023-06-16T00:00:00Z",
    status: "Annulé"
  }
];

app.get('/api/exams', (req, res) => {
  res.json(items);
});


app.post('/api/exams', (req, res) => {
  const { student, meeting_point, date, status } = req.body;

  if (!student || !student.first_name || !student.last_name || !status) {
    return res.status(400).json({ error: "Tous les champs obligatoires doivent être fournis" });
  }

  const newExam = {
    id: items.length + 1,
    student,
    meeting_point: meeting_point || "",
    date: date || "",
    status
  };

  items.push(newExam);
  res.status(201).json(newExam);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

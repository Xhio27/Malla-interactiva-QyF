// Lista de todos los ramos con su semestre, color y correlativos
const ramos = [
  { nombre: "Química general I", color: "turquesa", semestre: 1, abre: ["Química General II", "Química Orgánica I"] },
  { nombre: "Biología celular", color: "turquesa", semestre: 1, abre: ["Morfología"] },
  { nombre: "Elementos de algebra y calculo", color: "turquesa", semestre: 1, abre: ["Física"] },
  { nombre: "Introducción a las ciencias farmacéuticas", color: "verde-pastel", semestre: 1, abre: [] },
  { nombre: "Habilidades comunicativas", color: "naranja-pastel", semestre: 1, abre: ["Ingles I"] },

  { nombre: "Química General II", color: "turquesa", semestre: 2, abre: ["Química analítica", "Fisicoquímica aplicada"] },
  { nombre: "Química Orgánica I", color: "turquesa", semestre: 2, abre: ["Química Orgánica II"] },
  { nombre: "Morfología", color: "turquesa", semestre: 2, abre: ["Fisiología Humana"] },
  { nombre: "Física", color: "turquesa", semestre: 2, abre: ["Fisicoquímica aplicada"] },
  { nombre: "Ingles I", color: "naranja-pastel", semestre: 2, abre: ["Ingles II"] },

  { nombre: "Fisicoquímica aplicada", color: "verde-pastel", semestre: 3, abre: ["Farmacocinética y Biofarmacia"] },
  { nombre: "Química Orgánica II", color: "turquesa", semestre: 3, abre: ["Bioquímica general y laboratorio", "Farmacoquímica I"] },
  { nombre: "Fisiología Humana", color: "turquesa", semestre: 3, abre: ["Fisiopatología y semiología", "Bioquímica general y laboratorio"] },
  { nombre: "Química analítica", color: "turquesa", semestre: 3, abre: ["Química analítica e instrumental"] },
  { nombre: "Ingles II", color: "naranja-pastel", semestre: 3, abre: ["Ingles III"] },

  { nombre: "Bioquímica general y laboratorio", color: "turquesa", semestre: 4, abre: ["Microbiología"] },
  { nombre: "Fisiopatología y semiología", color: "verde-pastel", semestre: 4, abre: ["Salud publica I", "Farmacología Humana I", "Bioquímica clínica"] },
  { nombre: "Química analítica e instrumental", color: "turquesa", semestre: 4, abre: ["Farmacoquímica I", "Integrador I:Laboratorio quimico, clínico, forense y biofarmacéutico"] },
  { nombre: "Farmacocinética y Biofarmacia", color: "verde-pastel", semestre: 4, abre: ["Farmacología Humana I", "Tecnología Farmacéutica I"] },
  { nombre: "Ingles III", color: "naranja-pastel", semestre: 4, abre: ["Ingles IV"] },

  { nombre: "Microbiología", color: "turquesa", semestre: 5, abre: ["Fundamentos de Biología molecular y Biotecnología", "Tecnología Farmacéutica II"] },
  { nombre: "laboratorio de microbiología", color: "turquesa", semestre: 5, abre: ["Fundamentos de Biología molecular y Biotecnología", "Tecnología Farmacéutica II"] },
  { nombre: "Salud publica I", color: "verde-pastel", semestre: 5, abre: ["Farmacovigilancia y educación en salud", "Salud publica II"] },
  { nombre: "Farmacoquímica I", color: "verde-pastel", semestre: 5, abre: ["Farmacoquimica II", "Botánica y Farmacognosia", "Farmacología Humana I"] },
  { nombre: "Farmacología Humana I", color: "verde-pastel", semestre: 5, abre: ["Farmacología humana II", "Botánica y farmacognosia", "Farmacoquímica I"] },
  { nombre: "Ingles IV", color: "naranja-pastel", semestre: 5, abre: [] },

  { nombre: "Fundamentos de Biología molecular y Biotecnología", color: "turquesa", semestre: 6, abre: ["Bioquímica clínica"] },
  { nombre: "Tecnología Farmacéutica I", color: "rosa-pastel", semestre: 6, abre: ["Tecnología Farmacéutica II"] },
  { nombre: "Farmacologia Humana II", color: "verde-pastel", semestre: 6, abre: ["Farmacovigilancia y educación en salud", "Farmacologia humana III", "Farmacoquimica II"] },
  { nombre: "Botánica y Farmacognosia", color: "verde-pastel", semestre: 6, abre: ["Farmacologia Humana II"] },
  { nombre: "Farmacoquimica II", color: "verde-pastel", semestre: 6, abre: ["Toxicología clinica y forense"] },

  { nombre: "Farmacovigilancia y educación en salud", color: "azul-claro", semestre: 7, abre: ["Salud publica II", "Farmacia Clínica y atención farmacéutica I"] },
  { nombre: "Tecnología Farmacéutica II", color: "rosa-pastel", semestre: 7, abre: ["Tecnología Cosmética"] },
  { nombre: "Farmacologia Humana III", color: "verde-pastel", semestre: 7, abre: ["Farmacia Clínica y atención farmacéutica I"] },
  { nombre: "Bioquimica clinica", color: "rosa-pastel", semestre: 7, abre: ["Toxicología clinica y forense", "Farmacia Clínica y atención farmacéutica I"] },
  { nombre: "Razonamiento científico y TICS", color: "naranja-pastel", semestre: 7, abre: [] },

  { nombre: "Salud publica II", color: "verde-pastel", semestre: 8, abre: ["Farmacoeconomia y marketing", "Administración y gestión en salud"] },
  { nombre: "Tecnología Cosmética", color: "rosa-pastel", semestre: 8, abre: ["Integrador I:Laboratorio quimico, clínico, forense y biofarmacéutico", "Gestion y control de calidad farmaceutico de alimentos"] },
  { nombre: "Farmacia Clínica y atención farmacéutica I", color: "lila-pastel", semestre: 8, abre: ["Administración y gestión en salud", "Farmacia clínica y atención farmacéutica II"] },
  { nombre: "Toxicología clinica y forense", color: "rosa-pastel", semestre: 8, abre: ["Integrador I:Laboratorio quimico, clínico, forense y biofarmacéutico", "Farmacia clínica y atención farmacéutica II"] },
  { nombre: "Pensamiento critico", color: "naranja-pastel", semestre: 8, abre: [] },

  { nombre: "Farmacoeconomia y marketing", color: "azul-claro", semestre: 9, abre: ["Gestion de recursos y evaluación de proyectos", "Etica y legislación farmacéutica", "Practia en farmacia comunitaria"] },
  { nombre: "Gestion y control de calidad farmaceutico de alimentos", color: "lila-pastel", semestre: 9, abre: ["Practia en farmacia comunitaria"] },
  { nombre: "Farmacia clínica y atención farmacéutica II", color: "lila-pastel", semestre: 9, abre: ["Farmacia hospitalaria", "Integrador II: Atención clinica", "Practia en farmacia comunitaria"] },
  { nombre: "Administración y gestión en salud", color: "azul-claro", semestre: 9, abre: ["Gestion de recursos y evaluación de proyectos", "Etica y legislación farmacéutica", "Farmacia hospitalaria", "Practica en farmacia hospitalaria"] },
  { nombre: "Integrador I:Laboratorio quimico, clínico, forense y biofarmacéutico", color: "azul-oscuro-pastel", semestre: 9, abre: ["Practica en farmacia hospitalaria"] },

  { nombre: "Etica y legislación farmacéutica", color: "lila-pastel", semestre: 10, abre: ["Farmacia hospitalaria", "Integrador II: Atención clinica"] },
  { nombre: "Farmacia hospitalaria", color: "lila-pastel", semestre: 10, abre: [] },
  { nombre: "Gestion de recursos y evaluación de proyectos", color: "azul-claro", semestre: 10, abre: [] },
  { nombre: "Practia en farmacia comunitaria", color: "lila-pastel", semestre: 10, abre: [] },
  { nombre: "Responsabilidad social", color: "naranja-pastel", semestre: 10, abre: [] },
  { nombre: "Integrador II: Atención clinica", color: "azul-oscuro-pastel", semestre: 10, abre: [] },

  { nombre: "Internado farmacéutico", color: "azul-oscuro-pastel", semestre: 11, abre: [] }
];

// Estructuras auxiliares
const requisitos = {};
ramos.forEach(r => r.abre.forEach(dest => {
  if (!requisitos[dest]) requisitos[dest] = [];
  requisitos[dest].push(r.nombre);
}));

const estado = {};
const elementos = {};

// Insertar los ramos en el semestre correspondiente
ramos.forEach(ramo => {
  const div = document.createElement("div");
  div.className = `ramo ${ramo.color}`;
  div.textContent = ramo.nombre;
  div.onclick = () => aprobar(ramo.nombre);
  estado[ramo.nombre] = { aprobado: false, desbloqueado: false };
  elementos[ramo.nombre] = div;

  // Insertar en el contenedor del semestre correcto
  const contenedor = document.querySelector(`.semestre[data-semestre="${ramo.semestre}"]`);
  if (contenedor) contenedor.appendChild(div);
});

// Activar los que no tienen prerequisitos
ramos.forEach(r => {
  if (!requisitos[r.nombre]) desbloquear(r.nombre);
});

function desbloquear(nombre) {
  if (estado[nombre].desbloqueado) return;
  estado[nombre].desbloqueado = true;
  elementos[nombre].classList.add("desbloqueado");
}

function aprobar(nombre) {
  if (!estado[nombre].desbloqueado || estado[nombre].aprobado) return;
  estado[nombre].aprobado = true;
  elementos[nombre].classList.add("aprobado");

  const desbloqueos = ramos.find(r => r.nombre === nombre)?.abre || [];
  desbloqueos.forEach(ramo => {
    const reqs = requisitos[ramo];
    if (reqs.every(req => estado[req]?.aprobado)) {
      desbloquear(ramo);
    }
  });
}

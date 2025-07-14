const ramos = [
  { nombre: "Química general I", color: "turquesa", abre: ["Química General II", "Química Orgánica I"] },
  { nombre: "Biología celular", color: "turquesa", abre: ["Morfología"] },
  { nombre: "Elementos de algebra y calculo", color: "turquesa", abre: ["Física"] },
  { nombre: "Introducción a las ciencias farmacéuticas", color: "verde-pastel", abre: [] },
  { nombre: "Habilidades comunicativas", color: "naranja-pastel", abre: ["Ingles I"] },
  { nombre: "Química General II", color: "turquesa", abre: ["Química analítica", "Fisicoquímica aplicada"] },
  { nombre: "Química Orgánica I", color: "turquesa", abre: ["Química Orgánica II"] },
  { nombre: "Morfología", color: "turquesa", abre: ["Fisiología Humana"] },
  { nombre: "Física", color: "turquesa", abre: ["Fisicoquímica aplicada"] },
  { nombre: "Ingles I", color: "naranja-pastel", abre: ["Ingles II"] },
  { nombre: "Fisicoquímica aplicada", color: "verde-pastel", abre: ["Farmacocinética y Biofarmacia"] },
  { nombre: "Química Orgánica II", color: "turquesa", abre: ["Bioquímica general y laboratorio", "Farmacoquímica I"] },
  { nombre: "Fisiología Humana", color: "turquesa", abre: ["Fisiopatología y semiología", "Bioquímica general y laboratorio"] },
  { nombre: "Química analítica", color: "turquesa", abre: ["Química analítica e instrumental"] },
  { nombre: "Ingles II", color: "naranja-pastel", abre: ["Ingles III"] },
  { nombre: "Bioquímica general y laboratorio", color: "turquesa", abre: ["Microbiología"] },
  { nombre: "Fisiopatología y semiología", color: "verde-pastel", abre: ["Salud publica I", "Farmacología Humana I", "Bioquímica clínica"] },
  { nombre: "Química analítica e instrumental", color: "turquesa", abre: ["Farmacoquímica I", "Integrador I:Laboratorio quimico, clínico, forense y biofarmacéutico"] },
  { nombre: "Farmacocinética y Biofarmacia", color: "verde-pastel", abre: ["Farmacología Humana I", "Tecnología Farmacéutica I"] },
  { nombre: "Ingles III", color: "naranja-pastel", abre: ["Ingles IV"] },
  { nombre: "Microbiología", color: "turquesa", abre: ["Fundamentos de Biología molecular y Biotecnología", "Tecnología Farmacéutica II"] },
  { nombre: "laboratorio de microbiología", color: "turquesa", abre: ["Fundamentos de Biología molecular y Biotecnología", "Tecnología Farmacéutica II"] },
  { nombre: "Salud publica I", color: "verde-pastel", abre: ["Farmacovigilancia y educación en salud", "Salud publica II"] },
  { nombre: "Farmacoquímica I", color: "verde-pastel", abre: ["Farmacoquimica II", "Botánica y Farmacognosia", "Farmacología Humana I"] },
  { nombre: "Farmacología Humana I", color: "verde-pastel", abre: ["Farmacología humana II", "Botánica y farmacognosia", "Farmacoquímica I"] },
  { nombre: "Ingles IV", color: "naranja-pastel", abre: [] },
  { nombre: "Fundamentos de Biología molecular y Biotecnología", color: "turquesa", abre: ["Bioquímica clínica"] },
  { nombre: "Tecnología Farmacéutica I", color: "rosa-pastel", abre: ["Tecnología Farmacéutica II"] },
  { nombre: "Farmacologia Humana II", color: "verde-pastel", abre: ["Farmacovigilancia y educación en salud", "Farmacologia humana III", "Farmacoquimica II"] },
  { nombre: "Botánica y Farmacognosia", color: "verde-pastel", abre: ["Farmacologia Humana II"] },
  { nombre: "Farmacoquimica II", color: "verde-pastel", abre: ["Toxicología clinica y forense"] },
  { nombre: "Farmacovigilancia y educación en salud", color: "azul-claro", abre: ["Salud publica II", "Farmacia Clínica y atención farmacéutica I"] },
  { nombre: "Tecnología Farmacéutica II", color: "rosa-pastel", abre: ["Tecnología Cosmética"] },
  { nombre: "Farmacologia Humana III", color: "verde-pastel", abre: ["Farmacia Clínica y atención farmacéutica I"] },
  { nombre: "Bioquimica clinica", color: "rosa-pastel", abre: ["Toxicología clinica y forense", "Farmacia Clínica y atención farmacéutica I"] },
  { nombre: "Razonamiento científico y TICS", color: "naranja-pastel", abre: [] },
  { nombre: "Salud publica II", color: "verde-pastel", abre: ["Farmacoeconomia y marketing", "Administración y gestión en salud"] },
  { nombre: "Tecnología Cosmética", color: "rosa-pastel", abre: ["Integrador I:Laboratorio quimico, clínico, forense y biofarmacéutico", "Gestion y control de calidad farmaceutico de alimentos"] },
  { nombre: "Farmacia Clínica y atención farmacéutica I", color: "lila-pastel", abre: ["Administración y gestión en salud", "Farmacia clínica y atención farmacéutica II"] },
  { nombre: "Toxicología clinica y forense", color: "rosa-pastel", abre: ["Integrador I:Laboratorio quimico, clínico, forense y biofarmacéutico", "Farmacia clínica y atención farmacéutica II"] },
  { nombre: "Pensamiento critico", color: "naranja-pastel", abre: [] },
  { nombre: "Farmacoeconomia y marketing", color: "azul-claro", abre: ["Gestion de recursos y evaluación de proyectos", "Etica y legislación farmacéutica", "Practia en farmacia comunitaria"] },
  { nombre: "Gestion y control de calidad farmaceutico de alimentos", color: "lila-pastel", abre: ["Practia en farmacia comunitaria"] },
  { nombre: "Farmacia clínica y atención farmacéutica II", color: "lila-pastel", abre: ["Farmacia hospitalaria", "Integrador II: Atención clinica", "Practia en farmacia comunitaria"] },
  { nombre: "Administración y gestión en salud", color: "azul-claro", abre: ["Gestion de recursos y evaluación de proyectos", "Etica y legislación farmacéutica", "Farmacia hospitalaria", "Practica en farmacia hospitalaria"] },
  { nombre: "Integrador I:Laboratorio quimico, clínico, forense y biofarmacéutico", color: "azul-oscuro-pastel", abre: ["Practica en farmacia hospitalaria"] },
  { nombre: "Etica y legislación farmacéutica", color: "lila-pastel", abre: ["Farmacia hospitalaria", "Integrador II: Atención clinica"] },
  { nombre: "Farmacia hospitalaria", color: "lila-pastel", abre: [] },
  { nombre: "Gestion de recursos y evaluación de proyectos", color: "azul-claro", abre: [] },
  { nombre: "Practia en farmacia comunitaria", color: "lila-pastel", abre: [] },
  { nombre: "Responsabilidad social", color: "naranja-pastel", abre: [] },
  { nombre: "Integrador II: Atención clinica", color: "azul-oscuro-pastel", abre: [] },
  { nombre: "Internado farmacéutico", color: "azul-oscuro-pastel", abre: [] }
];

// Lógica base de desbloqueo/aprobación
const requisitos = {};
ramos.forEach(r => r.abre.forEach(dest => {
  if (!requisitos[dest]) requisitos[dest] = [];
  requisitos[dest].push(r.nombre);
}));

const container = document.getElementById("malla-container");
const estado = {};
const elementos = {};

// Crear los cuadros de los ramos
ramos.forEach(ramo => {
  const div = document.createElement("div");
  div.className = `ramo ${ramo.color}`;
  div.textContent = ramo.nombre;
  div.onclick = () => aprobar(ramo.nombre);
  container.appendChild(div);
  estado[ramo.nombre] = { aprobado: false, desbloqueado: false };
  elementos[ramo.nombre] = div;
});

// Activar los iniciales
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


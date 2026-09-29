import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const workspaceDir = "C:/Users/USER/Documents/AprendizajeJean/Youtube/Codex/MiPrimeraApp";
const skillDir = "C:/Users/USER/.codex/plugins/cache/openai-primary-runtime/presentations/26.927.11222/skills/presentations";
const buildDir = path.join(workspaceDir, ".codex-build", "inca-cultura");
const finalPath = path.join(workspaceDir, "presentaciones", "Cultura-Inca-final-v2.pptx");
const runtimePython = "C:/Users/USER/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe";
const { resolvePresentationFont, finalizePresentation } = await import(
  pathToFileURL(path.join(skillDir, "container_tools", "artifact_tool_utils.mjs")).href,
);

const font = resolvePresentationFont();
const p = Presentation.create({ slideSize: { width: 1280, height: 720 } });
const slides = [];
const coverImage = await fs.readFile(path.join(buildDir, "machu-cover.jpg"));
const panoramaImage = await fs.readFile(path.join(buildDir, "machu-panorama.jpg"));

function addText(slide, text, position, style) {
  const box = slide.shapes.add({
    geometry: "textbox",
    position,
    fill: "none",
    line: { fill: "none", width: 0 },
  });
  box.text = text;
  box.text.style = { typeface: font, autoFit: "shrinkText", ...style };
  return box;
}

function addRule(slide, left, top, width, color) {
  slide.shapes.add({
    geometry: "rect",
    position: { left, top, width, height: 7 },
    fill: color,
    line: { fill: "none", width: 0 },
  });
}

function addTopic(slide, y, title, body, accent) {
  slide.shapes.add({
    geometry: "rect",
    position: { left: 74, top: y + 6, width: 9, height: 92 },
    fill: accent,
    line: { fill: "none", width: 0 },
  });
  addText(slide, title, { left: 105, top: y, width: 410, height: 36 }, {
    fontSize: 23,
    bold: true,
    color: "#20313A",
  });
  addText(slide, body, { left: 105, top: y + 38, width: 470, height: 62 }, {
    fontSize: 17,
    color: "#425762",
    breakLine: false,
  });
}

// Slide 1: compact cover with a real visual reference to the Andes.
{
  const slide = p.slides.add();
  slides.push(slide);
  slide.background.fill = "#182E36";
  slide.images.add({
    blob: coverImage,
    contentType: "image/jpeg",
    alt: "Vista panoramica de Machu Picchu",
    fit: "cover",
    position: { left: 560, top: 0, width: 720, height: 720 },
  });
  slide.shapes.add({
    geometry: "rect",
    position: { left: 560, top: 0, width: 720, height: 720 },
    fill: { color: "#10262D", transparency: 43 },
    line: { fill: "none", width: 0 },
  });
  addRule(slide, 76, 102, 110, "#D9A441");
  addText(slide, "Cultura Inca", { left: 76, top: 150, width: 450, height: 115 }, {
    fontSize: 53,
    bold: true,
    color: "#F6F2E7",
  });
  addText(slide, "Una civilizacion andina que unio territorio, conocimiento y trabajo colectivo", { left: 78, top: 290, width: 410, height: 106 }, {
    fontSize: 24,
    color: "#D7E4E2",
  });
  addText(slide, "Tawantinsuyo | Andes centrales | siglos XV-XVI", { left: 78, top: 617, width: 420, height: 31 }, {
    fontSize: 17,
    color: "#D9A441",
    bold: true,
  });
  addText(slide, "Machu Picchu", { left: 1007, top: 646, width: 200, height: 25 }, {
    fontSize: 14,
    color: "#F6F2E7",
    alignment: "right",
  });
  slide.speakerNotes.textFrame.setText(
    "Fuentes: UNESCO, Historic Sanctuary of Machu Picchu, https://whc.unesco.org/en/list/274 (consulta: 2026-09-28). Imagen: Wikimedia Commons, ‘Machu Picchu, Peru banner-Machu Picchu view from above.jpg’, https://commons.wikimedia.org/wiki/File:Machu_Picchu,_Peru_banner-Machu_Picchu_view_from_above.jpg (consulta: 2026-09-28).",
  );
}

// Slide 2: organized overview with a photographic anchor and editable text.
{
  const slide = p.slides.add();
  slides.push(slide);
  slide.background.fill = "#F6F2E7";
  addText(slide, "Un imperio construido para los Andes", { left: 74, top: 54, width: 760, height: 56 }, {
    fontSize: 38,
    bold: true,
    color: "#20313A",
  });
  addRule(slide, 76, 127, 154, "#B64C37");
  addText(slide, "La vida inca combinaba administracion central, agricultura de altura e infraestructura para conectar regiones diversas.", { left: 76, top: 151, width: 1060, height: 54 }, {
    fontSize: 20,
    color: "#425762",
  });
  addTopic(slide, 244, "Organizacion social", "El Sapa Inca gobernaba desde Cusco. El ayllu reunia familias que compartian tierras y trabajo.", "#B64C37");
  addTopic(slide, 371, "Agricultura en terrazas", "Andenes, canales y distintos pisos ecologicos permitian cultivar maiz, papa y otros productos en laderas andinas.", "#D9A441");
  addTopic(slide, 498, "Redes y memoria", "El Qhapaq Nan conectaba poblaciones. Los quipus registraban informacion mediante cordones y nudos.", "#39877C");
  slide.images.add({
    blob: panoramaImage,
    contentType: "image/jpeg",
    alt: "Terrazas y construcciones de Machu Picchu",
    fit: "cover",
    position: { left: 635, top: 243, width: 570, height: 344 },
  });
  slide.shapes.add({
    geometry: "rect",
    position: { left: 635, top: 550, width: 570, height: 37 },
    fill: { color: "#182E36", transparency: 15 },
    line: { fill: "none", width: 0 },
  });
  addText(slide, "Ingenieria, paisaje y vida cotidiana", { left: 661, top: 557, width: 500, height: 22 }, {
    fontSize: 15,
    color: "#FFFFFF",
    bold: true,
  });
  addText(slide, "Legado vivo en los Andes peruanos", { left: 76, top: 646, width: 500, height: 25 }, {
    fontSize: 16,
    color: "#39877C",
    bold: true,
  });
  slide.speakerNotes.textFrame.setText(
    "Fuentes: UNESCO, Historic Sanctuary of Machu Picchu, https://whc.unesco.org/en/list/274; World History Encyclopedia, Inca Civilization, https://www.worldhistory.org/Inca_Civilization/; Britannica Education, Ancient Civilisations: Inca Empire, https://elearn.eb.com/ancient-civilisations-inca-empire/ (consultas: 2026-09-28). Imagen: Wikimedia Commons, ‘Panorama Machu picchu 2.jpg’, https://commons.wikimedia.org/wiki/File:Panorama_Machu_picchu_2.jpg (consulta: 2026-09-28).",
  );
}

const draftPath = path.join(buildDir, "candidate.pptx");
await fs.mkdir(buildDir, { recursive: true });
await fs.mkdir(path.dirname(finalPath), { recursive: true });
await (await PresentationFile.exportPptx(p)).save(draftPath);

const requirements = {
  explicitTotalSlideCount: 2,
  requiredNativeTableOwnerSlides: [],
  requiredNativeChartOwnerSlides: [],
};
await finalizePresentation({
  ...requirements,
  workspaceDir,
  candidatePath: draftPath,
  finalPath,
  pythonExecutable: runtimePython,
  integrityValidatorPath: path.join(skillDir, "container_tools", "inspect_presentation_package_integrity.py"),
  layoutValidatorPath: path.join(skillDir, "container_tools", "inspect_presentation_layout_geometry.py"),
  layoutArgs: ["--expected-slide-size-emu", "12192000,6858000", "--validate-bullet-geometry", "--validate-heading-fit"],
  fontPolicy: { basis: "design", families: [font] },
  verifyArtifactToolImport: true,
  receiptPath: path.join(buildDir, "validation-final-v2.json"),
});

for (const [index, slide] of slides.entries()) {
  const png = await p.export({ slide, format: "png", scale: 1 });
  await fs.writeFile(path.join(buildDir, `slide-${index + 1}.png`), new Uint8Array(await png.arrayBuffer()));
}
const montage = await p.export({ format: "webp", montage: true, scale: 1 });
await fs.writeFile(path.join(buildDir, "montage.webp"), new Uint8Array(await montage.arrayBuffer()));

console.log(finalPath);

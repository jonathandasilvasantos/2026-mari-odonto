const listMestrado = document.getElementById("list-mestrado");
const listResidencia = document.getElementById("list-residencia");
const detailsEl = document.getElementById("details");
const searchInput = document.getElementById("search");

function renderList(programs, container, type) {
  container.innerHTML = "";
  programs.forEach(p => {
    const li = document.createElement("li");
    li.dataset.id = p.id;
    li.dataset.type = type;
    li.innerHTML = `${p.nome}<span class="inst">${p.instituicao}</span>`;
    li.addEventListener("click", () => selectProgram(p, type, li));
    container.appendChild(li);
  });
}

function selectProgram(p, type, li) {
  document.querySelectorAll(".sidebar li.active").forEach(el => el.classList.remove("active"));
  if (li) li.classList.add("active");

  const tipoLabel = type === "mestrado" ? "Mestrado" : "Residência";

  const datasHtml = Object.entries(p.datas).map(([k, v]) => `
    <div class="date-item">
      <div class="label">${k}</div>
      <div class="value">${v}</div>
    </div>
  `).join("");

  detailsEl.innerHTML = `
    <button id="back-btn" class="back-btn" type="button" aria-label="Voltar à lista">&larr; Voltar à lista</button>
    <div class="program-header">
      <h2>${p.nome}</h2>
      <div class="institution">${p.instituicao}</div>
      <span class="badge">${tipoLabel}</span>
    </div>

    <div class="section">
      <h3>Áreas de concentração</h3>
      <ul>${p.areas.map(a => `<li>${a}</li>`).join("")}</ul>
    </div>

    <div class="section highlight">
      <h3>Vagas</h3>
      <p>${p.vagas || "Consultar edital vigente."}</p>
    </div>

    <div class="section highlight">
      <h3>Último edital publicado</h3>
      <p>
        <a class="link" href="${p.editalRecente.url}" target="_blank" rel="noopener">
          ${p.editalRecente.descricao}
        </a>
      </p>
    </div>

    <div class="section ${p.provasAnteriores ? "provas-ok" : "provas-na"}">
      <h3>Provas de anos anteriores</h3>
      ${p.provasAnteriores
        ? `<p><a class="link" href="${p.provasAnteriores.url}" target="_blank" rel="noopener">${p.provasAnteriores.descricao}</a></p>`
        : `<p class="muted-text">Não localizamos um repositório público oficial de provas anteriores deste programa. Recomenda-se solicitar diretamente à secretaria/coordenação do programa.</p>`
      }
    </div>

    <div class="section">
      <h3>Datas (calendário típico)</h3>
      <div class="dates-grid">${datasHtml}</div>
    </div>

    <div class="section">
      <h3>Processo Seletivo</h3>
      <ul>${p.processo.map(s => `<li>${s}</li>`).join("")}</ul>
    </div>

    <div class="section">
      <h3>Requisitos</h3>
      <ul>${p.requisitos.map(r => `<li>${r}</li>`).join("")}</ul>
    </div>

    ${p.proficiencia ? `
    <div class="section proficiencia">
      <h3>Proficiência em língua estrangeira</h3>
      <p><strong>Idioma:</strong> ${p.proficiencia.idioma}</p>
      <p><strong>Validade do certificado:</strong> ${p.proficiencia.validade}</p>
      <p><strong>Como comprovar:</strong></p>
      <ul>${p.proficiencia.criterios.map(c => `<li>${c}</li>`).join("")}</ul>
    </div>
    ` : ""}

    <div class="section">
      <h3>Links</h3>
      <p><a class="link" href="${p.editalRecente.url}" target="_blank" rel="noopener">Página de pós-graduação / editais</a></p>
      <p><a class="link" href="${p.site}" target="_blank" rel="noopener">Site institucional</a></p>
    </div>

    <div class="note">
      <strong>Atenção:</strong> as datas exibidas refletem o calendário típico anual. Sempre confirme inscrições, prazos e documentos no edital oficial vigente, disponível no site da instituição.
    </div>
  `;
  detailsEl.scrollTop = 0;
  document.body.classList.add("show-details");

  const backBtn = document.getElementById("back-btn");
  if (backBtn) backBtn.addEventListener("click", showList);
}

function showList() {
  document.body.classList.remove("show-details");
  document.querySelectorAll(".sidebar li.active").forEach(el => el.classList.remove("active"));
  window.scrollTo({ top: 0, behavior: "auto" });
}

function applySearch() {
  const q = searchInput.value.trim().toLowerCase();
  document.querySelectorAll(".sidebar li").forEach(li => {
    const visible = !q || li.textContent.toLowerCase().includes(q);
    li.style.display = visible ? "" : "none";
  });
}

searchInput.addEventListener("input", applySearch);

renderList(PROGRAMS.mestrado, listMestrado, "mestrado");
renderList(PROGRAMS.residencia, listResidencia, "residencia");

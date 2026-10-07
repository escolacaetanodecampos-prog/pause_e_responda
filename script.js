const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbygoE8Zhwj8G_wFgBe1-9NfDoiYBI98uSzf3t62hkVHyoH8j9daCdM70Q63pK8sR_iu/exec";
const PLANILHA_URL = "https://docs.google.com/spreadsheets/d/1Ic0k7FyfGbYwBaY0vAylghyw9wlbtxwenfOniRUXCSw/edit";
const CODIGO_PROFESSOR = "131313";

let aluno = {};
let indice = 0;
let acertos = 0;
let respondeu = false;
let tentativaId = "";

function novoId() {
  return "T-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8).toUpperCase();
}

function enviarResultado(params) {
  const qs = Object.entries(params)
    .map(([k,v]) => encodeURIComponent(k) + "=" + encodeURIComponent(v ?? ""))
    .join("&");
  const img = new Image();
  img.src = APPS_SCRIPT_URL + "?" + qs;
}

function home() {
  document.querySelector("#app").innerHTML = `
    <section class="card">
      <h1>⏸️ Pause e Responda</h1>
      <p>Leia o pequeno texto, encontre a pista e responda. Você aprende praticando!</p>
      <div class="grid">
        <label>Nome do estudante<select id="nome"><option value="">Selecione seu nome</option><option value="">Selecione seu nome</option><option value="ANA CLARA SOUSA CRUZ">ANA CLARA SOUSA CRUZ</option><option value="ANALY BARBOSA DE SOUSA">ANALY BARBOSA DE SOUSA</option><option value="ANCY JUNIOR ALERTE">ANCY JUNIOR ALERTE</option><option value="CARLOS EDUARDO ARIAS SEVERINO JUNIOR">CARLOS EDUARDO ARIAS SEVERINO JUNIOR</option><option value="CAUA DOS SANTOS FERREIRA">CAUA DOS SANTOS FERREIRA</option><option value="DANIEL RODRIGUES DE ARAUJO">DANIEL RODRIGUES DE ARAUJO</option><option value="EDUARDO GUIMARÃES DOS SANTOS">EDUARDO GUIMARÃES DOS SANTOS</option><option value="FELYPE RODRIGUES DO NASCIMENTO">FELYPE RODRIGUES DO NASCIMENTO</option><option value="GEOVANA SOUSA DOS SANTOS PEREIRA">GEOVANA SOUSA DOS SANTOS PEREIRA</option><option value="GIOVANA RAQUEL FIGUEIRA DE OLIVEIRA">GIOVANA RAQUEL FIGUEIRA DE OLIVEIRA</option><option value="GUILHERME ROBERTO ALVES COELHO">GUILHERME ROBERTO ALVES COELHO</option><option value="ISADORA OLIVEIRA MARCELINO">ISADORA OLIVEIRA MARCELINO</option><option value="JHOSELINE NAYELI TININI CHIPANA">JHOSELINE NAYELI TININI CHIPANA</option><option value="JOAO PEDRO DA SILVA SANTOS">JOAO PEDRO DA SILVA SANTOS</option><option value="JOAO VICTOR LINS MENDES">JOAO VICTOR LINS MENDES</option><option value="KAUE REIS SOUZA">KAUE REIS SOUZA</option><option value="KETHELYN SILVA DOS SANTOS">KETHELYN SILVA DOS SANTOS</option><option value="KLY ANDERSON DUDLEY TERVILUS">KLY ANDERSON DUDLEY TERVILUS</option><option value="LUCAS SANTOS DE ALMEIDA">LUCAS SANTOS DE ALMEIDA</option><option value="LUIZA DE SOUZA SILVA">LUIZA DE SOUZA SILVA</option><option value="MARIA EDUARDA FERREIRA DIAS">MARIA EDUARDA FERREIRA DIAS</option><option value="MAYRA RAMOS MARTINS DE ALMEIDA">MAYRA RAMOS MARTINS DE ALMEIDA</option><option value="MENSLY INDINA FIARA DAMEUS">MENSLY INDINA FIARA DAMEUS</option><option value="MOHANNA MOREIRA BRANDAO">MOHANNA MOREIRA BRANDAO</option><option value="NICOLAS HANNA NEGRAO DE ASSIS">NICOLAS HANNA NEGRAO DE ASSIS</option><option value="PEDRO HENRIQUE LIMA REIS">PEDRO HENRIQUE LIMA REIS</option><option value="SOPHIA DE FREITAS NASCIMENTO">SOPHIA DE FREITAS NASCIMENTO</option><option value="THIAGO GONCALVES DOS SANTOS">THIAGO GONCALVES DOS SANTOS</option><option value="UESILE NATA SILVA SANTOS">UESILE NATA SILVA SANTOS</option><option value="VITORIA DOS SANTOS DA SILVA">VITORIA DOS SANTOS DA SILVA</option><option value="YASMIN CUNHA RIBEIRO DE OLIVEIRA">YASMIN CUNHA RIBEIRO DE OLIVEIRA</option><option value="ALICIA DA SILVA SANTIAGO">ALICIA DA SILVA SANTIAGO</option><option value="ANA LAURA DO NASCIMENTO">ANA LAURA DO NASCIMENTO</option><option value="ARIANE SANTOS PEREIRA">ARIANE SANTOS PEREIRA</option><option value="CARLOS ALBERTO DE MACEDO FILHO">CARLOS ALBERTO DE MACEDO FILHO</option><option value="CASSIANO FERREIRA DA SILVA">CASSIANO FERREIRA DA SILVA</option><option value="CLEYTON HENRIQUE CONCEICAO SANTOS">CLEYTON HENRIQUE CONCEICAO SANTOS</option><option value="DAVY DANTAS LEITE DA SILVA">DAVY DANTAS LEITE DA SILVA</option><option value="DIOGO REIS ALVES">DIOGO REIS ALVES</option><option value="EDUARDO BATISTA TAVARES">EDUARDO BATISTA TAVARES</option><option value="FELIPE SANTA CRUZ">FELIPE SANTA CRUZ</option><option value="ISABELLE FERNANDES ARAUJO">ISABELLE FERNANDES ARAUJO</option><option value="JULIANA LIMA DE SOUZA">JULIANA LIMA DE SOUZA</option><option value="KALLEB ZAIDAN DE OLIVEIRA">KALLEB ZAIDAN DE OLIVEIRA</option><option value="KAUÃ FREITAS PAULINO SILVA">KAUÃ FREITAS PAULINO SILVA</option><option value="KAWANY GABRIELY DE SOUZA VILELA">KAWANY GABRIELY DE SOUZA VILELA</option><option value="LAURA VALENTINA LOPEZ MORENO">LAURA VALENTINA LOPEZ MORENO</option><option value="LUIZ HENRIQUE DA SILVA SANTOS">LUIZ HENRIQUE DA SILVA SANTOS</option><option value="MARIA ALICE PAIVA SILVA">MARIA ALICE PAIVA SILVA</option><option value="MARIA HELLOIZA DE JESUS ARAUJO FERREIRA">MARIA HELLOIZA DE JESUS ARAUJO FERREIRA</option><option value="MATHEUS DA SILVA CARVALHO">MATHEUS DA SILVA CARVALHO</option><option value="MICHELLY PEREIRA DA SILVA">MICHELLY PEREIRA DA SILVA</option><option value="NAYARA DE JESUS BRAGA">NAYARA DE JESUS BRAGA</option><option value="PATRICIA DA SILVA FERREIRA">PATRICIA DA SILVA FERREIRA</option><option value="RICHARD CARLOS FERREIRA DA SILVA">RICHARD CARLOS FERREIRA DA SILVA</option><option value="SAMILLY RODRIGUES RABELO">SAMILLY RODRIGUES RABELO</option><option value="SAMUEL DORNELLES DE OLIVEIRA">SAMUEL DORNELLES DE OLIVEIRA</option><option value="YASMIN AZEVEDO FREITAS">YASMIN AZEVEDO FREITAS</option></select></label>
        <label>Série<select id="serie"><option value="">Selecione</option><option>2ª série – Ensino Médio</option><option>3ª série – Ensino Médio</option></select></label>
        <label>Turma<select id="turma"><option value="">Selecione</option><option>2º AT</option><option>2º BT</option><option>3º AT</option><option>3º BT</option></select></label>
        <label>Disciplina<select id="disciplina"><option value="">Selecione a disciplina</option><option>Carreira e Competências para o Mercado de Trabalho em Administração</option><option>Introdução a Administração, Legislação e Pessoas</option></select></label>
        <button onclick="start()">Começar</button>
      </div>
      <div class="teacher-access">
        <button class="secondary teacher-btn" onclick="acessoProfessor()">👨‍🏫 Acesso Professor</button>
      </div>
    </section>`;
}

function start() {
  aluno = {
    nome: document.querySelector("#nome").value.trim(),
    serie: document.querySelector("#serie").value,
    turma: document.querySelector("#turma").value.trim(),
    disciplina: document.querySelector("#disciplina").value
  };
  if (!aluno.nome || !aluno.serie || !aluno.turma || !aluno.disciplina) {
    return alert("Preencha todos os campos.");
  }
  if (!QUIZZES[aluno.disciplina] || !QUIZZES[aluno.disciplina].length) {
    document.querySelector("#app").innerHTML = `<section class="card"><h1>📚 Disciplina em preparação</h1><p>O cadastro está pronto. Assim que o banco de questões de <strong>${aluno.disciplina}</strong> for inserido, ele aparecerá aqui.</p><button onclick="home()">Voltar</button></section>`;
    return;
  }
  indice = 0;
  acertos = 0;
  respondeu = false;
  tentativaId = novoId();
  quiz();
}

function quiz() {
  let x = QUIZZES[aluno.disciplina][indice];
  document.querySelector("#app").innerHTML = `
    <section class="card">
      <p class="meta">${aluno.nome} • ${aluno.serie} • ${aluno.turma}</p>
      <h1>⏸️ Pause e Responda</h1>
      <p class="meta">${x[0]} • Questão ${indice + 1} de ${QUIZZES[aluno.disciplina].length}</p>
      <div class="reading"><strong>📖 PAUSE E LEIA</strong><br>${x[1]}</div>
      <div class="question">❓ ${x[2]}</div>
      <div id="opts">${x[3].map((o,i)=>`<button class="option" onclick="answer(${i})">${String.fromCharCode(65+i)}) ${o}</button>`).join("")}</div>
      <div id="feedback"></div>
      <div class="actions"><button class="secondary" onclick="home()">Sair</button><button id="next" onclick="next()" disabled>Próxima</button></div>
    </section>`;
}

function answer(i) {
  if (respondeu) return;
  respondeu = true;
  let x = QUIZZES[aluno.disciplina][indice];
  let ok = i === x[4];
  if (ok) acertos++;
  document.querySelectorAll("#opts button").forEach(b => b.disabled = true);
  document.querySelector("#feedback").innerHTML = `<div class="feedback ${ok ? "ok" : "no"}">${ok ? "✅ Muito bem! A pista estava no texto." : "🔎 Revise o texto: a resposta estava indicada nele. Na próxima você consegue!"}</div>`;
  document.querySelector("#next").disabled = false;

  enviarResultado({
    acao: "registrar",
    tentativaId,
    nome: aluno.nome,
    serie: aluno.serie,
    turma: aluno.turma,
    disciplina: aluno.disciplina,
    semana: x[0],
    questao: indice + 1,
    resposta: String.fromCharCode(65 + i),
    correta: ok ? "true" : "false",
    totalQuestoes: QUIZZES[aluno.disciplina].length,
    acertos,
    percentual: Math.round(acertos / QUIZZES[aluno.disciplina].length * 100),
    tipo: "QUESTAO"
  });
}

function next() {
  indice++;
  if (indice < QUIZZES[aluno.disciplina].length) {
    respondeu = false;
    quiz();
  } else {
    let total = QUIZZES[aluno.disciplina].length;
    let p = Math.round(acertos / total * 100);

    enviarResultado({
      acao: "finalizar",
      tentativaId,
      nome: aluno.nome,
      serie: aluno.serie,
      turma: aluno.turma,
      disciplina: aluno.disciplina,
      totalQuestoes: total,
      acertos,
      percentual: p,
      tipo: "FINAL"
    });

    document.querySelector("#app").innerHTML = `
      <section class="card">
        <h1>🎉 Rodada concluída!</h1>
        <p><strong>${aluno.nome}</strong>, você acertou <strong>${acertos} de ${total}</strong> (${p}%).</p>
        <p>Continue praticando para reforçar seus aprendizados.</p>
        <button onclick="home()">Voltar ao início</button>
      </section>`;
  }
}

function acessoProfessor() {
  document.querySelector("#app").innerHTML = `
    <section class="card teacher-panel">
      <h1>👨‍🏫 Acesso Professor</h1>
      <p>Digite o código de acesso para consultar os resultados.</p>
      <label>Código do professor<input id="codigoProfessor" type="password" inputmode="numeric" maxlength="6" autocomplete="off" placeholder="Digite o código"></label>
      <div class="actions">
        <button class="secondary" onclick="home()">Voltar</button>
        <button onclick="entrarProfessor()">Entrar</button>
      </div>
      <div id="loginProfessorMsg"></div>
    </section>`;
  document.querySelector("#codigoProfessor").focus();
}

function entrarProfessor() {
  const codigo = document.querySelector("#codigoProfessor").value.trim();
  if (codigo !== CODIGO_PROFESSOR) {
    document.querySelector("#loginProfessorMsg").innerHTML = '<div class="feedback no">❌ Código incorreto.</div>';
    return;
  }
  painelProfessor();
}

function painelProfessor() {
  document.querySelector("#app").innerHTML = `
    <section class="card teacher-panel">
      <h1>📊 Painel do Professor</h1>
      <p>Os resultados são registrados automaticamente na planilha <strong>pauseeresponda</strong>.</p>
      <div class="teacher-links">
        <a class="teacher-link" href="${PLANILHA_URL}" target="_blank" rel="noopener">📊 Abrir planilha</a>
        <button class="teacher-link" onclick="carregarResultados()">📋 Ver resultados registrados</button>
      </div>
      <div id="resultadosProfessor" class="resultados-professor">
        <div class="teacher-note">Clique em <strong>Ver resultados registrados</strong> para carregar os dados.</div>
      </div>
      <button class="secondary" onclick="home()">Sair do painel</button>
    </section>`;
}

function carregarResultados() {
  const box = document.querySelector("#resultadosProfessor");
  if (!box) return;
  box.innerHTML = '<div class="teacher-note">⏳ Carregando resultados...</div>';
  const callback = "receberResultados_" + Date.now();
  window[callback] = function(data) {
    try {
      delete window[callback];
      if (!data || !data.ok) {
        box.innerHTML = '<div class="feedback no">❌ Não foi possível carregar os resultados.</div>';
        return;
      }
      renderizarResultados(data.resultados || []);
    } catch (e) {
      box.innerHTML = '<div class="feedback no">❌ Erro ao montar o painel.</div>';
    }
  };
  const script = document.createElement("script");
  script.src = APPS_SCRIPT_URL + "?acao=resultados&codigo=" + encodeURIComponent(CODIGO_PROFESSOR) + "&callback=" + encodeURIComponent(callback);
  script.onerror = function() {
    delete window[callback];
    box.innerHTML = '<div class="feedback no">❌ Falha de comunicação com o Google Apps Script.</div>';
  };
  document.body.appendChild(script);
}

function esc(v) {
  return String(v ?? "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

function renderizarResultados(rows) {
  const box = document.querySelector("#resultadosProfessor");
  if (!box) return;
  if (!rows.length) {
    box.innerHTML = '<div class="teacher-note">Nenhum resultado registrado ainda.</div>';
    return;
  }

  const finais = rows.filter(r => r["Tipo"] === "FINAL");
  const questoes = rows.filter(r => r["Tipo"] === "QUESTAO");
  const alunos = new Set(rows.map(r => r["Nome"]).filter(Boolean)).size;
  const tentativas = new Set(rows.map(r => r["Tentativa ID"]).filter(Boolean)).size;

  const cards = finais.map(r => `
    <div class="resultado-card">
      <div class="resultado-top">
        <strong>${esc(r["Nome"])}</strong>
        <span class="resultado-percentual">${esc(r["Percentual"])}%</span>
      </div>
      <div class="resultado-meta">${esc(r["Série"])} • ${esc(r["Turma"])}</div>
      <div class="resultado-disciplina">${esc(r["Disciplina"])}</div>
      <div class="resultado-score"><strong>${esc(r["Acertos"])} / ${esc(r["Total Questões"])}</strong> acertos</div>
      <div class="resultado-data">${esc(r["Data/Hora"])}</div>
    </div>`).join("");

  const fallback = rows.filter(r => r["Tipo"] !== "FINAL").reduce((acc,r) => acc, []);
  box.innerHTML = `
    <div class="resumo-resultados">
      <div><strong>${alunos}</strong><span>Estudantes</span></div>
      <div><strong>${tentativas}</strong><span>Tentativas</span></div>
      <div><strong>${finais.length}</strong><span>Resultados finais</span></div>
      <div><strong>${questoes.length}</strong><span>Respostas</span></div>
    </div>
    <div class="resultado-lista">
      ${cards || '<div class="teacher-note">Ainda não há resultados finais. Há ' + questoes.length + ' respostas registradas.</div>'}
    </div>
  `;
}

home();
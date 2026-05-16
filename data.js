const PROGRAMS = {
  mestrado: [
    {
      id: "fousp-mestrado",
      nome: "Mestrado em Odontologia - FOUSP",
      instituicao: "FOUSP - Faculdade de Odontologia da USP (São Paulo)",
      areas: [
        "Dentística",
        "Endodontia",
        "Biomateriais",
        "Biologia Oral",
        "Diagnóstico Bucal",
        "Odontopediatria, Ortodontia, Periodontia, Prótese (verificar áreas no edital)"
      ],
      vagas: "28 vagas (1º sem. 2026): Dentística 10 · Endodontia 8 · Biomateriais 7 · Biologia Oral 3",
      datas: {
        "Exame de seleção": "02/12/2025",
        "Inscrições": "Até 1 semana antes do exame",
        "Início das aulas": "Março/2026"
      },
      processo: [
        "Prova escrita de conhecimentos específicos",
        "Prova de inglês (eliminatória)",
        "Análise de projeto de pesquisa",
        "Análise de currículo Lattes",
        "Entrevista com banca examinadora"
      ],
      requisitos: [
        "Diploma de graduação em Odontologia (ou área afim conforme edital)",
        "Currículo Lattes atualizado",
        "Projeto de pesquisa alinhado a uma linha do programa",
        "Indicação prévia de orientador (recomendado)",
        "Proficiência em inglês (ver seção específica abaixo)"
      ],
      proficiencia: {
        idioma: "Inglês",
        validade: "Certificado com validade de 3 anos",
        criterios: [
          "TOEFL/ITP (Paper) - mínimo 430 pontos",
          "TOEFL/iBT (Internet) - mínimo 39 pontos",
          "IELTS - mínimo 5,0",
          "Cambridge FCE - nível B2 (mínimo)",
          "Aprovação em teste no CIL-FFLCH/USP (alternativa interna USP)"
        ]
      },
      editalRecente: {
        descricao: "Edital 2026 - Ingresso 1º semestre (validade 01/01/2025 a 31/12/2025)",
        url: "https://site.fo.usp.br/pos-graduacao/odontologia/ingresso/"
      },
      provasAnteriores: null,
      site: "https://site.fo.usp.br/pos-graduacao/odontologia/"
    },
    {
      id: "forp-mestrado",
      nome: "Mestrado em Odontologia - FORP-USP",
      instituicao: "FORP-USP - Faculdade de Odontologia de Ribeirão Preto",
      areas: [
        "Odontopediatria",
        "Periodontia",
        "Reabilitação Oral (Mestrado e Doutorado)",
        "Odontologia Restauradora (Mestrado e Doutorado)",
        "Cirurgia Buco-Maxilo-Facial"
      ],
      vagas: "Varia por área (ex.: edital 2025 ofereceu 5 vagas em Buco-Maxilo-Facial). Consultar edital vigente.",
      datas: {
        "Inscrições": "Agosto–Setembro",
        "Provas": "Outubro",
        "Resultado": "Dezembro",
        "Início": "Março"
      },
      processo: [
        "Prova de conhecimentos específicos",
        "Prova de inglês",
        "Análise de projeto de pesquisa",
        "Análise curricular",
        "Entrevista"
      ],
      requisitos: [
        "Graduação em Odontologia",
        "Projeto de pesquisa",
        "Carta de aceite de orientador (quando exigido pela área)",
        "Currículo Lattes",
        "Proficiência em inglês (ver seção específica abaixo)"
      ],
      proficiencia: {
        idioma: "Inglês",
        validade: "Conforme estabelecido por cada teste / CPG-FORP",
        criterios: [
          "TOEFL iBT - mínimo 50 pontos (para mestrado)",
          "TOEFL ITP (Level 1) - mínimo 450 pontos",
          "IELTS - mínimo 4,5 (validade 2 anos)",
          "Cambridge FCE (First Certificate in English) - validade 5 anos",
          "TEAP - mínimo 50 pontos (validade 2 anos)",
          "Certificado deve ser emitido por instituição reconhecida pela CPG"
        ]
      },
      editalRecente: {
        descricao: "Editais por área de concentração (consultar a página de pós-graduação)",
        url: "https://www.forp.usp.br/?page_id=71"
      },
      provasAnteriores: null,
      site: "https://www.forp.usp.br"
    },
    {
      id: "fob-mestrado",
      nome: "Mestrado em Ciências Odontológicas Aplicadas - FOB-USP",
      instituicao: "FOB-USP - Faculdade de Odontologia de Bauru",
      areas: [
        "Biologia Oral, Estomatologia, Radiologia e Imaginologia",
        "Dentística",
        "Endodontia",
        "Odontopediatria",
        "Ortodontia e Saúde Coletiva (opção Saúde Coletiva)",
        "Patologia Bucal",
        "Periodontia",
        "Reabilitação Oral"
      ],
      vagas: "84 vagas totais (1º sem. 2026): Biologia Oral 30 · Estomato/Radiologia 7 · Dentística 12 · Endodontia 4 · Odontopediatria 10 · Saúde Coletiva 3 · Patologia Bucal 2 · Periodontia 4 · Reabilitação Oral 12 (inclui ampla concorrência + ações afirmativas)",
      datas: {
        "Inscrições (mestrado)": "Até 12/02/2026",
        "Inscrições (doutorado)": "Até 12/03/2026",
        "Início": "Março/2026"
      },
      processo: [
        "Prova escrita específica da área",
        "Prova de inglês",
        "Avaliação do projeto de pesquisa",
        "Avaliação de currículo Lattes",
        "Entrevista"
      ],
      requisitos: [
        "Diploma de Odontologia",
        "Lattes atualizado",
        "Projeto de pesquisa",
        "Carta de intenção",
        "Possibilidade de inscrição por ações afirmativas (autodeclaração)",
        "Comprovante de proficiência em inglês (ver seção específica abaixo)"
      ],
      proficiencia: {
        idioma: "Inglês",
        validade: "Certificados obtidos nos últimos 2 anos. Prazo de apresentação: até 12 meses após a 1ª matrícula no curso.",
        criterios: [
          "TOEFL - aceito conforme política da CPG-FOB",
          "TEAP (Test of English for Academic Purposes) - mínimo 50 pontos (validade 2 anos)",
          "IELTS - mínimo 4,5 (validade 2 anos)",
          "Outros testes equivalentes aceitos pela CPG-USP"
        ]
      },
      editalRecente: {
        descricao: "Edital 2026 - Mestrado e Doutorado em Ciências Odontológicas Aplicadas",
        url: "https://inscricao.posgraduacao.fob.usp.br/index.php"
      },
      provasAnteriores: null,
      site: "https://posgraduacao.fob.usp.br"
    },
    {
      id: "unesp-araraquara-mestrado",
      nome: "Mestrado em Odontologia - UNESP Araraquara",
      instituicao: "FOAr - UNESP Araraquara",
      areas: [
        "Dentística Restauradora",
        "Endodontia",
        "Ortodontia",
        "Periodontia",
        "Prótese",
        "Odontopediatria",
        "Saúde Coletiva"
      ],
      vagas: "Distribuídas por área de concentração - consultar Anexo do edital VUNESP. Processo Seletivo Unificado UNESP 2026 contempla 48 programas / 81 cursos.",
      datas: {
        "Inscrições (PSU 2026)": "Até 22/09/2025",
        "Provas": "Outubro/2025",
        "Início": "Março/2026"
      },
      processo: [
        "Prova escrita de conhecimentos",
        "Prova de inglês",
        "Análise do anteprojeto",
        "Análise curricular",
        "Entrevista"
      ],
      requisitos: [
        "Graduação em Odontologia",
        "Pré-projeto de pesquisa",
        "Currículo Lattes",
        "Documentação acadêmica conforme edital",
        "Comprovante de proficiência em inglês (ver seção específica abaixo)"
      ],
      proficiencia: {
        idioma: "Inglês",
        validade: "Conforme estabelecido por cada teste",
        criterios: [
          "IELTS - mínimo 6,0",
          "TOEFL Paper Based (PBT) - mínimo 550 pontos",
          "TOEFL Computer Based (CBT) - mínimo 213 pontos",
          "TOEFL Internet Based (iBT) - mínimo 80 pontos",
          "TOEIC - mínimo 605 pontos",
          "Certificado emitido por instituição reconhecida pela CCPG-UNESP"
        ]
      },
      editalRecente: {
        descricao: "Processo Seletivo Unificado UNESP - Pós-Graduação 2026 (VUNESP)",
        url: "https://www.vunesp.com.br/VNSP2508"
      },
      provasAnteriores: {
        descricao: "Edição anterior do PSU (VUNESP 2025) - acessar Provas/Gabaritos no concurso encerrado",
        url: "https://www.vunesp.com.br/VNSP2405"
      },
      site: "https://www.foar.unesp.br"
    },
    {
      id: "unesp-sjc-mestrado",
      nome: "Mestrado em Odontologia - UNESP São José dos Campos",
      instituicao: "ICT - UNESP São José dos Campos",
      areas: [
        "Biopatologia Bucal (Mestrado e Doutorado)",
        "Odontologia Restauradora (Mestrado e Doutorado)",
        "Ciência e Tecnologia Aplicada à Odontologia (Mestrado Profissional)"
      ],
      vagas: "Distribuídas por área - consultar Anexo do edital VUNESP do Processo Seletivo Unificado UNESP 2026.",
      datas: {
        "Inscrições (PSU 2026)": "Até 22/09/2025",
        "Provas": "Outubro/2025",
        "Início": "Março/2026"
      },
      processo: [
        "Prova escrita",
        "Prova de inglês",
        "Avaliação de projeto e currículo",
        "Entrevista"
      ],
      requisitos: [
        "Diploma em Odontologia",
        "Projeto de pesquisa",
        "Currículo Lattes",
        "Documentação conforme edital",
        "Comprovante de proficiência em inglês (ver seção específica abaixo)"
      ],
      proficiencia: {
        idioma: "Inglês",
        validade: "Conforme estabelecido por cada teste",
        criterios: [
          "IELTS - mínimo 6,0",
          "TOEFL Paper Based (PBT) - mínimo 550 pontos",
          "TOEFL Computer Based (CBT) - mínimo 213 pontos",
          "TOEFL Internet Based (iBT) - mínimo 80 pontos",
          "TOEIC - mínimo 605 pontos",
          "TEAP e CPE também aceitos pela UNESP",
          "Certificado emitido por instituição reconhecida pela CCPG-UNESP"
        ]
      },
      editalRecente: {
        descricao: "Processo Seletivo Unificado UNESP - Pós-Graduação 2026 (VUNESP)",
        url: "https://www.vunesp.com.br/VNSP2508"
      },
      provasAnteriores: {
        descricao: "Edição anterior do PSU (VUNESP 2025) - acessar Provas/Gabaritos no concurso encerrado",
        url: "https://www.vunesp.com.br/VNSP2405"
      },
      site: "https://www.ict.unesp.br"
    },
    {
      id: "fop-unicamp-mestrado",
      nome: "Mestrado em Odontologia - FOP-UNICAMP",
      instituicao: "FOP-UNICAMP - Faculdade de Odontologia de Piracicaba",
      areas: [
        "Clínica Odontológica",
        "Odontologia (Endodontia, Periodontia, Prótese, Materiais Dentários, etc.)",
        "Biologia Buco-Dental",
        "Radiologia Odontológica",
        "Saúde Coletiva",
        "Mestrado Profissional"
      ],
      vagas: "6 Programas de Pós-Graduação stricto sensu + 1 Mestrado Profissional. Vagas por área no edital específico vigente.",
      datas: {
        "Inscrições": "Conforme cronograma de cada PPG (geralmente Set–Out)",
        "Seleção": "Novembro",
        "Início": "Março"
      },
      processo: [
        "Prova de conhecimentos específicos",
        "Prova de inglês (TEAP/TOEFL aceitos em algumas áreas)",
        "Análise do projeto de pesquisa",
        "Análise do Lattes",
        "Entrevista"
      ],
      requisitos: [
        "Graduação em Odontologia ou área correlata",
        "Projeto de pesquisa em linha do programa",
        "Lattes atualizado",
        "Cartas de recomendação (conforme área)",
        "Comprovante de proficiência em inglês (ver seção específica abaixo)"
      ],
      proficiencia: {
        idioma: "Inglês",
        validade: "Validade de 2 anos quando o certificado não indicar data própria",
        criterios: [
          "TEAP (Test of English for Academic Purposes) - mínimo 7,0",
          "TOEFL - mínimo 550 pontos",
          "IELTS - mínimo 5,0",
          "Certificado do CEL (Centro de Ensino de Línguas da UNICAMP)",
          "Validação ocorre no momento do processo seletivo, conforme regras do edital de cada PPG"
        ]
      },
      editalRecente: {
        descricao: "Processos Seletivos em Andamento - FOP/UNICAMP",
        url: "https://www.fop.unicamp.br/cpg/processos-seletivos-em-andamento/"
      },
      provasAnteriores: {
        descricao: "Exames Anteriores - FOP/UNICAMP (acervo público de provas por área e ano)",
        url: "https://www.fop.unicamp.br/cpg/index.php/content/36-exames-anteriores"
      },
      site: "https://www.fop.unicamp.br/cpg/"
    }
  ],

  residencia: [
    {
      id: "hc-fmusp",
      nome: "Residência Multiprofissional / CTBMF / Odontologia Hospitalar",
      instituicao: "HC-FMUSP - Hospital das Clínicas da FMUSP",
      areas: [
        "Cirurgia e Traumatologia Bucomaxilofacial (CTBMF)",
        "Odontologia Hospitalar",
        "Estomatologia",
        "Programas multiprofissionais com inclusão de Odontologia"
      ],
      vagas: "106 vagas totais no edital 2026 do HC-FMUSP (Multiprofissional + Área Profissional da Saúde, distribuídas entre profissões). Vagas específicas de Odontologia detalhadas no edital.",
      datas: {
        "Inscrições": "19/08/2025 a 06/10/2025",
        "Provas": "Outubro/Novembro de 2025",
        "Início": "Março/2026",
        "Bolsa inicial": "≈ R$ 4.106,09/mês (CAPES/MEC)"
      },
      processo: [
        "Prova teórica (conhecimentos gerais + específicos da área)",
        "Análise de currículo",
        "Entrevista com banca (etapa eliminatória)",
        "Avaliação prática (algumas áreas)"
      ],
      requisitos: [
        "Diploma em Odontologia reconhecido pelo MEC",
        "Inscrição ativa no CRO-SP",
        "Regime de dedicação exclusiva (60h semanais)",
        "Não estar matriculado em outro programa de residência"
      ],
      proficiencia: {
        idioma: "Não exigida",
        validade: "—",
        criterios: [
          "O edital de Residência Multiprofissional do HC-FMUSP (2026) não exige comprovação prévia de proficiência em língua estrangeira para ingresso.",
          "A avaliação é centrada em conhecimentos da área profissional, SUS e ética."
        ]
      },
      editalRecente: {
        descricao: "Edital Residência Multiprofissional 2026 - HCFMUSP (PDF)",
        url: "https://hcxfmusp.org.br/portal/wp-content/uploads/2025/08/Edital-de-abertura-das-inscricoes-Processo-Seletivo-Residencia-Multiprofissional-2026-HCFMUSP.pdf"
      },
      provasAnteriores: {
        descricao: "FUVEST - Provas e Gabaritos da Residência em Área Profissional da Saúde (USP)",
        url: "https://www.fuvest.br/residencia-medica-provas-e-gabarito/"
      },
      site: "https://hcxfmusp.org.br/portal/residencia-multiprofissional/"
    },
    {
      id: "icesp",
      nome: "Residência em Odontologia em Oncologia",
      instituicao: "ICESP - Instituto do Câncer do Estado de São Paulo",
      areas: [
        "Odontologia em Oncologia",
        "Cuidados Paliativos",
        "Cirurgia de Cabeça e Pescoço (apoio)"
      ],
      vagas: "Consultar edital vigente. Inscrição é processada via FMUSP/USP.",
      datas: {
        "Inscrições": "Geralmente Ago–Set (junto ao processo USP)",
        "Provas": "Outubro/Novembro",
        "Início": "Março"
      },
      processo: [
        "Prova teórica (odontologia geral + estomatologia/oncologia)",
        "Análise curricular",
        "Entrevista"
      ],
      requisitos: [
        "Graduação em Odontologia",
        "CRO-SP",
        "Dedicação exclusiva 60h/semana",
        "Não cumular outra residência"
      ],
      proficiencia: {
        idioma: "Não exigida",
        validade: "—",
        criterios: [
          "O processo seletivo para residências da USP/ICESP (via FUVEST) não exige comprovação prévia de proficiência em língua estrangeira.",
          "Recomenda-se inglês para leitura técnica, mas não é critério eliminatório no ingresso."
        ]
      },
      editalRecente: {
        descricao: "Ensino e Pesquisa - ICESP (acompanhar publicação do edital pela USP)",
        url: "https://icesp.org.br/ensino-e-pesquisa/"
      },
      provasAnteriores: {
        descricao: "FUVEST - Provas e Gabaritos (residências da USP, incluindo programas do ICESP)",
        url: "https://www.fuvest.br/residencia-medica-provas-e-gabarito/"
      },
      site: "https://icesp.org.br"
    },
    {
      id: "hrac-bauru",
      nome: "Residência Multiprofissional em Saúde - Centrinho",
      instituicao: "HRAC-USP - Hospital de Reabilitação de Anomalias Craniofaciais (Bauru)",
      areas: [
        "Residência Multiprofissional em Síndromes e Anomalias Craniofaciais (inclui Odontologia)",
        "Residência Multiprofissional em Saúde Auditiva",
        "Ortodontia em fissuras lábio-palatais",
        "Odontopediatria hospitalar"
      ],
      vagas: "USP Bauru oferece 4 programas multiprofissionais com 41 vagas totais (Odontologia incluída entre as profissões elegíveis).",
      datas: {
        "Inscrições": "Via FUVEST (geralmente Set–Out/2025)",
        "Provas": "Novembro/2025",
        "Início": "Março/2026"
      },
      processo: [
        "Prova escrita (FUVEST)",
        "Análise de currículo Lattes",
        "Entrevista",
        "Avaliação prática (quando aplicável)"
      ],
      requisitos: [
        "Diploma de Odontologia",
        "CRO ativo",
        "Disponibilidade integral",
        "Documentação conforme edital FUVEST"
      ],
      proficiencia: {
        idioma: "Não exigida",
        validade: "—",
        criterios: [
          "Edital FUVEST/HRAC-USP da Residência Multiprofissional em Saúde não exige comprovação prévia de proficiência em língua estrangeira.",
          "Conteúdo cobrado é técnico-clínico e relativo ao SUS."
        ]
      },
      editalRecente: {
        descricao: "Residência Multiprofissional em Saúde - Edital 2026 (FUVEST/HRAC-USP)",
        url: "https://hrac.usp.br/editais/processos-seletivos/extensao/abertos-andamento-extensao/2025/residencia-multiprofissional-em-saude-2026/"
      },
      provasAnteriores: {
        descricao: "FUVEST - Provas e Gabaritos da Residência em Área Profissional da Saúde (USP)",
        url: "https://www.fuvest.br/residencia-medica-provas-e-gabarito/"
      },
      site: "https://hrac.usp.br"
    },
    {
      id: "hospital-heliopolis",
      nome: "Residência em CTBMF",
      instituicao: "Hospital Heliópolis (São Paulo)",
      areas: [
        "Cirurgia e Traumatologia Bucomaxilofacial"
      ],
      vagas: "Consultar edital vigente do hospital.",
      datas: {
        "Inscrições": "Geralmente Out–Nov",
        "Provas": "Novembro/Dezembro",
        "Início": "Março"
      },
      processo: [
        "Prova teórica",
        "Prova prática",
        "Análise curricular",
        "Entrevista"
      ],
      requisitos: [
        "Graduação em Odontologia",
        "CRO-SP",
        "Regime de dedicação exclusiva",
        "Documentação conforme edital"
      ],
      proficiencia: {
        idioma: "Não exigida (em geral)",
        validade: "—",
        criterios: [
          "Editais anteriores do Hospital Heliópolis para CTBMF não exigem comprovação prévia de proficiência em língua estrangeira.",
          "Conferir o edital vigente."
        ]
      },
      editalRecente: {
        descricao: "Página institucional - Hospital Heliópolis (acompanhar publicação do edital)",
        url: "https://www.hosphel.sp.gov.br"
      },
      provasAnteriores: null,
      site: "https://www.hosphel.sp.gov.br"
    },
    {
      id: "santa-casa-sp",
      nome: "Residência em Odontologia / CTBMF",
      instituicao: "Santa Casa de Misericórdia de São Paulo",
      areas: [
        "CTBMF",
        "Odontologia Hospitalar",
        "Pacientes com Necessidades Especiais"
      ],
      vagas: "Consultar edital vigente (programa específico de Odontologia/CTBMF).",
      datas: {
        "Inscrições (referência médica)": "01/10 a 04/11/2025",
        "Início": "Março/2026"
      },
      processo: [
        "Prova escrita de conhecimentos",
        "Análise curricular",
        "Entrevista com banca"
      ],
      requisitos: [
        "Diploma em Odontologia",
        "CRO ativo",
        "Disponibilidade 60h semanais",
        "Não acumular residência ou vínculo conflitante"
      ],
      proficiencia: {
        idioma: "Não exigida",
        validade: "—",
        criterios: [
          "O edital de residência da Santa Casa de Misericórdia de SP não exige comprovação prévia de proficiência em língua estrangeira para ingresso.",
          "Avaliação centrada em conhecimentos específicos."
        ]
      },
      editalRecente: {
        descricao: "Página de Editais - Santa Casa de Misericórdia de São Paulo",
        url: "https://santacasasp.org.br/editais/"
      },
      provasAnteriores: null,
      site: "https://santacasasp.org.br"
    },
    {
      id: "unifesp-hsp",
      nome: "Residência Multiprofissional em Saúde - Odontologia",
      instituicao: "Hospital São Paulo - UNIFESP/EPM",
      areas: [
        "Odontologia Hospitalar",
        "Atenção ao Paciente Crítico",
        "Oncologia",
        "Demais programas multiprofissionais com vagas para Odontologia"
      ],
      vagas: "Vagas por programa publicadas no edital COREMU/UNIFESP. Odontologia consta entre as profissões contempladas.",
      datas: {
        "Inscrições": "Geralmente Out–Nov",
        "Prova objetiva": "Dezembro",
        "Entrevista": "Janeiro",
        "Início": "Março"
      },
      processo: [
        "Prova objetiva (conhecimentos gerais + SUS + específicos)",
        "Análise de currículo",
        "Entrevista"
      ],
      requisitos: [
        "Graduação em Odontologia",
        "CRO ativo",
        "Disponibilidade integral 60h/semana",
        "Bolsa CAPES/MEC (conforme edital)"
      ],
      proficiencia: {
        idioma: "Não exigida",
        validade: "—",
        criterios: [
          "Edital COREMU/UNIFESP da Residência Multiprofissional não exige comprovação prévia de proficiência em língua estrangeira.",
          "Prova objetiva versa sobre SUS, conhecimentos gerais e específicos da área."
        ]
      },
      editalRecente: {
        descricao: "Residência Multiprofissional - UNIFESP (página oficial)",
        url: "https://residenciamultiprofissional.unifesp.br/"
      },
      provasAnteriores: {
        descricao: "Provas e Gabaritos - COREMU/Fap-UNIFESP (edições anteriores, área de Odontologia)",
        url: "https://fapunifesp.edu.br/coremu/provas.aspx"
      },
      site: "https://site.unifesp.br/coreme/"
    },
    {
      id: "hm-tatuape",
      nome: "Residência em CTBMF / Odontologia Cirúrgica BMF",
      instituicao: "Hospital Municipal Dr. Carmino Caricchio (Tatuapé)",
      areas: [
        "Cirurgia e Traumatologia Bucomaxilofacial"
      ],
      vagas: "Programa de CTBMF é ofertado em 4 hospitais municipais (incluindo o Tatuapé). Vagas no edital municipal vigente.",
      datas: {
        "Inscrições": "Conforme edital da SMS-SP",
        "Início": "Março"
      },
      processo: [
        "Prova teórica",
        "Prova prática (quando aplicável)",
        "Análise curricular",
        "Entrevista"
      ],
      requisitos: [
        "Diploma em Odontologia",
        "CRO-SP",
        "Dedicação exclusiva",
        "Documentação conforme edital"
      ],
      proficiencia: {
        idioma: "Não exigida",
        validade: "—",
        criterios: [
          "Editais da SMS-SP para CTBMF não exigem comprovação prévia de proficiência em língua estrangeira.",
          "Conferir o edital vigente da Prefeitura/SMS."
        ]
      },
      editalRecente: {
        descricao: "Página do programa CTBMF / Odontologia Cirúrgica BMF - SMS-SP",
        url: "https://prefeitura.sp.gov.br/web/saude/w/ems/266631"
      },
      provasAnteriores: null,
      site: "https://prefeitura.sp.gov.br/web/saude/w/hospital-municipal-do-tatuape-dr.-carmino-caricchio"
    },
    {
      id: "hospital-servidor",
      nome: "Residência em Odontologia / CTBMF",
      instituicao: "HSPE - Hospital do Servidor Público Estadual (IAMSPE)",
      areas: [
        "CTBMF",
        "Odontologia Hospitalar"
      ],
      vagas: "IAMSPE 2026: 244 vagas no total (residência médica). Vagas específicas de Odontologia/CTBMF — consultar edital IAMSPE vigente.",
      datas: {
        "Inscrições": "A partir de 15/10/2025 (edital geral IAMSPE)",
        "Prova": "20/12/2025",
        "Início": "Março/2026"
      },
      processo: [
        "Prova teórica",
        "Análise de currículo",
        "Entrevista"
      ],
      requisitos: [
        "Graduação em Odontologia",
        "CRO ativo",
        "Dedicação exclusiva",
        "Documentação conforme edital"
      ],
      proficiencia: {
        idioma: "Não exigida",
        validade: "—",
        criterios: [
          "Edital IAMSPE/HSPE de residência não exige comprovação prévia de proficiência em língua estrangeira.",
          "Conferir o edital vigente."
        ]
      },
      editalRecente: {
        descricao: "Residência - IAMSPE / HSPE (acompanhar publicação no portal institucional)",
        url: "https://www.iamspe.sp.gov.br/iamspe/noticias/residencia-medica"
      },
      provasAnteriores: {
        descricao: "Concursos IAMSPE (provas anteriores publicadas no portal institucional)",
        url: "https://www.iamspe.sp.gov.br/iamspe/faca_parte_do_iamspe/concursos"
      },
      site: "https://www.iamspe.sp.gov.br"
    }
  ],

  exterior: [
    {
      id: "korea-gks",
      nome: "Global Korea Scholarship (GKS) - Mestrado em Odontologia",
      instituicao: "Coreia do Sul · Seoul National University, Yonsei, Korea University, KAIST",
      pais: "Coreia do Sul",
      areas: [
        "Programas de Mestrado em Odontologia (Dentistry / Oral Sciences)",
        "Áreas de pesquisa: Periodontia, Reabilitação Oral, Biologia Oral, Implantodontia, Materiais Dentários",
        "Health Promotion / Public Health (programas em inglês em várias universidades)",
        "PhD em Dental Sciences (track separado)"
      ],
      vagas: "≈ 2.000 bolsas anuais (graduação + pós) - 800 via Embassy Track, 1.200 via University Track. Brasil tem cota fixa de bolsas Embassy a cada ano (geralmente 4–6 vagas para todas as áreas).",
      datas: {
        "Anúncio do edital (NIIED)": "Fevereiro/2026",
        "Inscrições Embassy Track (Brasil)": "Fev–Março/2026 via Embaixada da Coreia em Brasília",
        "Inscrições University Track": "Março/2026 (varia por universidade)",
        "Avaliação NIIED": "Abril–Maio/2026",
        "Resultado final": "Junho/2026",
        "Chegada à Coreia": "Agosto/2026",
        "Curso de coreano obrigatório": "Setembro/2026 a Agosto/2027 (1 ano)",
        "Início do Mestrado": "Setembro/2027 (ou Março/2027 se TOPIK 5+)"
      },
      comoFunciona: [
        "1. **Escolher track:** Embassy (mais competitivo no Brasil, ≈4 vagas/ano) ou University (aplicação direta à universidade coreana, mais vagas mas exige mais autonomia).",
        "2. **Identificar universidade e orientador:** GKS aceita até 3 universidades por candidato. Para Odontologia, priorizar SNU, Yonsei e Korea University. Recomendado contato prévio com professor.",
        "3. **Aplicação:** preencher formulários NIIED + carta pessoal + plano de estudo + cartas de recomendação + diploma e histórico (apostilados Haia + tradução juramentada).",
        "4. **Aprovação em 3 etapas:** (a) seleção pela Embaixada/Universidade, (b) avaliação central do NIIED, (c) aceite formal da universidade de destino.",
        "5. **Curso de coreano de 1 ano** obrigatório antes do mestrado (dispensável apenas com TOPIK nível 5 ou 6).",
        "6. **Mestrado de 2 anos** com bolsa integral. Total do programa: 3 anos."
      ],
      processo: [
        "Etapa 1 - Application Form (NIIED) preenchido em inglês",
        "Etapa 2 - Personal Statement (até 2 páginas)",
        "Etapa 3 - Study Plan (objetivos acadêmicos + área de pesquisa)",
        "Etapa 4 - 2 cartas de recomendação acadêmicas",
        "Etapa 5 - Documents apostilados (Haia) + tradução juramentada para inglês ou coreano",
        "Etapa 6 - Entrevista (Embaixada da Coreia em Brasília, presencial ou online)",
        "Etapa 7 - Exame médico (NIIED Health Statement Form)",
        "Etapa 8 - Aprovação final + aceitação universitária"
      ],
      documentos: [
        "Application Form (NIIED) preenchido",
        "Personal Statement",
        "Study Plan",
        "2 cartas de recomendação (do orientador da graduação + 1 professor)",
        "Histórico escolar (diploma + transcript) - apostilados na Haia",
        "Tradução juramentada (inglês ou coreano)",
        "Cópia do RG e Passaporte válido",
        "Comprovante de proficiência (TOPIK, TOEFL ou IELTS)",
        "Certificado de saúde (Health Statement Form)",
        "Cópia do certificado de nascimento (e dos pais, se exigido)",
        "Portfólio/CV + publicações"
      ],
      requisitos: [
        "Cidadania não-coreana (candidato e ambos os pais)",
        "Menos de 40 anos completados em 1º de março do ano de ingresso",
        "Diploma de graduação concluído antes do início do programa",
        "GPA mínimo de 80/100, 2.64/4.0 ou top 20% da turma",
        "Boa saúde física e mental (atestado médico exigido)",
        "Não ter recebido bolsa anteriormente do governo coreano",
        "Não estar atualmente matriculado em universidade coreana"
      ],
      proficiencia: {
        idioma: "Inglês ou Coreano",
        validade: "TOPIK: válido para sempre · TOEFL/IELTS: 2 anos",
        criterios: [
          "TOPIK (Test of Proficiency in Korean) nível 5 ou 6 - dispensa o ano de língua coreana",
          "TOEFL iBT mínimo 80 (para programas ministrados em inglês)",
          "IELTS Academic mínimo 5,5",
          "Candidatos sem TOPIK fazem 1 ano de curso de coreano financiado pela bolsa",
          "Bônus mensal de 100.000 KRW para quem atinge TOPIK 5+",
          "Sem TOPIK ao final do 1º ano: bolsa pode ser suspensa"
        ]
      },
      editalRecente: {
        descricao: "Edital GKS 2026 - Study in Korea (NIIED)",
        url: "https://www.studyinkorea.go.kr/in/plan/scholarship.do"
      },
      provasAnteriores: {
        descricao: "Application Guidelines e documentos dos editais anteriores - GKS portal",
        url: "https://www.studyinkorea.go.kr/in/plan/scholarship.do"
      },
      bolsa: "**Mensalidade:** 1.000.000 KRW/mês (≈ US$ 750) · **Tuition:** integral por 4 semestres · **Passagem:** ida e volta para o Brasil (econômica) · **Auxílio instalação:** 200.000 KRW na chegada · **Seguro saúde:** mensal pago pela bolsa · **Bolsa de tese:** 500.000–800.000 KRW · **Bônus TOPIK:** +100.000 KRW/mês",
      dicasBrasileiros: [
        "🇧🇷 Brasil tem cota Embassy Track pequena (≈4–6 vagas/ano para todas as áreas) - University Track tem mais chance numericamente",
        "📞 Embaixada da Coreia em Brasília é o ponto de contato oficial - acompanhar redes sociais '@studyinkoreabrazil'",
        "📑 Apostila de Haia é obrigatória para diploma e histórico (cartório de notas brasileiro)",
        "✍️ Cartas de recomendação devem ser em inglês ou coreano, em papel timbrado, assinadas, enviadas em envelope lacrado",
        "🎯 Para Odontologia: priorizar contato prévio com professor da SNU College of Dentistry ou Yonsei",
        "💡 Diferencial: ter publicações em revistas indexadas (Scielo, Pubmed) e experiência em IC",
        "⏰ Apostilar e traduzir documentos leva 30–60 dias - começar com 4 meses de antecedência"
      ],
      contato: "Embaixada da República da Coreia no Brasil · SES Av. das Nações, Q. 809, Lt. 14, Brasília-DF · embcorea.brazil@mofa.go.kr · (61) 3321-2500",
      site: "https://en.snu.ac.kr/admission/graduate/scholarships/before_application"
    },

    {
      id: "japan-mext",
      nome: "MEXT (Monbukagakusho) - Pesquisa para Mestrado em Odontologia",
      instituicao: "Japão · Institute of Science Tokyo (ex-TMDU), Osaka University, Tohoku, Kyushu, Hokkaido",
      pais: "Japão",
      areas: [
        "Oral Health Sciences (Master's & PhD)",
        "Medical and Dental Sciences (programa unificado em várias universidades)",
        "Pesquisa em: Cirurgia Oral, Reabilitação, Biologia Oral, Materiais Dentários, Implantodontia, Periodontia",
        "Public Oral Health (programa em inglês em algumas universidades)"
      ],
      vagas: "Embassy Recommendation Brasil: ≈ 25 bolsas/ano para todas as áreas (Pesquisa). University Recommendation: cota direta por universidade japonesa.",
      datas: {
        "Anúncio Embassy (Embaixada Japão Brasília)": "Abril/2026",
        "Inscrições Embassy": "Maio–Junho/2026 (prazo único anual)",
        "Exames escritos": "Julho/2026 (na Embaixada do Japão em Brasília)",
        "Entrevista Embassy": "Agosto/2026",
        "Resultado Primário": "Setembro/2026",
        "Aceitação universitária": "Outubro/2026 a Janeiro/2027",
        "Resultado final NIIED Japão": "Fevereiro/2027",
        "Treinamento de japonês (se aplicável)": "Abril–Outubro/2027 (6 meses)",
        "Início do programa": "Outubro/2027 (Research Student) → Mestrado Abril/2028"
      },
      comoFunciona: [
        "1. **Período como 'Research Student':** brasileiros aprovados começam como pesquisadores afiliados a um laboratório por 6 meses a 1,5 anos, antes do mestrado oficial.",
        "2. **Exame de admissão da universidade:** durante o período de Research Student, o candidato presta o exame interno do programa de mestrado.",
        "3. **Duas rotas:** Embassy Recommendation (via Embaixada do Japão em Brasília) ou University Recommendation (universidade japonesa nomeia o candidato).",
        "4. **Carta de aceite de orientador é decisiva:** mesmo Embassy Track exige que o candidato encontre um Professor (Sensei) disposto a recebê-lo.",
        "5. **Treinamento de japonês:** se o candidato não tiver JLPT N2+, faz 6 meses pré-acadêmicos pagos pela bolsa.",
        "6. **Mestrado de 2 anos** ministrado em japonês (predominantemente) ou inglês (programas G30/internacionais)."
      ],
      processo: [
        "Etapa 1 - Application Form MEXT (formulário oficial do MEXT)",
        "Etapa 2 - Field of Study and Research Plan Form (em inglês)",
        "Etapa 3 - 2 cartas de recomendação acadêmicas",
        "Etapa 4 - Diploma de graduação + histórico (com tradução juramentada para inglês ou japonês)",
        "Etapa 5 - Exames escritos: Japonês + Inglês (na Embaixada do Japão em Brasília)",
        "Etapa 6 - Entrevista na Embaixada (presencial)",
        "Etapa 7 - Contato prévio com orientador japonês (Acceptance Letter informal)",
        "Etapa 8 - Aceitação formal da universidade",
        "Etapa 9 - Exame médico oficial",
        "Etapa 10 - Aprovação final pelo MEXT"
      ],
      documentos: [
        "Application Form MEXT (preenchido em inglês ou japonês)",
        "Field of Study and Research Plan Form",
        "Diploma de graduação (cópia autenticada + tradução juramentada)",
        "Histórico escolar completo (com escala de notas explicada)",
        "2 cartas de recomendação acadêmicas (em papel timbrado, lacradas)",
        "Cópia do passaporte válido",
        "Foto 4,5x4,5 cm (formato japonês oficial)",
        "Comprovante de proficiência (JLPT, TOEFL ou IELTS)",
        "Atestado médico (Certificate of Health)",
        "Portfolio de pesquisa (TCC, IC, publicações)",
        "Acceptance Letter informal do orientador (diferencial)"
      ],
      requisitos: [
        "Nacionalidade não-japonesa (sem dupla nacionalidade japonesa)",
        "Menos de 35 anos completados em 1º de abril do ano de ingresso",
        "Diploma de graduação (ou previsão de conclusão antes do início)",
        "GPA igual ou superior a 2.30/3.00 nos últimos 2 anos",
        "Disposição para aprender japonês",
        "Aprovação no exame médico (incluindo HIV negativo, ausência de TB)",
        "Não ter recebido bolsa MEXT anteriormente"
      ],
      proficiencia: {
        idioma: "Inglês e/ou Japonês",
        validade: "TOEFL/IELTS: 2 anos · JLPT: sem validade",
        criterios: [
          "Exame de Japonês obrigatório na Embaixada (mesmo para programas em inglês)",
          "Exame de Inglês obrigatório na Embaixada (todos os candidatos)",
          "JLPT N2 ou N1 - diferencial enorme; N1 dispensa treinamento prévio",
          "TOEFL iBT mínimo 80 ou IELTS 6,0 para programas em inglês (G30)",
          "Universidades top (Tokyo, Osaka, Kyoto): exigem TOEFL iBT 95+",
          "Curso de japonês de 6 meses oferecido antes do mestrado se necessário"
        ]
      },
      editalRecente: {
        descricao: "MEXT Scholarship 2026 - Embaixada do Japão no Brasil",
        url: "https://www.br.emb-japan.go.jp/itpr_pt/bolsasdeestudosdogovernodojapao.html"
      },
      provasAnteriores: {
        descricao: "Past Exam Questions oficiais - Study in Japan (japonês + inglês + matemática + ciências por área)",
        url: "https://www.studyinjapan.go.jp/en/planning/scholarships/applying/instructions/"
      },
      bolsa: "**Mensalidade:** 144.000 JPY/mês (Mestrado) ou 145.000 JPY/mês (Doutorado) - ≈ US$ 970 · **Tuition:** isenção integral · **Passagem:** ida e volta em classe econômica · **Seguro saúde:** integral · **Bônus regional:** +2.000–3.000 JPY/mês em áreas designadas · Duração padrão: até 4 anos (Mestrado: 2 anos + 6 meses de japonês)",
      dicasBrasileiros: [
        "🇧🇷 Embaixada do Japão em Brasília é responsável por todo o processo do Embassy Track",
        "📞 Há também consulados em São Paulo, Curitiba, Recife, Belém, Manaus, Porto Alegre e Rio - candidatura é centralizada em Brasília",
        "📚 Provas de Japonês e Inglês são públicas no Study in Japan - praticar com pelo menos 6 meses de antecedência",
        "🎯 Para Odontologia: TMDU (agora Science Tokyo) é referência, mas Osaka University e Tohoku têm programas em inglês mais acessíveis",
        "✉️ Procurar orientador (Sensei) com 6–12 meses de antecedência - email formal em inglês explicando interesse de pesquisa",
        "📝 Field of Study and Research Plan é o documento mais importante - dedique semanas a ele",
        "💴 Brasileiros não precisam pagar nada para se candidatar - todo o processo via Embaixada é gratuito"
      ],
      contato: "Embaixada do Japão no Brasil · SES, Av. das Nações Q.811, Lt.39, Brasília-DF · CEP 70425-900 · bolsas@bv.mofa.go.jp · (61) 3442-4200",
      site: "https://www.br.emb-japan.go.jp/itpr_pt/bolsasdeestudosdogovernodojapao.html"
    },

    {
      id: "usa-fulbright",
      nome: "Fulbright Mestrado/Doutorado + Bolsas Diretas (TA/RA) em Dental Research",
      instituicao: "EUA · Harvard, University of Michigan, NYU, UPenn, UCSF, UNC Chapel Hill, UTHealth",
      pais: "Estados Unidos",
      areas: [
        "Master of Medical Sciences in Oral Biology (MMSc) - Harvard School of Dental Medicine",
        "MS em Dental Hygiene / Oral Health Sciences",
        "PhD em Oral & Craniofacial Sciences (UCSF, Michigan) - geralmente mais funded que MS",
        "MS em Clinical Research / Public Health com foco oral",
        "Atenção: DDS clínico (Advanced Standing 2 anos) raramente tem bolsa para estrangeiros"
      ],
      vagas: "Fulbright Brasil: ≈ 30 bolsas/ano (todas áreas, todo o país). Programas de pesquisa (PhD/MS funded): vagas reduzidas por departamento (1–4 vagas/ano por lab).",
      datas: {
        "Anúncio Fulbright Brasil": "Fevereiro/2026",
        "Inscrições Fulbright": "Março–Maio/2026 (deadline anual em meados de maio)",
        "Entrevistas Fulbright": "Julho–Agosto/2026",
        "Resultado Fulbright": "Outubro/2026",
        "Aplicação universitária EUA": "Setembro/2026 a Janeiro/2027 (deadlines variam: Harvard 1/Dez; Michigan 1/Dez)",
        "TOEFL/GRE": "Provas até Dezembro/2026 (envio do score)",
        "Decisões universitárias": "Fevereiro–Abril/2027",
        "Início acadêmico": "Agosto/2027 (Fall semester)"
      },
      comoFunciona: [
        "1. **Duas modalidades de bolsa para EUA:** (a) Fulbright Brasil (cobre tuition + estipêndio + viagem; exige compromisso de retorno) ou (b) bolsa direta da universidade via TA/RA (apenas para programas de pesquisa MS thesis-based ou PhD).",
        "2. **MS clínico raramente é funded:** programas como Master in Orthodontics da Penn ou Michigan custam US$ 80k–120k/ano e quase nunca oferecem bolsa para estrangeiros.",
        "3. **PhD em Oral Sciences é a rota mais comum funded:** UCSF, Michigan, Forsyth Institute (Harvard-affiliated) oferecem PhDs com cobertura integral.",
        "4. **Identificar orientador é decisivo:** contato com Principal Investigator (PI) com 6+ meses de antecedência.",
        "5. **Fulbright tem compromisso J-1:** após o programa, bolsista deve voltar ao Brasil por no mínimo 2 anos antes de aplicar para visto de trabalho americano (Two-Year Home Residency Requirement).",
        "6. **GRE:** ainda é exigido em alguns programas (UPenn, Michigan), opcional em Harvard/UCSF desde 2021."
      ],
      processo: [
        "Etapa 1 - Aplicação Fulbright Brasil (formulário online + ensaios + indicação de até 4 universidades)",
        "Etapa 2 - Pré-seleção pela Comissão Fulbright (análise de mérito)",
        "Etapa 3 - Entrevistas com banca acadêmica (em inglês)",
        "Etapa 4 - Aprovação Fulbright (recebe carta de indicação)",
        "Etapa 5 - Aplicação SEPARADA às universidades americanas (Common App ou portal próprio)",
        "Etapa 6 - Envio de TOEFL/GRE/IELTS scores",
        "Etapa 7 - Entrevistas com programas/laboratórios",
        "Etapa 8 - Aceitação final + emissão de visto J-1 (Fulbright) ou F-1 (bolsa direta)"
      ],
      documentos: [
        "Statement of Grant Purpose (essay Fulbright, 2 páginas)",
        "Personal Statement (essay pessoal, 1 página)",
        "Currículo (CV em inglês, formato americano)",
        "3 cartas de recomendação acadêmicas",
        "Histórico escolar (transcript) com tradução oficial",
        "Diploma de graduação (com tradução juramentada)",
        "Score TOEFL iBT ou IELTS válido",
        "Score GRE (quando exigido pela universidade)",
        "Sample of academic writing (artigo, TCC, monografia)",
        "Comprovante de financiamento suplementar (alguns programas)",
        "Lista de até 4 universidades-alvo com justificativa"
      ],
      requisitos: [
        "Cidadania brasileira (Fulbright Brasil)",
        "Diploma de graduação concluído",
        "Bom desempenho acadêmico (CR igual ou superior a 7,5/10 ou GPA equivalente)",
        "Não ter cidadania ou residência permanente nos EUA",
        "Não estar morando nos EUA há mais de 6 meses no momento da aplicação",
        "Compromisso de retorno ao Brasil por 2 anos após o programa (visto J-1)",
        "Não ter recebido bolsa Fulbright anteriormente para o mesmo nível"
      ],
      proficiencia: {
        idioma: "Inglês",
        validade: "TOEFL/IELTS: 2 anos · GRE: 5 anos",
        criterios: [
          "TOEFL iBT mínimo 80 (Fulbright) - universidades top exigem 100+",
          "Harvard SDM: TOEFL iBT 104+ (mínimo declarado pela escola)",
          "UCSF / Michigan: TOEFL iBT 100+ ou IELTS 7,0+",
          "IELTS Academic mínimo 7,0 (universidades top exigem 7,5)",
          "Duolingo English Test: aceito em algumas universidades (mínimo 120+)",
          "GRE General Test: mínimo recomendado Verbal 155 + Quant 160 + AW 4.0",
          "GRE Subject Biology: alguns PhDs em Oral Sciences pedem"
        ]
      },
      editalRecente: {
        descricao: "Edital Fulbright Brasil - Mestrado/Doutorado (página oficial de bolsas para brasileiros)",
        url: "https://fulbright.org.br/bolsas-para-brasileiros/"
      },
      provasAnteriores: {
        descricao: "Repositório de provas e materiais oficiais - ETS (TOEFL/GRE)",
        url: "https://www.ets.org/toefl"
      },
      bolsa: "**Fulbright Brasil:** tuition até US$ 30.000/ano + estipêndio mensal US$ 1.500–2.500 + seguro saúde + passagem ida/volta + auxílio livros (US$ 1.000/ano) + visto J-1 patrocinado · **Bolsa universitária direta (PhD funded):** tuition integral + estipêndio US$ 30.000–40.000/ano (TA/RA) + seguro saúde",
      dicasBrasileiros: [
        "🇧🇷 Fulbright Brasil é a Comissão para o Intercâmbio Educacional - tem escritórios em Brasília, SP, RJ e Recife",
        "💼 Para PhD em Oral Sciences, contatar PI dos labs com 1 ANO de antecedência - networking é tudo",
        "📚 GRE: estudar com Magoosh ou Manhattan Prep; meta: 320+ total para programas top",
        "🎯 Fulbright dá preferência a candidatos com perfil acadêmico/pesquisa, não clínico - publicações são essenciais",
        "💵 Programas DDS clínicos (NYU Advanced Placement, etc.) custam ≈ US$ 200k+ no total e não oferecem bolsa - não viáveis financeiramente sem empréstimo privado",
        "🇺🇸 Para mestrado clínico (ortodontia, perio, endo), considerar Canadá/Austrália como alternativas mais funded",
        "⏰ Cronograma típico: começar a estudar para TOEFL/GRE 1 ano antes; aplicar Fulbright 1,5 ano antes do início"
      ],
      contato: "Comissão Fulbright Brasil · SCS Quadra 6, Bl. A, Ed. Carioca, Sala 305, Brasília-DF · candidatos@fulbright.org.br · (61) 3248-8600",
      site: "https://fulbright.org.br/bolsas-para-brasileiros/"
    },

    {
      id: "canada-mcgill",
      nome: "MSc Dental Sciences + McCall MacBain Scholarship",
      instituicao: "Canadá · McGill, University of Toronto, UBC, University of Alberta, Western",
      pais: "Canadá",
      areas: [
        "MSc in Dental Sciences (McGill) - Thesis e Non-Thesis",
        "MSc in Dentistry (University of Toronto)",
        "MSc in Craniofacial Science (UBC)",
        "MSc/MMSc em especialidades clínicas: Ortodontia (3 anos), Periodontia (3 anos), Endodontia (2–3 anos), Oral Surgery (4–6 anos)",
        "PhD em Craniofacial Sciences (mais funded)"
      ],
      vagas: "Funding garantido em programas thesis-based (MSc/PhD) por meio de letter of funding na admissão. Programas clínicos especializados: 2–6 vagas por especialidade/ano (extremamente competitivos).",
      datas: {
        "McCall MacBain - inscrições": "1º Junho a 23 Setembro/2026 (para 2027 cohort)",
        "Vanier CGS (PhD)": "Outubro–Novembro/2026 (via universidade)",
        "Inscrições McGill MSc": "Setembro/2026 a 15 de Janeiro/2027",
        "Inscrições U of T MSc": "1 Outubro/2026 a 1 Dezembro/2026",
        "Inscrições UBC MSc": "1 Setembro/2026 a 31 Janeiro/2027",
        "Decisões": "Março–Maio/2027",
        "Início Fall": "Setembro/2027",
        "Início Winter": "Janeiro/2028"
      },
      comoFunciona: [
        "1. **Identificar orientador (supervisor):** sem aceite informal de um Professor, a aplicação para MSc thesis-based normalmente não avança no Canadá. Contatar com 8+ meses de antecedência.",
        "2. **Duas rotas de funding:** (a) Funding interno garantido pelo supervisor/programa (TA + RA + bolsas internas) ou (b) Bolsas externas centralizadas como McCall MacBain (Master's) e Vanier (PhD).",
        "3. **McCall MacBain Scholarship (McGill):** É uma das melhores bolsas de mestrado do mundo - cobre tuition integral + CAD 2.000/mês + leadership program. Brasileiros são elegíveis. Concorrência global muito alta.",
        "4. **Programas clínicos especializados:** MSc em Ortodontia/Perio/Endo aceitam internacionais mas a taxa de aceitação é ≤5%. Tuition: CAD 40.000–80.000/ano (frequentemente sem bolsa).",
        "5. **Visto de estudante:** após a admissão, aplicar para Study Permit (IRCC) - prova financeira de CAD 20.000+ para 1 ano.",
        "6. **Tuition para internacionais:** McGill MSc Thesis CAD 19.500/ano · U of T MSc CAD 30.000+/ano · UBC CAD 9.000/ano (uma das mais baixas)."
      ],
      processo: [
        "Etapa 1 - Identificar 3–5 supervisores potenciais em Dental Sciences",
        "Etapa 2 - Enviar email formal com CV + área de pesquisa + perguntas específicas",
        "Etapa 3 - Aguardar aceite informal do supervisor (ou rejeição cordial)",
        "Etapa 4 - Aplicação online à Graduate Studies da universidade",
        "Etapa 5 - Pagamento da taxa de aplicação (CAD 100–150)",
        "Etapa 6 - Envio de transcripts (WES não exigido em Canadá em muitos casos)",
        "Etapa 7 - Envio de cartas de recomendação (via portal online)",
        "Etapa 8 - Envio de TOEFL/IELTS",
        "Etapa 9 - Entrevista com supervisor (online)",
        "Etapa 10 - Carta de admissão (com detalhamento de funding)",
        "Etapa 11 - Aplicação ao Study Permit (visto canadense)"
      ],
      documentos: [
        "CV acadêmico (em inglês, formato canadense - 2–4 páginas)",
        "Statement of Interest / Statement of Purpose (1–2 páginas)",
        "Transcripts oficiais (histórico) - tradução juramentada",
        "Diploma de graduação - tradução juramentada",
        "3 cartas de recomendação (uploaded direto pelos referees)",
        "TOEFL iBT ou IELTS Academic",
        "Sample de pesquisa (TCC, IC, artigos)",
        "Comprovante de pagamento da taxa de aplicação",
        "Acceptance Letter informal do supervisor (informal - vai na carta de motivação)",
        "Passaporte válido (para visto)"
      ],
      requisitos: [
        "Diploma de graduação concluído (Bachelor)",
        "GPA mínimo equivalente a B+ / 3.3 (em 4.0) ou 7.5/10",
        "Pesquisa anterior (IC, TCC) é praticamente obrigatória para programas thesis",
        "Currículo com publicações (especialmente para top schools)",
        "Cartas de recomendação acadêmicas (2–3)",
        "Comprovação financeira (CAD 20.000+) para o Study Permit",
        "Para programas clínicos: muitas vezes exigem National Dental Examining Board (NDEB) ou equivalência da CFK"
      ],
      proficiencia: {
        idioma: "Inglês (com Francês opcional no McGill)",
        validade: "TOEFL/IELTS: 2 anos",
        criterios: [
          "McGill: TOEFL iBT mínimo 86 (com 20 em cada banda) ou IELTS 6,5 (cada banda 6,0)",
          "University of Toronto: TOEFL iBT 93 (mínimo 22 writing/speaking) ou IELTS 7,0",
          "UBC: TOEFL iBT 90 (mínimo 22 reading/listening) ou IELTS 6,5 (cada banda 6,0)",
          "University of Alberta: TOEFL iBT 90 ou IELTS 6,5",
          "CAEL (Canadian Academic English Language) - mínimo 70 (aceito em todas)",
          "Para programas clínicos: pode exigir TOEFL 100+ ou IELTS 7,5"
        ]
      },
      editalRecente: {
        descricao: "McGill - Funding, Scholarships and Awards (Faculty of Dental Medicine and Oral Health Sciences)",
        url: "https://www.mcgill.ca/dentistry/programs/awards"
      },
      provasAnteriores: {
        descricao: "Não há prova de admissão centralizada no Canadá - seleção por análise documental + entrevista com supervisor",
        url: "https://www.mcgill.ca/gradapplicants/funding/external/mccall-macbain-scholarship"
      },
      bolsa: "**McCall MacBain (McGill Master's):** tuition integral + CAD 2.000/mês + leadership program + summer interneship - ≈ CAD 100.000 total · **McGill Graduate Excellence Award:** CAD 3.000–10.000/ano · **Differential Tuition Fee Waiver (McGill):** desconto da diferença para taxa de canadense (ECONOMIA significativa) · **RA/TA stipend:** CAD 15.000–25.000/ano · **Vanier CGS (PhD):** CAD 50.000/ano por 3 anos",
      dicasBrasileiros: [
        "🇧🇷 Brasileiros são bem recebidos no Canadá - há comunidade acadêmica brasileira ativa em McGill, U of T e UBC",
        "💡 Differential Tuition Fee Waiver do McGill é DECISIVO - reduz tuition de CAD 19k para ≈ CAD 7k/ano (taxa canadense)",
        "✉️ Email para supervisor: assunto claro, parágrafo de apresentação, link para CV, perguntas ESPECÍFICAS sobre pesquisa do PI",
        "📚 Fazer Mestrado profissional no Brasil ANTES (CAPES) pode aumentar muito a chance de aceite no Canadá",
        "🎯 Para Odontologia clínica: priorizar McGill ou UBC (têm mais funding interno em pesquisa)",
        "🍁 Study Permit: comprovação financeira de CAD 20.000+ (geralmente extrato bancário ou bolsa CAPES)",
        "📞 CALDO (Canadian-Latin American Dental Organization) ajuda na adaptação - vale entrar em contato",
        "🏥 Programas clínicos: NDEB exam é caro (CAD 8.000+) e demorado - planejar com 2 anos de antecedência"
      ],
      contato: "McGill Faculty of Dental Medicine and Oral Health Sciences · 2001 McGill College, Suite 500, Montreal H3A 1G1 · admissions.dentistry@mcgill.ca",
      site: "https://www.mcgill.ca/dentistry/programs/awards"
    },

    {
      id: "australia-rtp",
      nome: "RTP Scholarship - Master by Research em Dentistry",
      instituicao: "Austrália · Univ. of Melbourne, Univ. of Sydney, Univ. of Adelaide, Univ. of Queensland, UWA",
      pais: "Austrália",
      areas: [
        "Master of Philosophy (MPhil) in Dentistry",
        "Master of Dental Science by Research (MDSc Research)",
        "Especialidades por pesquisa: Ortodontia, Endodontia, Periodontia, Odontopediatria, CTBMF",
        "Public Oral Health (MPH com ênfase oral - Melbourne, Sydney)",
        "Implant Dentistry (Adelaide, Sydney)"
      ],
      vagas: "RTP é alocado por universidade pelo governo federal; cada Faculty of Dentistry tem cota anual (5–15 vagas para internacionais). University of Sydney 2026: ≈ 200 vagas RTP totais (todas áreas).",
      datas: {
        "U Sydney - Períodos 3-4 2026": "Deadline 19 de Dezembro/2025",
        "U Sydney - Períodos 1-2 2027": "Deadline 11 de Setembro/2026",
        "U Sydney - Períodos 3-4 2027": "Deadline 18 de Dezembro/2026",
        "U Melbourne (Round 1)": "31 Outubro/2026 (international)",
        "U Adelaide": "Dois rounds: Maio/2026 e Outubro/2026",
        "Início Semestre 1": "Fevereiro/2027",
        "Início Semestre 2": "Julho/2027",
        "Duração MPhil/MDSc Research": "2 anos (1,5 mínimo, 2 máximo com RTP)"
      },
      comoFunciona: [
        "1. **Identificar supervisor (decisivo):** sem Expression of Interest (EOI) aceita por um Principal Supervisor, a aplicação não tem chance.",
        "2. **EOI antes da aplicação:** enviar email com CV + proposta de pesquisa + transcripts. Cada universidade tem um formato próprio.",
        "3. **Aplicação formal:** após o aceite do supervisor, aplicar via portal da universidade. RTP é AUTOMÁTICO em muitas universidades (não há aplicação separada).",
        "4. **Ranking competitivo:** RTPs internacionais são ranqueados por mérito acadêmico + qualidade do projeto + publicações.",
        "5. **Visto de estudante:** Subclass 500. Comprovação financeira de AUD 24.500/ano + AUD 8.000 para dependentes (cônjuge).",
        "6. **OSHC:** Overseas Student Health Cover é obrigatório - geralmente coberto pelo RTP."
      ],
      processo: [
        "Etapa 1 - Identificar 2–3 supervisores potenciais via páginas dos PIs",
        "Etapa 2 - Enviar Expression of Interest (EOI) com CV, proposta de pesquisa, transcripts",
        "Etapa 3 - Carta de aceite informal do supervisor",
        "Etapa 4 - Aplicação online via portal da universidade",
        "Etapa 5 - Upload de documentos (transcripts, diploma, evidência de pesquisa)",
        "Etapa 6 - Submissão do IELTS/TOEFL",
        "Etapa 7 - Avaliação competitiva pelo Higher Degree by Research (HDR) committee",
        "Etapa 8 - Oferta condicional (Conditional Offer)",
        "Etapa 9 - CoE (Confirmation of Enrolment) após pagamento de taxa inicial",
        "Etapa 10 - Aplicação ao visto Subclass 500"
      ],
      documentos: [
        "Expression of Interest (EOI) - formato livre, 1–2 páginas",
        "Proposta de pesquisa (Research Proposal) - 2–5 páginas",
        "CV acadêmico em inglês",
        "Transcripts oficiais (com tradução juramentada)",
        "Diploma de graduação (com tradução juramentada)",
        "Evidence of Research Experience (template oficial da U Sydney)",
        "IELTS Academic ou TOEFL iBT score report",
        "2–3 cartas de recomendação",
        "Lista de publicações (se houver)",
        "Carta de aceite do supervisor (Acceptance Letter)",
        "Comprovante financeiro para visto (AUD 24.500+)"
      ],
      requisitos: [
        "Graduação em Odontologia com Honours (Class I ou II) ou equivalente",
        "GPA mínimo: equivalente a 75% (varia por universidade)",
        "Evidence of Research Experience: TCC, IC, mestrado profissional, ou publicações",
        "Currículo com publicações é diferencial decisivo (Q1/Q2 - SJR/JCR)",
        "Aceite formal de um Principal Supervisor antes da aplicação",
        "Proposta de pesquisa alinhada ao laboratório do supervisor",
        "Idade: sem limite formal, mas RTP prioriza candidatos com até 35 anos"
      ],
      proficiencia: {
        idioma: "Inglês",
        validade: "IELTS/TOEFL/PTE: 2 anos",
        criterios: [
          "U of Melbourne: IELTS Academic 6,5 (com 6,0 em cada banda) ou TOEFL iBT 79",
          "U of Sydney: IELTS Academic 6,5 (cada banda 6,0) ou TOEFL iBT 85",
          "U of Queensland: IELTS Academic 6,5 (cada banda 6,0)",
          "U of Adelaide: IELTS Academic 6,5 (cada banda 6,0)",
          "UWA: IELTS Academic 6,5 (cada banda 6,0)",
          "PTE Academic: 64+ (cada banda 54+) - aceito por todas",
          "Cambridge C1 Advanced (CAE): 176+ (cada banda 169+)"
        ]
      },
      editalRecente: {
        descricao: "RTP Scholarship - University of Sydney (deadlines e detalhes 2026/2027)",
        url: "https://www.sydney.edu.au/scholarships/australian-government-research-training-program/rtp-international.html"
      },
      provasAnteriores: {
        descricao: "Não há prova de admissão - seleção via mérito acadêmico + Research Experience evidence",
        url: "https://www.sydney.edu.au/scholarships/australian-government-research-training-program/rtp-international.html"
      },
      bolsa: "**RTP Fees Offset:** isenção integral de tuition por até 2 anos (Master's by Research) · **RTP Stipend:** AUD 42.754/ano (U Sydney 2026, tax-free, pago quinzenalmente) · **Relocation Allowance:** AUD 1.500–2.000 (única vez) · **Thesis Allowance:** AUD 420–840 · **OSHC:** Overseas Student Health Cover coberto · **Total estimado:** AUD 90.000+ ao longo do mestrado",
      dicasBrasileiros: [
        "🇧🇷 Brasileiros têm boa reputação acadêmica na Austrália - várias universidades têm acordos com FAPESP, CAPES",
        "📧 EOI deve ser personalizada: mencionar artigos específicos do supervisor e como sua pesquisa se conecta",
        "📚 Evidence of Research é o documento mais importante - usar o template oficial da U Sydney como modelo",
        "🎯 U of Adelaide tem programa de Implant Dentistry forte com supervisão para internacionais",
        "💼 Mestrado profissional no Brasil + publicação Q1 = passaporte forte para RTP",
        "🏠 Custo de vida em Sydney/Melbourne é alto (AUD 2.000+/mês) - AUD 42k/ano cobre folgadamente",
        "🛂 Visto Subclass 500: aplicar com 4 meses de antecedência; pode demorar 6–12 semanas",
        "🦷 Para programas CLÍNICOS (com prática odontológica): ADC (Australian Dental Council) exam é necessário - AUD 9.000+ e 1–2 anos"
      ],
      contato: "U of Sydney - Sydney School of Dentistry · sdh.studentenquiries@sydney.edu.au · Higher Degree by Research office: hdr.fmh@sydney.edu.au",
      site: "https://scholarships.unimelb.edu.au/awards/graduate-research-scholarships"
    },

    {
      id: "europe-erasmus",
      nome: "Erasmus Mundus + DAAD + Bolsas Nacionais (Portugal/Suécia)",
      instituicao: "Europa · Alemanha (DAAD), Suécia (SI), Portugal (FCT/CAPES), Espanha, Itália, Holanda",
      pais: "Europa (vários países)",
      areas: [
        "Erasmus Mundus Joint Masters em áreas correlatas (Biomedical Engineering, Public Health, Materiais)",
        "MSc em Dental Materials (Karolinska Institutet - Suécia)",
        "MSc em Oral Sciences (Charité - Berlim, via DAAD)",
        "MSc em Medicina Dentária - Universidades de Lisboa (FMDUL) e Porto (FMDUP) - acordos CAPES",
        "MSc em Implantology (Universidad Complutense - Madrid)",
        "MSc em Dental Public Health (King's College London - UK)"
      ],
      vagas: "Erasmus Mundus: ≈ 60 bolsas por programa (cada programa tem cota global anual) · DAAD: ≈ 100 bolsas/ano para América Latina · Swedish Institute: ≈ 300 bolsas globais · CAPES-PrInt Portugal: várias por universidade",
      datas: {
        "Erasmus Mundus - inscrições típicas": "Outubro/2025 a Fevereiro/2026 (varia por programa)",
        "DAAD Research Grants": "1 Maio a 31 Outubro/2026 (anual)",
        "Swedish Institute Scholarship": "Setembro a 11 Fevereiro/2027",
        "Portugal FCT (Doctoral)": "Março–Abril/2026 (anual)",
        "CAPES-PrInt (mestrado sanduíche)": "Conforme cada universidade brasileira",
        "Início (Erasmus Mundus)": "Setembro/2026 ou Setembro/2027",
        "Início (DAAD)": "Outubro/2026 ou Abril/2027",
        "Início (Suécia)": "Agosto/2027"
      },
      comoFunciona: [
        "1. **Erasmus Mundus Joint Masters (EMJM):** programa de mestrado de 1–2 anos cursado em 3+ universidades de 3+ países europeus. Diploma duplo ou triplo no final. Aplicação CENTRALIZADA via consortium.",
        "2. **DAAD (Alemanha):** bolsa para mestrado em universidade alemã. Aplicação direta ao DAAD após aceite informal de um Professor alemão. Ideal para pesquisa.",
        "3. **Swedish Institute Scholarship (Suécia):** universidades suecas (Karolinska, Gothenburg, Malmö - top em Dental Materials). Aceitação primeiro, bolsa depois.",
        "4. **Portugal:** FMDUL e FMDUP têm mestrados em Medicina Dentária aceitos no Brasil via revalidação. CAPES-PrInt e parcerias institucionais facilitam.",
        "5. **Língua dos programas:** Erasmus Mundus quase sempre em inglês. DAAD: alemão ou inglês (varia). Portugal: português europeu.",
        "6. **Para Odontologia clínica em Europa:** programas como Erasmus Specialty Training (3 anos em Ortodontia/Perio) existem mas raramente são bolsa - são autofinanciados."
      ],
      processo: [
        "Etapa 1 - Identificar programa no Erasmus Mundus Catalogue (erasmus-plus.ec.europa.eu)",
        "Etapa 2 - Verificar requisitos específicos do consortium",
        "Etapa 3 - Preparar documentos centralizados (CV Europass, motivation letter, etc.)",
        "Etapa 4 - Aplicação online via portal do consortium (não há aplicação por universidade isolada)",
        "Etapa 5 - Submissão de TOEFL/IELTS",
        "Etapa 6 - Entrevista online (alguns programas)",
        "Etapa 7 - Resultado Erasmus Mundus + alocação de bolsa",
        "Etapa 8 - Aplicação ao visto (depende do país inicial do programa)"
      ],
      documentos: [
        "CV Europass (formato europeu obrigatório)",
        "Motivation Letter (1–2 páginas)",
        "Transcripts oficiais com tradução juramentada",
        "Diploma de graduação com tradução juramentada",
        "Apostila de Haia (geralmente exigida)",
        "2–3 cartas de recomendação",
        "IELTS Academic ou TOEFL iBT",
        "Passaporte válido por 2+ anos",
        "Sample of academic writing (para alguns programas)",
        "Proposta de pesquisa (para DAAD)",
        "Carta de aceite informal (para DAAD - opcional)"
      ],
      requisitos: [
        "Diploma de graduação reconhecido (idealmente em Odontologia ou área correlata)",
        "GPA mínimo: varia (geralmente top 30% da turma) - equivalente a B+ ou superior",
        "Cartas de recomendação acadêmicas",
        "Motivation letter alinhada ao programa escolhido",
        "Experiência em pesquisa é um diferencial enorme (DAAD especialmente)",
        "Para DAAD: PhD candidates devem ter Master's; Master candidates devem ter Bachelor concluído",
        "Não ter morado por mais de 12 meses no país-destino antes da aplicação (Erasmus Mundus)"
      ],
      proficiencia: {
        idioma: "Inglês (e às vezes alemão, sueco, francês, espanhol, português)",
        validade: "TOEFL/IELTS: 2 anos",
        criterios: [
          "Erasmus Mundus padrão: IELTS Academic 6,5 ou TOEFL iBT 90",
          "Karolinska Institutet (Suécia): IELTS 6,5 ou TOEFL iBT 90",
          "DAAD Alemanha (inglês): TOEFL iBT 88 ou IELTS 6,5",
          "DAAD Alemanha (alemão): TestDaF 4 ou DSH-2",
          "Portugal: Português europeu (geralmente sem exame para brasileiros)",
          "King's College London: IELTS 7,0 ou TOEFL iBT 100",
          "Cambridge C1 Advanced (CAE) - 180+",
          "Alguns programas em Espanha: DELE B2 (espanhol)"
        ]
      },
      editalRecente: {
        descricao: "Erasmus Mundus Joint Masters - Catálogo oficial (lista todos os programas com bolsa)",
        url: "https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students/erasmus-mundus-joint-masters"
      },
      provasAnteriores: {
        descricao: "Não há prova centralizada - seleção por análise documental + entrevista",
        url: "https://www.daad.de/en/study-and-research-in-germany/scholarships/"
      },
      bolsa: "**Erasmus Mundus:** EUR 1.400/mês + tuition integral + EUR 1.000–3.000 viagem + EUR 1.000 instalação + seguro saúde + visto · **DAAD Research Grants:** EUR 992/mês + tuition + viagem + seguro saúde + auxílio familiar (se aplicável) · **Swedish Institute:** SEK 12.000/mês (≈ EUR 1.050) + tuition + viagem + seguro · **FCT (Portugal):** EUR 1.144,64/mês + tuition · **CAPES-PrInt:** R$ 4.300+/mês (bolsa em real)",
      dicasBrasileiros: [
        "🇧🇷 Brasil tem MUITOS acordos bilaterais com Europa - CAPES-PrInt é a porta de entrada institucional",
        "🇵🇹 Portugal: revalidação do diploma de Odonto é direta no MCTES; programas em português são vantagem clara",
        "🇩🇪 DAAD: Charité (Berlim), Goethe (Frankfurt), Heidelberg têm departamentos fortes em odontologia. Aprender alemão básico (A2) abre 10x mais portas.",
        "🇸🇪 Karolinska Institutet é top 5 mundial em ciências da saúde - programa em Dental Materials excelente",
        "📋 Apostila de Haia é OBRIGATÓRIA na maioria dos países europeus - cartório de notas brasileiro emite",
        "💶 EUR 1.400/mês cobre bem Portugal/Espanha/Itália; pode ser apertado em Alemanha/Holanda/Escandinávia",
        "✈️ Erasmus Mundus exige mobilidade entre 2–3 países - não é uma bolsa para 'ficar fixo' em uma cidade",
        "🎓 Para Odontologia clínica especializada: Espanha (Madrid Complutense) e Itália (Bologna) têm programas privados (sem bolsa) e públicos (com bolsa Erasmus)",
        "📞 DAAD Brasil tem escritório no Rio de Janeiro - oferece consultoria gratuita"
      ],
      contato: "DAAD Rio de Janeiro · Rua Presidente Carlos de Campos 417, Laranjeiras, RJ · info@daad.org.br · (21) 2553-3296 / 2553-3437",
      site: "https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students/erasmus-mundus-joint-masters"
    }
  ]
};

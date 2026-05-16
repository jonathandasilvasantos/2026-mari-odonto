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
      areas: [
        "Programas de Mestrado em Odontologia (Dentistry / Oral Sciences)",
        "Áreas de pesquisa: Periodontia, Reabilitação Oral, Biologia Oral, Implantodontia",
        "Possibilidade de programas em inglês em algumas universidades (verificar)"
      ],
      vagas: "≈ 1.300 bolsas/ano (todas áreas) via Embassy Track + University Track. Vagas específicas de Odontologia variam por universidade.",
      datas: {
        "Inscrições (Embassy)": "Fev–Mar/2026",
        "Inscrições (University)": "Mar/2026 (varia por universidade)",
        "Início": "Setembro/2026 ou Março/2027",
        "Curso de coreano": "1 ano (caso necessário)"
      },
      processo: [
        "Etapa 1: seleção pela embaixada coreana no Brasil OU pela universidade",
        "Etapa 2: NIIED (avaliação final pelo governo coreano)",
        "Etapa 3: aceitação na universidade de destino",
        "Documentos: histórico, diploma, projeto, cartas de recomendação, autoapresentação"
      ],
      requisitos: [
        "Cidadania não-coreana (candidato e pais)",
        "Menos de 40 anos",
        "Diploma de graduação (ou Mestrado se for para PhD)",
        "GPA mínimo de 80% (ou top 20% da turma)",
        "Boa saúde física e mental",
        "Proficiência em inglês ou coreano (ver seção)"
      ],
      proficiencia: {
        idioma: "Inglês ou Coreano",
        validade: "Conforme cada teste",
        criterios: [
          "TOPIK (coreano) nível 5 ou 6 - dispensa o ano de língua coreana",
          "TOEFL iBT mínimo 80 ou IELTS 5,5 (para programas em inglês)",
          "Candidatos sem TOPIK fazem 1 ano de curso de coreano financiado pela bolsa",
          "Quem atinge TOPIK 5+ recebe bônus mensal de 100.000 KRW"
        ]
      },
      editalRecente: {
        descricao: "Edital GKS 2026 - Study in Korea (NIIED)",
        url: "https://www.studyinkorea.go.kr/in/plan/scholarship.do"
      },
      provasAnteriores: {
        descricao: "Documentos e guias dos editais anteriores - GKS portal",
        url: "https://www.studyinkorea.go.kr/in/plan/scholarship.do"
      },
      bolsa: "Mensalidade 1.000.000 KRW (≈ US$ 750) + tuition integral + passagem ida/volta + seguro saúde + auxílio instalação 200.000 KRW + bolsa de tese",
      site: "https://en.snu.ac.kr/admission/graduate/scholarships/before_application"
    },
    {
      id: "japan-mext",
      nome: "MEXT Scholarship - Mestrado em Odontologia",
      instituicao: "Japão · Institute of Science Tokyo (ex-TMDU), Osaka University, Tohoku, Kyushu",
      areas: [
        "Oral Health Sciences",
        "Medical and Dental Sciences",
        "Pesquisa em Cirurgia Oral, Reabilitação, Biologia Oral, Materiais Dentários",
        "Pesquisa básica e clínica em odontologia"
      ],
      vagas: "Cota global anual via embaixadas + recomendação universitária. Vagas específicas em odontologia variam por universidade.",
      datas: {
        "Inscrições (Embassy)": "Abril–Maio/2026 (Embaixada do Japão no Brasil)",
        "Inscrições (University)": "Conforme cada universidade (Set–Dez/2026)",
        "Exame escrito": "Junho/2026",
        "Entrevista": "Julho–Agosto/2026",
        "Início": "Abril/2027 ou Outubro/2027",
        "Curso de japonês": "6 meses (pré-acadêmico, se necessário)"
      },
      processo: [
        "Embassy Recommendation: aplicação via Embaixada do Japão",
        "University Recommendation: nomeação direta pela universidade japonesa",
        "Exame escrito (inglês + japonês básico)",
        "Entrevista presencial/online",
        "Período de research student (pesquisador) antes do mestrado oficial"
      ],
      requisitos: [
        "Não ter cidadania japonesa",
        "Menos de 35 anos (geralmente)",
        "Diploma de graduação ou equivalente",
        "Saúde física e mental adequada",
        "Disponibilidade para aprender japonês"
      ],
      proficiencia: {
        idioma: "Inglês ou Japonês",
        validade: "Conforme cada teste",
        criterios: [
          "TOEFL iBT 80+ ou IELTS 6.0+ (programas em inglês)",
          "JLPT N2 ou N1 (Japanese-Language Proficiency Test) para programas em japonês",
          "Muitos programas em odontologia ainda exigem japonês mesmo se o curso for em inglês",
          "Curso de japonês de 6 meses oferecido antes do mestrado quando necessário"
        ]
      },
      editalRecente: {
        descricao: "MEXT Scholarship - Study in Japan (site oficial)",
        url: "https://www.studyinjapan.go.jp/en/planning/scholarships/mext-scholarships/"
      },
      provasAnteriores: {
        descricao: "Past Exam Questions - MEXT Scholarship (provas oficiais publicadas)",
        url: "https://www.studyinjapan.go.jp/en/planning/scholarships/applying/instructions/"
      },
      bolsa: "Mensalidade 144.000–145.000 JPY (≈ US$ 970) + isenção integral de tuition + passagem ida/volta + seguro saúde",
      site: "https://tokyoscholarship.com/tokyo-medical-and-dental-university-scholarship-japan/"
    },
    {
      id: "usa-fulbright",
      nome: "Fulbright + Programas MS/PhD em Dental Research",
      instituicao: "EUA · Harvard, University of Michigan, NYU, UPenn, UCSF, UNC Chapel Hill",
      areas: [
        "Master of Medical Sciences (MMSc) em Oral Biology - Harvard",
        "MS em Dental Research / Oral Health Sciences",
        "PhD em Oral & Craniofacial Sciences (geralmente mais funded que MS)",
        "Programas clínicos DDS/DMD para estrangeiros (Advanced Standing) - normalmente NÃO oferecem bolsa"
      ],
      vagas: "Fulbright Brasil: ≈ 30 bolsas/ano (todas áreas). Programas de pesquisa: vagas reduzidas por departamento.",
      datas: {
        "Fulbright Brasil - inscrições": "Fevereiro–Maio/2026 (para ingresso em Ago/2027)",
        "Aplicação às universidades": "Set–Dez/2026 (deadlines variam)",
        "Início acadêmico": "Agosto/2027 (fall semester)"
      },
      processo: [
        "Etapa 1: aplicação Fulbright Brasil (Comissão Fulbright)",
        "Etapa 2: entrevistas + provas (TOEFL, GRE quando exigido)",
        "Etapa 3: aplicação separada à universidade-destino",
        "Etapa 4: aceitação acadêmica + bolsa Fulbright complementar"
      ],
      requisitos: [
        "Cidadania brasileira (Fulbright Brasil)",
        "Diploma de graduação em Odontologia (ou área correlata)",
        "Boa nota no GRE (em alguns programas)",
        "Projeto de pesquisa alinhado a um lab/orientador nos EUA",
        "Comprometimento de retorno ao Brasil após o programa"
      ],
      proficiencia: {
        idioma: "Inglês",
        validade: "TOEFL/IELTS: 2 anos",
        criterios: [
          "TOEFL iBT mínimo 90–100 (varia por universidade; Harvard exige 104+)",
          "IELTS mínimo 7.0–7.5",
          "Duolingo English Test aceito em algumas universidades (mínimo 120+)",
          "GRE General Test (algumas escolas como UPenn ainda exigem)"
        ]
      },
      editalRecente: {
        descricao: "Edital Fulbright Brasil - Mestrado/Doutorado",
        url: "https://fulbright.org.br/edital/mestrado-doutorado/"
      },
      provasAnteriores: {
        descricao: "Repositório de provas anteriores - ETS (TOEFL/GRE)",
        url: "https://www.ets.org/toefl"
      },
      bolsa: "Fulbright: tuition (até US$ 30.000/ano) + estipêndio mensal + seguro saúde + passagem. Programas de pesquisa (PhD em Oral Sciences): TA/RA cobrindo tuition + estipêndio US$ 30.000–40.000/ano",
      site: "https://hsdm.harvard.edu/admissions/program-finder"
    },
    {
      id: "canada-mcgill",
      nome: "MSc Dental Sciences - bolsas para internacionais",
      instituicao: "Canadá · McGill, University of Toronto, UBC, University of Alberta",
      areas: [
        "MSc in Dental Sciences (McGill)",
        "MSc in Dentistry (U of T, UBC)",
        "MSc/MMSc em especialidades: Ortodontia, Periodontia, Endodontia, CTBMF, Odontopediatria",
        "Pesquisa em Oral Health Sciences"
      ],
      vagas: "Várias por departamento (geralmente 2–6 vagas/ano por especialidade). Funding usualmente garantido para MSc research-based.",
      datas: {
        "Inscrições McGill": "Setembro–Dezembro/2026",
        "Inscrições U of T / UBC": "Outubro–Janeiro/2027",
        "Início": "Setembro/2027 (fall) ou Janeiro/2028 (winter)"
      },
      processo: [
        "Identificação prévia de orientador (essencial)",
        "Aplicação online à graduate school",
        "Carta de aceite do supervisor é o passo decisivo",
        "Aplicação a bolsas internas (Graduate Excellence, Differential Fee Waiver)",
        "Aplicação paralela a Vanier CGS, Trudeau Scholarship (PhD) ou McCall MacBain (Master's)"
      ],
      requisitos: [
        "Diploma de graduação com GPA mínimo equivalente a B+ / 3.3 (4.0)",
        "Currículo Lattes/CV com publicações (diferencial)",
        "Projeto de pesquisa ou área de interesse definida",
        "Cartas de recomendação (2–3)",
        "Comprovação financeira (para visto)"
      ],
      proficiencia: {
        idioma: "Inglês (francês opcional no McGill)",
        validade: "TOEFL/IELTS: 2 anos",
        criterios: [
          "TOEFL iBT mínimo 86–100 (McGill: 86; U of T: 93; UBC: 90)",
          "IELTS mínimo 6.5–7.0",
          "CAEL (Canadian Academic English Language) - mínimo 70",
          "MELAB - mínimo 85 (algumas universidades)"
        ]
      },
      editalRecente: {
        descricao: "McGill - Funding, Scholarships and Awards (Faculty of Dental Medicine)",
        url: "https://www.mcgill.ca/dentistry/programs/awards"
      },
      provasAnteriores: {
        descricao: "Não há prova de admissão centralizada - seleção por análise + entrevista",
        url: "https://www.mcgill.ca/gradapplicants/funding/external/mccall-macbain-scholarship"
      },
      bolsa: "McGill Graduate Excellence Award: CAD 3.000–10.000/ano + RA/TA. McCall MacBain (Master's): tuition integral + CAD 2.000/mês + leadership program. Vanier (PhD): CAD 50.000/ano por 3 anos.",
      site: "https://www.mcgill.ca/dentistry/programs/awards"
    },
    {
      id: "australia-rtp",
      nome: "RTP Scholarship - Master by Research em Dentistry",
      instituicao: "Austrália · Univ. of Melbourne, Univ. of Sydney, Univ. of Adelaide, Univ. of Queensland",
      areas: [
        "Master of Philosophy (MPhil) in Dentistry",
        "Master of Dental Science by Research",
        "Especialidades por pesquisa: Ortodontia, Endodontia, Periodontia, Odontopediatria, CTBMF",
        "Pesquisa em Oral Health"
      ],
      vagas: "RTP é alocado por universidade; cada Faculty of Dentistry tem cota anual (geralmente 5–15 vagas para internacionais).",
      datas: {
        "Inscrições principais": "Geralmente Abril–Out/2026 (rounds 1 e 2)",
        "Início": "Fevereiro ou Julho/2027",
        "Duração": "2 anos (research master)"
      },
      processo: [
        "Identificar supervisor potencial e enviar Expression of Interest (EOI)",
        "Submeter aplicação formal à universidade após aceite do supervisor",
        "Aplicação automática ao RTP (não há formulário separado em várias universidades)",
        "Ranking competitivo entre todos candidatos da escola"
      ],
      requisitos: [
        "Graduação em Odontologia com Honours (ou equivalente) ou publicações",
        "GPA mínimo equivalente a 75% (varia)",
        "Pesquisa anterior (TCC, IC, mestrado profissional)",
        "Currículo com publicações é diferencial decisivo",
        "Aceite formal de um supervisor antes da aplicação"
      ],
      proficiencia: {
        idioma: "Inglês",
        validade: "TOEFL/IELTS/PTE: 2 anos",
        criterios: [
          "IELTS Academic mínimo 6.5 geral (com 6.0 em cada banda)",
          "TOEFL iBT mínimo 79 (com 21 em writing)",
          "PTE Academic mínimo 58–65",
          "Cambridge C1 Advanced - 176+",
          "Universidades top (Melbourne/Sydney) podem exigir IELTS 7.0"
        ]
      },
      editalRecente: {
        descricao: "Research Training Program (RTP) - Australian Government",
        url: "https://www.education.gov.au/research-block-grants/research-training-program"
      },
      provasAnteriores: {
        descricao: "Não há prova de admissão - seleção via mérito acadêmico e proposta de pesquisa",
        url: "https://www.sydney.edu.au/scholarships/australian-government-research-training-program/rtp-international.html"
      },
      bolsa: "RTP Fees Offset (tuition integral) + RTP Stipend ≈ AUD 35.000/ano (tax-free) + auxílio relocação + cobertura de health insurance (OSHC) para o aluno e dependentes",
      site: "https://scholarships.unimelb.edu.au/awards/graduate-research-scholarships"
    },
    {
      id: "europe-erasmus",
      nome: "Erasmus Mundus Joint Masters + Programas Nacionais",
      instituicao: "Europa · Alemanha (DAAD), Suécia (SI), Itália, Espanha, Portugal, Holanda",
      areas: [
        "Erasmus Mundus em áreas correlatas (saúde pública, biomateriais, biotecnologia oral)",
        "MSc em Dental Materials (Karolinska Institutet - Suécia)",
        "MSc em Oral Health Sciences (Universidades alemãs via DAAD)",
        "Programas em Portugal (FMDUP, FMDUL) - aceitam brasileiros com bolsas CAPES/FCT"
      ],
      vagas: "Erasmus Mundus: ≈ 60 bolsas/programa global. DAAD: ≈ 100 bolsas/ano para América Latina. Cada programa tem cota própria.",
      datas: {
        "Erasmus Mundus - inscrições": "Out/2025 a Fev/2026 (varia por programa)",
        "DAAD - inscrições": "Maio–Outubro/2026",
        "Início (Erasmus Mundus)": "Setembro/2026 ou 2027",
        "Início (DAAD)": "Outubro/2026"
      },
      processo: [
        "Erasmus Mundus: aplicação centralizada ao consortium de universidades",
        "DAAD: aplicação direta ao DAAD com aceite prévio de orientador",
        "Documentos: histórico, motivation letter, cartas, CV, proposta de pesquisa",
        "Entrevista online (algumas etapas)"
      ],
      requisitos: [
        "Diploma de graduação (idealmente em Odontologia)",
        "GPA mínimo: varia (geralmente top 30% da turma)",
        "Cartas de recomendação acadêmicas",
        "Motivation letter alinhada ao programa",
        "Experiência em pesquisa (diferencial)"
      ],
      proficiencia: {
        idioma: "Inglês (e às vezes alemão, francês, espanhol)",
        validade: "TOEFL/IELTS: 2 anos",
        criterios: [
          "IELTS Academic mínimo 6.5 (Erasmus Mundus padrão)",
          "TOEFL iBT mínimo 90",
          "Cambridge CAE ou Proficiency",
          "DAAD: muitos programas exigem alemão (TestDaF 4) ou inglês C1",
          "Karolinska/Suécia: IELTS 6.5 ou TOEFL iBT 90"
        ]
      },
      editalRecente: {
        descricao: "Erasmus Mundus Joint Masters - Catálogo oficial",
        url: "https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students/erasmus-mundus-joint-masters"
      },
      provasAnteriores: {
        descricao: "Não há prova centralizada - seleção por análise documental e entrevista",
        url: "https://www.daad.de/en/study-and-research-in-germany/scholarships/"
      },
      bolsa: "Erasmus Mundus: EUR 1.400/mês + tuition + passagem + seguro + instalação. DAAD: EUR 992/mês + tuition + viagem + seguro. Karolinska: tuition integral (≈ SEK 200.000/ano).",
      site: "https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students/erasmus-mundus-joint-masters"
    }
  ]
};

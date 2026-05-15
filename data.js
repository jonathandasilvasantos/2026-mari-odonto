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
  ]
};

// import { App } from "./app";

// new App().server.listen(3000);

const { PrismaClient } = require('@prisma/client');
const XLSX = require('xlsx');
const prisma = new PrismaClient();

const readExcel = (filePath: string) => {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(sheet);
};

const checkValue = (value: any) => { 
  if (value === undefined || value === null || value === 'null') { 
    return null;
  } 
  if (typeof value === 'string' && value.trim() === '') {
    return null;
  } 
  if (!isNaN(value) && typeof value === 'string') { 
    return parseInt(value, 10);
  } 
  return value;
};

const insertData = async (data: any) => {
  for (const row of data) {
    await prisma.familia.create({
      data: {
        municipio: checkValue(row.MUNICIPIO),
        nacionalidade: checkValue(row.NACIONALIDADE),
        situacaoNacionalidade: checkValue(row.SITUACAO_NACIONALIDADE),
        sexo: checkValue(row.SEXO),
        identidadeGenero: checkValue(row.IDENTIDADE_GENERO),
        orientacaoSexual: checkValue(row.ORIENTACAO_SEXUAL),
        raca: checkValue(row.RACA),
        povoIndigena: checkValue(row.POVO_INDIGENA),
        dominaPortugues: checkValue(row.DOMINA_PORTUGUES),
        dominaIngles: checkValue(row.DOMINA_INGLES),
        dominaFrances: checkValue(row.DOMINA_FRANCES),
        dominaEspanhol: checkValue(row.DOMINA_ESPANHOL),
        dominaAlemao: checkValue(row.DOMINA_ALEMAO),
        dominaLinguaIndigenaMaterna: checkValue(row.DOMINA_LINGUA_INDIGENA_MATERNA),
        dominaMaisLinguasIndigenas: checkValue(row.DOMINA_MAIS_LINGUAS_INDIGENAS),
        estadoCivil: checkValue(row.ESTADO_CIVIL),
        idadeChefe: checkValue(row.IDADE_CHEFE),
        ondeMora: checkValue(row.ONDE_MORA),
        tempoResidencia: checkValue(row.TEMPO_RESIDENCIA),
        localizacaoMoradia: checkValue(row.LOCALIZACAO_MORADIA),
        alvenaria: checkValue(row.ALVENARIA),
        madeiraTaquara: checkValue(row.MADEIRA_TAQUARA),
        aguaTratadaEncanada: checkValue(row.AGUA_TRATADA_ENCANADA),
        energiaEletrica: checkValue(row.ENERGIA_ELETRICA),
        asfaltoCalcamento: checkValue(row.ASFALTO_CALCAMENTO),
        coletaLixo: checkValue(row.COLETA_LIXO),
        lageForro: checkValue(row.LAGE_FORRO),
        esgoto: checkValue(row.ESGOTO),
        iluminacaoPublica: checkValue(row.ILUMINACAO_PUBLICA),
        qtdBanheiros: checkValue(row.QTD_BANHEIROS),
        banheiroComBarrasSeguranca: checkValue(row.BANHEIRO_COM_BARRAS_SEGURANCA),
        qtdTvs: checkValue(row.QTD_TVS),
        qtdRadios: checkValue(row.QTD_RADIOS),
        qtdComputadores: checkValue(row.QTD_COMPUTADORES),
        possuiMaquinaLavar: checkValue(row.POSSUI_MAQUINA_LAVAR),
        qtdGeladeira: checkValue(row.QTD_GELADEIRA),
        temFreezer: checkValue(row.TEM_FREEZER),
        qtdTelefoneCelular: checkValue(row.QTD_TELEFONE_CELULAR),
        temAcessoInternet: checkValue(row.TEM_ACESSO_INTERNET),
        temTvAssinatura: checkValue(row.TEM_TV_ASSINATURA),
        placaFotovoltaica: checkValue(row.PLACA_FOTOVOLTAICA),
        qtdAutomovelProprio: checkValue(row.QTD_AUTOMOVEL_PROPRIO),
        qtdMotocicletaPropria: checkValue(row.QTD_MOTOCICLETA_PROPRIA),
        qtdBicicletaEletrica: checkValue(row.QTD_BICICLETA_ELETRICA),
        qtdBicicleta: checkValue(row.QTD_BICICLETA),
        deslocaAutomovelProprio: checkValue(row.DESLOCA_AUTOMOVEL_PROPRIO),
        deslocaMotocicletaPropria: checkValue(row.DESLOCA_MOTOCICLETA_PROPRIA),
        deslocaBicicletaEletrica: checkValue(row.DESLOCA_BICICLETA_ELETRICA),
        deslocaBicicleta: checkValue(row.DESLOCA_BICICLETA),
        deslocaOnibusUrbano: checkValue(row.DESLOCA_ONIBUS_URBANO),
        deslocaVeiculoAplicativo: checkValue(row.DESLOCA_VEICULO_APLICATIVO),
        deslocaAPe: checkValue(row.DESLOCA_A_PE),
        tempoDeslocamentoTrabalho: checkValue(row.TEMPO_DESLOCAMENTO_TRABALHO),
        qtdPessoas: checkValue(row.QTD_PESSOAS),
        qtdCriancas0a5: checkValue(row.QTD_CRIANCAS_0_A_5),
        qtdIdosos: checkValue(row.QTD_IDOSOS),
        qtdDeficientes: checkValue(row.QTD_DEFICIENTES),
        cuidadosIdosoDeficiente: checkValue(row.CUIDADOS_IDOSO_DEFICIENTE),
        buscaServicoSus: checkValue(row.BUSCA_SERVICO_SUS),
        recebeVisitaAgente: checkValue(row.RECEBE_VISITA_AGENTE),
        vacinasCriancasCompleto: checkValue(row.VACINAS_CRIANCAS_COMPLETO),
        vacinaAdultosCompleto: checkValue(row.VACINA_ADULTOS_COMPLETO),
        gestantes: checkValue(row.GESTANTES),
        mulher10a17ComFilhos: checkValue(row.MULHER_10_A_17_COM_FILHOS),
        criancas0a5Matriculadas: checkValue(row.CRIANCAS_0_A_5_MATRICULADAS),
        criancas6a14Matriculadas: checkValue(row.CRIANCAS_6_A_14_MATRICULADAS),
        adolescentes15a17Matriculados: checkValue(row.ADOLESCENTES_15_A_17_MATRICULADOS),
        membroBeneficiarioProgramaHabitacao: checkValue(row.MEMBRO_BENEFICIARIO_PROGRAMA_HABITACAO),
        adolescenteCumprindoMedidas: checkValue(row.ADOLESCENTE_CUMPRINDO_MEDIDAS),
        adolescentePrivadoLiberdade: checkValue(row.ADOLESCENTE_PRIVADO_LIBERDADE),
        membroSituacaoCarcere: checkValue(row.MEMBRO_SITUACAO_CARCERE),
        membroUsoEntorpecente: checkValue(row.MEMBRO_USO_ENTORPECENTE),
        membroAlcoolista: checkValue(row.MEMBRO_ALCOOLISTA),
        membroHipertenso: checkValue(row.MEMBRO_HIPERTENSO),
        membroDiabetico: checkValue(row.MEMBRO_DIABETICO),
        membroProblemaVisao: checkValue(row.MEMBRO_PROBLEMA_VISAO),
        utilizaCras: checkValue(row.UTILIZA_CRAS),
        utilizaCreas: checkValue(row.UTILIZA_CREAS),
        utilizaCentroConvivencia: checkValue(row.UTILIZA_CENTRO_CONVIVENCIA),
        utilizaSadpi: checkValue(row.UTILIZA_SADPI),
        utilizaSadpd: checkValue(row.UTILIZA_SADPD),
        utilizaSadc0a6: checkValue(row.UTILIZA_SADC_0_A_6),
        utilizaSrahrpd: checkValue(row.UTILIZA_SRAHRPD),
        naoUtilizaSuas: checkValue(row.NAO_UTILIZA_SUAS),
        recebeBolsaFamilia: checkValue(row.RECEBE_BOLSA_FAMILIA),
        recebeMaisSocial: checkValue(row.RECEBE_MAIS_SOCIAL),
        recebeBpc: checkValue(row.RECEBE_BPC),
        recebeValeGas: checkValue(row.RECEBE_VALE_GAS),
        naoRecbeBeneficio: checkValue(row.NAO_RECBE_BENEFICIO),
        unidadeAcolhimentoIdoso: checkValue(row.UNIDADE_ACOLHIMENTO_IDOSO),
        unidadeAcolhimentoDeficiente: checkValue(row.UNIDADE_ACOLHIMENTO_DEFICIENTE),
        unidadeAcolhimentoCriancaAdolescente: checkValue(row.UNIDADE_ACOLHIMENTO_CRIANCA_ADOLESCENTE),
        naoViveUnidadeAcolhimento: checkValue(row.NAO_VIVE_UNIDADE_ACOLHIMENTO),
        qtdCriancas6a9: checkValue(row.QTD_CRIANCAS_6_A_9),
        qtdCriancas10a14: checkValue(row.QTD_CRIANCAS_10_A_14),
        qtdCriancas15a17: checkValue(row.QTD_CRIANCAS_15_A_17),
        qtdMulher10a17: checkValue(row.QTD_MULHER_10_A_17),
        anosEstudo: checkValue(row.ANOS_ESTUDO),
        maiores15NaoEstudamTabalham: checkValue(row.MAIORES_15_NAO_ESTUDAM_TABALHAM),
        naoEstudaTrabalhaProcurandoEmprego: checkValue(row.NAO_ESTUDA_TRABALHA_PROCURANDO_EMPREGO),
        naoEstudaTrabalhaCuidaFilhos: checkValue(row.NAO_ESTUDA_TRABALHA_CUIDA_FILHOS),
        naoEstudaTrabalhaDomestico: checkValue(row.NAO_ESTUDA_TRABALHA_DOMESTICO),
        estudandoNoMomento: checkValue(row.ESTUDANDO_NO_MOMENTO),
        motivoVoltarEstudar: checkValue(row.MOTIVO_VOLTAR_ESTUDAR),
        maiorInstrucaoFamilia: checkValue(row.MAIOR_INSTRUCAO_FAMILIA),
        naoSabeLerEscrever: checkValue(row.NAO_SABE_LER_ESCREVER),
        meioAmbiente: checkValue(row.MEIO_AMBIENTE),
        aidsDst: checkValue(row.AIDS_DST),
        racismoDiscriminacao: checkValue(row.RACISMO_DISCRIMINACAO),
        discriminacaoMulher: checkValue(row.DISCRIMINACAO_MULHER),
        discriminacaoHomossexuais: checkValue(row.DISCRIMINACAO_HOMOSEXUAIS),
        discriminacaoEtaria: checkValue(row.DISCRIMINACAO_ETARIA),
        discriminacaoReligiosa: checkValue(row.DISCRIMINACAO_RELIGIOSA),
        desigualdadeSocial: checkValue(row.DESIGUALDADE_SOCIAL),
        fomePobreza: checkValue(row.FOME_POBREZA),
        favelasMoradia: checkValue(row.FAVELAS_MORADIA),
        drogasAlcoolismo: checkValue(row.DROGAS_ALCOOLISMO),
        violenciaAssassinatos: checkValue(row.VIOLENCIA_ASSASSINATOS),
        violenciaRuralConflitos: checkValue(row.VIOLENCIA_RURAL_CONFLITOS),
        situacaoEconomica: checkValue(row.SITUACAO_ECONOMICA),
        saudePrecaria: checkValue(row.SAUDE_PRECARIA),
        educacaoPrecaria: checkValue(row.EDUCACAO_PRECARIA),
        assistenciaPrecaria: checkValue(row.ASSISTENCIA_PRECARIA),
        segurancaPrecaria: checkValue(row.SEGUURANCA_PRECARIA),
        ausenciaEsgotoColeta: checkValue(row.AUSENCIA_ESGOTO_COLETA),
        ausenciaAsfalto: checkValue(row.AUSENCIA_ASFALTO),
        enchentesDesastres: checkValue(row.ENCHENTES_DESASTRES),
        recebeCestaAlimentosGoverno: checkValue(row.RECEBE_CESTA_ALIMENTOS_GOVERNO),
        recebeCestaAlimentosFunai: checkValue(row.RECEBE_CESTA_ALIMENTOS_FUNAI),
        recebeCestaAlimentosConab: checkValue(row.RECEBE_CESTA_ALIMENTOS_CONAB),
        recebeCestaAlimentosPrefeitura: checkValue(row.RECEBE_CESTA_ALIMENTOS_PREFEITURA),
        recebeCestaAlimentosOng: checkValue(row.RECEBE_CESTA_ALIMENTOS_ONG),
        naoRecebeCestaAlimentos: checkValue(row.NAO_RECEBE_CESTA_ALIMENTOS),
        preferenciaCestaAlimentos: checkValue(row.PREFERENCIA_CESTA_ALIMENTOS),
        baixoConsumoArroz: checkValue(row.BAIXO_CONSUMO_ARROZ),
        baixoConsumoFeijao: checkValue(row.BAIXO_CONSUMO_FEIJAO),
        baixoConsumoSal: checkValue(row.BAIXO_CONSUMO_SAL),
        baixoConsumoMacarrao: checkValue(row.BAIXO_CONSUMO_MACARRAO),
        baixoConsumoOleo: checkValue(row.BAIXO_CONSUMO_OLEO),
        baixoConsumoAcucar: checkValue(row.BAIXO_CONSUMO_ACUCAR),
        baixoConsumoFuba: checkValue(row.BAIXO_CONSUMO_FUBA),
        baixoConsumoLeite: checkValue(row.BAIXO_CONSUMO_LEITE),
        baixoConsumoCharque: checkValue(row.BAIXO_CONSUMO_CHARQUE),
        baixoConsumoFarinha: checkValue(row.BAIXO_CONSUMO_FARINHA),
        quantosDiasConsomeCesta: checkValue(row.QUANTOS_DIAS_CONSOME_CESTA),
        gostariaNaCestaErva: checkValue(row.GOSTARIA_NA_CESTA_ERVA),
        gostariaNaCestaCafe: checkValue(row.GOSTARIA_NA_CESTA_CAFE),
        gostariaNaCestaCanjica: checkValue(row.GOSTARIA_NA_CESTA_CANJICA),
        gostariaNaCestaArroz: checkValue(row.GOSTARIA_NA_CESTA_ARROZ),
        gostariaNaCestaFeijao: checkValue(row.GOSTARIA_NA_CESTA_FEIJAO),
        gostariaNaCestaSal: checkValue(row.GOSTARIA_NA_CESTA_SAL),
        gostariaNaCestaMacarrao: checkValue(row.GOSTARIA_NA_CESTA_MACARRAO),
        gostariaNaCestaOleo: checkValue(row.GOSTARIA_NA_CESTA_OLEO),
        gostariaNaCestaAcucar: checkValue(row.GOSTARIA_NA_CESTA_ACUCAR),
        gostariaNaCestaFuba: checkValue(row.GOSTARIA_NA_CESTA_FUBA),
        gostariaNaCestaLeite: checkValue(row.GOSTARIA_NA_CESTA_LEITE),
        gostariaNaCestaCharque: checkValue(row.GOSTARIA_NA_CESTA_CHARQUE),
        gostariaNaCestaFarinha: checkValue(row.GOSTARIA_NA_CESTA_FARINHA),
        possuiRoca: checkValue(row.POSSUI_ROCA),
        gostariaDeTerRoca: checkValue(row.GOSTARIA_DE_TER_ROCA),
        cultivaMandioca: checkValue(row.CULTIVA_MANDIOCA),
        cultivaMilho: checkValue(row.CULTIVA_MILHO),
        cultivaMelao: checkValue(row.CULTIVA_MELAO),
        cultivaAbobora: checkValue(row.CULTIVA_ABOBORA),
        cultivaCana: checkValue(row.CULTIVA_CANA),
        cultivaFeijao: checkValue(row.CULTIVA_FEIJAO),
        cultivaBatata: checkValue(row.CULTIVA_BATATA),
        possuiHorta: checkValue(row.POSSUI_HORTA),
        gostariaDeTerHorta: checkValue(row.GOSTARIA_DE_TER_HORTA),
        possuiHoraParceria: checkValue(row.POSSUI_HORA_PARCEIRIA),
        naoCriaAnimais: checkValue(row.NAO_CRIA_ANIMAIS),
        criaAves: checkValue(row.CRIA_AVES),
        criaBovinos: checkValue(row.CRIA_BOVINOS),
        criaSuinos: checkValue(row.CRIA_SUINOS),
        trabalhaAgricultura: checkValue(row.TRABALHA_AGRICULTURA),
        trabalhaIndustria: checkValue(row.TRABALHA_INDUSTRIA),
        trabalhaConstrucaoCivil: checkValue(row.TRABALHA_CONSTRUCAO_CIVIL),
        trabalhaSetorServicos: checkValue(row.TRABALHA_SETOR_SERVICOS),
        trabalhaFuncionarioPublico: checkValue(row.TRABALHA_FUNCIONARIO_PUBLICO),
        trabalhaPlProfessorTecnico: checkValue(row.TRABALHA_PL_PROFESSOR_TECNICO),
        trabalhaForaAtividadesInformais: checkValue(row.TRABALHA_FORA_ATIVIDADES_INFORMAIS),
        trabalhaDomestico: checkValue(row.TRABALHA_DOMESTICO),
        trabalhaCasaInformal: checkValue(row.TRABALHA_CASA_INFORMAL),
        trabalhaNoLar: checkValue(row.TRABALHA_NO_LAR),
        naoTrabalha: checkValue(row.NAO_TRABALHA),
        possuiCarteiraAssinada: checkValue(row.POSSUI_CARTEIRA_ASSINADA),
        balcaoEmpregosNaCidade: checkValue(row.BALCAO_EMPREGOS_NA_CIDADE),
        somaRenda: checkValue(row.SOMA_RENDA),
        qtdCriancasAdolescentesTrabalham: checkValue(row.QUANTIDADE_CRIANCAS_ADOLESCENTES_TRABALHAM)
      },
    });
  }
};

const main = async () => {
  const data = readExcel('C:/Users/adria/Documents/GitHub/MSgraph/dados_ms_graph.xlsx');
  await insertData(data);
  console.log('Dados importados com sucesso!');
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

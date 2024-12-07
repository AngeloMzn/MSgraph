const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


function convertBigIntToNumber(data: any) {
    if (Array.isArray(data)) {
        return data.map(item =>
            Object.fromEntries(
                Object.entries(item).map(([key, value]) => [key, typeof value === 'bigint' ? Number(value) : value])
            )
        );
    }
    return data;
}

export async function getRacaDistribution() {
    try {
        const resultRaca = await prisma.$queryRaw`
            SELECT 
                f.raca AS 'Raça',
                COUNT(*) AS 'Quantidade'
            FROM prodmsgraph.familia f
            GROUP BY raca;
        `;
        return convertBigIntToNumber(resultRaca);
    } catch (error) {
        console.error('Error fetching Raca Distribution:', error);
        throw error;
    }
}

export async function getSaneamentoAcesso() {
    try {
        const resultSaneamento = await prisma.$queryRaw`
            SELECT 
                SUM(CASE WHEN f.aguaTratadaEncanada = 'S' THEN 1 ELSE 0 END) AS 'Água Tratada',
                SUM(CASE WHEN f.esgoto = 'S' THEN 1 ELSE 0 END) AS 'Esgoto',
                SUM(CASE WHEN f.coletaLixo = 'S' THEN 1 ELSE 0 END) AS 'Coleta de Lixo',
                SUM(CASE WHEN f.energiaEletrica = 'S' THEN 1 ELSE 0 END) AS 'Energia Elétrica',
                SUM(CASE WHEN f.iluminacaoPublica = 'S' THEN 1 ELSE 0 END) AS 'Iluminação Pública',
                SUM(CASE WHEN f.asfaltoCalcamento = 'S' THEN 1 ELSE 0 END) AS 'Asfalto Calçamento'
            FROM prodmsgraph.familia f;
        `;
        return convertBigIntToNumber(resultSaneamento);
    } catch (error) {
        console.error('Error fetching Saneamento Acesso:', error);
        throw error;
    }
}

export async function getFaixaEtariaChefe() {
    try {
        const resultFaixaEtaria = await prisma.$queryRaw`
            SELECT FLOOR(idadeChefe / 10) * 10 AS faixaEtaria, COUNT(*) AS quantidade
            FROM Familia
            GROUP BY FLOOR(idadeChefe / 10) * 10;
        `;
        return convertBigIntToNumber(resultFaixaEtaria);
    } catch (error) {
        console.error('Error fetching Faixa Etaria Chefe:', error);
        throw error;
    }
}

export async function getCondicoesMoradia() {
    try {
        const resultMoradia = await prisma.$queryRaw`
            SELECT 
                SUM(CASE WHEN alvenaria = 'S' THEN 1 ELSE 0 END) AS 'Alvenaria',
                SUM(CASE WHEN madeiraTaquara = 'S' THEN 1 ELSE 0 END) AS 'Madeira/Taipa'
            FROM prodmsgraph.familia f;
        `;
        return convertBigIntToNumber(resultMoradia);
    } catch (error) {
        console.error('Error fetching Condicoes Moradia:', error);
        throw error;
    }
}

export async function getServicosSociais() {
    try {
        const resultServicosSociais = await prisma.$queryRaw`
            SELECT 
                SUM(CASE WHEN utilizaCras = 'S' THEN 1 ELSE 0 END) AS 'CRAS',
                SUM(CASE WHEN utilizaCreas = 'S' THEN 1 ELSE 0 END) AS 'CREAS',
                SUM(CASE WHEN utilizaCentroConvivencia = 'S' THEN 1 ELSE 0 END) AS 'Centro de Convivência',
                SUM(CASE WHEN utilizaSadpi = 'S' THEN 1 ELSE 0 END) AS 'SADPI',
                SUM(CASE WHEN utilizaSadpd = 'S' THEN 1 ELSE 0 END) AS 'SADPD',
                SUM(CASE WHEN utilizaSadc0a6 = 'S' THEN 1 ELSE 0 END) AS 'SADC 0 a 6 Anos',
                SUM(CASE WHEN utilizaSrahrpd = 'S' THEN 1 ELSE 0 END) AS 'SRAHPD',
                SUM(CASE WHEN naoUtilizaSuas = 'N' THEN 1 ELSE 0 END) AS 'Não Utiliza SUS'
            FROM prodmsgraph.familia f;
        `;
        return convertBigIntToNumber(resultServicosSociais);
    } catch (error) {
        console.error('Error fetching Servicos Sociais:', error);
        throw error;
    }
}

export async function getBeneficiosRecebidos() {
    try {
        const resultBeneficios = await prisma.$queryRaw`
            SELECT 
                SUM(CASE WHEN recebeBolsaFamilia = 'S' THEN 1 ELSE 0 END) AS 'Bolsa Família',
                SUM(CASE WHEN recebeBpc = 'S' THEN 1 ELSE 0 END) AS 'BPC',
                SUM(CASE WHEN recebeValeGas = 'S' THEN 1 ELSE 0 END) AS 'Vale Gás',
                SUM(CASE WHEN recebeMaisSocial = 'S' THEN 1 ELSE 0 END) AS 'Mais Social',
                SUM(CASE WHEN naoRecbeBeneficio = 'N' THEN 1 ELSE 0 END) AS 'Não Recebe Benefício'
            FROM prodmsgraph.familia f;
        `;
        return convertBigIntToNumber(resultBeneficios);
    } catch (error) {
        console.error('Error fetching Beneficios Recebidos:', error);
        throw error;
    }
}

export async function getVulnerabilidades() {
    try {
        const resultVulnerabilidades = await prisma.$queryRaw`
            SELECT 
                SUM(CASE WHEN meioAmbiente = 'S' THEN 1 ELSE 0 END) AS 'Meio Ambiente',
                SUM(CASE WHEN aidsDst = 'S' THEN 1 ELSE 0 END) AS 'AIDS e DST',
                SUM(CASE WHEN racismoDiscriminacao = 'S' THEN 1 ELSE 0 END) AS 'Racismo e Descriminação',
                SUM(CASE WHEN discriminacaoMulher = 'S' THEN 1 ELSE 0 END) AS 'Discriminação Mulher',
                SUM(CASE WHEN discriminacaoHomossexuais = 'S' THEN 1 ELSE 0 END) AS 'Discriminação Homossexuais',
                SUM(CASE WHEN discriminacaoEtaria = 'S' THEN 1 ELSE 0 END) AS 'Discriminação Etaria',
                SUM(CASE WHEN discriminacaoReligiosa = 'S' THEN 1 ELSE 0 END) AS 'Discriminação Religiosa',
                SUM(CASE WHEN desigualdadeSocial = 'S' THEN 1 ELSE 0 END) AS 'Desigualdade Social',
                SUM(CASE WHEN fomePobreza = 'S' THEN 1 ELSE 0 END) AS 'Fome e Pobreza',
                SUM(CASE WHEN favelasMoradia = 'S' THEN 1 ELSE 0 END) AS 'Favelas Moradia',
                SUM(CASE WHEN drogasAlcoolismo = 'S' THEN 1 ELSE 0 END) AS 'Drogas Alcoolismo',
                SUM(CASE WHEN violenciaAssassinatos = 'S' THEN 1 ELSE 0 END) AS 'Violência Assasinatos',
                SUM(CASE WHEN violenciaRuralConflitos = 'S' THEN 1 ELSE 0 END) AS 'Violência Rural Conflitos',
                SUM(CASE WHEN situacaoEconomica = 'S' THEN 1 ELSE 0 END) AS 'Situação Econômica',	
                SUM(CASE WHEN saudePrecaria = 'S' THEN 1 ELSE 0 END) AS 'Saúde Precária',
                SUM(CASE WHEN educacaoPrecaria = 'S' THEN 1 ELSE 0 END) AS 'Educação Precária',
                SUM(CASE WHEN assistenciaPrecaria = 'S' THEN 1 ELSE 0 END) AS 'Assistência Precária',
                SUM(CASE WHEN segurancaPrecaria = 'S' THEN 1 ELSE 0 END) AS 'Segurança Precária',
                SUM(CASE WHEN ausenciaEsgotoColeta = 'S' THEN 1 ELSE 0 END) AS 'Ausência de Esgoto',
                SUM(CASE WHEN ausenciaAsfalto = 'S' THEN 1 ELSE 0 END) AS 'Ausência de Asfalto',
                SUM(CASE WHEN enchentesDesastres = 'S' THEN 1 ELSE 0 END) AS 'Enchentes Desastres'
            FROM prodmsgraph.familia f;
        `;
        return convertBigIntToNumber(resultVulnerabilidades);
    } catch (error) {
        console.error('Error fetching Vulnerabilidades:', error);
        throw error;
    }
}

export async function getGeneroChefeFamilia() {
    try {
        const resultGenero = await prisma.$queryRaw`
            SELECT 
                sexo AS 'Sexo',
                COUNT(*) AS 'Quantidade'
            FROM prodmsgraph.familia f
            GROUP BY sexo;
        `;
        return convertBigIntToNumber(resultGenero);
    } catch (error) {
        console.error('Error fetching Genero Chefe Familia:', error);
        throw error;
    }
}

export async function getDistribuicaoRenda() {
    try {
        const resultRenda = await prisma.$queryRaw`
            SELECT 
                somaRenda AS 'Faixa de Renda',
                COUNT(*) AS 'Quantidade'
                FROM prodmsgraph.familia f
            GROUP BY somaRenda;
        `;
        return convertBigIntToNumber(resultRenda);
    } catch (error) {
        console.error('Error fetching Distribuicao Renda:', error);
        throw error;
    }
}

export async function getTrabalhoInfantil() {
    try {
        const resultTrabalhoInfantil = await prisma.$queryRaw`
            SELECT 
                SUM(CASE WHEN qtdCriancasAdolescentesTrabalham BETWEEN 1 AND 5 THEN qtdCriancasAdolescentesTrabalham ELSE 0 END) AS 'Crianças/Adolescentes Trabalhando'
            FROM prodmsgraph.familia f;
        `;
        return convertBigIntToNumber(resultTrabalhoInfantil);
    } catch (error) {
        console.error('Error fetching Trabalho Infantil:', error);
        throw error;
    }
}

module.exports = {
    getRacaDistribution,
    getSaneamentoAcesso,
    getFaixaEtariaChefe,
    getCondicoesMoradia,
    getServicosSociais,
    getBeneficiosRecebidos,
    getVulnerabilidades,
    getGeneroChefeFamilia,
    getDistribuicaoRenda,
    getTrabalhoInfantil,
};
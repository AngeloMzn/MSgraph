import { Request, Response } from "express";
import {
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
} from "../dao/FamiliaDao";

class FamiliaController {
  public async getRacaDistribution(req: Request, res: Response): Promise<Response> {
    try {
      const response = await getRacaDistribution();
      return res.json(response);
    } catch (error) {
      console.error("Error in getRacaDistribution:", error);
      return res.status(500).json({ message: "Erro ao obter distribuição de raça", error });
    }
  }

  public async getSaneamentoAcesso(req: Request, res: Response): Promise<Response> {
    try {
      const response = await getSaneamentoAcesso();
      return res.json(response);
    } catch (error) {
      console.error("Error in getSaneamentoAcesso:", error);
      return res.status(500).json({ message: "Erro ao obter acesso ao saneamento", error });
    }
  }

  public async getFaixaEtariaChefe(req: Request, res: Response): Promise<Response> {
    try {
      const response = await getFaixaEtariaChefe();
      return res.json(response);
    } catch (error) {
      console.error("Error in getFaixaEtariaChefe:", error);
      return res.status(500).json({ message: "Erro ao obter faixa etária do chefe", error });
    }
  }

  public async getCondicoesMoradia(req: Request, res: Response): Promise<Response> {
    try {
      const response = await getCondicoesMoradia();
      return res.json(response);
    } catch (error) {
      console.error("Error in getCondicoesMoradia:", error);
      return res.status(500).json({ message: "Erro ao obter condições de moradia", error });
    }
  }

  public async getServicosSociais(req: Request, res: Response): Promise<Response> {
    try {
      const response = await getServicosSociais();
      return res.json(response);
    } catch (error) {
      console.error("Error in getServicosSociais:", error);
      return res.status(500).json({ message: "Erro ao obter serviços sociais", error });
    }
  }

  public async getBeneficiosRecebidos(req: Request, res: Response): Promise<Response> {
    try {
      const response = await getBeneficiosRecebidos();
      return res.json(response);
    } catch (error) {
      console.error("Error in getBeneficiosRecebidos:", error);
      return res.status(500).json({ message: "Erro ao obter benefícios recebidos", error });
    }
  }

  public async getVulnerabilidades(req: Request, res: Response): Promise<Response> {
    try {
      const response = await getVulnerabilidades();
      return res.json(response);
    } catch (error) {
      console.error("Error in getVulnerabilidades:", error);
      return res.status(500).json({ message: "Erro ao obter vulnerabilidades", error });
    }
  }

  public async getGeneroChefeFamilia(req: Request, res: Response): Promise<Response> {
    try {
      const response = await getGeneroChefeFamilia();
      return res.json(response);
    } catch (error) {
      console.error("Error in getGeneroChefeFamilia:", error);
      return res.status(500).json({ message: "Erro ao obter gênero do chefe de família", error });
    }
  }

  public async getDistribuicaoRenda(req: Request, res: Response): Promise<Response> {
    try {
      const response = await getDistribuicaoRenda();
      return res.json(response);
    } catch (error) {
      console.error("Error in getDistribuicaoRenda:", error);
      return res.status(500).json({ message: "Erro ao obter distribuição de renda", error });
    }
  }

  public async getTrabalhoInfantil(req: Request, res: Response): Promise<Response> {
    try {
      const response = await getTrabalhoInfantil();
      return res.json(response);
    } catch (error) {
      console.error("Error in getTrabalhoInfantil:", error);
      return res.status(500).json({ message: "Erro ao obter trabalho infantil", error });
    }
  }
}

export const familiaController = new FamiliaController();

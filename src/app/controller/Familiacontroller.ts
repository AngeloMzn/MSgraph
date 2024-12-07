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
      return res.status(500).json({ message: "Erro interno no servidor", error });
    }
  }

  public async getSaneamentoAcesso(req: Request, res: Response): Promise<Response> {
    try {
      const response = await getSaneamentoAcesso();
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: "Erro interno no servidor", error });
    }
  }

  public async getFaixaEtariaChefe(req: Request, res: Response): Promise<Response> {
    try {
      const response = await getFaixaEtariaChefe();
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: "Erro interno no servidor", error });
    }
  }

  public async getCondicoesMoradia(req: Request, res: Response): Promise<Response> {
    try {
      const response = await getCondicoesMoradia();
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: "Erro interno no servidor", error });
    }
  }

  public async getServicosSociais(req: Request, res: Response): Promise<Response> {
    try {
      const response = await getServicosSociais();
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: "Erro interno no servidor", error });
    }
  }

  public async getBeneficiosRecebidos(req: Request, res: Response): Promise<Response> {
    try {
      const response = await getBeneficiosRecebidos();
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: "Erro interno no servidor", error });
    }
  }

  public async getVulnerabilidades(req: Request, res: Response): Promise<Response> {
    try {
      const response = await getVulnerabilidades();
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: "Erro interno no servidor", error });
    }
  }

  public async getGeneroChefeFamilia(req: Request, res: Response): Promise<Response> {
    try {
      const response = await getGeneroChefeFamilia();
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: "Erro interno no servidor", error });
    }
  }

  public async getDistribuicaoRenda(req: Request, res: Response): Promise<Response> {
    try {
      const response = await getDistribuicaoRenda();
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: "Erro interno no servidor", error });
    }
  }

  public async getTrabalhoInfantil(req: Request, res: Response): Promise<Response> {
    try {
      const response = await getTrabalhoInfantil();
      return res.json(response);
    } catch (error) {
      return res.status(500).json({ message: "Erro interno no servidor", error });
    }
  }
}

export const familiaController = new FamiliaController();
import { Router } from "express";
// import { userController } from "../app/controller/UserController";
import { familiaController } from "../app/controller/Familiacontroller";


const router: Router = Router()

//Auth
// router.post("/signup", userController.signup);
// router.post("/login", userController.login);

//Familia
router.get("/familia/raca", familiaController.getRacaDistribution);
router.get("/familia/saneamento", familiaController.getSaneamentoAcesso);
router.get("/familia/faixaEtaria", familiaController.getFaixaEtariaChefe);
router.get("/familia/moradia", familiaController.getCondicoesMoradia);
router.get("/familia/servicosSociais", familiaController.getServicosSociais);
router.get("/familia/beneficios", familiaController.getBeneficiosRecebidos);
router.get("/familia/vulnerabilidade", familiaController.getVulnerabilidades);
router.get("/familia/generoChefeFamilia", familiaController.getGeneroChefeFamilia);
router.get("/familia/renda", familiaController.getDistribuicaoRenda);
router.get("/familia/trabalhoInfantil", familiaController.getTrabalhoInfantil);

if(process.env.DEV_MODE == "true"){
    console.log("DEV MODE ENABLED");
}

export { router };
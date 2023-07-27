const nutriletModel = require("../models/nutriletModels")

const newNutrilet = async (req, res) => {
    try {
        const {
            nome,
            idade,
            peso,
            altura,
            imc,
            classificacaoImc
        } = req.body;

        const cadastroNutrilet = new nutriletModel({
            nome,
            idade,
            peso,
            altura,
            imc, 
            classificacaoImc
        });

        const savedNutrilet = await cadastroNutrilet.save();
        res.status(200).json({ message: "Novo cadastro feito com sucess!!!", savedNutrilet});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

const findAllNutrilet = async (req,res) => {
    try {
        const AllNutrilet = await nutriletModel.find({}, null);
        res.status(200).json(AllNutrilet);
    } catch (error) {
        res.status(404).json({ message: error.message});
    };
};

const updateByIdNutrilet = async (req, res) => {
    try {
      const {
        nome,
        idade,
        peso,
        altura,
        imc,
        classificacaoImc
      } = req.body;
      const updateNutrilet = await nutriletModel.findByIdAndUpdate(req.params.id,{
          nome,
          idade,
          peso,
          altura,
          imc,
          classificacaoImc
        }
      );
    await updateNutrilet.save()
      res.status(200).json(updateNutrilet);
    } catch {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
  };

  const deleteNutrilet = async (req, res) => {
    try {
      const { id } = req.params;
      const findNutrilet = await nutriletModel.findByIdAndDelete(id);
  
      if (findNutrilet == null) {
        return res.status(404).json({ message: `patient with id ${id} not found` })
      };
      res.status(200).json({ message: `patient with id ${id} was successfully deleted` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    };
  };

module.exports = {
    newNutrilet,
    findAllNutrilet,
    updateByIdNutrilet, 
    deleteNutrilet
}
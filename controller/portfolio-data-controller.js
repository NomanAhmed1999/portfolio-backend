const Portfolio = require('../model/Portfolio-data');

// Get All Portfolio data
const all_portfolios = async (req, res) => {
    try {
        const Portfolios = await Portfolio.find();
        res.json(Portfolios);
    } catch (error) {
        res.json({ message: error })
    }
};

// Get Single Portfolio data
const single_portfolio = async (req, res) => {
    try {
        const portfolioData = await portfolioDataSchema.findById(res.params.portfolioId);
        res.json(portfolioData);
    } catch (error) {
        res.json({ message: error })
    }
};



// Add New Product
const add_new_portfolio = async (req, res) => {
    try {
        const portfolioData = new portfolioDataSchema({
            title: req.body.title,
            price: req.body.pice
        });
        const savePortfolio = await portfolioDataSchema.save();
        res.send(savePortfolio);
    } catch (error) {
        res.status(400).send(error);
    }
};



// Update Portfolio data
const update_portfolio = async (req, res) => {
    try {
        const portfolioData = {
            title: req.body.title,
            price: req.body.pice
        };
        const savePortfolio = await portfolioDataSchema.findByIdAndUpdate(
            { _id: req.params.portfolioId },
            portfolioData
        );
        res.send(savePortfolio);
    } catch (error) {
        res.status(400).send(error);
    }
};



// Delete Portfolio data
const delete_portfolio = async (req, res) => {
    try {
        const savePortfolio = await portfolioDataSchema.findByIdAndDelete(req.params.PortfolioId);
        res.send(savePortfolio);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    all_portfolios,
    single_portfolio,
    add_new_portfolio,
    update_portfolio,
    delete_portfolio
}
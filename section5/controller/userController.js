const restauModel = require("../model/userModel");
//1
const getAllRestaurant = async (req, res) => {
  const reall = await restauModel.find();
  res.json(reall);
};
//2
const getZipCode = async (req, res) => {
  const zip = req.params.zip;
  const rezip = await restauModel.find({ "address.zipcode": zip });
  res.json(rezip);
};
//3
const getCuisine = async (req, res) => {
  const cuisine = req.params.cuisine;
  const recuisine = await restauModel.find({ "cuisine": cuisine });
  res.json(recuisine);
};
//4
const getBorough = async (req, res) => {
  const borough = req.params.borough;
  const reborough = await restauModel.find({ "borough": borough });
  res.json(reborough);
};
//5
const getBoroughs = async (req, res) => {
  const borough = req.params.borough;
  const reborough = await restauModel.find({ "borough": borough });
  res.json(reborough);
};
//6
const getCuisineChicken = async (req, res) => {
  const borough = req.params.borough;
  const cuisine = req.params.cuisine;
  const reborough = await restauModel.find({ "borough": borough },{ "cuisine": cuisine});
  res.json(reborough);
};
//7
const getStreet = async (req, res) => {
  const street = req.params.street;
  const restreet = await restauModel.find({"address.street": street});
  res.json(restreet)
};
//8
const getScore = async (req, res) => {
  const score = req.params.score;
  const rescore = await restauModel.find({"rates.score": score});
  res.json(rescore)
}
//9
const getRate = async (req, res) => {
  const rate = req.params.rate;
  const rerate = await restauModel.find({"rates.rate": rate});
  res.json(rerate);
}
//10
const getMaxScore = async (req, res) => {
  const score = req.params.score;
  const rescore = await restauModel.find({"rates.score": score});
  res.json(rescore)
}

module.exports = {getAllRestaurant, getZipCode, getCuisine, getBorough, getBoroughs, getCuisineChicken, getStreet, getScore, getRate, getMaxScore}

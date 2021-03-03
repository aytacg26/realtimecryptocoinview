import express from 'express';
import config from 'config';
import axios from 'axios';

const currencyRouter = express.Router();
const key = config.get('nomicsAPIKey');

/**
 * @route           GET api/currencies/:pageNum
 * @description     This will get all currencies, and 25 currency per page
 */
currencyRouter.get('/:pageNum', async (req, res) => {
  try {
    const currencyData = await axios.get(
      `https://api.nomics.com/v1/currencies/ticker?key=${key}&interval=1d,7d,30d,365d&convert=USD&status=active&per-page=25&page=${req.params.pageNum}&sort=rank`
    );

    res.json(currencyData.data);
  } catch (error) {
    res.status(500).json('Internal Server Error');
  }
});

currencyRouter.get('/:perPage/:currency', async (req, res) => {
  try {
    const currencyData = await axios.get(
      `https://api.nomics.com/v1/currencies/ticker?key=${key}&interval=1d,7d&convert=${req.params.currency}&status=active&per-page=${req.params.perPage}&page=${req.params.pageNum}&sort=rank`
    );

    res.json(currencyData.data);
  } catch (error) {
    res.status(500).json('Internal Server Error');
  }
});

currencyRouter.get('/currency/:id', async (req, res) => {
  try {
    const currencyData = await axios.get(
      `https://api.nomics.com/v1/currencies/ticker?key=${key}&interval=1h,1d,7d,30d,365d&convert=USD&status=active&ids=${req.params.id}`
    );

    if (currencyData.data.length === 0) {
      return res.status(404).json({
        message:
          "We couldn't found the currency, it is not exist or it may become inactive",
      });
    }

    res.json(currencyData.data);
  } catch (error) {
    return res.status(500).json('Internal Server Error');
  }
});

currencyRouter.get('/sort/:sortType', async (req, res) => {
  try {
    const sortTypes = ['rank', 'first_priced_at'];
    const sortType = sortTypes.includes(req.params.sortType)
      ? req.params.sortType
      : 'rank';

    const currencyData = await axios.get(
      `https://api.nomics.com/v1/currencies/ticker?key=${key}&interval=1d,7d,30d,365d&convert=USD&status=active&per-page=25&page=${req.params.pageNum}&sort=${sortType}`
    );

    res.json(currencyData.data);
  } catch (error) {
    return res.status(500).json('Internal Server Error');
  }
});

export default currencyRouter;

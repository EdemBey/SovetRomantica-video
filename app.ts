import axios from 'axios';
import cheerio from 'cheerio';
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/get-anime', async (req: Request, res: Response) => {
  try {
    const link = req.query.link as string;
    const response = await axios.get(link);
    const animeData = response.data;

    const $ = cheerio.load(animeData);
    const sovetLink = await Promise.all(
      $('[href*="sovetromantica.com/anime"]').toArray().map(async (element) => {
        return element.attribs.href;
      })
    );
    
    const url = sovetLink[0];
    const pattern = /\/(\d+)/;
    const match = url.match(pattern);
    const id = match ? match[1] : null;

    const responseAPI = (await axios.get(`https://service.sovetromantica.com/v1/anime/${id}/episodes`)).data;

    res.json(responseAPI);
  } catch (error) {
    console.error('Error retrieving anime data:', error);
    res.status(500).json({ error: 'Failed to retrieve anime data' });
  }
});

app.get('/get-video', async (req: Request, res: Response) => {
  try {
    const link = req.query.link as string;
    const response = await axios.get(link);
    const animeData = response.data as string;
    const regex = /"file":"([^"]+)"/i;
    const match = animeData.match(regex);
    const url = match ? match[1] : null;
    res.json({ url });
  } catch (error) {
    console.error('Error retrieving video data:', error);
    res.status(500).json({ error: 'Failed to retrieve video data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

export default async (req:NextApiRequest, res:NextApiResponse) => {
  const urlString = Array.isArray(req.query.url)?req.query.url[0]:req.query.url;
  const url = decodeURIComponent(urlString);
  const result = await fetch(url);
  const body = await result.body;
  body.pipe(res);
};
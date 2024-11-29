import { Buffer } from 'buffer';

export default async (req, res) => {
  const projectId = "0ab695594a4a1a0802e9";
  const projectSecret = "d44f024f7ef172139c14e1689607174d0f73e23ff69c2b3ca4fd107488607518";
  const auth = `Basic ${Buffer.from(`${projectId}:${projectSecret}`).toString('base64')}`;
  // console.log("secure.js auth: ",auth)
  res.status(200).json({ data: auth });
};

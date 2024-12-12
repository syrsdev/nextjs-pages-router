// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    status: boolean;
    statusCode: number;
    data: {
        id: number;
        name: string;
        price: number;
        size: string;
    }[];
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const data = [
        {
            id: 1,
            name: "mentega",
            price: 18,
            size: "XL",
        },
        {
            id: 2,
            name: "kopi",
            price: 18,
            size: "XL",
        },
    ];
    res.status(200).json({ status: true, statusCode: 200, data });
}

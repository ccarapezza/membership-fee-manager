// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getSession } from "next-auth/react";
import MembershipFeeManager from '../../services/MembsershipFeeManagerService'

export default async function handler(req, res) {
  const { feeIds } = req.body;
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: "You must be logged in." });
  } else {
    const paymentData = await MembershipFeeManager.mpPayment(feeIds);
    res.status(200).json(paymentData)
  }
}
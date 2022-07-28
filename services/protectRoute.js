import { getToken } from "next-auth/jwt"

const protectRoute = (handler) => {
  return async (req, res) => {
    const token = await getToken({ req, secret: process.env.JWT_SECRET })

    if(!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    return handler(req, res);
  };
};

export default protectRoute;

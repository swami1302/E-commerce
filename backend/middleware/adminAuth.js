import jwt from 'jsonwebtoken';


const adminAuth = async (req, res, next) => {
    try {
        const {token} = req.headers;
        // console.log(token);
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(403).json({ message: "Forbidden" });
        }

        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export default adminAuth;
import { authMiddleware } from "@clerk/nextjs/server";



export default authMiddleware({
    publicRoutes: ["/", "/ProudctDetails/(.*)"]
})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
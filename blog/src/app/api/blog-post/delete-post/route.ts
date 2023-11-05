import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(req: NextRequest){
    try {
        const url = new URL(req.url);
        const extractIdOfBlogItemToBeDeleted = url.searchParams.get("id");

        const deletedBLogPost = await prisma.post.delete({
            where : {
                id : Number(extractIdOfBlogItemToBeDeleted)
            }
        })

        if (deletedBLogPost) {
            return NextResponse.json({
              success: true,
              message: "Blog deleted successfully",
            });
          } else {
            return NextResponse.json({
              success: false,
              message: "Failed to delete the blog ! Please try again",
            });
          }

    } catch (e) {
        console.log(e);

        return  NextResponse.json({
            success : false,
            message : 'Somthing went wrong ! Please try again'
        })
    }
}
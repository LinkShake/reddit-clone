import { prisma } from "../../../lib/prisma";
import { auth } from "@clerk/nextjs";

export async function DELETE(
  req: Request,
  { params }: { params: { postId: string } }
) {
  const { userId } = auth();

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }
  const data = await req.json();
  const { postId } = params;

  const comment = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  if (!comment) return Response.json({ msg: "No post was found" });

  const updatedPost = await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      comments: {
        delete: {
          id: data.commentId,
        },
      },
    },
  });

  return Response.json({ updatedPost });
}

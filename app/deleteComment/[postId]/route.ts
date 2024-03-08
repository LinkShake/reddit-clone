import { prisma } from "../../../lib/prisma";

export async function DELETE(
  req: Request,
  { params }: { params: { postId: string } }
) {
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

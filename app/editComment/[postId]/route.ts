import { prisma } from "../../../lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: { postId: string } }
) {
  const data = await req.json();
  const { postId } = params;

  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  if (!post) return Response.json({ msg: "No post was found " });

  const updatedPost = await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      comments: {
        update: {
          where: {
            id: data.commentId,
          },
          data: {
            textContent: data.newContent,
          },
        },
      },
    },
  });

  return Response.json({ updatedPost });
}

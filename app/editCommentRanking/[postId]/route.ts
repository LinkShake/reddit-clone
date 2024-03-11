import { prisma } from "../../../lib/prisma";
import { auth } from "@clerk/nextjs";

export async function PATCH(
  req: Request,
  { params }: { params: { postId: string } }
) {
  const { userId } = auth();

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  const data = await req.json();
  const { postId } = params;

  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  if (!post) return Response.json({ msg: "No post was found " });

  if (data.action === "upvote") {
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
              ranking: {
                increment: 1,
              },
            },
          },
        },
      },
    });

    return Response.json({ updatedPost });
  } else if (data.action === "downvote") {
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
              ranking: {
                decrement: 1,
              },
            },
          },
        },
      },
    });

    return Response.json({ updatedPost });
  }
}

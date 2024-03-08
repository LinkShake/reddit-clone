import { prisma } from "../../../lib/prisma";

export async function POST(
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
        create: {
          author: data.author,
          textContent: data.textContent,
          ranking: 0,
        },
      },
    },
  });

  return Response.json({ updatedPost });
}

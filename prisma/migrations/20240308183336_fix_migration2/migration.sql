/*
  Warnings:

  - Made the column `ranking` on table `Comment` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `roomId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Made the column `ranking` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "ranking" SET NOT NULL;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "roomId" TEXT NOT NULL,
ALTER COLUMN "ranking" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - Added the required column `creatorId` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "creatorId" TEXT NOT NULL;

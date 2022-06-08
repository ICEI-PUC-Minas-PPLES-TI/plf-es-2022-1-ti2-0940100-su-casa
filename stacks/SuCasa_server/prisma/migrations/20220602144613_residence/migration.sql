/*
  Warnings:

  - You are about to drop the column `endereco` on the `Property` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Property" DROP COLUMN "endereco",
ALTER COLUMN "availability" SET DATA TYPE TEXT;

/*
  Warnings:

  - You are about to drop the column `address` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `propertySize` on the `Property` table. All the data in the column will be lost.
  - Added the required column `bairro` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numCapacity` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numToilet` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rua` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tamLocal` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Property_address_key";

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "address",
DROP COLUMN "propertySize",
ADD COLUMN     "bairro" TEXT NOT NULL,
ADD COLUMN     "cep" TEXT NOT NULL,
ADD COLUMN     "cidade" TEXT NOT NULL,
ADD COLUMN     "endereco" TEXT NOT NULL,
ADD COLUMN     "estado" TEXT NOT NULL,
ADD COLUMN     "numCapacity" INTEGER NOT NULL,
ADD COLUMN     "numToilet" INTEGER NOT NULL,
ADD COLUMN     "numero" TEXT NOT NULL,
ADD COLUMN     "rua" TEXT NOT NULL,
ADD COLUMN     "tamLocal" INTEGER NOT NULL,
ALTER COLUMN "price" DROP NOT NULL;

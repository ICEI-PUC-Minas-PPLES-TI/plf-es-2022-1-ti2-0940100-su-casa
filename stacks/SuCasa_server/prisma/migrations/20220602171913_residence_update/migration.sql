/*
  Warnings:

  - You are about to drop the `Property` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Evaluation" DROP CONSTRAINT "Evaluation_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_propertyId_fkey";

-- DropForeignKey
ALTER TABLE "Property" DROP CONSTRAINT "Property_ownerId_fkey";

-- DropTable
DROP TABLE "Property";

-- CreateTable
CREATE TABLE "Residence" (
    "id" TEXT NOT NULL,
    "description" TEXT,
    "cep" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "numCapacity" INTEGER NOT NULL,
    "tamLocal" INTEGER NOT NULL,
    "numToilet" INTEGER NOT NULL,
    "availability" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "price" INTEGER,

    CONSTRAINT "Residence_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Residence" ADD CONSTRAINT "Residence_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Residence"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evaluation" ADD CONSTRAINT "Evaluation_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Residence"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

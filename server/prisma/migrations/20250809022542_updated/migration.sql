/*
  Warnings:

  - You are about to drop the `TypePet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "TypePet_name_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "TypePet";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "type_pets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_clients" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "name" TEXT NOT NULL,
    "type_pet_id" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "clients_type_pet_id_fkey" FOREIGN KEY ("type_pet_id") REFERENCES "type_pets" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_clients" ("createdAt", "email", "id", "name", "phone", "type_pet_id", "updatedAt") SELECT "createdAt", "email", "id", "name", "phone", "type_pet_id", "updatedAt" FROM "clients";
DROP TABLE "clients";
ALTER TABLE "new_clients" RENAME TO "clients";
CREATE UNIQUE INDEX "clients_email_key" ON "clients"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "type_pets_name_key" ON "type_pets"("name");

/*
  Warnings:

  - You are about to drop the `crystallen` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `test` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `crystallenId` on the `item` table. All the data in the column will be lost.
  - Added the required column `kristallenId` to the `item` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "crystallen";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "test";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "kristallen" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "naam" TEXT NOT NULL,
    "prijs" REAL NOT NULL,
    "kleur" TEXT NOT NULL,
    "gewicht" TEXT NOT NULL,
    "transperant" BOOLEAN NOT NULL,
    "herkomst" TEXT NOT NULL,
    "inhoud" REAL NOT NULL,
    "zodiacId" INTEGER NOT NULL,
    CONSTRAINT "kristallen_zodiacId_fkey" FOREIGN KEY ("zodiacId") REFERENCES "zodiac" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "zodiac" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "symbol" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gloss" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "count" INTEGER NOT NULL DEFAULT 1,
    "kristallenId" TEXT NOT NULL,
    "bestellingOrdernummer" INTEGER,
    CONSTRAINT "item_kristallenId_fkey" FOREIGN KEY ("kristallenId") REFERENCES "kristallen" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "item_bestellingOrdernummer_fkey" FOREIGN KEY ("bestellingOrdernummer") REFERENCES "bestelling" ("ordernummer") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_item" ("bestellingOrdernummer", "count", "id") SELECT "bestellingOrdernummer", "count", "id" FROM "item";
DROP TABLE "item";
ALTER TABLE "new_item" RENAME TO "item";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

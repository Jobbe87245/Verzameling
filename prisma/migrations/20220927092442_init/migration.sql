-- CreateTable
CREATE TABLE "crystallen" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "naam" TEXT NOT NULL,
    "prijs" REAL NOT NULL,
    "kleur" TEXT NOT NULL,
    "gewicht" TEXT NOT NULL,
    "transperant" BOOLEAN NOT NULL,
    "zodiac" TEXT NOT NULL,
    "herkomst" TEXT NOT NULL,
    "inhoud" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "gebruikers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "naam" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER'
);

-- CreateTable
CREATE TABLE "item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "count" INTEGER NOT NULL DEFAULT 1,
    "crystallenId" TEXT NOT NULL,
    "bestellingOrdernummer" INTEGER,
    CONSTRAINT "item_crystallenId_fkey" FOREIGN KEY ("crystallenId") REFERENCES "crystallen" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "item_bestellingOrdernummer_fkey" FOREIGN KEY ("bestellingOrdernummer") REFERENCES "bestelling" ("ordernummer") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "bestelling" (
    "ordernummer" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gebruikersId" TEXT,
    CONSTRAINT "bestelling_gebruikersId_fkey" FOREIGN KEY ("gebruikersId") REFERENCES "gebruikers" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

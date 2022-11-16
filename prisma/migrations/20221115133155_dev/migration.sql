/*
  Warnings:

  - A unique constraint covering the columns `[naam]` on the table `gebruikers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "gebruikers_naam_key" ON "gebruikers"("naam");

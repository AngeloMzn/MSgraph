/*
  Warnings:

  - You are about to alter the column `municipio` on the `familia` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `familia` MODIFY `municipio` INTEGER NULL;

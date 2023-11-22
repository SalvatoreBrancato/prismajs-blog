/*
  Warnings:

  - You are about to alter the column `content` on the `post` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `Text`.
  - The `published` column on the `post` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE `post` MODIFY `content` TEXT NOT NULL,
    DROP COLUMN `published`,
    ADD COLUMN `published` BOOLEAN NOT NULL DEFAULT false;

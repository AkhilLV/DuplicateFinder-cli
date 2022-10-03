#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

import ImageIndex from "./ImageIndex.js";

const directories = [];

console.log(chalk.bgRed("DuplicateFinder-cli"));

inquirer
  .prompt([
    {
      name: "directory",
      message: "Enter directory path to search?",
    },
  ])
  .then((answers) => {
    console.info("Answer:", answers.directory);

    const imageIndex = new ImageIndex([answers.directory]);

    const duplicateImages = imageIndex.getDuplicateImages();

    for (let file in duplicateImages) {
      console.log(chalk.bgGreen(file));

      duplicateImages[file].forEach((element) => {
        console.log(element);
      });
      console.log("\n");
    }
  });

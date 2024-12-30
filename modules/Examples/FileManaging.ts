import { fs } from "Utils/fs";


if (!fs.exists("testDir")) fs.mkdir("testDir");

fs.write("testDir/testFile.txt", "Hello World!");

console.log(fs.read("testDir/testFile.txt"));

fs.remove("testDir/testFile.txt");

fs.remove("testDir");
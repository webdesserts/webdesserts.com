#!/usr/bin/env node
import playwright from "playwright";
import os from "os";
import fs from "fs";

async function printResumePDF() {
  const url = new URL("http://" + os.hostname());
  url.port = 3000;
  url.pathname = "/resume";

  // Launch browser
  const browser = await playwright.chromium.launch({});

  // Navigate to the resume page
  const page = await browser.newPage();
  await page.goto(url.toString());
  await page.waitForSelector("#resume");

  // Print the page as a pdf
  const pdf = await page.pdf({ format: "A4" });

  // Save the pdf as a pulbic asset
  fs.writeFileSync("public/resume.pdf", pdf);

  await browser.close();
}

printResumePDF();

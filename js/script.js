// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function gets the Cat fact.
 * The "async" is there because it will take time for the internet to return the value
 */
async function getRandomQuote() {
  // the "try" is here because the internet may not be working
  // it is like an "if ... else" statement"
  try {
    const resultJSON = await fetch("https://api.breakingbadquotes.xyz/v1/quotes")
    const jsonData = await resultJSON.json()
    console.log(jsonData)
    const quote = jsonData[0].quote
    const author = jsonData[0].author

    // output
    document.getElementById("quote").innerHTML = "\"" + quote + "\""
    document.getElementById("author").innerHTML = "Author: " + author + "</p>"
  } catch (error) {
    console.error(error)
  }
}
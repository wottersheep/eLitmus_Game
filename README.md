# eLitmus_Game

# Van Gogh Treasure Hunt Game

## Description

This is an interactive treasure hunt game that aims to test the user's soft skills. The objective of the game is to find a stolen Van Gogh painting by decoding clues and solving puzzles that will eventually lead the user to the location of the painting. The game is built with HTML, CSS, and JavaScript and uses Firebase for user authentication.

## Installation

To run this game on your local machine, clone the repository and open the index.html file in your browser. Note that you will need a Firebase account to be able to sign in and play the game.

## Usage

1.Sign in/Sign up Page:

- Description: This page will prompt the user to sign in or sign up for the treasure hunt game using their email address.
- Soft Skill Tested: Attention to detail (since users will need to carefully enter their email address to successfully sign up).

2.Introduction Page:

- Description: This page will provide the user with an introduction to the treasure hunt game and explain the objective of the game. This page will direct the user to the Van Gogh Room.
- Soft Skill Tested: Comprehension (since users will need to read and understand the instructions provided to successfully play the game).

3.Van Gogh Room:

- Description: This page will present the user with a jumbled cypher to decode the name of the painting that is stolen from the room.
- Solution: Caesar Cipher: "Wkh srvwr hhwvhu"
- Answer: "The potato eaters"
- Explanation: The Caesar Cipher is a type of substitution cipher in which each letter in the original text is shifted a certain number of places down the alphabet. For example, a shift of 3 would mean that "A" becomes "D", "B" becomes "E", and so on.
- To create a Caesar Cipher for the text "The potato eaters", we can use a shift of 3. Each letter in the original text is shifted three places down the alphabet, with "A" becoming "D", "B" becoming "E", and so on. Applying this shift to the original text, we get the cipher text "Wkh srvwr hhwvhu".
- To solve the Caesar Cipher, the solver needs to shift each letter in the cipher text three places up the alphabet to reveal the original text. In this case, shifting "W" three places up gives "T", shifting "K" three places up gives "H", and so on. After shifting all the letters, the solver will reveal the original text "The potato eaters".
  - Another arguably more efficient solution to the same problem could be to go through the list of the most famous Van Gogh paintings and decipher the code using the trial and error method.
  - Soft Skill Tested: Perseverance (since users may need to try multiple combinations before successfully decoding the cypher).

4.Wordle:

- Description: This page will display a Wordle puzzle that hints at the location of the next room, which is the library.
- Answer: books
- Solution: Wordle is a word-guessing game where a player tries to guess a five-letter word selected at random by the computer; here, the answer is going to be "books". The player has six chances to guess the word correctly. After each guess, the computer gives feedback on how many letters in the guess are correct and in the correct position and how many letters are correct but in the wrong position. The player must use this feedback to narrow down the possible words and make an educated guess on the correct word.
- Soft Skill Tested:
  - Vocabulary: Players must have a wide range of vocabulary to guess different five-letter words accurately.
  - Deductive reasoning: Players need to use clues provided by the feedback to eliminate possible words and make an educated guess on the correct word.
- Attention to detail: Players need to pay attention to the feedback and track their guesses to avoid repeating letters or words.
  -

5.Library:

- Description: This page will prompt the user to guess the name of the most famous book of an author that Van Gogh adored, with the image of the author as an added clue.
- Answer: Oliver's Twist
- Solution: To determine the name of the author, Charles Dickens, the user must scan an image of the author and use it for an image search. Then, the user needs to scrape the web to find the most famous books written by Charles Dickens. Once the list of books has been compiled, the user should input them one by one into a text prompt until they find the book that matches the given context.
- Soft Skill Tested:
  - Research skills: The user must have good research skills to find the name of the author and the most famous books written by them.
- Adaptability: If the user is not familiar with the process of image searching or web scraping, they must be adaptable and willing to learn new skills to complete the task.

6.Phone:

- Description: This page will prompt the user to unlock a 4-combination lock on a phone found in a book in the library.
- Answer: 1885
- Solution: To unlock the combination lock, the user needs to find the date when Van Gogh painted 'The Potato Eaters. The user must remember the previous clues and use them to search for the date.
- Soft Skill Tested: Problem-solving (since users will need to use logic and deduction to successfully unlock the phone).

7.Riddle:

- Description: After unlocking the phone, the page will present the user with a riddle whose answer is "Netherlands".
- Answer: nuenen
- Soft Skill Tested: Creativity (since users will need to think outside the box to successfully solve the riddle).

## Implemented features

- Sign in/ Sign Up.
- 5 clues
- 2 deadends
- 1 solution
- On refreshing, user starts from the same step.
- Optimized for mobile devices

##


**Built With**

- HTML
- CSS
- JavaScript
- Firebase Authentication

## Acknowledgments

- This game was inspired by treasure hunt puzzles and escape rooms.
- The artwork used in this game is for entertainment purposes only and is not associated with any real-life heist or theft.

##

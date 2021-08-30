n = 18
number_of_guesses = 1
print("no of guesses is limited too only 9 times")
while("number_of_guesses<=9"):
    guess_number= int(input("Guess the number:\n"))
    if guess_number<18:
        print("you have entered a lesser number please enter a greater number.")
    elif guess_number>18:
        print("you have entered a greater number please enter a lesser number.")
    else:
        print("you won!\n")
        print(number_of_guesses, "no of guesses she took to finish.")
        break
    print(9-number_of_guesses,"no. of guesses left")
    number_of_guesses = number_of_guesses + 1
    if (number_of_guesses >9):
        print("Game over")
        break










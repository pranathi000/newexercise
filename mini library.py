
class library:
    def __init__(self, list_of_books, name_of_library):
        self.list_of_books = list_of_books
        self.name_of_library = name_of_library
        self.lended_book=[]

    def display_book(self):
        for items in self.list_of_books:
            print(items)
            return "These are the books we have"

    def add_book(self, new_book):
        self.list_of_books.append(new_book.capitalize)
    def lend_book(self, book):
        if book in self.list_of_books:
            self.lended_book.append(book)
            self.list_of_books.remove(book)
            print("Book lending permission apprroved....")
        elif book in self.lended_book:
            print("sorry! the book has alredy been lended!\n"
                  "currently we only have these:-")
            for items in self.list_of_books:
                print(items)
        else:
            print("The book name entered is not available or wrong"
                  "and the available books are:-")
            for items in self.list_of_books:
                print(items)

def system():
    try:
        value = True
        Nehru = library(["Harry Potter", "The Great Gatsby", "Beloved", "Animal Farm", "The lord of rings",
                         "Godaan", "Nirmala", "Gaban", "kaphan", "Manasarovar","the gentleman", "Money heist"
                         "The cinderella"], "Nehru library")
        while value== True:
            user_name = input("Enter Your Name:- ")

            user_input = eval(input(f"Welcome {user_name} to {Nehru.name_of_library} \n"
                              f"Enter (1) to display the books we have\n"
                              f"Enter (2) to donate a boook\n"
                              f"Enter (3) to lend a book\n"
                              f"Enter (4) to return a book\n"
                              f"Enter (5) for Exit"
                              f":-"))

            if user_input == 1:
                print(Nehru.display_book())

            elif user_input == 2:
                new_book = input("enter the name of the book you donate:-")
                Nehru.add_book(new_book.capitalize())
                print("Book has been added! Thank you for your donation!")

            elif user_input == 3:
                book = input("enter the name of the book you want to lend:-")
                Nehru.lend_book(book.capitalize())

            elif user_input == 4:
                new_book = input("enter the name of your book you want to return:- ")
                Nehru.add_book(new_book.capitalize())
                print("Thankyou for retrning the book and  hope to see you soon again!")

            elif user_input == 5:
                value = False
            else:
                print("Wrong input has been entered!:-")

    except:
        print("ERROR!!!")
        system()
system()

print("Dimension calculator starting....")


def my_square(l):
    print(f"the calculated area is:{l * l}sq units")


def my_rectangle(l, b):
    print(f"the calculated area is:{l * b}sq units")


def my_circle(r):
    print(f"the calculated area is:{3.14 * r * r}sq units")


def my_trapezium(h, a, b):
    print(f"the calculated area is :{0.5 * h * a + 0.5 * h * b}sq units")


def my_triangle(h, b):
    print(f"the calculated area is:{0.5 * h * b}sq units")


type = 0
while type == 0:
    n1 = input("enter the shape of the object:")
    if n1 == "square":
        n2 = int(input("enter the length of one of its side:"))
        my_square(n2)
    elif n1 == "rectangle":
        n2 = int(input("enter the length of the rectangle:"))
        n3 = int(input("enter the breath of the rectangle:"))
        my_rectangle(n2, n3)
    elif n1 == "circle":
        n2 = int(input("enter the length of its radius:"))
        my_circle(n2)
    elif n1 == "trapezium":
        n2 = int(input("enter the heigth of the trapezium:"))
        n3 = int(input("enter the length of the trapezium:"))
        n4 = int(input("enter the parallel length of the trapezium:"))
        my_trapezium(n2, n3, n4)
    elif n1 == "triangle":
        n2 = int(input("enter the length of height:"))
        n3 = int(input("enter the length of perpendicular:"))
        my_triangle(n2, n3)
    y_n = input("do you want to find areas of other objects:")
    if y_n == "yes":
        print("restarting dimension calculator......")
        type = 0
    elif y_n == "no":
        print("stopping dimension calculator......")
        break
    else:
        print("invalid input")
        break



# with if else
def findGrade(name, score):
    if score >= 90:
        print(f"Hello {name}, you've got an A. Very well done!")
    elif score >= 80:
        print(f"Hello {name}, you've got a B+. Well done!")
    elif score >= 70:
        print(
            f"Hello {name}, you've got a B. Well done!, but you can do better!")
    elif score >= 60:
        print(
            f"Hello {name}, you've got a C+. Good job!, but you can do better!")
    elif score >= 50:
        print(f"Hello {name}, you've got a C. You need to work harder!")
    elif score >= 40:
        print(f"Hello {name}, you've got a D. You need to work much harder!")
    else:
        print(
            f"Hello {name}, you've got an F. What's wrong with you! You need to pay proper attention and work very hard!")


findGrade(name='John Snow', score=82)

# with switch statement


def findGrade2(name, score):
    match score:
        case score if score >= 90:
            print(f"Hello {name}, you've got an A. Very well done!")
        case score if score >= 80:
            print(f"Hello {name}, you've got a B+. Well done!")
        case score if score >= 70:
            print(
                f"Hello {name}, you've got a B. Well done!, but you can do better!")
        case score if score >= 60:
            print(
                f"Hello {name}, you've got a C+. Good job!, but you can do better!")
        case score if score >= 50:
            print(f"Hello {name}, you've got a C. You need to work harder!")
        case score if score >= 40:
            print(
                f"Hello {name}, you've got a D. You need to work much harder!")
        case _:
            print(
                f"Hello {name}, you've got an F. What's wrong with you! You need to pay proper attention and work very hard!")


findGrade2(name='Arya Stark', score=63)

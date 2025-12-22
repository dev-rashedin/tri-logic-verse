list = [3, 7, 2, 9]

largest = list[0]

for num in list:
  if num > largest:
    largest = num

print(largest)

# solution using sorting

answer = sorted(list, reverse=True)[0]

print(answer)
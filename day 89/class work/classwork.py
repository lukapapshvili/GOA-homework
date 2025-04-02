# 2. https://www.codewars.com/kata/5738f5ea9545204cec000155/train/python
def count_letters_and_digits(s):
    return len([char for char in s if char.isdigit() or char.isalpha()])
# 4. https://www.codewars.com/kata/5259b20d6021e9e14c0010d4?

def reverse_words(s):
    return " ".join([word[::-1] for word in s.split(" ")])


from unittest import TestCase


class TestReverseWords(TestCase):
    def test_reverse_words(self):
        self.assertEquals(reverse_words('This is an example!'), 'sihT si na !elpmaxe')
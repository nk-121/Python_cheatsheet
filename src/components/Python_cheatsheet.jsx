import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight } from 'lucide-react';

const PythonCheatsheet = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const cheatsheetData = {
    "Basic Syntax": {
      "Variables": `x = 5                    # Integer
y = 3.14                 # Float
name = "Python"          # String
is_active = True         # Boolean
z = None                 # None type`,
      "Comments": `# Single line comment
'''
Multi-line
comment
'''
"""Another multi-line comment"""`,
      "Print & Input": `print("Hello")
print(f"Value: {x}")     # f-string
print("A", "B", sep="-") # A-B
name = input("Enter: ")  # String input
num = int(input("Age: "))`,
      "Operators": `# Arithmetic: + - * / // % **
# Comparison: == != > < >= <=
# Logical: and or not
# Assignment: = += -= *= /= //= %= **=
# Identity: is, is not
# Membership: in, not in`
    },
    
    "Data Structures": {
      "Lists": `lst = [1, 2, 3, 4, 5]
lst.append(6)            # Add to end
lst.insert(0, 0)         # Insert at index
lst.extend([7, 8])       # Add multiple
lst.remove(3)            # Remove first 3
lst.pop()                # Remove & return last
lst.pop(0)               # Remove at index
lst.clear()              # Empty list
lst.reverse()            # Reverse in place
lst.sort()               # Sort ascending
lst.sort(reverse=True)   # Sort descending
sorted(lst)              # Return sorted copy
lst.index(5)             # Find index
lst.count(2)             # Count occurrences
lst.copy()               # Shallow copy
len(lst)                 # Length
lst[0]                   # First element
lst[-1]                  # Last element
lst[1:4]                 # Slice [1,2,3]
lst[::-1]                # Reverse
' '.join(lst)            # Join to string`,
      
      "Tuples": `tup = (1, 2, 3)
tup = 1, 2, 3            # Packing
a, b, c = tup            # Unpacking
tup.count(2)             # Count
tup.index(3)             # Find index
len(tup)                 # Length
# Tuples are immutable!`,
      
      "Sets": `s = {1, 2, 3, 3}          # Duplicates removed
s = set([1, 2, 3])
s.add(4)                 # Add element
s.update([5, 6])         # Add multiple
s.remove(3)              # Remove (error if missing)
s.discard(3)             # Remove (no error)
s.pop()                  # Remove arbitrary
s.clear()                # Empty set
s.copy()                 # Copy
len(s)                   # Size
# Set operations
a | b                    # Union
a & b                    # Intersection
a - b                    # Difference
a ^ b                    # Symmetric difference
a.issubset(b)
a.issuperset(b)
a.isdisjoint(b)`,
      
      "Dictionaries": `d = {'a': 1, 'b': 2}
d = dict(a=1, b=2)
d['c'] = 3               # Add/update
d.get('a')               # Get value
d.get('x', 0)            # Get with default
d.pop('a')               # Remove & return
d.popitem()              # Remove last item
d.update({'d': 4})       # Update
d.clear()                # Empty dict
d.copy()                 # Copy
d.keys()                 # All keys
d.values()               # All values
d.items()                # Key-value pairs
len(d)                   # Size
'a' in d                 # Check key
d.setdefault('e', 5)     # Set if not exists
{k: v for k, v in d.items()} # Dict comp`,
      
      "Strings": `s = "Hello World"
s.upper()                # HELLO WORLD
s.lower()                # hello world
s.capitalize()           # Hello world
s.title()                # Hello World
s.strip()                # Remove whitespace
s.lstrip()               # Left strip
s.rstrip()               # Right strip
s.replace('o', '0')      # Replace
s.split()                # Split by whitespace
s.split(',')             # Split by delimiter
''.join(['a', 'b'])      # Join list
s.startswith('He')       # True
s.endswith('ld')         # True
s.find('Wor')            # Index or -1
s.index('Wor')           # Index or error
s.count('l')             # Count occurrences
s.isalpha()              # All alphabetic
s.isdigit()              # All digits
s.isalnum()              # Alphanumeric
s.islower()              # All lowercase
s.isupper()              # All uppercase
len(s)                   # Length
s[0]                     # First char
s[-1]                    # Last char
s[1:5]                   # Slice
s[::-1]                  # Reverse`
    },
    
    "Advanced Data Structures": {
      "Heap (Priority Queue)": `import heapq

# Min Heap (default)
heap = []
heapq.heappush(heap, 5)  # Add element
heapq.heappush(heap, 3)
heapq.heappush(heap, 7)

heapq.heappop(heap)      # Remove & return min

# Heapify list
lst = [5, 7, 9, 1, 3]
heapq.heapify(lst)       # Convert to heap

# N largest/smallest
heapq.nlargest(3, lst)   # 3 largest
heapq.nsmallest(3, lst)  # 3 smallest

# Replace smallest
heapq.heapreplace(heap, 6) # Pop then push

# Push then pop
heapq.heappushpop(heap, 4) # Push then pop

# Max Heap (negate values)
max_heap = []
heapq.heappush(max_heap, -5)
val = -heapq.heappop(max_heap) # Get max`,

      "Queue": `from queue import Queue, LifoQueue, PriorityQueue

# FIFO Queue
q = Queue()
q.put(1)                 # Add item
q.put(2)
item = q.get()           # Remove & return (blocks)
q.get_nowait()           # Non-blocking get
q.empty()                # Check if empty
q.full()                 # Check if full
q.qsize()                # Current size
q.task_done()            # Mark task complete
q.join()                 # Wait for all tasks

# LIFO Queue (Stack)
stack = LifoQueue()
stack.put(1)
stack.get()              # Last in, first out

# Priority Queue
pq = PriorityQueue()
pq.put((2, 'task2'))     # (priority, item)
pq.put((1, 'task1'))
pq.get()                 # Returns (1, 'task1')`,

      "Deque (Double-ended Queue)": `from collections import deque

dq = deque([1, 2, 3])
dq = deque(maxlen=5)     # Fixed size

# Add elements
dq.append(4)             # Add to right
dq.appendleft(0)         # Add to left
dq.extend([5, 6])        # Extend right
dq.extendleft([0, -1])   # Extend left

# Remove elements
dq.pop()                 # Remove from right
dq.popleft()             # Remove from left
dq.remove(3)             # Remove first occurrence
dq.clear()               # Remove all

# Other operations
dq.rotate(2)             # Rotate right
dq.rotate(-2)            # Rotate left
dq.reverse()             # Reverse in place
dq.count(2)              # Count occurrences
dq.index(3)              # Find index
len(dq)                  # Length`,

      "ChainMap": `from collections import ChainMap

# Combine multiple dicts
dict1 = {'a': 1, 'b': 2}
dict2 = {'b': 3, 'c': 4}
chain = ChainMap(dict1, dict2)

chain['a']               # 1 (from dict1)
chain['b']               # 2 (first dict wins)
chain['c']               # 4 (from dict2)

chain['d'] = 5           # Add to first dict
chain.maps               # List of dicts
chain.new_child()        # New ChainMap
chain.parents            # All except first`,

      "OrderedDict": `from collections import OrderedDict

od = OrderedDict()
od['a'] = 1
od['b'] = 2
od['c'] = 3

# Maintains insertion order
list(od.keys())          # ['a', 'b', 'c']

# Move to end
od.move_to_end('a')      # Move 'a' to end
od.move_to_end('b', False) # Move to beginning

# Pop items
od.popitem()             # Remove last
od.popitem(False)        # Remove first`,

      "NamedTuple": `from collections import namedtuple

# Create named tuple class
Point = namedtuple('Point', ['x', 'y'])
Point = namedtuple('Point', 'x y')

# Create instance
p = Point(10, 20)
p = Point(x=10, y=20)

# Access
p.x                      # 10
p[0]                     # 10
p.y                      # 20

# Convert
p._asdict()              # OrderedDict
p._replace(x=30)         # New instance
p._fields                # ('x', 'y')`,

      "Stack (using list)": `# Stack using list
stack = []

# Push
stack.append(1)
stack.append(2)
stack.append(3)

# Pop
stack.pop()              # 3 (LIFO)

# Peek
stack[-1] if stack else None

# Check empty
len(stack) == 0
not stack

# Size
len(stack)`,

      "Linked List (manual)": `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        curr = self.head
        while curr.next:
            curr = curr.next
        curr.next = new_node
    
    def prepend(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
    
    def delete(self, data):
        if not self.head:
            return
        if self.head.data == data:
            self.head = self.head.next
            return
        curr = self.head
        while curr.next:
            if curr.next.data == data:
                curr.next = curr.next.next
                return
            curr = curr.next`
    },
    
    "Control Flow": {
      "If-Else": `if x > 0:
    print("Positive")
elif x < 0:
    print("Negative")
else:
    print("Zero")

# Ternary
result = "Yes" if x > 0 else "No"`,
      
      "For Loops": `for i in range(5):        # 0 to 4
    print(i)

for i in range(2, 10):   # 2 to 9
    print(i)

for i in range(0, 10, 2): # Step 2
    print(i)

for item in lst:
    print(item)

for i, val in enumerate(lst):
    print(i, val)

for k, v in d.items():
    print(k, v)`,
      
      "While Loops": `while x < 10:
    print(x)
    x += 1

# Break and continue
while True:
    if x == 5:
        break
    if x == 3:
        continue
    x += 1`,
      
      "Comprehensions": `# List comprehension
[x**2 for x in range(5)]
[x for x in lst if x > 0]

# Dict comprehension
{x: x**2 for x in range(5)}

# Set comprehension
{x**2 for x in range(5)}

# Generator expression
(x**2 for x in range(5))`
    },
    
    "Functions": {
      "Basic Functions": `def greet(name):
    return f"Hello, {name}"

def add(a, b=0):         # Default argument
    return a + b

def func(*args):         # Variable args
    return sum(args)

def func(**kwargs):      # Keyword args
    return kwargs

lambda x: x**2           # Lambda function
map(lambda x: x**2, lst) # Map
filter(lambda x: x>0, lst) # Filter
from functools import reduce
reduce(lambda x,y: x+y, lst) # Reduce`,
      
      "Decorators": `def decorator(func):
    def wrapper(*args, **kwargs):
        print("Before")
        result = func(*args, **kwargs)
        print("After")
        return result
    return wrapper

@decorator
def my_func():
    print("Function")`
    },
    
    "Classes & OOP": {
      "Basic Class": `class Person:
    # Class variable
    species = "Human"
    
    def __init__(self, name, age):
        self.name = name    # Instance var
        self.age = age
    
    def greet(self):
        return f"Hi, I'm {self.name}"
    
    @classmethod
    def from_birth_year(cls, name, year):
        return cls(name, 2025 - year)
    
    @staticmethod
    def is_adult(age):
        return age >= 18

p = Person("Alice", 30)
print(p.greet())`,
      
      "Inheritance": `class Student(Person):
    def __init__(self, name, age, grade):
        super().__init__(name, age)
        self.grade = grade
    
    def study(self):
        return f"{self.name} is studying"`,
      
      "Magic Methods": `class MyClass:
    def __init__(self):      # Constructor
        pass
    def __str__(self):       # str()
        return "String"
    def __repr__(self):      # repr()
        return "Repr"
    def __len__(self):       # len()
        return 0
    def __getitem__(self, i): # obj[i]
        return i
    def __call__(self):      # obj()
        return "Called"
    def __add__(self, other): # obj + other
        return self
    def __eq__(self, other): # obj == other
        return True`
    },
    
    "Built-in Functions": {
      "Type & Conversion": `type(x)                  # Get type
isinstance(x, int)       # Check type
int(x), float(x), str(x) # Convert
bool(x)                  # To boolean
list(x), tuple(x), set(x) # Convert
dict(x)                  # To dictionary`,
      
      "Math Functions": `abs(-5)                  # Absolute value
round(3.7)               # Round
round(3.14159, 2)        # 3.14
pow(2, 3)                # 2^3 = 8
min(1, 2, 3)             # Minimum
max(1, 2, 3)             # Maximum
sum([1, 2, 3])           # Sum
divmod(10, 3)            # (3, 1)`,
      
      "Sequence Functions": `len(x)                   # Length
sorted(x)                # Sort
reversed(x)              # Reverse iterator
enumerate(x)             # Index, value pairs
zip(a, b)                # Pair elements
all([True, True])        # All true
any([False, True])       # Any true
range(5)                 # 0 to 4`,
      
      "I/O Functions": `open('file.txt', 'r')    # Read
open('file.txt', 'w')    # Write
open('file.txt', 'a')    # Append
with open('f.txt') as f:
    content = f.read()
    lines = f.readlines()
    for line in f:
        print(line)`,
      
      "Other": `eval('2 + 3')            # Evaluate
exec('x = 5')            # Execute
compile()                # Compile code
globals()                # Global vars
locals()                 # Local vars
vars(obj)                # Object vars
dir(obj)                 # Object attributes
help(obj)                # Documentation
id(obj)                  # Object id
hash(obj)                # Hash value`
    },
    
    "Math Module": {
      "Constants": `import math
math.pi                  # 3.14159...
math.e                   # 2.71828...
math.inf                 # Infinity
math.nan                 # Not a number`,
      
      "Functions": `math.ceil(3.2)            # 4
math.floor(3.8)          # 3
math.trunc(3.8)          # 3
math.sqrt(16)            # 4.0
math.pow(2, 3)           # 8.0
math.exp(2)              # e^2
math.log(8, 2)           # log base 2
math.log10(100)          # 2.0
math.factorial(5)        # 120
math.gcd(12, 8)          # 4
math.isqrt(10)           # 3 (floor sqrt)
# Trigonometry
math.sin(x), math.cos(x), math.tan(x)
math.asin(x), math.acos(x), math.atan(x)
math.degrees(math.pi)    # 180
math.radians(180)        # pi`
    },
    
    "File Operations": {
      "Reading Files": `# Read entire file
with open('file.txt', 'r') as f:
    content = f.read()

# Read lines
with open('file.txt', 'r') as f:
    lines = f.readlines()

# Read line by line
with open('file.txt', 'r') as f:
    for line in f:
        print(line.strip())`,
      
      "Writing Files": `# Write (overwrite)
with open('file.txt', 'w') as f:
    f.write("Hello\\n")
    f.writelines(['A\\n', 'B\\n'])

# Append
with open('file.txt', 'a') as f:
    f.write("Appended\\n")`,
      
      "File Modes": `'r'   # Read (default)
'w'   # Write (overwrite)
'a'   # Append
'r+'  # Read and write
'rb'  # Read binary
'wb'  # Write binary`
    },
    
    "Exception Handling": {
      "Try-Except": `try:
    x = 1 / 0
except ZeroDivisionError:
    print("Division by zero")
except Exception as e:
    print(f"Error: {e}")
else:
    print("No error")
finally:
    print("Always runs")

# Raise exception
raise ValueError("Invalid")
raise Exception("Error msg")

# Assert
assert x > 0, "Must be positive"`
    },
    
    "Common Modules": {
      "datetime": `from datetime import datetime, date, time
now = datetime.now()
today = date.today()
t = time(14, 30, 0)
dt = datetime(2025, 1, 15)
dt.year, dt.month, dt.day
dt.strftime('%Y-%m-%d')  # Format
datetime.strptime('2025-01-15', '%Y-%m-%d')`,
      
      "random": `import random
random.random()          # 0.0 to 1.0
random.randint(1, 10)    # 1 to 10
random.choice([1,2,3])   # Random element
random.shuffle(lst)      # Shuffle in place
random.sample(lst, 3)    # Random sample`,
      
      "collections": `from collections import Counter, defaultdict
# Counter
c = Counter([1,1,2,3])   # {1:2, 2:1, 3:1}
c.most_common(2)         # Top 2
c.update([1, 2])         # Add more
c.subtract([1])          # Subtract
c.elements()             # Iterator
c1 + c2                  # Combine
c1 & c2                  # Intersection
c1 | c2                  # Union

# defaultdict
d = defaultdict(int)     # Default 0
d = defaultdict(list)    # Default []
d = defaultdict(set)     # Default set()`,
      
      "itertools": `from itertools import *
count(10)                # 10, 11, 12...
cycle([1,2,3])           # 1,2,3,1,2,3...
repeat(5, 3)             # 5,5,5
chain([1,2], [3,4])      # 1,2,3,4
combinations([1,2,3], 2) # (1,2),(1,3),(2,3)
permutations([1,2,3], 2) # All orderings
product([1,2], [3,4])    # Cartesian`,
      
      "os & sys": `import os
os.getcwd()              # Current directory
os.listdir('.')          # List files
os.mkdir('dir')          # Make directory
os.remove('file.txt')    # Delete file
os.path.exists('file')   # Check exists
os.path.join('a', 'b')   # Path join

import sys
sys.argv                 # Command args
sys.exit()               # Exit program`
    }
  };

  const filteredData = Object.entries(cheatsheetData).reduce((acc, [category, items]) => {
    const filteredItems = Object.entries(items).filter(([title, content]) =>
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredItems.length > 0) {
      acc[category] = Object.fromEntries(filteredItems);
    }
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 mb-6">
          <h1 className="text-4xl font-bold text-indigo-900 mb-2">
            Python Cheatsheet
          </h1>
          <p className="text-gray-600 mb-6">
            Comprehensive reference for Python data structures, built-in functions, and more
          </p>
          
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search cheatsheet..."
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4">
          {Object.entries(filteredData).map(([category, items]) => (
            <div key={category} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleSection(category)}
                className="w-full px-6 py-4 bg-indigo-600 text-white font-semibold text-left flex items-center justify-between hover:bg-indigo-700 transition"
              >
                <span className="text-lg">{category}</span>
                {expandedSections[category] ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
              </button>
              
              {expandedSections[category] && (
                <div className="p-6 space-y-6">
                  {Object.entries(items).map(([title, content]) => (
                    <div key={title} className="border-l-4 border-indigo-300 pl-4">
                      <h3 className="text-xl font-semibold text-indigo-800 mb-3">{title}</h3>
                      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono">
                        {content}
                      </pre>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {Object.keys(filteredData).length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-500 text-lg">No results found for "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PythonCheatsheet;
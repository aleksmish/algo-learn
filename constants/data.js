import assets from "./assets";

export const SectionData = [
  {
    title: "Data Structures",
    info: "Data structures are ways of organizing and storing data efficiently. Examples include arrays, linked lists, trees, and graphs.",
    topics: [
      {
        name: "Stack",
        details: "A Stack is an abstract data type that represents a collection of elements, where elements are added and removed according to a last-in-first-out (LIFO) principle. In other words, the last element added to the stack is the first one to be removed.\nThe operations that can be performed on a stack are:\n1. Push: Adds an element to the top of the stack.\n2. Pop: Removes and returns the top element from the stack.\n3. Peek/Top: Returns the top element of the stack without removing it.\n4. isEmpty: Returns true if the stack is empty, false otherwise.",
        code:
`class Stack:
def __init__(self):
    self.items = []

def push(self, item):
    self.items.append(item)

def pop(self):
    if self.is_empty():
        return None
    return self.items.pop()

def peek(self):
    if self.is_empty():
        return None
    return self.items[-1]

def is_empty(self):
    return len(self.items) == 0`,
        image: assets.stack
      },
      {
        name: "Queue",
        details: "A Queue is an abstract data type that represents a collection of elements, where elements are added at the rear end and removed from the front end according to a first-in-first-out (FIFO) principle. In other words, the first element added to the queue is the first one to be removed.\nThe operations that can be performed on a queue are:\n1. Enqueue: Adds an element to the rear end of the queue.\n2. Dequeue: Removes and returns the front element from the queue.\n3. Peek/Front: Returns the front element of the queue without removing it.\n4. isEmpty: Returns true if the queue is empty, false otherwise.",
        code:
`from collections import deque

class Queue:
    def __init__(self):
        self.items = deque()

    def enqueue(self, item):
        self.items.append(item)

    def dequeue(self):
        if self.is_empty():
            return None
        return self.items.popleft()

    def peek(self):
        if self.is_empty():
            return None
        return self.items[0]

    def is_empty(self):
        return len(self.items) == 0`,
        image: assets.queue,
      },
      {
        name: "Linked List",
        details: "A linked list is a dynamic data structure used to store a sequence of elements, called nodes. Each node in a linked list contains two components: the data or value, and a reference or pointer to the next node in the sequence. The first node in the sequence is called the head, while the last node is called the tail. Unlike arrays and other static data structures, linked lists can be resized during program execution. To add or remove an element from a linked list, we simply update the next pointer of the previous node or the current node to point to the new node, or to the node after the removed node, respectively. This makes linked lists efficient for certain operations, such as insertion and deletion, but can make accessing an element in the middle of a linked list slower than accessing an element in an array. Linked lists come in different varieties, including singly linked lists, where each node has a reference to the next node, but not to the previous node; doubly linked lists, where each node has a reference to the next and previous nodes; and circular linked lists, where the last node points back to the head, forming a circle.",
        code:
`class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def add(self, data):
        new_node = Node(data)

        if self.head is None:
            self.head = new_node
        else:
            current_node = self.head
            while current_node.next is not None:
                current_node = current_node.next
            current_node.next = new_node

    def remove(self, data):
        if self.head is None:
            return

        if self.head.data == data:
            self.head = self.head.next
            return

        current_node = self.head
        while current_node.next is not None:
            if current_node.next.data == data:
                current_node.next = current_node.next.next
                return
            current_node = current_node.next

    def search(self, data):
        current_node = self.head
        while current_node is not None:
            if current_node.data == data:
                return current_node
            current_node = current_node.next

        return None`,
        image: assets.linkedlist
      },
      {
        name: "Tree",
        details: "A tree is a hierarchical data structure that consists of nodes connected by edges. Each node has a parent and zero or more children. The topmost node is called the root and the nodes without children are called leaves. Trees are often used to implement data structures such as directories in file systems, parse trees in compilers, and decision trees in artificial intelligence.",
        code: 
`class TreeNode:
    def __init__(self, data):
        self.data = data
        self.children = []

class Tree:
    def __init__(self):
        self.root = None

    def insert(self, data, parent=None):
        new_node = TreeNode(data)

        if parent is None:
            if self.root is not None:
                raise ValueError("Tree already has a root node")
            self.root = new_node
        else:
            parent.children.append(new_node)

    def search(self, data):
        return self._search_helper(data, self.root)

    def _search_helper(self, data, current_node):
        if current_node is None:
            return None

        if current_node.data == data:
            return current_node

        for child in current_node.children:
            result = self._search_helper(data, child)
            if result is not None:
                return result

        return None`,
        image: assets.tree
      },
      {
        name: "Graph",
        details: "A graph is a non-linear data structure that consists of nodes connected by edges. Graphs can be used to represent networks, such as road networks, social networks, and computer networks. Graphs can also be used to represent relationships between elements, such as dependencies in software systems.",
        code: 
`class Graph:
    def __init__(self):
        self.vertices = {}
    
    def add_vertex(self, vertex):
        if vertex not in self.vertices:
            self.vertices[vertex] = set()
    
    def add_edge(self, start, end):
        if start in self.vertices and end in self.vertices:
            self.vertices[start].add(end)
    
    def get_neighbors(self, vertex):
        if vertex in self.vertices:
            return self.vertices[vertex]
        else:
            return set()`,
        image: assets.graph
      },],
    image: assets.dataStrucutres,
  },
  {
    title: "Algorithms",
    info: "Algorithms are step-by-step procedures for solving problems. Examples include sorting algorithms, searching algorithms, and graph algorithms.",
    topics: {
      Sorting: [
        {
          name: "Bubble Sort",
          details: "Bubble Sort is a simple and easy-to-understand sorting algorithm. It works by repeatedly swapping adjacent elements if they are in the wrong order. The algorithm goes through the list multiple times until it is completely sorted. The time complexity of Bubble Sort is O(n^2) in the worst-case scenario, making it inefficient for large lists. However, it has the advantage of being easy to understand and implement."
        },
        {
          name: "Selection Sort",
          details: "Selection Sort works by dividing the list into two parts, the sorted part and the unsorted part. The algorithm repeatedly selects the minimum element from the unsorted part and swaps it with the first unsorted element. This process continues until the unsorted part is empty. The time complexity of Selection Sort is also O(n^2) in the worst-case scenario, making it less efficient than other sorting algorithms for large lists."
        },
        {
          name: "Insertion Sort",
          details: "Insertion Sort works by building up the final sorted list one element at a time. It compares each element with the elements in the sorted list, and inserts it in the correct position. This process continues until all the elements are in the correct position. The time complexity of Insertion Sort is O(n^2) in the worst-case scenario, but it is often faster than other algorithms for small lists or lists that are nearly sorted."
        },
        {
          name: "Heap Sort",
          details: "Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. It works by building a heap out of the list, and repeatedly swapping the root of the heap (the maximum element) with the last element in the list, reducing the size of the heap by one. The time complexity of Heap Sort is O(n log n) in the worst-case scenario, making it more efficient than Bubble Sort and Selection Sort for large lists."
        },
        {
          name: "Merge Sort",
          details: "Merge Sort is a divide-and-conquer sorting algorithm. It works by dividing the list into smaller sublists, sorting the sublists, and then merging the sorted sublists to create the final sorted list. The time complexity of Merge Sort is O(n log n) in the worst-case scenario, making it one of the most efficient sorting algorithms for large lists."
        },
        {
          name: "Quicksort",
          details: "Quicksort is a divide-and-conquer sorting algorithm that works by selecting a pivot element and partitioning the list around the pivot such that all elements smaller than the pivot are on one side and all elements greater than the pivot are on the other. The algorithm then recursively sorts the sublists on either side of the pivot. The time complexity of Quicksort is O(n^2) in the worst-case scenario, but it has an average time complexity of O(n log n), making it one of the fastest sorting algorithms for large lists."
        }
      ],
      Searching: [
        {
          name: "Linear Search",
          details: "Linear search is a simple searching algorithm that sequentially checks each element of the list until a match is found or the end of the list is reached. It is not an efficient algorithm for large lists, but it is simple to understand and implement."
        },
        {
          name: "Binary Search",
          details: "Binary search is an efficient searching algorithm that works by repeatedly dividing the list in half, and checking if the target value is less than, equal to, or greater than the value of the middle element of the list. This process is repeated for each half until the target value is found or it is clear that the target value is not in the list."
        }
      ],
      Graph: [
        {
          name: "Breadth-First Search",
          details: "Breadth-First Search (BFS) - a graph traversal algorithm that visits all the vertices of a graph in breadth-first order, i.e., visiting all the vertices at distance 1 from the start vertex before visiting vertices at a greater distance."
        },
        {
          name: "Depth-First Search",
          details: "Depth-First Search (DFS) - a graph traversal algorithm that visits vertices by exploring as far as possible along each branch before backtracking."
        },
        {
          name: "Bellmon-Ford Algorithm",
          details: "Bellman-Ford Algorithm - a single-source shortest path algorithm that works for graphs with negative edge weights and can detect negative cycles."
        },
        {
          name: "Dijkstra's Algorithm",
          details: "Dijkstra's Algorithm - a single-source shortest path algorithm that works for graphs with non-negative edge weights."
        }
      ]

    },
    image: assets.algorithms,
  },
];
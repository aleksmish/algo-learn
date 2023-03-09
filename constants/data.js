import assets from "./assets";

export const SectionData = [
  {
    title: "Data Structures",
    info: "Data structures are ways of organizing and storing data efficiently. Examples include arrays, linked lists, trees, and graphs.",
    topics: [
      {
        name: "Stack",
        details: `A stack is a linear data structure that follows the Last In First Out (LIFO) principle. In a stack, elements are added and removed from the same end, called the top of the stack. 
        
The operations that can be performed on a stack include:

1. Push: Add an element to the top of the stack.
2. Pop: Remove and return the element at the top of the stack.
3. Peek: Return the element at the top of the stack without removing it.
4. IsEmpty: Check if the stack is empty.

Stacks can be implemented using arrays or linked lists. Some common applications of stacks include:

1. Expression evaluation: Stacks can be used to evaluate arithmetic expressions by converting infix notation to postfix notation and then evaluating the postfix expression using a stack.
2. Function calls: Stacks can be used to keep track of function calls in computer programs, with each function call being pushed onto the stack and popped off when the function returns.
3. Undo operations: Stacks can be used to implement undo operations in computer programs, with each change being pushed onto the stack and popped off to undo the changes.`,
        code: `class Stack:
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
        image: assets.stack,
      },
      {
        name: "Queue",
        details: `A queue is a linear data structure that follows the First In First Out (FIFO) principle. In a queue, elements are added to the back of the queue and removed from the front of the queue. 

The operations that can be performed on a queue include:

1. Enqueue: Add an element to the back of the queue.
2. Dequeue: Remove and return the element at the front of the queue.
3. Peek: Return the element at the front of the queue without removing it.
4. IsEmpty: Check if the queue is empty.

Queues can also be implemented using arrays or linked lists. Some common applications of queues include:

1. Resource allocation: Queues can be used to allocate resources to processes in computer systems, with each process being added to the queue and serviced in order.
2. Job scheduling: Queues can be used to schedule jobs in computer systems, with each job being added to the queue and executed in order.
3. Breadth-first search: Queues can be used to perform breadth-first search in graphs and trees, with each node being added to the queue and explored in order.`,
        code: `from collections import deque

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
        details: `A linked list is a linear data structure that consists of a sequence of nodes, where each node contains a value and a pointer to the next node in the list. The first node in the list is called the head, and the last node is called the tail.

There are two main types of linked lists: singly linked lists and doubly linked lists. In a singly linked list, each node has a pointer to the next node in the list, while in a doubly linked list, each node has pointers to both the next and the previous nodes in the list.

Linked lists have several advantages over arrays, including:

1. Dynamic size: Linked lists can easily grow or shrink in size as needed, while arrays have a fixed size.
2. Efficient insertion and deletion: Linked lists can insert or delete nodes in constant time, while arrays require shifting elements to accommodate the change.
3. Memory efficiency: Linked lists can use memory more efficiently than arrays, as they do not need to allocate a contiguous block of memory.

However, linked lists also have some disadvantages, including:

1. Random access is inefficient: Unlike arrays, linked lists cannot be accessed in constant time, as each node must be traversed in sequence to access a specific node.
2. Extra memory for pointers: Linked lists require extra memory to store the pointers to the next and/or previous nodes.

Linked lists can be used for a variety of purposes, including implementing stacks, queues, and hash tables. They are an important data structure in computer science and are used in many algorithms and applications.`,
        code: `class Node:
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
        image: assets.linkedList,
      },
      {
        name: "Tree",
        details: `A tree data structure is a hierarchical data structure that consists of nodes connected by edges. Each node in a tree represents a value or object, and each edge represents a relationship between nodes.
The topmost node in a tree is called the root, and every other node in the tree can be reached from the root by following a path of edges. Nodes that have no children are called leaves, while nodes with one or more children are called internal nodes.

There are several types of trees, including:

1. Binary tree: A tree in which each node has at most two children.
2. Binary search tree: A binary tree in which the left subtree of a node contains only nodes with values less than the node's value, and the right subtree of a node contains only nodes with values greater than the node's value.
3. AVL tree: A binary search tree in which the heights of the left and right subtrees of every node differ by at most one.
4. Red-black tree: A binary search tree in which each node is colored red or black, and the following properties hold:
• The root is black.
• Every leaf is black.
• If a node is red, then both its children are black.
• Every path from a node to its descendant leaves contains the same number of black nodes.
5. B-tree: A tree in which each node can have multiple children and the keys in each node are in sorted order.

Trees can be used for a variety of purposes, including searching, sorting, and organizing data. They are an important data structure in computer science and are used in many algorithms and applications.`,
        code: `class TreeNode:
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
        image: assets.tree,
      },
      {
        name: "Graph",
        details: `A graph is a collection of vertices (also known as nodes or points) and edges. The vertices represent objects or entities, and the edges represent the relationships between them.

There are two main types of graphs: directed graphs and undirected graphs. In a directed graph, each edge has a direction, indicating that the relationship between two vertices is one-way. In an undirected graph, each edge has no direction, indicating that the relationship between two vertices is two-way.

Graphs can also be weighted or unweighted. In a weighted graph, each edge has a weight or cost associated with it, representing the strength or importance of the relationship between the vertices. In an unweighted graph, each edge has no weight or cost associated with it.

There are several common applications of graphs, including:

1. Social networks: Graphs can be used to model relationships between individuals in social networks, with vertices representing individuals and edges representing connections between them.
2. Transportation networks: Graphs can be used to model transportation networks, with vertices representing locations and edges representing roads or routes between them.
3. Computer networks: Graphs can be used to model computer networks, with vertices representing devices or nodes and edges representing connections between them.
4. Genealogical trees: Graphs can be used to model family trees, with vertices representing individuals and edges representing parent-child relationships between them.
5. Web page ranking: Graphs can be used to model the structure of the World Wide Web, with vertices representing web pages and edges representing links between them.

There are several algorithms that can be used with graphs, including:

1. Depth-first search: A traversal algorithm that visits all the vertices in a graph by exploring as far as possible along each branch before backtracking.
2. Breadth-first search: A traversal algorithm that visits all the vertices in a graph by exploring all the neighbors of each vertex before moving on to the neighbors' neighbors.
3. Dijkstra's algorithm: A shortest path algorithm that finds the shortest path between two vertices in a weighted graph.
4. Kruskal's algorithm: A minimum spanning tree algorithm that finds the minimum weight tree that connects all the vertices in an undirected, weighted graph.
5. Bellman-Ford algorithm: A shortest path algorithm that can handle negative edge weights.

Graphs are an important data structure in computer science and are used in many applications.`,
        code: `class Graph:
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
        image: assets.graph,
      },
    ],
    image: assets.dataStrucutres,
  },
  {
    title: "Algorithms",
    info: "Algorithms are step-by-step procedures for solving problems. Examples include sorting algorithms, searching algorithms, and graph algorithms.",
    topics: {
      Sorting: [
        {
          name: "Bubble Sort",
          details: `Bubble sort is a simple sorting algorithm that repeatedly compares adjacent elements in an array or a list and swaps them if they are in the wrong order. The algorithm gets its name from the way smaller elements "bubble" to the top of the list.

Here's how the algorithm works:

1. Start at the beginning of the list and compare the first two elements. If the first element is larger than the second element, swap them.
2. Move to the next pair of adjacent elements and repeat step 1, continuing until the end of the list is reached.

Bubble sort has a time complexity of O(n^2) in the worst case, where n is the number of elements in the list. It is not efficient for large datasets and is generally used only for educational purposes or on small datasets. However, it is a simple and easy-to-understand algorithm that can be useful in certain situations.`,
          code: `def bubble_sort(arr):
    n = len(arr)
    
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                
    return arr`,
          image: assets.bubbleSort,
          complexities: ["O(n^2)", "O(n^2)", "O(n)", "O(1)"],
        },
        {
          name: "Selection Sort",
          details: `Selection sort is a simple sorting algorithm that works by repeatedly finding the minimum element from an unsorted portion of a list and moving it to the beginning of the sorted portion of the list.

Here's how the algorithm works:

1. Find the minimum element in the unsorted portion of the list.
2. Swap the minimum element with the first element of the unsorted portion of the list, which is the last element of the sorted portion of the list.
3. Move the boundary between the sorted and unsorted portions of the list one element to the right.
4. Repeat steps 1-3 until the entire list is sorted.

Selection sort has a time complexity of O(n^2) in the worst case, where n is the number of elements in the list. It is not as efficient as other sorting algorithms like merge sort or quicksort, but it has the advantage of requiring only a small amount of additional memory. It is also a stable sorting algorithm, meaning that it preserves the relative order of equal elements in the input list.`,
          code: `def selection_sort(arr):
  n = len(arr)
  for i in range(n):
      min_idx = i
      for j in range(i+1, n):
          if arr[j] < arr[min_idx]:
              min_idx = j
      arr[i], arr[min_idx] = arr[min_idx], arr[i]
  return arr`,
          image: assets.selectionSort,
          complexities: ["O(n^2)", "O(n^2)", "O(n^2)", "O(1)"],
        },
        {
          name: "Insertion Sort",
          details: `Insertion sort is a simple sorting algorithm that builds the final sorted array one element at a time. The algorithm takes an unsorted list of elements and iterates over each element, inserting it into its proper position in a new sorted list.

Here's how the algorithm works:

1. Start with the second element in the list, and compare it to the first element. If the second element is smaller, swap it with the first element.
2. Move to the third element in the list, and compare it to the second element. If the third element is smaller, swap it with the second element. Then, compare the second element to the first element, and swap them if necessary.
3. Continue this process for each subsequent element in the list, comparing it to the elements that come before it and swapping as necessary.

Insertion sort has a time complexity of O(n^2) in the worst case, where n is the number of elements in the list. However, it is more efficient than other quadratic sorting algorithms like bubble sort, especially on small datasets or partially sorted datasets. It is also an in-place sorting algorithm, meaning it doesn't require any extra memory to sort the list.`,
          code: `def insertion_sort(arr):
  n = len(arr)
  for i in range(1, n):
      key = arr[i]
      j = i - 1
      while j >= 0 and key < arr[j]:
          arr[j+1] = arr[j]
          j -= 1
      arr[j+1] = key
  return arr`,
          image: assets.insertionSort,
          complexities: ["O(n^2)", "O(n^2)", "O(n)", "O(1)"],
        },
        {
          name: "Heap Sort",
          details: `Heap sort is a comparison-based sorting algorithm that works by first creating a binary heap from the input array and then repeatedly extracting the minimum element from the heap and placing it at the end of the sorted portion of the array.

Here's how the algorithm works:

1. Build a binary heap from the input array.
2. Extract the minimum element from the heap and place it at the end of the sorted portion of the array.
3. Repeat step 2 until all elements have been extracted from the heap and placed in the sorted portion of the array.

To build a binary heap from an array, we can use a bottom-up approach known as heapify. Starting at the middle of the array, we can heapify each subtree in reverse order until we reach the root of the heap.

Heap sort has a time complexity of O(n log n) in the worst case, where n is the number of elements in the list. It is not as fast as some other sorting algorithms like quicksort, but it has the advantage of being an in-place sorting algorithm with a worst-case time complexity that is guaranteed to be O(n log n). It is also a stable sorting algorithm if implemented with a stable version of heapify.`,
          code: `def heapify(arr, n, i):
    largest = i
    l = 2 * i + 1
    r = 2 * i + 2

    if l < n and arr[i] < arr[l]:
        largest = l

    if r < n and arr[largest] < arr[r]:
        largest = r

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

    def heap_sort(arr):
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, i, 0)
    return arr`,
          image: assets.heapSort,
          complexities: ["O(n log n)", "O(n log n)", "O(n log n)", "O(1)"],
        },
        {
          name: "Merge Sort",
          details: `Merge sort is a divide-and-conquer sorting algorithm that works by dividing the input array into two halves, recursively sorting each half, and then merging the two sorted halves back together.

Here's how the algorithm works:

1. Divide the input array into two halves.
2. Recursively sort each half using merge sort.
3. Merge the two sorted halves back together into a single sorted array.

To merge two sorted arrays, we can use a two-pointer approach. We start with two pointers pointing to the first element of each array, and we compare the values at the two pointers. We then append the smaller value to a new array, and move the corresponding pointer to the next element in its array. We repeat this process until we have appended all elements from both arrays to the new array.

Merge sort has a time complexity of \nO(n log n) in the worst case, where n is the number of elements in the list. It is a stable sorting algorithm, meaning that it preserves the relative order of equal elements in the input list. It is also a parallelizable algorithm, meaning that it can be easily parallelized to take advantage of multi-core processors. However, it requires additional memory to store the subarrays during the sorting process.`,
          code: `def merge(arr, left, right):
i = j = k = 0
while i < len(left) and j < len(right):
    if left[i] < right[j]:
        arr[k] = left[i]
        i += 1
    else:
        arr[k] = right[j]
        j += 1
    k += 1
while i < len(left):
    arr[k] = left[i]
    i += 1
    k += 1
while j < len(right):
    arr[k] = right[j]
    j += 1
    k += 1

def merge_sort(arr):
n = len(arr)
if n > 1:
    mid = n // 2
    left = arr[:mid]
    right = arr[mid:]
    merge_sort(left)
    merge_sort(right)
    merge(arr, left, right)
return arr`,
          image: assets.mergeSort,
          complexities: ["O(n log n)", "O(n log n)", "O(n log n)", "O(n)"],
        },
        {
          name: "Quicksort",
          details: `Quicksort is a divide-and-conquer sorting algorithm that works by selecting a pivot element from the input array, partitioning the array into two subarrays based on the pivot, and recursively sorting each subarray.

Here's how the algorithm works:

1. Choose a pivot element from the input array.
2. Partition the input array into two subarrays: one containing elements less than the pivot, and one containing elements greater than the pivot.
3. Recursively sort each subarray using quicksort.
There are several ways to choose a pivot element, but one common approach is to select the middle element of the array. Another approach is to select a random element from the array.

To partition the array, we can use a two-pointer approach. We start with two pointers, i and j, pointing to the first and last elements of the array, respectively. We then move i to the right until we find an element greater than or equal to the pivot, and move j to the left until we find an element less than or equal to the pivot. We then swap the elements at i and j, and repeat this process until i and j cross each other.

Quicksort has a time complexity of O(n log n) on average and O(n^2) in the worst case, where n is the number of elements in the list. The worst case occurs when the pivot element is chosen poorly, resulting in highly unbalanced partitions. However, quicksort is often faster than other comparison-based sorting algorithms like merge sort and heap sort in practice, especially when the input array is large or partially sorted. It is also an in-place sorting algorithm, meaning that it does not require additional memory to store subarrays during the sorting process.`,
          code: `def quicksort(arr):
if len(arr) <= 1:
    return arr
else:
    pivot = arr[0]
    less = [x for x in arr[1:] if x <= pivot]
    greater = [x for x in arr[1:] if x > pivot]
    return quicksort(less) + [pivot] + quicksort(greater)`,
          image: assets.quickSort,
          complexities: ["O(n^2)", "O(n log n)", "O(n log n)", "O(log n)"],
        },
      ],
      Searching: [
        {
          name: "Linear Search",
          details: `Linear search is a simple algorithm that checks each element of the list in sequence until it finds the target element or reaches the end of the list. Here's how it works:

1. Start at the beginning of the list.
2. Check each element in the list in sequence.
3. If the target element is found, return its index.
4. If the end of the list is reached without finding the target element, return -1 to indicate failure.

Linear search has a time complexity of O(n), where n is the number of elements in the list. It is a simple algorithm that works for unsorted lists, but it can be slow for large lists or when the target element is near the end of the list.`,
          code: `def linear_search(arr, target):
for i in range(len(arr)):
    if arr[i] == target:
        return i
return -1`,
          image: assets.linearSearch,
          complexities: ["O(n)", "O(n)", "O(1)", "O(1)"],
        },
        {
          name: "Binary Search",
          details: `Binary search is a more efficient algorithm that works by dividing the input array in half at each step, and comparing the target element with the middle element of the subarray. 

Here's how it works:

1. Start with the middle element of the list.
2. If the middle element is equal to the target, return its index.
3. If the target is less than the middle element, search the left half of the list.
4. If the target is greater than the middle element, search the right half of the list.
5. Repeat the above steps until the target is found or the subarray has size 0.

To implement binary search, the input array must be sorted in ascending or descending order.

Binary search has a time complexity of O(log n), where n is the number of elements in the list. It is a much faster algorithm than linear search for large lists, and is especially useful when the input array is sorted. However, binary search requires that the input array be sorted, and it may not be applicable or efficient for unsorted arrays.`,
          code: `def binary_search(arr, target):
left = 0
right = len(arr) - 1
while left <= right:
    mid = (left + right) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        left = mid + 1
    else:
        right = mid - 1
return -1`,
          image: assets.binarySearch,
          complexities: ["O(log n)", "O(log n)", "O(1)", "O(1)"],
        },
      ],
      Graph: [
        {
          name: "Breadth-First Search",
          details: `BFS starts at the root node and explores all the neighboring nodes at the current depth before moving on to the nodes at the next depth. It is implemented using a queue data structure, where the nodes are added to the queue as they are discovered and explored.

Here's how BFS works:

1. Enqueue the root node.
2. Dequeue a node and mark it as visited.
3. Enqueue all its neighbors that have not been visited.
4. Repeat steps 2-3 until the queue is empty.

BFS can be used to find the shortest path between two nodes in an unweighted graph, since it explores all the neighboring nodes at a given depth before moving on to the next depth.`,
          code: `from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    while queue:
        vertex = queue.popleft()
        if vertex not in visited:
            visited.add(vertex)
            queue.extend(graph[vertex] - visited)
    return visited`,
          image: assets.bfs,
          complexities: ["O(V + E)", "O(V + E)", "O(V + E)", "O(V)"],
        },
        {
          name: "Depth-First Search",
          details: `DFS explores as far as possible along each branch before backtracking. It is implemented using a stack data structure, where the nodes are added to the stack as they are discovered and explored.

Here's how DFS works:

1. Push the root node onto the stack.
2. Pop a node and mark it as visited.
3. Push all its unvisited neighbors onto the stack.
4. Repeat steps 2-3 until the stack is empty.

DFS can be used to find all the connected components in a graph or to explore all the nodes in a tree.`,
          code: `def dfs(graph, start, visited=None):
if visited is None:
    visited = set()
visited.add(start)
for next_vertex in graph[start] - visited:
    dfs(graph, next_vertex, visited)
return visited`,
          image: assets.dfs,
          complexities: ["O(V + E)", "O(V + E)", "O(V + E)", "O(V)"],
        },
        {
          name: "Bellmon-Ford Algorithm",
          details: `Bellman-Ford is a dynamic programming algorithm that can handle negative weight edges in a graph. It works by relaxing each edge in the graph repeatedly, and it keeps track of the minimum distance from the source node to each node in the graph. The algorithm can detect negative cycles in the graph, which are cycles that have a negative weight.

Here's how Bellman-Ford works:

1. Initialize the distances to all nodes as infinity except the source node, which is set to 0.
2. Relax each edge in the graph V-1 times, where V is the number of nodes in the graph. This means that for each edge (u, v), if the distance to v can be improved by going through u, then update the distance to v.
3. Check for negative cycles. If a negative cycle is found, then the algorithm reports that the graph contains a negative cycle.

Bellman-Ford has a time complexity of O(VE), where V is the number of nodes in the graph and E is the number of edges in the graph.`,
          code: `def bellman_ford(graph, start):
dist = {v: float('inf') for v in graph}
dist[start] = 0
for _ in range(len(graph) - 1):
    for v in graph:
        for n, w in graph[v].items():
            d = dist[v] + w
            if d < dist[n]:
                dist[n] = d
for v in graph:
    for n, w in graph[v].items():
        if dist[v] + w < dist[n]:
            raise ValueError("Negative weight cycle detected")
return dist`,
          image: assets.bellmonFord,
          complexities: ["O(VE)", "O(VE)", "O(V + E)", "O(V)"],
        },
        {
          name: "Dijkstra's Algorithm",
          details: `Dijkstra is a greedy algorithm that can handle only non-negative weight edges in a graph. It works by maintaining a priority queue of nodes that have not been visited yet, and it chooses the node with the smallest distance from the source node to visit next.

Here's how Dijkstra works:

1. Initialize the distances to all nodes as infinity except the source node, which is set to 0.
2. Add the source node to a priority queue.
3. While the priority queue is not empty, do the following:
• Remove the node with the smallest distance from the priority queue.
• For each neighbor of the node, update the distance if a shorter path is found.
• If the distance to a neighbor is updated, add the neighbor to the priority queue.

Dijkstra has a time complexity of O((V+E)logV), where V is the number of nodes in the graph and E is the number of edges in the graph. The logV factor comes from the time required to maintain the priority queue.`,
          code: `import heapq

def dijkstra(graph, start):
    dist = {v: float('inf') for v in graph}
    dist[start] = 0
    q = [(0, start)]
    while q:
        cur_dist, cur_v = heapq.heappop(q)
        if cur_dist > dist[cur_v]:
            continue
        for n, w in graph[cur_v].items():
            d = cur_dist + w
            if d < dist[n]:
                dist[n] = d
                heapq.heappush(q, (d, n))
return dist`,
          image: assets.dijkstra,
          complexities: [
            "O\n((V + E) log V)",
            "O\n((V + E) log V)",
            "O(V + E)",
            "O(V)",
          ],
        },
      ],
    },
    image: assets.algorithms,
  },
];

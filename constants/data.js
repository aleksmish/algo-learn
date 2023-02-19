import assets from "./assets";

export const SectionData = [
  {
    title: "Data Structures",
    info: "Data structures are ways of organizing and storing data efficiently. Examples include arrays, linked lists, trees, and graphs.",
    topics: [{
        name: "Array",
        details: "An array is a linear data structure that stores elements of the same data type in contiguous memory locations. It can be used to store and access elements quickly, but can become slow for large datasets. The size of an array must be determined at the time of creation and cannot be changed once defined.",
        code:
`const array = [1, 2, 3, 4, 5] // initialization O(n) time
array[0] // lookup O(1) time
array[0] = 1 // reassigning O(1) time`,
      },
      {
        name: "Linked List",
        details: "A linked list is a linear data structure that consists of a list of nodes, where each node contains an element and a pointer to the next node. Linked lists can be used to store and access elements dynamically, but can be slower than arrays for random access of elements. Linked lists can also be used to implement stacks, queues, and other data structures.",
        code:
`class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length += 1;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < index; i += 1) {
      current = current.next;
    }

    return current;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) {
      this.head = this.head.next;
    } else {
      const previous = this.get(index - 1);
      previous.next = previous.next.next;
    }

    this.length -= 1;
  }
}`,
      },
      {
        name: "Tree",
        details: "A tree is a hierarchical data structure that consists of nodes connected by edges. Each node has a parent and zero or more children. The topmost node is called the root and the nodes without children are called leaves. Trees are often used to implement data structures such as directories in file systems, parse trees in compilers, and decision trees in artificial intelligence.",
      },
      {
        name: "Graph",
        details: "A graph is a non-linear data structure that consists of nodes connected by edges. Graphs can be used to represent networks, such as road networks, social networks, and computer networks. Graphs can also be used to represent relationships between elements, such as dependencies in software systems.",
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
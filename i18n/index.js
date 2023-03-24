import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationRu = {
  "Learn Data Structures and Algorithms interactively":
    "Изучайте структуры данных и алгоритмы интерактивно",
  "Data Structures": "Структуры Данных",
  "Data structures are ways of organizing and storing data efficiently. Examples include arrays, linked lists, trees, and graphs.":
    "Структуры данных — это способы эффективной организации и хранения данных. Примеры включают массивы, связанные списки, деревья и графики.",
  "Go": "Перейти",
  "Algorithms": "Алгоритмы",
  "Algorithms are step-by-step procedures for solving problems. Examples include sorting algorithms, searching algorithms, and graph algorithms.": 
  "Алгоритмы — это пошаговые процедуры решения проблем. Примеры включают алгоритмы сортировки, алгоритмы поиска и алгоритмы графов.",
  "Pick a Data Structure": "Выберите Структуру Данных",
  "Pick an Algorithm": "Выберите Алгоритм",
  "Stack": "Стэк",
  "Queue": "Очередь",
  "Linked List": "Связный список",
  "Tree": "Дерево",
  "Graph": "Граф",
  "Details": "Детали",
  "Code": "Код",
  "Sorting": "Сортировка",
  "Searching": "Поиск",
  "Graph": "Граф",
  "Bubble Sort": "Сортировка Пузырьком",
  "Selection Sort": "Сортировка Выбором",
  "Insertion Sort": "Сортировка Вставками",
  "Heap Sort": "Сортировка Кучей",
  "Merge Sort": "Сортировка Слиянием",
  "Quicksort": "Быстрая Сортировка",
  "Linear Search": "Линейный Поиск",
  "Binary Search": "Бинарный Поиск",
  "Breadth-First Search": "Поиск в ширину",
  "Depth-First Search": "Поиск в глубину",
  "Bellmon-Ford Algorithm": "Алгоритм Беллмона",
  "Dijkstra's Algorithm": "Алгоритм Дейкстры",
  "Copied": "Скопировано",
  "Space Complexity": "Сложность по Памяти",
  "Time Complexity": "Сложность по Времени",
  "Worst": "Худший",
  "Average": "Средний",
  "Best": "Лучший",
  [`A stack is a linear data structure that follows the Last In First Out (LIFO) principle. In a stack, elements are added and removed from the same end, called the top of the stack.
        
The operations that can be performed on a stack include:

1. Push: Add an element to the top of the stack.
2. Pop: Remove and return the element at the top of the stack.
3. Peek: Return the element at the top of the stack without removing it.
4. IsEmpty: Check if the stack is empty.

Stacks can be implemented using arrays or linked lists. Some common applications of stacks include:

1. Expression evaluation: Stacks can be used to evaluate arithmetic expressions by converting infix notation to postfix notation and then evaluating the postfix expression using a stack.
2. Function calls: Stacks can be used to keep track of function calls in computer programs, with each function call being pushed onto the stack and popped off when the function returns.
3. Undo operations: Stacks can be used to implement undo operations in computer programs, with each change being pushed onto the stack and popped off to undo the changes.`]:
`Стек — это линейная структура данных, которая следует принципу последним пришел — первым ушел (LIFO). В стеке элементы добавляются и удаляются с одного и того же конца, называемого вершиной стека.
      
Операции, которые можно выполнять со стеком, включают:

1. Push: добавить элемент на вершину стека.
2. Pop: удалить и вернуть элемент в верхней части стека.
3. Peek: вернуть элемент на вершину стека, не удаляя его.
4. IsEmpty: проверьте, пуст ли стек.

Стеки могут быть реализованы с использованием массивов или связанных списков. Некоторые распространенные приложения стеков включают в себя:

1. Вычисление выражений. Стеки можно использовать для вычисления арифметических выражений путем преобразования инфиксной нотации в постфиксную и последующего вычисления постфиксного выражения с использованием стека.
2. Вызовы функций: стеки можно использовать для отслеживания вызовов функций в компьютерных программах, при этом каждый вызов функции помещается в стек и извлекается, когда функция возвращается.
3. Операции отмены. Стеки можно использовать для реализации операций отмены в компьютерных программах, при этом каждое изменение помещается в стек и извлекается для отмены изменений.`,
[`A queue is a linear data structure that follows the First In First Out (FIFO) principle. In a queue, elements are added to the back of the queue and removed from the front of the queue. 

The operations that can be performed on a queue include:

1. Enqueue: Add an element to the back of the queue.
2. Dequeue: Remove and return the element at the front of the queue.
3. Peek: Return the element at the front of the queue without removing it.
4. IsEmpty: Check if the queue is empty.

Queues can also be implemented using arrays or linked lists. Some common applications of queues include:

1. Resource allocation: Queues can be used to allocate resources to processes in computer systems, with each process being added to the queue and serviced in order.
2. Job scheduling: Queues can be used to schedule jobs in computer systems, with each job being added to the queue and executed in order.
3. Breadth-first search: Queues can be used to perform breadth-first search in graphs and trees, with each node being added to the queue and explored in order.`]:
`Очередь — это линейная структура данных, которая следует принципу «первым пришел — первым вышел» (FIFO). В очереди элементы добавляются в конец очереди и удаляются из начала очереди.

Операции, которые можно выполнять с очередью, включают:

1. Постановка в очередь: добавьте элемент в конец очереди.
2. Удаление из очереди: удалить и вернуть элемент в начало очереди.
3. Просмотр: вернуть элемент в начало очереди, не удаляя его.
4. IsEmpty: проверьте, пуста ли очередь.

Очереди также могут быть реализованы с использованием массивов или связанных списков. Некоторые распространенные приложения очередей включают:

1. Распределение ресурсов. Очереди можно использовать для распределения ресурсов между процессами в компьютерных системах, при этом каждый процесс добавляется в очередь и обслуживается по порядку.
2. Планирование заданий. Очереди можно использовать для планирования заданий в компьютерных системах, при этом каждое задание добавляется в очередь и выполняется по порядку.
3. Поиск в ширину: Очереди можно использовать для выполнения поиска в ширину в графах и деревьях, при этом каждый узел добавляется в очередь и исследуется по порядку.`,
[`A linked list is a linear data structure that consists of a sequence of nodes, where each node contains a value and a pointer to the next node in the list. The first node in the list is called the head, and the last node is called the tail.

There are two main types of linked lists: singly linked lists and doubly linked lists. In a singly linked list, each node has a pointer to the next node in the list, while in a doubly linked list, each node has pointers to both the next and the previous nodes in the list.

Linked lists have several advantages over arrays, including:

1. Dynamic size: Linked lists can easily grow or shrink in size as needed, while arrays have a fixed size.
2. Efficient insertion and deletion: Linked lists can insert or delete nodes in constant time, while arrays require shifting elements to accommodate the change.
3. Memory efficiency: Linked lists can use memory more efficiently than arrays, as they do not need to allocate a contiguous block of memory.

However, linked lists also have some disadvantages, including:

1. Random access is inefficient: Unlike arrays, linked lists cannot be accessed in constant time, as each node must be traversed in sequence to access a specific node.
2. Extra memory for pointers: Linked lists require extra memory to store the pointers to the next and/or previous nodes.

Linked lists can be used for a variety of purposes, including implementing stacks, queues, and hash tables. They are an important data structure in computer science and are used in many algorithms and applications.`]:
`Связанный список — это линейная структура данных, состоящая из последовательности узлов, где каждый узел содержит значение и указатель на следующий узел в списке. Первый узел в списке называется головным, а последний — хвостовым.

Существует два основных типа связанных списков: односвязные списки и двусвязные списки. В односвязном списке каждый узел имеет указатель на следующий узел в списке, а в двусвязном списке каждый узел имеет указатели как на следующий, так и на предыдущий узлы в списке.

Связанные списки имеют ряд преимуществ перед массивами, в том числе:

1. Динамический размер. Связанные списки могут легко увеличиваться или уменьшаться в размере по мере необходимости, в то время как массивы имеют фиксированный размер.
2. Эффективная вставка и удаление. Связанные списки могут вставлять и удалять узлы за постоянное время, в то время как массивы требуют смещения элементов для учета изменений.
3. Эффективность использования памяти. Связные списки могут использовать память более эффективно, чем массивы, поскольку им не нужно выделять непрерывный блок памяти.

Однако связанные списки также имеют некоторые недостатки, в том числе:

1. Произвольный доступ неэффективен: в отличие от массивов, к связанным спискам нельзя получить доступ за постоянное время, так как каждый узел должен быть пройден последовательно, чтобы получить доступ к определенному узлу.
2. Дополнительная память для указателей. Для связанных списков требуется дополнительная память для хранения указателей на следующие и/или предыдущие узлы.

Связанные списки можно использовать для различных целей, включая реализацию стеков, очередей и хеш-таблиц. Они являются важной структурой данных в информатике и используются во многих алгоритмах и приложениях.`,
[`A tree data structure is a hierarchical data structure that consists of nodes connected by edges. Each node in a tree represents a value or object, and each edge represents a relationship between nodes.
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

Trees can be used for a variety of purposes, including searching, sorting, and organizing data. They are an important data structure in computer science and are used in many algorithms and applications.`]:
`Дерево — это иерархическая структура данных, состоящая из узлов, соединенных ребрами. Каждый узел в дереве представляет значение или объект, а каждое ребро представляет отношение между узлами.
Самый верхний узел в дереве называется корнем, и любой другой узел в дереве может быть достигнут из корня, следуя пути ребер. Узлы, не имеющие дочерних узлов, называются листьями, а узлы с одним или несколькими дочерними элементами называются внутренними узлами.

Существует несколько видов деревьев, в том числе:

1. Двоичное дерево: дерево, в котором каждый узел имеет не более двух дочерних элементов.
2. Двоичное дерево поиска: Двоичное дерево, в котором левое поддерево узла содержит только узлы со значениями меньше значения узла, а правое поддерево узла содержит только узлы со значениями больше значения узла.
3. Дерево AVL: бинарное дерево поиска, в котором высоты левого и правого поддеревьев каждого узла отличаются не более чем на единицу.
4. Красно-черное дерево: бинарное дерево поиска, в котором каждый узел окрашен в красный или черный цвет, и выполняются следующие свойства:
• Корень черный.
• Каждый лист черный.
• Если узел красный, то оба его потомка черные.
• Каждый путь от узла к его дочерним листьям содержит одинаковое количество черных узлов.
5. B-дерево: Дерево, в котором каждый узел может иметь несколько потомков, а ключи в каждом узле отсортированы.

Деревья можно использовать для различных целей, включая поиск, сортировку и организацию данных. Они являются важной структурой данных в информатике и используются во многих алгоритмах и приложениях.`,
[`A graph is a collection of vertices (also known as nodes or points) and edges. The vertices represent objects or entities, and the edges represent the relationships between them.

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

Graphs are an important data structure in computer science and are used in many applications.`]:
`Граф представляет собой набор вершин (также известных как узлы или точки) и ребер. Вершины представляют объекты или объекты, а ребра представляют отношения между ними.

Существует два основных типа графов: ориентированные графы и неориентированные графы. В ориентированном графе каждое ребро имеет направление, указывающее на одностороннюю связь между двумя вершинами. В неориентированном графе каждое ребро не имеет направления, что указывает на двустороннюю связь между двумя вершинами.

Графики также могут быть взвешенными или невзвешенными. Во взвешенном графе каждое ребро имеет вес или стоимость, связанные с ним, представляющие силу или важность отношений между вершинами. В невзвешенном графе каждое ребро не имеет веса или стоимости, связанных с ним.

Есть несколько распространенных применений графиков, в том числе:

1. Социальные сети: графы можно использовать для моделирования отношений между людьми в социальных сетях, где вершины представляют людей, а ребра представляют связи между ними.
2. Транспортные сети. Графы можно использовать для моделирования транспортных сетей, где вершины представляют местоположения, а ребра — дороги или маршруты между ними.
3. Компьютерные сети. Графы можно использовать для моделирования компьютерных сетей, где вершины представляют устройства или узлы, а ребра — соединения между ними.
4. Генеалогические деревья. Графы можно использовать для моделирования генеалогических деревьев, где вершины представляют отдельных людей, а ребра — отношения между ними.
5. Ранжирование веб-страниц. Графики можно использовать для моделирования структуры Всемирной паутины, где вершины представляют веб-страницы, а ребра — связи между ними.

Существует несколько алгоритмов, которые можно использовать с графиками, в том числе:

1. Поиск в глубину: алгоритм обхода, который посещает все вершины графа, исследуя как можно дальше каждую ветвь перед возвратом.
2. Поиск в ширину: алгоритм обхода, который посещает все вершины в графе, исследуя всех соседей каждой вершины, прежде чем перейти к соседям соседей.
3. Алгоритм Дейкстры: Алгоритм кратчайшего пути, который находит кратчайший путь между двумя вершинами во взвешенном графе.
4. Алгоритм Крускала. Алгоритм минимального остовного дерева, который находит дерево минимального веса, соединяющее все вершины неориентированного взвешенного графа.
5. Алгоритм Беллмана-Форда: алгоритм кратчайшего пути, который может обрабатывать отрицательные веса ребер.

Графики являются важной структурой данных в информатике и используются во многих приложениях.`,
[`Bubble sort is a simple sorting algorithm that repeatedly compares adjacent elements in an array or a list and swaps them if they are in the wrong order. The algorithm gets its name from the way smaller elements "bubble" to the top of the list.

Here's how the algorithm works:

1. Start at the beginning of the list and compare the first two elements. If the first element is larger than the second element, swap them.
2. Move to the next pair of adjacent elements and repeat step 1, continuing until the end of the list is reached.

Bubble sort has a time complexity of O(n^2) in the worst case, where n is the number of elements in the list. It is not efficient for large datasets and is generally used only for educational purposes or on small datasets. However, it is a simple and easy-to-understand algorithm that can be useful in certain situations.`]:
`Пузырьковая сортировка — это простой алгоритм сортировки, который многократно сравнивает соседние элементы в массиве или списке и меняет их местами, если они расположены в неправильном порядке. Алгоритм получил свое название из-за того, что более мелкие элементы «всплывают» вверх списка.

Вот как работает алгоритм:

1. Начните с начала списка и сравните первые два элемента. Если первый элемент больше второго, поменяйте их местами.
2. Перейдите к следующей паре соседних элементов и повторите шаг 1, пока не будет достигнут конец списка.

Пузырьковая сортировка имеет временную сложность O(n^2) в худшем случае, где n — количество элементов в списке. Он неэффективен для больших наборов данных и обычно используется только в образовательных целях или для небольших наборов данных. Однако это простой и понятный алгоритм, который может быть полезен в определенных ситуациях.`,
[`Selection sort is a simple sorting algorithm that works by repeatedly finding the minimum element from an unsorted portion of a list and moving it to the beginning of the sorted portion of the list.

Here's how the algorithm works:

1. Find the minimum element in the unsorted portion of the list.
2. Swap the minimum element with the first element of the unsorted portion of the list, which is the last element of the sorted portion of the list.
3. Move the boundary between the sorted and unsorted portions of the list one element to the right.
4. Repeat steps 1-3 until the entire list is sorted.

Selection sort has a time complexity of O(n^2) in the worst case, where n is the number of elements in the list. It is not as efficient as other sorting algorithms like merge sort or quicksort, but it has the advantage of requiring only a small amount of additional memory. It is also a stable sorting algorithm, meaning that it preserves the relative order of equal elements in the input list.`]:
`Сортировка выбором — это простой алгоритм сортировки, который работает путем многократного поиска минимального элемента из несортированной части списка и перемещения его в начало отсортированной части списка.

Вот как работает алгоритм:

1. Найдите минимальный элемент в несортированной части списка.
2. Поменять местами минимальный элемент с первым элементом несортированной части списка, который является последним элементом отсортированной части списка.
3. Переместите границу между отсортированной и неотсортированной частями списка на один элемент вправо.
4. Повторяйте шаги 1-3, пока весь список не будет отсортирован.

Сортировка выбором имеет временную сложность O (n ^ 2) в худшем случае, где n — количество элементов в списке. Он не так эффективен, как другие алгоритмы сортировки, такие как сортировка слиянием или быстрая сортировка, но имеет то преимущество, что требует лишь небольшого объема дополнительной памяти. Это также стабильный алгоритм сортировки, то есть он сохраняет относительный порядок одинаковых элементов во входном списке.`,
[`Insertion sort is a simple sorting algorithm that builds the final sorted array one element at a time. The algorithm takes an unsorted list of elements and iterates over each element, inserting it into its proper position in a new sorted list.

Here's how the algorithm works:

1. Start with the second element in the list, and compare it to the first element. If the second element is smaller, swap it with the first element.
2. Move to the third element in the list, and compare it to the second element. If the third element is smaller, swap it with the second element. Then, compare the second element to the first element, and swap them if necessary.
3. Continue this process for each subsequent element in the list, comparing it to the elements that come before it and swapping as necessary.

Insertion sort has a time complexity of O(n^2) in the worst case, where n is the number of elements in the list. However, it is more efficient than other quadratic sorting algorithms like bubble sort, especially on small datasets or partially sorted datasets. It is also an in-place sorting algorithm, meaning it doesn't require any extra memory to sort the list.`]:
`Сортировка вставками — это простой алгоритм сортировки, который строит окончательный отсортированный массив по одному элементу за раз. Алгоритм берет несортированный список элементов и перебирает каждый элемент, вставляя его в нужное место в новом отсортированном списке.

Вот как работает алгоритм:

1. Начните со второго элемента в списке и сравните его с первым элементом. Если второй элемент меньше, поменяйте его местами с первым элементом.
2. Перейдите к третьему элементу в списке и сравните его со вторым элементом. Если третий элемент меньше, замените его вторым элементом. Затем сравните второй элемент с первым элементом и при необходимости поменяйте их местами.
3. Продолжайте этот процесс для каждого последующего элемента в списке, сравнивая его с предшествующими элементами и меняя местами при необходимости.

Сортировка вставками имеет временную сложность O(n^2) в худшем случае, где n — количество элементов в списке. Однако он более эффективен, чем другие алгоритмы квадратичной сортировки, такие как пузырьковая сортировка, особенно для небольших наборов данных или частично отсортированных наборов данных. Это также алгоритм сортировки на месте, что означает, что для сортировки списка не требуется дополнительная память.`,
[`Heap sort is a comparison-based sorting algorithm that works by first creating a binary heap from the input array and then repeatedly extracting the minimum element from the heap and placing it at the end of the sorted portion of the array.

Here's how the algorithm works:

1. Build a binary heap from the input array.
2. Extract the minimum element from the heap and place it at the end of the sorted portion of the array.
3. Repeat step 2 until all elements have been extracted from the heap and placed in the sorted portion of the array.

To build a binary heap from an array, we can use a bottom-up approach known as heapify. Starting at the middle of the array, we can heapify each subtree in reverse order until we reach the root of the heap.

Heap sort has a time complexity of O(n log n) in the worst case, where n is the number of elements in the list. It is not as fast as some other sorting algorithms like quicksort, but it has the advantage of being an in-place sorting algorithm with a worst-case time complexity that is guaranteed to be O(n log n). It is also a stable sorting algorithm if implemented with a stable version of heapify.`]:
`Сортировка кучей — это алгоритм сортировки на основе сравнения, который работает, сначала создавая двоичную кучу из входного массива, а затем многократно извлекая минимальный элемент из кучи и помещая его в конец отсортированной части массива.

Вот как работает алгоритм:

1. Создайте двоичную кучу из входного массива.
2. Извлеките из кучи минимальный элемент и поместите его в конец отсортированной части массива.
3. Повторяйте шаг 2, пока все элементы не будут извлечены из кучи и помещены в отсортированную часть массива.

Чтобы построить двоичную кучу из массива, мы можем использовать восходящий подход, известный как heapify. Начиная с середины массива, мы можем увеличивать каждое поддерево в обратном порядке, пока не достигнем корня кучи.

Сортировка кучей имеет временную сложность O (n log n) в худшем случае, где n — количество элементов в списке. Это не так быстро, как некоторые другие алгоритмы сортировки, такие как быстрая сортировка, но у него есть то преимущество, что он является алгоритмом сортировки на месте с временной сложностью в наихудшем случае, которая гарантированно равна O (n log n). Это также стабильный алгоритм сортировки, если он реализован со стабильной версией heapify.`,
[`Merge sort is a divide-and-conquer sorting algorithm that works by dividing the input array into two halves, recursively sorting each half, and then merging the two sorted halves back together.

Here's how the algorithm works:

1. Divide the input array into two halves.
2. Recursively sort each half using merge sort.
3. Merge the two sorted halves back together into a single sorted array.

To merge two sorted arrays, we can use a two-pointer approach. We start with two pointers pointing to the first element of each array, and we compare the values at the two pointers. We then append the smaller value to a new array, and move the corresponding pointer to the next element in its array. We repeat this process until we have appended all elements from both arrays to the new array.

Merge sort has a time complexity of \nO(n log n) in the worst case, where n is the number of elements in the list. It is a stable sorting algorithm, meaning that it preserves the relative order of equal elements in the input list. It is also a parallelizable algorithm, meaning that it can be easily parallelized to take advantage of multi-core processors. However, it requires additional memory to store the subarrays during the sorting process.`]:
`Сортировка слиянием — это алгоритм сортировки по принципу «разделяй и властвуй», который работает путем деления входного массива на две половины, рекурсивной сортировки каждой половины и последующего слияния двух отсортированных половин вместе.

Вот как работает алгоритм:

1. Разделить входной массив на две половины.
2. Рекурсивно отсортируйте каждую половину, используя сортировку слиянием.
3. Снова объединить две отсортированные половины в один отсортированный массив.

Чтобы объединить два отсортированных массива, мы можем использовать подход с двумя указателями. Мы начинаем с двух указателей, указывающих на первый элемент каждого массива, и сравниваем значения двух указателей. Затем мы добавляем меньшее значение в новый массив и перемещаем соответствующий указатель на следующий элемент в его массиве. Мы повторяем этот процесс, пока не добавим все элементы из обоих массивов в новый массив.

Сортировка слиянием имеет временную сложность \nO(n log n) в худшем случае, где n — количество элементов в списке. Это стабильный алгоритм сортировки, то есть он сохраняет относительный порядок одинаковых элементов во входном списке. Это также распараллеливаемый алгоритм, что означает, что его можно легко распараллелить, чтобы использовать преимущества многоядерных процессоров. Однако для хранения подмассивов в процессе сортировки требуется дополнительная память.`,
[`Quicksort is a divide-and-conquer sorting algorithm that works by selecting a pivot element from the input array, partitioning the array into two subarrays based on the pivot, and recursively sorting each subarray.

Here's how the algorithm works:

1. Choose a pivot element from the input array.
2. Partition the input array into two subarrays: one containing elements less than the pivot, and one containing elements greater than the pivot.
3. Recursively sort each subarray using quicksort.
There are several ways to choose a pivot element, but one common approach is to select the middle element of the array. Another approach is to select a random element from the array.

To partition the array, we can use a two-pointer approach. We start with two pointers, i and j, pointing to the first and last elements of the array, respectively. We then move i to the right until we find an element greater than or equal to the pivot, and move j to the left until we find an element less than or equal to the pivot. We then swap the elements at i and j, and repeat this process until i and j cross each other.

Quicksort has a time complexity of O(n log n) on average and O(n^2) in the worst case, where n is the number of elements in the list. The worst case occurs when the pivot element is chosen poorly, resulting in highly unbalanced partitions. However, quicksort is often faster than other comparison-based sorting algorithms like merge sort and heap sort in practice, especially when the input array is large or partially sorted. It is also an in-place sorting algorithm, meaning that it does not require additional memory to store subarrays during the sorting process.`]:
`Быстрая сортировка — это алгоритм сортировки по принципу «разделяй и властвуй», который работает путем выбора опорного элемента из входного массива, разделения массива на два подмассива на основе опорной точки и рекурсивной сортировки каждого подмассива.

Вот как работает алгоритм:

1. Выберите опорный элемент из входного массива.
2. Разделите входной массив на два подмассива: один содержит элементы, меньшие, чем опорный, и другой, содержащий элементы, превышающие опорный.
3. Рекурсивно отсортируйте каждый подмассив с помощью быстрой сортировки.
Существует несколько способов выбора опорного элемента, но наиболее распространенным является выбор среднего элемента массива. Другой подход заключается в выборе случайного элемента из массива.

Чтобы разбить массив, мы можем использовать подход с двумя указателями. Мы начинаем с двух указателей, i и j, указывающих на первый и последний элементы массива соответственно. Затем мы перемещаем i вправо, пока не найдем элемент, больший или равный опорной точке, и перемещаем j влево, пока не найдем элемент, меньший или равный опорной точке. Затем мы меняем местами элементы i и j и повторяем этот процесс до тех пор, пока i и j не пересекутся.

Быстрая сортировка имеет временную сложность O (n log n) в среднем и O (n ^ 2) в худшем случае, где n — количество элементов в списке. Худший случай возникает, когда опорный элемент выбран неудачно, что приводит к сильно несбалансированным перегородкам. Однако на практике быстрая сортировка часто работает быстрее, чем другие алгоритмы сортировки на основе сравнения, такие как сортировка слиянием и сортировка кучей, особенно когда входной массив большой или частично отсортированный. Это также алгоритм сортировки на месте, что означает, что он не требует дополнительной памяти для хранения подмассивов в процессе сортировки.`,
[`Linear search is a simple algorithm that checks each element of the list in sequence until it finds the target element or reaches the end of the list. Here's how it works:

1. Start at the beginning of the list.
2. Check each element in the list in sequence.
3. If the target element is found, return its index.
4. If the end of the list is reached without finding the target element, return -1 to indicate failure.

Linear search has a time complexity of O(n), where n is the number of elements in the list. It is a simple algorithm that works for unsorted lists, but it can be slow for large lists or when the target element is near the end of the list.`]:
`Линейный поиск — это простой алгоритм, который последовательно проверяет каждый элемент списка, пока не найдет целевой элемент или не достигнет конца списка. Вот как это работает:

1. Начните с начала списка.
2. Последовательно проверьте каждый элемент списка.
3. Если целевой элемент найден, вернуть его индекс.
4. Если конец списка достигнут, но целевой элемент не найден, вернуть -1, чтобы указать на ошибку.

Линейный поиск имеет временную сложность O(n), где n — количество элементов в списке. Это простой алгоритм, который работает для несортированных списков, но может быть медленным для больших списков или когда целевой элемент находится ближе к концу списка.`,
[`Binary search is a more efficient algorithm that works by dividing the input array in half at each step, and comparing the target element with the middle element of the subarray. 

Here's how it works:

1. Start with the middle element of the list.
2. If the middle element is equal to the target, return its index.
3. If the target is less than the middle element, search the left half of the list.
4. If the target is greater than the middle element, search the right half of the list.
5. Repeat the above steps until the target is found or the subarray has size 0.

To implement binary search, the input array must be sorted in ascending or descending order.

Binary search has a time complexity of O(log n), where n is the number of elements in the list. It is a much faster algorithm than linear search for large lists, and is especially useful when the input array is sorted. However, binary search requires that the input array be sorted, and it may not be applicable or efficient for unsorted arrays.`]:
`Двоичный поиск — это более эффективный алгоритм, который работает путем деления входного массива пополам на каждом шаге и сравнения целевого элемента со средним элементом подмассива.

Вот как это работает:

1. Начните со среднего элемента списка.
2. Если средний элемент равен целевому, вернуть его индекс.
3. Если цель меньше среднего элемента, выполните поиск в левой половине списка.
4. Если цель больше среднего элемента, выполните поиск в правой половине списка.
5. Повторяйте описанные выше шаги до тех пор, пока не будет найдена цель или подмассив не будет иметь размер 0.

Для реализации бинарного поиска входной массив должен быть отсортирован по возрастанию или по убыванию.

Двоичный поиск имеет временную сложность O(log n), где n — количество элементов в списке. Это гораздо более быстрый алгоритм, чем линейный поиск для больших списков, и он особенно полезен, когда входной массив отсортирован. Однако бинарный поиск требует, чтобы входной массив был отсортирован, и он может быть неприменим или неэффективен для несортированных массивов.`,
[`BFS starts at the root node and explores all the neighboring nodes at the current depth before moving on to the nodes at the next depth. It is implemented using a queue data structure, where the nodes are added to the queue as they are discovered and explored.

Here's how BFS works:

1. Enqueue the root node.
2. Dequeue a node and mark it as visited.
3. Enqueue all its neighbors that have not been visited.
4. Repeat steps 2-3 until the queue is empty.

BFS can be used to find the shortest path between two nodes in an unweighted graph, since it explores all the neighboring nodes at a given depth before moving on to the next depth.`]:
`BFS начинается с корневого узла и исследует все соседние узлы на текущей глубине, прежде чем перейти к узлам на следующей глубине. Он реализован с использованием структуры данных очереди, где узлы добавляются в очередь по мере их обнаружения и исследования.

Вот как работает BFS:

1. Поставьте в очередь корневой узел.
2. Удалите узел из очереди и пометьте его как посещенный.
3. Поставить в очередь всех своих соседей, которые не были посещены.
4. Повторяйте шаги 2–3, пока очередь не станет пустой.

BFS можно использовать для поиска кратчайшего пути между двумя узлами в невзвешенном графе, поскольку он исследует все соседние узлы на заданной глубине, прежде чем перейти к следующей глубине.`,
[`DFS explores as far as possible along each branch before backtracking. It is implemented using a stack data structure, where the nodes are added to the stack as they are discovered and explored.

Here's how DFS works:

1. Push the root node onto the stack.
2. Pop a node and mark it as visited.
3. Push all its unvisited neighbors onto the stack.
4. Repeat steps 2-3 until the stack is empty.

DFS can be used to find all the connected components in a graph or to explore all the nodes in a tree.`]:
`DFS исследует каждую ветвь, насколько это возможно, перед откатом. Он реализован с использованием структуры данных стека, где узлы добавляются в стек по мере их обнаружения и исследования.

Вот как работает DFS:

1. Вставьте корневой узел в стек.
2. Извлеките узел и пометьте его как посещенный.
3. Поместить в стек всех непосещенных соседей.
4. Повторяйте шаги 2–3, пока стек не станет пустым.

DFS можно использовать для поиска всех связанных компонентов в графе или для исследования всех узлов в дереве.`,
[`Bellman-Ford is a dynamic programming algorithm that can handle negative weight edges in a graph. It works by relaxing each edge in the graph repeatedly, and it keeps track of the minimum distance from the source node to each node in the graph. The algorithm can detect negative cycles in the graph, which are cycles that have a negative weight.

Here's how Bellman-Ford works:

1. Initialize the distances to all nodes as infinity except the source node, which is set to 0.
2. Relax each edge in the graph V-1 times, where V is the number of nodes in the graph. This means that for each edge (u, v), if the distance to v can be improved by going through u, then update the distance to v.
3. Check for negative cycles. If a negative cycle is found, then the algorithm reports that the graph contains a negative cycle.

Bellman-Ford has a time complexity of O(VE), where V is the number of nodes in the graph and E is the number of edges in the graph.`]:
`Беллман-Форд — это алгоритм динамического программирования, который может обрабатывать ребра с отрицательным весом в графе. Он работает путем многократного ослабления каждого ребра в графе и отслеживает минимальное расстояние от исходного узла до каждого узла в графе. Алгоритм может обнаруживать в графе отрицательные циклы, то есть циклы с отрицательным весом.

Вот как работает Bellman-Ford:

1. Инициализируйте расстояния до всех узлов как бесконечность, кроме исходного узла, для которого установлено значение 0.
2. Расслабить каждое ребро в графе V-1 раз, где V — количество узлов в графе. Это означает, что для каждого ребра (u, v), если расстояние до v можно улучшить, пройдя через u, то обновить расстояние до v.
3. Проверьте наличие отрицательных циклов. Если отрицательный цикл найден, то алгоритм сообщает, что граф содержит отрицательный цикл.

Беллман-Форд имеет временную сложность O(VE), где V — количество узлов в графе, а E — количество ребер в графе.`,
[`Dijkstra is a greedy algorithm that can handle only non-negative weight edges in a graph. It works by maintaining a priority queue of nodes that have not been visited yet, and it chooses the node with the smallest distance from the source node to visit next.

Here's how Dijkstra works:

1. Initialize the distances to all nodes as infinity except the source node, which is set to 0.
2. Add the source node to a priority queue.
3. While the priority queue is not empty, do the following:
• Remove the node with the smallest distance from the priority queue.
• For each neighbor of the node, update the distance if a shorter path is found.
• If the distance to a neighbor is updated, add the neighbor to the priority queue.

Dijkstra has a time complexity of O((V+E)logV), where V is the number of nodes in the graph and E is the number of edges in the graph. The logV factor comes from the time required to maintain the priority queue.`]:
`Дейкстра — это жадный алгоритм, который может обрабатывать только ребра с неотрицательным весом в графе. Он работает, поддерживая приоритетную очередь узлов, которые еще не были посещены, и выбирает узел с наименьшим расстоянием от исходного узла для посещения следующим.

Вот как работает Дейкстра:

1. Инициализируйте расстояния до всех узлов как бесконечность, кроме исходного узла, для которого установлено значение 0.
2. Добавьте исходный узел в приоритетную очередь.
3. Пока приоритетная очередь не пуста, делаем следующее:
• Удалить узел с наименьшим расстоянием из приоритетной очереди.
• Для каждого соседа узла обновить расстояние, если найден более короткий путь.
• Если расстояние до соседа обновляется, добавить соседа в очередь приоритетов.

Дейкстра имеет временную сложность O((V+E)logV), где V — количество узлов в графе, а E — количество ребер в графе. Фактор logV зависит от времени, необходимого для поддержания приоритетной очереди.`
};

export const languages = ["english", "русский"];

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "english",
  fallbackLng: "english",
  interpolation: { escapeValue: false },
  resources: {
    русский: { translation: translationRu },
  },
});

export default i18n;

using System;

class StackImplementation
{
    class Stack
    {
        private const int MAX_SIZE = 10;
        private int[] array;
        private int top;

        public Stack()
        {
            array = new int[MAX_SIZE];
            top = -1;
        }

        public void Push(int value)
        {
            if (top >= MAX_SIZE - 1)
            {
                Console.WriteLine("Stack Overflow - Cannont push more elements.");
            }
            else
            {
                array[++top] = value;
                Console.WriteLine($"Pushed {value} onto the stack.");
            }
        }
        public int Pop()
        {
            if (top < 0)
            {
                Console.WriteLine("Stack Underflow - Cannont pop from an empty stack.");
                return -1;
            }
            else
            {
                int poppedValue = array[top--];
                Console.WriteLine($"Popped {poppedValue} from the stack.");
                return poppedValue;
            }
        }
        public void PrintStack()
        {
            if (top < 0)
            {
                Console.WriteLine("Stack is empty.");
            }
            else
            {
                Console.WriteLine("Current Stack: ");
                for (int i = 0; i <= top; i++)
                {
                    Console.WriteLine(array[i] + " ");
                }
                Console.WriteLine();
            }
        }
    }

    static void Main()
    {
        Stack stack = new Stack();

        stack.Push(10);
        stack.Push(20);
        stack.Push(30);

        stack.PrintStack();

        int poppedValue = stack.Pop();
        Console.WriteLine($"Popped Value: {poppedValue}");

        stack.PrintStack();
    }
}
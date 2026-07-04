export const codeTemplates: Record<string, string> = {
  javascript: `function greet(name) {
  return "Hello " + name;
}`,

  typescript: `function greet(name: string): string {
  return "Hello " + name;
}`,

  python: `def greet(name):
    return f"Hello {name}"`,

  java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`,

  cpp: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello World";
    return 0;
}`,

  c: `#include <stdio.h>

int main() {
    printf("Hello World");
    return 0;
}`,

  go: `package main

import "fmt"

func main() {
    fmt.Println("Hello World")
}`,

  rust: `fn main() {
    println!("Hello World");
}`,
};
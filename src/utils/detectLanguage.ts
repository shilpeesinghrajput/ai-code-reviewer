export function detectLanguage(code: string): string {
  const text = code.toLowerCase();

  if (
    text.includes("def ") ||
    text.includes("import os") ||
    text.includes("print(")
  ) {
    return "python";
  }

  if (
    text.includes("public class") ||
    text.includes("system.out.println")
  ) {
    return "java";
  }

  if (
    text.includes("#include") ||
    text.includes("cout <<")
  ) {
    return "cpp";
  }

  if (
    text.includes("#include") ||
    text.includes("printf(")
  ) {
    return "c";
  }

  if (
    text.includes("package main") ||
    text.includes("fmt.println")
  ) {
    return "go";
  }

  if (
    text.includes("fn main") ||
    text.includes("println!")
  ) {
    return "rust";
  }

  if (
    text.includes("interface ") ||
    text.includes(": string") ||
    text.includes(": number")
  ) {
    return "typescript";
  }

  return "javascript";
}
type DebouncedFunction<T extends (...args: any[]) => any> = (
  func: T,
  wait: number
) => (...args: Parameters<T>) => void;

export const debounce: DebouncedFunction<(...args: any[]) => any> = (
  func,
  wait
) => {
  let timeout: ReturnType<typeof setTimeout> | undefined;

  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

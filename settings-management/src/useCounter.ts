


import useExtensions from './useExtensions';

export default function useCounter (): number {
  const { count } = useExtensions();

  return count;
}

"use client";

import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "@/config/site";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface ContextProps {
  offset: number;
  setOffset: Dispatch<SetStateAction<number>>;
  limit: number;
  setLimit: Dispatch<SetStateAction<number>>;
}

const PaginationContext = createContext<ContextProps>({
  offset: DEFAULT_OFFSET,
  setOffset: (): number => DEFAULT_OFFSET,
  limit: DEFAULT_LIMIT,
  setLimit: (): number => DEFAULT_LIMIT,
});

const PaginationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [offset, setOffset] = useState(DEFAULT_OFFSET);
  const [limit, setLimit] = useState(DEFAULT_LIMIT);

  return (
    <PaginationContext.Provider value={{ offset, setOffset, limit, setLimit }}>
      {children}
    </PaginationContext.Provider>
  );
};

const usePaginationContext: () => ContextProps = () =>
  useContext(PaginationContext);

export { PaginationContextProvider, usePaginationContext };

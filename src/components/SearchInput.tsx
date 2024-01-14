"use client";

import { SearchIcon } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import useQueryParams from "@/hooks/useQueryParams";
import { TSearchInput, searchInputSchema } from "@/lib/schemas/search-input";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SearchInput() {
  const { setQueryParams } = useQueryParams();

  const form = useForm<TSearchInput>({
    resolver: zodResolver(searchInputSchema),
    defaultValues: {
      input: "",
    },
  });

  function onSubmit(values: TSearchInput) {
    setQueryParams({ q: values.input });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="inline-flex gap-1 pb-[14px]"
      >
        <FormField
          control={form.control}
          name="input"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="search"
                  placeholder="Search Pokemon..."
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="icon" variant="ghost">
          <SearchIcon />
        </Button>
      </form>
    </Form>
  );
}

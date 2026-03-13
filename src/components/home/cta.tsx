"use client";
import { Wrapper } from "../shared/wrapper";
import { Button } from "../ui/button";
import { InputGroup, InputGroupInput } from "../ui/input-group";

export function Cta() {
  return (
    <Wrapper className="py-16">
      <section className="flex flex-col items-center justify-center gap-8 relative w-full bg-gradient-to-r from-[#F0075A] to-[#501283] h-80 text-center text-white">
        <div className="flex flex-col items-center gap-4 z-10">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-mono font-semibold max-w-4xl tracking-tight">
            Sign up for early Alpha
          </h2>
          <p className="text-lg md:text-lg lg:text-2xl max-w-lg font-light opacity-90">
            Subscribe now to get early alpha from our creators and 10X your
            portfolio
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full max-w-md gap-4 "
        >
          <InputGroupInput
            type="email"
            placeholder="Sign up now"
            required
            className="h-10 bg-white! text-black!"
          />
          <Button type="submit" className=" h-10 px-6 rounded-none">
            Get early Alpha
          </Button>
        </form>

        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none" />
      </section>
    </Wrapper>
  );
}

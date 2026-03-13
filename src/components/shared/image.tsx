"use client";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";
import Img, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "width" | "height"> & {
  containerClassName?: string;
  withBackdrop?: boolean;
  rounded?: boolean;
};

const Image = ({
  className,
  alt,
  loading = "lazy",
  containerClassName,
  withBackdrop,
  rounded,
  ...props
}: Props) => {
  const [isLoading, setLoading] = useState(true);
  return useMemo(
    () => (
      <div
        className={cn(
          "w-full overflow-hidden group transition bg-transparent duration-300 relative h-full object-cover",
          isLoading && "blur-sm",
          rounded && "rounded-xl",
          containerClassName,
        )}
      >
        <Img
          {...props}
          onLoad={() => setLoading(false)}
          alt={alt || "Background of a beautiful project"}
          fill={true}
          sizes="100"
          loading={loading}
          decoding="async"
          className={cn(
            " object-cover transition  duration-1000 w-full h-full",
            isLoading ? "blur-sm" : "blur-none",
            className,
          )}
        />
        {withBackdrop && (
          <div
            className={cn(
              "absolute w-full inset-0 h-full bg-gradient-to-b from-black/30 to-black/70 ios:z-10",
              rounded && "rounded-xl",
            )}
          />
        )}
      </div>
    ),
    [props],
  );
};

export default Image;

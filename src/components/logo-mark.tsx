import Image from "next/image";

type LogoMarkProps = {
  size?: number;
  priority?: boolean;
};

export function LogoMark({ size = 48, priority = false }: LogoMarkProps) {
  return (
    <span
      className="logo-mark"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Image
        src="/assets/brand/monogram.png"
        alt=""
        width={size}
        height={size}
        priority={priority}
        sizes={`${size}px`}
      />
    </span>
  );
}

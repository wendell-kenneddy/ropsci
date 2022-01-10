import Image from 'next/image';

export function TriangleImage() {
  return (
    <div
      className={`
        absolute
        self-center justify-self-center
        -z-50
        w-3/5
        h-3/5
        xs:h-[55%] xs:w-[55%]
      `}
    >
      <div className="w-full h-full relative">
        <Image src="/bg-triangle.svg" priority alt="Triângulo" layout="fill" />
      </div>
    </div>
  );
}

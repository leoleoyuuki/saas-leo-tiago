export default function Footer() {
  return (
    <div className="w-full h-36 bg-[#6b3fa9] flex flex-col items-center justify-center gap-2 bg-gradient-to-t from-[#6b3fa9] to-[#000] p-4 ">
      <h1 className="text-gray-300">
        2023 BoostSync - Todos os direitos reservados&copy;
      </h1>
      <nav>
        <ul className="text-gray-300 text-base flex gap-8 [text-shadow:_3px_3px_8px_rgb(255_255_255_/_15%)]">
          <li>item-1</li>
          <li>item-2</li>
          <li>item-3</li>
        </ul>
      </nav>
    </div>
  );
}
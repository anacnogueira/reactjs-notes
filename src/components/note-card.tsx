export function NoteCard() {
  return (
    <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
      <span className="text-small font-medium text-slate-300">Há 2 dias</span>
      <p className="text-small leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        tenetur eos assumenda vel nesciunt magni. Aperiam sequi tempora impedit
        ratione ipsam repellat veniam, unde, laudantium nam aliquam, error in
        quos!
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </div>
  );
}

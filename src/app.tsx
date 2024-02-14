import logo from "./assets/logo-nlw-expert.svg";

export default function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert" />
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-state-500"
        />
      </form>
      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <div className="rounded-md bg-slate-700 p-5 space-y-3 overflow-hidden">
          <span className="text-small font-medium text-slate-200">
            Adicionar nota
          </span>
          <p className="text-small leading-6 text-slate-400">
            Grave uma nota em aúdio que será convertida para texto
            automaticamente
          </p>
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden">
          <span className="text-small font-medium text-slate-300">
            Há 2 dias
          </span>
          <p className="text-small leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            tenetur eos assumenda vel nesciunt magni. Aperiam sequi tempora
            impedit ratione ipsam repellat veniam, unde, laudantium nam aliquam,
            error in quos!
          </p>
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden">
          <span className="text-small font-medium text-slate-300">
            Há 4 dias
          </span>
          <p className="text-small leading-6 text-slate-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            quaerat veniam numquam expedita possimus doloremque incidunt minima
            culpa, sapiente repudiandae excepturi repellat, nihil mollitia natus
            quos vero, adipisci repellendus corporis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-slate-950 p-6 text-slate-100'>
      <div className='w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-sm'>
        <div className='flex items-center space-x-3'>
          <span className='relative flex h-3 w-3'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75'></span>
            <span className='relative inline-flex h-3 w-3 rounded-full bg-emerald-500'></span>
          </span>
          <h1 className='text-xl font-semibold tracking-tight text-white'>
            Tailwind CSS
          </h1>
        </div>

        <p className='mt-3 text-sm text-slate-400'>
          Si ves esta tarjeta oscura con bordes redondeados, sombra, el
          indicador verde parpadeando y el botón funcional, Tailwind está
          configurado correctamente.
        </p>

        <div className='mt-6 flex items-center justify-between border-t border-slate-800/80 pt-6'>
          <span className='text-xs font-mono text-slate-500'>
            Estado: Listo
          </span>
          <button
            onClick={() => alert('Tailwind + TS funcionado')}
            className='rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 transition-colors hover:bg-emerald-400 active:scale-95'
          >
            Probar click
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="text-xl font-semibold tracking-widest text-zinc-800 uppercase block mb-6">
              Artafon
            </span>
            <p className="text-sm text-zinc-500 font-light max-w-sm">
              Profesjonalne systemy osłon motocyklowych. Projektowane i produkowane z myślą o najwyższej wytrzymałości i precyzji.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-6">Produkty</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="/#products" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Osłony Silnika</a></li>
              <li><a href="/#products" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Osłony Chłodnicy</a></li>
              <li><a href="/#products" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Gmole</a></li>
              <li><a href="/#products" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Akcesoria</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-6">Firma</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="/#o-nas" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">O nas</a></li>
              <li><a href="/#technologia" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Technologia</a></li>
              <li><a href="/#kontakt" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Kontakt</a></li>
              <li><a href="/polityka-prywatnosci" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Polityka Prywatności</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-100">
          <p className="text-xs text-zinc-400">
            &copy; {new Date().getFullYear()} Artafon. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors">Instagram</a>
            <a href="#" className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors">Facebook</a>
            <a href="#" className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

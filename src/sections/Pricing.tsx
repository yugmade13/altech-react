import Section from '../components/Section.tsx';
import products from '../utils/products.ts';

function Pricing() {
  return (
    <Section id="pricing">
      <div>
        <div className="mx-auto grid gap-4 lg:max-w-[1024px] md:grid-cols-2 lg:grid-cols-3">
          {products.map(({ title, price, isFavorite, spec }) => (
            <div key={title} className={`card bg-base-100 shadow-xl lg:max-w-[350px] ${isFavorite ? 'bg-slate-800 text-white lg:scale-110 lg:z-10' : ''}`}>
              <div className="card-body">
                <div className="stat place-items-center gap-y-2">
                  <div className={`stat-title ${isFavorite ? 'text-base-100' : ''}`}>
                    {title}
                  </div>
                  <div className="stat-value">
                    {price}
                  </div>
                  {isFavorite && (
                    <div className="badge badge-primary badge-outline">
                      Favorite
                    </div>
                  )}
                </div>
                <ul className="min-h-[200px] space-y-2.5">
                  {spec.map((list, index) => (
                    <li key={index} className="flex items-start justify-start gap-x-2">
                      <span className="shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                        </svg>
                      </span>
                      <span className={`paragraph-list ${isFavorite ? 'text-base-200' : ''}`}>
                        {list}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="card-actions justify-center mt-6">
                  <button className="btn btn-sm btn-primary">
                    See Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Pricing;
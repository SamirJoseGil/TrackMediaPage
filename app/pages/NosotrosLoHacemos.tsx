
{/* SECTION 12: Nosotros lo hacemos posible */ }
export default function NosotrosLoHacemos() {
    return (
        <section className="py-20 px-6 bg-tracked-white dark:bg-tracked-black">
            <div className="container mx-auto">
                <div className="flex flex-col space-y-8">
                    {[1, 2, 3].map((item, index) => (
                        <div key={index} className="animate-on-scroll">
                            <img
                                src={`https://placehold.co/1200x400?text=Portfolio+${item}`}
                                alt={`Portfolio ${item}`}
                                className="rounded-xl shadow-lg w-full"
                            />
                        </div>
                    ))}

                    <h2 className="text-3xl md:text-5xl font-bold mt-8 text-center animate-on-scroll text-primary">
                        Nosotros lo hacemos posible
                    </h2>
                </div>
            </div>
        </section>
    )
}
import { catCites } from "@/Data";
import Link from "next/link";
import React from "react";

const CategoryCitySection = ({ id }) => {
    return (
        <>
            <section className="py-5 md:py-10 bg-gray-100 px-4 md:px-20">


                <h2 className="my-5 text-2xl md:text-5xl font-bold  text-[#304B99]">Our Supply Network</h2>
                <div className="flex gap-2 px-2 flex-wrap overflow-hidden ">


                    {catCites.map(({ href, label }, idx) => (
                        <Link
                            href={"/category/"+ id + href}
                            key={idx}
                            className="hover:underline hover:scale-105 hover:duration-300 "
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
};

export default CategoryCitySection;
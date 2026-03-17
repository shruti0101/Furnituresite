import React from 'react'
import CategoryCityPage from './CategoryCityPage'
import { notFound } from "next/navigation";
import { categoryCityContent } from './data';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const [categorySlug, citySlug] = slug.split("-in-");

    const format = (text) =>
        text
            .split("-")
            .map(w => w[0].toUpperCase() + w.slice(1))
            .join(" ");

    const cityName = format(citySlug);

    if (categorySlug === "computer-table") {
        return {
            title: `Computer Table in ${cityName} | Computer Table Manufacturer in ${cityName} | DK Modular Contractor`,
            description: `Buy high-quality computer tables in ${cityName} from DK Modular Contractor. We are a trusted computer table manufacturer and supplier in ${cityName} offering modular, ergonomic, and customized computer tables for offices, schools, and home use at factory prices.`,
        };
    }

    if (categorySlug === "modular-office-workstation") {
        return {
            title: `Modular Office Workstation in ${cityName} | Modular Office Workstation Manufacturer in ${cityName}`,
            description: `DK Modular Contractor is a trusted modular office Workstation manufacturer in ${cityName}. We offer customized modular workstations, office tables, storage units, conference tables, and complete office furniture solutions at competitive factory prices across ${cityName}.`,
        };
    }

    if (categorySlug === "office-workstation") {
        return {
            title: `Office Workstation Furniture in ${cityName} | Workstation Furniture Manufacturer in ${cityName}`,
            description: `DK Modular Contractor is a trusted office workstation furniture manufacturer in ${cityName} offering modular workstations, cubicle systems, open-plan seating, and customized workstation solutions at factory prices across ${cityName}.`,
        };
    }

    if (categorySlug === "office-tables") {
        return {
            title: `Office Tables in ${cityName} | Office Table Manufacturer in ${cityName} | DK Modular Contractor`,
            description: `DK Modular Contractor is a leading office table manufacturer in ${cityName} offering executive tables, manager desks, staff tables, conference tables, and customized office tables at factory prices. Premium quality office tables available across ${cityName}.`,
        };
    }
}

const Page = async ({ params }) => {
    const { slug } = await params;
    if (!slug.includes("-")) {
        notFound();
    }

    const parts = slug.split("-in-")
    const citySlug = parts.pop();
    const categorySlug = parts.join("-");

    const format = (text) => text.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");

    const categoryName = format(categorySlug);
    const cityName = format(citySlug);
    const content = categoryCityContent[categorySlug];

    return (
        <CategoryCityPage categoryName={categoryName} cityName={cityName} content={content} />
    )
}

export default Page;
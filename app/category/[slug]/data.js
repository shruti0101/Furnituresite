import {
    Home,
    Landmark,
    Building2,
    Server,
    GraduationCap
} from "lucide-react";
import Link from "next/link";

export const categoryCityContent = {
    "computer-table": {
        mainImg: "/10.webp",
        h2: (city) => `Computer Table Manufacturer in ${city}`,
        intro: (city) => (
            <>
                DK Modular Contractor is a leading{" "}
                <Link
                    href={`/categories/computer-table`}
                    className="text-gray-900 font-semibold hover:underline"
                >
                    Computer Table Manufacturer
                </Link>{" "}
                in {city}, offering modern, ergonomic, and space-saving computer table solutions for offices, IT companies, educational institutions, home offices, coworking spaces, and commercial interiors across {city}.
            </>
        ),
        intro2: (city) => `We specialize in high-quality computer tables designed to enhance productivity, ensure comfort, and optimize workspace utilization. Our computer tables are manufactured using durable materials, smart storage solutions, and contemporary designs suitable for both compact rooms and large office setups.`,
        intro3: (city) => `From compact home computer tables to large-scale office computer desk installations, DK Modular Contractor combines precision manufacturing, premium finishes, and long-term durability—making us a trusted choice for ${city} growing commercial and residential sector.`,
        introImg: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766126187/Modular_Wooden_Computer_Table_ntdszw.avif",

        whyChooseHeading: (city) => `Why Choose DK Modular Computer Tables in ${city}?`,
        whyChoose: (city) => [
            {
                title: "One-Stop Computer Table Solution",
                desc: "We offer a complete range of computer tables including standard computer desks, corner computer tables, modular computer tables, study tables with storage, and customized workstation-style computer desks—ideal for homes, offices, IT labs, and institutions.",
            },
            {
                title: "Customizable Computer Tables",
                desc: "Choose from multiple sizes, finishes, storage options, keyboard trays, CPU cabinets, cable management systems, and ergonomic add-ons. We provide custom-designed computer tables for bulk office projects and home setups.",
            },
            {
                title: "Manufacturer-Direct Pricing",
                desc: `As a direct manufacturer, DK Modular Contractor supplies computer tables in ${city} at factory prices, ensuring cost-effective solutions for homeowners, businesses, schools, architects, and interior designers.`,
            },
            {
                title: "Design, Delivery & Installation Support",
                desc: "Our expert team assists with space planning, manufacturing, delivery, and installation to ensure seamless execution and long-lasting performance.",
            },
            {
                title: `Trusted by Professionals & Institutions`,
                desc: `Our computer tables are widely used by corporate offices, IT companies, educational institutions, training centers, and home users across ${city} for their durability and smart design.`,
            }],

        Details: (city) => ({
            title: `Computer Table Types We Offer`,

            sections: [
                {
                    title: "Modular Computer Tables",
                    points: [
                        "Flexible and customizable designs for modern offices.",
                    ]
                },
                {
                    title: "Corner Computer Tables",
                    points: [
                        "Space-saving designs ideal for compact rooms."
                    ]
                },
                {
                    title: "Study Computer Tables",
                    points: [
                        "Functional tables with storage for students and home use."
                    ]
                },
                {
                    title: "Office Computer Desks",
                    points: [
                        "Professional designs suitable for corporate environments."
                    ]
                },
                {
                    title: "Computer Lab Tables",
                    points: [
                        "Durable and standardized tables for schools and institutions."
                    ]
                }
            ]
        }),

        KeyFeatures: {
            title: `Key Features of DK Modular Computer Tables`,
            img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766126593/Wooden_Computer_Table_pqn2ir.webp",
            imgPostion: { objectPosition: "50% 45%" },

            list: [
                "Ergonomic and space-efficient designs",
                "High-quality engineered wood and metal frames",
                "Premium finishes and modern aesthetics",
                "Built-in keyboard trays and CPU cabinets",
                "Efficient cable management systems",
                "Durable and low-maintenance construction",
            ]
        },

        industries: [
            {
                title: "Corporate Offices",
                desc: "Compact and professional computer desk solutions.",
                icon: Building2
            },
            {
                title: "IT & Software Companies",
                desc: "High-density seating with organized layouts.",
                icon: Server
            },
            {
                title: "Educational Institutions",
                desc: "Computer lab tables and student desks.",
                icon: GraduationCap
            },
            {
                title: "Home Offices",
                desc: "Stylish and space-saving computer tables for work-from-home setups.",
                icon: Home
            },
            {
                title: `Government & Institutional Offices`,
                desc: "Standardized and durable computer furniture solutions.",
                icon: Landmark
            }
        ],

        caseStudy: (city) => ({
            title: `Case Study: Computer Table Installation for ${city} IT Project`,

            meta: {
                client: `IT Training Institute`,
                location: `${city}`,
                project: "Computer Lab Setup"
            },

            scope: [
                "Design & manufacture of computer lab tables",
                "Organized cable management for multiple systems",
                "On-site installation and execution"
            ],

            results: [
                "Improved workspace organization",
                "Enhanced user comfort",
                "Professional and clean lab appearance",
                "Long-lasting durability with minimal maintenance"
            ],

            conclusion: `This project highlights DK Modular Contractor’s expertise as a trusted Computer Table Manufacturer in ${city}.`
        }),

        faqs: (city) => ({
            title: `Computer Tables in ${city} – FAQs`,

            items: [
                {
                    q: "What is a computer table?",
                    a: "A computer table is specially designed furniture that provides space for a computer system, accessories, and comfortable working."
                },
                {
                    q: `Are DK Modular computer tables customizable?`,
                    a: `Yes, we offer fully customizable computer table designs based on space and client requirements.`
                },
                {
                    q: `Do you handle bulk computer table projects in ${city}`,
                    a: "Yes, we specialize in bulk supply and installation for offices, schools, and institutions."
                },
                {
                    q: "Are your computer tables durable?",
                    a: "Yes, our tables are manufactured using high-quality materials for long-term usage."
                },
                {
                    q: `Do you provide installation services?`,
                    a: `Yes, we provide complete delivery and installation support across ${city}.`
                }
            ]
        }),

        about: (city) => ({
            title: `Looking for the Best Computer Table Manufacturer in ${city}?`,

            subtitle: "Contact DK Modular Contractor today for pricing, catalogs, or customized computer table solutions.",

            description: `We help you select and install the perfect computer table based on your space, usage requirements, and budget—ideal for homes, offices, and institutions across ${city}.`
        }),

        aboutImg: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766126409/office_computer_desk_uf8jhf.webp",
    },

    "modular-office-workstation": {
        mainImg: "/10.webp",
        h2: (city) => `Modular Office Workstation Manufacturer in ${city}`,
        intro: (city) => (
            <>
                DK Modular Contractor is a leading{" "}
                <Link
                    href={`/categories/modular-office-workstation`}
                    className="text-gray-900 font-semibold hover:underline"
                >
                    Modular Office Workstation Manufacturer
                </Link>{" "}
                in {city}, delivering modern, ergonomic, and space-efficient furniture solutions for corporate offices, IT companies, coworking spaces, startups, and commercial interiors across {city}.
            </>
        ),
        intro2: (city) => `We specialize in high-quality modular office workstation designed to enhance productivity, optimize workspace utilization, and create a professional working environment. Our furniture is manufactured using durable materials, smart storage concepts, and contemporary designs suitable for both small offices and large corporate setups.`,
        intro3: (city) => `From modular workstations and office desks to storage units and conference tables, DK Modular Contractor combines precision manufacturing, premium finishes, and long-term durability—making us a preferred choice for ${city} growing corporate and commercial sector.`,
        introImg: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766228880/0993f5_9f89cc419f0b4d46a0eb22d6c94330df_mv2_icqzns.avif",

        whyChooseHeading: (city) => `Why Choose DK Modular Office Workstation in ${city}?`,
        whyChoose: (city) => [
            {
                title: "Complete Modular Office Workstation Solutions",
                desc: "We offer a comprehensive range of modular office workstation including workstations, office desks, conference tables, reception counters, storage cabinets, office partitions, and executive furniture—ideal for corporate offices, IT parks, coworking spaces, and commercial projects.",
            },
            {
                title: "Customizable Designs",
                desc: "Choose from multiple sizes, finishes, layouts, storage options, and ergonomic features. We provide custom-designed modular office furniture tailored to your office space, team structure, and brand identity.",
            },
            {
                title: "Manufacturer-Direct Pricing",
                desc: `As a direct manufacturer, DK Modular Contractor supplies modular office workstation in ${city} at competitive factory prices, ensuring cost-effective solutions for businesses, startups, architects, and interior designers.`,
            },
            {
                title: "End-to-End Project Support",
                desc: "Our experienced team assists with space planning, layout design, manufacturing, delivery, installation, and after-sales service—ensuring seamless project execution and long-lasting performance.",
            },
            {
                title: `Trusted by Corporate Clients`,
                desc: `Our modular office workstation is widely used by corporate offices, MNCs, IT companies, startups, and institutions across ${city}, trusted for quality craftsmanship, durability, and timely delivery.`,
            }],

        Details: (city) => ({
            title: `Modular Office Workstation Range`,

            sections: [
                {
                    title: "Modular Office Workstations",
                    points: [
                        "Flexible layouts for collaborative and individual workspaces.",
                    ]
                },
                {
                    title: "Executive & Manager Tables",
                    points: [
                        "Premium designs with enhanced storage and aesthetics."
                    ]
                },
                {
                    title: "Conference & Meeting Tables",
                    points: [
                        "Functional and modern tables for boardrooms and meeting areas."
                    ]
                },
                {
                    title: "Reception Desks",
                    points: [
                        "Stylish reception counters to create a professional first impression."
                    ]
                },
                {
                    title: "Office Storage Solutions",
                    points: [
                        "Filing cabinets, pedestal units, and storage cupboards."
                    ]
                }
            ]
        }),

        KeyFeatures: {
            title: `Key Features of Our Modular Office Workstation`,
            img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766052989/GallaryImg_273_0_1682752254_pgkzw6.webp",
            imgPostion: { objectPosition: "50% 45%" },

            list: [
                "Ergonomic and space-saving designs",
                "High-quality engineered wood and metal frames",
                "Premium finishes and modern aesthetics",
                "Efficient cable management systems",
                "Customizable layouts and dimensions",
                "Durable and low-maintenance construction",
            ]
        },

        industries: [
            {
                title: "Corporate Offices",
                desc: "Complete modular setups for small, medium, and large enterprises.",
                icon: Building2
            },
            {
                title: "IT & Software Companies",
                desc: "High-density seating and collaborative workspace solutions.",
                icon: Server
            },
            {
                title: "Educational Institutions",
                desc: "Flexible and reconfigurable modular furniture systems.",
                icon: GraduationCap
            },
            {
                title: "Home Offices",
                desc: "Professional interiors with modern furniture designs.",
                icon: Home
            },
            {
                title: `Government & Institutional Offices`,
                desc: "Durable and standardized modular office workstation solutions.",
                icon: Landmark
            }
        ],

        caseStudy: (city) => ({
            title: `Case Study: Modular Office Workstation Setup for ${city} Corporate Project`,

            meta: {
                client: `Corporate IT Firm`,
                location: `${city}`,
                project: "Complete Office Interior & Furniture Setup"
            },

            scope: [
                "Design & manufacture of modular workstations and executive cabins",
                "Installation of conference tables and storage systems",
                "On-site execution and project coordination"
            ],

            results: [
                "Optimized space utilization",
                "Improved workflow and employee comfort",
                "Modern and professional office aesthetics",
                "Long-term durability with minimal maintenance"
            ],

            conclusion: `This project highlights DK Modular Contractor’s expertise as a trusted Modular Office Workstation Manufacturer in ${city}.`
        }),

        faqs: (city) => ({
            title: `Modular Office Workstation in ${city} – FAQs`,

            items: [
                {
                    q: "What is modular office workstation?",
                    a: "Modular office workstation consists of flexible and customizable furniture units that can be arranged or reconfigured according to workspace requirements."
                },
                {
                    q: `Do you offer customized modular furniture solutions?`,
                    a: `Yes, we provide fully customized modular office workstation based on layout, space, and business needs.`
                },
                {
                    q: `Do you handle bulk office furniture projects in ${city}`,
                    a: `Yes, we specialize in turnkey and bulk modular office workstation projects across ${city}`
                },
                {
                    q: "Is your office furniture durable?",
                    a: "Yes, our furniture is manufactured using high-quality materials for long-lasting performance."
                },
                {
                    q: `Do you provide installation services?`,
                    a: `Yes, we offer complete delivery, installation, and after-sales support.`
                }
            ]
        }),

        about: (city) => ({
            title: `Looking for the Best Modular Office Workstation Manufacturer in ${city}?`,

            subtitle: "Contact DK Modular Contractor today for pricing, catalogs, and customized modular office workstation solutions.",

            description: `We help you design and install the perfect office furniture layout based on your workspace size, team requirements, and budget—ideal for businesses across ${city}.`
        }),

        aboutImg: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766056316/linear-modular-office-workstation-1000x1000_birhsm.webp",
    },

    "office-workstation": {
        mainImg: "/10.webp",
        h2: (city) => `Office Workstation Furniture Manufacturer in ${city}`,
        intro: (city) => (
            <>
                DK Modular Contractor is a leading{" "}
                <Link
                    href={`/categories/office-workstation`}
                    className="text-gray-900 font-semibold hover:underline"
                >
                    Office Workstation Furniture Manufacturer
                </Link>{" "}
                in {city}, delivering modern, ergonomic, and space-efficient workstation furniture solutions for corporate offices, IT companies, startups, coworking spaces, and commercial interiors across {city}.
            </>
        ),
        intro2: (city) => `We specialize in high-quality office workstation furniture designed to improve productivity, enhance employee comfort, and optimize workspace utilization. Our workstation systems are manufactured using durable materials, intelligent layouts, and contemporary designs suitable for both compact offices and large corporate environments.`,
        intro3: (city) => `From modular desk clusters to complete open-plan workstation setups, DK Modular Contractor combines precision manufacturing, premium finishes, and long-term durability—making us a preferred choice for office workstation furniture in ${city} corporate sector.`,
        introImg: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766125154/Custom-Steel-Leg-Structure-Open-Mudular-4-Person-6-Person-Face-To-Face-Linear-Workstation-Desk-Office-Furniture-Workstations_npb5ot.avif",

        whyChooseHeading: (city) => `Why Choose DK Modular Office Workstation Furniture in ${city}?`,
        whyChoose: (city) => [
            {
                title: "Complete Workstation Furniture Solutions",
                desc: "We offer a comprehensive range of office workstation furniture including modular workstations, cubicle systems, linear desk setups, L-shaped and U-shaped workstations, collaborative benching systems, and customized layouts—ideal for corporate and commercial projects.",
            },
            {
                title: "Customizable Designs & Layouts",
                desc: "Choose from multiple panel heights, finishes, storage options, cable management systems, and ergonomic accessories. We provide tailor-made workstation furniture solutions based on office size, department structure, and workflow requirements.",
            },
            {
                title: "Manufacturer-Direct Pricing",
                desc: `As a direct manufacturer, DK Modular Contractor supplies office workstation furniture in ${city} at competitive factory prices, ensuring cost-effective solutions for businesses, architects, and interior designers.`,
            },
            {
                title: "End-to-End Project Execution",
                desc: "Our experienced team assists with space planning, layout design, manufacturing, delivery, installation, and after-sales support—ensuring seamless execution and long-term performance.",
            },
            {
                title: `Trusted by Corporate Clients`,
                desc: `Our office workstation furniture is widely used by corporate offices, IT companies, MNCs, startups, and institutions across ${city}, recognized for quality, durability, and timely delivery.`,
            }],

        Details: (city) => ({
            title: `Office Workstation Furniture Range`,

            sections: [
                {
                    title: "Modular Workstations",
                    points: [
                        "Flexible and reconfigurable workstation systems.",
                    ]
                },
                {
                    title: "Cubicle Workstations",
                    points: [
                        "Privacy-focused workstation solutions for focused tasks."
                    ]
                },
                {
                    title: "Open Plan Workstations",
                    points: [
                        "Collaborative seating arrangements for large teams."
                    ]
                },
                {
                    title: "Executive & Manager Workstations",
                    points: [
                        "Premium workstation furniture with enhanced storage."
                    ]
                },
                {
                    title: "Bench Workstations",
                    points: [
                        "Space-saving seating solutions for high-density offices."
                    ]
                }
            ]
        }),

        KeyFeatures: {
            title: `Key Features of Our Office Workstation Furniture`,
            img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766123852/c_call_center_workstation_qbb70r.webp",
            imgPostion: { objectPosition: "50% 70%" },

            list: [
                "Ergonomic and space-saving designs",
                "High-quality boards and metal structures",
                "Premium laminates and modern finishes",
                "Smart cable management systems",
                "Customizable layouts and storage options",
                "Durable, low-maintenance construction",
            ]
        },

        industries: [
            {
                title: "Corporate Offices",
                desc: "Complete workstation setups for small, medium, and large enterprises.",
                icon: Building2
            },
            {
                title: "IT & Software Companies",
                desc: "High-density seating with efficient workspace layouts.",
                icon: Server
            },
            {
                title: "Coworking Spaces",
                desc: "Flexible and modular workstation furniture systems.",
                icon: GraduationCap
            },
            {
                title: "Commercial Offices",
                desc: "Professional interiors with modern workstation designs.",
                icon: Home
            },
            {
                title: `Government & Institutional Offices`,
                desc: "Durable and standardized office workstation solutions.",
                icon: Landmark
            }
        ],

        caseStudy: (city) => ({
            title: `Case Study: Office Workstation Furniture Installation in ${city}`,

            meta: {
                client: `IT Solutions Company`,
                location: `${city}`,
                project: "Corporate Office Workspace Development"
            },

            scope: [
                "Design & manufacture of modular workstations furniture",
                "Installation of open-plan seating and cubicle systems",
                "On-site execution and coordination"
            ],

            results: [
                "Optimized office floor space",
                "Improved workflow and team collaboration",
                "Modern and professional office aesthetics",
                "Long-lasting durability with minimal maintenance"
            ],

            conclusion: `This project demonstrates DK Modular Contractor’s expertise as a reliable Office Workstation Furniture Manufacturer in ${city}.`
        }),

        faqs: (city) => ({
            title: `Office Workstation Furniture in ${city} – FAQs`,

            items: [
                {
                    q: "What is office workstation furniture?",
                    a: "Office workstation furniture refers to modular desk systems and seating arrangements designed to provide organized and efficient workspaces for employees."
                },
                {
                    q: `Do you offer customized workstation furniture?`,
                    a: `Yes, we provide fully customized workstation furniture solutions based on layout, space, and business needs.`
                },
                {
                    q: `Do you handle bulk projects in ${city}`,
                    a: `Yes, we specialize in bulk and turnkey office workstation furniture projects across ${city}`
                },
                {
                    q: "Is your workstation furniture durable?",
                    a: "Yes, our furniture is manufactured using high-quality materials for long-lasting performance."
                },
                {
                    q: `Do you provide installation services?`,
                    a: `Yes, we offer complete delivery, installation, and after-sales support.`
                }
            ]
        }),

        about: (city) => ({
            title: `Looking for the Best Office Workstation Furniture Manufacturer in ${city}?`,

            subtitle: "Contact DK Modular Contractor today for pricing, catalogs, and customized workstation furniture solutions.",

            description: `We help you design and install the ideal workstation layout based on your office size, team structure, and budget—perfect for businesses across ${city}.`
        }),

        aboutImg: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766124943/a-3d-render-of-a-modern-office-space-with-multiple-j-beGhqpQA2QkwKFDUgSDA-5Wzib9OBQ2mdO_K9_qccmA-1024x640_iutjpl.webp",
    },

    "office-tables": {
        mainImg: "/10.webp",
        h2: (city) => `Office Table Manufacturer in ${city}`,
        intro: (city) => (
            <>
                DK Modular Contractor is a leading{" "}
                <Link
                    href={`/categories/meeting-and-conference-room-table`}
                    className="text-gray-900 font-semibold hover:underline"
                >
                    Office Table Manufacturer
                </Link>{" "}
                in {city}, offering modern, durable, and space-efficient office table solutions for corporate offices, IT companies, startups, coworking spaces, and commercial interiors across {city}.
            </>
        ),
        intro2: (city) => `We specialize in high-quality office tables designed to enhance productivity, maintain workspace organization, and create a professional office environment. Our tables are manufactured using premium materials, strong frameworks, and contemporary designs suitable for both small offices and large corporate setups.`,
        intro3: (city) => `From executive office tables to employee desks and conference tables, DK Modular Contractor combines precision manufacturing, superior finishes, and long-term durability—making us a trusted choice for ${city} growing corporate sector.`,
        introImg: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766135368/14_Seater_Meeting_Table_1_omsthn.avif",

        whyChooseHeading: (city) => `Why Choose DK Modular Office Tables in ${city}?`,
        whyChoose: (city) => [
            {
                title: "Complete Office Table Solutions",
                desc: "We provide a wide range of office tables including executive tables, manager tables, staff desks, meeting tables, conference tables, reception tables, and customized office desk solutions—ideal for corporate offices and commercial spaces.",
            },
            {
                title: "Customizable Designs",
                desc: "Choose from multiple sizes, finishes, storage options, drawer units, cable management systems, and design styles. We offer customized office tables tailored to your office layout and interior theme.",
            },
            {
                title: "Manufacturer-Direct Pricing",
                desc: `As a direct manufacturer, DK Modular Contractor supplies office tables in ${city} at competitive factory prices, ensuring cost-effective solutions for businesses, architects, and interior designers.`,
            },
            {
                title: "Design, Delivery & Installation Support",
                desc: "Our professional team assists with space planning, manufacturing, delivery, and installation—ensuring smooth project execution and long-lasting performance.",
            },
            {
                title: `Trusted by Corporate Clients`,
                desc: `Our office tables are widely used by corporate offices, IT companies, educational institutions, and government offices across ${city}, appreciated for their quality, durability, and modern designs.`,
            }],

        Details: (city) => ({
            title: `Office Table Types We Offer`,

            sections: [
                {
                    title: "Executive Office Tables",
                    points: [
                        "Premium tables with elegant finishes and ample storage.",
                    ]
                },
                {
                    title: "Manager Tables",
                    points: [
                        "Functional designs suitable for cabin spaces."
                    ]
                },
                {
                    title: "Staff Office Tables",
                    points: [
                        "Compact and practical desks for employees."
                    ]
                },
                {
                    title: "Conference & Meeting Tables",
                    points: [
                        "Large tables designed for boardrooms and meeting rooms."
                    ]
                },
                {
                    title: "Reception Tables",
                    points: [
                        "Stylish and welcoming front-desk solutions."
                    ]
                }
            ]
        }),

        KeyFeatures: {
            title: `Key Features of DK Modular Office Tables`,
            img: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766136449/Round_Meeting_Table_eqygwr.webp",
            imgPostion: { objectPosition: "50% 70%" },

            list: [
                "Ergonomic and space-saving designs",
                "High-quality boards and metal structures",
                "Premium laminates and modern finishes",
                "Smart cable management systems",
                "Customizable layouts and storage options",
                "Durable, low-maintenance construction",
            ]
        },

        industries: [
            {
                title: "Corporate Offices",
                desc: "Complete office table solutions for small to large enterprises.",
                icon: Building2
            },
            {
                title: "IT & Software Companies",
                desc: "Efficient desk setups for productive work environments.",
                icon: Server
            },
            {
                title: "Coworking Spaces",
                desc: "Modern and flexible table designs for shared offices.",
                icon: GraduationCap
            },
            {
                title: "Educational Institutions",
                desc: "Durable office tables for administrative and faculty use.",
                icon: Home
            },
            {
                title: `Government & Institutional Offices`,
                desc: "Standardized and long-lasting office table solutions.",
                icon: Landmark
            }
        ],

        caseStudy: (city) => ({
            title: `Case Study: Office Table Installation for ${city} Corporate Project`,

            meta: {
                client: `Finance & Consulting Firm`,
                location: `${city}`,
                project: "Executive & Staff Office Setup"
            },

            scope: [
                "Design & manufacture of executive and staff office tables",
                "Conference table installation",
                "On-site delivery and installation"
            ],

            results: [
                "Improved workspace organization",
                "Enhanced professional appearance",
                "Comfortable and ergonomic work setup",
                "Long-lasting durability with minimal maintenance"
            ],

            conclusion: `This project highlights DK Modular Contractor’s expertise as a trusted Office Table Manufacturer in ${city}.`
        }),

        faqs: (city) => ({
            title: `Office Tables in ${city} – FAQs`,

            items: [
                {
                    q: "What types of office tables do you manufacture?",
                    a: "We manufacture executive tables, manager desks, staff tables, conference tables, reception tables, and customized office desks."
                },
                {
                    q: `Are your office tables customizable?`,
                    a: `Yes, we offer fully customized office table designs based on space and business requirements.`
                },
                {
                    q: `Do you handle bulk office table projects in ${city}`,
                    a: `Yes, we specialize in bulk supply and installation for corporate and commercial offices.`
                },
                {
                    q: "Are your office tables durable?",
                    a: "Yes, our tables are built using high-quality materials for long-term usage."
                },
                {
                    q: `Do you provide installation services?`,
                    a: `Yes, we provide complete delivery and installation support across ${city}`
                }
            ]
        }),

        about: (city) => ({
            title: `Looking for the Best Office Table Manufacturer in ${city}?`,

            subtitle: "Contact DK Modular Contractor today for pricing, catalogs, or customized office table solutions.",

            description: `We help you select and install the perfect office table design based on your workspace layout, team requirements, and budget—ideal for offices across ${city}.`
        }),

        aboutImg: "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1766136256/Rectangular_Meeting_Table_kbdezj.webp",
    },
};

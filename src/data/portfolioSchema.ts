import {z} from 'zod';


export const portfolioSchema = z.object({
    profile : z.object({
        name : z.string(),
        surname : z.string(),
        initials : z.string(),
        role : z.string(),
        location : z.string(),
        education : z.string(),
        experience : z.string(),
        description : z.string(),
        contact : z.string().email(),
    }),
    nav: z.object({
        links: z.array(
            z.object({
                label: z.string(),
                href: z.string(),
            })
        ),
    }),
});

export type PortfolioType = z.infer<typeof portfolioSchema>;


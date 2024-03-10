import { defineStore } from "pinia";

export const useProductStore = defineStore('productStore', () => {
    const products = [
        { 
            id: 1, 
            name: 'Digital printing', 
            nameTip: "<strong>PVC digital printing</strong>\nThe fastest printing of stickers at INnUP.\nIt is printed using 4c digital printing with solvent-based inks thatare lightfast and UV-stable for approx. 3-4 years .\nThe PVC film is 70p thick, calendered, and contains non-migrating plasticizers and UV stabilizers.\nThe stickers are delivered as standard on sheets (approx. A4 depending on usage); If you need the stickers individually, for example for distribution, please contact us. Separation is possible for a small additional charge.\nGood quality, but it doesn't come close to the UV offset. We are happy to send samples",
//            nameTip: `{<strong>asdfasdf<strong>`,
            subname: 'on white PVC film on fixed sheets', 
            subnameTip: "<strong>Delivered on a sheet</strong>\nSeveral stickers are delivered together on a common carrier sheet (handy size).\nThe stickers are die-cut and can therefore be easily removed from the backing paper for sticking.\nNote:\nWould you like the stickers to be delivered individually (e.g. as a handout for an advertising campaign)?\nit is also possible to produce several different motifs, sizes or shapes together on one sticker sheet.\nCall us or use our contact form.",
            price: 115.14, 
            stars: 5 
        },
        { 
            id: 2, 
            name: 'Screen Printing',
            nameTip: "<strong>PVC - Screen printing</strong>\n- Inexpensive for long runs\n- High UV stability\nAttention:\n- No color gradients possible.\n- Printing is carried out in individual full colors (HKS ; Pantone possible without any problems).\n- The files should be in vector format.", 
            subname: 'on white pVC film cut individually', 
            subnameTip: "<strong>Delivered individually</strong>\nThe stickers are delivered individually,\nThere is a slit in the backing paper for easy sticking.\nNote:\nWould you like multiple stickers to be delivered on one sheet?\nIt is also possible to produce several different motifs, sizes or shapes together on one sticker sheet.\nCall us or use our contact form.",
            price: 490.64, 
            stars: 5 
        },
        { 
            id: 3, 
            name: 'UV offset printing', 
            nameTip: "<strong>PVC UV offset printing</strong>\n With these stickers you have chosen the highest brilliance of the stickers available from INnUP.\nThe printing is done in highly brilliant UV colors with a UV protective varnish finish.\n- Printed in 4c on white PVC film with good weather resistance of the film (guarantee: 12-18 months)\n~ Printed with brilliant colors in lightfast quality for up to 12 months\n~ Environmentally friendly thanks to the use of solvent-free colors\n- Stickers are delivered individually\n~ Carrier film with slit on the back every 60mm. This can be omitted for edge lengths less than this!",
            subname: 'on white PVC film delivered individulally', 
            subnameTip: "<strong>Delivered individually</strong>\nThe stickers are delivered individually,\nThere is a slit in the backing paper for easy sticking.\nNote:\nWould you like multiple stickers to be delivered on one sheet?\nIt is also possible to produce several different motifs, sizes or shapes together on one sticker sheet.\nCall us or use our contact form.",
            price: 203.25, 
            stars: 5 
        },
        { 
            id: 4, 
            name: 'Adhesive paper offset printing', 
            nameTip: "<strong>Paper stickers made of adhesive paper</strong>\nPrinted on glossy adhesive paper (Jac paper)\n- Image printing 80 g/m?\n~ Delivery of the stickers: individually, punched out\n- Slotted on the back for easier removal and sticking\n",
            subname: 'delivered individually', 
            subnameTip: "<strong>Delivered individually</strong>\nThe stickers are delivered individually,\nThere is a slit in the backing paper for easy sticking.\nNote:\nWould you like multiple stickers to be delivered on one sheet?\nIt is also possible to produce several different motifs, sizes or shapes together on one sticker sheet.\nCall us or use our contact form.",
            price: 124.95, 
            stars: 5 
        },
        { 
            id: 5, 
            name: 'Thermal transfer printing', 
            nameTip: "<strong>Thermal transfer printing on white PVC film</strong>\n- Each color is printed separately, which means color gradients are only possible to a limited extent,\n- 5 years lightfast, UV-stable and weatherproof (except for special metallic colors).\n- Delivery of the stickers: on sheets (approx. A4 depending on usage).\n- Silver and/or gold can be printed as special colors, creating a shiny metallic effect.\n- To increase scratch resistance and weather resistance, a foil cover can be ordered additionally.\n- Resolution: Max. 24 x 12 dpmm (609 x 304 dpi)\n- There are only a finite number of different colors because they are melted directly from an ink ribbon onto the printing material.\n- Special feature: white, gray, gold and silver; This means that a negative pressure with white is possible.\n- With very large printing areas, the thermal transfer print sometimes develops small cracks,depending on the color. For such motifs, we first make a proof. This may lead to delays in delivery times.\nMetallic colors\nIf you also want to print silver and/or gold, make the appropriate selection in the selection field.\nExample: You need a sticker to be printed in black, green and gold.\nChoose 2/0 +gold for 2 standard colors 1 metallic color (=golden).",
            subname: 'on white PVC film on fixed sheets', 
            subnameTip: "<strong>Delivered on a sheet</strong>\nSeveral stickers are delivered together on a common carrier sheet (handy size).\nThe stickers are die-cut and can therefore be easily removed from the backing paper for sticking.\nNote:\nWould you like the stickers to be delivered individually (e.g. as a handout for an advertising campaign)?\nit is also possible to produce several different motifs, sizes or shapes together on one sticker sheet.\nCall us or use our contact form.",
            price: 209.82, 
            stars: 5 
        },
    ];

    const changeProductSubname = (newName: string) => {
        //console.log(newName);
        products.map(item => item.subname = newName);
    }

    return {
        products,
        changeProductSubname
    }
})
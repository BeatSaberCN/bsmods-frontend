import type { Handle } from '@sveltejs/kit';

const white_list:Array<RegExp> = [
    new RegExp(`^/front/user(/[0-9]+)?$`),
    new RegExp(`^/front/mods(/[0-9]+)?$`)
]

export const handle: Handle = async ({ event, resolve }) => {
    for(const re of white_list){
        if(re.exec(event.url.pathname))
            return await resolve(event)
    }

    return new Response("Not found", {
        status: 404
    })
};
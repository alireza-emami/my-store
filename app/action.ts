'use server'

import { revalidatePath } from "next/cache";

export const Relaod = () => {
    revalidatePath('/cart');

}
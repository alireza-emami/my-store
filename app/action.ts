'use server'

import { revalidatePath } from "next/cache";
// import { useRouter } from "next/router";

export const Relaod = () => {
    revalidatePath('/cart');

}

// export const router = useRouter();


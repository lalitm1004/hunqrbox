<script lang="ts">
    import { QrCode } from "@lucide/svelte";
    import { qr } from "@svelte-put/qr/svg";

    const MAX_CODE_LENGTH = 6;
    const DEFAULT_TEXT = "https://www.youtube.com/watch?v=-XUxWllIpZk";

    let input = $state("");
    let display = $derived(input.trim() === "" ? DEFAULT_TEXT : input.trim());

    $effect(() => {
        const sanitized = input.replace(/\D/g, "").slice(0, MAX_CODE_LENGTH);

        if (sanitized !== input) {
            input = sanitized;
        }
    });
</script>

<main class={`h-dvh w-dvw grid place-items-center`}>
    <div
        class={`h-[60%] lg:w-[20%] md:w-[50%] w-[80%] flex flex-col p-6 bg-neutral-50 rounded-xl shadow-lg shadow-neutral-950`}
    >
        <hgroup class={`w-full flex justify-center items-center gap-2`}>
            <QrCode class={`stroke-hungrbox`} />
            <h1 class={`text-3xl`}>HunQRBox</h1>
        </hgroup>

        <form class={`grow w-full flex flex-col items-center py-8`}>
            <input
                bind:value={input}
                type={`text`}
                inputmode={`numeric`}
                pattern={`[0-9]{1,6}`}
                placeholder={`Enter Code`}
                class={`h-10 w-[70%] text-center bg-violet-50 border border-neutral-300 rounded-lg`}
            />

            <div class={`grow grid place-items-center`}>
                <svg
                    class={`h-45 aspect-square`}
                    use:qr={{
                        data: display,
                        correction: "L",
                    }}
                ></svg>
            </div>
        </form>
    </div>
</main>

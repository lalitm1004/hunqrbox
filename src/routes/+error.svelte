<script lang="ts">
    import { Button } from "bits-ui";
</script>

<main class={`h-dvh w-dvw grid place-items-center`}>
    <div
        class={`h-[60%] lg:w-[20%] md:w-[50%] w-[80%] flex flex-col justify-center items-center gap-4 bg-neutral-50 rounded-xl shadow-lg shadow-neutral-950`}
    >
        <h1 class={`text-4xl`}>404</h1>
        <Button.Root
            href={`/`}
            class={`px-4 py-2 text-sm bg-violet-50 border border-neutral-300 rounded-lg`}
        >
            Go Home
        </Button.Root>
    </div>
</main>

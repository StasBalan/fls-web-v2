import { useEffect } from "react";

const shieldPublicKey = import.meta.env.VITE_SHIELD_PUBLIC_KEY;

export const useCheckShieldLabs = () => {
  useEffect(() => {
    let cancelled = false;

    async function run() {
      const mod = await import(
        /* @vite-ignore */ `https://dev.cdn.shieldlabs.ai/snippet.js?publicKey=${shieldPublicKey}`
      );

      if (!cancelled) mod.checkAnonymous();
    }

    run();

    return () => {
      cancelled = true;
    };
  }, [shieldPublicKey]);
};

"use server";
import { url } from "@/componentes/url";
import { token } from "@/componentes/cod";

export async function getProductsDestaqueAction() {
  const response = await fetch(
    url + "/wp-json/api/produto?disponibilidade=sim",
    {
      cache: "no-store",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data = await response.json();
  return { data };
}

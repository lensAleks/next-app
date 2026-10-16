"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData) {
  const title = formData.get("title");
  const price = Number(formData.get("price"));
  const stock = Number(formData.get("stock"));

  if (typeof title !== "string") {
    throw new Error("Invalid title");
  }

  const cleanTitle = title.trim();

  if (cleanTitle.length < 3) {
    throw new Error("Title must contain at least 3 characters");
  }

  if (!Number.isFinite(price) || price < 0) {
    throw new Error("Invalid price");
  }

  if (!Number.isInteger(stock) || stock < 0) {
    throw new Error("Invalid stock");
  }

  await prisma.product.create({
    data: {
      title: cleanTitle,
      price,
      stock,
    },
  });

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export async function updateProduct(
  id: number,
  formData: FormData
) {
  const title = formData.get("title");
  const price = Number(formData.get("price"));
  const stock = Number(formData.get("stock"));

  if (typeof title !== "string") {
    throw new Error("Invalid title");
  }

  const cleanTitle = title.trim();

  if (cleanTitle.length < 3) {
    throw new Error("Title must contain at least 3 characters");
  }

  if (!Number.isFinite(price) || price < 0) {
    throw new Error("Invalid price");
  }

  if (!Number.isInteger(stock) || stock < 0) {
    throw new Error("Invalid stock");
  }

  await prisma.product.update({
    where: {
      id,
    },
    data: {
      title: cleanTitle,
      price,
      stock,
    },
  });

  revalidatePath("/dashboard/products");
  revalidatePath(`/dashboard/products/${id}`);

  redirect(`/dashboard/products/${id}`);
}
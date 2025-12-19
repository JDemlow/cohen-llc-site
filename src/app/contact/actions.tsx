"use server";

export async function submitContactForm(formData: FormData) {
  const data: Record<string, string> = {
    "form-name": "contact",
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
    acknowledgment: formData.get("acknowledgment") ? "yes" : "no",
  };

  const response = await fetch("https://cohen-llc.netlify.app/", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(data).toString(),
  });

  if (!response.ok) {
    throw new Error("Form submission failed");
  }

  return { success: true };
}

type BookingEmail = {
  name: string;
  email: string;
  pickupDate: string;
  returnDate: string;
  carCategory: string;
  reference: string;
};

function readSecret(name: "EMAILJS_SERVICE_ID" | "EMAILJS_TEMPLATE_ID" | "EMAILJS_PUBLIC_KEY" | "EMAILJS_PRIVATE_KEY") {
  const value = process.env[name];
  return typeof value === "string" && value.trim() ? value.trim() : "";
}

export async function sendBookingConfirmation(input: BookingEmail) {
  const serviceId = readSecret("EMAILJS_SERVICE_ID");
  const templateId = readSecret("EMAILJS_TEMPLATE_ID");
  const publicKey = readSecret("EMAILJS_PUBLIC_KEY");
  const privateKey = readSecret("EMAILJS_PRIVATE_KEY");
  if (!serviceId || !templateId || !publicKey) return false;

  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      ...(privateKey ? { accessToken: privateKey } : {}),
      template_params: {
        to_email: input.email,
        email: input.email,
        name: input.name,
        pickup_date: input.pickupDate,
        return_date: input.returnDate,
        car_category: input.carCategory,
        reference: input.reference,
      },
    }),
  });

  if (!response.ok) {
    console.error("booking_email_failed", await response.text());
    return false;
  }

  console.info("booking_email_sent");

  return true;
}

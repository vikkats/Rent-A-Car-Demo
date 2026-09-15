import { sendBookingConfirmation } from "../../../lib/send-booking-email";

const allowedCategories = new Set(["Mini — from €35/day", "Compact — from €44/day", "SUV — from €62/day", "7 Seater — from €78/day", "No preference — show me what’s available"]);

function isDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) return Response.json({ error: "Please send the form again." }, { status: 415 });
  try {
    const payload = (await request.json()) as Record<string, unknown>;
    const name = typeof payload.name === "string" ? payload.name.trim() : "";
    const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
    const pickupDate = typeof payload.pickupDate === "string" ? payload.pickupDate : "";
    const returnDate = typeof payload.returnDate === "string" ? payload.returnDate : "";
    const carCategory = typeof payload.carCategory === "string" ? payload.carCategory : "";
    const website = typeof payload.website === "string" ? payload.website.trim() : "";
    if (website) return Response.json({ reference: "MR-RECEIVED" }, { status: 201 });
    if (name.length < 2 || name.length > 100) return Response.json({ error: "Please enter your full name." }, { status: 400 });
    if (!/^\S+@\S+\.\S+$/.test(email) || email.length > 160) return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
    if (!isDate(pickupDate) || !isDate(returnDate) || returnDate <= pickupDate) return Response.json({ error: "Return date must be after the pick-up date." }, { status: 400 });
    if (!allowedCategories.has(carCategory)) return Response.json({ error: "Please select a car category." }, { status: 400 });
    const reference = `MR-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
    let emailed = false;
    try {
      emailed = await sendBookingConfirmation({ name, email, pickupDate, returnDate, carCategory, reference });
    } catch (error) {
      console.error("booking_email_failed", error);
    }
    return Response.json({ reference, emailed }, { status: 201 });
  } catch (error) {
    console.error("booking_request_failed", error);
    return Response.json({ error: "We couldn’t send your request right now. Please try again." }, { status: 500 });
  }
}

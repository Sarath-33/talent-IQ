import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import User from "../models/User.js";

export const inngest = new Inngest({ id: "talent-iq" });

const syncUser = inngest.createFunction(
    { id: "sync-user" },
    { event: "clerk/user.created" },
    async ({ event }) => {
        console.log("🟢 Inngest: clerk/user.created event triggered");
        console.log("Event data:", event.data);

        await connectDB();

        // Extract fields safely
        const { id, first_name, last_name, image_url } = event.data;

        // Clerk sometimes sends `email_addresses` as array
        const email =
            event.data.email_addresses?.[0]?.email_address ||
            event.data.email_address ||
            event.data.email ||
            "";

        // Create user object
        const newUser = {
            clerkId: id,
            email,
            name: `${first_name || ""} ${last_name || ""}`.trim(),
            profileImage: image_url || "",
        };

        console.log("📦 Creating user:", newUser);

        try {
            const user = await User.create(newUser);
            console.log("✅ User saved successfully:", user._id);
            return { success: true, userId: user._id };
        } catch (err) {
            console.error("❌ User creation failed:", err.message);
            return { success: false, error: err.message };
        }
    }
);

const deleteUserFromDb = inngest.createFunction(
    { id: "delete-user-from-db" },
    { event: "clerk/user.deleted" },
    async ({ event }) => {
        await connectDB();

        const { id } = event.data;

        await User.deleteOne({ clerkId: id });

    }
)

export const functions = [syncUser, deleteUserFromDb];

import fetch from "node-fetch";

export default async function handler(req, res) {
  const { username, license } = req.query;

  if (!license) {
    return res.status(400).json({ success: false, message: "Missing license key" });
  }

  try {
    const appName = "SAIKUTO CHEAT";
    const ownerId = "GQf42Ea36P";

    // Login menggunakan license key
    const keyauthURL = `https://keyauth.win/api/1.0/?type=license&name=${encodeURIComponent(appName)}&ownerid=${ownerId}&key=${encodeURIComponent(license)}`;

    const response = await fetch(keyauthURL);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
}

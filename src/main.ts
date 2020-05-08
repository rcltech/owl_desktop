import { app, BrowserWindow, session } from "electron";

app.on("ready", () => {
  const window = new BrowserWindow({
    webPreferences: {
      session: session.fromPartition("owl"),
    },
  });
  window.removeMenu();
  window.loadURL("https://owl.rctech.club");
});

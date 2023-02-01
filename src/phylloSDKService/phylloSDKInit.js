import { resolve } from "styled-jsx/css";
import { createUser, createUserToken } from "./phylloServiceAPIs";

class PhylloSDK {
  async openPhylloSDK() {
    const timeStamp = new Date();
    let userId = await createUser("Test App", timeStamp.getTime());
    let token = await createUserToken(userId);

    const config = {
      clientDisplayName: "Test App",
      environment: "sandbox",
      userId: userId,
      token: token,
      workPlatformId: null,
    };

    const phylloConnect = window.PhylloConnect.initialize(config);

    phylloConnect.on("accountConnected", (accountId, workplatformId, userId) => {
      console.log(`onAccountConnected: ${accountId}, ${workplatformId}, ${userId}`);
    });

    phylloConnect.on("accountDisconnected", (accountId, workplatformId, userId) => {
      console.log(`onAccountDisconnected: ${accountId}, ${workplatformId}, ${userId}`);
    });

    phylloConnect.on("tokenExpired", (userId) => {
      console.log(`onTokenExpired: ${userId}`);
      if (window.confirm("Your session has expired, but we can help you fix it")) {
        // Reinitiating Phyllo SDK
        localStorage.removeItem("PHYLLO_SDK_TOKEN");
        this.openPhylloSDK();
      } else {
        window.location.href = "/";
      }
    });

    phylloConnect.on("exit", (reason, userId) => {
      console.log(`onExit: ${reason}, ${userId}`);
      alert("Phyllo SDK exit reason: " + reason);
      window.location.href = "/accounts";
    });

    phylloConnect.on("connectionFailure", (reason, workplatformId, userId) => {
      console.log(`onConnectionFailure: ${reason}, ${workplatformId}, ${userId}`);
      alert("WorkPlatform connection failure reason: " + reason);
    });

    phylloConnect.open();
  }
}

export default PhylloSDK;

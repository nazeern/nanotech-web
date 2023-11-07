"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

export default function Page() {

  const router = useRouter();
  const supabase = createClientComponentClient();

  const [input, setInput] = useState("");
  let device: USBDevice | null = null;

  const handleConnectClick = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      router.push("/unauthenticated");
      return;
    }

    navigator.usb
      .requestDevice({ filters: [{ vendorId: 0x16c0 }] })
      .then((reqDevice) => {
        console.dir(reqDevice);
        device = reqDevice;
      })
      .then(() => device?.open())
      .then(() => device?.selectConfiguration(1))
      .then(() => device?.claimInterface(3))
      .then(() => device?.selectAlternateInterface(3, 0))
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeviceLogClick = () => {
    if (device == null) {
      console.log("Connect to device first!");
      alert("Connect to device first!");
    } else {
      console.dir(device);
    }
  };

  const handleSendData = async () => {
    let device: USBDevice | undefined;
    device = await navigator.usb.getDevices().then((devices) => {
      return devices.find((device) => device.productName === "Ida Ma");
    })
    if (device == null) {
      console.log("Could not auto-connect: please configure manually.");
      alert("Could not auto-connect: please configure manually.");
      return;
    }
    if (!device.opened) {
      await device.open()
        .then(() => device?.selectConfiguration(1))
        .then(() => device?.claimInterface(3))
        .then(() => device?.selectAlternateInterface(3, 0))
        .catch((error) => {
          console.error(error);
        });
    }
    const charArray = new Uint8Array(input.split("").map(char => char.charCodeAt(0)));
    device.transferOut(5, charArray);
  };

  return (
    <div className="my-24 md:w-1/2 w-5/6 flex flex-col gap-12">
      <button
        className="bg-slate-900 hover:bg-slate-800 rounded-lg px-4 py-2 text-white mb-2"
        onClick={handleConnectClick}
      >
        Connect to Device
      </button>
      <button
        className="bg-slate-900 hover:bg-slate-800 rounded-lg px-4 py-2 text-white mb-2"
        onClick={handleDeviceLogClick}
      >
        Print Device Data
      </button>
      <input
        type="text"
        placeholder="Enter text..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className="rounded-md border border-foreground p-2"
      />
      <button
        className="bg-slate-900 hover:bg-slate-800 rounded-lg px-4 py-2 text-white mb-2"
        onClick={handleSendData}
      >
        Send Test Data
      </button>
    </ div>
  );
}

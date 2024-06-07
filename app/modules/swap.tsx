'use client';
import { Widget, WidgetConfig } from "@rango-dev/widget-embedded";

const config = {
    from: {
        blockchain: 'BSC',
        token: {
            blockchain: 'BSC',
            address: null,
            symbol: 'BNB'
        }
    },
    to: {
        blockchain: 'BSC',
        token: {
            blockchain: 'BSC',
            address: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
            symbol: 'CAKE'
        }
    },

    // This API key is only for test purpose. Don't use it in production.
    apiKey: process.env.RANGO_API_KEY,
    // This project id is only for test purpose. Don't use it in production.
    // Get your Wallet Connect project id from https://cloud.walletconnect.com/
    walletConnectProjectId: 'e24844c5deb5193c1c14840a7af6a40b'
  }
export default function Swap() {
         
      return (
        <div id="swap-container">
          <Widget config={config} />
        </div>
      );
}
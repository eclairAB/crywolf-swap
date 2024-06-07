'use client';
import { Widget, useWidgetEvents, MainEvents   } from "@rango-dev/widget-embedded";
import { useEffect } from 'react';


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
  theme: {
    mode: 'dark',
    singleTheme: true,
    colors: {
      dark: {
        neutral: '#161C38',
        neutral100: '#101327',
        neutral200: '#0D122C',
        neutral300: '#0F142E',
        neutral400: '#111733',
        neutral500: '#161C38',
        neutral800: '#B8B8B8',
        neutral900: '#E9E9E9',
        background: '#070917'
      }
    }
  },
  // This API key is only for test purpose. Don't use it in production.
  apiKey: process.env.RANGO_API_KEY,
  // This project id is only for test purpose. Don't use it in production.
  // Get your Wallet Connect project id from https://cloud.walletconnect.com/
  walletConnectProjectId: "e24844c5deb5193c1c14840a7af6a40b"
  // walletConnectProjectId: process.env.WALLETCONNECT_PROJ_ID
}
export default function Swap() {
  useEffect(() => {
    const addScript = () => {
      const script = document.createElement('script');
      script.src = 'https://www.livecoinwatch.com/static/lcw-widget.js';
      script.defer = true;
      document.body.appendChild(script);
    };

    addScript();
  }, []);

  const widgetEvents = useWidgetEvents();    
    useEffect(() => {
        widgetEvents.on(MainEvents.RouteEvent, (widgetEvent) => {
          const { event, route } = widgetEvent;
          // your custom logic goes here
          console.log([event, route]);
        });
        return () => widgetEvents;
    }, [widgetEvents]);

  return (
    <div id="dex-container">
      <Widget config={config} />
      <div
        className="livecoinwatch-widget-1"
        lcw-coin="CAKE"
        lcw-base="USD"
        lcw-secondary="BNB"
        lcw-period="d"
        lcw-color-tx="#ffffff"
        lcw-color-pr="#58c7c5"
        lcw-color-bg="#070917"
        lcw-border-w="0"
      ></div>
    </div>
  );
}
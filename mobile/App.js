import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { WebView } from 'react-native-webview';


export default function App() {
  return (
    <WebView 
      source={{ uri: 'https://widgets.bingewave.com/webrtc/xxxxx'}}
      style={{flex:1}}
      javaScriptEnabled={true}    
      allowsInlineMediaPlayback={true}
/>
  );
}



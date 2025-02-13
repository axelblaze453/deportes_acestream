import { useState } from "react";
import { Card } from "./components/ui/Card";
import { Play } from "lucide-react";
import ReactPlayer from "react-player";

const channels = [
  { name: "ESPN", url: "https://your-stream-url.com/espn" },
  { name: "FOX Sports", url: "https://your-stream-url.com/fox" },
  { name: "DAZN", url: "https://your-stream-url.com/dazn" },
  { name: "NBA TV", url: "https://your-stream-url.com/nba" },
];

export default function SportsStreamingApp() {
  const [selectedChannel, setSelectedChannel] = useState(null);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <aside className="w-1/4 bg-gray-800 p-4 space-y-4 overflow-auto">
        <h2 className="text-xl font-bold mb-4">Canales</h2>
        {channels.map((channel) => (
          <Card key={channel.name} className="p-3 cursor-pointer hover:bg-gray-700 flex items-center gap-3"
            onClick={() => setSelectedChannel(channel)}>
            <Play className="w-6 h-6 text-green-400" /> {channel.name}
          </Card>
        ))}
      </aside>
      <main className="flex-1 flex items-center justify-center">
        {selectedChannel ? (
          <div className="w-full max-w-4xl">
            <h2 className="text-2xl font-semibold mb-4">Reproduciendo: {selectedChannel.name}</h2>
            <ReactPlayer url={selectedChannel.url} controls playing width="100%" height="500px" />
          </div>
        ) : (
          <h2 className="text-xl font-light">Selecciona un canal para ver el contenido</h2>
        )}
      </main>
    </div>
  );
}
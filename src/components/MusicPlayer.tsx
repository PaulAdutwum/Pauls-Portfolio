import { useState, useRef, useEffect } from "react";
import {
  Volume2,
  VolumeX,
  SkipForward,
  SkipBack,
  Pause,
  Play,
  Music,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { motion, AnimatePresence } from "framer-motion";

interface Track {
  title: string;
  url: string;
  artist: string;
  description: string;
}

interface PlaylistData {
  tracks: Track[];
}

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [playlist, setPlaylist] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Fetch playlist data
  useEffect(() => {
    fetch("/playlist.json")
      .then((response) => response.json())
      .then((data: PlaylistData) => {
        setPlaylist(data.tracks);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading playlist:", error);
        // Fallback to hardcoded playlist if fetch fails
        setPlaylist([
          {
            title: "Relaxing Piano",
            url: "/relaxing-piano-music-293690.mp3",
            artist: "SoundHelix",
            description: "Calming piano music perfect for background ambiance",
          },
          {
            title: "Lo-Fi Beats",
            url: "/lofi-study-112191.mp3",
            artist: "SoundHelix",
            description: "Chill beats for studying and relaxation",
          },
          {
            title: "Ambient Mood",
            url: "/ambient-piano-and-strings-10711.mp3",
            artist: "SoundHelix",
            description:
              "Atmospheric piano and strings for a peaceful environment",
          },
        ]);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (playlist.length === 0) return;

    // Initialize audio element
    audioRef.current = new Audio(playlist[currentTrack].url);
    audioRef.current.loop = false; // Don't loop individual tracks
    audioRef.current.volume = 0.3; // Set a comfortable volume level

    // Handle track ended event
    const handleTrackEnd = () => {
      nextTrack();
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("ended", handleTrackEnd);
    }

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleTrackEnd);
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [currentTrack, playlist]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextTrack = () => {
    if (playlist.length === 0) return;

    const wasPlaying = isPlaying;
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setCurrentTrack((prev) => (prev + 1) % playlist.length);

    // Resume playing after track change if it was playing before
    if (wasPlaying) {
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch((error) => {
            console.error("Error playing audio:", error);
            setIsPlaying(false);
          });
        }
      }, 100);
    }
  };

  const prevTrack = () => {
    if (playlist.length === 0) return;

    const wasPlaying = isPlaying;
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);

    // Resume playing after track change if it was playing before
    if (wasPlaying) {
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch((error) => {
            console.error("Error playing audio:", error);
            setIsPlaying(false);
          });
        }
      }, 100);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center space-x-0.5">
        <Button
          variant="ghost"
          size="icon"
          disabled
          className={`rounded-full transition-all duration-300 ${
            isDark ? "text-gray-700" : "text-gray-300"
          }`}
        >
          <Music className="h-5 w-5 animate-pulse" />
        </Button>
      </div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <div className="flex items-center space-x-0.5">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevTrack}
          className={`rounded-full transition-all duration-300 hover:bg-opacity-20 ${
            isDark ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
          aria-label="Previous track"
          title="Previous track"
        >
          <SkipBack
            className={`h-4 w-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}
          />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={togglePlay}
          className={`rounded-full transition-all duration-300 hover:bg-opacity-20 ${
            isDark ? "hover:bg-gray-700" : "hover:bg-gray-200"
          } relative`}
          aria-label={
            isPlaying ? "Pause background music" : "Play background music"
          }
          title={isPlaying ? "Pause background music" : "Play background music"}
        >
          {isPlaying ? (
            <>
              <Pause className="h-5 w-5 text-blue-500" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
            </>
          ) : (
            <Play
              className={`h-5 w-5 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            />
          )}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextTrack}
          className={`rounded-full transition-all duration-300 hover:bg-opacity-20 ${
            isDark ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
          aria-label="Next track"
          title="Next track"
        >
          <SkipForward
            className={`h-4 w-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}
          />
        </Button>
      </div>

      <AnimatePresence>
        {showInfo && playlist.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 10, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`absolute right-0 top-full mt-2 p-3 rounded-md shadow-lg z-50 ${
              isDark ? "bg-gray-800" : "bg-white"
            } border ${isDark ? "border-gray-700" : "border-gray-200"}`}
            style={{ width: "200px" }}
          >
            <div className="text-xs mb-1 font-medium text-blue-500">
              Now Playing:
            </div>
            <div
              className={`text-sm font-medium ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              {playlist[currentTrack].title}
            </div>
            <div
              className={`text-xs ${
                isDark ? "text-gray-400" : "text-gray-600"
              } mb-2`}
            >
              {playlist[currentTrack].artist}
            </div>
            <div
              className={`text-xs italic ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {playlist[currentTrack].description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

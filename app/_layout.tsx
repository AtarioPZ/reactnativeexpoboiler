import { useEffect, useState } from "react";
import { Stack, SplashScreen } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const prepareResources = async () => {
      try {
        // Simulate a loading process (e.g., API calls, caching, etc.)
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Replace with actual loading logic
      } catch (error) {
        console.error("Error loading resources:", error);
      } finally {
        setIsReady(true);
        SplashScreen.hideAsync(); // Hide splash screen once ready
      }
    };

    prepareResources();
  }, []);

  if (!isReady) {
    return null; // Render nothing until resources are ready
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;

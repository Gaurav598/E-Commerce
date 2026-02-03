import { Stack } from "expo-router";
import "../global.css";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
// import { StripeProvider } from "@stripe/stripe-react-native";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: any) => {
      console.error("React Query Error:", error);
    },
  }),
  mutationCache: new MutationCache({
    onError: (error: any) => {
      console.error("React Query Mutation Error:", error);
    },
  }),
});

export default function RootLayout() {
  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}
      tokenCache={tokenCache}
    >
      <QueryClientProvider client={queryClient}>
        {/* <StripeProvider
          publishableKey={process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY!}
        >
          <Stack screenOptions={{ headerShown: false }} />
        </StripeProvider> */}
      </QueryClientProvider>
    </ClerkProvider>
  );
}

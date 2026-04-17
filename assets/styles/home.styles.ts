import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f3f6fb",
  },
  screen: {
    flex: 1,
    paddingHorizontal: 16,
  },
  headerBox: {
    paddingTop: 8,
    paddingBottom: 12,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0f172a",
  },
  headerSubtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#64748b",
  },
  listContent: {
    paddingBottom: 20,
  },
  separator: {
    height: 12,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#dbeafe",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 10,
  },
  badgeText: {
    color: "#1d4ed8",
    fontSize: 12,
    fontWeight: "700",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 6,
    textTransform: "capitalize",
  },
  cardBody: {
    fontSize: 14,
    lineHeight: 20,
    color: "#334155",
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  helperText: {
    marginTop: 10,
    color: "#64748b",
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#b91c1c",
    marginBottom: 6,
  },
  errorText: {
    textAlign: "center",
    color: "#64748b",
  },
});
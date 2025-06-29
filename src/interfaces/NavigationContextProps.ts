import { NavigationTab } from "../types/NavigationTab"

export interface NavigationContextProps {
  selectedTab :  NavigationTab
  setSelectedTab: (tab: NavigationTab) => void
}
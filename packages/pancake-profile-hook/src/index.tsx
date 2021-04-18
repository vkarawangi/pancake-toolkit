import React, { useState, useEffect } from "react";
import { getUsername, getProfile, getTeam, getAchievements } from "@pancakeswap-libs/profile-sdk";

type ProfileData = {
  username?: string;
  achievements?: string;
  profile?: string;
  teams?: string;
  loading: boolean;
};

type ProfileHookOptions = {
  username: boolean;
  profile: boolean;
  achievements: boolean;
  teams: boolean;
};

const SYRUP_STORM_ID = 1;
const FEARSOME_FLIPPERS_ID = 2;
const CHAOTIC_CAKERS_ID = 3;

const initialData = {
  username: "",
  achievements: "",
  loading: false,
};

const usePancakeProfile = (address: string, options?: ProfileHookOptions): ProfileData => {
  const [profileData, setProfileData] = useState<ProfileData>(initialData);

  useEffect(() => {
    const fetchData = async () => {
      setProfileData({ loading: true });
      let username;
      let achievements;
      let profile;
      let teams;
      if (!options || options.username) {
        username = await getUsername(address);
      }
      if (!options || options.profile) {
        profile = await getProfile(address);
      }
      if (!options || options.achievements) {
        achievements = await getAchievements(address);
      }
      if (!options || options.teams) {
        teams = await Promise.all([getTeam(SYRUP_STORM_ID), getTeam(FEARSOME_FLIPPERS_ID), getTeam(CHAOTIC_CAKERS_ID)]);
      }
      setProfileData({ username, profile, achievements, teams, loading: false });
    };
    fetchData();
  }, [address, options]);
  return profileData;
};

export default usePancakeProfile;

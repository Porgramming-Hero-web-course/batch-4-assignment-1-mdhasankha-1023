{
  // start

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  type ProfilePartial = Partial<Profile>;

  const updateProfile = (
    profile: Profile,
    updatedProfile: ProfilePartial
  ): Profile => {
    return { ...profile, ...updatedProfile };
  };

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 32 }));

  // end
}

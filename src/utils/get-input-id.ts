export const getInputId = (id: string | undefined, name: string) => {
  if (id) {
    return id;
  };

  return name.toLowerCase().split(" ").join("-");
}
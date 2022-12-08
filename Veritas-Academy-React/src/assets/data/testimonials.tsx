type TestimonialReturn = {
  name?: string;
  year?: string;
  text?: string;
};

export function testimonialsData(): TestimonialReturn[] {
  return [
    {
      name: "Fabian",
      year: "11",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur suscipit fugit voluptatibus dolorem totam perspiciatis ullam exercitationem voluptate quasi blanditiis sit hic ipsa aut error, laborum et laudantium maiores delectus placeat explicabo! Quos, quaerat culpa ullam repellendus illum voluptate voluptas!",
    },
    {
      name: "Kabir",
      year: "11",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur suscipit fugit voluptatibus dolorem totam perspiciatis ullam exercitationem voluptate quasi blanditiis sit hic ipsa aut error, laborum et laudantium maiores delectus placeat explicabo! Quos, quaerat culpa ullam repellendus illum voluptate voluptas!",
    },
    {
      name: "Guido",
      year: "11",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur suscipit fugit voluptatibus dolorem totam perspiciatis ullam exercitationem voluptate quasi blanditiis sit hic ipsa aut error, laborum et laudantium maiores delectus placeat explicabo! Quos, quaerat culpa ullam repellendus illum voluptate voluptas!",
    },
  ];
}

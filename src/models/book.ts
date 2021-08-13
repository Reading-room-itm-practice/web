export type Book = {
	id: number;
	authorId: number;
	categoryId: number;
	mainPhotoId: number | null;
	photosId: Array<number> | null;
	title: string;
	releaseYear: number;
	description: string;
};

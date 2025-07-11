import { cva } from 'class-variance-authority';

export const RoomsPageContainer = cva(`
  flex
  min-h-dvh min-w-dvw
  md:flex-row flex-col 
  items-center justify-center
  bg-background
  gap-2
  p-4
`);

import { cva } from 'class-variance-authority';

const card = cva(`
  w-full max-w-xl
  bg-card/20
`);

const roomLink = cva(`
  flex items-center justify-between
  rounded-lg border
  p-3
  transition-colors
  hover:bg-accent/50
`);

const roomInfo = cva(`
  flex flex-1 flex-col
  gap-1
`);

const badgeGroup = cva(`
  flex flex-col
  gap-2
`);

const enterText = cva(`
  flex items-center gap-1
  text-sm
`);

export const RoomsListStyles = {
	card,
	roomLink,
	roomInfo,
	badgeGroup,
	enterText,
};

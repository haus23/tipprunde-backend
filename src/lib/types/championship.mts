import { Static, Type } from '@sinclair/typebox';

export const ChampionshipId = Type.RegEx(/^[a-z]{2}\d{4}$/);
export type ChampionshipId = Static<typeof ChampionshipId>;

import { CurrentTips } from '@haus23/tipprunde-types';
import { getMatches } from '~/lib/query/championship/get-matches';
import { getTips } from '~/lib/query/championship/get-tips';
import { getTeams } from '~/lib/query/get-teams';
import { getChampionshipId } from '~/lib/util/get-championship-id';

export default defineEventHandler(async (event) => {
  const championshipId = await getChampionshipId(event);

  const matches = (await getMatches(championshipId)) || [];
  const tips = (await getTips(championshipId)) || [];
  const teams = (await getTeams()) || [];

  matches.sort((a, b) => a.date.localeCompare(b.date));
  const lastMatchIx = matches.findLastIndex((m) => m.result);

  let currentSliceStart = Math.min(Math.max(0, lastMatchIx - 1), matches.length - 4);
  const currentSlice = matches.slice(currentSliceStart, currentSliceStart + 4);

  const currentTips = currentSlice.map((match) => {
    const tipsPerMatch = new Map(tips.filter((t) => t.matchId === match.id).map((t) => [t.playerId, t]));
    return {
      matchId: match.id,
      tips: Object.fromEntries(tipsPerMatch),
    };
  }) satisfies CurrentTips;

  return currentTips;
});
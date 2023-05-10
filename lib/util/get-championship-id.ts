import { ChampionshipId } from '@haus23/tipprunde-types';
import { z } from 'zod';
import { getChampionships } from '../query/get-championships';

/**
 * Extract championshipId from event context param
 *
 * @param event H3Event
 * @returns championshipId
 */
export async function getChampionshipId(event: unknown): Promise<string> {
  if (isEvent(event)) {
    const id = event.context.params?.id;
    if (!id) {
      throw new Error('No route param named id present.');
    }

    const parsedId = ChampionshipId.or(z.literal('current')).safeParse(id);
    if (!parsedId.success) {
      sendError(event, createError({ statusCode: 406, statusMessage: 'Bad championship id' }));
      return 'error';
    }

    const championships = await getChampionships();

    const championshipId =
      parsedId.data === 'current' ? championships?.at(0)?.id : championships?.find((c) => c.id === parsedId.data)?.id;
    if (!championshipId) {
      sendError(event, createError({ statusCode: 404, statusMessage: 'Championship not found' }));
      return 'error';
    }

    return championshipId;
  }

  throw new Error('getChampionshipId must be called with a H3Event arg');
}

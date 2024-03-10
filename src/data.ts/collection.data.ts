import { CollectionType } from '../types/collection.types';

type ColorStringDateMapType = Pick<CollectionType, 'color' | 'dateStr'> & {
	date: string;
};

export const binColorMap = {
	blue: 'blue',
	black: 'black',
	green: 'green',
	brown: '#795548',
} as Record<string, string>;
export const binColorMapFaded = {
	blue: '#9999ff',
	black: '#999999',
	green: '#99cc99',
	brown: '#c9bbb6',
} as Record<string, string>;

export const CollectionData: {
	[collectionKey: string]: ColorStringDateMapType[];
} = {
	FRICCS: [
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-07-06T23:00:00.000Z',
			dateStr: '7th July 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-07-13T23:00:00.000Z',
			dateStr: '14th July 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-07-20T23:00:00.000Z',
			dateStr: '21st July 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-07-27T23:00:00.000Z',
			dateStr: '28th July 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-08-03T23:00:00.000Z',
			dateStr: '4th August 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-08-10T23:00:00.000Z',
			dateStr: '11th August 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-08-17T23:00:00.000Z',
			dateStr: '18th August 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-08-24T23:00:00.000Z',
			dateStr: '25th August 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-08-31T23:00:00.000Z',
			dateStr: '1st September 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-09-07T23:00:00.000Z',
			dateStr: '8th September 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-09-14T23:00:00.000Z',
			dateStr: '15th September 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-09-21T23:00:00.000Z',
			dateStr: '22nd September 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-09-28T23:00:00.000Z',
			dateStr: '29th September 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-10-05T23:00:00.000Z',
			dateStr: '6th October 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-10-12T23:00:00.000Z',
			dateStr: '13th October 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-10-19T23:00:00.000Z',
			dateStr: '20th October 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-10-26T23:00:00.000Z',
			dateStr: '27th October 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-11-03T00:00:00.000Z',
			dateStr: '3rd November 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-11-10T00:00:00.000Z',
			dateStr: '10th November 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-11-17T00:00:00.000Z',
			dateStr: '17th November 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-11-24T00:00:00.000Z',
			dateStr: '24th November 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-12-01T00:00:00.000Z',
			dateStr: '1st December 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-12-08T00:00:00.000Z',
			dateStr: '8th December 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-12-15T00:00:00.000Z',
			dateStr: '15th December 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-12-22T00:00:00.000Z',
			dateStr: '22nd December 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2024-01-05T00:00:00.000Z',
			dateStr: '5th January 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-01-12T00:00:00.000Z',
			dateStr: '12th January 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-01-19T00:00:00.000Z',
			dateStr: '19th January 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-01-26T00:00:00.000Z',
			dateStr: '26th January 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-02-02T00:00:00.000Z',
			dateStr: '2nd February 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-02-09T00:00:00.000Z',
			dateStr: '9th February 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-02-16T00:00:00.000Z',
			dateStr: '16th February 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-02-23T00:00:00.000Z',
			dateStr: '23rd February 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-03-01T00:00:00.000Z',
			dateStr: '1st March 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-03-08T00:00:00.000Z',
			dateStr: '8th March 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-03-15T00:00:00.000Z',
			dateStr: '15th March 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-03-22T00:00:00.000Z',
			dateStr: '22nd March 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-03-28T00:00:00.000Z',
			dateStr: '28th March 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-04-04T23:00:00.000Z',
			dateStr: '5th April 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-04-11T23:00:00.000Z',
			dateStr: '12th April 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-04-18T23:00:00.000Z',
			dateStr: '19th April 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-04-25T23:00:00.000Z',
			dateStr: '26th April 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-05-02T23:00:00.000Z',
			dateStr: '3rd May 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-05-09T23:00:00.000Z',
			dateStr: '10th May 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-05-16T23:00:00.000Z',
			dateStr: '17th May 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-05-23T23:00:00.000Z',
			dateStr: '24th May 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-05-30T23:00:00.000Z',
			dateStr: '31st May 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-06-06T23:00:00.000Z',
			dateStr: '7th June 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-06-13T23:00:00.000Z',
			dateStr: '14th June 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-06-20T23:00:00.000Z',
			dateStr: '21st June 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-06-27T23:00:00.000Z',
			dateStr: '28th June 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-07-04T23:00:00.000Z',
			dateStr: '5th July 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-07-11T23:00:00.000Z',
			dateStr: '12th July 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-07-18T23:00:00.000Z',
			dateStr: '19th July 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-07-25T23:00:00.000Z',
			dateStr: '26th July 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-08-01T23:00:00.000Z',
			dateStr: '2nd August 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-08-08T23:00:00.000Z',
			dateStr: '9th August 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-08-15T23:00:00.000Z',
			dateStr: '16th August 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-08-22T23:00:00.000Z',
			dateStr: '23rd August 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-08-29T23:00:00.000Z',
			dateStr: '30th August 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-09-05T23:00:00.000Z',
			dateStr: '6th September 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-09-19T23:00:00.000Z',
			dateStr: '20th September 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-09-26T23:00:00.000Z',
			dateStr: '27th September 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-10-03T23:00:00.000Z',
			dateStr: '4th October 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-10-10T23:00:00.000Z',
			dateStr: '11th October 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-10-17T23:00:00.000Z',
			dateStr: '18th October 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-10-24T23:00:00.000Z',
			dateStr: '25th October 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-11-01T00:00:00.000Z',
			dateStr: '1st November 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-11-08T00:00:00.000Z',
			dateStr: '8th November 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-11-15T00:00:00.000Z',
			dateStr: '15th November 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-11-22T00:00:00.000Z',
			dateStr: '22nd November 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-11-29T00:00:00.000Z',
			dateStr: '29th November 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-12-06T00:00:00.000Z',
			dateStr: '6th December 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-12-13T00:00:00.000Z',
			dateStr: '13th December 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-12-20T00:00:00.000Z',
			dateStr: '20th December 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2025-01-10T00:00:00.000Z',
			dateStr: '10th January 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-01-17T00:00:00.000Z',
			dateStr: '17th January 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-01-24T00:00:00.000Z',
			dateStr: '24th January 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-01-31T00:00:00.000Z',
			dateStr: '31st January 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-02-07T00:00:00.000Z',
			dateStr: '7th February 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-02-14T00:00:00.000Z',
			dateStr: '14th February 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-02-21T00:00:00.000Z',
			dateStr: '21st February 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-02-28T00:00:00.000Z',
			dateStr: '28th February 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-03-07T00:00:00.000Z',
			dateStr: '7th March 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-03-14T00:00:00.000Z',
			dateStr: '14th March 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-03-21T00:00:00.000Z',
			dateStr: '21st March 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-03-28T00:00:00.000Z',
			dateStr: '28th March 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-04-03T23:00:00.000Z',
			dateStr: '4th April 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-04-10T23:00:00.000Z',
			dateStr: '11th April 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-04-24T23:00:00.000Z',
			dateStr: '25th April 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-05-01T23:00:00.000Z',
			dateStr: '2nd May 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-05-08T23:00:00.000Z',
			dateStr: '9th May 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-05-15T23:00:00.000Z',
			dateStr: '16th May 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-05-22T23:00:00.000Z',
			dateStr: '23rd May 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-05-29T23:00:00.000Z',
			dateStr: '30th May 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-06-05T23:00:00.000Z',
			dateStr: '6th June 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-06-12T23:00:00.000Z',
			dateStr: '13th June 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-06-19T23:00:00.000Z',
			dateStr: '20th June 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-06-26T23:00:00.000Z',
			dateStr: '27th June 2025',
		},
	],
	FRIAA: [
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-07-06T23:00:00.000Z',
			dateStr: '7th July 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-07-13T23:00:00.000Z',
			dateStr: '14th July 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-07-20T23:00:00.000Z',
			dateStr: '21st July 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-07-27T23:00:00.000Z',
			dateStr: '28th July 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-08-03T23:00:00.000Z',
			dateStr: '4th August 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-08-10T23:00:00.000Z',
			dateStr: '11th August 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-08-17T23:00:00.000Z',
			dateStr: '18th August 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-08-24T23:00:00.000Z',
			dateStr: '25th August 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-08-31T23:00:00.000Z',
			dateStr: '1st September 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-09-07T23:00:00.000Z',
			dateStr: '8th September 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-09-14T23:00:00.000Z',
			dateStr: '15th September 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-09-21T23:00:00.000Z',
			dateStr: '22nd September 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-09-28T23:00:00.000Z',
			dateStr: '29th September 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-10-05T23:00:00.000Z',
			dateStr: '6th October 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-10-12T23:00:00.000Z',
			dateStr: '13th October 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-10-19T23:00:00.000Z',
			dateStr: '20th October 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-10-26T23:00:00.000Z',
			dateStr: '27th October 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-11-03T00:00:00.000Z',
			dateStr: '3rd November 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-11-10T00:00:00.000Z',
			dateStr: '10th November 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-11-17T00:00:00.000Z',
			dateStr: '17th November 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-11-24T00:00:00.000Z',
			dateStr: '24th November 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-12-01T00:00:00.000Z',
			dateStr: '1st December 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-12-08T00:00:00.000Z',
			dateStr: '8th December 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-12-15T00:00:00.000Z',
			dateStr: '15th December 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-12-22T00:00:00.000Z',
			dateStr: '22nd December 2023',
		},
		{
			color: ['Black Bin'],
			date: '2024-01-05T00:00:00.000Z',
			dateStr: '5th January 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-01-12T00:00:00.000Z',
			dateStr: '12th January 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-01-19T00:00:00.000Z',
			dateStr: '19th January 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-01-26T00:00:00.000Z',
			dateStr: '26th January 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-02-02T00:00:00.000Z',
			dateStr: '2nd February 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-02-09T00:00:00.000Z',
			dateStr: '9th February 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-02-16T00:00:00.000Z',
			dateStr: '16th February 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-02-23T00:00:00.000Z',
			dateStr: '23rd February 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-03-01T00:00:00.000Z',
			dateStr: '1st March 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-03-08T00:00:00.000Z',
			dateStr: '8th March 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-03-15T00:00:00.000Z',
			dateStr: '15th March 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-03-22T00:00:00.000Z',
			dateStr: '22nd March 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-03-28T00:00:00.000Z',
			dateStr: '28th March 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-04-04T23:00:00.000Z',
			dateStr: '5th April 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-04-11T23:00:00.000Z',
			dateStr: '12th April 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-04-18T23:00:00.000Z',
			dateStr: '19th April 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-04-25T23:00:00.000Z',
			dateStr: '26th April 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-05-02T23:00:00.000Z',
			dateStr: '3rd May 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-05-09T23:00:00.000Z',
			dateStr: '10th May 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-05-16T23:00:00.000Z',
			dateStr: '17th May 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-05-23T23:00:00.000Z',
			dateStr: '24th May 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-05-30T23:00:00.000Z',
			dateStr: '31st May 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-06-06T23:00:00.000Z',
			dateStr: '7th June 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-06-13T23:00:00.000Z',
			dateStr: '14th June 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-06-20T23:00:00.000Z',
			dateStr: '21st June 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-06-27T23:00:00.000Z',
			dateStr: '28th June 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-07-04T23:00:00.000Z',
			dateStr: '5th July 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-07-11T23:00:00.000Z',
			dateStr: '12th July 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-07-18T23:00:00.000Z',
			dateStr: '19th July 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-07-25T23:00:00.000Z',
			dateStr: '26th July 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-08-01T23:00:00.000Z',
			dateStr: '2nd August 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-08-08T23:00:00.000Z',
			dateStr: '9th August 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-08-15T23:00:00.000Z',
			dateStr: '16th August 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-08-22T23:00:00.000Z',
			dateStr: '23rd August 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-08-29T23:00:00.000Z',
			dateStr: '30th August 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-09-05T23:00:00.000Z',
			dateStr: '6th September 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-09-12T23:00:00.000Z',
			dateStr: '13th September 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-09-19T23:00:00.000Z',
			dateStr: '20th September 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-09-26T23:00:00.000Z',
			dateStr: '27th September 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-10-03T23:00:00.000Z',
			dateStr: '4th October 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-10-10T23:00:00.000Z',
			dateStr: '11th October 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-10-17T23:00:00.000Z',
			dateStr: '18th October 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-10-24T23:00:00.000Z',
			dateStr: '25th October 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-11-01T00:00:00.000Z',
			dateStr: '1st November 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-11-08T00:00:00.000Z',
			dateStr: '8th November 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-11-15T00:00:00.000Z',
			dateStr: '15th November 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-11-22T00:00:00.000Z',
			dateStr: '22nd November 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-11-29T00:00:00.000Z',
			dateStr: '29th November 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-12-06T00:00:00.000Z',
			dateStr: '6th December 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-12-13T00:00:00.000Z',
			dateStr: '13th December 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-12-20T00:00:00.000Z',
			dateStr: '20th December 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2025-01-10T00:00:00.000Z',
			dateStr: '10th January 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-01-17T00:00:00.000Z',
			dateStr: '17th January 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-01-24T00:00:00.000Z',
			dateStr: '24th January 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-01-31T00:00:00.000Z',
			dateStr: '31st January 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-02-07T00:00:00.000Z',
			dateStr: '7th February 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-02-14T00:00:00.000Z',
			dateStr: '14th February 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-02-21T00:00:00.000Z',
			dateStr: '21st February 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-02-28T00:00:00.000Z',
			dateStr: '28th February 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-03-07T00:00:00.000Z',
			dateStr: '7th March 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-03-21T00:00:00.000Z',
			dateStr: '21st March 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-03-28T00:00:00.000Z',
			dateStr: '28th March 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-04-03T23:00:00.000Z',
			dateStr: '4th April 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-04-10T23:00:00.000Z',
			dateStr: '11th April 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-04-24T23:00:00.000Z',
			dateStr: '25th April 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-05-01T23:00:00.000Z',
			dateStr: '2nd May 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-05-08T23:00:00.000Z',
			dateStr: '9th May 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-05-15T23:00:00.000Z',
			dateStr: '16th May 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-05-22T23:00:00.000Z',
			dateStr: '23rd May 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-05-29T23:00:00.000Z',
			dateStr: '30th May 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-06-05T23:00:00.000Z',
			dateStr: '6th June 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-06-12T23:00:00.000Z',
			dateStr: '13th June 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-06-19T23:00:00.000Z',
			dateStr: '20th June 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-06-26T23:00:00.000Z',
			dateStr: '27th June 2025',
		},
	],
	FRIBB: [
		{
			color: ['Brown Bin'],
			date: '2023-07-06T23:00:00.000Z',
			dateStr: '7th July 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-07-13T23:00:00.000Z',
			dateStr: '14th July 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-07-20T23:00:00.000Z',
			dateStr: '21st July 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-07-27T23:00:00.000Z',
			dateStr: '28th July 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-08-03T23:00:00.000Z',
			dateStr: '4th August 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-08-10T23:00:00.000Z',
			dateStr: '11th August 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-08-17T23:00:00.000Z',
			dateStr: '18th August 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-08-24T23:00:00.000Z',
			dateStr: '25th August 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-08-31T23:00:00.000Z',
			dateStr: '1st September 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-09-07T23:00:00.000Z',
			dateStr: '8th September 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-09-14T23:00:00.000Z',
			dateStr: '15th September 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-09-21T23:00:00.000Z',
			dateStr: '22nd September 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-09-28T23:00:00.000Z',
			dateStr: '29th September 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-10-05T23:00:00.000Z',
			dateStr: '6th October 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-10-12T23:00:00.000Z',
			dateStr: '13th October 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-10-19T23:00:00.000Z',
			dateStr: '20th October 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-10-26T23:00:00.000Z',
			dateStr: '27th October 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-11-03T00:00:00.000Z',
			dateStr: '3rd November 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-11-10T00:00:00.000Z',
			dateStr: '10th November 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-11-17T00:00:00.000Z',
			dateStr: '17th November 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-11-24T00:00:00.000Z',
			dateStr: '24th November 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-12-01T00:00:00.000Z',
			dateStr: '1st December 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-12-08T00:00:00.000Z',
			dateStr: '8th December 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-12-15T00:00:00.000Z',
			dateStr: '15th December 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-12-22T00:00:00.000Z',
			dateStr: '22nd December 2023',
		},
		{
			color: ['Black Bin'],
			date: '2024-01-05T00:00:00.000Z',
			dateStr: '5th January 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-01-12T00:00:00.000Z',
			dateStr: '12th January 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-01-19T00:00:00.000Z',
			dateStr: '19th January 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-01-26T00:00:00.000Z',
			dateStr: '26th January 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-02-02T00:00:00.000Z',
			dateStr: '2nd February 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-02-09T00:00:00.000Z',
			dateStr: '9th February 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-02-16T00:00:00.000Z',
			dateStr: '16th February 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-02-23T00:00:00.000Z',
			dateStr: '23rd February 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-03-01T00:00:00.000Z',
			dateStr: '1st March 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-03-08T00:00:00.000Z',
			dateStr: '8th March 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-03-15T00:00:00.000Z',
			dateStr: '15th March 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-03-22T00:00:00.000Z',
			dateStr: '22nd March 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-04-04T23:00:00.000Z',
			dateStr: '5th April 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-04-11T23:00:00.000Z',
			dateStr: '12th April 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-04-18T23:00:00.000Z',
			dateStr: '19th April 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-04-25T23:00:00.000Z',
			dateStr: '26th April 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-05-02T23:00:00.000Z',
			dateStr: '3rd May 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-05-09T23:00:00.000Z',
			dateStr: '10th May 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-05-16T23:00:00.000Z',
			dateStr: '17th May 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-05-23T23:00:00.000Z',
			dateStr: '24th May 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-05-30T23:00:00.000Z',
			dateStr: '31st May 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-06-06T23:00:00.000Z',
			dateStr: '7th June 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-06-13T23:00:00.000Z',
			dateStr: '14th June 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-06-20T23:00:00.000Z',
			dateStr: '21st June 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-06-27T23:00:00.000Z',
			dateStr: '28th June 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-07-04T23:00:00.000Z',
			dateStr: '5th July 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-07-11T23:00:00.000Z',
			dateStr: '12th July 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-07-18T23:00:00.000Z',
			dateStr: '19th July 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-07-25T23:00:00.000Z',
			dateStr: '26th July 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-08-01T23:00:00.000Z',
			dateStr: '2nd August 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-08-08T23:00:00.000Z',
			dateStr: '9th August 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-08-15T23:00:00.000Z',
			dateStr: '16th August 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-08-22T23:00:00.000Z',
			dateStr: '23rd August 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-08-29T23:00:00.000Z',
			dateStr: '30th August 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-09-05T23:00:00.000Z',
			dateStr: '6th September 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-09-12T23:00:00.000Z',
			dateStr: '13th September 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-09-19T23:00:00.000Z',
			dateStr: '20th September 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-09-26T23:00:00.000Z',
			dateStr: '27th September 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-10-03T23:00:00.000Z',
			dateStr: '4th October 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-10-10T23:00:00.000Z',
			dateStr: '11th October 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-10-17T23:00:00.000Z',
			dateStr: '18th October 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-10-24T23:00:00.000Z',
			dateStr: '25th October 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-11-01T00:00:00.000Z',
			dateStr: '1st November 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-11-08T00:00:00.000Z',
			dateStr: '8th November 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-11-15T00:00:00.000Z',
			dateStr: '15th November 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-11-22T00:00:00.000Z',
			dateStr: '22nd November 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-11-29T00:00:00.000Z',
			dateStr: '29th November 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-12-06T00:00:00.000Z',
			dateStr: '6th December 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-12-13T00:00:00.000Z',
			dateStr: '13th December 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-12-20T00:00:00.000Z',
			dateStr: '20th December 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-12-28T00:00:00.000Z',
			dateStr: '28th December 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2025-01-10T00:00:00.000Z',
			dateStr: '10th January 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-01-17T00:00:00.000Z',
			dateStr: '17th January 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-01-24T00:00:00.000Z',
			dateStr: '24th January 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-01-31T00:00:00.000Z',
			dateStr: '31st January 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-02-07T00:00:00.000Z',
			dateStr: '7th February 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-02-14T00:00:00.000Z',
			dateStr: '14th February 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-02-21T00:00:00.000Z',
			dateStr: '21st February 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-02-28T00:00:00.000Z',
			dateStr: '28th February 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-03-07T00:00:00.000Z',
			dateStr: '7th March 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-03-14T00:00:00.000Z',
			dateStr: '14th March 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-03-21T00:00:00.000Z',
			dateStr: '21st March 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-03-28T00:00:00.000Z',
			dateStr: '28th March 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-04-03T23:00:00.000Z',
			dateStr: '4th April 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-04-10T23:00:00.000Z',
			dateStr: '11th April 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-04-16T23:00:00.000Z',
			dateStr: '17th April 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-04-24T23:00:00.000Z',
			dateStr: '25th April 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-05-01T23:00:00.000Z',
			dateStr: '2nd May 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-05-08T23:00:00.000Z',
			dateStr: '9th May 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-05-15T23:00:00.000Z',
			dateStr: '16th May 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-05-22T23:00:00.000Z',
			dateStr: '23rd May 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-05-29T23:00:00.000Z',
			dateStr: '30th May 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-06-05T23:00:00.000Z',
			dateStr: '6th June 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-06-12T23:00:00.000Z',
			dateStr: '13th June 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-06-19T23:00:00.000Z',
			dateStr: '20th June 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-06-26T23:00:00.000Z',
			dateStr: '27th June 2025',
		},
	],
	FRICC: [
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-07-06T23:00:00.000Z',
			dateStr: '7th July 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-07-13T23:00:00.000Z',
			dateStr: '14th July 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-07-20T23:00:00.000Z',
			dateStr: '21st July 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-07-27T23:00:00.000Z',
			dateStr: '28th July 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-08-03T23:00:00.000Z',
			dateStr: '4th August 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-08-10T23:00:00.000Z',
			dateStr: '11th August 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-08-17T23:00:00.000Z',
			dateStr: '18th August 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-08-24T23:00:00.000Z',
			dateStr: '25th August 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-08-31T23:00:00.000Z',
			dateStr: '1st September 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-09-07T23:00:00.000Z',
			dateStr: '8th September 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-09-14T23:00:00.000Z',
			dateStr: '15th September 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-09-21T23:00:00.000Z',
			dateStr: '22nd September 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-09-28T23:00:00.000Z',
			dateStr: '29th September 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-10-05T23:00:00.000Z',
			dateStr: '6th October 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-10-12T23:00:00.000Z',
			dateStr: '13th October 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-10-19T23:00:00.000Z',
			dateStr: '20th October 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-10-26T23:00:00.000Z',
			dateStr: '27th October 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-11-03T00:00:00.000Z',
			dateStr: '3rd November 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-11-10T00:00:00.000Z',
			dateStr: '10th November 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-11-17T00:00:00.000Z',
			dateStr: '17th November 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-11-24T00:00:00.000Z',
			dateStr: '24th November 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-12-01T00:00:00.000Z',
			dateStr: '1st December 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-12-08T00:00:00.000Z',
			dateStr: '8th December 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-12-15T00:00:00.000Z',
			dateStr: '15th December 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-12-22T00:00:00.000Z',
			dateStr: '22nd December 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2024-01-05T00:00:00.000Z',
			dateStr: '5th January 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-01-12T00:00:00.000Z',
			dateStr: '12th January 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-01-19T00:00:00.000Z',
			dateStr: '19th January 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-01-26T00:00:00.000Z',
			dateStr: '26th January 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-02-02T00:00:00.000Z',
			dateStr: '2nd February 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-02-09T00:00:00.000Z',
			dateStr: '9th February 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-02-16T00:00:00.000Z',
			dateStr: '16th February 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-02-23T00:00:00.000Z',
			dateStr: '23rd February 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-03-01T00:00:00.000Z',
			dateStr: '1st March 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-03-08T00:00:00.000Z',
			dateStr: '8th March 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-03-15T00:00:00.000Z',
			dateStr: '15th March 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-03-22T00:00:00.000Z',
			dateStr: '22nd March 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-03-28T00:00:00.000Z',
			dateStr: '28th March 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-04-04T23:00:00.000Z',
			dateStr: '5th April 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-04-11T23:00:00.000Z',
			dateStr: '12th April 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-04-18T23:00:00.000Z',
			dateStr: '19th April 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-04-25T23:00:00.000Z',
			dateStr: '26th April 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-05-02T23:00:00.000Z',
			dateStr: '3rd May 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-05-09T23:00:00.000Z',
			dateStr: '10th May 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-05-16T23:00:00.000Z',
			dateStr: '17th May 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-05-23T23:00:00.000Z',
			dateStr: '24th May 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-05-30T23:00:00.000Z',
			dateStr: '31st May 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-06-06T23:00:00.000Z',
			dateStr: '7th June 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-06-13T23:00:00.000Z',
			dateStr: '14th June 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-06-20T23:00:00.000Z',
			dateStr: '21st June 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-06-27T23:00:00.000Z',
			dateStr: '28th June 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-07-04T23:00:00.000Z',
			dateStr: '5th July 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-07-11T23:00:00.000Z',
			dateStr: '12th July 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-07-18T23:00:00.000Z',
			dateStr: '19th July 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-07-25T23:00:00.000Z',
			dateStr: '26th July 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-08-01T23:00:00.000Z',
			dateStr: '2nd August 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-08-08T23:00:00.000Z',
			dateStr: '9th August 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-08-15T23:00:00.000Z',
			dateStr: '16th August 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-08-22T23:00:00.000Z',
			dateStr: '23rd August 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-08-29T23:00:00.000Z',
			dateStr: '30th August 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-09-05T23:00:00.000Z',
			dateStr: '6th September 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-09-12T23:00:00.000Z',
			dateStr: '13th September 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-09-19T23:00:00.000Z',
			dateStr: '20th September 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-09-26T23:00:00.000Z',
			dateStr: '27th September 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-10-03T23:00:00.000Z',
			dateStr: '4th October 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-10-10T23:00:00.000Z',
			dateStr: '11th October 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-10-17T23:00:00.000Z',
			dateStr: '18th October 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-10-24T23:00:00.000Z',
			dateStr: '25th October 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-11-01T00:00:00.000Z',
			dateStr: '1st November 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-11-08T00:00:00.000Z',
			dateStr: '8th November 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-11-15T00:00:00.000Z',
			dateStr: '15th November 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-11-22T00:00:00.000Z',
			dateStr: '22nd November 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-11-29T00:00:00.000Z',
			dateStr: '29th November 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-12-06T00:00:00.000Z',
			dateStr: '6th December 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-12-13T00:00:00.000Z',
			dateStr: '13th December 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-12-20T00:00:00.000Z',
			dateStr: '20th December 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2025-01-10T00:00:00.000Z',
			dateStr: '10th January 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-01-17T00:00:00.000Z',
			dateStr: '17th January 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-01-24T00:00:00.000Z',
			dateStr: '24th January 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-01-31T00:00:00.000Z',
			dateStr: '31st January 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-02-07T00:00:00.000Z',
			dateStr: '7th February 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-02-14T00:00:00.000Z',
			dateStr: '14th February 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-02-21T00:00:00.000Z',
			dateStr: '21st February 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-02-28T00:00:00.000Z',
			dateStr: '28th February 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-03-07T00:00:00.000Z',
			dateStr: '7th March 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-03-21T00:00:00.000Z',
			dateStr: '21st March 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-03-28T00:00:00.000Z',
			dateStr: '28th March 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-04-03T23:00:00.000Z',
			dateStr: '4th April 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-04-10T23:00:00.000Z',
			dateStr: '11th April 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-04-24T23:00:00.000Z',
			dateStr: '25th April 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-05-01T23:00:00.000Z',
			dateStr: '2nd May 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-05-08T23:00:00.000Z',
			dateStr: '9th May 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-05-15T23:00:00.000Z',
			dateStr: '16th May 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-05-22T23:00:00.000Z',
			dateStr: '23rd May 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-05-29T23:00:00.000Z',
			dateStr: '30th May 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-06-05T23:00:00.000Z',
			dateStr: '6th June 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-06-12T23:00:00.000Z',
			dateStr: '13th June 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-06-19T23:00:00.000Z',
			dateStr: '20th June 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-06-26T23:00:00.000Z',
			dateStr: '27th June 2025',
		},
	],
	FRIDD: [
		{
			color: ['Blue Bin'],
			date: '2023-07-06T23:00:00.000Z',
			dateStr: '7th July 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-07-13T23:00:00.000Z',
			dateStr: '14th July 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-07-20T23:00:00.000Z',
			dateStr: '21st July 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-07-27T23:00:00.000Z',
			dateStr: '28th July 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-08-03T23:00:00.000Z',
			dateStr: '4th August 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-08-10T23:00:00.000Z',
			dateStr: '11th August 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-08-17T23:00:00.000Z',
			dateStr: '18th August 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-08-24T23:00:00.000Z',
			dateStr: '25th August 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-08-31T23:00:00.000Z',
			dateStr: '1st September 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-09-07T23:00:00.000Z',
			dateStr: '8th September 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-09-14T23:00:00.000Z',
			dateStr: '15th September 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-09-21T23:00:00.000Z',
			dateStr: '22nd September 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-09-28T23:00:00.000Z',
			dateStr: '29th September 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-10-05T23:00:00.000Z',
			dateStr: '6th October 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-10-12T23:00:00.000Z',
			dateStr: '13th October 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-10-19T23:00:00.000Z',
			dateStr: '20th October 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-10-26T23:00:00.000Z',
			dateStr: '27th October 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-11-03T00:00:00.000Z',
			dateStr: '3rd November 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-11-10T00:00:00.000Z',
			dateStr: '10th November 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-11-17T00:00:00.000Z',
			dateStr: '17th November 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-11-24T00:00:00.000Z',
			dateStr: '24th November 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-12-01T00:00:00.000Z',
			dateStr: '1st December 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-12-08T00:00:00.000Z',
			dateStr: '8th December 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-12-15T00:00:00.000Z',
			dateStr: '15th December 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-12-22T00:00:00.000Z',
			dateStr: '22nd December 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2024-01-05T00:00:00.000Z',
			dateStr: '5th January 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-01-12T00:00:00.000Z',
			dateStr: '12th January 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-01-19T00:00:00.000Z',
			dateStr: '19th January 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-01-26T00:00:00.000Z',
			dateStr: '26th January 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-02-02T00:00:00.000Z',
			dateStr: '2nd February 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-02-09T00:00:00.000Z',
			dateStr: '9th February 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-02-16T00:00:00.000Z',
			dateStr: '16th February 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-02-23T00:00:00.000Z',
			dateStr: '23rd February 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-03-01T00:00:00.000Z',
			dateStr: '1st March 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-03-08T00:00:00.000Z',
			dateStr: '8th March 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-03-15T00:00:00.000Z',
			dateStr: '15th March 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-03-22T00:00:00.000Z',
			dateStr: '22nd March 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-04-04T23:00:00.000Z',
			dateStr: '5th April 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-04-11T23:00:00.000Z',
			dateStr: '12th April 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-04-18T23:00:00.000Z',
			dateStr: '19th April 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-04-25T23:00:00.000Z',
			dateStr: '26th April 2024',
		},
		{
			color: ['Black Bin', 'Green'],
			date: '2024-05-02T23:00:00.000Z',
			dateStr: '3rd May 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-05-09T23:00:00.000Z',
			dateStr: '10th May 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-05-16T23:00:00.000Z',
			dateStr: '17th May 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-05-23T23:00:00.000Z',
			dateStr: '24th May 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-05-30T23:00:00.000Z',
			dateStr: '31st May 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-06-06T23:00:00.000Z',
			dateStr: '7th June 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-06-13T23:00:00.000Z',
			dateStr: '14th June 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-06-20T23:00:00.000Z',
			dateStr: '21st June 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-06-27T23:00:00.000Z',
			dateStr: '28th June 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-07-04T23:00:00.000Z',
			dateStr: '5th July 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-07-11T23:00:00.000Z',
			dateStr: '12th July 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-07-18T23:00:00.000Z',
			dateStr: '19th July 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-07-25T23:00:00.000Z',
			dateStr: '26th July 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-08-01T23:00:00.000Z',
			dateStr: '2nd August 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-08-08T23:00:00.000Z',
			dateStr: '9th August 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-08-15T23:00:00.000Z',
			dateStr: '16th August 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-08-22T23:00:00.000Z',
			dateStr: '23rd August 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-08-29T23:00:00.000Z',
			dateStr: '30th August 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-09-05T23:00:00.000Z',
			dateStr: '6th September 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-09-12T23:00:00.000Z',
			dateStr: '13th September 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-09-19T23:00:00.000Z',
			dateStr: '20th September 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-09-26T23:00:00.000Z',
			dateStr: '27th September 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-10-03T23:00:00.000Z',
			dateStr: '4th October 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-10-10T23:00:00.000Z',
			dateStr: '11th October 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-10-17T23:00:00.000Z',
			dateStr: '18th October 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-10-24T23:00:00.000Z',
			dateStr: '25th October 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-11-01T00:00:00.000Z',
			dateStr: '1st November 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-11-08T00:00:00.000Z',
			dateStr: '8th November 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-11-15T00:00:00.000Z',
			dateStr: '15th November 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-11-22T00:00:00.000Z',
			dateStr: '22nd November 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-11-29T00:00:00.000Z',
			dateStr: '29th November 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-12-06T00:00:00.000Z',
			dateStr: '6th December 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-12-13T00:00:00.000Z',
			dateStr: '13th December 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-12-20T00:00:00.000Z',
			dateStr: '20th December 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-12-28T00:00:00.000Z',
			dateStr: '28th December 2024',
		},
		{
			color: ['Black Bin'],
			date: '2025-01-10T00:00:00.000Z',
			dateStr: '10th January 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-01-17T00:00:00.000Z',
			dateStr: '17th January 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-01-24T00:00:00.000Z',
			dateStr: '24th January 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-01-31T00:00:00.000Z',
			dateStr: '31st January 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-02-07T00:00:00.000Z',
			dateStr: '7th February 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-02-14T00:00:00.000Z',
			dateStr: '14th February 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-02-21T00:00:00.000Z',
			dateStr: '21st February 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-02-28T00:00:00.000Z',
			dateStr: '28th February 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-03-07T00:00:00.000Z',
			dateStr: '7th March 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-03-14T00:00:00.000Z',
			dateStr: '14th March 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-03-21T00:00:00.000Z',
			dateStr: '21st March 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-03-28T00:00:00.000Z',
			dateStr: '28th March 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-04-03T23:00:00.000Z',
			dateStr: '4th April 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-04-10T23:00:00.000Z',
			dateStr: '11th April 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-04-24T23:00:00.000Z',
			dateStr: '25th April 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-05-01T23:00:00.000Z',
			dateStr: '2nd May 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-05-08T23:00:00.000Z',
			dateStr: '9th May 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-05-15T23:00:00.000Z',
			dateStr: '16th May 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-05-22T23:00:00.000Z',
			dateStr: '23rd May 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-05-29T23:00:00.000Z',
			dateStr: '30th May 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-06-05T23:00:00.000Z',
			dateStr: '6th June 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-06-12T23:00:00.000Z',
			dateStr: '13th June 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-06-19T23:00:00.000Z',
			dateStr: '20th June 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-06-26T23:00:00.000Z',
			dateStr: '27th June 2025',
		},
	],
	TUECC: [
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-07-03T23:00:00.000Z',
			dateStr: '4th July 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-07-10T23:00:00.000Z',
			dateStr: '11th July 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-07-17T23:00:00.000Z',
			dateStr: '18th July 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-07-24T23:00:00.000Z',
			dateStr: '25th July 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-07-31T23:00:00.000Z',
			dateStr: '1st August 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-08-07T23:00:00.000Z',
			dateStr: '8th August 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-08-14T23:00:00.000Z',
			dateStr: '15th August 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-08-21T23:00:00.000Z',
			dateStr: '22nd August 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-08-28T23:00:00.000Z',
			dateStr: '29th August 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-09-04T23:00:00.000Z',
			dateStr: '5th September 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-09-11T23:00:00.000Z',
			dateStr: '12th September 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-09-18T23:00:00.000Z',
			dateStr: '19th September 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-09-25T23:00:00.000Z',
			dateStr: '26th September 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-10-02T23:00:00.000Z',
			dateStr: '3rd October 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-10-09T23:00:00.000Z',
			dateStr: '10th October 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-10-16T23:00:00.000Z',
			dateStr: '17th October 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-10-23T23:00:00.000Z',
			dateStr: '24th October 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-10-31T00:00:00.000Z',
			dateStr: '31st October 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-11-07T00:00:00.000Z',
			dateStr: '7th November 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-11-14T00:00:00.000Z',
			dateStr: '14th November 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-11-21T00:00:00.000Z',
			dateStr: '21st November 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-11-28T00:00:00.000Z',
			dateStr: '28th November 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-12-05T00:00:00.000Z',
			dateStr: '5th December 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-12-12T00:00:00.000Z',
			dateStr: '12th December 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-12-19T00:00:00.000Z',
			dateStr: '19th December 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2024-01-02T00:00:00.000Z',
			dateStr: '2nd January 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-01-09T00:00:00.000Z',
			dateStr: '9th January 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-01-16T00:00:00.000Z',
			dateStr: '16th January 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-01-23T00:00:00.000Z',
			dateStr: '23rd January 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-01-30T00:00:00.000Z',
			dateStr: '30th January 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-02-06T00:00:00.000Z',
			dateStr: '6th February 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-02-13T00:00:00.000Z',
			dateStr: '13th February 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-02-20T00:00:00.000Z',
			dateStr: '20th February 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-02-27T00:00:00.000Z',
			dateStr: '27th February 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-03-05T00:00:00.000Z',
			dateStr: '5th March 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-03-12T00:00:00.000Z',
			dateStr: '12th March 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-03-19T00:00:00.000Z',
			dateStr: '19th March 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-04-01T23:00:00.000Z',
			dateStr: '2nd April 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-04-08T23:00:00.000Z',
			dateStr: '9th April 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-04-15T23:00:00.000Z',
			dateStr: '16th April 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-04-22T23:00:00.000Z',
			dateStr: '23rd April 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-04-29T23:00:00.000Z',
			dateStr: '30th April 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-05-06T23:00:00.000Z',
			dateStr: '7th May 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-05-13T23:00:00.000Z',
			dateStr: '14th May 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-05-20T23:00:00.000Z',
			dateStr: '21st May 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-05-27T23:00:00.000Z',
			dateStr: '28th May 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-06-03T23:00:00.000Z',
			dateStr: '4th June 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-06-10T23:00:00.000Z',
			dateStr: '11th June 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-06-17T23:00:00.000Z',
			dateStr: '18th June 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-06-24T23:00:00.000Z',
			dateStr: '25th June 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-07-01T23:00:00.000Z',
			dateStr: '2nd July 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-07-08T23:00:00.000Z',
			dateStr: '9th July 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-07-15T23:00:00.000Z',
			dateStr: '16th July 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-07-22T23:00:00.000Z',
			dateStr: '23rd July 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-07-29T23:00:00.000Z',
			dateStr: '30th July 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-08-05T23:00:00.000Z',
			dateStr: '6th August 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-08-12T23:00:00.000Z',
			dateStr: '13th August 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-08-19T23:00:00.000Z',
			dateStr: '20th August 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-08-26T23:00:00.000Z',
			dateStr: '27th August 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-09-02T23:00:00.000Z',
			dateStr: '3rd September 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-09-09T23:00:00.000Z',
			dateStr: '10th September 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-09-16T23:00:00.000Z',
			dateStr: '17th September 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-09-23T23:00:00.000Z',
			dateStr: '24th September 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-09-30T23:00:00.000Z',
			dateStr: '1st October 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-10-07T23:00:00.000Z',
			dateStr: '8th October 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-10-14T23:00:00.000Z',
			dateStr: '15th October 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-10-21T23:00:00.000Z',
			dateStr: '22nd October 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-10-29T00:00:00.000Z',
			dateStr: '29th October 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-11-05T00:00:00.000Z',
			dateStr: '5th November 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-11-12T00:00:00.000Z',
			dateStr: '12th November 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-11-19T00:00:00.000Z',
			dateStr: '19th November 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-11-26T00:00:00.000Z',
			dateStr: '26th November 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-12-03T00:00:00.000Z',
			dateStr: '3rd December 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-12-10T00:00:00.000Z',
			dateStr: '10th December 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-12-17T00:00:00.000Z',
			dateStr: '17th December 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-12-31T00:00:00.000Z',
			dateStr: '31st December 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2025-01-07T00:00:00.000Z',
			dateStr: '7th January 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-01-14T00:00:00.000Z',
			dateStr: '14th January 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-01-21T00:00:00.000Z',
			dateStr: '21st January 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-01-28T00:00:00.000Z',
			dateStr: '28th January 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-02-04T00:00:00.000Z',
			dateStr: '4th February 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-02-11T00:00:00.000Z',
			dateStr: '11th February 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-02-18T00:00:00.000Z',
			dateStr: '18th February 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-02-25T00:00:00.000Z',
			dateStr: '25th February 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-03-04T00:00:00.000Z',
			dateStr: '4th March 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-03-11T00:00:00.000Z',
			dateStr: '11th March 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-03-18T00:00:00.000Z',
			dateStr: '18th March 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-03-25T00:00:00.000Z',
			dateStr: '25th March 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-03-31T23:00:00.000Z',
			dateStr: '1st April 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-04-07T23:00:00.000Z',
			dateStr: '8th April 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-04-21T23:00:00.000Z',
			dateStr: '22nd April 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-04-28T23:00:00.000Z',
			dateStr: '29th April 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-05-05T23:00:00.000Z',
			dateStr: '6th May 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-05-12T23:00:00.000Z',
			dateStr: '13th May 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-05-19T23:00:00.000Z',
			dateStr: '20th May 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-05-26T23:00:00.000Z',
			dateStr: '27th May 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-06-02T23:00:00.000Z',
			dateStr: '3rd June 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-06-09T23:00:00.000Z',
			dateStr: '10th June 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-06-16T23:00:00.000Z',
			dateStr: '17th June 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-06-23T23:00:00.000Z',
			dateStr: '24th June 2025',
		},
	],
	TUEBB: [
		{
			color: ['Brown Bin'],
			date: '2023-07-03T23:00:00.000Z',
			dateStr: '4th July 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-07-10T23:00:00.000Z',
			dateStr: '11th July 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-07-17T23:00:00.000Z',
			dateStr: '18th July 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-07-24T23:00:00.000Z',
			dateStr: '25th July 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-07-31T23:00:00.000Z',
			dateStr: '1st August 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-08-07T23:00:00.000Z',
			dateStr: '8th August 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-08-14T23:00:00.000Z',
			dateStr: '15th August 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-08-21T23:00:00.000Z',
			dateStr: '22nd August 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-08-28T23:00:00.000Z',
			dateStr: '29th August 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-09-04T23:00:00.000Z',
			dateStr: '5th September 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-09-11T23:00:00.000Z',
			dateStr: '12th September 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-09-18T23:00:00.000Z',
			dateStr: '19th September 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-09-25T23:00:00.000Z',
			dateStr: '26th September 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-10-02T23:00:00.000Z',
			dateStr: '3rd October 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-10-09T23:00:00.000Z',
			dateStr: '10th October 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-10-23T23:00:00.000Z',
			dateStr: '24th October 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-10-31T00:00:00.000Z',
			dateStr: '31st October 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-11-07T00:00:00.000Z',
			dateStr: '7th November 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-11-14T00:00:00.000Z',
			dateStr: '14th November 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-11-21T00:00:00.000Z',
			dateStr: '21st November 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-11-28T00:00:00.000Z',
			dateStr: '28th November 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-12-05T00:00:00.000Z',
			dateStr: '5th December 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-12-12T00:00:00.000Z',
			dateStr: '12th December 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-12-19T00:00:00.000Z',
			dateStr: '19th December 2023',
		},
		{
			color: ['Black Bin'],
			date: '2024-01-02T00:00:00.000Z',
			dateStr: '2nd January 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-01-09T00:00:00.000Z',
			dateStr: '9th January 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-01-16T00:00:00.000Z',
			dateStr: '16th January 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-01-23T00:00:00.000Z',
			dateStr: '23rd January 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-01-30T00:00:00.000Z',
			dateStr: '30th January 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-02-06T00:00:00.000Z',
			dateStr: '6th February 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-02-13T00:00:00.000Z',
			dateStr: '13th February 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-02-20T00:00:00.000Z',
			dateStr: '20th February 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-02-27T00:00:00.000Z',
			dateStr: '27th February 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-03-05T00:00:00.000Z',
			dateStr: '5th March 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-03-12T00:00:00.000Z',
			dateStr: '12th March 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-03-19T00:00:00.000Z',
			dateStr: '19th March 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-04-01T23:00:00.000Z',
			dateStr: '2nd April 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-04-08T23:00:00.000Z',
			dateStr: '9th April 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-04-15T23:00:00.000Z',
			dateStr: '16th April 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-04-22T23:00:00.000Z',
			dateStr: '23rd April 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-04-29T23:00:00.000Z',
			dateStr: '30th April 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-05-06T23:00:00.000Z',
			dateStr: '7th May 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-05-13T23:00:00.000Z',
			dateStr: '14th May 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-05-20T23:00:00.000Z',
			dateStr: '21st May 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-05-27T23:00:00.000Z',
			dateStr: '28th May 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-06-03T23:00:00.000Z',
			dateStr: '4th June 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-06-10T23:00:00.000Z',
			dateStr: '11th June 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-06-17T23:00:00.000Z',
			dateStr: '18th June 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-06-24T23:00:00.000Z',
			dateStr: '25th June 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-07-01T23:00:00.000Z',
			dateStr: '2nd July 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-07-08T23:00:00.000Z',
			dateStr: '9th July 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-07-15T23:00:00.000Z',
			dateStr: '16th July 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-07-22T23:00:00.000Z',
			dateStr: '23rd July 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-07-29T23:00:00.000Z',
			dateStr: '30th July 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-08-05T23:00:00.000Z',
			dateStr: '6th August 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-08-12T23:00:00.000Z',
			dateStr: '13th August 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-08-19T23:00:00.000Z',
			dateStr: '20th August 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-08-26T23:00:00.000Z',
			dateStr: '27th August 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-09-02T23:00:00.000Z',
			dateStr: '3rd September 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-09-09T23:00:00.000Z',
			dateStr: '10th September 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-09-16T23:00:00.000Z',
			dateStr: '17th September 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-09-23T23:00:00.000Z',
			dateStr: '24th September 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-09-30T23:00:00.000Z',
			dateStr: '1st October 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-10-07T23:00:00.000Z',
			dateStr: '8th October 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-10-14T23:00:00.000Z',
			dateStr: '15th October 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-10-21T23:00:00.000Z',
			dateStr: '22nd October 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-10-29T00:00:00.000Z',
			dateStr: '29th October 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-11-05T00:00:00.000Z',
			dateStr: '5th November 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-11-12T00:00:00.000Z',
			dateStr: '12th November 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-11-19T00:00:00.000Z',
			dateStr: '19th November 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-11-26T00:00:00.000Z',
			dateStr: '26th November 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-12-03T00:00:00.000Z',
			dateStr: '3rd December 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-12-10T00:00:00.000Z',
			dateStr: '10th December 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-12-17T00:00:00.000Z',
			dateStr: '17th December 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-12-23T00:00:00.000Z',
			dateStr: '23rd December 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-12-31T00:00:00.000Z',
			dateStr: '31st December 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2025-01-07T00:00:00.000Z',
			dateStr: '7th January 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-01-14T00:00:00.000Z',
			dateStr: '14th January 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-01-21T00:00:00.000Z',
			dateStr: '21st January 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-01-28T00:00:00.000Z',
			dateStr: '28th January 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-02-04T00:00:00.000Z',
			dateStr: '4th February 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-02-11T00:00:00.000Z',
			dateStr: '11th February 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-02-18T00:00:00.000Z',
			dateStr: '18th February 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-02-25T00:00:00.000Z',
			dateStr: '25th February 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-03-04T00:00:00.000Z',
			dateStr: '4th March 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-03-11T00:00:00.000Z',
			dateStr: '11th March 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-03-18T00:00:00.000Z',
			dateStr: '18th March 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-03-25T00:00:00.000Z',
			dateStr: '25th March 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-03-31T23:00:00.000Z',
			dateStr: '1st April 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-04-07T23:00:00.000Z',
			dateStr: '8th April 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-03-22T00:00:00.000Z',
			dateStr: '22nd March 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-03-29T00:00:00.000Z',
			dateStr: '29th March 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-05-05T23:00:00.000Z',
			dateStr: '6th May 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-05-12T23:00:00.000Z',
			dateStr: '13th May 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-05-19T23:00:00.000Z',
			dateStr: '20th May 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-05-26T23:00:00.000Z',
			dateStr: '27th May 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-06-02T23:00:00.000Z',
			dateStr: '3rd June 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-06-09T23:00:00.000Z',
			dateStr: '10th June 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-06-16T23:00:00.000Z',
			dateStr: '17th June 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-06-23T23:00:00.000Z',
			dateStr: '24th June 2025',
		},
	],
	TUEDD: [
		{
			color: ['Blue Bin'],
			date: '2023-07-03T23:00:00.000Z',
			dateStr: '4th July 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-07-10T23:00:00.000Z',
			dateStr: '11th July 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-07-17T23:00:00.000Z',
			dateStr: '18th July 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-07-24T23:00:00.000Z',
			dateStr: '25th July 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-07-31T23:00:00.000Z',
			dateStr: '1st August 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-08-07T23:00:00.000Z',
			dateStr: '8th August 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-08-14T23:00:00.000Z',
			dateStr: '15th August 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-08-21T23:00:00.000Z',
			dateStr: '22nd August 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-08-28T23:00:00.000Z',
			dateStr: '29th August 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-09-04T23:00:00.000Z',
			dateStr: '5th September 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-09-11T23:00:00.000Z',
			dateStr: '12th September 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-09-18T23:00:00.000Z',
			dateStr: '19th September 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-09-25T23:00:00.000Z',
			dateStr: '26th September 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-10-02T23:00:00.000Z',
			dateStr: '3rd October 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-10-09T23:00:00.000Z',
			dateStr: '10th October 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-10-16T23:00:00.000Z',
			dateStr: '17th October 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-10-23T23:00:00.000Z',
			dateStr: '24th October 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-10-31T00:00:00.000Z',
			dateStr: '31st October 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-11-07T00:00:00.000Z',
			dateStr: '7th November 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-11-14T00:00:00.000Z',
			dateStr: '14th November 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-11-21T00:00:00.000Z',
			dateStr: '21st November 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-11-28T00:00:00.000Z',
			dateStr: '28th November 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-12-05T00:00:00.000Z',
			dateStr: '5th December 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-12-12T00:00:00.000Z',
			dateStr: '12th December 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-12-19T00:00:00.000Z',
			dateStr: '19th December 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2024-01-02T00:00:00.000Z',
			dateStr: '2nd January 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-01-09T00:00:00.000Z',
			dateStr: '9th January 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-01-16T00:00:00.000Z',
			dateStr: '16th January 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-01-23T00:00:00.000Z',
			dateStr: '23rd January 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-01-30T00:00:00.000Z',
			dateStr: '30th January 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-02-06T00:00:00.000Z',
			dateStr: '6th February 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-02-13T00:00:00.000Z',
			dateStr: '13th February 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-02-20T00:00:00.000Z',
			dateStr: '20th February 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-02-27T00:00:00.000Z',
			dateStr: '27th February 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-03-05T00:00:00.000Z',
			dateStr: '5th March 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-03-12T00:00:00.000Z',
			dateStr: '12th March 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-03-19T00:00:00.000Z',
			dateStr: '19th March 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-04-01T23:00:00.000Z',
			dateStr: '2nd April 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-04-08T23:00:00.000Z',
			dateStr: '9th April 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-04-22T23:00:00.000Z',
			dateStr: '23rd April 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-04-29T23:00:00.000Z',
			dateStr: '30th April 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-05-06T23:00:00.000Z',
			dateStr: '7th May 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-05-13T23:00:00.000Z',
			dateStr: '14th May 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-05-20T23:00:00.000Z',
			dateStr: '21st May 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-05-27T23:00:00.000Z',
			dateStr: '28th May 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-06-03T23:00:00.000Z',
			dateStr: '4th June 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-06-10T23:00:00.000Z',
			dateStr: '11th June 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-06-17T23:00:00.000Z',
			dateStr: '18th June 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-06-24T23:00:00.000Z',
			dateStr: '25th June 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-07-01T23:00:00.000Z',
			dateStr: '2nd July 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-07-08T23:00:00.000Z',
			dateStr: '9th July 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-07-15T23:00:00.000Z',
			dateStr: '16th July 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-07-22T23:00:00.000Z',
			dateStr: '23rd July 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-07-29T23:00:00.000Z',
			dateStr: '30th July 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-08-05T23:00:00.000Z',
			dateStr: '6th August 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-08-12T23:00:00.000Z',
			dateStr: '13th August 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-08-19T23:00:00.000Z',
			dateStr: '20th August 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-08-26T23:00:00.000Z',
			dateStr: '27th August 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-09-02T23:00:00.000Z',
			dateStr: '3rd September 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-09-09T23:00:00.000Z',
			dateStr: '10th September 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-09-16T23:00:00.000Z',
			dateStr: '17th September 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-09-23T23:00:00.000Z',
			dateStr: '24th September 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-09-30T23:00:00.000Z',
			dateStr: '1st October 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-10-07T23:00:00.000Z',
			dateStr: '8th October 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-10-14T23:00:00.000Z',
			dateStr: '15th October 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-10-21T23:00:00.000Z',
			dateStr: '22nd October 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-10-29T00:00:00.000Z',
			dateStr: '29th October 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-11-05T00:00:00.000Z',
			dateStr: '5th November 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-11-12T00:00:00.000Z',
			dateStr: '12th November 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-11-19T00:00:00.000Z',
			dateStr: '19th November 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-11-26T00:00:00.000Z',
			dateStr: '26th November 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-12-03T00:00:00.000Z',
			dateStr: '3rd December 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-12-10T00:00:00.000Z',
			dateStr: '10th December 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-12-17T00:00:00.000Z',
			dateStr: '17th December 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-12-23T00:00:00.000Z',
			dateStr: '23rd December 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-12-31T00:00:00.000Z',
			dateStr: '31st December 2024',
		},
		{
			color: ['Black Bin'],
			date: '2025-01-07T00:00:00.000Z',
			dateStr: '7th January 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-01-14T00:00:00.000Z',
			dateStr: '14th January 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-01-21T00:00:00.000Z',
			dateStr: '21st January 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-01-28T00:00:00.000Z',
			dateStr: '28th January 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-02-04T00:00:00.000Z',
			dateStr: '4th February 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-02-11T00:00:00.000Z',
			dateStr: '11th February 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-02-18T00:00:00.000Z',
			dateStr: '18th February 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-02-25T00:00:00.000Z',
			dateStr: '25th February 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-03-04T00:00:00.000Z',
			dateStr: '4th March 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-03-11T00:00:00.000Z',
			dateStr: '11th March 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-03-18T00:00:00.000Z',
			dateStr: '18th March 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-03-25T00:00:00.000Z',
			dateStr: '25th March 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-03-31T23:00:00.000Z',
			dateStr: '1st April 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-04-07T23:00:00.000Z',
			dateStr: '8th April 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-04-21T23:00:00.000Z',
			dateStr: '22nd April 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-04-28T23:00:00.000Z',
			dateStr: '29th April 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-05-05T23:00:00.000Z',
			dateStr: '6th May 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-05-12T23:00:00.000Z',
			dateStr: '13th May 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-05-19T23:00:00.000Z',
			dateStr: '20th May 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-05-26T23:00:00.000Z',
			dateStr: '27th May 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-06-02T23:00:00.000Z',
			dateStr: '3rd June 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-06-09T23:00:00.000Z',
			dateStr: '10th June 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-06-16T23:00:00.000Z',
			dateStr: '17th June 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-06-23T23:00:00.000Z',
			dateStr: '24th June 2025',
		},
	],
	WEDDD: [
		{
			color: ['Blue Bin'],
			date: '2023-07-04T23:00:00.000Z',
			dateStr: '5th July 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-07-11T23:00:00.000Z',
			dateStr: '12th July 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-07-18T23:00:00.000Z',
			dateStr: '19th July 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-07-25T23:00:00.000Z',
			dateStr: '26th July 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-08-01T23:00:00.000Z',
			dateStr: '2nd August 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-08-08T23:00:00.000Z',
			dateStr: '9th August 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-08-15T23:00:00.000Z',
			dateStr: '16th August 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-08-22T23:00:00.000Z',
			dateStr: '23rd August 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-08-29T23:00:00.000Z',
			dateStr: '30th August 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-09-05T23:00:00.000Z',
			dateStr: '6th September 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-09-12T23:00:00.000Z',
			dateStr: '13th September 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-09-19T23:00:00.000Z',
			dateStr: '20th September 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-09-26T23:00:00.000Z',
			dateStr: '27th September 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-10-03T23:00:00.000Z',
			dateStr: '4th October 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-10-10T23:00:00.000Z',
			dateStr: '11th October 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-10-17T23:00:00.000Z',
			dateStr: '18th October 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-10-24T23:00:00.000Z',
			dateStr: '25th October 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-11-01T00:00:00.000Z',
			dateStr: '1st November 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-11-08T00:00:00.000Z',
			dateStr: '8th November 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-11-15T00:00:00.000Z',
			dateStr: '15th November 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-11-22T00:00:00.000Z',
			dateStr: '22nd November 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-11-29T00:00:00.000Z',
			dateStr: '29th November 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-12-06T00:00:00.000Z',
			dateStr: '6th December 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-12-13T00:00:00.000Z',
			dateStr: '13th December 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-12-20T00:00:00.000Z',
			dateStr: '20th December 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2024-01-03T00:00:00.000Z',
			dateStr: '3rd January 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-01-10T00:00:00.000Z',
			dateStr: '10th January 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-01-17T00:00:00.000Z',
			dateStr: '17th January 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-01-24T00:00:00.000Z',
			dateStr: '24th January 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-01-31T00:00:00.000Z',
			dateStr: '31st January 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-02-07T00:00:00.000Z',
			dateStr: '7th February 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-02-14T00:00:00.000Z',
			dateStr: '14th February 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-02-21T00:00:00.000Z',
			dateStr: '21st February 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-02-28T00:00:00.000Z',
			dateStr: '28th February 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-03-06T00:00:00.000Z',
			dateStr: '6th March 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-03-13T00:00:00.000Z',
			dateStr: '13th March 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-03-20T00:00:00.000Z',
			dateStr: '20th March 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-04-02T23:00:00.000Z',
			dateStr: '3rd April 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-04-09T23:00:00.000Z',
			dateStr: '10th April 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-04-16T23:00:00.000Z',
			dateStr: '17th April 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-04-23T23:00:00.000Z',
			dateStr: '24th April 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-04-30T23:00:00.000Z',
			dateStr: '1st May 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-05-07T23:00:00.000Z',
			dateStr: '8th May 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-05-14T23:00:00.000Z',
			dateStr: '15th May 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-05-21T23:00:00.000Z',
			dateStr: '22nd May 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-05-28T23:00:00.000Z',
			dateStr: '29th May 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-06-04T23:00:00.000Z',
			dateStr: '5th June 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-06-11T23:00:00.000Z',
			dateStr: '12th June 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-06-18T23:00:00.000Z',
			dateStr: '19th June 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-06-25T23:00:00.000Z',
			dateStr: '26th June 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-07-02T23:00:00.000Z',
			dateStr: '3rd July 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-07-09T23:00:00.000Z',
			dateStr: '10th July 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-07-16T23:00:00.000Z',
			dateStr: '17th July 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-07-23T23:00:00.000Z',
			dateStr: '24th July 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-07-30T23:00:00.000Z',
			dateStr: '31st July 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-08-06T23:00:00.000Z',
			dateStr: '7th August 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-08-13T23:00:00.000Z',
			dateStr: '14th August 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-08-20T23:00:00.000Z',
			dateStr: '21st August 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-08-27T23:00:00.000Z',
			dateStr: '28th August 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-09-03T23:00:00.000Z',
			dateStr: '4th September 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-09-10T23:00:00.000Z',
			dateStr: '11th September 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-09-17T23:00:00.000Z',
			dateStr: '18th September 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-09-24T23:00:00.000Z',
			dateStr: '25th September 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-10-01T23:00:00.000Z',
			dateStr: '2nd October 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-10-08T23:00:00.000Z',
			dateStr: '9th October 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-10-15T23:00:00.000Z',
			dateStr: '16th October 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-10-22T23:00:00.000Z',
			dateStr: '23rd October 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-10-30T00:00:00.000Z',
			dateStr: '30th October 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-11-06T00:00:00.000Z',
			dateStr: '6th November 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-11-13T00:00:00.000Z',
			dateStr: '13th November 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-11-20T00:00:00.000Z',
			dateStr: '20th November 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-11-27T00:00:00.000Z',
			dateStr: '27th November 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-12-04T00:00:00.000Z',
			dateStr: '4th December 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-12-11T00:00:00.000Z',
			dateStr: '11th December 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-12-18T00:00:00.000Z',
			dateStr: '18th December 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-12-24T00:00:00.000Z',
			dateStr: '24th December 2024',
		},
		{
			color: ['Black Bin'],
			date: '2025-01-08T00:00:00.000Z',
			dateStr: '8th January 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-01-15T00:00:00.000Z',
			dateStr: '15th January 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-01-22T00:00:00.000Z',
			dateStr: '22nd January 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-01-29T00:00:00.000Z',
			dateStr: '29th January 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-02-05T00:00:00.000Z',
			dateStr: '5th February 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-02-12T00:00:00.000Z',
			dateStr: '12th February 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-02-19T00:00:00.000Z',
			dateStr: '19th February 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-02-26T00:00:00.000Z',
			dateStr: '26th February 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-03-05T00:00:00.000Z',
			dateStr: '5th March 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-03-12T00:00:00.000Z',
			dateStr: '12th March 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-03-19T00:00:00.000Z',
			dateStr: '19th March 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-03-26T00:00:00.000Z',
			dateStr: '26th March 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-04-01T23:00:00.000Z',
			dateStr: '2nd April 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-04-08T23:00:00.000Z',
			dateStr: '9th April 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-04-22T23:00:00.000Z',
			dateStr: '23rd April 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-04-29T23:00:00.000Z',
			dateStr: '30th April 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-05-06T23:00:00.000Z',
			dateStr: '7th May 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-05-13T23:00:00.000Z',
			dateStr: '14th May 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-05-20T23:00:00.000Z',
			dateStr: '21st May 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-05-27T23:00:00.000Z',
			dateStr: '28th May 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-06-03T23:00:00.000Z',
			dateStr: '4th June 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-06-10T23:00:00.000Z',
			dateStr: '11th June 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-06-17T23:00:00.000Z',
			dateStr: '18th June 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-06-24T23:00:00.000Z',
			dateStr: '25th June 2025',
		},
	],
	WEDCC: [
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-07-04T23:00:00.000Z',
			dateStr: '5th July 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-07-11T23:00:00.000Z',
			dateStr: '12th July 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-07-18T23:00:00.000Z',
			dateStr: '19th July 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-07-25T23:00:00.000Z',
			dateStr: '26th July 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-08-01T23:00:00.000Z',
			dateStr: '2nd August 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-08-08T23:00:00.000Z',
			dateStr: '9th August 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-08-15T23:00:00.000Z',
			dateStr: '16th August 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-08-22T23:00:00.000Z',
			dateStr: '23rd August 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-08-29T23:00:00.000Z',
			dateStr: '30th August 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-09-05T23:00:00.000Z',
			dateStr: '6th September 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-09-12T23:00:00.000Z',
			dateStr: '13th September 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-09-19T23:00:00.000Z',
			dateStr: '20th September 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-09-26T23:00:00.000Z',
			dateStr: '27th September 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-10-03T23:00:00.000Z',
			dateStr: '4th October 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-10-10T23:00:00.000Z',
			dateStr: '11th October 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-10-17T23:00:00.000Z',
			dateStr: '18th October 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-10-24T23:00:00.000Z',
			dateStr: '25th October 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-11-01T00:00:00.000Z',
			dateStr: '1st November 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-11-08T00:00:00.000Z',
			dateStr: '8th November 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-11-15T00:00:00.000Z',
			dateStr: '15th November 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-11-22T00:00:00.000Z',
			dateStr: '22nd November 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-11-29T00:00:00.000Z',
			dateStr: '29th November 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-12-06T00:00:00.000Z',
			dateStr: '6th December 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-12-13T00:00:00.000Z',
			dateStr: '13th December 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-12-20T00:00:00.000Z',
			dateStr: '20th December 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2024-01-03T00:00:00.000Z',
			dateStr: '3rd January 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-01-10T00:00:00.000Z',
			dateStr: '10th January 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-01-17T00:00:00.000Z',
			dateStr: '17th January 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-01-24T00:00:00.000Z',
			dateStr: '24th January 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-01-31T00:00:00.000Z',
			dateStr: '31st January 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-02-07T00:00:00.000Z',
			dateStr: '7th February 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-02-14T00:00:00.000Z',
			dateStr: '14th February 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-02-21T00:00:00.000Z',
			dateStr: '21st February 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-02-28T00:00:00.000Z',
			dateStr: '28th February 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-03-06T00:00:00.000Z',
			dateStr: '6th March 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-03-13T00:00:00.000Z',
			dateStr: '13th March 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-03-20T00:00:00.000Z',
			dateStr: '20th March 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-04-02T23:00:00.000Z',
			dateStr: '3rd April 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-04-09T23:00:00.000Z',
			dateStr: '10th April 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-04-16T23:00:00.000Z',
			dateStr: '17th April 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-04-23T23:00:00.000Z',
			dateStr: '24th April 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-04-30T23:00:00.000Z',
			dateStr: '1st May 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-05-07T23:00:00.000Z',
			dateStr: '8th May 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-05-14T23:00:00.000Z',
			dateStr: '15th May 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-05-21T23:00:00.000Z',
			dateStr: '22nd May 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-05-28T23:00:00.000Z',
			dateStr: '29th May 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-06-04T23:00:00.000Z',
			dateStr: '5th June 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-06-11T23:00:00.000Z',
			dateStr: '12th June 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-06-18T23:00:00.000Z',
			dateStr: '19th June 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-06-25T23:00:00.000Z',
			dateStr: '26th June 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-07-02T23:00:00.000Z',
			dateStr: '3rd July 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-07-09T23:00:00.000Z',
			dateStr: '10th July 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-07-16T23:00:00.000Z',
			dateStr: '17th July 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-07-23T23:00:00.000Z',
			dateStr: '24th July 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-07-30T23:00:00.000Z',
			dateStr: '31st July 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-08-06T23:00:00.000Z',
			dateStr: '7th August 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-08-13T23:00:00.000Z',
			dateStr: '14th August 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-08-20T23:00:00.000Z',
			dateStr: '21st August 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-08-27T23:00:00.000Z',
			dateStr: '28th August 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-09-03T23:00:00.000Z',
			dateStr: '4th September 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-09-10T23:00:00.000Z',
			dateStr: '11th September 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-09-17T23:00:00.000Z',
			dateStr: '18th September 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-09-24T23:00:00.000Z',
			dateStr: '25th September 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-10-01T23:00:00.000Z',
			dateStr: '2nd October 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-10-08T23:00:00.000Z',
			dateStr: '9th October 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-10-15T23:00:00.000Z',
			dateStr: '16th October 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-10-22T23:00:00.000Z',
			dateStr: '23rd October 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-10-30T00:00:00.000Z',
			dateStr: '30th October 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-11-06T00:00:00.000Z',
			dateStr: '6th November 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-11-13T00:00:00.000Z',
			dateStr: '13th November 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-11-20T00:00:00.000Z',
			dateStr: '20th November 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-11-27T00:00:00.000Z',
			dateStr: '27th November 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-12-04T00:00:00.000Z',
			dateStr: '4th December 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-12-11T00:00:00.000Z',
			dateStr: '11th December 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-12-18T00:00:00.000Z',
			dateStr: '18th December 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2025-01-08T00:00:00.000Z',
			dateStr: '8th January 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-01-15T00:00:00.000Z',
			dateStr: '15th January 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-01-22T00:00:00.000Z',
			dateStr: '22nd January 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-01-29T00:00:00.000Z',
			dateStr: '29th January 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-02-05T00:00:00.000Z',
			dateStr: '5th February 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-02-12T00:00:00.000Z',
			dateStr: '12th February 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-02-19T00:00:00.000Z',
			dateStr: '19th February 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-02-26T00:00:00.000Z',
			dateStr: '26th February 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-03-05T00:00:00.000Z',
			dateStr: '5th March 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-03-12T00:00:00.000Z',
			dateStr: '12th March 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-03-19T00:00:00.000Z',
			dateStr: '19th March 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-03-26T00:00:00.000Z',
			dateStr: '26th March 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-04-01T23:00:00.000Z',
			dateStr: '2nd April 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-04-08T23:00:00.000Z',
			dateStr: '9th April 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-04-22T23:00:00.000Z',
			dateStr: '23rd April 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-04-29T23:00:00.000Z',
			dateStr: '30th April 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-05-06T23:00:00.000Z',
			dateStr: '7th May 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-05-13T23:00:00.000Z',
			dateStr: '14th May 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-05-20T23:00:00.000Z',
			dateStr: '21st May 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-05-27T23:00:00.000Z',
			dateStr: '28th May 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-06-03T23:00:00.000Z',
			dateStr: '4th June 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-06-10T23:00:00.000Z',
			dateStr: '11th June 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-06-17T23:00:00.000Z',
			dateStr: '18th June 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-06-24T23:00:00.000Z',
			dateStr: '25th June 2025',
		},
	],
	WEDAA: [
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-07-04T23:00:00.000Z',
			dateStr: '5th July 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-07-11T23:00:00.000Z',
			dateStr: '12th July 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-07-18T23:00:00.000Z',
			dateStr: '19th July 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-07-25T23:00:00.000Z',
			dateStr: '26th July 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-08-01T23:00:00.000Z',
			dateStr: '2nd August 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-08-08T23:00:00.000Z',
			dateStr: '9th August 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-08-15T23:00:00.000Z',
			dateStr: '16th August 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-08-22T23:00:00.000Z',
			dateStr: '23rd August 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-08-29T23:00:00.000Z',
			dateStr: '30th August 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-09-05T23:00:00.000Z',
			dateStr: '6th September 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-09-12T23:00:00.000Z',
			dateStr: '13th September 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-09-19T23:00:00.000Z',
			dateStr: '20th September 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-09-26T23:00:00.000Z',
			dateStr: '27th September 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-10-03T23:00:00.000Z',
			dateStr: '4th October 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-10-10T23:00:00.000Z',
			dateStr: '11th October 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-10-17T23:00:00.000Z',
			dateStr: '18th October 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-10-24T23:00:00.000Z',
			dateStr: '25th October 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-11-01T00:00:00.000Z',
			dateStr: '1st November 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-11-08T00:00:00.000Z',
			dateStr: '8th November 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-11-15T00:00:00.000Z',
			dateStr: '15th November 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-11-22T00:00:00.000Z',
			dateStr: '22nd November 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-11-29T00:00:00.000Z',
			dateStr: '29th November 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-12-06T00:00:00.000Z',
			dateStr: '6th December 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-12-13T00:00:00.000Z',
			dateStr: '13th December 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-12-20T00:00:00.000Z',
			dateStr: '20th December 2023',
		},
		{
			color: ['Black Bin'],
			date: '2024-01-03T00:00:00.000Z',
			dateStr: '3rd January 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-01-10T00:00:00.000Z',
			dateStr: '10th January 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-01-17T00:00:00.000Z',
			dateStr: '17th January 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-01-24T00:00:00.000Z',
			dateStr: '24th January 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-01-31T00:00:00.000Z',
			dateStr: '31st January 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-02-07T00:00:00.000Z',
			dateStr: '7th February 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-02-14T00:00:00.000Z',
			dateStr: '14th February 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-02-21T00:00:00.000Z',
			dateStr: '21st February 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-02-28T00:00:00.000Z',
			dateStr: '28th February 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-03-06T00:00:00.000Z',
			dateStr: '6th March 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-03-13T00:00:00.000Z',
			dateStr: '13th March 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-03-20T00:00:00.000Z',
			dateStr: '20th March 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-03-26T00:00:00.000Z',
			dateStr: '26th March 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-04-02T23:00:00.000Z',
			dateStr: '3rd April 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-04-09T23:00:00.000Z',
			dateStr: '10th April 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-04-16T23:00:00.000Z',
			dateStr: '17th April 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-04-23T23:00:00.000Z',
			dateStr: '24th April 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-04-30T23:00:00.000Z',
			dateStr: '1st May 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-05-07T23:00:00.000Z',
			dateStr: '8th May 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-05-14T23:00:00.000Z',
			dateStr: '15th May 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-05-21T23:00:00.000Z',
			dateStr: '22nd May 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-05-28T23:00:00.000Z',
			dateStr: '29th May 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-06-04T23:00:00.000Z',
			dateStr: '5th June 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-06-11T23:00:00.000Z',
			dateStr: '12th June 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-06-18T23:00:00.000Z',
			dateStr: '19th June 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-06-25T23:00:00.000Z',
			dateStr: '26th June 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-07-02T23:00:00.000Z',
			dateStr: '3rd July 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-07-09T23:00:00.000Z',
			dateStr: '10th July 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-07-16T23:00:00.000Z',
			dateStr: '17th July 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-07-23T23:00:00.000Z',
			dateStr: '24th July 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-07-30T23:00:00.000Z',
			dateStr: '31st July 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-08-06T23:00:00.000Z',
			dateStr: '7th August 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-08-13T23:00:00.000Z',
			dateStr: '14th August 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-08-20T23:00:00.000Z',
			dateStr: '21st August 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-08-27T23:00:00.000Z',
			dateStr: '28th August 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-09-03T23:00:00.000Z',
			dateStr: '4th September 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-09-10T23:00:00.000Z',
			dateStr: '11th September 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-09-17T23:00:00.000Z',
			dateStr: '18th September 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-09-24T23:00:00.000Z',
			dateStr: '25th September 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-10-01T23:00:00.000Z',
			dateStr: '2nd October 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-10-08T23:00:00.000Z',
			dateStr: '9th October 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-10-15T23:00:00.000Z',
			dateStr: '16th October 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-10-22T23:00:00.000Z',
			dateStr: '23rd October 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-10-30T00:00:00.000Z',
			dateStr: '30th October 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-11-06T00:00:00.000Z',
			dateStr: '6th November 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-11-13T00:00:00.000Z',
			dateStr: '13th November 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-11-20T00:00:00.000Z',
			dateStr: '20th November 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-11-27T00:00:00.000Z',
			dateStr: '27th November 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-12-04T00:00:00.000Z',
			dateStr: '4th December 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-12-11T00:00:00.000Z',
			dateStr: '11th December 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-12-18T00:00:00.000Z',
			dateStr: '18th December 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2025-01-08T00:00:00.000Z',
			dateStr: '8th January 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-01-15T00:00:00.000Z',
			dateStr: '15th January 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-01-22T00:00:00.000Z',
			dateStr: '22nd January 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-01-29T00:00:00.000Z',
			dateStr: '29th January 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-02-05T00:00:00.000Z',
			dateStr: '5th February 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-02-12T00:00:00.000Z',
			dateStr: '12th February 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-02-19T00:00:00.000Z',
			dateStr: '19th February 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-02-26T00:00:00.000Z',
			dateStr: '26th February 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-03-05T00:00:00.000Z',
			dateStr: '5th March 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-03-12T00:00:00.000Z',
			dateStr: '12th March 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-03-19T00:00:00.000Z',
			dateStr: '19th March 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-03-26T00:00:00.000Z',
			dateStr: '26th March 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-04-01T23:00:00.000Z',
			dateStr: '2nd April 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-04-08T23:00:00.000Z',
			dateStr: '9th April 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-04-22T23:00:00.000Z',
			dateStr: '23rd April 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-04-29T23:00:00.000Z',
			dateStr: '30th April 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-05-06T23:00:00.000Z',
			dateStr: '7th May 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-05-13T23:00:00.000Z',
			dateStr: '14th May 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-05-20T23:00:00.000Z',
			dateStr: '21st May 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-05-27T23:00:00.000Z',
			dateStr: '28th May 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-06-03T23:00:00.000Z',
			dateStr: '4th June 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-06-10T23:00:00.000Z',
			dateStr: '11th June 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-06-17T23:00:00.000Z',
			dateStr: '18th June 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-06-24T23:00:00.000Z',
			dateStr: '25th June 2025',
		},
	],
	THUDD: [
		{
			color: ['Blue Bin'],
			date: '2023-07-05T23:00:00.000Z',
			dateStr: '6th July 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-07-12T23:00:00.000Z',
			dateStr: '13th July 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-07-19T23:00:00.000Z',
			dateStr: '20th July 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-07-26T23:00:00.000Z',
			dateStr: '27th July 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-08-02T23:00:00.000Z',
			dateStr: '3rd August 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-08-09T23:00:00.000Z',
			dateStr: '10th August 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-08-16T23:00:00.000Z',
			dateStr: '17th August 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-08-23T23:00:00.000Z',
			dateStr: '24th August 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-08-30T23:00:00.000Z',
			dateStr: '31st August 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-09-06T23:00:00.000Z',
			dateStr: '7th September 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-09-13T23:00:00.000Z',
			dateStr: '14th September 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-09-20T23:00:00.000Z',
			dateStr: '21st September 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-09-27T23:00:00.000Z',
			dateStr: '28th September 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-10-04T23:00:00.000Z',
			dateStr: '5th October 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-10-11T23:00:00.000Z',
			dateStr: '12th October 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-10-18T23:00:00.000Z',
			dateStr: '19th October 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-10-25T23:00:00.000Z',
			dateStr: '26th October 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-11-02T00:00:00.000Z',
			dateStr: '2nd November 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-11-09T00:00:00.000Z',
			dateStr: '9th November 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-11-16T00:00:00.000Z',
			dateStr: '16th November 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-11-23T00:00:00.000Z',
			dateStr: '23rd November 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-11-30T00:00:00.000Z',
			dateStr: '30th November 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-12-07T00:00:00.000Z',
			dateStr: '7th December 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-12-14T00:00:00.000Z',
			dateStr: '14th December 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-12-21T00:00:00.000Z',
			dateStr: '21st December 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2024-01-04T00:00:00.000Z',
			dateStr: '4th January 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-01-11T00:00:00.000Z',
			dateStr: '11th January 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-01-18T00:00:00.000Z',
			dateStr: '18th January 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-01-25T00:00:00.000Z',
			dateStr: '25th January 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-02-01T00:00:00.000Z',
			dateStr: '1st February 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-02-08T00:00:00.000Z',
			dateStr: '8th February 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-02-15T00:00:00.000Z',
			dateStr: '15th February 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-02-22T00:00:00.000Z',
			dateStr: '22nd February 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-02-29T00:00:00.000Z',
			dateStr: '29th February 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-03-07T00:00:00.000Z',
			dateStr: '7th March 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-03-14T00:00:00.000Z',
			dateStr: '14th March 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-03-21T00:00:00.000Z',
			dateStr: '21st March 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-04-03T23:00:00.000Z',
			dateStr: '4th April 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-04-10T23:00:00.000Z',
			dateStr: '11th April 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-04-17T23:00:00.000Z',
			dateStr: '18th April 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-04-24T23:00:00.000Z',
			dateStr: '25th April 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-05-01T23:00:00.000Z',
			dateStr: '2nd May 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-05-08T23:00:00.000Z',
			dateStr: '9th May 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-05-15T23:00:00.000Z',
			dateStr: '16th May 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-05-22T23:00:00.000Z',
			dateStr: '23rd May 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-05-29T23:00:00.000Z',
			dateStr: '30th May 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-06-05T23:00:00.000Z',
			dateStr: '6th June 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-06-12T23:00:00.000Z',
			dateStr: '13th June 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-06-19T23:00:00.000Z',
			dateStr: '20th June 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-06-26T23:00:00.000Z',
			dateStr: '27th June 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-07-03T23:00:00.000Z',
			dateStr: '4th July 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-07-10T23:00:00.000Z',
			dateStr: '11th July 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-07-17T23:00:00.000Z',
			dateStr: '18th July 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-07-24T23:00:00.000Z',
			dateStr: '25th July 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-07-31T23:00:00.000Z',
			dateStr: '1st August 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-08-07T23:00:00.000Z',
			dateStr: '8th August 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-08-14T23:00:00.000Z',
			dateStr: '15th August 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-08-21T23:00:00.000Z',
			dateStr: '22nd August 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-08-28T23:00:00.000Z',
			dateStr: '29th August 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-09-04T23:00:00.000Z',
			dateStr: '5th September 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-09-11T23:00:00.000Z',
			dateStr: '12th September 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-09-18T23:00:00.000Z',
			dateStr: '19th September 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-09-25T23:00:00.000Z',
			dateStr: '26th September 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-10-02T23:00:00.000Z',
			dateStr: '3rd October 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-10-09T23:00:00.000Z',
			dateStr: '10th October 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-10-16T23:00:00.000Z',
			dateStr: '17th October 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-10-23T23:00:00.000Z',
			dateStr: '24th October 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-10-31T00:00:00.000Z',
			dateStr: '31st October 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-11-07T00:00:00.000Z',
			dateStr: '7th November 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-11-14T00:00:00.000Z',
			dateStr: '14th November 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-11-21T00:00:00.000Z',
			dateStr: '21st November 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-11-28T00:00:00.000Z',
			dateStr: '28th November 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-12-05T00:00:00.000Z',
			dateStr: '5th December 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-12-12T00:00:00.000Z',
			dateStr: '12th December 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-12-19T00:00:00.000Z',
			dateStr: '19th December 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-12-27T00:00:00.000Z',
			dateStr: '27th December 2024',
		},
		{
			color: ['Black Bin'],
			date: '2025-01-09T00:00:00.000Z',
			dateStr: '9th January 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-01-16T00:00:00.000Z',
			dateStr: '16th January 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-01-23T00:00:00.000Z',
			dateStr: '23rd January 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-01-30T00:00:00.000Z',
			dateStr: '30th January 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-02-06T00:00:00.000Z',
			dateStr: '6th February 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-02-13T00:00:00.000Z',
			dateStr: '13th February 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-02-20T00:00:00.000Z',
			dateStr: '20th February 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-02-27T00:00:00.000Z',
			dateStr: '27th February 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-03-06T00:00:00.000Z',
			dateStr: '6th March 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-03-13T00:00:00.000Z',
			dateStr: '13th March 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-03-20T00:00:00.000Z',
			dateStr: '20th March 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-03-27T00:00:00.000Z',
			dateStr: '27th March 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-04-02T23:00:00.000Z',
			dateStr: '3rd April 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-04-09T23:00:00.000Z',
			dateStr: '10th April 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-04-15T23:00:00.000Z',
			dateStr: '16th April 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-04-23T23:00:00.000Z',
			dateStr: '24th April 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-04-30T23:00:00.000Z',
			dateStr: '1st May 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-05-07T23:00:00.000Z',
			dateStr: '8th May 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-05-14T23:00:00.000Z',
			dateStr: '15th May 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-05-21T23:00:00.000Z',
			dateStr: '22nd May 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-05-28T23:00:00.000Z',
			dateStr: '29th May 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-06-04T23:00:00.000Z',
			dateStr: '5th June 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-06-11T23:00:00.000Z',
			dateStr: '12th June 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-06-18T23:00:00.000Z',
			dateStr: '19th June 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-06-25T23:00:00.000Z',
			dateStr: '26th June 2025',
		},
	],
	THUCC: [
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-07-05T23:00:00.000Z',
			dateStr: '6th July 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-07-12T23:00:00.000Z',
			dateStr: '13th July 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-07-19T23:00:00.000Z',
			dateStr: '20th July 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-07-26T23:00:00.000Z',
			dateStr: '27th July 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-08-02T23:00:00.000Z',
			dateStr: '3rd August 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-08-09T23:00:00.000Z',
			dateStr: '10th August 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-08-16T23:00:00.000Z',
			dateStr: '17th August 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-08-23T23:00:00.000Z',
			dateStr: '24th August 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-08-30T23:00:00.000Z',
			dateStr: '31st August 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-09-06T23:00:00.000Z',
			dateStr: '7th September 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-09-13T23:00:00.000Z',
			dateStr: '14th September 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-09-20T23:00:00.000Z',
			dateStr: '21st September 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-09-27T23:00:00.000Z',
			dateStr: '28th September 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-10-04T23:00:00.000Z',
			dateStr: '5th October 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-10-11T23:00:00.000Z',
			dateStr: '12th October 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-10-18T23:00:00.000Z',
			dateStr: '19th October 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-10-25T23:00:00.000Z',
			dateStr: '26th October 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-11-02T00:00:00.000Z',
			dateStr: '2nd November 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-11-09T00:00:00.000Z',
			dateStr: '9th November 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-11-16T00:00:00.000Z',
			dateStr: '16th November 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-11-23T00:00:00.000Z',
			dateStr: '23rd November 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-11-30T00:00:00.000Z',
			dateStr: '30th November 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-12-07T00:00:00.000Z',
			dateStr: '7th December 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-12-14T00:00:00.000Z',
			dateStr: '14th December 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-12-21T00:00:00.000Z',
			dateStr: '21st December 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2024-01-04T00:00:00.000Z',
			dateStr: '4th January 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-01-11T00:00:00.000Z',
			dateStr: '11th January 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-01-18T00:00:00.000Z',
			dateStr: '18th January 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-01-25T00:00:00.000Z',
			dateStr: '25th January 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-02-01T00:00:00.000Z',
			dateStr: '1st February 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-02-08T00:00:00.000Z',
			dateStr: '8th February 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-02-15T00:00:00.000Z',
			dateStr: '15th February 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-02-22T00:00:00.000Z',
			dateStr: '22nd February 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-02-29T00:00:00.000Z',
			dateStr: '29th February 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-03-07T00:00:00.000Z',
			dateStr: '7th March 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-03-14T00:00:00.000Z',
			dateStr: '14th March 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-03-21T00:00:00.000Z',
			dateStr: '21st March 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-03-27T00:00:00.000Z',
			dateStr: '27th March 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-04-03T23:00:00.000Z',
			dateStr: '4th April 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-04-10T23:00:00.000Z',
			dateStr: '11th April 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-04-17T23:00:00.000Z',
			dateStr: '18th April 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-04-24T23:00:00.000Z',
			dateStr: '25th April 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-05-01T23:00:00.000Z',
			dateStr: '2nd May 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-05-08T23:00:00.000Z',
			dateStr: '9th May 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-05-15T23:00:00.000Z',
			dateStr: '16th May 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-05-22T23:00:00.000Z',
			dateStr: '23rd May 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-05-29T23:00:00.000Z',
			dateStr: '30th May 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-06-05T23:00:00.000Z',
			dateStr: '6th June 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-06-12T23:00:00.000Z',
			dateStr: '13th June 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-06-19T23:00:00.000Z',
			dateStr: '20th June 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-06-26T23:00:00.000Z',
			dateStr: '27th June 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-07-03T23:00:00.000Z',
			dateStr: '4th July 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-07-10T23:00:00.000Z',
			dateStr: '11th July 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-07-17T23:00:00.000Z',
			dateStr: '18th July 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-07-24T23:00:00.000Z',
			dateStr: '25th July 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-07-31T23:00:00.000Z',
			dateStr: '1st August 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-08-07T23:00:00.000Z',
			dateStr: '8th August 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-08-14T23:00:00.000Z',
			dateStr: '15th August 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-08-21T23:00:00.000Z',
			dateStr: '22nd August 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-08-28T23:00:00.000Z',
			dateStr: '29th August 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-09-04T23:00:00.000Z',
			dateStr: '5th September 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-09-11T23:00:00.000Z',
			dateStr: '12th September 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-09-18T23:00:00.000Z',
			dateStr: '19th September 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-09-25T23:00:00.000Z',
			dateStr: '26th September 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-10-02T23:00:00.000Z',
			dateStr: '3rd October 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-10-09T23:00:00.000Z',
			dateStr: '10th October 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-10-16T23:00:00.000Z',
			dateStr: '17th October 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-10-23T23:00:00.000Z',
			dateStr: '24th October 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-10-31T00:00:00.000Z',
			dateStr: '31st October 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-11-07T00:00:00.000Z',
			dateStr: '7th November 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-11-14T00:00:00.000Z',
			dateStr: '14th November 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-11-21T00:00:00.000Z',
			dateStr: '21st November 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-11-28T00:00:00.000Z',
			dateStr: '28th November 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-12-05T00:00:00.000Z',
			dateStr: '5th December 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-12-12T00:00:00.000Z',
			dateStr: '12th December 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-12-19T00:00:00.000Z',
			dateStr: '19th December 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2025-01-09T00:00:00.000Z',
			dateStr: '9th January 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-01-16T00:00:00.000Z',
			dateStr: '16th January 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-01-23T00:00:00.000Z',
			dateStr: '23rd January 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-01-30T00:00:00.000Z',
			dateStr: '30th January 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-02-06T00:00:00.000Z',
			dateStr: '6th February 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-02-13T00:00:00.000Z',
			dateStr: '13th February 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-02-20T00:00:00.000Z',
			dateStr: '20th February 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-02-27T00:00:00.000Z',
			dateStr: '27th February 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-03-06T00:00:00.000Z',
			dateStr: '6th March 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-03-13T00:00:00.000Z',
			dateStr: '13th March 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-03-20T00:00:00.000Z',
			dateStr: '20th March 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-03-27T00:00:00.000Z',
			dateStr: '27th March 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-04-02T23:00:00.000Z',
			dateStr: '3rd April 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-04-09T23:00:00.000Z',
			dateStr: '10th April 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-04-23T23:00:00.000Z',
			dateStr: '24th April 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-04-30T23:00:00.000Z',
			dateStr: '1st May 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-05-07T23:00:00.000Z',
			dateStr: '8th May 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-05-14T23:00:00.000Z',
			dateStr: '15th May 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-05-21T23:00:00.000Z',
			dateStr: '22nd May 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-05-28T23:00:00.000Z',
			dateStr: '29th May 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-06-04T23:00:00.000Z',
			dateStr: '5th June 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-06-11T23:00:00.000Z',
			dateStr: '12th June 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-06-18T23:00:00.000Z',
			dateStr: '19th June 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-06-25T23:00:00.000Z',
			dateStr: '26th June 2025',
		},
	],
	THUAA: [
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-07-05T23:00:00.000Z',
			dateStr: '6th July 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-07-12T23:00:00.000Z',
			dateStr: '13th July 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-07-19T23:00:00.000Z',
			dateStr: '20th July 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-07-26T23:00:00.000Z',
			dateStr: '27th July 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-08-02T23:00:00.000Z',
			dateStr: '3rd August 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-08-09T23:00:00.000Z',
			dateStr: '10th August 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-08-16T23:00:00.000Z',
			dateStr: '17th August 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-08-23T23:00:00.000Z',
			dateStr: '24th August 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-08-30T23:00:00.000Z',
			dateStr: '31st August 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-09-06T23:00:00.000Z',
			dateStr: '7th September 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-09-13T23:00:00.000Z',
			dateStr: '14th September 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-09-20T23:00:00.000Z',
			dateStr: '21st September 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-09-27T23:00:00.000Z',
			dateStr: '28th September 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-10-04T23:00:00.000Z',
			dateStr: '5th October 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-10-11T23:00:00.000Z',
			dateStr: '12th October 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-10-18T23:00:00.000Z',
			dateStr: '19th October 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-10-25T23:00:00.000Z',
			dateStr: '26th October 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-11-02T00:00:00.000Z',
			dateStr: '2nd November 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-11-09T00:00:00.000Z',
			dateStr: '9th November 2023',
		},
		{
			color: ['Blue Bin'],
			date: '2023-11-16T00:00:00.000Z',
			dateStr: '16th November 2023',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2023-11-23T00:00:00.000Z',
			dateStr: '23rd November 2023',
		},
		{
			color: ['Brown Bin'],
			date: '2023-11-30T00:00:00.000Z',
			dateStr: '30th November 2023',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2023-12-07T00:00:00.000Z',
			dateStr: '7th December 2023',
		},
		{
			color: ['Black Bin'],
			date: '2023-12-14T00:00:00.000Z',
			dateStr: '14th December 2023',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2023-12-21T00:00:00.000Z',
			dateStr: '21st December 2023',
		},
		{
			color: ['Black Bin'],
			date: '2024-01-04T00:00:00.000Z',
			dateStr: '4th January 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-01-11T00:00:00.000Z',
			dateStr: '11th January 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-01-18T00:00:00.000Z',
			dateStr: '18th January 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-01-25T00:00:00.000Z',
			dateStr: '25th January 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-02-01T00:00:00.000Z',
			dateStr: '1st February 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-02-08T00:00:00.000Z',
			dateStr: '8th February 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-02-15T00:00:00.000Z',
			dateStr: '15th February 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-02-22T00:00:00.000Z',
			dateStr: '22nd February 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-02-29T00:00:00.000Z',
			dateStr: '29th February 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-03-07T00:00:00.000Z',
			dateStr: '7th March 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-03-14T00:00:00.000Z',
			dateStr: '14th March 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-03-21T00:00:00.000Z',
			dateStr: '21st March 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-03-27T00:00:00.000Z',
			dateStr: '27th March 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-04-03T23:00:00.000Z',
			dateStr: '4th April 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-04-10T23:00:00.000Z',
			dateStr: '11th April 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-04-17T23:00:00.000Z',
			dateStr: '18th April 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-04-24T23:00:00.000Z',
			dateStr: '25th April 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-05-01T23:00:00.000Z',
			dateStr: '2nd May 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-05-08T23:00:00.000Z',
			dateStr: '9th May 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-05-15T23:00:00.000Z',
			dateStr: '16th May 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-05-22T23:00:00.000Z',
			dateStr: '23rd May 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-05-29T23:00:00.000Z',
			dateStr: '30th May 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-06-05T23:00:00.000Z',
			dateStr: '6th June 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-06-12T23:00:00.000Z',
			dateStr: '13th June 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-06-19T23:00:00.000Z',
			dateStr: '20th June 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-06-26T23:00:00.000Z',
			dateStr: '27th June 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-07-03T23:00:00.000Z',
			dateStr: '4th July 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-07-10T23:00:00.000Z',
			dateStr: '11th July 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-07-17T23:00:00.000Z',
			dateStr: '18th July 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-07-24T23:00:00.000Z',
			dateStr: '25th July 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-07-31T23:00:00.000Z',
			dateStr: '1st August 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-08-07T23:00:00.000Z',
			dateStr: '8th August 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-08-14T23:00:00.000Z',
			dateStr: '15th August 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-08-21T23:00:00.000Z',
			dateStr: '22nd August 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-08-28T23:00:00.000Z',
			dateStr: '29th August 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-09-04T23:00:00.000Z',
			dateStr: '5th September 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-09-11T23:00:00.000Z',
			dateStr: '12th September 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-09-18T23:00:00.000Z',
			dateStr: '19th September 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-09-25T23:00:00.000Z',
			dateStr: '26th September 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-10-02T23:00:00.000Z',
			dateStr: '3rd October 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-10-09T23:00:00.000Z',
			dateStr: '10th October 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-10-16T23:00:00.000Z',
			dateStr: '17th October 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-10-23T23:00:00.000Z',
			dateStr: '24th October 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-10-31T00:00:00.000Z',
			dateStr: '31st October 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-11-07T00:00:00.000Z',
			dateStr: '7th November 2024',
		},
		{
			color: ['Black Bin'],
			date: '2024-11-14T00:00:00.000Z',
			dateStr: '14th November 2024',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2024-11-21T00:00:00.000Z',
			dateStr: '21st November 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2024-11-28T00:00:00.000Z',
			dateStr: '28th November 2024',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2024-12-05T00:00:00.000Z',
			dateStr: '5th December 2024',
		},
		{
			color: ['Brown Bin'],
			date: '2024-12-12T00:00:00.000Z',
			dateStr: '12th December 2024',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2024-12-19T00:00:00.000Z',
			dateStr: '19th December 2024',
		},
		{
			color: ['Blue Bin'],
			date: '2025-01-09T00:00:00.000Z',
			dateStr: '9th January 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-01-16T00:00:00.000Z',
			dateStr: '16th January 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-01-23T00:00:00.000Z',
			dateStr: '23rd January 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-01-30T00:00:00.000Z',
			dateStr: '30th January 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-02-06T00:00:00.000Z',
			dateStr: '6th February 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-02-13T00:00:00.000Z',
			dateStr: '13th February 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-02-20T00:00:00.000Z',
			dateStr: '20th February 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-02-27T00:00:00.000Z',
			dateStr: '27th February 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-03-06T00:00:00.000Z',
			dateStr: '6th March 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-03-13T00:00:00.000Z',
			dateStr: '13th March 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-03-20T00:00:00.000Z',
			dateStr: '20th March 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-03-27T00:00:00.000Z',
			dateStr: '27th March 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-04-02T23:00:00.000Z',
			dateStr: '3rd April 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-04-09T23:00:00.000Z',
			dateStr: '10th April 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-04-15T23:00:00.000Z',
			dateStr: '16th April 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-04-23T23:00:00.000Z',
			dateStr: '24th April 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-04-30T23:00:00.000Z',
			dateStr: '1st May 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-05-07T23:00:00.000Z',
			dateStr: '8th May 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-05-14T23:00:00.000Z',
			dateStr: '15th May 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-05-21T23:00:00.000Z',
			dateStr: '22nd May 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-05-28T23:00:00.000Z',
			dateStr: '29th May 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-06-04T23:00:00.000Z',
			dateStr: '5th June 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-06-11T23:00:00.000Z',
			dateStr: '12th June 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-06-18T23:00:00.000Z',
			dateStr: '19th June 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-06-25T23:00:00.000Z',
			dateStr: '26th June 2025',
		},
	],
};

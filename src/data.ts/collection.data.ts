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
	FRICC: [
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-07-03T23:00:00.000Z',
			dateStr: '4 July 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-07-10T23:00:00.000Z',
			dateStr: '11 July 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-07-17T23:00:00.000Z',
			dateStr: '18 July 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-07-24T23:00:00.000Z',
			dateStr: '25 July 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-07-31T23:00:00.000Z',
			dateStr: '1 August 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-08-07T23:00:00.000Z',
			dateStr: '8 August 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-08-14T23:00:00.000Z',
			dateStr: '15 August 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-08-21T23:00:00.000Z',
			dateStr: '22 August 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-08-28T23:00:00.000Z',
			dateStr: '29 August 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-09-04T23:00:00.000Z',
			dateStr: '5 September 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-09-11T23:00:00.000Z',
			dateStr: '12 September 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-09-18T23:00:00.000Z',
			dateStr: '19 September 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-09-25T23:00:00.000Z',
			dateStr: '26 September 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-10-02T23:00:00.000Z',
			dateStr: '3 October 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-10-09T23:00:00.000Z',
			dateStr: '10 October 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-10-16T23:00:00.000Z',
			dateStr: '17 October 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-10-23T23:00:00.000Z',
			dateStr: '24 October 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-10-31T00:00:00.000Z',
			dateStr: '31 October 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-11-07T00:00:00.000Z',
			dateStr: '7 November 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-11-14T00:00:00.000Z',
			dateStr: '14 November 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-11-21T00:00:00.000Z',
			dateStr: '21 November 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-11-28T00:00:00.000Z',
			dateStr: '28 November 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-12-05T00:00:00.000Z',
			dateStr: '5 December 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-12-12T00:00:00.000Z',
			dateStr: '12 December 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-12-19T00:00:00.000Z',
			dateStr: '19 December 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-12-27T00:00:00.000Z',
			dateStr: '27 December 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2026-01-03T00:00:00.000Z',
			dateStr: '3 January 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-01-09T00:00:00.000Z',
			dateStr: '9 January 2026',
		},
		{
			color: ['Black Bin', 'Green bin'],
			date: '2026-01-16T00:00:00.000Z',
			dateStr: '16 January 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-01-23T00:00:00.000Z',
			dateStr: '23 January 2026',
		},
		{
			color: ['Blue Bin', 'green Bin'],
			date: '2026-01-30T00:00:00.000Z',
			dateStr: '30 January 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-02-06T00:00:00.000Z',
			dateStr: '6 February 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-02-13T00:00:00.000Z',
			dateStr: '13 February 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-02-20T00:00:00.000Z',
			dateStr: '20 February 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-02-27T00:00:00.000Z',
			dateStr: '27 February 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-03-06T00:00:00.000Z',
			dateStr: '6 March 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-03-13T00:00:00.000Z',
			dateStr: '13 March 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-03-20T00:00:00.000Z',
			dateStr: '20 March 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-03-27T00:00:00.000Z',
			dateStr: '27 March 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-04-01T23:00:00.000Z',
			dateStr: '2 April 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-04-09T23:00:00.000Z',
			dateStr: '10 April 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-04-16T23:00:00.000Z',
			dateStr: '17 April 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-04-23T23:00:00.000Z',
			dateStr: '24 April 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-04-30T23:00:00.000Z',
			dateStr: '1 May 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-05-07T23:00:00.000Z',
			dateStr: '8 May 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-05-14T23:00:00.000Z',
			dateStr: '15 May 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-05-21T23:00:00.000Z',
			dateStr: '22 May 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-05-28T23:00:00.000Z',
			dateStr: '29 May 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-06-04T23:00:00.000Z',
			dateStr: '5 June 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-06-11T23:00:00.000Z',
			dateStr: '12 June 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-06-18T23:00:00.000Z',
			dateStr: '19 June 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-06-25T23:00:00.000Z',
			dateStr: '26 June 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-07-02T23:00:00.000Z',
			dateStr: '3 July 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-07-09T23:00:00.000Z',
			dateStr: '10 July 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-07-16T23:00:00.000Z',
			dateStr: '17 July 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-07-23T23:00:00.000Z',
			dateStr: '24 July 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-07-30T23:00:00.000Z',
			dateStr: '31 July 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-08-06T23:00:00.000Z',
			dateStr: '7 August 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-08-13T23:00:00.000Z',
			dateStr: '14 August 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-08-20T23:00:00.000Z',
			dateStr: '21 August 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-08-27T23:00:00.000Z',
			dateStr: '28 August 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-09-03T23:00:00.000Z',
			dateStr: '4 September 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-09-10T23:00:00.000Z',
			dateStr: '11 September 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-09-17T23:00:00.000Z',
			dateStr: '18 September 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-09-24T23:00:00.000Z',
			dateStr: '25 September 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-10-01T23:00:00.000Z',
			dateStr: '2 October 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-10-08T23:00:00.000Z',
			dateStr: '9 October 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-10-15T23:00:00.000Z',
			dateStr: '16 October 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-10-22T23:00:00.000Z',
			dateStr: '23 October 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-10-30T00:00:00.000Z',
			dateStr: '30 October 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-11-06T00:00:00.000Z',
			dateStr: '6 November 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-11-13T00:00:00.000Z',
			dateStr: '13 November 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-11-20T00:00:00.000Z',
			dateStr: '20 November 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-11-27T00:00:00.000Z',
			dateStr: '27 November 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-12-04T00:00:00.000Z',
			dateStr: '4 December 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-12-11T00:00:00.000Z',
			dateStr: '11 December 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-12-18T00:00:00.000Z',
			dateStr: '18 December 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-12-24T00:00:00.000Z',
			dateStr: '24 December 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-12-31T00:00:00.000Z',
			dateStr: '31 December 2026',
		},
		{
			color: ['Black Bin'],
			date: '2027-01-08T00:00:00.000Z',
			dateStr: '8 January 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-01-15T00:00:00.000Z',
			dateStr: '15 January 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-01-22T00:00:00.000Z',
			dateStr: '22 January 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-01-29T00:00:00.000Z',
			dateStr: '29 January 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-02-05T00:00:00.000Z',
			dateStr: '5 February 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-02-12T00:00:00.000Z',
			dateStr: '12 February 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-02-19T00:00:00.000Z',
			dateStr: '19 February 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-02-26T00:00:00.000Z',
			dateStr: '26 February 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-03-05T00:00:00.000Z',
			dateStr: '5 March 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-03-12T00:00:00.000Z',
			dateStr: '12 March 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-03-19T00:00:00.000Z',
			dateStr: '19 March 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-03-25T00:00:00.000Z',
			dateStr: '25 March 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-04-01T23:00:00.000Z',
			dateStr: '2 April 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-04-08T23:00:00.000Z',
			dateStr: '9 April 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-04-15T23:00:00.000Z',
			dateStr: '16 April 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-04-22T23:00:00.000Z',
			dateStr: '23 April 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-04-29T23:00:00.000Z',
			dateStr: '30 April 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-05-06T23:00:00.000Z',
			dateStr: '7 May 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-05-13T23:00:00.000Z',
			dateStr: '14 May 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-05-20T23:00:00.000Z',
			dateStr: '21 May 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-05-27T23:00:00.000Z',
			dateStr: '28 May 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-06-03T23:00:00.000Z',
			dateStr: '4 June 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-06-10T23:00:00.000Z',
			dateStr: '11 June 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-06-17T23:00:00.000Z',
			dateStr: '18 June 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-06-24T23:00:00.000Z',
			dateStr: '25 June 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-07-01T23:00:00.000Z',
			dateStr: '2 July 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-07-08T23:00:00.000Z',
			dateStr: '9 July 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-07-15T23:00:00.000Z',
			dateStr: '16 July 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-07-22T23:00:00.000Z',
			dateStr: '23 July 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-07-29T23:00:00.000Z',
			dateStr: '30 July 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-08-05T23:00:00.000Z',
			dateStr: '6 August 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-08-12T23:00:00.000Z',
			dateStr: '13 August 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-08-19T23:00:00.000Z',
			dateStr: '20 August 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-08-26T23:00:00.000Z',
			dateStr: '27 August 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-09-02T23:00:00.000Z',
			dateStr: '3 September 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-09-09T23:00:00.000Z',
			dateStr: '10 September 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-09-16T23:00:00.000Z',
			dateStr: '17 September 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-09-23T23:00:00.000Z',
			dateStr: '24 September 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-09-30T23:00:00.000Z',
			dateStr: '1 October 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-10-07T23:00:00.000Z',
			dateStr: '8 October 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-10-14T23:00:00.000Z',
			dateStr: '15 October 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-10-21T23:00:00.000Z',
			dateStr: '22 October 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-10-28T23:00:00.000Z',
			dateStr: '29 October 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-11-05T00:00:00.000Z',
			dateStr: '5 November 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-11-12T00:00:00.000Z',
			dateStr: '12 November 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-11-19T00:00:00.000Z',
			dateStr: '19 November 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-11-26T00:00:00.000Z',
			dateStr: '26 November 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-12-03T00:00:00.000Z',
			dateStr: '3 December 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-12-10T00:00:00.000Z',
			dateStr: '10 December 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-12-17T00:00:00.000Z',
			dateStr: '17 December 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-12-24T00:00:00.000Z',
			dateStr: '24 December 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-12-31T00:00:00.000Z',
			dateStr: '31 December 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2028-01-07T00:00:00.000Z',
			dateStr: '7 January 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-01-14T00:00:00.000Z',
			dateStr: '14 January 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-01-21T00:00:00.000Z',
			dateStr: '21 January 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-01-28T00:00:00.000Z',
			dateStr: '28 January 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-02-04T00:00:00.000Z',
			dateStr: '4 February 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-02-11T00:00:00.000Z',
			dateStr: '11 February 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-02-18T00:00:00.000Z',
			dateStr: '18 February 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-02-25T00:00:00.000Z',
			dateStr: '25 February 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-03-03T00:00:00.000Z',
			dateStr: '3 March 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-03-10T00:00:00.000Z',
			dateStr: '10 March 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-03-17T00:00:00.000Z',
			dateStr: '17 March 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-03-24T00:00:00.000Z',
			dateStr: '24 March 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-03-30T23:00:00.000Z',
			dateStr: '31 March 2028',
		},
	],
	FRIAA: [
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-07-03T23:00:00.000Z',
			dateStr: '4 July 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-07-10T23:00:00.000Z',
			dateStr: '11 July 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-07-17T23:00:00.000Z',
			dateStr: '18 July 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-07-24T23:00:00.000Z',
			dateStr: '25 July 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-07-31T23:00:00.000Z',
			dateStr: '1 August 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-08-07T23:00:00.000Z',
			dateStr: '8 August 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-08-14T23:00:00.000Z',
			dateStr: '15 August 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-08-21T23:00:00.000Z',
			dateStr: '22 August 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-08-28T23:00:00.000Z',
			dateStr: '29 August 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-09-04T23:00:00.000Z',
			dateStr: '5 September 2025',
		},
		{
			color: ['Brown', 'Green Bin'],
			date: '2025-09-11T23:00:00.000Z',
			dateStr: '12 September 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-09-18T23:00:00.000Z',
			dateStr: '19 September 2025',
		},
		{
			color: ['Black', 'Green Bin'],
			date: '2025-09-25T23:00:00.000Z',
			dateStr: '26 September 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-10-02T23:00:00.000Z',
			dateStr: '3 October 2025',
		},
		{
			color: ['Blue', 'Green Bin'],
			date: '2025-10-09T23:00:00.000Z',
			dateStr: '10 October 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-10-16T23:00:00.000Z',
			dateStr: '17 October 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-10-23T23:00:00.000Z',
			dateStr: '24 October 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-10-31T00:00:00.000Z',
			dateStr: '31 October 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-11-07T00:00:00.000Z',
			dateStr: '7 November 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-11-14T00:00:00.000Z',
			dateStr: '14 November 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-11-21T00:00:00.000Z',
			dateStr: '21 November 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-11-28T00:00:00.000Z',
			dateStr: '28 November 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-12-05T00:00:00.000Z',
			dateStr: '5 December 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-12-12T00:00:00.000Z',
			dateStr: '12 December 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-12-19T00:00:00.000Z',
			dateStr: '19 December 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-12-27T00:00:00.000Z',
			dateStr: '27 December 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2026-01-03T00:00:00.000Z',
			dateStr: '3 January 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-01-09T00:00:00.000Z',
			dateStr: '9 January 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-01-16T00:00:00.000Z',
			dateStr: '16 January 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-01-23T00:00:00.000Z',
			dateStr: '23 January 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-01-30T00:00:00.000Z',
			dateStr: '30 January 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-02-06T00:00:00.000Z',
			dateStr: '6 February 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-02-13T00:00:00.000Z',
			dateStr: '13 February 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-02-20T00:00:00.000Z',
			dateStr: '20 February 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-02-27T00:00:00.000Z',
			dateStr: '27 February 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-03-06T00:00:00.000Z',
			dateStr: '6 March 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-03-13T00:00:00.000Z',
			dateStr: '13 March 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-03-20T00:00:00.000Z',
			dateStr: '20 March 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-03-27T00:00:00.000Z',
			dateStr: '27 March 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-04-01T23:00:00.000Z',
			dateStr: '2 April 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-04-09T23:00:00.000Z',
			dateStr: '10 April 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-04-16T23:00:00.000Z',
			dateStr: '17 April 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-04-23T23:00:00.000Z',
			dateStr: '24 April 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-04-30T23:00:00.000Z',
			dateStr: '1 May 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-05-07T23:00:00.000Z',
			dateStr: '8 May 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-05-14T23:00:00.000Z',
			dateStr: '15 May 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-05-21T23:00:00.000Z',
			dateStr: '22 May 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-05-28T23:00:00.000Z',
			dateStr: '29 May 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-06-04T23:00:00.000Z',
			dateStr: '5 June 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-06-11T23:00:00.000Z',
			dateStr: '12 June 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-06-18T23:00:00.000Z',
			dateStr: '19 June 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-06-25T23:00:00.000Z',
			dateStr: '26 June 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-07-02T23:00:00.000Z',
			dateStr: '3 July 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-07-09T23:00:00.000Z',
			dateStr: '10 July 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-07-16T23:00:00.000Z',
			dateStr: '17 July 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-07-23T23:00:00.000Z',
			dateStr: '24 July 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-07-30T23:00:00.000Z',
			dateStr: '31 July 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-08-06T23:00:00.000Z',
			dateStr: '7 August 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-08-13T23:00:00.000Z',
			dateStr: '14 August 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-08-20T23:00:00.000Z',
			dateStr: '21 August 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-08-27T23:00:00.000Z',
			dateStr: '28 August 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-09-03T23:00:00.000Z',
			dateStr: '4 September 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-09-10T23:00:00.000Z',
			dateStr: '11 September 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-09-17T23:00:00.000Z',
			dateStr: '18 September 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-09-24T23:00:00.000Z',
			dateStr: '25 September 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-10-01T23:00:00.000Z',
			dateStr: '2 October 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-10-08T23:00:00.000Z',
			dateStr: '9 October 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-10-15T23:00:00.000Z',
			dateStr: '16 October 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-10-22T23:00:00.000Z',
			dateStr: '23 October 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-10-30T00:00:00.000Z',
			dateStr: '30 October 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-11-06T00:00:00.000Z',
			dateStr: '6 November 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-11-13T00:00:00.000Z',
			dateStr: '13 November 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-11-20T00:00:00.000Z',
			dateStr: '20 November 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-11-27T00:00:00.000Z',
			dateStr: '27 November 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-12-04T00:00:00.000Z',
			dateStr: '4 December 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-12-11T00:00:00.000Z',
			dateStr: '11 December 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-12-18T00:00:00.000Z',
			dateStr: '18 December 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-12-24T00:00:00.000Z',
			dateStr: '24 December 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-12-31T00:00:00.000Z',
			dateStr: '31 December 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2027-01-08T00:00:00.000Z',
			dateStr: '8 January 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-01-15T00:00:00.000Z',
			dateStr: '15 January 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-01-22T00:00:00.000Z',
			dateStr: '22 January 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-01-29T00:00:00.000Z',
			dateStr: '29 January 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-02-05T00:00:00.000Z',
			dateStr: '5 February 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-02-12T00:00:00.000Z',
			dateStr: '12 February 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-02-19T00:00:00.000Z',
			dateStr: '19 February 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-02-26T00:00:00.000Z',
			dateStr: '26 February 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-03-05T00:00:00.000Z',
			dateStr: '5 March 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-03-12T00:00:00.000Z',
			dateStr: '12 March 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-03-19T00:00:00.000Z',
			dateStr: '19 March 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-03-25T00:00:00.000Z',
			dateStr: '25 March 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-04-01T23:00:00.000Z',
			dateStr: '2 April 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-04-08T23:00:00.000Z',
			dateStr: '9 April 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-04-15T23:00:00.000Z',
			dateStr: '16 April 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-04-22T23:00:00.000Z',
			dateStr: '23 April 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-04-29T23:00:00.000Z',
			dateStr: '30 April 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-05-06T23:00:00.000Z',
			dateStr: '7 May 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-05-13T23:00:00.000Z',
			dateStr: '14 May 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-05-20T23:00:00.000Z',
			dateStr: '21 May 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-05-27T23:00:00.000Z',
			dateStr: '28 May 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-06-03T23:00:00.000Z',
			dateStr: '4 June 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-06-10T23:00:00.000Z',
			dateStr: '11 June 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-06-17T23:00:00.000Z',
			dateStr: '18 June 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-06-24T23:00:00.000Z',
			dateStr: '25 June 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-07-01T23:00:00.000Z',
			dateStr: '2 July 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-07-08T23:00:00.000Z',
			dateStr: '9 July 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-07-15T23:00:00.000Z',
			dateStr: '16 July 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-07-22T23:00:00.000Z',
			dateStr: '23 July 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-07-29T23:00:00.000Z',
			dateStr: '30 July 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-08-05T23:00:00.000Z',
			dateStr: '6 August 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-08-12T23:00:00.000Z',
			dateStr: '13 August 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-08-19T23:00:00.000Z',
			dateStr: '20 August 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-08-26T23:00:00.000Z',
			dateStr: '27 August 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-09-02T23:00:00.000Z',
			dateStr: '3 September 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-09-09T23:00:00.000Z',
			dateStr: '10 September 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-09-16T23:00:00.000Z',
			dateStr: '17 September 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-09-23T23:00:00.000Z',
			dateStr: '24 September 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-09-30T23:00:00.000Z',
			dateStr: '1 October 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-10-07T23:00:00.000Z',
			dateStr: '8 October 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-10-14T23:00:00.000Z',
			dateStr: '15 October 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-10-21T23:00:00.000Z',
			dateStr: '22 October 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-10-28T23:00:00.000Z',
			dateStr: '29 October 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-11-05T00:00:00.000Z',
			dateStr: '5 November 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-11-12T00:00:00.000Z',
			dateStr: '12 November 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-11-19T00:00:00.000Z',
			dateStr: '19 November 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-11-26T00:00:00.000Z',
			dateStr: '26 November 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-12-03T00:00:00.000Z',
			dateStr: '3 December 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-12-10T00:00:00.000Z',
			dateStr: '10 December 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-12-17T00:00:00.000Z',
			dateStr: '17 December 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-12-24T00:00:00.000Z',
			dateStr: '24 December 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-12-31T00:00:00.000Z',
			dateStr: '31 December 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2028-01-07T00:00:00.000Z',
			dateStr: '7 January 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-01-14T00:00:00.000Z',
			dateStr: '14 January 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-01-21T00:00:00.000Z',
			dateStr: '21 January 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-01-28T00:00:00.000Z',
			dateStr: '28 January 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-02-04T00:00:00.000Z',
			dateStr: '4 February 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-02-11T00:00:00.000Z',
			dateStr: '11 February 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-02-18T00:00:00.000Z',
			dateStr: '18 February 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-02-25T00:00:00.000Z',
			dateStr: '25 February 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-03-03T00:00:00.000Z',
			dateStr: '3 March 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-03-10T00:00:00.000Z',
			dateStr: '10 March 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-03-17T00:00:00.000Z',
			dateStr: '17 March 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-03-24T00:00:00.000Z',
			dateStr: '24 March 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-03-30T23:00:00.000Z',
			dateStr: '31 March 2028',
		},
	],
	FRIBB: [
		{
			color: ['Black Bin'],
			date: '2025-07-03T23:00:00.000Z',
			dateStr: '4 July 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-07-10T23:00:00.000Z',
			dateStr: '11 July 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-07-17T23:00:00.000Z',
			dateStr: '18 July 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-07-24T23:00:00.000Z',
			dateStr: '25 July 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-07-31T23:00:00.000Z',
			dateStr: '1 August 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-08-07T23:00:00.000Z',
			dateStr: '8 August 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-08-14T23:00:00.000Z',
			dateStr: '15 August 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-08-21T23:00:00.000Z',
			dateStr: '22 August 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-08-28T23:00:00.000Z',
			dateStr: '29 August 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-09-04T23:00:00.000Z',
			dateStr: '5 September 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-09-11T23:00:00.000Z',
			dateStr: '12 September 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-09-18T23:00:00.000Z',
			dateStr: '19 September 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-09-25T23:00:00.000Z',
			dateStr: '26 September 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-10-02T23:00:00.000Z',
			dateStr: '3 October 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-10-09T23:00:00.000Z',
			dateStr: '10 October 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-10-16T23:00:00.000Z',
			dateStr: '17 October 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-10-23T23:00:00.000Z',
			dateStr: '24 October 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-10-31T00:00:00.000Z',
			dateStr: '31 October 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-11-07T00:00:00.000Z',
			dateStr: '7 November 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-11-14T00:00:00.000Z',
			dateStr: '14 November 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-11-21T00:00:00.000Z',
			dateStr: '21 November 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-11-28T00:00:00.000Z',
			dateStr: '28 November 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-12-05T00:00:00.000Z',
			dateStr: '5 December 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-12-12T00:00:00.000Z',
			dateStr: '12 December 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-12-19T00:00:00.000Z',
			dateStr: '19 December 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-12-27T00:00:00.000Z',
			dateStr: '27 December 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2026-01-03T00:00:00.000Z',
			dateStr: '3 January 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-01-09T00:00:00.000Z',
			dateStr: '9 January 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-01-16T00:00:00.000Z',
			dateStr: '16 January 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-01-23T00:00:00.000Z',
			dateStr: '23 January 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-01-30T00:00:00.000Z',
			dateStr: '30 January 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-02-06T00:00:00.000Z',
			dateStr: '6 February 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-02-13T00:00:00.000Z',
			dateStr: '13 February 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-02-20T00:00:00.000Z',
			dateStr: '20 February 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-02-27T00:00:00.000Z',
			dateStr: '27 February 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-03-06T00:00:00.000Z',
			dateStr: '6 March 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-03-13T00:00:00.000Z',
			dateStr: '13 March 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-03-20T00:00:00.000Z',
			dateStr: '20 March 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-03-27T00:00:00.000Z',
			dateStr: '27 March 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-04-01T23:00:00.000Z',
			dateStr: '2 April 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-04-09T23:00:00.000Z',
			dateStr: '10 April 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-04-16T23:00:00.000Z',
			dateStr: '17 April 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-04-23T23:00:00.000Z',
			dateStr: '24 April 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-04-30T23:00:00.000Z',
			dateStr: '1 May 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-05-07T23:00:00.000Z',
			dateStr: '8 May 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-05-14T23:00:00.000Z',
			dateStr: '15 May 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-05-21T23:00:00.000Z',
			dateStr: '22 May 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-05-28T23:00:00.000Z',
			dateStr: '29 May 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-06-04T23:00:00.000Z',
			dateStr: '5 June 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-06-11T23:00:00.000Z',
			dateStr: '12 June 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-06-18T23:00:00.000Z',
			dateStr: '19 June 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-06-25T23:00:00.000Z',
			dateStr: '26 June 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-07-02T23:00:00.000Z',
			dateStr: '3 July 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-07-09T23:00:00.000Z',
			dateStr: '10 July 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-07-16T23:00:00.000Z',
			dateStr: '17 July 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-07-23T23:00:00.000Z',
			dateStr: '24 July 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-07-30T23:00:00.000Z',
			dateStr: '31 July 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-08-06T23:00:00.000Z',
			dateStr: '7 August 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-08-13T23:00:00.000Z',
			dateStr: '14 August 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-08-20T23:00:00.000Z',
			dateStr: '21 August 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-08-27T23:00:00.000Z',
			dateStr: '28 August 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-09-03T23:00:00.000Z',
			dateStr: '4 September 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-09-10T23:00:00.000Z',
			dateStr: '11 September 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-09-17T23:00:00.000Z',
			dateStr: '18 September 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-09-24T23:00:00.000Z',
			dateStr: '25 September 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-10-01T23:00:00.000Z',
			dateStr: '2 October 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-10-08T23:00:00.000Z',
			dateStr: '9 October 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-10-15T23:00:00.000Z',
			dateStr: '16 October 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-10-22T23:00:00.000Z',
			dateStr: '23 October 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-10-30T00:00:00.000Z',
			dateStr: '30 October 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-11-06T00:00:00.000Z',
			dateStr: '6 November 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-11-13T00:00:00.000Z',
			dateStr: '13 November 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-11-20T00:00:00.000Z',
			dateStr: '20 November 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-11-27T00:00:00.000Z',
			dateStr: '27 November 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-12-04T00:00:00.000Z',
			dateStr: '4 December 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-12-11T00:00:00.000Z',
			dateStr: '11 December 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-12-18T00:00:00.000Z',
			dateStr: '18 December 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-12-24T00:00:00.000Z',
			dateStr: '24 December 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-12-31T00:00:00.000Z',
			dateStr: '31 December 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2027-01-08T00:00:00.000Z',
			dateStr: '8 January 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-01-15T00:00:00.000Z',
			dateStr: '15 January 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-01-22T00:00:00.000Z',
			dateStr: '22 January 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-01-29T00:00:00.000Z',
			dateStr: '29 January 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-02-05T00:00:00.000Z',
			dateStr: '5 February 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-02-12T00:00:00.000Z',
			dateStr: '12 February 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-02-19T00:00:00.000Z',
			dateStr: '19 February 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-02-26T00:00:00.000Z',
			dateStr: '26 February 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-03-05T00:00:00.000Z',
			dateStr: '5 March 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-03-12T00:00:00.000Z',
			dateStr: '12 March 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-03-19T00:00:00.000Z',
			dateStr: '19 March 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-03-25T00:00:00.000Z',
			dateStr: '25 March 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-04-01T23:00:00.000Z',
			dateStr: '2 April 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-04-08T23:00:00.000Z',
			dateStr: '9 April 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-04-15T23:00:00.000Z',
			dateStr: '16 April 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-04-22T23:00:00.000Z',
			dateStr: '23 April 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-04-29T23:00:00.000Z',
			dateStr: '30 April 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-05-06T23:00:00.000Z',
			dateStr: '7 May 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-05-13T23:00:00.000Z',
			dateStr: '14 May 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-05-20T23:00:00.000Z',
			dateStr: '21 May 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-05-27T23:00:00.000Z',
			dateStr: '28 May 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-06-03T23:00:00.000Z',
			dateStr: '4 June 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-06-10T23:00:00.000Z',
			dateStr: '11 June 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-06-17T23:00:00.000Z',
			dateStr: '18 June 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-06-24T23:00:00.000Z',
			dateStr: '25 June 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-07-01T23:00:00.000Z',
			dateStr: '2 July 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-07-08T23:00:00.000Z',
			dateStr: '9 July 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-07-15T23:00:00.000Z',
			dateStr: '16 July 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-07-22T23:00:00.000Z',
			dateStr: '23 July 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-07-29T23:00:00.000Z',
			dateStr: '30 July 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-08-05T23:00:00.000Z',
			dateStr: '6 August 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-08-12T23:00:00.000Z',
			dateStr: '13 August 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-08-19T23:00:00.000Z',
			dateStr: '20 August 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-08-26T23:00:00.000Z',
			dateStr: '27 August 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-09-02T23:00:00.000Z',
			dateStr: '3 September 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-09-09T23:00:00.000Z',
			dateStr: '10 September 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-09-16T23:00:00.000Z',
			dateStr: '17 September 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-09-23T23:00:00.000Z',
			dateStr: '24 September 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-09-30T23:00:00.000Z',
			dateStr: '1 October 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-10-07T23:00:00.000Z',
			dateStr: '8 October 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-10-14T23:00:00.000Z',
			dateStr: '15 October 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-10-21T23:00:00.000Z',
			dateStr: '22 October 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-10-28T23:00:00.000Z',
			dateStr: '29 October 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-11-05T00:00:00.000Z',
			dateStr: '5 November 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-11-12T00:00:00.000Z',
			dateStr: '12 November 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-11-19T00:00:00.000Z',
			dateStr: '19 November 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-11-26T00:00:00.000Z',
			dateStr: '26 November 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-12-03T00:00:00.000Z',
			dateStr: '3 December 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-12-10T00:00:00.000Z',
			dateStr: '10 December 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-12-17T00:00:00.000Z',
			dateStr: '17 December 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-12-24T00:00:00.000Z',
			dateStr: '24 December 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-12-31T00:00:00.000Z',
			dateStr: '31 December 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2028-01-07T00:00:00.000Z',
			dateStr: '7 January 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-01-14T00:00:00.000Z',
			dateStr: '14 January 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-01-21T00:00:00.000Z',
			dateStr: '21 January 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-01-28T00:00:00.000Z',
			dateStr: '28 January 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-02-04T00:00:00.000Z',
			dateStr: '4 February 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-02-11T00:00:00.000Z',
			dateStr: '11 February 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-02-18T00:00:00.000Z',
			dateStr: '18 February 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-02-25T00:00:00.000Z',
			dateStr: '25 February 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-03-03T00:00:00.000Z',
			dateStr: '3 March 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-03-10T00:00:00.000Z',
			dateStr: '10 March 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-03-17T00:00:00.000Z',
			dateStr: '17 March 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-03-24T00:00:00.000Z',
			dateStr: '24 March 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-03-30T23:00:00.000Z',
			dateStr: '31 March 2028',
		},
	],
	FRIDD: [
		{
			color: ['Brown Bin'],
			date: '2025-07-03T23:00:00.000Z',
			dateStr: '4 July 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-07-10T23:00:00.000Z',
			dateStr: '11 July 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-07-17T23:00:00.000Z',
			dateStr: '18 July 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-07-24T23:00:00.000Z',
			dateStr: '25 July 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-07-31T23:00:00.000Z',
			dateStr: '1 August 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-08-07T23:00:00.000Z',
			dateStr: '8 August 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-08-14T23:00:00.000Z',
			dateStr: '15 August 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-08-21T23:00:00.000Z',
			dateStr: '22 August 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-08-28T23:00:00.000Z',
			dateStr: '29 August 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-09-04T23:00:00.000Z',
			dateStr: '5 September 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-09-11T23:00:00.000Z',
			dateStr: '12 September 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-09-18T23:00:00.000Z',
			dateStr: '19 September 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-09-25T23:00:00.000Z',
			dateStr: '26 September 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-10-02T23:00:00.000Z',
			dateStr: '3 October 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-10-09T23:00:00.000Z',
			dateStr: '10 October 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-10-16T23:00:00.000Z',
			dateStr: '17 October 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-10-23T23:00:00.000Z',
			dateStr: '24 October 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-10-31T00:00:00.000Z',
			dateStr: '31 October 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-11-07T00:00:00.000Z',
			dateStr: '7 November 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-11-14T00:00:00.000Z',
			dateStr: '14 November 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-11-21T00:00:00.000Z',
			dateStr: '21 November 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-11-28T00:00:00.000Z',
			dateStr: '28 November 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-12-05T00:00:00.000Z',
			dateStr: '5 December 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-12-12T00:00:00.000Z',
			dateStr: '12 December 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-12-19T00:00:00.000Z',
			dateStr: '19 December 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-12-27T00:00:00.000Z',
			dateStr: '27 December 2025',
		},
		{
			color: ['Black Bin'],
			date: '2026-01-03T00:00:00.000Z',
			dateStr: '3 January 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-01-09T00:00:00.000Z',
			dateStr: '9 January 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-01-16T00:00:00.000Z',
			dateStr: '16 January 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-01-23T00:00:00.000Z',
			dateStr: '23 January 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-01-30T00:00:00.000Z',
			dateStr: '30 January 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-02-06T00:00:00.000Z',
			dateStr: '6 February 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-02-13T00:00:00.000Z',
			dateStr: '13 February 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-02-20T00:00:00.000Z',
			dateStr: '20 February 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-02-27T00:00:00.000Z',
			dateStr: '27 February 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-03-06T00:00:00.000Z',
			dateStr: '6 March 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-03-13T00:00:00.000Z',
			dateStr: '13 March 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-03-20T00:00:00.000Z',
			dateStr: '20 March 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-03-27T00:00:00.000Z',
			dateStr: '27 March 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-04-01T23:00:00.000Z',
			dateStr: '2 April 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-04-09T23:00:00.000Z',
			dateStr: '10 April 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-04-16T23:00:00.000Z',
			dateStr: '17 April 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-04-23T23:00:00.000Z',
			dateStr: '24 April 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-04-30T23:00:00.000Z',
			dateStr: '1 May 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-05-07T23:00:00.000Z',
			dateStr: '8 May 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-05-14T23:00:00.000Z',
			dateStr: '15 May 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-05-21T23:00:00.000Z',
			dateStr: '22 May 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-05-28T23:00:00.000Z',
			dateStr: '29 May 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-06-04T23:00:00.000Z',
			dateStr: '5 June 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-06-11T23:00:00.000Z',
			dateStr: '12 June 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-06-18T23:00:00.000Z',
			dateStr: '19 June 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-06-25T23:00:00.000Z',
			dateStr: '26 June 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-07-02T23:00:00.000Z',
			dateStr: '3 July 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-07-09T23:00:00.000Z',
			dateStr: '10 July 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-07-16T23:00:00.000Z',
			dateStr: '17 July 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-07-23T23:00:00.000Z',
			dateStr: '24 July 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-07-30T23:00:00.000Z',
			dateStr: '31 July 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-08-06T23:00:00.000Z',
			dateStr: '7 August 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-08-13T23:00:00.000Z',
			dateStr: '14 August 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-08-20T23:00:00.000Z',
			dateStr: '21 August 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-08-27T23:00:00.000Z',
			dateStr: '28 August 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-09-03T23:00:00.000Z',
			dateStr: '4 September 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-09-10T23:00:00.000Z',
			dateStr: '11 September 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-09-17T23:00:00.000Z',
			dateStr: '18 September 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-09-24T23:00:00.000Z',
			dateStr: '25 September 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-10-01T23:00:00.000Z',
			dateStr: '2 October 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-10-08T23:00:00.000Z',
			dateStr: '9 October 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-10-15T23:00:00.000Z',
			dateStr: '16 October 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-10-22T23:00:00.000Z',
			dateStr: '23 October 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-10-30T00:00:00.000Z',
			dateStr: '30 October 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-11-06T00:00:00.000Z',
			dateStr: '6 November 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-11-13T00:00:00.000Z',
			dateStr: '13 November 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-11-20T00:00:00.000Z',
			dateStr: '20 November 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-11-27T00:00:00.000Z',
			dateStr: '27 November 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-12-04T00:00:00.000Z',
			dateStr: '4 December 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-12-11T00:00:00.000Z',
			dateStr: '11 December 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-12-18T00:00:00.000Z',
			dateStr: '18 December 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-12-24T00:00:00.000Z',
			dateStr: '24 December 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-12-31T00:00:00.000Z',
			dateStr: '31 December 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2027-01-08T00:00:00.000Z',
			dateStr: '8 January 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-01-15T00:00:00.000Z',
			dateStr: '15 January 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-01-22T00:00:00.000Z',
			dateStr: '22 January 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-01-29T00:00:00.000Z',
			dateStr: '29 January 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-02-05T00:00:00.000Z',
			dateStr: '5 February 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-02-12T00:00:00.000Z',
			dateStr: '12 February 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-02-19T00:00:00.000Z',
			dateStr: '19 February 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-02-26T00:00:00.000Z',
			dateStr: '26 February 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-03-05T00:00:00.000Z',
			dateStr: '5 March 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-03-12T00:00:00.000Z',
			dateStr: '12 March 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-03-19T00:00:00.000Z',
			dateStr: '19 March 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-03-25T00:00:00.000Z',
			dateStr: '25 March 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-04-01T23:00:00.000Z',
			dateStr: '2 April 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-04-08T23:00:00.000Z',
			dateStr: '9 April 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-04-15T23:00:00.000Z',
			dateStr: '16 April 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-04-22T23:00:00.000Z',
			dateStr: '23 April 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-04-29T23:00:00.000Z',
			dateStr: '30 April 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-05-06T23:00:00.000Z',
			dateStr: '7 May 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-05-13T23:00:00.000Z',
			dateStr: '14 May 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-05-20T23:00:00.000Z',
			dateStr: '21 May 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-05-27T23:00:00.000Z',
			dateStr: '28 May 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-06-03T23:00:00.000Z',
			dateStr: '4 June 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-06-10T23:00:00.000Z',
			dateStr: '11 June 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-06-17T23:00:00.000Z',
			dateStr: '18 June 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-06-24T23:00:00.000Z',
			dateStr: '25 June 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-07-01T23:00:00.000Z',
			dateStr: '2 July 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-07-08T23:00:00.000Z',
			dateStr: '9 July 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-07-15T23:00:00.000Z',
			dateStr: '16 July 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-07-22T23:00:00.000Z',
			dateStr: '23 July 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-07-29T23:00:00.000Z',
			dateStr: '30 July 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-08-05T23:00:00.000Z',
			dateStr: '6 August 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-08-12T23:00:00.000Z',
			dateStr: '13 August 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-08-19T23:00:00.000Z',
			dateStr: '20 August 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-08-26T23:00:00.000Z',
			dateStr: '27 August 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-09-02T23:00:00.000Z',
			dateStr: '3 September 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-09-09T23:00:00.000Z',
			dateStr: '10 September 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-09-16T23:00:00.000Z',
			dateStr: '17 September 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-09-23T23:00:00.000Z',
			dateStr: '24 September 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-09-30T23:00:00.000Z',
			dateStr: '1 October 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-10-07T23:00:00.000Z',
			dateStr: '8 October 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-10-14T23:00:00.000Z',
			dateStr: '15 October 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-10-21T23:00:00.000Z',
			dateStr: '22 October 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-10-28T23:00:00.000Z',
			dateStr: '29 October 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-11-05T00:00:00.000Z',
			dateStr: '5 November 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-11-12T00:00:00.000Z',
			dateStr: '12 November 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-11-19T00:00:00.000Z',
			dateStr: '19 November 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-11-26T00:00:00.000Z',
			dateStr: '26 November 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-12-03T00:00:00.000Z',
			dateStr: '3 December 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-12-10T00:00:00.000Z',
			dateStr: '10 December 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-12-17T00:00:00.000Z',
			dateStr: '17 December 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-12-24T00:00:00.000Z',
			dateStr: '24 December 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-12-31T00:00:00.000Z',
			dateStr: '31 December 2027',
		},
		{
			color: ['Black Bin'],
			date: '2028-01-07T00:00:00.000Z',
			dateStr: '7 January 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-01-14T00:00:00.000Z',
			dateStr: '14 January 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-01-21T00:00:00.000Z',
			dateStr: '21 January 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-01-28T00:00:00.000Z',
			dateStr: '28 January 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-02-04T00:00:00.000Z',
			dateStr: '4 February 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-02-11T00:00:00.000Z',
			dateStr: '11 February 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-02-18T00:00:00.000Z',
			dateStr: '18 February 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-02-25T00:00:00.000Z',
			dateStr: '25 February 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-03-03T00:00:00.000Z',
			dateStr: '3 March 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-03-10T00:00:00.000Z',
			dateStr: '10 March 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-03-17T00:00:00.000Z',
			dateStr: '17 March 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-03-24T00:00:00.000Z',
			dateStr: '24 March 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-03-30T23:00:00.000Z',
			dateStr: '31 March 2028',
		},
	],
	TUECC: [
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-06-30T23:00:00.000Z',
			dateStr: '1 July 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-07-07T23:00:00.000Z',
			dateStr: '8 July 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-07-14T23:00:00.000Z',
			dateStr: '15 July 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-07-21T23:00:00.000Z',
			dateStr: '22 July 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-07-28T23:00:00.000Z',
			dateStr: '29 July 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-08-04T23:00:00.000Z',
			dateStr: '5 August 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-08-11T23:00:00.000Z',
			dateStr: '12 August 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-08-18T23:00:00.000Z',
			dateStr: '19 August 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-08-25T23:00:00.000Z',
			dateStr: '26 August 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-09-01T23:00:00.000Z',
			dateStr: '2 September 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-09-08T23:00:00.000Z',
			dateStr: '9 September 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-09-15T23:00:00.000Z',
			dateStr: '16 September 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-09-22T23:00:00.000Z',
			dateStr: '23 September 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-09-29T23:00:00.000Z',
			dateStr: '30 September 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-10-06T23:00:00.000Z',
			dateStr: '7 October 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-10-13T23:00:00.000Z',
			dateStr: '14 October 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-10-20T23:00:00.000Z',
			dateStr: '21 October 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-10-28T00:00:00.000Z',
			dateStr: '28 October 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-11-04T00:00:00.000Z',
			dateStr: '4 November 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-11-11T00:00:00.000Z',
			dateStr: '11 November 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-11-18T00:00:00.000Z',
			dateStr: '18 November 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-11-25T00:00:00.000Z',
			dateStr: '25 November 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-12-02T00:00:00.000Z',
			dateStr: '2 December 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-12-09T00:00:00.000Z',
			dateStr: '9 December 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-12-16T00:00:00.000Z',
			dateStr: '16 December 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-12-22T00:00:00.000Z',
			dateStr: '22 December 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-12-30T00:00:00.000Z',
			dateStr: '30 December 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2026-01-06T00:00:00.000Z',
			dateStr: '6 January 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-01-13T00:00:00.000Z',
			dateStr: '13 January 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-01-20T00:00:00.000Z',
			dateStr: '20 January 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-01-27T00:00:00.000Z',
			dateStr: '27 January 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-02-03T00:00:00.000Z',
			dateStr: '3 February 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-02-10T00:00:00.000Z',
			dateStr: '10 February 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-02-17T00:00:00.000Z',
			dateStr: '17 February 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-02-24T00:00:00.000Z',
			dateStr: '24 February 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-03-03T00:00:00.000Z',
			dateStr: '3 March 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-03-10T00:00:00.000Z',
			dateStr: '10 March 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-03-17T00:00:00.000Z',
			dateStr: '17 March 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-03-24T00:00:00.000Z',
			dateStr: '24 March 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-03-29T23:00:00.000Z',
			dateStr: '30 March 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-04-06T23:00:00.000Z',
			dateStr: '7 April 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-04-13T23:00:00.000Z',
			dateStr: '14 April 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-04-20T23:00:00.000Z',
			dateStr: '21 April 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-04-27T23:00:00.000Z',
			dateStr: '28 April 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-05-04T23:00:00.000Z',
			dateStr: '5 May 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-05-11T23:00:00.000Z',
			dateStr: '12 May 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-05-18T23:00:00.000Z',
			dateStr: '19 May 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-05-25T23:00:00.000Z',
			dateStr: '26 May 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-06-01T23:00:00.000Z',
			dateStr: '2 June 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-06-08T23:00:00.000Z',
			dateStr: '9 June 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-06-15T23:00:00.000Z',
			dateStr: '16 June 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-06-22T23:00:00.000Z',
			dateStr: '23 June 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-06-29T23:00:00.000Z',
			dateStr: '30 June 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-07-06T23:00:00.000Z',
			dateStr: '7 July 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-07-13T23:00:00.000Z',
			dateStr: '14 July 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-07-20T23:00:00.000Z',
			dateStr: '21 July 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-07-27T23:00:00.000Z',
			dateStr: '28 July 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-08-03T23:00:00.000Z',
			dateStr: '4 August 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-08-10T23:00:00.000Z',
			dateStr: '11 August 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-08-17T23:00:00.000Z',
			dateStr: '18 August 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-08-24T23:00:00.000Z',
			dateStr: '25 August 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-08-31T23:00:00.000Z',
			dateStr: '1 September 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-09-07T23:00:00.000Z',
			dateStr: '8 September 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-09-14T23:00:00.000Z',
			dateStr: '15 September 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-09-21T23:00:00.000Z',
			dateStr: '22 September 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-09-28T23:00:00.000Z',
			dateStr: '29 September 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-10-05T23:00:00.000Z',
			dateStr: '6 October 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-10-12T23:00:00.000Z',
			dateStr: '13 October 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-10-19T23:00:00.000Z',
			dateStr: '20 October 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-10-27T00:00:00.000Z',
			dateStr: '27 October 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-11-03T00:00:00.000Z',
			dateStr: '3 November 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-11-10T00:00:00.000Z',
			dateStr: '10 November 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-11-17T00:00:00.000Z',
			dateStr: '17 November 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-11-24T00:00:00.000Z',
			dateStr: '24 November 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-12-01T00:00:00.000Z',
			dateStr: '1 December 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-12-08T00:00:00.000Z',
			dateStr: '8 December 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-12-15T00:00:00.000Z',
			dateStr: '15 December 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-12-21T00:00:00.000Z',
			dateStr: '21 December 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-12-28T00:00:00.000Z',
			dateStr: '28 December 2026',
		},
		{
			color: ['Black Bin'],
			date: '2027-01-05T00:00:00.000Z',
			dateStr: '5 January 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-01-12T00:00:00.000Z',
			dateStr: '12 January 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-01-19T00:00:00.000Z',
			dateStr: '19 January 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-01-26T00:00:00.000Z',
			dateStr: '26 January 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-02-02T00:00:00.000Z',
			dateStr: '2 February 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-02-09T00:00:00.000Z',
			dateStr: '9 February 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-02-16T00:00:00.000Z',
			dateStr: '16 February 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-02-23T00:00:00.000Z',
			dateStr: '23 February 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-03-02T00:00:00.000Z',
			dateStr: '2 March 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-03-09T00:00:00.000Z',
			dateStr: '9 March 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-03-16T00:00:00.000Z',
			dateStr: '16 March 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-03-22T00:00:00.000Z',
			dateStr: '22 March 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-03-29T23:00:00.000Z',
			dateStr: '30 March 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-04-05T23:00:00.000Z',
			dateStr: '6 April 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-04-12T23:00:00.000Z',
			dateStr: '13 April 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-04-19T23:00:00.000Z',
			dateStr: '20 April 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-04-26T23:00:00.000Z',
			dateStr: '27 April 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-05-03T23:00:00.000Z',
			dateStr: '4 May 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-05-10T23:00:00.000Z',
			dateStr: '11 May 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-05-17T23:00:00.000Z',
			dateStr: '18 May 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-05-24T23:00:00.000Z',
			dateStr: '25 May 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-05-31T23:00:00.000Z',
			dateStr: '1 June 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-06-07T23:00:00.000Z',
			dateStr: '8 June 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-06-14T23:00:00.000Z',
			dateStr: '15 June 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-06-21T23:00:00.000Z',
			dateStr: '22 June 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-06-28T23:00:00.000Z',
			dateStr: '29 June 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-07-05T23:00:00.000Z',
			dateStr: '6 July 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-07-12T23:00:00.000Z',
			dateStr: '13 July 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-07-19T23:00:00.000Z',
			dateStr: '20 July 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-07-26T23:00:00.000Z',
			dateStr: '27 July 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-08-02T23:00:00.000Z',
			dateStr: '3 August 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-08-09T23:00:00.000Z',
			dateStr: '10 August 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-08-16T23:00:00.000Z',
			dateStr: '17 August 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-08-23T23:00:00.000Z',
			dateStr: '24 August 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-08-30T23:00:00.000Z',
			dateStr: '31 August 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-09-06T23:00:00.000Z',
			dateStr: '7 September 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-09-13T23:00:00.000Z',
			dateStr: '14 September 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-09-20T23:00:00.000Z',
			dateStr: '21 September 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-09-27T23:00:00.000Z',
			dateStr: '28 September 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-10-04T23:00:00.000Z',
			dateStr: '5 October 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-10-11T23:00:00.000Z',
			dateStr: '12 October 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-10-18T23:00:00.000Z',
			dateStr: '19 October 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-10-25T23:00:00.000Z',
			dateStr: '26 October 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-11-02T00:00:00.000Z',
			dateStr: '2 November 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-11-09T00:00:00.000Z',
			dateStr: '9 November 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-11-16T00:00:00.000Z',
			dateStr: '16 November 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-11-23T00:00:00.000Z',
			dateStr: '23 November 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-11-30T00:00:00.000Z',
			dateStr: '30 November 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-12-07T00:00:00.000Z',
			dateStr: '7 December 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-12-14T00:00:00.000Z',
			dateStr: '14 December 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-12-21T00:00:00.000Z',
			dateStr: '21 December 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-12-28T00:00:00.000Z',
			dateStr: '28 December 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2028-01-04T00:00:00.000Z',
			dateStr: '4 January 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-01-11T00:00:00.000Z',
			dateStr: '11 January 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-01-18T00:00:00.000Z',
			dateStr: '18 January 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-01-25T00:00:00.000Z',
			dateStr: '25 January 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-02-01T00:00:00.000Z',
			dateStr: '1 February 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-02-08T00:00:00.000Z',
			dateStr: '8 February 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-02-15T00:00:00.000Z',
			dateStr: '15 February 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-02-22T00:00:00.000Z',
			dateStr: '22 February 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-02-29T00:00:00.000Z',
			dateStr: '29 February 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-03-07T00:00:00.000Z',
			dateStr: '7 March 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-03-14T00:00:00.000Z',
			dateStr: '14 March 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-03-21T00:00:00.000Z',
			dateStr: '21 March 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-03-27T23:00:00.000Z',
			dateStr: '28 March 2028',
		},
	],
	TUEBB: [
		{
			color: ['Black Bin'],
			date: '2025-06-30T23:00:00.000Z',
			dateStr: '1 July 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-07-07T23:00:00.000Z',
			dateStr: '8 July 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-07-14T23:00:00.000Z',
			dateStr: '15 July 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-07-21T23:00:00.000Z',
			dateStr: '22 July 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-07-28T23:00:00.000Z',
			dateStr: '29 July 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-08-04T23:00:00.000Z',
			dateStr: '5 August 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-08-11T23:00:00.000Z',
			dateStr: '12 August 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-08-18T23:00:00.000Z',
			dateStr: '19 August 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-08-25T23:00:00.000Z',
			dateStr: '26 August 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-09-01T23:00:00.000Z',
			dateStr: '2 September 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-09-08T23:00:00.000Z',
			dateStr: '9 September 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-09-15T23:00:00.000Z',
			dateStr: '16 September 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-09-22T23:00:00.000Z',
			dateStr: '23 September 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-09-29T23:00:00.000Z',
			dateStr: '30 September 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-10-06T23:00:00.000Z',
			dateStr: '7 October 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-10-13T23:00:00.000Z',
			dateStr: '14 October 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-10-20T23:00:00.000Z',
			dateStr: '21 October 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-10-28T00:00:00.000Z',
			dateStr: '28 October 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-11-04T00:00:00.000Z',
			dateStr: '4 November 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-11-11T00:00:00.000Z',
			dateStr: '11 November 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-11-18T00:00:00.000Z',
			dateStr: '18 November 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-11-25T00:00:00.000Z',
			dateStr: '25 November 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-12-02T00:00:00.000Z',
			dateStr: '2 December 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-12-09T00:00:00.000Z',
			dateStr: '9 December 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-12-16T00:00:00.000Z',
			dateStr: '16 December 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-12-22T00:00:00.000Z',
			dateStr: '22 December 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-12-30T00:00:00.000Z',
			dateStr: '30 December 2025',
		},
		{
			color: ['Black Bin'],
			date: '2026-01-06T00:00:00.000Z',
			dateStr: '6 January 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-01-13T00:00:00.000Z',
			dateStr: '13 January 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-01-20T00:00:00.000Z',
			dateStr: '20 January 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-01-27T00:00:00.000Z',
			dateStr: '27 January 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-02-03T00:00:00.000Z',
			dateStr: '3 February 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-02-10T00:00:00.000Z',
			dateStr: '10 February 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-02-17T00:00:00.000Z',
			dateStr: '17 February 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-02-24T00:00:00.000Z',
			dateStr: '24 February 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-03-03T00:00:00.000Z',
			dateStr: '3 March 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-03-10T00:00:00.000Z',
			dateStr: '10 March 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-03-17T00:00:00.000Z',
			dateStr: '17 March 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-03-24T00:00:00.000Z',
			dateStr: '24 March 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-03-29T23:00:00.000Z',
			dateStr: '30 March 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-04-06T23:00:00.000Z',
			dateStr: '7 April 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-04-13T23:00:00.000Z',
			dateStr: '14 April 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-04-20T23:00:00.000Z',
			dateStr: '21 April 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-04-27T23:00:00.000Z',
			dateStr: '28 April 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-05-04T23:00:00.000Z',
			dateStr: '5 May 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-05-11T23:00:00.000Z',
			dateStr: '12 May 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-05-18T23:00:00.000Z',
			dateStr: '19 May 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-05-25T23:00:00.000Z',
			dateStr: '26 May 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-06-01T23:00:00.000Z',
			dateStr: '2 June 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-06-08T23:00:00.000Z',
			dateStr: '9 June 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-06-15T23:00:00.000Z',
			dateStr: '16 June 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-06-22T23:00:00.000Z',
			dateStr: '23 June 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-06-29T23:00:00.000Z',
			dateStr: '30 June 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-07-06T23:00:00.000Z',
			dateStr: '7 July 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-07-13T23:00:00.000Z',
			dateStr: '14 July 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-07-20T23:00:00.000Z',
			dateStr: '21 July 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-07-27T23:00:00.000Z',
			dateStr: '28 July 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-08-03T23:00:00.000Z',
			dateStr: '4 August 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-08-10T23:00:00.000Z',
			dateStr: '11 August 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-08-17T23:00:00.000Z',
			dateStr: '18 August 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-08-24T23:00:00.000Z',
			dateStr: '25 August 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-08-31T23:00:00.000Z',
			dateStr: '1 September 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-09-07T23:00:00.000Z',
			dateStr: '8 September 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-09-14T23:00:00.000Z',
			dateStr: '15 September 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-09-21T23:00:00.000Z',
			dateStr: '22 September 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-09-28T23:00:00.000Z',
			dateStr: '29 September 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-10-05T23:00:00.000Z',
			dateStr: '6 October 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-10-12T23:00:00.000Z',
			dateStr: '13 October 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-10-19T23:00:00.000Z',
			dateStr: '20 October 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-10-27T00:00:00.000Z',
			dateStr: '27 October 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-11-03T00:00:00.000Z',
			dateStr: '3 November 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-11-10T00:00:00.000Z',
			dateStr: '10 November 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-11-17T00:00:00.000Z',
			dateStr: '17 November 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-11-24T00:00:00.000Z',
			dateStr: '24 November 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-12-01T00:00:00.000Z',
			dateStr: '1 December 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-12-08T00:00:00.000Z',
			dateStr: '8 December 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-12-15T00:00:00.000Z',
			dateStr: '15 December 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-12-21T00:00:00.000Z',
			dateStr: '21 December 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-12-28T00:00:00.000Z',
			dateStr: '28 December 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2027-01-05T00:00:00.000Z',
			dateStr: '5 January 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-01-12T00:00:00.000Z',
			dateStr: '12 January 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-01-19T00:00:00.000Z',
			dateStr: '19 January 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-01-26T00:00:00.000Z',
			dateStr: '26 January 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-02-02T00:00:00.000Z',
			dateStr: '2 February 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-02-09T00:00:00.000Z',
			dateStr: '9 February 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-02-16T00:00:00.000Z',
			dateStr: '16 February 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-02-23T00:00:00.000Z',
			dateStr: '23 February 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-03-02T00:00:00.000Z',
			dateStr: '2 March 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-03-09T00:00:00.000Z',
			dateStr: '9 March 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-03-16T00:00:00.000Z',
			dateStr: '16 March 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-03-22T00:00:00.000Z',
			dateStr: '22 March 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-03-29T23:00:00.000Z',
			dateStr: '30 March 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-04-05T23:00:00.000Z',
			dateStr: '6 April 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-04-12T23:00:00.000Z',
			dateStr: '13 April 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-04-19T23:00:00.000Z',
			dateStr: '20 April 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-04-26T23:00:00.000Z',
			dateStr: '27 April 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-05-03T23:00:00.000Z',
			dateStr: '4 May 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-05-10T23:00:00.000Z',
			dateStr: '11 May 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-05-17T23:00:00.000Z',
			dateStr: '18 May 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-05-24T23:00:00.000Z',
			dateStr: '25 May 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-05-31T23:00:00.000Z',
			dateStr: '1 June 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-06-07T23:00:00.000Z',
			dateStr: '8 June 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-06-14T23:00:00.000Z',
			dateStr: '15 June 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-06-21T23:00:00.000Z',
			dateStr: '22 June 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-06-28T23:00:00.000Z',
			dateStr: '29 June 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-07-05T23:00:00.000Z',
			dateStr: '6 July 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-07-12T23:00:00.000Z',
			dateStr: '13 July 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-07-19T23:00:00.000Z',
			dateStr: '20 July 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-07-26T23:00:00.000Z',
			dateStr: '27 July 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-08-02T23:00:00.000Z',
			dateStr: '3 August 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-08-09T23:00:00.000Z',
			dateStr: '10 August 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-08-16T23:00:00.000Z',
			dateStr: '17 August 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-08-23T23:00:00.000Z',
			dateStr: '24 August 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-08-30T23:00:00.000Z',
			dateStr: '31 August 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-09-06T23:00:00.000Z',
			dateStr: '7 September 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-09-13T23:00:00.000Z',
			dateStr: '14 September 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-09-20T23:00:00.000Z',
			dateStr: '21 September 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-09-27T23:00:00.000Z',
			dateStr: '28 September 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-10-04T23:00:00.000Z',
			dateStr: '5 October 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-10-11T23:00:00.000Z',
			dateStr: '12 October 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-10-18T23:00:00.000Z',
			dateStr: '19 October 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-10-25T23:00:00.000Z',
			dateStr: '26 October 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-11-02T00:00:00.000Z',
			dateStr: '2 November 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-11-09T00:00:00.000Z',
			dateStr: '9 November 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-11-16T00:00:00.000Z',
			dateStr: '16 November 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-11-23T00:00:00.000Z',
			dateStr: '23 November 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-11-30T00:00:00.000Z',
			dateStr: '30 November 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-12-07T00:00:00.000Z',
			dateStr: '7 December 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-12-14T00:00:00.000Z',
			dateStr: '14 December 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-12-21T00:00:00.000Z',
			dateStr: '21 December 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-12-28T00:00:00.000Z',
			dateStr: '28 December 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2028-01-04T00:00:00.000Z',
			dateStr: '4 January 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-01-11T00:00:00.000Z',
			dateStr: '11 January 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-01-18T00:00:00.000Z',
			dateStr: '18 January 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-01-25T00:00:00.000Z',
			dateStr: '25 January 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-02-01T00:00:00.000Z',
			dateStr: '1 February 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-02-08T00:00:00.000Z',
			dateStr: '8 February 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-02-15T00:00:00.000Z',
			dateStr: '15 February 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-02-22T00:00:00.000Z',
			dateStr: '22 February 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-02-29T00:00:00.000Z',
			dateStr: '29 February 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-03-07T00:00:00.000Z',
			dateStr: '7 March 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-03-14T00:00:00.000Z',
			dateStr: '14 March 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-03-21T00:00:00.000Z',
			dateStr: '21 March 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-03-27T23:00:00.000Z',
			dateStr: '28 March 2028',
		},
	],
	TUEDD: [
		{
			color: ['Brown Bin'],
			date: '2025-06-30T23:00:00.000Z',
			dateStr: '1 July 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-07-07T23:00:00.000Z',
			dateStr: '8 July 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-07-14T23:00:00.000Z',
			dateStr: '15 July 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-07-21T23:00:00.000Z',
			dateStr: '22 July 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-07-28T23:00:00.000Z',
			dateStr: '29 July 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-08-04T23:00:00.000Z',
			dateStr: '5 August 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-08-11T23:00:00.000Z',
			dateStr: '12 August 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-08-18T23:00:00.000Z',
			dateStr: '19 August 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-08-25T23:00:00.000Z',
			dateStr: '26 August 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-09-01T23:00:00.000Z',
			dateStr: '2 September 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-09-08T23:00:00.000Z',
			dateStr: '9 September 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-09-15T23:00:00.000Z',
			dateStr: '16 September 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-09-22T23:00:00.000Z',
			dateStr: '23 September 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-09-29T23:00:00.000Z',
			dateStr: '30 September 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-10-06T23:00:00.000Z',
			dateStr: '7 October 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-10-13T23:00:00.000Z',
			dateStr: '14 October 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-10-20T23:00:00.000Z',
			dateStr: '21 October 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-10-28T00:00:00.000Z',
			dateStr: '28 October 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-11-04T00:00:00.000Z',
			dateStr: '4 November 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-11-11T00:00:00.000Z',
			dateStr: '11 November 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-11-18T00:00:00.000Z',
			dateStr: '18 November 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-11-25T00:00:00.000Z',
			dateStr: '25 November 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-12-02T00:00:00.000Z',
			dateStr: '2 December 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-12-09T00:00:00.000Z',
			dateStr: '9 December 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-12-16T00:00:00.000Z',
			dateStr: '16 December 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-12-22T00:00:00.000Z',
			dateStr: '22 December 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-12-30T00:00:00.000Z',
			dateStr: '30 December 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2026-01-06T00:00:00.000Z',
			dateStr: '6 January 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-01-13T00:00:00.000Z',
			dateStr: '13 January 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-01-20T00:00:00.000Z',
			dateStr: '20 January 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-01-27T00:00:00.000Z',
			dateStr: '27 January 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-02-03T00:00:00.000Z',
			dateStr: '3 February 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-02-10T00:00:00.000Z',
			dateStr: '10 February 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-02-17T00:00:00.000Z',
			dateStr: '17 February 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-02-24T00:00:00.000Z',
			dateStr: '24 February 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-03-03T00:00:00.000Z',
			dateStr: '3 March 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-03-10T00:00:00.000Z',
			dateStr: '10 March 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-03-17T00:00:00.000Z',
			dateStr: '17 March 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-03-24T00:00:00.000Z',
			dateStr: '24 March 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-03-29T23:00:00.000Z',
			dateStr: '30 March 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-04-06T23:00:00.000Z',
			dateStr: '7 April 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-04-13T23:00:00.000Z',
			dateStr: '14 April 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-04-20T23:00:00.000Z',
			dateStr: '21 April 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-04-27T23:00:00.000Z',
			dateStr: '28 April 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-05-04T23:00:00.000Z',
			dateStr: '5 May 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-05-11T23:00:00.000Z',
			dateStr: '12 May 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-05-18T23:00:00.000Z',
			dateStr: '19 May 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-05-25T23:00:00.000Z',
			dateStr: '26 May 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-06-01T23:00:00.000Z',
			dateStr: '2 June 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-06-08T23:00:00.000Z',
			dateStr: '9 June 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-06-15T23:00:00.000Z',
			dateStr: '16 June 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-06-22T23:00:00.000Z',
			dateStr: '23 June 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-06-29T23:00:00.000Z',
			dateStr: '30 June 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-07-06T23:00:00.000Z',
			dateStr: '7 July 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-07-13T23:00:00.000Z',
			dateStr: '14 July 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-07-20T23:00:00.000Z',
			dateStr: '21 July 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-07-27T23:00:00.000Z',
			dateStr: '28 July 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-08-03T23:00:00.000Z',
			dateStr: '4 August 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-08-10T23:00:00.000Z',
			dateStr: '11 August 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-08-17T23:00:00.000Z',
			dateStr: '18 August 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-08-24T23:00:00.000Z',
			dateStr: '25 August 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-08-31T23:00:00.000Z',
			dateStr: '1 September 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-09-07T23:00:00.000Z',
			dateStr: '8 September 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-09-14T23:00:00.000Z',
			dateStr: '15 September 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-09-21T23:00:00.000Z',
			dateStr: '22 September 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-09-28T23:00:00.000Z',
			dateStr: '29 September 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-10-05T23:00:00.000Z',
			dateStr: '6 October 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-10-12T23:00:00.000Z',
			dateStr: '13 October 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-10-19T23:00:00.000Z',
			dateStr: '20 October 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-10-27T00:00:00.000Z',
			dateStr: '27 October 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-11-03T00:00:00.000Z',
			dateStr: '3 November 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-11-10T00:00:00.000Z',
			dateStr: '10 November 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-11-17T00:00:00.000Z',
			dateStr: '17 November 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-11-24T00:00:00.000Z',
			dateStr: '24 November 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-12-01T00:00:00.000Z',
			dateStr: '1 December 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-12-08T00:00:00.000Z',
			dateStr: '8 December 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-12-15T00:00:00.000Z',
			dateStr: '15 December 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-12-21T00:00:00.000Z',
			dateStr: '21 December 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-12-28T00:00:00.000Z',
			dateStr: '28 December 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2027-01-05T00:00:00.000Z',
			dateStr: '5 January 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-01-12T00:00:00.000Z',
			dateStr: '12 January 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-01-19T00:00:00.000Z',
			dateStr: '19 January 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-01-26T00:00:00.000Z',
			dateStr: '26 January 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-02-02T00:00:00.000Z',
			dateStr: '2 February 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-02-09T00:00:00.000Z',
			dateStr: '9 February 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-02-16T00:00:00.000Z',
			dateStr: '16 February 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-02-23T00:00:00.000Z',
			dateStr: '23 February 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-03-02T00:00:00.000Z',
			dateStr: '2 March 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-03-09T00:00:00.000Z',
			dateStr: '9 March 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-03-16T00:00:00.000Z',
			dateStr: '16 March 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-03-22T00:00:00.000Z',
			dateStr: '22 March 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-03-29T23:00:00.000Z',
			dateStr: '30 March 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-04-05T23:00:00.000Z',
			dateStr: '6 April 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-04-12T23:00:00.000Z',
			dateStr: '13 April 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-04-19T23:00:00.000Z',
			dateStr: '20 April 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-04-26T23:00:00.000Z',
			dateStr: '27 April 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-05-03T23:00:00.000Z',
			dateStr: '4 May 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-05-10T23:00:00.000Z',
			dateStr: '11 May 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-05-17T23:00:00.000Z',
			dateStr: '18 May 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-05-24T23:00:00.000Z',
			dateStr: '25 May 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-05-31T23:00:00.000Z',
			dateStr: '1 June 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-06-07T23:00:00.000Z',
			dateStr: '8 June 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-06-14T23:00:00.000Z',
			dateStr: '15 June 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-06-21T23:00:00.000Z',
			dateStr: '22 June 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-06-28T23:00:00.000Z',
			dateStr: '29 June 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-07-05T23:00:00.000Z',
			dateStr: '6 July 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-07-12T23:00:00.000Z',
			dateStr: '13 July 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-07-19T23:00:00.000Z',
			dateStr: '20 July 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-07-26T23:00:00.000Z',
			dateStr: '27 July 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-08-02T23:00:00.000Z',
			dateStr: '3 August 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-08-09T23:00:00.000Z',
			dateStr: '10 August 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-08-16T23:00:00.000Z',
			dateStr: '17 August 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-08-23T23:00:00.000Z',
			dateStr: '24 August 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-08-30T23:00:00.000Z',
			dateStr: '31 August 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-09-06T23:00:00.000Z',
			dateStr: '7 September 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-09-13T23:00:00.000Z',
			dateStr: '14 September 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-09-20T23:00:00.000Z',
			dateStr: '21 September 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-09-27T23:00:00.000Z',
			dateStr: '28 September 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-10-04T23:00:00.000Z',
			dateStr: '5 October 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-10-11T23:00:00.000Z',
			dateStr: '12 October 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-10-18T23:00:00.000Z',
			dateStr: '19 October 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-10-25T23:00:00.000Z',
			dateStr: '26 October 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-11-02T00:00:00.000Z',
			dateStr: '2 November 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-11-09T00:00:00.000Z',
			dateStr: '9 November 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-11-16T00:00:00.000Z',
			dateStr: '16 November 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-11-23T00:00:00.000Z',
			dateStr: '23 November 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-11-30T00:00:00.000Z',
			dateStr: '30 November 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-12-07T00:00:00.000Z',
			dateStr: '7 December 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-12-14T00:00:00.000Z',
			dateStr: '14 December 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-12-21T00:00:00.000Z',
			dateStr: '21 December 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-12-28T00:00:00.000Z',
			dateStr: '28 December 2027',
		},
		{
			color: ['Black Bin'],
			date: '2028-01-04T00:00:00.000Z',
			dateStr: '4 January 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-01-11T00:00:00.000Z',
			dateStr: '11 January 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-01-18T00:00:00.000Z',
			dateStr: '18 January 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-01-25T00:00:00.000Z',
			dateStr: '25 January 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-02-01T00:00:00.000Z',
			dateStr: '1 February 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-02-08T00:00:00.000Z',
			dateStr: '8 February 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-02-15T00:00:00.000Z',
			dateStr: '15 February 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-02-22T00:00:00.000Z',
			dateStr: '22 February 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-02-29T00:00:00.000Z',
			dateStr: '29 February 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-03-07T00:00:00.000Z',
			dateStr: '7 March 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-03-14T00:00:00.000Z',
			dateStr: '14 March 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-03-21T00:00:00.000Z',
			dateStr: '21 March 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-03-27T23:00:00.000Z',
			dateStr: '28 March 2028',
		},
	],
	WEDDD: [
		{
			color: ['Brown Bin'],
			date: '2025-07-01T23:00:00.000Z',
			dateStr: '2 July 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-07-08T23:00:00.000Z',
			dateStr: '9 July 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-07-15T23:00:00.000Z',
			dateStr: '16 July 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-07-22T23:00:00.000Z',
			dateStr: '23 July 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-07-29T23:00:00.000Z',
			dateStr: '30 July 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-08-05T23:00:00.000Z',
			dateStr: '6 August 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-08-12T23:00:00.000Z',
			dateStr: '13 August 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-08-19T23:00:00.000Z',
			dateStr: '20 August 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-08-26T23:00:00.000Z',
			dateStr: '27 August 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-09-02T23:00:00.000Z',
			dateStr: '3 September 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-09-09T23:00:00.000Z',
			dateStr: '10 September 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-09-16T23:00:00.000Z',
			dateStr: '17 September 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-09-23T23:00:00.000Z',
			dateStr: '24 September 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-09-30T23:00:00.000Z',
			dateStr: '1 October 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-10-07T23:00:00.000Z',
			dateStr: '8 October 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-10-14T23:00:00.000Z',
			dateStr: '15 October 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-10-21T23:00:00.000Z',
			dateStr: '22 October 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-10-29T00:00:00.000Z',
			dateStr: '29 October 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-11-05T00:00:00.000Z',
			dateStr: '5 November 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-11-12T00:00:00.000Z',
			dateStr: '12 November 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-11-19T00:00:00.000Z',
			dateStr: '19 November 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-11-26T00:00:00.000Z',
			dateStr: '26 November 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-12-03T00:00:00.000Z',
			dateStr: '3 December 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-12-10T00:00:00.000Z',
			dateStr: '10 December 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-12-17T00:00:00.000Z',
			dateStr: '17 December 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-12-23T00:00:00.000Z',
			dateStr: '23 December 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-12-31T00:00:00.000Z',
			dateStr: '31 December 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2026-01-07T00:00:00.000Z',
			dateStr: '7 January 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-01-14T00:00:00.000Z',
			dateStr: '14 January 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-01-21T00:00:00.000Z',
			dateStr: '21 January 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-01-28T00:00:00.000Z',
			dateStr: '28 January 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-02-04T00:00:00.000Z',
			dateStr: '4 February 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-02-11T00:00:00.000Z',
			dateStr: '11 February 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-02-18T00:00:00.000Z',
			dateStr: '18 February 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-02-25T00:00:00.000Z',
			dateStr: '25 February 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-03-04T00:00:00.000Z',
			dateStr: '4 March 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-03-11T00:00:00.000Z',
			dateStr: '11 March 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-03-18T00:00:00.000Z',
			dateStr: '18 March 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-03-25T00:00:00.000Z',
			dateStr: '25 March 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-03-30T23:00:00.000Z',
			dateStr: '31 March 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-04-07T23:00:00.000Z',
			dateStr: '8 April 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-04-14T23:00:00.000Z',
			dateStr: '15 April 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-04-21T23:00:00.000Z',
			dateStr: '22 April 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-04-28T23:00:00.000Z',
			dateStr: '29 April 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-05-05T23:00:00.000Z',
			dateStr: '6 May 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-05-12T23:00:00.000Z',
			dateStr: '13 May 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-05-19T23:00:00.000Z',
			dateStr: '20 May 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-05-26T23:00:00.000Z',
			dateStr: '27 May 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-06-02T23:00:00.000Z',
			dateStr: '3 June 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-06-09T23:00:00.000Z',
			dateStr: '10 June 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-06-16T23:00:00.000Z',
			dateStr: '17 June 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-06-23T23:00:00.000Z',
			dateStr: '24 June 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-06-30T23:00:00.000Z',
			dateStr: '1 July 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-07-07T23:00:00.000Z',
			dateStr: '8 July 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-07-14T23:00:00.000Z',
			dateStr: '15 July 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-07-21T23:00:00.000Z',
			dateStr: '22 July 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-07-28T23:00:00.000Z',
			dateStr: '29 July 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-08-04T23:00:00.000Z',
			dateStr: '5 August 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-08-11T23:00:00.000Z',
			dateStr: '12 August 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-08-18T23:00:00.000Z',
			dateStr: '19 August 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-08-25T23:00:00.000Z',
			dateStr: '26 August 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-09-01T23:00:00.000Z',
			dateStr: '2 September 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-09-08T23:00:00.000Z',
			dateStr: '9 September 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-09-15T23:00:00.000Z',
			dateStr: '16 September 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-09-22T23:00:00.000Z',
			dateStr: '23 September 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-09-29T23:00:00.000Z',
			dateStr: '30 September 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-10-06T23:00:00.000Z',
			dateStr: '7 October 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-10-13T23:00:00.000Z',
			dateStr: '14 October 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-10-20T23:00:00.000Z',
			dateStr: '21 October 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-10-28T00:00:00.000Z',
			dateStr: '28 October 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-11-04T00:00:00.000Z',
			dateStr: '4 November 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-11-11T00:00:00.000Z',
			dateStr: '11 November 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-11-18T00:00:00.000Z',
			dateStr: '18 November 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-11-25T00:00:00.000Z',
			dateStr: '25 November 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-12-02T00:00:00.000Z',
			dateStr: '2 December 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-12-09T00:00:00.000Z',
			dateStr: '9 December 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-12-16T00:00:00.000Z',
			dateStr: '16 December 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-12-22T00:00:00.000Z',
			dateStr: '22 December 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-12-29T00:00:00.000Z',
			dateStr: '29 December 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2027-01-06T00:00:00.000Z',
			dateStr: '6 January 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-01-13T00:00:00.000Z',
			dateStr: '13 January 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-01-20T00:00:00.000Z',
			dateStr: '20 January 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-01-27T00:00:00.000Z',
			dateStr: '27 January 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-02-03T00:00:00.000Z',
			dateStr: '3 February 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-02-10T00:00:00.000Z',
			dateStr: '10 February 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-02-17T00:00:00.000Z',
			dateStr: '17 February 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-02-24T00:00:00.000Z',
			dateStr: '24 February 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-03-03T00:00:00.000Z',
			dateStr: '3 March 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-03-10T00:00:00.000Z',
			dateStr: '10 March 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-03-17T00:00:00.000Z',
			dateStr: '17 March 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-03-23T00:00:00.000Z',
			dateStr: '23 March 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-03-30T23:00:00.000Z',
			dateStr: '31 March 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-04-06T23:00:00.000Z',
			dateStr: '7 April 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-04-13T23:00:00.000Z',
			dateStr: '14 April 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-04-20T23:00:00.000Z',
			dateStr: '21 April 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-04-27T23:00:00.000Z',
			dateStr: '28 April 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-05-04T23:00:00.000Z',
			dateStr: '5 May 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-05-11T23:00:00.000Z',
			dateStr: '12 May 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-05-18T23:00:00.000Z',
			dateStr: '19 May 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-05-25T23:00:00.000Z',
			dateStr: '26 May 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-06-01T23:00:00.000Z',
			dateStr: '2 June 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-06-08T23:00:00.000Z',
			dateStr: '9 June 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-06-15T23:00:00.000Z',
			dateStr: '16 June 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-06-22T23:00:00.000Z',
			dateStr: '23 June 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-06-29T23:00:00.000Z',
			dateStr: '30 June 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-07-06T23:00:00.000Z',
			dateStr: '7 July 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-07-13T23:00:00.000Z',
			dateStr: '14 July 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-07-20T23:00:00.000Z',
			dateStr: '21 July 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-07-27T23:00:00.000Z',
			dateStr: '28 July 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-08-03T23:00:00.000Z',
			dateStr: '4 August 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-08-10T23:00:00.000Z',
			dateStr: '11 August 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-08-17T23:00:00.000Z',
			dateStr: '18 August 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-08-24T23:00:00.000Z',
			dateStr: '25 August 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-08-31T23:00:00.000Z',
			dateStr: '1 September 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-09-07T23:00:00.000Z',
			dateStr: '8 September 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-09-14T23:00:00.000Z',
			dateStr: '15 September 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-09-21T23:00:00.000Z',
			dateStr: '22 September 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-09-28T23:00:00.000Z',
			dateStr: '29 September 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-10-05T23:00:00.000Z',
			dateStr: '6 October 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-10-12T23:00:00.000Z',
			dateStr: '13 October 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-10-19T23:00:00.000Z',
			dateStr: '20 October 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-10-26T23:00:00.000Z',
			dateStr: '27 October 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-11-03T00:00:00.000Z',
			dateStr: '3 November 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-11-10T00:00:00.000Z',
			dateStr: '10 November 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-11-17T00:00:00.000Z',
			dateStr: '17 November 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-11-24T00:00:00.000Z',
			dateStr: '24 November 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-12-01T00:00:00.000Z',
			dateStr: '1 December 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-12-08T00:00:00.000Z',
			dateStr: '8 December 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-12-15T00:00:00.000Z',
			dateStr: '15 December 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-12-22T00:00:00.000Z',
			dateStr: '22 December 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-12-29T00:00:00.000Z',
			dateStr: '29 December 2027',
		},
		{
			color: ['Black Bin'],
			date: '2028-01-05T00:00:00.000Z',
			dateStr: '5 January 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-01-12T00:00:00.000Z',
			dateStr: '12 January 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-01-19T00:00:00.000Z',
			dateStr: '19 January 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-01-26T00:00:00.000Z',
			dateStr: '26 January 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-02-02T00:00:00.000Z',
			dateStr: '2 February 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-02-09T00:00:00.000Z',
			dateStr: '9 February 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-02-16T00:00:00.000Z',
			dateStr: '16 February 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-02-23T00:00:00.000Z',
			dateStr: '23 February 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-03-01T00:00:00.000Z',
			dateStr: '1 March 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-03-08T00:00:00.000Z',
			dateStr: '8 March 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-03-15T00:00:00.000Z',
			dateStr: '15 March 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-03-22T00:00:00.000Z',
			dateStr: '22 March 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-03-28T23:00:00.000Z',
			dateStr: '29 March 2028',
		},
	],
	WEDCC: [
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-07-01T23:00:00.000Z',
			dateStr: '2 July 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-07-08T23:00:00.000Z',
			dateStr: '9 July 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-07-15T23:00:00.000Z',
			dateStr: '16 July 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-07-22T23:00:00.000Z',
			dateStr: '23 July 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-07-29T23:00:00.000Z',
			dateStr: '30 July 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-08-05T23:00:00.000Z',
			dateStr: '6 August 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-08-12T23:00:00.000Z',
			dateStr: '13 August 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-08-19T23:00:00.000Z',
			dateStr: '20 August 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-08-26T23:00:00.000Z',
			dateStr: '27 August 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-09-02T23:00:00.000Z',
			dateStr: '3 September 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-09-09T23:00:00.000Z',
			dateStr: '10 September 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-09-16T23:00:00.000Z',
			dateStr: '17 September 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-09-23T23:00:00.000Z',
			dateStr: '24 September 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-09-30T23:00:00.000Z',
			dateStr: '1 October 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-10-07T23:00:00.000Z',
			dateStr: '8 October 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-10-14T23:00:00.000Z',
			dateStr: '15 October 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-10-21T23:00:00.000Z',
			dateStr: '22 October 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-10-29T00:00:00.000Z',
			dateStr: '29 October 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-11-05T00:00:00.000Z',
			dateStr: '5 November 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-11-12T00:00:00.000Z',
			dateStr: '12 November 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-11-19T00:00:00.000Z',
			dateStr: '19 November 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-11-26T00:00:00.000Z',
			dateStr: '26 November 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-12-03T00:00:00.000Z',
			dateStr: '3 December 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-12-10T00:00:00.000Z',
			dateStr: '10 December 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-12-17T00:00:00.000Z',
			dateStr: '17 December 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-12-23T00:00:00.000Z',
			dateStr: '23 December 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-12-31T00:00:00.000Z',
			dateStr: '31 December 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2026-01-07T00:00:00.000Z',
			dateStr: '7 January 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-01-14T00:00:00.000Z',
			dateStr: '14 January 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-01-21T00:00:00.000Z',
			dateStr: '21 January 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-01-28T00:00:00.000Z',
			dateStr: '28 January 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-02-04T00:00:00.000Z',
			dateStr: '4 February 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-02-11T00:00:00.000Z',
			dateStr: '11 February 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-02-18T00:00:00.000Z',
			dateStr: '18 February 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-02-25T00:00:00.000Z',
			dateStr: '25 February 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-03-04T00:00:00.000Z',
			dateStr: '4 March 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-03-11T00:00:00.000Z',
			dateStr: '11 March 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-03-18T00:00:00.000Z',
			dateStr: '18 March 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-03-25T00:00:00.000Z',
			dateStr: '25 March 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-03-30T23:00:00.000Z',
			dateStr: '31 March 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-04-07T23:00:00.000Z',
			dateStr: '8 April 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-04-14T23:00:00.000Z',
			dateStr: '15 April 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-04-21T23:00:00.000Z',
			dateStr: '22 April 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-04-28T23:00:00.000Z',
			dateStr: '29 April 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-05-05T23:00:00.000Z',
			dateStr: '6 May 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-05-12T23:00:00.000Z',
			dateStr: '13 May 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-05-19T23:00:00.000Z',
			dateStr: '20 May 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-05-26T23:00:00.000Z',
			dateStr: '27 May 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-06-02T23:00:00.000Z',
			dateStr: '3 June 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-06-09T23:00:00.000Z',
			dateStr: '10 June 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-06-16T23:00:00.000Z',
			dateStr: '17 June 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-06-23T23:00:00.000Z',
			dateStr: '24 June 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-06-30T23:00:00.000Z',
			dateStr: '1 July 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-07-07T23:00:00.000Z',
			dateStr: '8 July 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-07-14T23:00:00.000Z',
			dateStr: '15 July 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-07-21T23:00:00.000Z',
			dateStr: '22 July 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-07-28T23:00:00.000Z',
			dateStr: '29 July 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-08-04T23:00:00.000Z',
			dateStr: '5 August 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-08-11T23:00:00.000Z',
			dateStr: '12 August 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-08-18T23:00:00.000Z',
			dateStr: '19 August 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-08-25T23:00:00.000Z',
			dateStr: '26 August 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-09-01T23:00:00.000Z',
			dateStr: '2 September 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-09-08T23:00:00.000Z',
			dateStr: '9 September 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-09-15T23:00:00.000Z',
			dateStr: '16 September 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-09-22T23:00:00.000Z',
			dateStr: '23 September 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-09-29T23:00:00.000Z',
			dateStr: '30 September 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-10-06T23:00:00.000Z',
			dateStr: '7 October 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-10-13T23:00:00.000Z',
			dateStr: '14 October 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-10-20T23:00:00.000Z',
			dateStr: '21 October 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-10-28T00:00:00.000Z',
			dateStr: '28 October 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-11-04T00:00:00.000Z',
			dateStr: '4 November 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-11-11T00:00:00.000Z',
			dateStr: '11 November 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-11-18T00:00:00.000Z',
			dateStr: '18 November 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-11-25T00:00:00.000Z',
			dateStr: '25 November 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-12-02T00:00:00.000Z',
			dateStr: '2 December 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-12-09T00:00:00.000Z',
			dateStr: '9 December 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-12-16T00:00:00.000Z',
			dateStr: '16 December 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-12-22T00:00:00.000Z',
			dateStr: '22 December 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-12-29T00:00:00.000Z',
			dateStr: '29 December 2026',
		},
		{
			color: ['Black Bin'],
			date: '2027-01-06T00:00:00.000Z',
			dateStr: '6 January 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-01-13T00:00:00.000Z',
			dateStr: '13 January 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-01-20T00:00:00.000Z',
			dateStr: '20 January 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-01-27T00:00:00.000Z',
			dateStr: '27 January 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-02-03T00:00:00.000Z',
			dateStr: '3 February 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-02-10T00:00:00.000Z',
			dateStr: '10 February 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-02-17T00:00:00.000Z',
			dateStr: '17 February 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-02-24T00:00:00.000Z',
			dateStr: '24 February 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-03-03T00:00:00.000Z',
			dateStr: '3 March 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-03-10T00:00:00.000Z',
			dateStr: '10 March 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-03-17T00:00:00.000Z',
			dateStr: '17 March 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-03-23T00:00:00.000Z',
			dateStr: '23 March 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-03-30T23:00:00.000Z',
			dateStr: '31 March 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-04-06T23:00:00.000Z',
			dateStr: '7 April 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-04-13T23:00:00.000Z',
			dateStr: '14 April 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-04-20T23:00:00.000Z',
			dateStr: '21 April 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-04-27T23:00:00.000Z',
			dateStr: '28 April 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-05-04T23:00:00.000Z',
			dateStr: '5 May 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-05-11T23:00:00.000Z',
			dateStr: '12 May 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-05-18T23:00:00.000Z',
			dateStr: '19 May 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-05-25T23:00:00.000Z',
			dateStr: '26 May 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-06-01T23:00:00.000Z',
			dateStr: '2 June 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-06-08T23:00:00.000Z',
			dateStr: '9 June 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-06-15T23:00:00.000Z',
			dateStr: '16 June 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-06-22T23:00:00.000Z',
			dateStr: '23 June 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-06-29T23:00:00.000Z',
			dateStr: '30 June 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-07-06T23:00:00.000Z',
			dateStr: '7 July 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-07-13T23:00:00.000Z',
			dateStr: '14 July 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-07-20T23:00:00.000Z',
			dateStr: '21 July 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-07-27T23:00:00.000Z',
			dateStr: '28 July 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-08-03T23:00:00.000Z',
			dateStr: '4 August 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-08-10T23:00:00.000Z',
			dateStr: '11 August 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-08-17T23:00:00.000Z',
			dateStr: '18 August 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-08-24T23:00:00.000Z',
			dateStr: '25 August 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-08-31T23:00:00.000Z',
			dateStr: '1 September 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-09-07T23:00:00.000Z',
			dateStr: '8 September 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-09-14T23:00:00.000Z',
			dateStr: '15 September 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-09-21T23:00:00.000Z',
			dateStr: '22 September 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-09-28T23:00:00.000Z',
			dateStr: '29 September 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-10-05T23:00:00.000Z',
			dateStr: '6 October 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-10-12T23:00:00.000Z',
			dateStr: '13 October 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-10-19T23:00:00.000Z',
			dateStr: '20 October 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-10-26T23:00:00.000Z',
			dateStr: '27 October 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-11-03T00:00:00.000Z',
			dateStr: '3 November 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-11-10T00:00:00.000Z',
			dateStr: '10 November 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-11-17T00:00:00.000Z',
			dateStr: '17 November 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-11-24T00:00:00.000Z',
			dateStr: '24 November 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-12-01T00:00:00.000Z',
			dateStr: '1 December 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-12-08T00:00:00.000Z',
			dateStr: '8 December 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-12-15T00:00:00.000Z',
			dateStr: '15 December 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-12-22T00:00:00.000Z',
			dateStr: '22 December 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-12-29T00:00:00.000Z',
			dateStr: '29 December 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2028-01-05T00:00:00.000Z',
			dateStr: '5 January 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-01-12T00:00:00.000Z',
			dateStr: '12 January 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-01-19T00:00:00.000Z',
			dateStr: '19 January 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-01-26T00:00:00.000Z',
			dateStr: '26 January 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-02-02T00:00:00.000Z',
			dateStr: '2 February 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-02-09T00:00:00.000Z',
			dateStr: '9 February 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-02-16T00:00:00.000Z',
			dateStr: '16 February 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-02-23T00:00:00.000Z',
			dateStr: '23 February 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-03-01T00:00:00.000Z',
			dateStr: '1 March 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-03-08T00:00:00.000Z',
			dateStr: '8 March 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-03-15T00:00:00.000Z',
			dateStr: '15 March 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-03-22T00:00:00.000Z',
			dateStr: '22 March 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-03-28T23:00:00.000Z',
			dateStr: '29 March 2028',
		},
	],
	WEDAA: [
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-07-01T23:00:00.000Z',
			dateStr: '2 July 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-07-08T23:00:00.000Z',
			dateStr: '9 July 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-07-15T23:00:00.000Z',
			dateStr: '16 July 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-07-22T23:00:00.000Z',
			dateStr: '23 July 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-07-29T23:00:00.000Z',
			dateStr: '30 July 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-08-05T23:00:00.000Z',
			dateStr: '6 August 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-08-12T23:00:00.000Z',
			dateStr: '13 August 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-08-19T23:00:00.000Z',
			dateStr: '20 August 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-08-26T23:00:00.000Z',
			dateStr: '27 August 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-09-02T23:00:00.000Z',
			dateStr: '3 September 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-09-09T23:00:00.000Z',
			dateStr: '10 September 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-09-16T23:00:00.000Z',
			dateStr: '17 September 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-09-23T23:00:00.000Z',
			dateStr: '24 September 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-09-30T23:00:00.000Z',
			dateStr: '1 October 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-10-07T23:00:00.000Z',
			dateStr: '8 October 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-10-14T23:00:00.000Z',
			dateStr: '15 October 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-10-21T23:00:00.000Z',
			dateStr: '22 October 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-10-29T00:00:00.000Z',
			dateStr: '29 October 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-11-05T00:00:00.000Z',
			dateStr: '5 November 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-11-12T00:00:00.000Z',
			dateStr: '12 November 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-11-19T00:00:00.000Z',
			dateStr: '19 November 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-11-26T00:00:00.000Z',
			dateStr: '26 November 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-12-03T00:00:00.000Z',
			dateStr: '3 December 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-12-10T00:00:00.000Z',
			dateStr: '10 December 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-12-17T00:00:00.000Z',
			dateStr: '17 December 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-12-23T00:00:00.000Z',
			dateStr: '23 December 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-12-31T00:00:00.000Z',
			dateStr: '31 December 2025',
		},
		{
			color: ['Black Bin'],
			date: '2026-01-07T00:00:00.000Z',
			dateStr: '7 January 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-01-14T00:00:00.000Z',
			dateStr: '14 January 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-01-21T00:00:00.000Z',
			dateStr: '21 January 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-01-28T00:00:00.000Z',
			dateStr: '28 January 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-02-04T00:00:00.000Z',
			dateStr: '4 February 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-02-11T00:00:00.000Z',
			dateStr: '11 February 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-02-18T00:00:00.000Z',
			dateStr: '18 February 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-02-25T00:00:00.000Z',
			dateStr: '25 February 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-03-04T00:00:00.000Z',
			dateStr: '4 March 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-03-11T00:00:00.000Z',
			dateStr: '11 March 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-03-18T00:00:00.000Z',
			dateStr: '18 March 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-03-25T00:00:00.000Z',
			dateStr: '25 March 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-03-30T23:00:00.000Z',
			dateStr: '31 March 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-04-07T23:00:00.000Z',
			dateStr: '8 April 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-04-14T23:00:00.000Z',
			dateStr: '15 April 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-04-21T23:00:00.000Z',
			dateStr: '22 April 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-04-28T23:00:00.000Z',
			dateStr: '29 April 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-05-05T23:00:00.000Z',
			dateStr: '6 May 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-05-12T23:00:00.000Z',
			dateStr: '13 May 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-05-19T23:00:00.000Z',
			dateStr: '20 May 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-05-26T23:00:00.000Z',
			dateStr: '27 May 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-06-02T23:00:00.000Z',
			dateStr: '3 June 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-06-09T23:00:00.000Z',
			dateStr: '10 June 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-06-16T23:00:00.000Z',
			dateStr: '17 June 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-06-23T23:00:00.000Z',
			dateStr: '24 June 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-06-30T23:00:00.000Z',
			dateStr: '1 July 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-07-07T23:00:00.000Z',
			dateStr: '8 July 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-07-14T23:00:00.000Z',
			dateStr: '15 July 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-07-21T23:00:00.000Z',
			dateStr: '22 July 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-07-28T23:00:00.000Z',
			dateStr: '29 July 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-08-04T23:00:00.000Z',
			dateStr: '5 August 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-08-11T23:00:00.000Z',
			dateStr: '12 August 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-08-18T23:00:00.000Z',
			dateStr: '19 August 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-08-25T23:00:00.000Z',
			dateStr: '26 August 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-09-01T23:00:00.000Z',
			dateStr: '2 September 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-09-08T23:00:00.000Z',
			dateStr: '9 September 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-09-15T23:00:00.000Z',
			dateStr: '16 September 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-09-22T23:00:00.000Z',
			dateStr: '23 September 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-09-29T23:00:00.000Z',
			dateStr: '30 September 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-10-06T23:00:00.000Z',
			dateStr: '7 October 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-10-13T23:00:00.000Z',
			dateStr: '14 October 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-10-20T23:00:00.000Z',
			dateStr: '21 October 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-10-28T00:00:00.000Z',
			dateStr: '28 October 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-11-04T00:00:00.000Z',
			dateStr: '4 November 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-11-11T00:00:00.000Z',
			dateStr: '11 November 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-11-18T00:00:00.000Z',
			dateStr: '18 November 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-11-25T00:00:00.000Z',
			dateStr: '25 November 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-12-02T00:00:00.000Z',
			dateStr: '2 December 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-12-09T00:00:00.000Z',
			dateStr: '9 December 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-12-16T00:00:00.000Z',
			dateStr: '16 December 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-12-22T00:00:00.000Z',
			dateStr: '22 December 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-12-29T00:00:00.000Z',
			dateStr: '29 December 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2027-01-06T00:00:00.000Z',
			dateStr: '6 January 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-01-13T00:00:00.000Z',
			dateStr: '13 January 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-01-20T00:00:00.000Z',
			dateStr: '20 January 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-01-27T00:00:00.000Z',
			dateStr: '27 January 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-02-03T00:00:00.000Z',
			dateStr: '3 February 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-02-10T00:00:00.000Z',
			dateStr: '10 February 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-02-17T00:00:00.000Z',
			dateStr: '17 February 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-02-24T00:00:00.000Z',
			dateStr: '24 February 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-03-03T00:00:00.000Z',
			dateStr: '3 March 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-03-10T00:00:00.000Z',
			dateStr: '10 March 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-03-17T00:00:00.000Z',
			dateStr: '17 March 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-03-23T00:00:00.000Z',
			dateStr: '23 March 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-03-30T23:00:00.000Z',
			dateStr: '31 March 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-04-06T23:00:00.000Z',
			dateStr: '7 April 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-04-13T23:00:00.000Z',
			dateStr: '14 April 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-04-20T23:00:00.000Z',
			dateStr: '21 April 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-04-27T23:00:00.000Z',
			dateStr: '28 April 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-05-04T23:00:00.000Z',
			dateStr: '5 May 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-05-11T23:00:00.000Z',
			dateStr: '12 May 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-05-18T23:00:00.000Z',
			dateStr: '19 May 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-05-25T23:00:00.000Z',
			dateStr: '26 May 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-06-01T23:00:00.000Z',
			dateStr: '2 June 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-06-08T23:00:00.000Z',
			dateStr: '9 June 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-06-15T23:00:00.000Z',
			dateStr: '16 June 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-06-22T23:00:00.000Z',
			dateStr: '23 June 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-06-29T23:00:00.000Z',
			dateStr: '30 June 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-07-06T23:00:00.000Z',
			dateStr: '7 July 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-07-13T23:00:00.000Z',
			dateStr: '14 July 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-07-20T23:00:00.000Z',
			dateStr: '21 July 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-07-27T23:00:00.000Z',
			dateStr: '28 July 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-08-03T23:00:00.000Z',
			dateStr: '4 August 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-08-10T23:00:00.000Z',
			dateStr: '11 August 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-08-17T23:00:00.000Z',
			dateStr: '18 August 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-08-24T23:00:00.000Z',
			dateStr: '25 August 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-08-31T23:00:00.000Z',
			dateStr: '1 September 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-09-07T23:00:00.000Z',
			dateStr: '8 September 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-09-14T23:00:00.000Z',
			dateStr: '15 September 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-09-21T23:00:00.000Z',
			dateStr: '22 September 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-09-28T23:00:00.000Z',
			dateStr: '29 September 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-10-05T23:00:00.000Z',
			dateStr: '6 October 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-10-12T23:00:00.000Z',
			dateStr: '13 October 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-10-19T23:00:00.000Z',
			dateStr: '20 October 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-10-26T23:00:00.000Z',
			dateStr: '27 October 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-11-03T00:00:00.000Z',
			dateStr: '3 November 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-11-10T00:00:00.000Z',
			dateStr: '10 November 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-11-17T00:00:00.000Z',
			dateStr: '17 November 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-11-24T00:00:00.000Z',
			dateStr: '24 November 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-12-01T00:00:00.000Z',
			dateStr: '1 December 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-12-08T00:00:00.000Z',
			dateStr: '8 December 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-12-15T00:00:00.000Z',
			dateStr: '15 December 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-12-22T00:00:00.000Z',
			dateStr: '22 December 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-12-29T00:00:00.000Z',
			dateStr: '29 December 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2028-01-05T00:00:00.000Z',
			dateStr: '5 January 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-01-12T00:00:00.000Z',
			dateStr: '12 January 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-01-19T00:00:00.000Z',
			dateStr: '19 January 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-01-26T00:00:00.000Z',
			dateStr: '26 January 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-02-02T00:00:00.000Z',
			dateStr: '2 February 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-02-09T00:00:00.000Z',
			dateStr: '9 February 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-02-16T00:00:00.000Z',
			dateStr: '16 February 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-02-23T00:00:00.000Z',
			dateStr: '23 February 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-03-01T00:00:00.000Z',
			dateStr: '1 March 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-03-08T00:00:00.000Z',
			dateStr: '8 March 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-03-15T00:00:00.000Z',
			dateStr: '15 March 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-03-22T00:00:00.000Z',
			dateStr: '22 March 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-03-28T23:00:00.000Z',
			dateStr: '29 March 2028',
		},
	],
	THUDD: [
		{
			color: ['Brown Bin'],
			date: '2025-07-02T23:00:00.000Z',
			dateStr: '3 July 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-07-09T23:00:00.000Z',
			dateStr: '10 July 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-07-16T23:00:00.000Z',
			dateStr: '17 July 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-07-23T23:00:00.000Z',
			dateStr: '24 July 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-07-30T23:00:00.000Z',
			dateStr: '31 July 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-08-06T23:00:00.000Z',
			dateStr: '7 August 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-08-13T23:00:00.000Z',
			dateStr: '14 August 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-08-20T23:00:00.000Z',
			dateStr: '21 August 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-08-27T23:00:00.000Z',
			dateStr: '28 August 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-09-03T23:00:00.000Z',
			dateStr: '4 September 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-09-10T23:00:00.000Z',
			dateStr: '11 September 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-09-17T23:00:00.000Z',
			dateStr: '18 September 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-09-24T23:00:00.000Z',
			dateStr: '25 September 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-10-01T23:00:00.000Z',
			dateStr: '2 October 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-10-08T23:00:00.000Z',
			dateStr: '9 October 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-10-15T23:00:00.000Z',
			dateStr: '16 October 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-10-22T23:00:00.000Z',
			dateStr: '23 October 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-10-30T00:00:00.000Z',
			dateStr: '30 October 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-11-06T00:00:00.000Z',
			dateStr: '6 November 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-11-13T00:00:00.000Z',
			dateStr: '13 November 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-11-20T00:00:00.000Z',
			dateStr: '20 November 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-11-27T00:00:00.000Z',
			dateStr: '27 November 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-12-04T00:00:00.000Z',
			dateStr: '4 December 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-12-11T00:00:00.000Z',
			dateStr: '11 December 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-12-18T00:00:00.000Z',
			dateStr: '18 December 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-12-24T00:00:00.000Z',
			dateStr: '24 December 2025',
		},
		{
			color: ['Black Bin'],
			date: '2026-01-02T00:00:00.000Z',
			dateStr: '2 January 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-01-08T00:00:00.000Z',
			dateStr: '8 January 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-01-15T00:00:00.000Z',
			dateStr: '15 January 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-01-22T00:00:00.000Z',
			dateStr: '22 January 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-01-29T00:00:00.000Z',
			dateStr: '29 January 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-02-05T00:00:00.000Z',
			dateStr: '5 February 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-02-12T00:00:00.000Z',
			dateStr: '12 February 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-02-19T00:00:00.000Z',
			dateStr: '19 February 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-02-26T00:00:00.000Z',
			dateStr: '26 February 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-03-05T00:00:00.000Z',
			dateStr: '5 March 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-03-12T00:00:00.000Z',
			dateStr: '12 March 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-03-19T00:00:00.000Z',
			dateStr: '19 March 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-03-26T00:00:00.000Z',
			dateStr: '26 March 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-03-31T23:00:00.000Z',
			dateStr: '1 April 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-04-08T23:00:00.000Z',
			dateStr: '9 April 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-04-15T23:00:00.000Z',
			dateStr: '16 April 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-04-22T23:00:00.000Z',
			dateStr: '23 April 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-04-29T23:00:00.000Z',
			dateStr: '30 April 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-05-06T23:00:00.000Z',
			dateStr: '7 May 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-05-13T23:00:00.000Z',
			dateStr: '14 May 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-05-20T23:00:00.000Z',
			dateStr: '21 May 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-05-27T23:00:00.000Z',
			dateStr: '28 May 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-06-03T23:00:00.000Z',
			dateStr: '4 June 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-06-10T23:00:00.000Z',
			dateStr: '11 June 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-06-17T23:00:00.000Z',
			dateStr: '18 June 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-06-24T23:00:00.000Z',
			dateStr: '25 June 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-07-01T23:00:00.000Z',
			dateStr: '2 July 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-07-08T23:00:00.000Z',
			dateStr: '9 July 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-07-15T23:00:00.000Z',
			dateStr: '16 July 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-07-22T23:00:00.000Z',
			dateStr: '23 July 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-07-29T23:00:00.000Z',
			dateStr: '30 July 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-08-05T23:00:00.000Z',
			dateStr: '6 August 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-08-12T23:00:00.000Z',
			dateStr: '13 August 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-08-19T23:00:00.000Z',
			dateStr: '20 August 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-08-26T23:00:00.000Z',
			dateStr: '27 August 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-09-02T23:00:00.000Z',
			dateStr: '3 September 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-09-09T23:00:00.000Z',
			dateStr: '10 September 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-09-16T23:00:00.000Z',
			dateStr: '17 September 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-09-23T23:00:00.000Z',
			dateStr: '24 September 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-09-30T23:00:00.000Z',
			dateStr: '1 October 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-10-07T23:00:00.000Z',
			dateStr: '8 October 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-10-14T23:00:00.000Z',
			dateStr: '15 October 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-10-21T23:00:00.000Z',
			dateStr: '22 October 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-10-29T00:00:00.000Z',
			dateStr: '29 October 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-11-05T00:00:00.000Z',
			dateStr: '5 November 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-11-12T00:00:00.000Z',
			dateStr: '12 November 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-11-19T00:00:00.000Z',
			dateStr: '19 November 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-11-26T00:00:00.000Z',
			dateStr: '26 November 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-12-03T00:00:00.000Z',
			dateStr: '3 December 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-12-10T00:00:00.000Z',
			dateStr: '10 December 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-12-17T00:00:00.000Z',
			dateStr: '17 December 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-12-23T00:00:00.000Z',
			dateStr: '23 December 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-12-30T00:00:00.000Z',
			dateStr: '30 December 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2027-01-07T00:00:00.000Z',
			dateStr: '7 January 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-01-14T00:00:00.000Z',
			dateStr: '14 January 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-01-21T00:00:00.000Z',
			dateStr: '21 January 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-01-28T00:00:00.000Z',
			dateStr: '28 January 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-02-04T00:00:00.000Z',
			dateStr: '4 February 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-02-11T00:00:00.000Z',
			dateStr: '11 February 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-02-18T00:00:00.000Z',
			dateStr: '18 February 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-02-25T00:00:00.000Z',
			dateStr: '25 February 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-03-04T00:00:00.000Z',
			dateStr: '4 March 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-03-11T00:00:00.000Z',
			dateStr: '11 March 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-03-18T00:00:00.000Z',
			dateStr: '18 March 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-03-24T00:00:00.000Z',
			dateStr: '24 March 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-03-31T23:00:00.000Z',
			dateStr: '1 April 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-04-07T23:00:00.000Z',
			dateStr: '8 April 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-04-14T23:00:00.000Z',
			dateStr: '15 April 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-04-21T23:00:00.000Z',
			dateStr: '22 April 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-04-28T23:00:00.000Z',
			dateStr: '29 April 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-05-05T23:00:00.000Z',
			dateStr: '6 May 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-05-12T23:00:00.000Z',
			dateStr: '13 May 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-05-19T23:00:00.000Z',
			dateStr: '20 May 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-05-26T23:00:00.000Z',
			dateStr: '27 May 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-06-02T23:00:00.000Z',
			dateStr: '3 June 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-06-09T23:00:00.000Z',
			dateStr: '10 June 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-06-16T23:00:00.000Z',
			dateStr: '17 June 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-06-23T23:00:00.000Z',
			dateStr: '24 June 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-06-30T23:00:00.000Z',
			dateStr: '1 July 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-07-07T23:00:00.000Z',
			dateStr: '8 July 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-07-14T23:00:00.000Z',
			dateStr: '15 July 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-07-21T23:00:00.000Z',
			dateStr: '22 July 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-07-28T23:00:00.000Z',
			dateStr: '29 July 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-08-04T23:00:00.000Z',
			dateStr: '5 August 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-08-11T23:00:00.000Z',
			dateStr: '12 August 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-08-18T23:00:00.000Z',
			dateStr: '19 August 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-08-25T23:00:00.000Z',
			dateStr: '26 August 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-09-01T23:00:00.000Z',
			dateStr: '2 September 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-09-08T23:00:00.000Z',
			dateStr: '9 September 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-09-15T23:00:00.000Z',
			dateStr: '16 September 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-09-22T23:00:00.000Z',
			dateStr: '23 September 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-09-29T23:00:00.000Z',
			dateStr: '30 September 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-10-06T23:00:00.000Z',
			dateStr: '7 October 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-10-13T23:00:00.000Z',
			dateStr: '14 October 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-10-20T23:00:00.000Z',
			dateStr: '21 October 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-10-27T23:00:00.000Z',
			dateStr: '28 October 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-11-04T00:00:00.000Z',
			dateStr: '4 November 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-11-11T00:00:00.000Z',
			dateStr: '11 November 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-11-18T00:00:00.000Z',
			dateStr: '18 November 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-11-25T00:00:00.000Z',
			dateStr: '25 November 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-12-02T00:00:00.000Z',
			dateStr: '2 December 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-12-09T00:00:00.000Z',
			dateStr: '9 December 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-12-16T00:00:00.000Z',
			dateStr: '16 December 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-12-23T00:00:00.000Z',
			dateStr: '23 December 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-12-30T00:00:00.000Z',
			dateStr: '30 December 2027',
		},
		{
			color: ['Black Bin'],
			date: '2028-01-06T00:00:00.000Z',
			dateStr: '6 January 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-01-13T00:00:00.000Z',
			dateStr: '13 January 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-01-20T00:00:00.000Z',
			dateStr: '20 January 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-01-27T00:00:00.000Z',
			dateStr: '27 January 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-02-03T00:00:00.000Z',
			dateStr: '3 February 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-02-10T00:00:00.000Z',
			dateStr: '10 February 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-02-17T00:00:00.000Z',
			dateStr: '17 February 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-02-24T00:00:00.000Z',
			dateStr: '24 February 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-03-02T00:00:00.000Z',
			dateStr: '2 March 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-03-09T00:00:00.000Z',
			dateStr: '9 March 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-03-16T00:00:00.000Z',
			dateStr: '16 March 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-03-23T00:00:00.000Z',
			dateStr: '23 March 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-03-29T23:00:00.000Z',
			dateStr: '30 March 2028',
		},
	],
	THUCC: [
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-07-02T23:00:00.000Z',
			dateStr: '3 July 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-07-09T23:00:00.000Z',
			dateStr: '10 July 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-07-16T23:00:00.000Z',
			dateStr: '17 July 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-07-23T23:00:00.000Z',
			dateStr: '24 July 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-07-30T23:00:00.000Z',
			dateStr: '31 July 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-08-06T23:00:00.000Z',
			dateStr: '7 August 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-08-13T23:00:00.000Z',
			dateStr: '14 August 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-08-20T23:00:00.000Z',
			dateStr: '21 August 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-08-27T23:00:00.000Z',
			dateStr: '28 August 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-09-03T23:00:00.000Z',
			dateStr: '4 September 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-09-10T23:00:00.000Z',
			dateStr: '11 September 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-09-17T23:00:00.000Z',
			dateStr: '18 September 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-09-24T23:00:00.000Z',
			dateStr: '25 September 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-10-01T23:00:00.000Z',
			dateStr: '2 October 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-10-08T23:00:00.000Z',
			dateStr: '9 October 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-10-15T23:00:00.000Z',
			dateStr: '16 October 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-10-22T23:00:00.000Z',
			dateStr: '23 October 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-10-30T00:00:00.000Z',
			dateStr: '30 October 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-11-06T00:00:00.000Z',
			dateStr: '6 November 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-11-13T00:00:00.000Z',
			dateStr: '13 November 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-11-20T00:00:00.000Z',
			dateStr: '20 November 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-11-27T00:00:00.000Z',
			dateStr: '27 November 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-12-04T00:00:00.000Z',
			dateStr: '4 December 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-12-11T00:00:00.000Z',
			dateStr: '11 December 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-12-18T00:00:00.000Z',
			dateStr: '18 December 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-12-24T00:00:00.000Z',
			dateStr: '24 December 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2026-01-02T00:00:00.000Z',
			dateStr: '2 January 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-01-08T00:00:00.000Z',
			dateStr: '8 January 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-01-15T00:00:00.000Z',
			dateStr: '15 January 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-01-22T00:00:00.000Z',
			dateStr: '22 January 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-01-29T00:00:00.000Z',
			dateStr: '29 January 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-02-05T00:00:00.000Z',
			dateStr: '5 February 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-02-12T00:00:00.000Z',
			dateStr: '12 February 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-02-19T00:00:00.000Z',
			dateStr: '19 February 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-02-26T00:00:00.000Z',
			dateStr: '26 February 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-03-05T00:00:00.000Z',
			dateStr: '5 March 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-03-12T00:00:00.000Z',
			dateStr: '12 March 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-03-19T00:00:00.000Z',
			dateStr: '19 March 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-03-26T00:00:00.000Z',
			dateStr: '26 March 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-03-31T23:00:00.000Z',
			dateStr: '1 April 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-04-08T23:00:00.000Z',
			dateStr: '9 April 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-04-15T23:00:00.000Z',
			dateStr: '16 April 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-04-22T23:00:00.000Z',
			dateStr: '23 April 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-04-29T23:00:00.000Z',
			dateStr: '30 April 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-05-06T23:00:00.000Z',
			dateStr: '7 May 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-05-13T23:00:00.000Z',
			dateStr: '14 May 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-05-20T23:00:00.000Z',
			dateStr: '21 May 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-05-27T23:00:00.000Z',
			dateStr: '28 May 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-06-03T23:00:00.000Z',
			dateStr: '4 June 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-06-10T23:00:00.000Z',
			dateStr: '11 June 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-06-17T23:00:00.000Z',
			dateStr: '18 June 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-06-24T23:00:00.000Z',
			dateStr: '25 June 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-07-01T23:00:00.000Z',
			dateStr: '2 July 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-07-08T23:00:00.000Z',
			dateStr: '9 July 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-07-15T23:00:00.000Z',
			dateStr: '16 July 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-07-22T23:00:00.000Z',
			dateStr: '23 July 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-07-29T23:00:00.000Z',
			dateStr: '30 July 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-08-05T23:00:00.000Z',
			dateStr: '6 August 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-08-12T23:00:00.000Z',
			dateStr: '13 August 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-08-19T23:00:00.000Z',
			dateStr: '20 August 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-08-26T23:00:00.000Z',
			dateStr: '27 August 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-09-02T23:00:00.000Z',
			dateStr: '3 September 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-09-09T23:00:00.000Z',
			dateStr: '10 September 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-09-16T23:00:00.000Z',
			dateStr: '17 September 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-09-23T23:00:00.000Z',
			dateStr: '24 September 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-09-30T23:00:00.000Z',
			dateStr: '1 October 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-10-07T23:00:00.000Z',
			dateStr: '8 October 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-10-14T23:00:00.000Z',
			dateStr: '15 October 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-10-21T23:00:00.000Z',
			dateStr: '22 October 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-10-29T00:00:00.000Z',
			dateStr: '29 October 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-11-05T00:00:00.000Z',
			dateStr: '5 November 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-11-12T00:00:00.000Z',
			dateStr: '12 November 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-11-19T00:00:00.000Z',
			dateStr: '19 November 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-11-26T00:00:00.000Z',
			dateStr: '26 November 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-12-03T00:00:00.000Z',
			dateStr: '3 December 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-12-10T00:00:00.000Z',
			dateStr: '10 December 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-12-17T00:00:00.000Z',
			dateStr: '17 December 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-12-23T00:00:00.000Z',
			dateStr: '23 December 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-12-30T00:00:00.000Z',
			dateStr: '30 December 2026',
		},
		{
			color: ['Black Bin'],
			date: '2027-01-07T00:00:00.000Z',
			dateStr: '7 January 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-01-14T00:00:00.000Z',
			dateStr: '14 January 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-01-21T00:00:00.000Z',
			dateStr: '21 January 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-01-28T00:00:00.000Z',
			dateStr: '28 January 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-02-04T00:00:00.000Z',
			dateStr: '4 February 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-02-11T00:00:00.000Z',
			dateStr: '11 February 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-02-18T00:00:00.000Z',
			dateStr: '18 February 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-02-25T00:00:00.000Z',
			dateStr: '25 February 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-03-04T00:00:00.000Z',
			dateStr: '4 March 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-03-11T00:00:00.000Z',
			dateStr: '11 March 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-03-18T00:00:00.000Z',
			dateStr: '18 March 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-03-24T00:00:00.000Z',
			dateStr: '24 March 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-03-31T23:00:00.000Z',
			dateStr: '1 April 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-04-07T23:00:00.000Z',
			dateStr: '8 April 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-04-14T23:00:00.000Z',
			dateStr: '15 April 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-04-21T23:00:00.000Z',
			dateStr: '22 April 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-04-28T23:00:00.000Z',
			dateStr: '29 April 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-05-05T23:00:00.000Z',
			dateStr: '6 May 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-05-12T23:00:00.000Z',
			dateStr: '13 May 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-05-19T23:00:00.000Z',
			dateStr: '20 May 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-05-26T23:00:00.000Z',
			dateStr: '27 May 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-06-02T23:00:00.000Z',
			dateStr: '3 June 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-06-09T23:00:00.000Z',
			dateStr: '10 June 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-06-16T23:00:00.000Z',
			dateStr: '17 June 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-06-23T23:00:00.000Z',
			dateStr: '24 June 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-06-30T23:00:00.000Z',
			dateStr: '1 July 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-07-07T23:00:00.000Z',
			dateStr: '8 July 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-07-14T23:00:00.000Z',
			dateStr: '15 July 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-07-21T23:00:00.000Z',
			dateStr: '22 July 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-07-28T23:00:00.000Z',
			dateStr: '29 July 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-08-04T23:00:00.000Z',
			dateStr: '5 August 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-08-11T23:00:00.000Z',
			dateStr: '12 August 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-08-18T23:00:00.000Z',
			dateStr: '19 August 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-08-25T23:00:00.000Z',
			dateStr: '26 August 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-09-01T23:00:00.000Z',
			dateStr: '2 September 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-09-08T23:00:00.000Z',
			dateStr: '9 September 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-09-15T23:00:00.000Z',
			dateStr: '16 September 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-09-22T23:00:00.000Z',
			dateStr: '23 September 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-09-29T23:00:00.000Z',
			dateStr: '30 September 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-10-06T23:00:00.000Z',
			dateStr: '7 October 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-10-13T23:00:00.000Z',
			dateStr: '14 October 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-10-20T23:00:00.000Z',
			dateStr: '21 October 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-10-27T23:00:00.000Z',
			dateStr: '28 October 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-11-04T00:00:00.000Z',
			dateStr: '4 November 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-11-11T00:00:00.000Z',
			dateStr: '11 November 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-11-18T00:00:00.000Z',
			dateStr: '18 November 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-11-25T00:00:00.000Z',
			dateStr: '25 November 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-12-02T00:00:00.000Z',
			dateStr: '2 December 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-12-09T00:00:00.000Z',
			dateStr: '9 December 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-12-16T00:00:00.000Z',
			dateStr: '16 December 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-12-23T00:00:00.000Z',
			dateStr: '23 December 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-12-30T00:00:00.000Z',
			dateStr: '30 December 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2028-01-06T00:00:00.000Z',
			dateStr: '6 January 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-01-13T00:00:00.000Z',
			dateStr: '13 January 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-01-20T00:00:00.000Z',
			dateStr: '20 January 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-01-27T00:00:00.000Z',
			dateStr: '27 January 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-02-03T00:00:00.000Z',
			dateStr: '3 February 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-02-10T00:00:00.000Z',
			dateStr: '10 February 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-02-17T00:00:00.000Z',
			dateStr: '17 February 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-02-24T00:00:00.000Z',
			dateStr: '24 February 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-03-02T00:00:00.000Z',
			dateStr: '2 March 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-03-09T00:00:00.000Z',
			dateStr: '9 March 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-03-16T00:00:00.000Z',
			dateStr: '16 March 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-03-23T00:00:00.000Z',
			dateStr: '23 March 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-03-29T23:00:00.000Z',
			dateStr: '30 March 2028',
		},
	],
	THUAA: [
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-07-02T23:00:00.000Z',
			dateStr: '3 July 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-07-09T23:00:00.000Z',
			dateStr: '10 July 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-07-16T23:00:00.000Z',
			dateStr: '17 July 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-07-23T23:00:00.000Z',
			dateStr: '24 July 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-07-30T23:00:00.000Z',
			dateStr: '31 July 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-08-06T23:00:00.000Z',
			dateStr: '7 August 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-08-13T23:00:00.000Z',
			dateStr: '14 August 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-08-20T23:00:00.000Z',
			dateStr: '21 August 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-08-27T23:00:00.000Z',
			dateStr: '28 August 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-09-03T23:00:00.000Z',
			dateStr: '4 September 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-09-10T23:00:00.000Z',
			dateStr: '11 September 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-09-17T23:00:00.000Z',
			dateStr: '18 September 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-09-24T23:00:00.000Z',
			dateStr: '25 September 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-10-01T23:00:00.000Z',
			dateStr: '2 October 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-10-08T23:00:00.000Z',
			dateStr: '9 October 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-10-15T23:00:00.000Z',
			dateStr: '16 October 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-10-22T23:00:00.000Z',
			dateStr: '23 October 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-10-30T00:00:00.000Z',
			dateStr: '30 October 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-11-06T00:00:00.000Z',
			dateStr: '6 November 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-11-13T00:00:00.000Z',
			dateStr: '13 November 2025',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2025-11-20T00:00:00.000Z',
			dateStr: '20 November 2025',
		},
		{
			color: ['Black Bin'],
			date: '2025-11-27T00:00:00.000Z',
			dateStr: '27 November 2025',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2025-12-04T00:00:00.000Z',
			dateStr: '4 December 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2025-12-11T00:00:00.000Z',
			dateStr: '11 December 2025',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2025-12-18T00:00:00.000Z',
			dateStr: '18 December 2025',
		},
		{
			color: ['Brown Bin'],
			date: '2025-12-24T00:00:00.000Z',
			dateStr: '24 December 2025',
		},
		{
			color: ['Blue Bin'],
			date: '2026-01-02T00:00:00.000Z',
			dateStr: '2 January 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-01-08T00:00:00.000Z',
			dateStr: '8 January 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-01-15T00:00:00.000Z',
			dateStr: '15 January 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-01-22T00:00:00.000Z',
			dateStr: '22 January 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-01-29T00:00:00.000Z',
			dateStr: '29 January 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-02-05T00:00:00.000Z',
			dateStr: '5 February 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-02-12T00:00:00.000Z',
			dateStr: '12 February 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-02-19T00:00:00.000Z',
			dateStr: '19 February 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-02-26T00:00:00.000Z',
			dateStr: '26 February 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-03-05T00:00:00.000Z',
			dateStr: '5 March 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-03-12T00:00:00.000Z',
			dateStr: '12 March 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-03-19T00:00:00.000Z',
			dateStr: '19 March 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-03-26T00:00:00.000Z',
			dateStr: '26 March 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-03-31T23:00:00.000Z',
			dateStr: '1 April 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-04-08T23:00:00.000Z',
			dateStr: '9 April 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-04-15T23:00:00.000Z',
			dateStr: '16 April 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-04-22T23:00:00.000Z',
			dateStr: '23 April 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-04-29T23:00:00.000Z',
			dateStr: '30 April 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-05-06T23:00:00.000Z',
			dateStr: '7 May 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-05-13T23:00:00.000Z',
			dateStr: '14 May 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-05-20T23:00:00.000Z',
			dateStr: '21 May 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-05-27T23:00:00.000Z',
			dateStr: '28 May 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-06-03T23:00:00.000Z',
			dateStr: '4 June 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-06-10T23:00:00.000Z',
			dateStr: '11 June 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-06-17T23:00:00.000Z',
			dateStr: '18 June 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-06-24T23:00:00.000Z',
			dateStr: '25 June 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-07-01T23:00:00.000Z',
			dateStr: '2 July 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-07-08T23:00:00.000Z',
			dateStr: '9 July 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-07-15T23:00:00.000Z',
			dateStr: '16 July 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-07-22T23:00:00.000Z',
			dateStr: '23 July 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-07-29T23:00:00.000Z',
			dateStr: '30 July 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-08-05T23:00:00.000Z',
			dateStr: '6 August 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-08-12T23:00:00.000Z',
			dateStr: '13 August 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-08-19T23:00:00.000Z',
			dateStr: '20 August 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-08-26T23:00:00.000Z',
			dateStr: '27 August 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-09-02T23:00:00.000Z',
			dateStr: '3 September 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-09-09T23:00:00.000Z',
			dateStr: '10 September 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-09-16T23:00:00.000Z',
			dateStr: '17 September 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-09-23T23:00:00.000Z',
			dateStr: '24 September 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-09-30T23:00:00.000Z',
			dateStr: '1 October 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-10-07T23:00:00.000Z',
			dateStr: '8 October 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-10-14T23:00:00.000Z',
			dateStr: '15 October 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-10-21T23:00:00.000Z',
			dateStr: '22 October 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-10-29T00:00:00.000Z',
			dateStr: '29 October 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-11-05T00:00:00.000Z',
			dateStr: '5 November 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-11-12T00:00:00.000Z',
			dateStr: '12 November 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-11-19T00:00:00.000Z',
			dateStr: '19 November 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-11-26T00:00:00.000Z',
			dateStr: '26 November 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-12-03T00:00:00.000Z',
			dateStr: '3 December 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-12-10T00:00:00.000Z',
			dateStr: '10 December 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-12-17T00:00:00.000Z',
			dateStr: '17 December 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-12-23T00:00:00.000Z',
			dateStr: '23 December 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-12-30T00:00:00.000Z',
			dateStr: '30 December 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2027-01-07T00:00:00.000Z',
			dateStr: '7 January 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-01-14T00:00:00.000Z',
			dateStr: '14 January 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-01-21T00:00:00.000Z',
			dateStr: '21 January 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-01-28T00:00:00.000Z',
			dateStr: '28 January 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-02-04T00:00:00.000Z',
			dateStr: '4 February 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-02-11T00:00:00.000Z',
			dateStr: '11 February 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-02-18T00:00:00.000Z',
			dateStr: '18 February 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-02-25T00:00:00.000Z',
			dateStr: '25 February 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-03-04T00:00:00.000Z',
			dateStr: '4 March 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-03-11T00:00:00.000Z',
			dateStr: '11 March 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-03-18T00:00:00.000Z',
			dateStr: '18 March 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-03-24T00:00:00.000Z',
			dateStr: '24 March 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-03-31T23:00:00.000Z',
			dateStr: '1 April 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-04-07T23:00:00.000Z',
			dateStr: '8 April 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-04-14T23:00:00.000Z',
			dateStr: '15 April 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-04-21T23:00:00.000Z',
			dateStr: '22 April 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-04-28T23:00:00.000Z',
			dateStr: '29 April 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-05-05T23:00:00.000Z',
			dateStr: '6 May 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-05-12T23:00:00.000Z',
			dateStr: '13 May 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-05-19T23:00:00.000Z',
			dateStr: '20 May 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-05-26T23:00:00.000Z',
			dateStr: '27 May 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-06-02T23:00:00.000Z',
			dateStr: '3 June 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-06-09T23:00:00.000Z',
			dateStr: '10 June 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-06-16T23:00:00.000Z',
			dateStr: '17 June 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-06-23T23:00:00.000Z',
			dateStr: '24 June 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-06-30T23:00:00.000Z',
			dateStr: '1 July 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-07-07T23:00:00.000Z',
			dateStr: '8 July 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-07-14T23:00:00.000Z',
			dateStr: '15 July 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-07-21T23:00:00.000Z',
			dateStr: '22 July 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-07-28T23:00:00.000Z',
			dateStr: '29 July 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-08-04T23:00:00.000Z',
			dateStr: '5 August 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-08-11T23:00:00.000Z',
			dateStr: '12 August 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-08-18T23:00:00.000Z',
			dateStr: '19 August 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-08-25T23:00:00.000Z',
			dateStr: '26 August 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-09-01T23:00:00.000Z',
			dateStr: '2 September 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-09-08T23:00:00.000Z',
			dateStr: '9 September 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-09-15T23:00:00.000Z',
			dateStr: '16 September 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-09-22T23:00:00.000Z',
			dateStr: '23 September 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-09-29T23:00:00.000Z',
			dateStr: '30 September 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-10-06T23:00:00.000Z',
			dateStr: '7 October 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-10-13T23:00:00.000Z',
			dateStr: '14 October 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-10-20T23:00:00.000Z',
			dateStr: '21 October 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-10-27T23:00:00.000Z',
			dateStr: '28 October 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-11-04T00:00:00.000Z',
			dateStr: '4 November 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-11-11T00:00:00.000Z',
			dateStr: '11 November 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-11-18T00:00:00.000Z',
			dateStr: '18 November 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-11-25T00:00:00.000Z',
			dateStr: '25 November 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-12-02T00:00:00.000Z',
			dateStr: '2 December 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-12-09T00:00:00.000Z',
			dateStr: '9 December 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-12-16T00:00:00.000Z',
			dateStr: '16 December 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-12-23T00:00:00.000Z',
			dateStr: '23 December 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-12-30T00:00:00.000Z',
			dateStr: '30 December 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2028-01-06T00:00:00.000Z',
			dateStr: '6 January 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-01-13T00:00:00.000Z',
			dateStr: '13 January 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-01-20T00:00:00.000Z',
			dateStr: '20 January 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-01-27T00:00:00.000Z',
			dateStr: '27 January 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-02-03T00:00:00.000Z',
			dateStr: '3 February 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-02-10T00:00:00.000Z',
			dateStr: '10 February 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-02-17T00:00:00.000Z',
			dateStr: '17 February 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-02-24T00:00:00.000Z',
			dateStr: '24 February 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-03-02T00:00:00.000Z',
			dateStr: '2 March 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-03-09T00:00:00.000Z',
			dateStr: '9 March 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-03-16T00:00:00.000Z',
			dateStr: '16 March 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-03-23T00:00:00.000Z',
			dateStr: '23 March 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-03-29T23:00:00.000Z',
			dateStr: '30 March 2028',
		},
	],
	FRIDDG: [
		{
			color: ['Blue Bin'],
			date: '2026-10-15T23:00:00.000Z',
			dateStr: '16 October 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-10-22T23:00:00.000Z',
			dateStr: '23 October 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-10-30T00:00:00.000Z',
			dateStr: '30 October 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-11-06T00:00:00.000Z',
			dateStr: '6 November 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-11-13T00:00:00.000Z',
			dateStr: '13 November 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-11-20T00:00:00.000Z',
			dateStr: '20 November 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-11-27T00:00:00.000Z',
			dateStr: '27 November 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-12-04T00:00:00.000Z',
			dateStr: '4 December 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-12-11T00:00:00.000Z',
			dateStr: '11 December 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-12-18T00:00:00.000Z',
			dateStr: '18 December 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-12-24T00:00:00.000Z',
			dateStr: '24 December 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-12-31T00:00:00.000Z',
			dateStr: '31 December 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2027-01-08T00:00:00.000Z',
			dateStr: '8 January 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-01-15T00:00:00.000Z',
			dateStr: '15 January 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-01-22T00:00:00.000Z',
			dateStr: '22 January 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-01-29T00:00:00.000Z',
			dateStr: '29 January 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-02-05T00:00:00.000Z',
			dateStr: '5 February 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-02-12T00:00:00.000Z',
			dateStr: '12 February 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-02-19T00:00:00.000Z',
			dateStr: '19 February 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-02-26T00:00:00.000Z',
			dateStr: '26 February 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-03-05T00:00:00.000Z',
			dateStr: '5 March 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-03-12T00:00:00.000Z',
			dateStr: '12 March 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-03-19T00:00:00.000Z',
			dateStr: '19 March 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-03-25T00:00:00.000Z',
			dateStr: '25 March 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-04-01T23:00:00.000Z',
			dateStr: '2 April 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-04-08T23:00:00.000Z',
			dateStr: '9 April 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-04-15T23:00:00.000Z',
			dateStr: '16 April 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-04-22T23:00:00.000Z',
			dateStr: '23 April 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-04-29T23:00:00.000Z',
			dateStr: '30 April 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-05-06T23:00:00.000Z',
			dateStr: '7 May 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-05-13T23:00:00.000Z',
			dateStr: '14 May 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-05-20T23:00:00.000Z',
			dateStr: '21 May 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-05-27T23:00:00.000Z',
			dateStr: '28 May 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-06-03T23:00:00.000Z',
			dateStr: '4 June 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-06-10T23:00:00.000Z',
			dateStr: '11 June 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-06-17T23:00:00.000Z',
			dateStr: '18 June 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-06-24T23:00:00.000Z',
			dateStr: '25 June 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-07-01T23:00:00.000Z',
			dateStr: '2 July 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-07-08T23:00:00.000Z',
			dateStr: '9 July 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-07-15T23:00:00.000Z',
			dateStr: '16 July 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-07-22T23:00:00.000Z',
			dateStr: '23 July 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-07-29T23:00:00.000Z',
			dateStr: '30 July 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-08-05T23:00:00.000Z',
			dateStr: '6 August 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-08-12T23:00:00.000Z',
			dateStr: '13 August 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-08-19T23:00:00.000Z',
			dateStr: '20 August 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-08-26T23:00:00.000Z',
			dateStr: '27 August 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-09-02T23:00:00.000Z',
			dateStr: '3 September 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-09-09T23:00:00.000Z',
			dateStr: '10 September 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-09-16T23:00:00.000Z',
			dateStr: '17 September 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-09-23T23:00:00.000Z',
			dateStr: '24 September 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-09-30T23:00:00.000Z',
			dateStr: '1 October 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-10-07T23:00:00.000Z',
			dateStr: '8 October 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-10-14T23:00:00.000Z',
			dateStr: '15 October 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-10-21T23:00:00.000Z',
			dateStr: '22 October 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-10-28T23:00:00.000Z',
			dateStr: '29 October 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-11-05T00:00:00.000Z',
			dateStr: '5 November 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-11-12T00:00:00.000Z',
			dateStr: '12 November 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-11-19T00:00:00.000Z',
			dateStr: '19 November 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-11-26T00:00:00.000Z',
			dateStr: '26 November 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-12-03T00:00:00.000Z',
			dateStr: '3 December 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-12-10T00:00:00.000Z',
			dateStr: '10 December 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-12-17T00:00:00.000Z',
			dateStr: '17 December 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-12-24T00:00:00.000Z',
			dateStr: '24 December 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-12-31T00:00:00.000Z',
			dateStr: '31 December 2027',
		},
		{
			color: ['Black Bin'],
			date: '2028-01-07T00:00:00.000Z',
			dateStr: '7 January 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-01-14T00:00:00.000Z',
			dateStr: '14 January 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-01-21T00:00:00.000Z',
			dateStr: '21 January 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-01-28T00:00:00.000Z',
			dateStr: '28 January 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-02-04T00:00:00.000Z',
			dateStr: '4 February 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-02-11T00:00:00.000Z',
			dateStr: '11 February 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-02-18T00:00:00.000Z',
			dateStr: '18 February 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-02-25T00:00:00.000Z',
			dateStr: '25 February 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-03-03T00:00:00.000Z',
			dateStr: '3 March 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-03-10T00:00:00.000Z',
			dateStr: '10 March 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-03-17T00:00:00.000Z',
			dateStr: '17 March 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-03-24T00:00:00.000Z',
			dateStr: '24 March 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-03-30T23:00:00.000Z',
			dateStr: '31 March 2028',
		},
	],
	THUCCG: [
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-10-14T23:00:00.000Z',
			dateStr: '15 October 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-10-21T23:00:00.000Z',
			dateStr: '22 October 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-10-29T00:00:00.000Z',
			dateStr: '29 October 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-11-05T00:00:00.000Z',
			dateStr: '5 November 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-11-12T00:00:00.000Z',
			dateStr: '12 November 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-11-19T00:00:00.000Z',
			dateStr: '19 November 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-11-26T00:00:00.000Z',
			dateStr: '26 November 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-12-03T00:00:00.000Z',
			dateStr: '3 December 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-12-10T00:00:00.000Z',
			dateStr: '10 December 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-12-17T00:00:00.000Z',
			dateStr: '17 December 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-12-23T00:00:00.000Z',
			dateStr: '23 December 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-12-30T00:00:00.000Z',
			dateStr: '30 December 2026',
		},
		{
			color: ['Black Bin'],
			date: '2027-01-07T00:00:00.000Z',
			dateStr: '7 January 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-01-14T00:00:00.000Z',
			dateStr: '14 January 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-01-21T00:00:00.000Z',
			dateStr: '21 January 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-01-28T00:00:00.000Z',
			dateStr: '28 January 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-02-04T00:00:00.000Z',
			dateStr: '4 February 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-02-11T00:00:00.000Z',
			dateStr: '11 February 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-02-18T00:00:00.000Z',
			dateStr: '18 February 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-02-25T00:00:00.000Z',
			dateStr: '25 February 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-03-04T00:00:00.000Z',
			dateStr: '4 March 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-03-11T00:00:00.000Z',
			dateStr: '11 March 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-03-18T00:00:00.000Z',
			dateStr: '18 March 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-03-24T00:00:00.000Z',
			dateStr: '24 March 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-03-31T23:00:00.000Z',
			dateStr: '1 April 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-04-07T23:00:00.000Z',
			dateStr: '8 April 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-04-14T23:00:00.000Z',
			dateStr: '15 April 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-04-21T23:00:00.000Z',
			dateStr: '22 April 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-04-28T23:00:00.000Z',
			dateStr: '29 April 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-05-05T23:00:00.000Z',
			dateStr: '6 May 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-05-12T23:00:00.000Z',
			dateStr: '13 May 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-05-19T23:00:00.000Z',
			dateStr: '20 May 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-05-26T23:00:00.000Z',
			dateStr: '27 May 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-06-02T23:00:00.000Z',
			dateStr: '3 June 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-06-09T23:00:00.000Z',
			dateStr: '10 June 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-06-16T23:00:00.000Z',
			dateStr: '17 June 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-06-23T23:00:00.000Z',
			dateStr: '24 June 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-06-30T23:00:00.000Z',
			dateStr: '1 July 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-07-07T23:00:00.000Z',
			dateStr: '8 July 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-07-14T23:00:00.000Z',
			dateStr: '15 July 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-07-21T23:00:00.000Z',
			dateStr: '22 July 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-07-28T23:00:00.000Z',
			dateStr: '29 July 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-08-04T23:00:00.000Z',
			dateStr: '5 August 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-08-11T23:00:00.000Z',
			dateStr: '12 August 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-08-18T23:00:00.000Z',
			dateStr: '19 August 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-08-25T23:00:00.000Z',
			dateStr: '26 August 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-09-01T23:00:00.000Z',
			dateStr: '2 September 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-09-08T23:00:00.000Z',
			dateStr: '9 September 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-09-15T23:00:00.000Z',
			dateStr: '16 September 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-09-22T23:00:00.000Z',
			dateStr: '23 September 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-09-29T23:00:00.000Z',
			dateStr: '30 September 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-10-06T23:00:00.000Z',
			dateStr: '7 October 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-10-13T23:00:00.000Z',
			dateStr: '14 October 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-10-20T23:00:00.000Z',
			dateStr: '21 October 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-10-27T23:00:00.000Z',
			dateStr: '28 October 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-11-04T00:00:00.000Z',
			dateStr: '4 November 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-11-11T00:00:00.000Z',
			dateStr: '11 November 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-11-18T00:00:00.000Z',
			dateStr: '18 November 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-11-25T00:00:00.000Z',
			dateStr: '25 November 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-12-02T00:00:00.000Z',
			dateStr: '2 December 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-12-09T00:00:00.000Z',
			dateStr: '9 December 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-12-16T00:00:00.000Z',
			dateStr: '16 December 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-12-23T00:00:00.000Z',
			dateStr: '23 December 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-12-30T00:00:00.000Z',
			dateStr: '30 December 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2028-01-06T00:00:00.000Z',
			dateStr: '6 January 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-01-13T00:00:00.000Z',
			dateStr: '13 January 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-01-20T00:00:00.000Z',
			dateStr: '20 January 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-01-27T00:00:00.000Z',
			dateStr: '27 January 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-02-03T00:00:00.000Z',
			dateStr: '3 February 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-02-10T00:00:00.000Z',
			dateStr: '10 February 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-02-17T00:00:00.000Z',
			dateStr: '17 February 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-02-24T00:00:00.000Z',
			dateStr: '24 February 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-03-02T00:00:00.000Z',
			dateStr: '2 March 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-03-09T00:00:00.000Z',
			dateStr: '9 March 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-03-16T00:00:00.000Z',
			dateStr: '16 March 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-03-23T00:00:00.000Z',
			dateStr: '23 March 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-03-29T23:00:00.000Z',
			dateStr: '30 March 2028',
		},
	],
	TUEBBG: [
		{
			color: ['Brown Bin'],
			date: '2026-10-12T23:00:00.000Z',
			dateStr: '13 October 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-10-19T23:00:00.000Z',
			dateStr: '20 October 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-10-27T00:00:00.000Z',
			dateStr: '27 October 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-11-03T00:00:00.000Z',
			dateStr: '3 November 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-11-10T00:00:00.000Z',
			dateStr: '10 November 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-11-17T00:00:00.000Z',
			dateStr: '17 November 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-11-24T00:00:00.000Z',
			dateStr: '24 November 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-12-01T00:00:00.000Z',
			dateStr: '1 December 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-12-08T00:00:00.000Z',
			dateStr: '8 December 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-12-15T00:00:00.000Z',
			dateStr: '15 December 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-12-21T00:00:00.000Z',
			dateStr: '21 December 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-12-28T00:00:00.000Z',
			dateStr: '28 December 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2027-01-05T00:00:00.000Z',
			dateStr: '5 January 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-01-12T00:00:00.000Z',
			dateStr: '12 January 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-01-19T00:00:00.000Z',
			dateStr: '19 January 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-01-26T00:00:00.000Z',
			dateStr: '26 January 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-02-02T00:00:00.000Z',
			dateStr: '2 February 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-02-09T00:00:00.000Z',
			dateStr: '9 February 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-02-16T00:00:00.000Z',
			dateStr: '16 February 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-02-23T00:00:00.000Z',
			dateStr: '23 February 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-03-02T00:00:00.000Z',
			dateStr: '2 March 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-03-09T00:00:00.000Z',
			dateStr: '9 March 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-03-16T00:00:00.000Z',
			dateStr: '16 March 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-03-22T00:00:00.000Z',
			dateStr: '22 March 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-03-29T23:00:00.000Z',
			dateStr: '30 March 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-04-05T23:00:00.000Z',
			dateStr: '6 April 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-04-12T23:00:00.000Z',
			dateStr: '13 April 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-04-19T23:00:00.000Z',
			dateStr: '20 April 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-04-26T23:00:00.000Z',
			dateStr: '27 April 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-05-03T23:00:00.000Z',
			dateStr: '4 May 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-05-10T23:00:00.000Z',
			dateStr: '11 May 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-05-17T23:00:00.000Z',
			dateStr: '18 May 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-05-24T23:00:00.000Z',
			dateStr: '25 May 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-05-31T23:00:00.000Z',
			dateStr: '1 June 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-06-07T23:00:00.000Z',
			dateStr: '8 June 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-06-14T23:00:00.000Z',
			dateStr: '15 June 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-06-21T23:00:00.000Z',
			dateStr: '22 June 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-06-28T23:00:00.000Z',
			dateStr: '29 June 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-07-05T23:00:00.000Z',
			dateStr: '6 July 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-07-12T23:00:00.000Z',
			dateStr: '13 July 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-07-19T23:00:00.000Z',
			dateStr: '20 July 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-07-26T23:00:00.000Z',
			dateStr: '27 July 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-08-02T23:00:00.000Z',
			dateStr: '3 August 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-08-09T23:00:00.000Z',
			dateStr: '10 August 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-08-16T23:00:00.000Z',
			dateStr: '17 August 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-08-23T23:00:00.000Z',
			dateStr: '24 August 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-08-30T23:00:00.000Z',
			dateStr: '31 August 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-09-06T23:00:00.000Z',
			dateStr: '7 September 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-09-13T23:00:00.000Z',
			dateStr: '14 September 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-09-20T23:00:00.000Z',
			dateStr: '21 September 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-09-27T23:00:00.000Z',
			dateStr: '28 September 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-10-04T23:00:00.000Z',
			dateStr: '5 October 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-10-11T23:00:00.000Z',
			dateStr: '12 October 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-10-18T23:00:00.000Z',
			dateStr: '19 October 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-10-25T23:00:00.000Z',
			dateStr: '26 October 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-11-02T00:00:00.000Z',
			dateStr: '2 November 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-11-09T00:00:00.000Z',
			dateStr: '9 November 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-11-16T00:00:00.000Z',
			dateStr: '16 November 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-11-23T00:00:00.000Z',
			dateStr: '23 November 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-11-30T00:00:00.000Z',
			dateStr: '30 November 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-12-07T00:00:00.000Z',
			dateStr: '7 December 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-12-14T00:00:00.000Z',
			dateStr: '14 December 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-12-21T00:00:00.000Z',
			dateStr: '21 December 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-12-28T00:00:00.000Z',
			dateStr: '28 December 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2028-01-04T00:00:00.000Z',
			dateStr: '4 January 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-01-11T00:00:00.000Z',
			dateStr: '11 January 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-01-18T00:00:00.000Z',
			dateStr: '18 January 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-01-25T00:00:00.000Z',
			dateStr: '25 January 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-02-01T00:00:00.000Z',
			dateStr: '1 February 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-02-08T00:00:00.000Z',
			dateStr: '8 February 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-02-15T00:00:00.000Z',
			dateStr: '15 February 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-02-22T00:00:00.000Z',
			dateStr: '22 February 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-02-29T00:00:00.000Z',
			dateStr: '29 February 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-03-07T00:00:00.000Z',
			dateStr: '7 March 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-03-14T00:00:00.000Z',
			dateStr: '14 March 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-03-21T00:00:00.000Z',
			dateStr: '21 March 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-03-27T23:00:00.000Z',
			dateStr: '28 March 2028',
		},
	],
	WEDAAG: [
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-10-13T23:00:00.000Z',
			dateStr: '14 October 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-10-20T23:00:00.000Z',
			dateStr: '21 October 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-10-28T00:00:00.000Z',
			dateStr: '28 October 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-11-04T00:00:00.000Z',
			dateStr: '4 November 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-11-11T00:00:00.000Z',
			dateStr: '11 November 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-11-18T00:00:00.000Z',
			dateStr: '18 November 2026',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2026-11-25T00:00:00.000Z',
			dateStr: '25 November 2026',
		},
		{
			color: ['Blue Bin'],
			date: '2026-12-02T00:00:00.000Z',
			dateStr: '2 December 2026',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2026-12-09T00:00:00.000Z',
			dateStr: '9 December 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2026-12-16T00:00:00.000Z',
			dateStr: '16 December 2026',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2026-12-22T00:00:00.000Z',
			dateStr: '22 December 2026',
		},
		{
			color: ['Black Bin'],
			date: '2026-12-29T00:00:00.000Z',
			dateStr: '29 December 2026',
		},
		{
			color: ['Brown Bin'],
			date: '2027-01-06T00:00:00.000Z',
			dateStr: '6 January 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-01-13T00:00:00.000Z',
			dateStr: '13 January 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-01-20T00:00:00.000Z',
			dateStr: '20 January 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-01-27T00:00:00.000Z',
			dateStr: '27 January 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-02-03T00:00:00.000Z',
			dateStr: '3 February 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-02-10T00:00:00.000Z',
			dateStr: '10 February 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-02-17T00:00:00.000Z',
			dateStr: '17 February 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-02-24T00:00:00.000Z',
			dateStr: '24 February 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-03-03T00:00:00.000Z',
			dateStr: '3 March 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-03-10T00:00:00.000Z',
			dateStr: '10 March 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-03-17T00:00:00.000Z',
			dateStr: '17 March 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-03-23T00:00:00.000Z',
			dateStr: '23 March 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-03-30T23:00:00.000Z',
			dateStr: '31 March 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-04-06T23:00:00.000Z',
			dateStr: '7 April 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-04-13T23:00:00.000Z',
			dateStr: '14 April 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-04-20T23:00:00.000Z',
			dateStr: '21 April 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-04-27T23:00:00.000Z',
			dateStr: '28 April 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-05-04T23:00:00.000Z',
			dateStr: '5 May 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-05-11T23:00:00.000Z',
			dateStr: '12 May 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-05-18T23:00:00.000Z',
			dateStr: '19 May 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-05-25T23:00:00.000Z',
			dateStr: '26 May 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-06-01T23:00:00.000Z',
			dateStr: '2 June 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-06-08T23:00:00.000Z',
			dateStr: '9 June 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-06-15T23:00:00.000Z',
			dateStr: '16 June 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-06-22T23:00:00.000Z',
			dateStr: '23 June 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-06-29T23:00:00.000Z',
			dateStr: '30 June 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-07-06T23:00:00.000Z',
			dateStr: '7 July 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-07-13T23:00:00.000Z',
			dateStr: '14 July 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-07-20T23:00:00.000Z',
			dateStr: '21 July 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-07-27T23:00:00.000Z',
			dateStr: '28 July 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-08-03T23:00:00.000Z',
			dateStr: '4 August 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-08-10T23:00:00.000Z',
			dateStr: '11 August 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-08-17T23:00:00.000Z',
			dateStr: '18 August 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-08-24T23:00:00.000Z',
			dateStr: '25 August 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-08-31T23:00:00.000Z',
			dateStr: '1 September 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-09-07T23:00:00.000Z',
			dateStr: '8 September 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-09-14T23:00:00.000Z',
			dateStr: '15 September 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-09-21T23:00:00.000Z',
			dateStr: '22 September 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-09-28T23:00:00.000Z',
			dateStr: '29 September 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-10-05T23:00:00.000Z',
			dateStr: '6 October 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-10-12T23:00:00.000Z',
			dateStr: '13 October 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-10-19T23:00:00.000Z',
			dateStr: '20 October 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-10-26T23:00:00.000Z',
			dateStr: '27 October 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-11-03T00:00:00.000Z',
			dateStr: '3 November 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-11-10T00:00:00.000Z',
			dateStr: '10 November 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-11-17T00:00:00.000Z',
			dateStr: '17 November 2027',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2027-11-24T00:00:00.000Z',
			dateStr: '24 November 2027',
		},
		{
			color: ['Black Bin'],
			date: '2027-12-01T00:00:00.000Z',
			dateStr: '1 December 2027',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2027-12-08T00:00:00.000Z',
			dateStr: '8 December 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2027-12-15T00:00:00.000Z',
			dateStr: '15 December 2027',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2027-12-22T00:00:00.000Z',
			dateStr: '22 December 2027',
		},
		{
			color: ['Brown Bin'],
			date: '2027-12-29T00:00:00.000Z',
			dateStr: '29 December 2027',
		},
		{
			color: ['Blue Bin'],
			date: '2028-01-05T00:00:00.000Z',
			dateStr: '5 January 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-01-12T00:00:00.000Z',
			dateStr: '12 January 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-01-19T00:00:00.000Z',
			dateStr: '19 January 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-01-26T00:00:00.000Z',
			dateStr: '26 January 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-02-02T00:00:00.000Z',
			dateStr: '2 February 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-02-09T00:00:00.000Z',
			dateStr: '9 February 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-02-16T00:00:00.000Z',
			dateStr: '16 February 2028',
		},
		{
			color: ['Black Bin'],
			date: '2028-02-23T00:00:00.000Z',
			dateStr: '23 February 2028',
		},
		{
			color: ['Brown Bin', 'Green Bin'],
			date: '2028-03-01T00:00:00.000Z',
			dateStr: '1 March 2028',
		},
		{
			color: ['Blue Bin'],
			date: '2028-03-08T00:00:00.000Z',
			dateStr: '8 March 2028',
		},
		{
			color: ['Black Bin', 'Green Bin'],
			date: '2028-03-15T00:00:00.000Z',
			dateStr: '15 March 2028',
		},
		{
			color: ['Brown Bin'],
			date: '2028-03-22T00:00:00.000Z',
			dateStr: '22 March 2028',
		},
		{
			color: ['Blue Bin', 'Green Bin'],
			date: '2028-03-28T23:00:00.000Z',
			dateStr: '29 March 2028',
		},
	],
};

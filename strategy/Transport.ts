export interface Transport {
	calculateFreight(total: number): number;
}
import { periods, transportations } from '../../services/TransportService'

export type Request = {
	type: transportations,
	period: periods,
	data: number
}
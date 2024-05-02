import { periods, transportations } from '../../services/TransportService';

export type Response = { type: transportations, period: periods, total: number }
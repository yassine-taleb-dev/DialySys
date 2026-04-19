export interface AlerteRequestDto {
  patientId: number;
  type: 'CRITIQUE' | 'ATTENTION' | 'INFO';
  message: string;
}
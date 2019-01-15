export const DATE_LOCALE = 'pt-br'

export const STATUSES_GROUPS = {
  interests: [
    'PENDING',
    'NEGOTIATION',
    'FINISHED',
    'CANCELED',
    'PENDING_PAYMENT'
  ],
  coaching: [
    'PENDING',
    'ACTIVE',
    'SUSPEND',
    'LOCKED',
    'CANCELED',
    'FINISHED',
    'FINISHED_TOTALLY'
  ],
  coupons: [
    'ABERTO',
    'USAVEL',
    'CANCELADO',
    'USADO'
  ],
  threads: [
    'ACTIVE',
    'CLOSED'
  ],
  videocalls: [
    'SCHEDULED',
    'ACTIVE',
    'FINISHED'
  ],
  composition: [
    'PROCESSING',
    'DOWNLOADING',
    'DOWNLOAD_FAILED',
    'DOWNLOAD_COMPLETED'
  ],
  orders: [
    'ACTIVE',
    'LOCKED',
    'CANCELED'
  ],
  payments: [
    'WAITING_PAYMENT',
    'PAID',
    'REFUSED',
    'CANCELED'
  ],
  serviceRequests: [
    'PENDING',
    'ANSWERED'
  ]
}

export const EVENT_TYPES = {
  REMINDER: {
    type: 'REMINDER',
    name: 'Lembrete',
    background: '#e8f5f1'
  },
  TASK: {
    type: 'TASK',
    name: 'Tarefa',
    background: '#e9efff'
  },
  VIDEO_CALL: {
    type: 'VIDEO_CALL',
    name: 'Vídeo-chamada',
    background: '#bb7011',
    color: '#fff',
    onlyCoachCanCreate: true
  }
}

export const THREAD_SCOPES = {
  WITHOUT_RESPONSE: 'withoutresponse',
  MINE: 'mine'
}

export const MONTHS = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]

export const SERVICE_REQUEST_TYPES = {
  CANCEL: {
    label: 'Cancelamento',
    value: 'CANCEL'
  },
  LOCK: {
    label: 'Trancamento',
    value: 'LOCK'
  },
  UNLOCK: {
    label: 'Destrancar',
    value: 'UNLOCK'
  },
  CHANGE_COACH: {
    label: 'Alteração de coach',
    value: 'CHANGE_COACH'
  },
  RENEW: {
    label: 'Renovação do coaching',
    value: 'RENEW'
  }
}

export const MESSAGE_TYPES = {
  FILE: 'FILE',
  MESSAGE: 'MESSAGE',
  WARNING: 'WARNING'
}

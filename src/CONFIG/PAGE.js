import EventNameInput from '../Pages/EventNameInput';

export const PAGE_ID = {
    EVENT_NAME_INPUT: Symbol('EVENT_NAME_INPUT'),
    EVENT_PAGE: Symbol('EVENT_PAGE'),
};

export const PAGE_ID_TO_ROUTE = {
    [PAGE_ID.EVENT_NAME_INPUT]: '/eventNameInput',
    [PAGE_ID.EVENT_PAGE]: '/eventPage',
};

export const PAGE_ID_TO_COMPONENT = {
    [PAGE_ID.EVENT_NAME_INPUT]: EventNameInput,
    [PAGE_ID.EVENT_PAGE]: null,
};
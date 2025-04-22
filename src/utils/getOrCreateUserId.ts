import { v4 as uuidv4 } from 'uuid';
import {getCookie, setCookie} from './cookieUtils.ts';

export function getOrCreateUserId() {
    let id = getCookie('SESSID');
    if (!id) {
        id = uuidv4();
        setCookie('SESSID', id, 1);
    }
    return id;
}

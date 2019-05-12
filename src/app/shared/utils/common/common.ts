import { Subscription } from 'rxjs';

export function unsubscribe(s: Subscription[]): void {
    s.forEach( x => x.unsubscribe());
}

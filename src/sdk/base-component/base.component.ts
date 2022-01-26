import {Injectable, OnDestroy} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export abstract class BaseComponent implements OnDestroy {
    public readonly dispose$: Subject<void> = new Subject<void>();

    public ngOnDestroy(): void {
        this.dispose$.next();
        this.dispose$.complete();
    }
}

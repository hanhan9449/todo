import { Injectable } from '@angular/core';
import { List } from '../../../domain/entities';
import { Subject } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { LISTS } from '../local-storage/local-storage.namespace';
import { v4String } from 'uuid/interfaces';

type SpecialListUUID = 'today' | 'todo';
@Injectable({
  providedIn: 'root',
})
export class ListService {
  private current: List;
  private lists: List[] = [];
  currentUuid: SpecialListUUID = 'today';
  currentUuid$ = new Subject<string>();
  current$ = new Subject<List>();
  lists$ = new Subject<List[]>();
  constructor(private store: LocalStorageService) {}
  private broadCast(): void {
    this.lists$.next(this.lists);
    this.current$.next(this.current);
    this.currentUuid$.next(this.currentUuid);
  }
  private persist(): void {
    this.store.set(LISTS, this.lists);
  }
  private getByUuid(uuid: string): List {
    return this.lists.find((l) => l._id === uuid);
  }
  private update(list: List): void {
    const index = this.lists.findIndex((l) => l._id === list._id);
  }
}

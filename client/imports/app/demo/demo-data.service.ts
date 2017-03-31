import { Injectable } from "@angular/core";
import { ObservableCursor } from "meteor-rxjs";
import { Demo } from "../../../../both/demo/demo.model";
import { DemoCollection } from "../../../../both/demo/demo.collection";

@Injectable()
export class DemoDataService {
  private data: ObservableCursor<Demo>;

  constructor() {
    this.data = DemoCollection.find({});
  }

  public getData(): ObservableCursor<Demo> {
    return this.data;
  }
}

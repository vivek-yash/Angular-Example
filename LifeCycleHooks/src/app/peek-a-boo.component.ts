import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  Injectable,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Component, Input } from '@angular/core';
import { LoggerService }    from './logger.service';

let nextId = 1;

@Injectable()
export class PeekABoo implements OnInit {
  constructor(private logger: LoggerService) { }

  // implement OnInit's `ngOnInit` method
  ngOnInit() { this.logIt(`OnInit`); console.log("PeekABooComponent OnInit!!"); }

  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }
}

@Component({
  selector: 'peek-a-boo',
  template: '<p>Now you see the hero, {{name}}</p>',
  styles: ['p {background: LightYellow; padding: 8px}']
})
// Don't HAVE to mention the Lifecycle Hook interfaces
// unless we want typing and tool support.
export class PeekABooComponent extends PeekABoo implements
             OnChanges, OnInit, DoCheck,
             AfterContentInit, AfterContentChecked,
             AfterViewInit, AfterViewChecked,
             OnDestroy {
  @Input()  name!: string;

  private verb = 'initialized';

  constructor(logger: LoggerService) {
    super(logger);

    let is = this.name ? 'is' : 'is not';
    this.logIt(`name ${is} known at construction`);
    console.log("PeekABooComponent constructor!!");
  }

  // only called for/if there is an @input variable set by parent.
  ngOnChanges(changes: SimpleChanges) {
    let changesMsgs: string[] = [];
    for (let propName in changes) {
      if (propName === 'name') {
        let name = changes['name'].currentValue;
        changesMsgs.push(`name ${this.verb} to "${name}"`);
      } else {
        changesMsgs.push(propName + ' ' + this.verb);
      }
    }
    this.logIt(`OnChanges: ${changesMsgs.join('; ')}`);
    this.verb = 'changed'; // next time it will be a change
    console.log("PeekABooComponent ngOnChanges!!");
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngDoCheck() { this.logIt(`DoCheck`); console.log("PeekABooComponent DoCheck!!"); }

  ngAfterContentInit() { this.logIt(`AfterContentInit`); console.log("PeekABooComponent AfterContentInit!!"); }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() { this.logIt(`AfterContentChecked`); console.log("PeekABooComponent AfterContentChecked!!");}

  ngAfterViewInit() { this.logIt(`AfterViewInit`); console.log("PeekABooComponent AfterViewInit!!");}

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() { this.logIt(`AfterViewChecked`); console.log("PeekABooComponent AfterViewChecked!!");}

  ngOnDestroy() { this.logIt(`OnDestroy`); console.log("PeekABooComponent OnDestroy!!"); }
}

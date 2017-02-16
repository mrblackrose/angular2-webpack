import {Directive, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';

/**
 * Directive that creates a date picker element
 * @exports 
 */

@Directive({
    selector: '.my-date-picker'
})

/** Date picker directive. Uses JQueryUI date picker until we move UCX to OneUI 3 */
export class DatePicker implements OnInit {
    
    /**
     * Emits an onSelect event
     */
    @Output() onSelect = new EventEmitter();
    
    /**
     * The nativeElement of the directive
     * @private
     */
    private el: HTMLInputElement;

    /**
     * Creates a DatePicker
     * @param {ElementRef} elRef - Angular class that gives access to the DOM element
     */
    constructor(elRef: ElementRef) {
        this.el = elRef.nativeElement;
    }
    
    /**
     * Angular's OnInit.ngOnInit. Creates a datetimepicker element using the nativeElement
     */
    ngOnInit() {
        (<any>$(this.el)).datepicker({
            onClose: (date: string) => {
               this.onSelect.next(date);
            }
        });
    }
}
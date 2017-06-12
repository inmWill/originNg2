import { Component } from '@angular/core';

@Component({
    selector: 'avatar',
    template: require('./avatar.component.html')
})
export class AvatarComponent {
    public name = 'Will Thomas';
    public age = 36;
    public level = 0;
    public height = 6;
    public weight = 170;
    public str = 11;
    public dex = 11;
    public con = 10;
    public int = 13;
    public wis = 10;
    public chr = 12;
    public physicalExp = 0;
    public mentalExp = 0;
    public socialExp = 0;
    public spiritualExp = 0;
    public emotionalExp = 0;

    public religions = [
        'Athiest',
        'Agnostic',
        'Pagan',
        'Buddhist',
        'Catholic',
        'Muslim'
    ];
}

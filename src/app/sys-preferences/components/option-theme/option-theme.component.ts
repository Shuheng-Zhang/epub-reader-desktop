import {ThemeOption, ThemeOptionDescription} from '../../../core/enums';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-option-theme',
  templateUrl: './option-theme.component.html',
  styleUrls: ['./option-theme.component.scss']
})
export class OptionThemeComponent implements OnInit {

  themeOptionValue: ThemeOption;
  themeOptionDescription: string;
  themeOptionList: Array<{ label: string, value: ThemeOption }> = [
    {label: 'Light', value: ThemeOption.THEME_LIGHT},
    {label: 'Dark', value: ThemeOption.THEME_DARK},
    {label: 'Mac Auto', value: ThemeOption.THEME_MAC_AUTO}
  ]

  constructor() {
  }

  ngOnInit(): void {
    this.themeOptionValue = ThemeOption.THEME_LIGHT;
    this.onThemeOptionSwitched(this.themeOptionValue);
  }

  onThemeOptionChanged(event: ThemeOption) {
    console.log('onThemeOptionChanged', event);
    this.onThemeOptionSwitched(event);
  }

  onThemeOptionSwitched(themeOption: ThemeOption) {
    switch (themeOption) {
      case ThemeOption.THEME_LIGHT:
        this.themeOptionDescription = ThemeOptionDescription.THEME_LIGHT_DESCRIPTION;
        break;
      case ThemeOption.THEME_DARK:
        this.themeOptionDescription = ThemeOptionDescription.THEME_DARK_DESCRIPTION;
        break;
      case ThemeOption.THEME_MAC_AUTO:
        this.themeOptionDescription = ThemeOptionDescription.THEME_MAC_AUTO_DESCRIPTION;
        break;
      default:
        this.themeOptionDescription = 'Please Chose a Theme.';
        break;
    }
  }
}

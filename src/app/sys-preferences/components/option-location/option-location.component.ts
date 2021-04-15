import { LangOptionDescription } from './../../../enums/lang-option-description.enum';
import { LangOption } from './../../../enums/lang-option.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-location',
  templateUrl: './option-location.component.html',
  styleUrls: ['./option-location.component.scss']
})
export class OptionLocationComponent implements OnInit {

  langOptionValue: LangOption;
  langOptionDescription: string;
  langOptionList: Array<{ label: string, value: LangOption }> = [
    { label: 'English (US)', value: LangOption.LANG_EN },
    { label: '汉语 (中国)', value: LangOption.LANG_CN }
  ]

  constructor() { }

  ngOnInit(): void {
    this.langOptionValue = LangOption.LANG_EN;
    this.onLangOptionSwitched(this.langOptionValue);
  }

  onLangOptionChanged(event: LangOption) {
    console.log('onLangOptionChanged', event);
    this.onLangOptionSwitched(event);
  }

  onLangOptionSwitched(langOption: LangOption) {
    switch (langOption) {
      case LangOption.LANG_CN:
        this.langOptionDescription = LangOptionDescription.LANG_CN_DESCRIPTION;
        break;
      case LangOption.LANG_EN:
        this.langOptionDescription = LangOptionDescription.LANG_EN_DESCRIPTION;
        break;
      default:
        this.langOptionDescription = 'Please Chose an Language.';
        break;
    }
  }

}

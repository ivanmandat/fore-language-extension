# IMemo.WantReturns

IMemo.WantReturns
-


# IMemo.WantReturns


## Синтаксис


WantReturns: Boolean;


## Описание


Свойство WantReturns определяет возможность вставки в редактируемый текст символа возврата каретки (нажатие клавиши ENTER).


## Комментарии


По умолчанию свойству установлено значение True, при этом будет возможность вставки символа возврата каретки.


Примечание. Для расположенной на форме кнопки, с установленным свойством [DefaultButton](../IButton/IButton.DefaultButton.htm), не будет происходить генерация события [OnClick](../IControl/IControl.OnClick.htm) по нажатию клавиши ENTER, если фокус расположен в компоненте [Memo](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Memo.htm), а свойству WantReturns задано значение True.


См. также:


[IMemo](IMemo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

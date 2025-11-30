# IBindingCheckBox.Caption

IBindingCheckBox.Caption
-


# IBindingCheckBox.Caption


## Синтаксис


Caption: String;


## Описание


Свойство Caption определяет
 значение параметра «TEXT» в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «TEXT» определяет заголовок
 переключателя.


Свойство Caption доступно для
 использования, если свойству [IBindingCheckBox.CaptionDefined](ibindingcheckbox.captiondefined.htm)
 установлено значение True. При
 изменении свойства Caption свойству
 [IBindingCheckBox.CaptionDefined](ibindingcheckbox.captiondefined.htm)
 автоматически устанавливается значение True.


## Пример


	Function CreateCheckBoxBidning(Caption: String): String;

	Var

	    BM: IBindingManager;

	    CheckBoxBinding: IBindingCheckBox;

	Begin

	    BM := New BindingManager.Create;

	    CheckBoxBinding := BM.CreateByUi("CheckBox") As IBindingCheckBox;

	    CheckBoxBinding.Align := CheckAlignment.Right;

	    CheckBoxBinding.Caption := Caption;

	    CheckBoxBinding.Value := True;

	    Return CheckBoxBinding.AsString;

	End Function CreateCheckBoxBidning;


Данная функция генерирует строку связи для использования редактора значения
 в виде переключателя. Текст, который будет отображаться рядом с переключателем,
 передается в качестве входного параметра Caption.
 Флажок будет расположен справа относительно текста. Состояние флага -
 включен.


См. также:


[IBindingCheckBox](IBindingCheckBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

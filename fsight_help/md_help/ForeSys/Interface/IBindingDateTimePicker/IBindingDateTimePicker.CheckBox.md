# IBindingDateTimePicker.CheckBox

IBindingDateTimePicker.CheckBox
-


# IBindingDateTimePicker.CheckBox


## Синтаксис


CheckBox: Boolean;


## Описание


Свойство CheckBox определяет
 значение параметра «CHECKBOX»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Если параметр «CHECKBOX» имеет
 значение True, то редактор доступен,
 иначе недоступен.


Свойство CheckBox доступно для
 использования, если свойству [IBindingDateTimePicker.CheckBoxDefined](IBindingDateTimePicker.CheckBoxDefined.htm)
 установлено значение True. При
 изменении свойства CheckBox свойству
 [IBindingDateTimePicker.CheckBoxDefined](IBindingDateTimePicker.CheckBoxDefined.htm)
 автоматически устанавливается значение True.


## Пример


	Function CreateDateTimePickerBidning(DTValue: DateTime): String;

	Var

	    BM: IBindingManager;

	    DateTimePickerBinding: IBindingDateTimePicker;

	Begin

	    BM := New BindingManager.Create;

	    DateTimePickerBinding := BM.CreateByUi("DateTimePicker") As IBindingDateTimePicker;

	    DateTimePickerBinding.CheckBox := True;

	    DateTimePickerBinding.CheckBoxFocus := True;

	    DateTimePickerBinding.DropCalendar := True;

	    DateTimePickerBinding.MinValue := DateTime.AddYears(DTValue, -5);

	    DateTimePickerBinding.MaxValue := DateTime.AddYears(DTValue, 5);

	    DateTimePickerBinding.Spin := True;

	    DateTimePickerBinding.Time := True;

	    DateTimePickerBinding.Value := DTValue;

	    Return DateTimePickerBinding.AsString;

	End Function CreateDateTimePickerBidning;


Данная функция генерирует строку связи для использования редактора значения
 даты/времени. Текущая дата, относительно которой устанавливаются настройки
 редактора, передается в качестве входного параметра DTValue.


См. также:


[IBindingDateTimePicker](IBindingDateTimePicker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

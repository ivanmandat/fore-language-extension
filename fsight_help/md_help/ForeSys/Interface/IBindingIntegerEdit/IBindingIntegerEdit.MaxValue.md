# IBindingIntegerEdit.MaxValue

IBindingIntegerEdit.MaxValue
-


# IBindingIntegerEdit.MaxValue


## Синтаксис


MaxValue: Integer;


## Описание


Свойство MaxValue определяет
 значение параметра «MAXVAL» в
 [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «MAXVAL» определяет
 максимальное возможное значение, которое можно будет установить в редакторе.


Свойство MaxValue доступно для
 использования, если свойству [IBindingIntegerEdit.MaxValueDefined](IBindingIntegerEdit.MaxValueDefined.htm)
 установлено значение True. При
 изменении свойства MaxValue свойству
 [IBindingIntegerEdit.MaxValueDefined](IBindingIntegerEdit.MaxValueDefined.htm)
 автоматически устанавливается значение True.


## Пример


	Function CreateIntegerEditBidning(DefaultValue: Integer): String;

	Var

	    BM: IBindingManager;

	    IntegerEditBinding: IBindingIntegerEdit;

	Begin

	    BM := New BindingManager.Create;

	    IntegerEditBinding := BM.CreateByUi("IntegerEdit") As IBindingIntegerEdit;

	    IntegerEditBinding.Mandatory := True;

	    IntegerEditBinding.CorrectOnExit := True;

	    IntegerEditBinding.MinValue := DefaultValue - 100;

	    IntegerEditBinding.MaxValue := DefaultValue + 100;

	    IntegerEditBinding.Value := DefaultValue;

	    IntegerEditBinding.MaxLength := 3;

	    Return IntegerEditBinding.AsString;

	End Function CreateIntegerEditBidning;


Данная функция генерирует строку связи
 для использования редактора целочисленных значений. Значение, относительно
 которого указываются параметры редактора, передается посредством входного
 параметра DefaultValue. При вводе
 в ячейку с редактором недопустимого значения (больше максимального или
 меньше минимального) и снятии фокуса с ячейки значение редактора будет
 заменено на ближайшее допустимое. Для редактора установлено ограничение
 на количество вводимых символов - 3.


См. также:


[IBindingIntegerEdit](IBindingIntegerEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

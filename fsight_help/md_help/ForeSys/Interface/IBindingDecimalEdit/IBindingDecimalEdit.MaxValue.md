# IBindingDecimalEdit.MaxValue

IBindingDecimalEdit.MaxValue
-


# IBindingDecimalEdit.MaxValue


## Синтаксис


MaxValue: Decimal;


## Описание


Свойство MaxValue определяет
 значение параметра «MAXVAL» в
 [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «MAXVAL» определяет
 максимальное возможное значение, которое можно будет установить в редакторе.


Свойство MaxValue доступно для
 использования, если свойству [IBindingDecimalEdit.MaxValueDefined](IBindingDecimalEdit.MaxValueDefined.htm)
 установлено значение True. При
 изменении свойства MaxValue свойству
 [IBindingDecimalEdit.MaxValueDefined](IBindingDecimalEdit.MaxValueDefined.htm)
 автоматически устанавливается значение True.


## Пример


	Function CreateDecimalEditBidning(DefaultValue: Decimal): String;

	Var

	    BM: IBindingManager;

	    DecimalEditBinding: IBindingDecimalEdit;

	Begin

	    BM := New BindingManager.Create;

	    DecimalEditBinding := BM.CreateByUi("DecimalEdit") As IBindingDecimalEdit;

	    DecimalEditBinding.MinValue := DefaultValue - 100;

	    DecimalEditBinding.MaxValue := DefaultValue + 100;

	    DecimalEditBinding.Precision := 20;

	    DecimalEditBinding.Step_ := 0.000000000000000000005;

	    DecimalEditBinding.Value := DefaultValue;

	    DecimalEditBinding.CorrectOnExit := True;

	    Return DecimalEditBinding.AsString;

	End Function CreateDecimalEditBidning;


Данная функция генерирует строку связи для использования редактора вещественных
 значений высокой точности. Значение, относительно которого указываются
 параметры редактора, передается посредством входного параметра DefaultValue.
 Точность значений в редакторе будет 20 знаков после запятой, шаг редактора
 - 0,000000000000000000005. При
 вводе в ячейку с редактором недопустимого значения (больше максимального
 или меньше минимального) и снятии фокуса с ячейки значение редактора будет
 заменено на ближайшее допустимое.


См. также:


[IBindingDecimalEdit](IBindingDecimalEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

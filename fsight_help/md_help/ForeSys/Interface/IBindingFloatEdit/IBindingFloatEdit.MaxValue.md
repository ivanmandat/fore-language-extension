# IBindingFloatEdit.MaxValue

IBindingFloatEdit.MaxValue
-


# IBindingFloatEdit.MaxValue


## Синтаксис


MaxValue:
 Double;


## Описание


Свойство MaxValue определяет
 значение параметра «MAXVAL» в
 [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «MAXVAL» определяет
 максимальное возможное значение, которое можно будет установить в редакторе.


Свойство MaxValue доступно для
 использования, если свойству [IBindingFloatEdit.MaxValueDefined](IBindingFloatEdit.MaxValueDefined.htm)
 установлено значение True. При
 изменении свойства MaxValue свойству
 [IBindingFloatEdit.MaxValueDefined](IBindingFloatEdit.MaxValueDefined.htm)
 автоматически устанавливается значение True.


## Пример


	Function CreateFloatEditBidning(DefaultValue: Double): String;

	Var

	    BM: IBindingManager;

	    FloatEditBinding: IBindingFloatEdit;

	Begin

	    BM := New BindingManager.Create;

	    FloatEditBinding := BM.CreateByUi("FloatEdit") As IBindingFloatEdit;

	    FloatEditBinding.MinValue := DefaultValue - 100;

	    FloatEditBinding.MaxValue := DefaultValue + 100;

	    FloatEditBinding.Precision := 3;

	    FloatEditBinding.Step_ := 0.005;

	    FloatEditBinding.Value := DefaultValue;

	    FloatEditBinding.CorrectOnExit := True;

	    Return FloatEditBinding.AsString;

	End Function CreateFloatEditBidning;


Данная функция генерирует строку связи для использования редактора вещественных
 значений. Значение, относительно которого указываются параметры редактора,
 передается посредством входного параметра DefaultValue.
 Точность значений в редакторе будет три знака после запятой, шаг редактора
 - 0,005. При вводе в ячейку с
 редактором недопустимого значения (больше максимального или меньше минимального)
 и снятии фокуса с ячейки значение редактора будет заменено на ближайшее
 допустимое.


См. также:


[IBindingFloatEdit](IBindingFloatEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

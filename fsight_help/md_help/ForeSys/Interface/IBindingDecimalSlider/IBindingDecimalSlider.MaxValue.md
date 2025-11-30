# IBindingDecimalSlider.MaxValue

IBindingDecimalSlider.MaxValue
-


# IBindingDecimalSlider.MaxValue


## Синтаксис


MaxValue: Decimal;


## Описание


Свойство MaxValue определяет
 значение параметра «MAXVAL» в
 [строке связи](../IBindingValue/IBindingValue.AsString.htm)


## Комментарии


Параметр «MAXVAL» определяет
 максимальное значение ползунка. Максимальное значение должно быть больше
 минимального значения, заданного в свойстве [IBindingDecimalSlider.MinValue](IBindingDecimalSlider.MinValue.htm).


Значение свойства MaxValue учитывается,
 если свойство [IBindingDecimalSlider.MaxValueDefined](IBindingDecimalSlider.MaxValueDefined.htm)
 имеет значение True. При изменении
 значения свойства MaxValue свойству
 [IBindingDecimalSlider.MaxValueDefined](IBindingDecimalSlider.MaxValueDefined.htm)
 автоматически присваивается значение True.


## Пример


Данная функция возвращает строку связи для использования редактора значений
 в виде ползунка десятичных значений.


	Function CreateDecimalSliderBidning: string;

	Var

	    BM: IBindingManager;

	    Slider: IBindingDecimalSlider;

	Begin

	    BM := New BindingManager.Create;

	    Slider := BM.CreateByUi("DecimalSlider") As IBindingDecimalSlider;

	    // Указываем, что пустые значения не допускаются

	    Slider.Mandatory := True;

	    // Задаем минимальное и максимальное значения

	    Slider.MinValue := -10E-3M;

	    Slider.MaxValue := 10E-3M;

	    // Задаем шаг изменения

	    Slider.Step_ := 0.15E-3M;

	    // Задаем значение по умолчанию

	    Slider.Value := 0;

	    // Возвращаем строку связи

	    Return Slider.AsString;

	End Function CreateDecimalSliderBidning;


В результате выполнения примера будет получена строка связи для использования
 редактора значений в виде ползунка десятичных значений.


См. также:


[IBindingDecimalSlider](IBindingDecimalSlider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

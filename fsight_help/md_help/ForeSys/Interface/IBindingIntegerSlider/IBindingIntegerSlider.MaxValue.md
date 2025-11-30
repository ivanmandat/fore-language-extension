# IBindingIntegerSlider.MaxValue

IBindingIntegerSlider.MaxValue
-


# IBindingIntegerSlider.MaxValue


## Синтаксис


MaxValue: Integer;


## Описание


Свойство MaxValue определяет
 значение параметра «MAXVAL» в
 [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «MAXVAL» определяет
 максимальное значение ползунка. Максимальное значение должно быть больше
 минимального значения, заданного в свойстве [IBindingIntegerSlider.MinValue](IBindingIntegerSlider.MinValue.htm).


Значение свойства MaxValue учитывается,
 если свойство [IBindingIntegerSlider.MaxValueDefined](IBindingIntegerSlider.MaxValueDefined.htm)
 имеет значение True. При изменении
 значения свойства MaxValue свойству
 [IBindingIntegerSlider.MaxValueDefined](IBindingIntegerSlider.MaxValueDefined.htm)
 автоматически присваивается значение True.


## Пример


Данная функция возвращает строку связи для использования редактора значений
 в виде ползунка целых значений.


	Function CreateIntegerSliderBidning: string;

	Var

	    BM: IBindingManager;

	    Slider: IBindingIntegerSlider;

	Begin

	    BM := New BindingManager.Create;

	    Slider := BM.CreateByUi("IntegerSlider") As IBindingIntegerSlider;

	    // Указываем, что пустые значения не допускаются

	    Slider.Mandatory := True;

	    // Задаем минимальное и максимальное значения

	    Slider.MinValue := -100;

	    Slider.MaxValue := 100;

	    // Задаем шаг изменения

	    Slider.Step_ := 1;

	    // Задаем значение по умолчанию

	    Slider.Value := 0;

	    // Возвращаем строку связи

	    Return Slider.AsString;

	End Function CreateIntegerSliderBidning;


В результате выполнения примера будет получена строка связи для использования
 редактора значений в виде ползунка целых значений.


См. также:


[IBindingIntegerSlider](IBindingIntegerSlider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

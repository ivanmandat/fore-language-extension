# IBindingFloatSlider.MaxValue

IBindingFloatSlider.MaxValue
-


# IBindingFloatSlider.MaxValue


## Синтаксис


MaxValue: Double;


## Описание


Свойство MaxValue определяет
 значение параметра «MAXVAL» в
 [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «MAXVAL» определяет
 максимальное значение ползунка. Максимальное значение должно быть больше
 минимального значения, заданного в свойстве [IBindingFloatSlider.MinValue](IBindingFloatSlider.MinValue.htm).


Значение свойства MaxValue учитывается,
 если свойство [IBindingFloatSlider.MaxValueDefined](IBindingFloatSlider.MaxValueDefined.htm)
 имеет значение True. При изменении
 значения свойства MaxValue свойству
 [IBindingFloatSlider.MaxValueDefined](IBindingFloatSlider.MaxValueDefined.htm)
 автоматически присваивается значение True.


## Пример


Данная функция возвращает строку связи для использования редактора значений
 в виде ползунка вещественных значений.


	Function CreateFloatSliderBidning: string;

	Var

	    BM: IBindingManager;

	    Slider: IBindingFloatSlider;

	Begin

	    BM := New BindingManager.Create;

	    Slider := BM.CreateByUi("FloatSlider") As IBindingFloatSlider;

	    // Указываем, что пустые значения не допускаются

	    Slider.Mandatory := True;

	    // Задаем минимальное и максимальное значения

	    Slider.MinValue := -99.9;

	    Slider.MaxValue := 99.9;

	    // Задаем шаг изменения

	    Slider.Step_ := 0.15;

	    // Задаем значение по умолчанию

	    Slider.Value := 0;

	    // Возвращаем строку связи

	    Return Slider.AsString;

	End Function CreateFloatSliderBidning;


В результате выполнения примера будет получена строка связи для использования
 редактора значений в виде ползунка вещественных значений.


См. также:


[IBindingFloatSlider](IBindingFloatSlider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

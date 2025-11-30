# IBindingIntegerSlider.Value

IBindingIntegerSlider.Value
-


# IBindingIntegerSlider.Value


## Синтаксис


Value: Integer;


## Описание


Свойство Value определяет значение
 параметра «VALUE» в [строке
 связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «VALUE» определяет
 значение ползунка по умолчанию. Данное значение должно быть задано в диапазоне
 между [минимальным](IBindingIntegerSlider.MinValue.htm) и [максимальным](IBindingIntegerSlider.MaxValue.htm) значениями.


Значение свойства Value учитывается,
 если свойство [IBindingIntegerSlider.ValueDefined](IBindingIntegerSlider.ValueDefined.htm)
 имеет значение True. При изменении
 значения свойства Value свойству
 [IBindingIntegerSlider.ValueDefined](IBindingIntegerSlider.ValueDefined.htm)
 автоматически присваивается значение True.


## Пример


Использование свойства приведено в примере для [IBindingIntegerSlider.MaxValue](IBindingIntegerSlider.MaxValue.htm).


См. также:


[IBindingIntegerSlider](IBindingIntegerSlider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

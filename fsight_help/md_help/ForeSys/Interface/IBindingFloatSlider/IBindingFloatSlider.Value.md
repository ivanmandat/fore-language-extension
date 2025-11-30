# IBindingFloatSlider.Value

IBindingFloatSlider.Value
-


# IBindingFloatSlider.Value


## Синтаксис


Value: Double;


## Описание


Свойство Value определяет значение
 параметра «VALUE» в [строке
 связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «VALUE» определяет
 значение ползунка по умолчанию. Данное значение должно быть задано в диапазоне
 между [минимальным](IBindingFloatSlider.MinValue.htm) и [максимальным](IBindingFloatSlider.MaxValue.htm) значениями.


Значение свойства Value учитывается,
 если свойство [IBindingFloatSlider.ValueDefined](IBindingFloatSlider.ValueDefined.htm)
 имеет значение True. При изменении
 значения свойства Value свойству
 [IBindingFloatSlider.ValueDefined](IBindingFloatSlider.ValueDefined.htm)
 автоматически присваивается значение True.


## Пример


Использование свойства приведено в примере для [IBindingFloatSlider.MaxValue](IBindingFloatSlider.MaxValue.htm).


См. также:


[IBindingFloatSlider](IBindingFloatSlider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

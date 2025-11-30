# IBindingFloatSlider.MinValue

IBindingFloatSlider.MinValue
-


# IBindingFloatSlider.MinValue


## Синтаксис


MinValue: Double;


## Описание


Свойство MinValue определяет
 значение параметра «MINVAL» в
 [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «MINVAL» определяет
 минимальное значение ползунка. Минимальное значение должно быть меньше
 максимального значения, заданного в свойстве [IBindingFloatSlider.MaxValue](IBindingFloatSlider.MaxValue.htm).


Значение свойства MinValue учитывается,
 если свойство [IBindingFloatSlider.MinValueDefined](IBindingFloatSlider.MinValueDefined.htm)
 имеет значение True. При изменении
 значения свойства MinValue свойству
 [IBindingFloatSlider.MinValueDefined](IBindingFloatSlider.MinValueDefined.htm)
 автоматически присваивается значение True.


## Пример


Использование свойства приведено в примере для [IBindingFloatSlider.MaxValue](IBindingFloatSlider.MaxValue.htm).


См. также:


[IBindingFloatSlider](IBindingFloatSlider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

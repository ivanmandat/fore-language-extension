# IBindingDecimalSlider.MinValue

IBindingDecimalSlider.MinValue
-


# IBindingDecimalSlider.MinValue


## Синтаксис


MinValue: Decimal;


## Описание


Свойство MinValue определяет
 значение параметра «MINVAL» в
 [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «MINVAL» определяет
 минимальное значение ползунка. Минимальное значение должно быть меньше
 максимального значения, заданного в свойстве [IBindingDecimalSlider.MinValue](IBindingDecimalSlider.MinValue.htm).


Значение свойства MinValue учитывается,
 если свойство [IBindingDecimalSlider.MinValueDefined](IBindingDecimalSlider.MinValueDefined.htm)
 имеет значение True. При изменении
 значения свойства MinValue свойству
 [IBindingDecimalSlider.MinValueDefined](IBindingDecimalSlider.MinValueDefined.htm)
 автоматически присваивается значение True.


## Пример


Использование свойства приведено в примере для [IBindingDecimalSlider.MaxValue](IBindingDecimalSlider.MaxValue.htm).


См. также:


[IBindingDecimalSlider](IBindingDecimalSlider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

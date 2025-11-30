# IBindingDimCombo.DimensionKey

IBindingDimCombo.DimensionKey
-


# IBindingDimCombo.DimensionKey


## Синтаксис


DimensionKey: Integer;


## Описание


Свойство DimensionKey определяет
 значение параметра «DIM_KEY» в
 [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «DIM_KEY» определяет
 ключ измерения, для которого создается редактор значения. Указываемое
 измерение будет управлять определенной координатой вычисляемой точки.


Свойство DimensionKey задается
 в комбинации со свойствами [IBindingDimCombo.DataSourceKey](IBindingDimCombo.DataSourceKey.htm)
 и [IBindingDimCombo.PointKey](IBindingDimCombo.PointKey.htm).


Свойство DimensionKey доступно
 для использования, если свойству [IBindingDimCombo.DimensionKeyDefined](ibindingdimcombo.dimensionkeydefined.htm)
 установлено значение True. При
 изменении свойства DimensionKey
 свойству [IBindingDimCombo.DimensionKeyDefined](ibindingdimcombo.dimensionkeydefined.htm)
 автоматически устанавливается значение True.


## Пример


Пример использования приведен в описании свойства [IBindingDimCombo.DataSourceKey](IBindingDimCombo.DataSourceKey.htm).


См. также:


[IBindingDimCombo](ibindingdimcombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IBindingDimCombo.PointKey

IBindingDimCombo.PointKey
-


# IBindingDimCombo.PointKey


## Синтаксис


PointKey: Integer;


## Описание


Свойство PointKey определяет
 значение параметра «PT_KEY» в
 [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «PT_KEY» определяет
 ключ вычисляемой точки, созданной для источника данных.


Свойство PointKey задается в
 комбинации со свойствами [IBindingDimCombo.DataSourceKey](IBindingDimCombo.DataSourceKey.htm)
 и [IBindingDimCombo.DimensionKey](IBindingDimCombo.DimensionKey.htm).


Свойство PointKey доступно для
 использования, если свойству [IBindingDimCombo.PointKeyDefined](ibindingdimcombo.pointkeydefined.htm)
 установлено значение True. При
 изменении свойства PointKey свойству
 [IBindingDimCombo.PointKeyDefined](ibindingdimcombo.pointkeydefined.htm)
 автоматически устанавливается значение True.


## Пример


Пример использования приведен в описании свойства [IBindingDimCombo.DataSourceKey](IBindingDimCombo.DataSourceKey.htm).


См. также:


[IBindingDimCombo](ibindingdimcombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IPrxOpenObjectDimAttributeParamControl

IPrxOpenObjectDimAttributeParamControl
-


# IPrxOpenObjectDimAttributeParamControl


Сборка: Report;


## Описание


Интерфейс IPrxOpenObjectDimAttributeParamControl
 содержит свойства для настройки управления параметром открываемого объекта
 с помощью значения атрибута измерения.


## Иерархия наследования


           [IPrxOpenObjectParamControl](../IPrxOpenObjectParamControl/IPrxOpenObjectParamControl.htm)


           IPrxOpenObjectDimAttributeParamControl


## Комментарии


Для получения настроек приведите значение свойства [IPrxOpenObjectParam.Control](../IPrxOpenObjectParam/IPrxOpenObjectParam.Control.htm)
 к интерфейсу IPrxOpenObjectDimAttributeParamControl. Актуально, если свойство
 [IPrxOpenObjectParam.Type](../IPrxOpenObjectParam/IPrxOpenObjectParam.Type.htm)
 имеет значение [PrxOpenObjectParamType.DimensionAttribute](../../Enums/PrxOpenObjectParamType.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attribute](IPrxOpenObjectDimAttributeParamControl.Attribute.htm)
		 Свойство Attribute
		 определяет идентификатор атрибута, значения которого будут передаваться
		 в открываемый объект.


		 ![](../../Property_Image.gif)
		 [CheckTable](IPrxOpenObjectDimAttributeParamControl.CheckTable.htm)
		 Свойство устарело, оставлено для совместимости.


		 ![](../../Property_Image.gif)
		 [DimId](IPrxOpenObjectDimAttributeParamControl.DimId.htm)
		 Свойство DimId определяет
		 идентификатор измерения, из которого будут браться значения атрибутов.


		 ![](../../Property_Image.gif)
		 [GridId](IPrxOpenObjectDimAttributeParamControl.GridId.htm)
		 Свойство устарело, оставлено для совместимости.


		 ![](../../Property_Image.gif)
		 [SelectionType](IPrxOpenObjectDimAttributeParamControl.SelectionType.htm)
		 Свойство SelectionType
		 определяет тип отметки, в соответствии с которой будут переданы
		 значения атрибута в параметра открываемого объекта.


## Свойства, унаследованные от [IPrxOpenObjectParamControl](../IPrxOpenObjectParamControl/IPrxOpenObjectParamControl.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Value](../IPrxOpenObjectParamControl/IPrxOpenObjectParamControl.Value.htm)
		 Свойство Value возвращает
		 значение, которое будет передано в параметр открываемого объекта.


См. также:


[Интерфейсы
 сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMsModelCoordAttributes

IMsModelCoordAttributes
-


# IMsModelCoordAttributes


Сборка: Ms;


## Описание


Интерфейс IMsModelCoordAttributes
 предназначен для настройки текущей координаты с цепочкой атрибутов.


## Иерархия наследования


           [IMsModelAttributesChain](../IMsModelAttributesChain/IMsModelAttributesChain.htm)


           IMsModelCoordAttributes


## Комментарии


Текущая координата определяется в источнике [Stub](IMsModelCoordAttributes.Stub.htm)
 по его измерению, указанному в свойстве [Dimension](IMsModelCoordAttributes.Dimension.htm).


В качестве значения координаты будет передаваться значение атрибутов
 измерения [Dimension](IMsModelCoordAttributes.Dimension.htm),
 добавленные в коллекцию [Attributes](../IMsModelAttributesChain/IMsModelAttributesChain.Attributes.htm).


Координата с цепочкой атрибутов используется при настройке периодов
 в свойствах [IMsDatePeriod.StartCoord](../IMsDatePeriod/IMsDatePeriod.StartCoord.htm)
 и [IMsDatePeriod.EndCoord](../IMsDatePeriod/IMsDatePeriod.EndCoord.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Dimension](IMsModelCoordAttributes.Dimension.htm)
		 Свойство Dimension
		 определяет измерение источника, по атрибутам которого будет формироваться
		 значение координаты.


		 ![](../../Property_Image.gif)
		 [Stub](IMsModelCoordAttributes.Stub.htm)
		 Свойство Stub определяет
		 источник, в котором формируются координаты.


## Свойства, унаследованные от [IMsModelAttributesChain](../IMsModelAttributesChain/IMsModelAttributesChain.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attributes](../IMsModelAttributesChain/IMsModelAttributesChain.Attributes.htm)
		 Свойство Attributes
		 определяет коллекцию атрибутов, по которым будет формироваться
		 значение.


## Методы, унаследованные от [IMsModelAttributesChain](../IMsModelAttributesChain/IMsModelAttributesChain.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ClearAttributes](../IMsModelAttributesChain/IMsModelAttributesChain.ClearAttributes.htm)


		 Метод ClearAttributes
		 сбрасывает набор используемых атрибутов.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

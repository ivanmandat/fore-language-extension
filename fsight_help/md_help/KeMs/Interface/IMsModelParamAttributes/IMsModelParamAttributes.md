# IMsModelParamAttributes

IMsModelParamAttributes
-


# IMsModelParamAttributes


Сборка: Ms;


## Описание


Интерфейс IMsModelParamAttributes
 предназначен для настройки привязки к параметру.


## Иерархия наследования


           [IMsModelAttributesChain](../IMsModelAttributesChain/IMsModelAttributesChain.htm)


           IMsModelParamAttributes


## Комментарии


Для привязки к параметру определите свойство [Parameter](IMsModelParamAttributes.Parameter.htm).
 Если параметр связан со справочником и используется для передачи отметки,
 то определите свойство [Attributes](../IMsModelAttributesChain/IMsModelAttributesChain.Attributes.htm),
 задайте в нем список атрибутов, значения которых будут формировать конечное
 значение параметра.


Привязка к параметру используется при настройке периодов в свойствах
 [IMsDatePeriod.StartParam](../IMsDatePeriod/IMsDatePeriod.StartParam.htm)/[IMsDatePeriod.EndParam](../IMsDatePeriod/IMsDatePeriod.EndParam.htm),
 [IMsModelPeriod.IdentificationStartDateParam](../IMsModelPeriod/IMsModelPeriod.IdentificationStartDateParam.htm)/[IMsModelPeriod.IdentificationEndDateParam](../IMsModelPeriod/IMsModelPeriod.IdentificationEndDateParam.htm)
 и [IMsModelPeriod.ForecastStartDateParam](../IMsModelPeriod/IMsModelPeriod.ForecastStartDateParam.htm)/[IMsModelPeriod.ForecastEndDateParam](../IMsModelPeriod/IMsModelPeriod.ForecastEndDateParam.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Parameter](IMsModelParamAttributes.Parameter.htm)
		 Свойство Parameter
		 определяет параметр, для которого необходимо настроить коллекцию
		 атрибутов.


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

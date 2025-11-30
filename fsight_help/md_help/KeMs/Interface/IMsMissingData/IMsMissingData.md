# IMsMissingData

IMsMissingData
-


# IMsMissingData


## Описание


Интерфейс IMsMissingData определяет
 параметры метода обработки пропусков.


## Комментарии


Чтобы задать параметры метода обработки пропусков приведите базовый
 интерфейс [IMissingData](StatLib.chm::/Interface/IMissingData/IMissingData.htm)
 к интерфейсу IMsMissingData.


Базовый интерфейс можно получить от свойств, возвращающих параметры
 обработки пропусков для различных методов расчета. Например: [IMsHodrickPrescottFilterTransform.MissingData](../IMsHodrickPrescottFilterTransform/IMsHodrickPrescottFilterTransform.MissingData.htm),
 [IMsLRXFilterTransform.MissingData](../IMsLRXFilterTransform/IMsLRXFilterTransform.MissingData.htm),
 [IMsCensus2Transform.MissingData](../IMsCensus2Transform/IMsCensus2Transform.MissingData.htm)
 и т.д.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [SpecifiedTerm](IMsMissingData.SpecifiedTerm.htm)
		 Свойство SpecifiedTerm
		 определяет ряд, используемый в обработке пропусков.


## Свойства, унаследованные от [IMissingData](StatLib.chm::/Interface/IMissingData/IMissingData.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Method](StatLib.chm::/Interface/IMissingData/IMissingData.Method.htm)
		 Свойство Method
		 определяет метод обработки пропусков (пустых значений ряда).


		 ![](../../Sub_Image.gif)
		 [MethodParameter](StatLib.chm::/Interface/IMissingData/IMissingData.MethodParameter.htm)
		 Свойство MethodParameter
		 определяет дополнительный параметр для метода обработки пропусков
		 «Среднее по N соседним точкам».


		 ![](../../Sub_Image.gif)
		 [SpecifiedValue](StatLib.chm::/Interface/IMissingData/IMissingData.SpecifiedValue.htm)
		 Свойство SpecifiedValue
		 определяет дополнительный параметр для метода обработки пропусков
		 «Указанное значение».


		 ![](../../Sub_Image.gif)
		 [SpecifiedVector](StatLib.chm::/Interface/IMissingData/IMissingData.SpecifiedVector.htm)
		 Свойство SpecifiedVector
		 определяет дополнительный параметр для методов обработки пропусков
		 «По шаблону» и «Значениями заданного ряда».


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

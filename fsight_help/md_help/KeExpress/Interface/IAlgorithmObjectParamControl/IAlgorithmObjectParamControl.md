# IAlgorithmObjectParamControl

IAlgorithmObjectParamControl
-


# IAlgorithmObjectParamControl


Сборка: Express;


## Описание


Интерфейс IAlgorithmObjectParamControl
 содержит свойства для настройки управления параметром алгоритма с помощью
 параметра текущего объекта.


## Иерархия наследования


           [IAlgorithmParamControl](../IAlgorithmParamControl/IAlgorithmParamControl.htm)


           IAlgorithmObjectParamControl


## Комментарии


Для получения настроек приведите значение свойства [IAlgorithmParam.Control](../IAlgorithmParam/IAlgorithmParam.Control.htm)
 к интерфейсу IAlgorithmObjectParamControl. Актуально, если свойство [IAlgorithmParam.Type](../IAlgorithmParam/IAlgorithmParam.Type.htm)
 имеет значение [AlgorithmParamType.ObjectParam](../../Enums/AlgorithmParamType.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AttributeId](IAlgorithmObjectParamControl.AttributeId.htm)
		 Свойство AttributeId
		 определяет идентификатор атрибута, значения которого будут передаваться
		 в параметр алгоритма расчёта.


		 ![](../../Property_Image.gif)
		 [Param](IAlgorithmObjectParamControl.Param.htm)
		 Свойство Param определяет
		 параметр текущего объекта, значения которого будут передаваться
		 в параметр алгоритма расчёта.


		 ![](../../Property_Image.gif)
		 [SelectionType](IAlgorithmObjectParamControl.SelectionType.htm)
		 Свойство SelectionType
		 определяет тип отметки, передаваемой в параметр алгоритма расчёта.


## Свойства, унаследованные от [IAlgorithmParamControl](../IAlgorithmParamControl/IAlgorithmParamControl.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [DimSchema](../IAlgorithmParamControl/IAlgorithmParamControl.DimSchema.htm)
		 Свойство DimSchema
		 определяет схему отметки, которая будет применяться для формирования
		 отметки.


		 ![](../../Property_Image.gif)
		 [DimSchemaByKey](../IAlgorithmParamControl/IAlgorithmParamControl.DimSchemaByKey.htm)
		 Свойство DimSchemaByKey
		 определяет ключ схемы отметки, которая будет применяться для формирования
		 отметки.


		 ![](../../Property_Image.gif)
		 [LinkedDimension](../IAlgorithmParamControl/IAlgorithmParamControl.LinkedDimension.htm)
		 Свойство LinkedDimension
		 возвращает описание справочника, который используется для определения
		 значения параметра алгоритма.


		 ![](../../Property_Image.gif)
		 [Value](../IAlgorithmParamControl/IAlgorithmParamControl.Value.htm)
		 Свойство Value возвращает
		 значение, которое будет передано в параметр алгоритма расчёта.


См. также:


[Интерфейсы
 сборки Express](../KeExpress_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

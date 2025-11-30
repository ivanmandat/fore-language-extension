# CubeLoadClearMode

CubeLoadClearMode
-


# CubeLoadClearMode


## Описание


Перечисление CubeLoadClearMode
 используется для определения режима обновления, очистки или экспорта существующей
 базы данных временных рядов.


Используется следующими свойствами и методами:


	- [ICubeMetaExporter.ExportMode](../Interface/ICubeMetaExporter/ICubeMetaExporter.ExportMode.htm);


	- [ICubeMetaLoader.LoadMode](../Interface/ICubeMetaLoader/ICubeMetaLoader.LoadMode.htm);


	- [ICubeMetaUpdateEx.UpdateMode](../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.UpdateMode.htm);


	- [IExportRequestParams.ExportMode](../Interface/IExportRequestParams/IExportRequestParams.ExportMode.htm);


	- [IImportRequestProviderParams.LoadMode](../Interface/IImportRequestProviderParams/IImportRequestProviderParams.LoadMode.htm);


	- [IRubricatorInstance.Clear](../Interface/IRubricatorInstance/IRubricatorInstance.Clear.htm);


	- [IRubricatorInstance.ClearEx](../Interface/IRubricatorInstance/IRubricatorInstance.ClearEx.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Default_. Режим обновления
		 по умолчанию.


		 1
		 MetadataOnly. Только
		 метаданные рядов.


		 2
		 DataOnly. Только данные
		 рядов.


		 3
		 DataAndMetadata. Данные
		 и метаданные рядов.


## Комментарии


В зависимости от того, для каких целей применяется перечисление, существуют
 различные особенности и ограничения:


Режим CubeLoadClearMode.Default_ может использоваться только
 при копировании или импорте данных в БД временных рядов. При этом изменение
 данных будет производиться в соответствии с параметрами, которые заданы
 для соответствующего объекта копирования/импорта.


Режим CubeLoadClearMode.MetadataOnly:


	- при [импорте](../Interface/ICubeMetaLoader/ICubeMetaLoader.LoadMode.htm)
	 и [копировании](../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.UpdateMode.htm): для существующих
	 рядов будут обновлены значения по тем атрибутам, по которым настроена
	 связь. Единицы измерения обновлены не будут. Для созданных рядов будут
	 заполнены связанные атрибуты, динамика и мнемоника ряда, групповые
	 атрибуты, которые наследуются из группы. Если какой-либо несвязанный
	 атрибут должен иметь обязательное значение, то при создании нового
	 ряда будет сгенерирована ошибка. Также, в зависимости от значений
	 флага OverWriteWholeFactorValues
	 для импорта, и [ForceEmptyValues](../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.ForceEmptyValues.htm)
	 для копирования, возможны следующие варианты:


	-


		- True. У существующего
		 ряда значения связанных атрибутов будут очищены для всего ряда;


		- False. В приёмник
		 будут переноситься значения связанных атрибутов по тем точкам
		 ряда, по которым имеются непустые значения в источнике;


	- при [очистке](../Interface/IRubricatorInstance/IRubricatorInstance.Clear.htm):
	 для рядов будут сброшены значения указанных атрибутов показателей
	 и наблюдений, если это возможно. Единицы измерения и значения в точках
	 для рядов не сбрасываются;


	- при экспорте: экспортируются
	 только атрибуты уровня наблюдения, значения точек экспортируются как
	 пустые.


Режим CubeLoadClearMode.DataOnly:


	- при [импорте](../Interface/ICubeMetaLoader/ICubeMetaLoader.LoadMode.htm)
	 и [копировании](../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.UpdateMode.htm): Для существующих
	 рядов будут обновлены значения в точках ряда и единицы измерения.
	 Для созданных рядов будут заполнены связанные атрибуты, динамика,
	 единицы измерения и мнемоника ряда, групповые атрибуты, которые наследуются
	 из группы. Атрибуты наблюдений для нового ряда будут иметь пустое
	 значение. Если какой-либо несвязанный атрибут должен иметь обязательное
	 значение, то при создании нового ряда будет сгенерирована ошибка.
	 Также, в зависимости от значений флага OverWriteWholeFactorValues
	 для импорта, и [ForceEmptyValues](../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.ForceEmptyValues.htm)
	 для копирования, возможны следующие варианты:


	-


		- True. У существующего
		 ряда значения в точках будут очищены для всего ряда;


		- False. В приёмник
		 будут переноситься только те значения точек ряда, по которым имеются
		 непустые значения в источнике.


	- при [очистке](../Interface/IRubricatorInstance/IRubricatorInstance.Clear.htm):
	 для рядов будут сброшены значения в точках ряда. Единицы измерения
	 сброшены не будут;


	- при экспорте: экспортируются
	 только значения точек, значения атрибутов наблюдений экспортируются
	 как пустые.


Режим
 CubeLoadClearMode.DataAndMetadata:


	- при [импорте](../Interface/ICubeMetaLoader/ICubeMetaLoader.LoadMode.htm),
	 [копировании](../Interface/ICubeMetaUpdateEx/ICubeMetaUpdateEx.UpdateMode.htm) и [очистке](../Interface/IRubricatorInstance/IRubricatorInstance.Clear.htm): учитывает все выше указанные
	 ограничения. Все действия производятся сначала с данными, затем с
	 метаданными;


	- при экспорте. экспортируются
	 значения точек и значения атрибутов наблюдений.


См. также:


[Перечисления
 сборки Cubes](KeCubes_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

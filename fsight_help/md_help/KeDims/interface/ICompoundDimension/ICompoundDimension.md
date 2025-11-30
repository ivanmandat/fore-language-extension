# ICompoundDimension

ICompoundDimension
-


# ICompoundDimension


## Описание


Интерфейс ICompoundDimension
 содержит свойства и методы для работы с составным справочником.


## Комментарии


В экспресс-отчетах, основанных на нескольких источниках данных, формируются
 составные справочники. Для всех справочников, которые есть во всех источниках,
 будут сформированы составные справочники с идентификаторами следующего
 формата: <id измерения> + «_COMPOUND». Справочники, которые отсутствуют
 хотя бы в одном источнике, будут выделены в отдельный составной справочник.
 Идентификатор этого составного справочника - «FACTS_COMPOUND». Он представляет
 собой коллекцию составных справочников, каждый из которых в свою очередь
 построен на частных справочниках отдельного источника данных.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CustomContainer](ICompoundDimension.CustomContainer.htm)
		 Свойство CustomContainer
		 определяет источники построения составного справочника по
		 измерению фактов куба.


		 ![](../../Property_Image.gif)
		 [Sources](ICompoundDimension.Sources.htm)
		 Свойство Sources возвращает
		 источники составного справочника.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [InitCustomContainer](ICompoundDimension.InitCustomContainer.htm)
		 Метод InitCustomContainer
		 обновляет или создает измерение фактов на основе [виртуального
		 куба](UiNavObj.chm::/Cube/CreateCube/Master_Virtual_Cube/UiMd_Cube_CreateCube_Master_Virtual.htm).


		 ![](../../Sub_Image.gif)
		 [SaveCustomDependencies](ICompoundDimension.SaveCustomDependencies.htm)
		 Метод SaveCustomDependencies
		 сохраняет зависимости от элементов, использованных для построения
		 составного справочника по измерению фактов куба.


См. также:


[Интерфейсы сборки Dimensions](../KeDims_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

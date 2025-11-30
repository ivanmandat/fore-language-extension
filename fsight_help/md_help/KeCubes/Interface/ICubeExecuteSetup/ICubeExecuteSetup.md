# ICubeExecuteSetup

ICubeExecuteSetup
-


# ICubeExecuteSetup


Сборка: Cubes;


## Описание


Интерфейс ICubeExecuteSetup
 содержит свойства и методы для настройки параметров измерений, которые
 применяются при расчёте куба.


## Иерархия наследования


ICubeExecuteSetup


## Комментарии


Для настройки параметров измерений приведите коллекцию измерений, описываемую
 интерфейсом [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm), к
 интерфейсу ICubeExecuteSetup.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](ICubeExecuteSetup.Count.htm)
		 Свойство Count возвращает
		 количество параметров расчета.


		 ![](../../Property_Image.gif)
		 [Filter](ICubeExecuteSetup.Filter.htm)
		 Свойство Filter возвращает
		 коллекцию фильтров по измерениям, которые будут применяться при
		 расчете куба.


		 ![](../../Property_Image.gif)
		 [Item](ICubeExecuteSetup.Item.htm)
		 Свойство Item возвращает
		 параметр расчета по его индексу.


		 ![](../../Property_Image.gif)
		 [RequiredDataRights](ICubeExecuteSetup.RequiredDataRights.htm)
		 Свойство RequiredDataRights
		 определяет права доступа на данные, которые будут возвращены после
		 расчета.


		 ![](../../Property_Image.gif)
		 [StrictRequiredItems](ICubeExecuteSetup.StrictRequiredItems.htm)
		 Свойство StrictRequiredItems
		 определяет, извлекать ли данные только по обязательным изменениям.


		 ![](../../Property_Image.gif)
		 [UseDataTypes](ICubeExecuteSetup.UseDataTypes.htm)
		 Свойство UseDataTypes
		 определяет, будет ли при расчёте добавляться информация о том,
		 каким образом сформированы данные в ячейке.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [FindById](ICubeExecuteSetup.FindById.htm)
		 Метод FindById осуществляет
		 поиск параметров по идентификатору измерения.


		 ![](../../Sub_Image.gif)
		 [FindByKey](ICubeExecuteSetup.FindByKey.htm)
		 Метод FindByKey осуществляет
		 поиск параметров по ключу измерения.


		 ![](../../Sub_Image.gif)
		 [FindByTag](ICubeExecuteSetup.FindByTag.htm)
		 Метод FindByTag осуществляет
		 поиск параметров по типу измерения.


См. также:


[Интерфейсы сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

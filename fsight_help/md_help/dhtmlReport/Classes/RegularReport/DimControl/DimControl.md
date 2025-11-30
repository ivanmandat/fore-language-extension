# DimControl

DimControl
-


# DimControl


Пространство имен:PP.Prx;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[PP.Mb.Descriptor](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.htm)


[PP.Mb.Object](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.htm)


[PP.Prx.Control](../Control/Control.htm)


PP.Prx.DimControl


## Описание


Класс DimControl реализует модель
 элемента управления измерением регламентного отчета.


## Синтаксис


PP.initClass(PP.Prx.DimControl, [PP.Prx.Control](../Control/Control.htm),
 "PP.Prx.DimControl");


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [DimModel](DimControl.DimModel.htm)
		 Свойство DimModel определяет
		 модель справочника.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [getIsContentChanged](DimControl.getIsContentChanged.htm)
		 Метод getIsContentChanged
		 возвращает признак изменения содержимого справочника элемента
		 управления.


		 ![](../../../Sub_Image.gif)
		 [getIsStructureChanged](DimControl.getIsStructureChanged.htm)
		 Метод getIsStructureChanged
		 возвращает признак изменения структуры справочника элемента управления.


		 ![](../../../Sub_Image.gif)
		 [getMultiSelect](DimControl.getMultiSelect.htm)
		 Метод getMultiSelect
		 определяет возможность множественной отметки в элементе управления.


		 ![](../../../Sub_Image.gif)
		 [getSelectionMode](DimControl.getSelectionMode.htm)
		 Метод getSelectionMode
		 возвращает метод отметки в элементе управления.


## Свойства, унаследованные от класса [Control](../Control/Control.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [ControlModel](dhtmlReport.chm::/classes/regularreport/control/control.controlmodel.htm)
		 Свойство ControlModel
		 определяет модель элемента управления.


		 ![](../../../Property_Image.gif)
		 [ControlType](dhtmlReport.chm::/classes/regularreport/control/control.controltype.htm)
		 Свойство ControlType
		 определяет тип элемента управления.


		 ![](../../../Property_Image.gif)
		 [VisibleForReport](dhtmlReport.chm::/classes/regularreport/control/control.visibleforreport.htm)
		 Свойство VisibleForReport
		 определяет, отображается ли элемент управления для всех листов
		 отчета.


		 ![](../../../Property_Image.gif)
		 [VisibleOnSheets](dhtmlReport.chm::/classes/regularreport/control/control.visibleonsheets.htm)
		 Свойство VisibleOnSheets
		 задает массив ключей листов отчета, на которых отображается элемент
		 управления.


## Методы, унаследованные от класса [Control](../Control/Control.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [isVisibleOnSheet](dhtmlReport.chm::/classes/regularreport/control/control.isvisibleonsheet.htm)
		 Метод isVisibleOnSheet
		 делает видимым элемент управления на указанном листе отчета.


## Свойства, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Id](dhtmlCommon.chm::/classes\object\object.id.htm)


		 Свойство Id определяет
		 идентификатор объекта репозитория.


## Методы, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [clone](dhtmlCommon.chm::/classes\object\object.clone.htm)
		 Метод clone создает
		 копию объекта.


		 ![](../../../Sub_Image.gif)
		 [dispose](dhtmlCommon.chm::/classes\object\object.dispose.htm)
		 Метод dispose уничтожает
		 компонент.


		 ![](../../../Sub_Image.gif)
		 [getHashCode](dhtmlCommon.chm::/Classes/Object/Object.getHashCode.htm)
		 Метод getHashCode возвращает
		 хеш-код объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод getId возвращает
		 идентификатор объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getSettings](dhtmlCommon.chm::/Classes/Object/Object.getSettings.htm)
		 Метод getSettings возвращает
		 настройки объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getTypeName](dhtmlCommon.chm::/classes\object\object.gettypename.htm)
		 Метод getTypeName возвращает
		 имя типа объекта без пространства имен, к которому он принадлежит.


		 ![](../../../Sub_Image.gif)
		 [isEqual](dhtmlCommon.chm::/Classes/Object/Object.isEqual.htm)
		 Метод isEqual определяет,
		 равен ли заданный объект текущему объекту репозитория.


		 ![](../../../Sub_Image.gif)
		 [isLive](dhtmlCommon.chm::/Classes/Object/Object.isLive.htm)
		 Метод isLive определяет
		 действительность объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [removeAllEvents](dhtmlCommon.chm::/Classes/Object/Object.removeAllEvents.htm)
		 Метод removeAllEvents
		 удаляет все обработчики событий объекта по заданному контексту.


		 ![](../../../Sub_Image.gif)
		 [setId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод setId определяет
		 идентификатор объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [setSettings](dhtmlCommon.chm::/Classes/Object/Object.setSettings.htm)
		 Метод setSettings задает
		 настройки объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [defineProps](dhtmlCommon.chm::/Classes/Object/Object.defineProps.htm)
		 Метод defineProps создает
		 методы get и set из массива имен для указанного класса.


		 ![](../../../Sub_Image.gif)
		 [keys](dhtmlCommon.chm::/Classes/Object/Object.keys.htm)
		 Метод keys возвращает
		 массив названий методов и свойств для указанного объекта.


См. также:


[PP.Prx](../../PP.Prx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

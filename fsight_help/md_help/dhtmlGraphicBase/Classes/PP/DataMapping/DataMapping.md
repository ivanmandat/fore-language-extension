# DataMapping

DataMapping
-


# DataMapping


Пространство имен: PP


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


DataMapping


## Описание


Класс DataMapping содержит настройки
 сопоставления данных из источника элементам визуализатора.


## Синтаксис


PP.initClass(PP.DataMapping, [PP.Object](dhtmlCommon.chm::/Classes/object/object.htm),
 "PP.DataMapping");


## Конструктор


				 Имя конструктора
				 Краткое описание


				 ![](../../../sub_image.gif)
				 [DataMapping](dhtmlGraphicBase.chm::/Classes/PP/DataMapping/Constructor_DataMapping.htm)
				 Конструктор DataMapping
				 создает экземпляр класса DataMapping.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [AutoSetup](dhtmlGraphicBase.chm::/Classes/PP/DataMapping/DataMapping.AutoSetup.htm)
		 Свойство AutoSetup
		 определяет признак автоматического сопоставления данных.


		 ![](../../../Property_Image.gif)
		 [DataSource](dhtmlGraphicBase.chm::/Classes/PP/DataMapping/DataMapping.DataSource.htm)
		 Свойство DataSource
		 определяет источник данных для объекта настроек сопоставления
		 данных.


		 ![](../../../Property_Image.gif)
		 [DataTransformer](dhtmlGraphicBase.chm::/Classes/PP/DataMapping/DataMapping.DataTransformer.htm)
		 Свойство DataTransformer
		 определяет преобразователь данных.


		 ![](../../../Property_Image.gif)
		 [DimAttributeId](dhtmlGraphicBase.chm::/Classes/PP/DataMapping/DataMapping.DimAttributeId.htm)
		 Свойство DimAttributeId
		 определяет идентификатор атрибута измерения, по которому выбираются
		 данные из источника данных.


		 ![](../../../Property_Image.gif)
		 [Format](dhtmlGraphicBase.chm::/Classes/PP/DataMapping/DataMapping.Format.htm)
		 Свойство Format определяет
		 формат отображения числовых данных в пузырьковой диаграмме.


		 ![](../../../Property_Image.gif)
		 [Index](dhtmlGraphicBase.chm::/Classes/PP/DataMapping/DataMapping.Index.htm)
		 Свойство Index определяет
		 индекс, по которому необходимо получать данные из каждого измерения.


		 ![](../../../Property_Image.gif)
		 [Scale](dhtmlGraphicBase.chm::/Classes/PP/DataMapping/DataMapping.Scale.htm)
		 Свойство Scale определяет
		 шкалу сопоставления данных в источнике.


		 ![](../../../Property_Image.gif)
		 [Type](dhtmlGraphicBase.chm::/Classes/PP/DataMapping/DataMapping.Type.htm)
		 Свойство Type определяет
		 тип преобразования данных, сопоставляемых элементам визуализатора.


		 ![](../../../Property_Image.gif)
		 [Value](dhtmlGraphicBase.chm::/Classes/PP/DataMapping/DataMapping.Value.htm)
		 Свойство Value определяет
		 значение, соответствующее всем элементам визуализатора.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [getData](dhtmlGraphicBase.chm::/Classes/PP/DataMapping/DataMapping.getData.htm)
		 Метод getData возвращает
		 элемент шкалы или преобразованных данных по идентификатору ряда.


		 ![](../../../sub_image.gif)
		 [getDataSourceItem](dhtmlGraphicBase.chm::/Classes/PP/DataMapping/DataMapping.getDataSourceItem.htm)
		 Метод getDataSourceItem
		 возвращает данные из источника по идентификатору ряда.


		 ![](../../../sub_image.gif)
		 [setup](dhtmlGraphicBase.chm::/Classes/PP/DataMapping/DataMapping.setup.htm)
		 Метод setup устанавливает
		 настройки отображения данных и индекс, по которому необходимо
		 получать данные из каждого измерения.


		 ![](../../../sub_image.gif)
		 [transformDataSourceItem](dhtmlGraphicBase.chm::/Classes/PP/DataMapping/DataMapping.transformDataSourceItem.htm)
		 Метод transformDataSourceItem
		 преобразует данные из источника в элемент шкалы, обработанные
		 данные или константу в зависимости от [типа
		 преобразования данных](dhtmlGraphicBase.chm::/Classes/PP/DataMapping/DataMapping.Type.htm).


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


		 ![](../../../sub_image.gif)
		 [clone](dhtmlCommon.chm::/classes\object\object.clone.htm)
		 Метод clone создает
		 копию объекта.


		 ![](../../../sub_image.gif)
		 [dispose](dhtmlCommon.chm::/classes\object\object.dispose.htm)
		 Метод dispose уничтожает
		 компонент.


		 ![](../../../sub_image.gif)
		 [getHashCode](dhtmlCommon.chm::/Classes/Object/Object.getHashCode.htm)
		 Метод getHashCode возвращает
		 хеш-код объекта репозитория.


		 ![](../../../sub_image.gif)
		 [getId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод getId возвращает
		 идентификатор объекта репозитория.


		 ![](../../../sub_image.gif)
		 [getSettings](dhtmlCommon.chm::/Classes/Object/Object.getSettings.htm)
		 Метод getSettings возвращает
		 настройки объекта репозитория.


		 ![](../../../sub_image.gif)
		 [getTypeName](dhtmlCommon.chm::/classes\object\object.gettypename.htm)
		 Метод getTypeName возвращает
		 имя типа объекта без пространства имен, к которому он принадлежит.


		 ![](../../../sub_image.gif)
		 [isEqual](dhtmlCommon.chm::/Classes/Object/Object.isEqual.htm)
		 Метод isEqual определяет,
		 равен ли заданный объект текущему объекту репозитория.


		 ![](../../../sub_image.gif)
		 [isLive](dhtmlCommon.chm::/Classes/Object/Object.isLive.htm)
		 Метод isLive определяет
		 действительность объекта репозитория.


		 ![](../../../sub_image.gif)
		 [removeAllEvents](dhtmlCommon.chm::/Classes/Object/Object.removeAllEvents.htm)
		 Метод removeAllEvents
		 удаляет все обработчики событий объекта по заданному контексту.


		 ![](../../../sub_image.gif)
		 [setId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод setId определяет
		 идентификатор объекта репозитория.


		 ![](../../../sub_image.gif)
		 [setSettings](dhtmlCommon.chm::/Classes/Object/Object.setSettings.htm)
		 Метод setSettings задает
		 настройки объекта репозитория.


		 ![](../../../sub_image.gif)
		 [defineProps](dhtmlCommon.chm::/Classes/Object/Object.defineProps.htm)
		 Метод defineProps создает
		 методы get и set из массива имен для указанного класса.


		 ![](../../../sub_image.gif)
		 [keys](dhtmlCommon.chm::/Classes/Object/Object.keys.htm)
		 Метод keys возвращает
		 массив названий методов и свойств для указанного объекта.


См. также:


[PP](dhtmlCommon.chm::/Classes/PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# ICubeLoaderFromSource.LoadDuplicates

ICubeLoaderFromSource.LoadDuplicates
-


# ICubeLoaderFromSource.LoadDuplicates


## Синтаксис


		LoadDuplicates: Boolean;


## Описание


Свойство LoadDuplicates определяет,
 будут ли загружаться дублирующиеся записи при загрузке данных.


## Комментарии


Допустимые значения:


	- True. Загружать дублирующиеся
	 записи. Для корректной обработки дублирующихся записей в дальнейшем
	 рекомендуется настроить [агрегацию](../ICubeLoaderFactBinding/ICubeLoaderFactBinding.CubeFactAggregationType.htm).


	- False. Значение по умолчанию.
	 Не загружать дублирующиеся записи, загружать только первую запись.


## Пример


Пример использования приведён в описании [ICubeLoaderDimensionBinding.Fields](../ICubeLoaderDimensionBinding/ICubeLoaderDimensionBinding.Fields.htm).


См. также:


[ICubeLoaderFromSource](ICubeLoaderFromSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

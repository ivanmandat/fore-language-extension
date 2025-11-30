# IMetabaseUpdateDataObjectNode.AllowExistingRubricatorUpdate

IMetabaseUpdateDataObjectNode.AllowExistingRubricatorUpdate
-


# IMetabaseUpdateDataObjectNode.AllowExistingRubricatorUpdate


## Синтаксис


AllowExistingRubricatorUpdate: Boolean;


## Описание


Свойство AllowExistingRubricatorUpdate
 определяет, разрешено ли обновление базы данных временных рядов как объекта
 репозитория.


## Комментарии


Допустимые значения:


	- True. Кроме обновления
	 структуры базы данных временных рядов и данных рядов также будут обновлены:
	 наименование и идентификатор базы в репозитории, настройки календаря,
	 родительская папка, если база данных временных рядов была перемещена.


	- False. Значение
	 по умолчанию. Обновляется структура базы данных временных рядов и
	 данные рядов.


## Пример


Использование свойства приведено в примере для [IMetabaseUpdateDataObjectNode.BatchMode](IMetabaseUpdateDataObjectNode.BatchMode.htm).


См. также:


[IMetabaseUpdateDataObjectNode](IMetabaseUpdateDataObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

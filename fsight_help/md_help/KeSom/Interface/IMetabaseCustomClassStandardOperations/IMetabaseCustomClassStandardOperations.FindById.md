# IMetabaseCustomClassStandardOperations.FindById

IMetabaseCustomClassStandardOperations.FindById
-


# IMetabaseCustomClassStandardOperations.FindById


## Синтаксис


FindById(Id: String): [IMetabaseCustomClassOperation](../IMetabaseCustomClassOperation/IMetabaseCustomClassOperation.htm);


## Параметры


Id. Идентификатор стандартной
 операции.


## Описание


Метод FindById осуществляет
 поиск по идентификатору и возвращает стандартную операцию в случае удачного
 поиска.


## Комментарии


Объекты поддерживают следующие стандартные операции:


		 Наименование операция
		 Идентификатор метода


		 Открыть
		 OPEN (OPENWITHPARAMS
		 для обработки открытия параметрических объектов)


		 Редактировать
		 EDIT (EDITWITHPARAMS
		 для обработки редактирования параметрических объектов)


		 Удалить
		 DELETE


		 Вставить
		 PASTE


Метод возвращает значение Null,
 если операция с указанным идентификатором не найдена.


См. также:


[IMetabaseCustomClassStandardOperations](IMetabaseCustomClassStandardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

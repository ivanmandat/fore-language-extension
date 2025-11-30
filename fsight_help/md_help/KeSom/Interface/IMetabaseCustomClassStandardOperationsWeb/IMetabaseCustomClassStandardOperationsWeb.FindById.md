# IMetabaseCustomClassStandardOperationsWeb.FindById

IMetabaseCustomClassStandardOperationsWeb.FindById
-


# IMetabaseCustomClassStandardOperationsWeb.FindById


## Синтаксис


FindById(Id: String): [IMetabaseCustomClassOperationWeb](../IMetabaseCustomClassOperationWeb/IMetabaseCustomClassOperationWeb.htm);


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


		 Создать
		 CREATEOBJECT


		 Открыть
		 OPEN


		 Редактировать
		 EDIT


		 Удалить
		 DELETE


		 Вставить
		 PASTE


Метод возвращает значение Null,
 если операция с указанным идентификатором не найдена.


## Пример


Использование свойства приведено в примере для [IMetabaseCustomClass.OperationsWeb](../IMetabaseCustomClass/IMetabaseCustomClass.OperationsWeb.htm).


См. также:


[IMetabaseCustomClassStandardOperationsWeb](IMetabaseCustomClassStandardOperationsWeb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

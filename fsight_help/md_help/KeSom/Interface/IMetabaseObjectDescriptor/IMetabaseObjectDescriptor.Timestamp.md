# IMetabaseObjectDescriptor.Timestamp

IMetabaseObjectDescriptor.Timestamp
-


# IMetabaseObjectDescriptor.Timestamp


## Синтаксис


Timestamp: DateTime;


## Описание


Свойство Timestamp возвращает
 дату и время последнего сохранения объекта репозитория.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором FOLDER1.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Desc: IMetabaseObjectDescriptor;

	    Date: Datetime;

	Begin

	    MB := MetabaseClass.Active;

	    Desc := Mb.ItemById("FOLDER1");

	    Date := Desc.Timestamp;

	End Sub UserProc;


После выполнения примера в переменной Date будет содержаться дата и
 время последнего сохранения объекта базы метаданных.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

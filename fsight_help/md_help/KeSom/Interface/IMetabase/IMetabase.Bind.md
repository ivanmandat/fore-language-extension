# IMetabase.Bind

IMetabase.Bind
-


# IMetabase.Bind


## Синтаксис


Bind(Key: Integer): [IMetabaseObject](../IMetabaseObject/IMetabaseObject.htm);


## Параметры


Key. Ключ
 объекта репозитория.


## Описание


Метод Bind возвращает структуру
 объекта репозитория, ключ которого передается посредством входного параметра.


## Комментарии


Метод возвращает значение Null,
 если объект с указанным ключом не существует.


## Пример


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Name: String;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.Bind(345);

	    Name := MObj.Name;

	End Sub UserProc;


После выполнения примера в переменной Name будет содержаться наименование
 объекта репозитория, ключ которого 345.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

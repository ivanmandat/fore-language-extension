# IMetabaseObjectDescriptor.IconIndex

IMetabaseObjectDescriptor.IconIndex
-


# IMetabaseObjectDescriptor.IconIndex


## Синтаксис


IconIndex: Integer;


## Описание


Свойство IconIndex возвращает
 индекс пиктограммы объекта репозитория.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором ObjTest.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Desc: IMetabaseObjectDescriptor;

	    s: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Desc := Mb.ItemById("ObjTest");

	    s := Desc.IconIndex;

	End Sub UserProc;


После выполнения примера в переменной «S» будет содержаться индекс пиктограммы
 объекта репозитория с указанным идентификатором.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

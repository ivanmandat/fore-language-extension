# IMetabaseObjectDescriptor.Id

IMetabaseObjectDescriptor.Id
-


# IMetabaseObjectDescriptor.Id


## Синтаксис


Id: String;


## Описание


Свойство Id определяет идентификатор
 объекта репозитория.


Примечание.
 При изменении идентификатора осуществляется проверка на соответствие установленному
 [формату
 идентификаторов](../IMetabasePolicy/IMetabasePolicy.ObjectsIdFormat.htm).


## Пример


Для выполнения примера предполагается наличие объекта с ключом 143198.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Desc: IMetabaseObjectDescriptor;

	    S: String;

	Begin

	    MB := MetabaseClass.Active;

	    Desc := Mb.Item(143198);

	    S := Desc.Id;

	End Sub UserProc;


После выполнения примера в переменной «S» будет содержаться идентификатор
 объекта с указанным ключом.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

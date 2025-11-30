# IMetabaseObjectDescriptor.Parent

IMetabaseObjectDescriptor.Parent
-


# IMetabaseObjectDescriptor.Parent


## Синтаксис


Parent: [IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm);


## Описание


Свойство Parent возвращает описание
 объекта-владельца.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором «obj111».


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Desc, ParentDesc: IMetabaseObjectDescriptor;

		Begin

		    MB := MetabaseClass.Active;

		    Desc := Mb.ItemById("obj111");

		    ParentDesc := Desc.Parent;

		End Sub UserProc;


После выполнения примера в переменной «ParentDesc» будет содержаться
 описание объекта-владельца объекта с идентификатором «obj111».


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMetabaseObjectDescriptor.Name

IMetabaseObjectDescriptor.Name
-


# IMetabaseObjectDescriptor.Name


## Синтаксис


Name: String;


## Описание


Свойство Name определяет наименование
 объекта для [текущего
 языка репозитория](../IMetabase/IMetabase.CurrentLocale.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором ObjTest.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Obj: IMetabaseObjectDescriptor;

	Begin

	    MB := MetabaseClass.Active;

	    Obj := MB.ItemById("ObjTest").EditDescriptor;

	    Obj.Name := "Мультиязычный объект";

	    Obj.SaveDescriptor;

	End Sub UserProc;


После выполнения примера будет изменено наименование объекта для текущего
 языка репозитория.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMetabaseObjectDescriptor.Names

IMetabaseObjectDescriptor.Names
-


# IMetabaseObjectDescriptor.Names


## Синтаксис


Names: [IMetabaseObjectNames](../IMetabaseObjectNames/IMetabaseObjectNames.htm);


## Описание


Свойство Names возвращает коллекцию
 наименований объекта для разных языков.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором ObjTest, у которого существует наименование для испанского
 языка (Аргентина).


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    Obj: IMetabaseObjectDescriptor;

	    NamesL: IMetabaseObjectNames;

	    NameLocale: IMetabaseObjectName;

	Begin

	    Obj := MetabaseClass.Active.ItemById("ObjTest").EditDescriptor;

	    NamesL := Obj.Names;

	    NameLocale := NamesL.FindByLocale(LocaleCodeID.Spanish_Argentina);

	    NameLocale.Name := "Escenario";

	    Obj.SaveDescriptor

	End Sub UserProc;


После выполнения примера для объекта будет изменено название для испанского
 языка.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

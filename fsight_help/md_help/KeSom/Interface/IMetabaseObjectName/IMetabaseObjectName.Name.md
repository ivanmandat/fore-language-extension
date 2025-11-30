# IMetabaseObjectName.Name

IMetabaseObjectName.Name
-


# IMetabaseObjectName.Name


## Синтаксис


Name: String;


## Описание


Свойство Name определяет наименование
 объекта.


## Пример


В рассматриваемом примере предполагается наличие в репозитории объекта
 с идентификатором Object, у которого существует наименование для испанского
 языка (Аргентина).


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    Obj: IMetabaseObjectDescriptor;

	    NamesL: IMetabaseObjectNames;

	    NameLocale: IMetabaseObjectName;

	Begin

	    Obj := MetabaseClass.Active.ItemById("Object").EditDescriptor;

	    NamesL := Obj.Names;

	    NameLocale := NamesL.FindByLocale(LocaleCodeID.Spanish_Argentina);

	    NameLocale.Name := "Escenario";

	    Obj.SaveDescriptor

	End Sub UserProc;


После выполнения примера для объекта будет изменено название для испанского
 языка.


См. также:


[IMetabaseObjectName](IMetabaseObjectName.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

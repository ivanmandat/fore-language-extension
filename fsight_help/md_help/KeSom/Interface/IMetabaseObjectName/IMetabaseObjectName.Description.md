# IMetabaseObjectName.Description

IMetabaseObjectName.Description
-


# IMetabaseObjectName.Description


## Синтаксис


Description: String;


## Описание


Свойство Description определяет
 примечание для наименования объекта.


## Пример


В рассматриваемом примере предполагается наличие в репозитории объекта
 с идентификатором Object.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    Obj: IMetabaseObjectDescriptor;

	    NamesL: IMetabaseObjectNames;

	    NameLocale: IMetabaseObjectName;

	Begin

	    Obj := MetabaseClass.Active.ItemById("Object").EditDescriptor;

	    NamesL := Obj.Names;

	    NameLocale := NamesL.Add(LocaleCodeID.Spanish_Argentina);

	    NameLocale.Name := "Escenario";

	    NameLocale.Description := "Создано 29.10.2009";

	    Obj.SaveDescriptor

	End Sub UserProc;


После выполнения примера для объекта будет добавлено название для испанского
 языка.


См. также:


[IMetabaseObjectName](IMetabaseObjectName.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

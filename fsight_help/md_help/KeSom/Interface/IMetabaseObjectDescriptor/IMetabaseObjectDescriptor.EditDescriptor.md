# IMetabaseObjectDescriptor.EditDescriptor

IMetabaseObjectDescriptor.EditDescriptor
-


# IMetabaseObjectDescriptor.EditDescriptor


## Синтаксис


EditDescriptor: [IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm);


## Описание


Метод EditDescriptor осуществляет
 редактирование описания объекта репозитория.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором TSDB.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDesc: IMetabaseObjectDescriptor;

	Begin

	    MB := MetabaseClass.Active;

	    MDesc := MB.ItemById("TSDB");

	    MDesc := MDesc.EditDescriptor;

	    MDesc.Description := "Устаревшая версия объекта " + MDesc.Id;

	    MDesc.Id := MDesc.Id + "_Old";

	    MDesc.Name := MDesc.Name + " (Устаревшая версия)";

	    MDesc.SaveDescriptor;

	End Sub UserProc;


После выполнения примера будет изменено описание указанного объекта.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)
 | [IMetabaseObjectDescriptor.SaveDescriptor](IMetabaseObjectDescriptor.SaveDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

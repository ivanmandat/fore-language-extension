# IMetabaseObjectDescriptor.SaveDescriptor

IMetabaseObjectDescriptor.SaveDescriptor
-


# IMetabaseObjectDescriptor.SaveDescriptor


## Синтаксис


		SaveDescriptor;


## Описание


Метод SaveDescriptor сохраняет
 изменения описания объекта репозитория.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором «QUERY_1».


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MDesc: IMetabaseObjectDescriptor;

		Begin

		    MB := MetabaseClass.Active;

		    MDesc := MB.ItemById("QUERY_1");

		    MDesc := MDesc.EditDescriptor;

		    MDesc.Description := "Устаревшая версия объекта " + MDesc.Id;

		    MDesc.Id := MDesc.Id + "_Old";

		    MDesc.Name := MDesc.Name + " (Устаревшая версия)";

		    MDesc.SaveDescriptor;

		End Sub UserProc;


После выполнения примера будет изменено описание указанного объекта.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


[IMetabaseObjectDescriptor.EditDescriptor](IMetabaseObjectDescriptor.EditDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMetabaseUpdate.ApplyOptions

IMetabaseUpdate.ApplyOptions
-


# IMetabaseUpdate.ApplyOptions


## Синтаксис


		ApplyOptions:
		 [MetabaseUpdateApplyOptions](../../Enums/MetabaseUpdateApplyOptions.htm);


## Описание


Свойство ApplyOptions определяет
 настройки применения обновления.


## Пример


Для выполнения примера в репозитории предполагается наличие таблицы
 с идентификатором TABLE.


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    U: IMetabaseUpdate;

		    N: IMetabaseUpdateObjectNode;

		Begin

		    Mb := MetabaseClass.Active;

		    U := Mb.CreateUpdate;

		    U.ApplyOptions := MetabaseUpdateApplyOptions.ReopenMetabase Or MetabaseUpdateApplyOptions.FlushCache;

		    N := U.RootFolder.Add(MetabaseUpdateNodeType.Object) As IMetabaseUpdateObjectNode;

		    N.Object := Mb.ItemById("TABLE");

		    U.SaveToFileNF("c:\Update.pefx");

		End Sub UserProc;


В результате выполнения примера будет создано обновление с заданными
 параметрами: после обновления будет переоткрыт репозиторий и очищен кеш.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

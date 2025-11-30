# IMetabase.MoveObject

IMetabase.MoveObject
-


# IMetabase.MoveObject


## Синтаксис


MoveObject(Info: [IMetabaseObjectCopyInfo](../IMetabaseObjectCopyInfo/IMetabaseObjectCopyInfo.htm));


## Параметры


Info. Информация
 для осуществления перемещения объекта.


## Описание


Метод MoveObject осуществляет
 перемещение указанного объекта в указанное место.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором TestObj.


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CInfo: IMetabaseObjectCopyInfo;

	Begin

	    MB := MetabaseClass.Active;

	    CInfo := MB.CreateCopyInfo;

	    CInfo.Destination := MB.Root;

	    CInfo.Source := MB.ItemById("TestObj");

	    MB.MoveObject(CInfo);

	End Sub UserProc;


После выполнения примера произойдет перемещение объекта с указанным
 идентификатором в корневой каталог.


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

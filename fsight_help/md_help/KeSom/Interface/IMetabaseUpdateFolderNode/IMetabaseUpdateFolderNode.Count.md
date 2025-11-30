# IMetabaseUpdateFolderNode.Count

IMetabaseUpdateFolderNode.Count
-


# IMetabaseUpdateFolderNode.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 объектов обновления.


## Пример


Для выполнения примера в корневом каталоге диска C предполагается наличие
 файла обновления update.pefx.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Update: IMetabaseUpdate;

	    UFN: IMetabaseUpdateFolderNode;

	Begin

	    MB := MetabaseClass.Active;

	    Update := Mb.CreateUpdate;

	    Update.LoadFromFileNF("c:\update.pefx");

	    UFN := Update.RootFolder;

	    Debug.WriteLine(UFN.Count);

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведено количество
 объектов, содержащихся в указанном файле обновления.


См. также:


[IMetabaseUpdateFolderNode](IMetabaseUpdateFolderNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

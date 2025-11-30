# IMetabaseUpdateFolderNode.Sort

IMetabaseUpdateFolderNode.Sort
-


# IMetabaseUpdateFolderNode.Sort


## Синтаксис


Sort(Mode: [UpdateSortMode](../../Enums/UpdateSortMode.htm));


## Параметры


Mode. Вид
 сортировки объектов.


## Описание


Метод Sort осуществляет сортировку
 объектов обновления.


## Пример


Для выполнения примера в корневом каталоге диска C предполагается наличие
 файла обновления Object.pefx.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Update: IMetabaseUpdate;

	    UFN: IMetabaseUpdateFolderNode;

	Begin

	    MB := MetabaseClass.Active;

	    Update := MB.CreateUpdate;

	    Update.LoadFromFileNF("C:\Object.pefx");

	    UFN := Update.RootFolder;

	    UFN.Sort(UpdateSortMode.ByType);

	    Update.SaveToFileNF("C:\Object.pefx");

	End Sub UserProc;


После выполнения примера будет осуществлена сортировка объектов, включенных
 в указанный файл обновления. Объекты будут отсортированы по типу.


См. также:


[IMetabaseUpdateFolderNode](IMetabaseUpdateFolderNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

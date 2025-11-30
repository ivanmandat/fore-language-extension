# IMetabaseUpdateNode.NodeType

IMetabaseUpdateNode.NodeType
-


# IMetabaseUpdateNode.NodeType


## Синтаксис


NodeType: [MetabaseUpdateNodeType](../../Enums/MetabaseUpdateNodeType.htm);


## Описание


Свойство NodeType возвращает
 тип объекта обновления.


## Пример


Для выполнения примера предполагается наличие файла обновления c:\update.pef.


Добавьте ссылки на системную сборку Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Update: IMetabaseUpdate;

	    UFN: IMetabaseUpdateFolderNode;

	    UN: IMetabaseUpdateNode;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Update := Mb.CreateUpdate;

	    Update.LoadFromFile("c:\update.pef");

	    UFN := Update.RootFolder;

	    UN := UFN.Item(0);

	    i := UN.NodeType;

	End Sub UserProc;


В результате выполнения примера в переменной «i» будет содержаться тип
 первого объекта обновления, преобразованный к целочисленному виду. Обновление
 загружается из файла update.pef.


См. также:


[IMetabaseUpdateNode](IMetabaseUpdateNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IDimBlockInstance.Elements

IDimBlockInstance.Elements
-


# IDimBlockInstance.Elements


## Синтаксис


Elements: [IDimElementArray](../IDimElementArray/IDimElementArray.htm);


## Описание


Свойство Elements возвращает
 объект, содержащий массив элементов блока справочника.


## Пример


Для выполнения примера предполагается наличие в репозитории справочника
 с идентификатором "D_TO".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dimen: IDimInstance;

	    Blocks: IDimBlocksInstance;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dimen := MB.ItemById("D_TO").Open(Null) As IDimInstance;

	    Blocks := Dimen.Blocks;

	    For i := 0 To Blocks.Count - 1 Do

	        Debug.WriteLine(Blocks.Item(i).Elements.Count);

	    End For;

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведено количество
 элементов, содержащихся в каждом из блоков справочника.


См. также:


[IDimBlockInstance](IDimBlockInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

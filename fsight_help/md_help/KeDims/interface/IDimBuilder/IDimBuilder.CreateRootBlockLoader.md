# IDimBuilder.CreateRootBlockLoader

IDimBuilder.CreateRootBlockLoader
-


# IDimBuilder.CreateRootBlockLoader


## Синтаксис


CreateRootBlockLoader(RootBlockKey: Integer): [IDimBlockLoader](../IDimBlockLoader/IDimBlockLoader.htm);


## Параметры


RootBlockKey — ключ
 корневого блока вычисляемого справочника.


## Описание


Метод CreateRootBlockLoader
 создает загрузчик элементов верхнего уровня.


## Пример


	Sub Makros_1(User: IUserDimension; Builder: IDimBuilder; Par: IMetabaseObjectParamValues);

	Var

	    Mb: IMetabase;

	    Db: IDatabaseInstance;

	    Comm: IDalCommand;

	    Cur: IDalCursor;

	    Fields: IDalCursorFields;

	    DimBlock: IUserDimBlock;

	    BlockRoot, Block: IDimBlockLoader;

	    i: integer;

	Begin

	    Mb:=MetabaseClass.Active;

	    Db:=MB.ItemById("S_X_D").Open(Null) As IDatabaseInstance;

	    Comm:=Db.Connection.CreateCommand("Select id, name, orders, parent_id From T_SEP Order by parent_id");

	    Cur:=Comm.CreateCursor;

	    Fields:=Cur.Fields;

	    DimBlock:=User.Blocks.Item(0);

	    BlockRoot:=Builder.CreateRootBlockLoader(DimBlock.Key);

	    Block:=Builder.CreateBlockLoader(DimBlock.Key,DimBlock.Key);

	    While Not cur.Eof Do

	        If (Fields.Item(3).Value As Double) = 0 Then

	            i:= BlockRoot.AddRow;

	            BlockRoot.Value(i, 0) := Fields.Item(0).Value As Double;

	            BlockRoot.Value(i, 1) := Fields.Item(1).Value As String;

	            BlockRoot.Value(i, 2) := Fields.Item(2).Value As Double;

	        Else

	            i:= Block.AddRow;

	            Block.Value(i, 0) := Fields.Item(0).Value As Double;

	            Block.Value(i, 1) := Fields.Item(1).Value As String;

	            Block.Value(i, 2) := Fields.Item(2).Value As Double;

	            Block.Value(i, 3) := Fields.Item(3).Value As Double;

	        End If;

	        Cur.Next;

	    End While;

	End Sub Makros_1;


Данный пример является макросом для вычисляемого справочника. Справочник
 строится на базе таблицы «T_SEP», хранящейся в базе данных «S_X_D».


См. также:


[IDimBuilder](IDimBuilder.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

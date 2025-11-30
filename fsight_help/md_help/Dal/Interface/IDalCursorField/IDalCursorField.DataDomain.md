# IDalCursorField.DataDomain

IDalCursorField.DataDomain
-


# IDalCursorField.DataDomain


## Синтаксис


DataDomain: [DbDataDomain](../../Enums/DbDataDomain.htm);


## Описание


Свойство DataDomain возвращает
 тип данных поля, если оно предназначено для хранения многобайтовой информации.


## Комментарии


Поле может хранить многобайтовую информацию, если свойство [GetDbDataType](IDalCursorField.GetDbDataType.htm) возвращает значение [DbDataType.String](../../Enums/DbDataType.htm)
 или [DbDataType.Blob](../../Enums/DbDataType.htm).
 Принцип работы с многобайтовой информацией описан в базе знаний в статье
 «[Работа
 с полями, имеющими пользовательский тип данных](KnowledgeBase.chm::/01_Fore/KnowledgeBase_KB000031.htm)».


Также, если поле таблицы имеет [тип](IDalCursorField.GetDbDataType.htm)
 - [DbDataType.DateTime](Dal.chm::/Enums/DbDataType.htm)
 и поле может хранить дату и время с точностью до миллисекунд, то, свойство
 DataDomain вернёт значение [DbDataDomain.MSec](Dal.chm::/Enums/DbDataDomain.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории БД с идентификатором
 «DB». В данной БД хранятся данные таблицы с физическим именем «TBL».


Добавьте ссылки на системные сборки: Dal, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DB: IDatabaseInstance;

	    Com: IDalCommand;

	    Cur: IDalCursor;

	    Fields: IDalCursorFields;

	    Field: IDalCursorField;

	Begin

	    MB := MetabaseClass.Active;

	    DB := MB.ItemById("DB").Open(Null) As IDatabaseInstance;

	    Com := DB.Connection.CreateCommand("Select * From TBL");

	    Cur := Com.CreateCursor;

	    Fields := Cur.Fields;

	    For Each Field In Fields Do

	        If (Field.GetDbDataType = DbDataType.Blob) Then

	            Select Case Field.DataDomain

	                Case DbDataDomain.None: Debug.WriteLine("Поле " + Field.Name + " хранит двоичные данные");

	                Case DbDataDomain.Memo: Debug.WriteLine("Поле " + Field.Name + " хранит текстовые данные");

	                Case DbDataDomain.Raw: Debug.WriteLine("Поле " + Field.Name + " хранит пользовательские данные");

	            End Select;

	        Elseif Field.GetDbDataType = DbDataType.DateTime Then

	            If Field.DataDomain = DbDataDomain.MSec Then

	                Debug.WriteLine("Поле " + Field.Name + " хранит дату и время с точностью до миллисекунд");

	            End If;

	        End If;

	    End For;

	    Cur.Close;

	    Com.Close;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация о
 полях таблицы, которые предназначены для хранения многобайтовой информации.


См. также:


[IDalCursorField](IDalCursorField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

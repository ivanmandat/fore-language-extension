# IDatasetModelField.DataDomain

IDatasetModelField.DataDomain
-


# IDatasetModelField.DataDomain


## Синтаксис


DataDomain: [DbDataDomain](Dal.chm::/Enums/DbDataDomain.htm);


## Описание


Свойство DataDomain определяет
 тип данных поля источника данных, если оно предназначено для хранения
 многобайтовой информации.


## Комментарии


Поле может хранить многобайтовую информацию, если свойство [DataType](IDatasetModelField.DataType.htm) имеет значение [DbDataType.String](Dal.chm::/Enums/DbDataType.htm)
 или [DbDataType.Blob](Dal.chm::/Enums/DbDataType.htm).


Также, если поле таблицы имеет [тип](IDatasetModelField.DataType.htm)
 - [DbDataType.DateTime](Dal.chm::/Enums/DbDataType.htm)
 и поле может хранить дату и время с точностью до миллисекунд, то, свойство
 DataDomain вернёт значение [DbDataDomain.MSec](Dal.chm::/Enums/DbDataDomain.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы
 с идентификатором TBL.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DSInst: IDatasetInstance;

	    DSModel: IDatasetModel;

	    Fields: IDatasetModelFields;

	    Field: IDatasetModelField;

	Begin

	    MB := MetabaseClass.Active;

	    DSInst := MB.ItemById("TBL").Open(Null) As IDatasetInstance;

	    DSModel := DSInst.Dataset;

	    Fields := DSModel.Fields;

	    For Each Field In Fields Do

	        If (Field.DataType = DbDataType.Blob) Then

	            Select Case Field.DataDomain

	                Case DbDataDomain.None: Debug.WriteLine("Поле " + Field.Name + " хранит двоичные данные");

	                Case DbDataDomain.Memo: Debug.WriteLine("Поле " + Field.Name + " хранит текстовые данные");

	                Case DbDataDomain.Raw: Debug.WriteLine("Поле " + Field.Name + " хранит пользовательские данные");

	            End Select;

	        Elseif Field.DataType = DbDataType.DateTime Then

	            If Field.DataDomain = DbDataDomain.MSec Then

	                Debug.WriteLine("Поле " + Field.Name + " хранит дату и время с точностью до миллисекунд");

	            End If;

	        End If;

	    End For;

	    DSInst.Close;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена информация о
 полях таблицы, которые предназначены для хранения многобайтовой информации.


См. также:


[IDatasetModelField](IDatasetModelField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

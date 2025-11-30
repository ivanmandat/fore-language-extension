# ITableField.DataDomain

ITableField.DataDomain
-


# ITableField.DataDomain


## Синтаксис


		DataDomain: [DbDataDomain](Dal.chm::/Enums/DbDataDomain.htm);


## Описание


Свойство DataDomain определяет
 тип данных поля таблицы, если оно предназначено для хранения многобайтовой
 информации.


## Комментарии


Поле может хранить многобайтовую информацию, если свойство [DataType](ITableField.DataType.htm) имеет значение [DbDataType.String](Dal.chm::/Enums/DbDataType.htm)
 или [DbDataType.Blob](Dal.chm::/Enums/DbDataType.htm).
 Принцип работы с многобайтовой информацией описан в базе знаний в статье
 «[Работа
 с полями, имеющими пользовательский тип данных](KnowledgeBase.chm::/01_Fore/KnowledgeBase_KB000031.htm)».


Также, если поле таблицы имеет [тип](ITableField.DataType.htm)
 - [DbDataType.DateTime](Dal.chm::/Enums/DbDataType.htm),
 то, указав в свойстве DataDomain
 значение [DbDataDomain.MSec](Dal.chm::/Enums/DbDataDomain.htm),
 можно указать необходимость хранить значения даты и времени с точностью
 до миллисекунд.


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы
 с идентификатором «TBL».


Добавьте ссылки на системные сборки: Dal, Db, Metabase.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Table: ITable;

		    Fields: ITableFields;

		    Field: ITableField;

		Begin

		    MB := MetabaseClass.Active;

		    Table := MB.ItemById("TBL").Bind As ITable;

		    Fields := Table.Fields;

		    For Each Field In Fields Do

		        If Field.DataType = DbDataType.Blob Then

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

		End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведена информация
 о полях таблицы, которые предназначены для хранения многобайтовой информации.


См. также:


[ITableField](ITableField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

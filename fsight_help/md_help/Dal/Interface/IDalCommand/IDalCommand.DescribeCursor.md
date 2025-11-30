# IDalCommand.DescribeCursor

IDalCommand.DescribeCursor
-


# IDalCommand.DescribeCursor


## Синтаксис


DescribeCursor: [IDalCursor](../IDalCursor/IDalCursor.htm);


## Описание


Метод DescribeCursor создает курсор, содержащий только поля данных. Если текст SQL-запроса к БД содержит ошибку, то возникает исключительная ситуация. Данный метод можно использовать для контроля корректности запросов.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 Memo с идентификаторами Button1 и Memo1 соответственно. Также в репозитории
 должна присутствовать база данных с идентификатором «DB». Пример является
 обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Collections, Dal, Db, ExtCtrls,
 Forms, Metabase, Ui.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    CrInf: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    Query: IQuery;

	    DB_obj: IMetabaseObject;

	    DB_Inst: IDatabaseInstance;

	    DalComm: IDalCommand;

	    sql: String;

	    DalCur: IDalCursor;

	Begin

	    MB := MetabaseClass.Active;

	    CrInf := Mb.CreateCreateInfo;

	    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_QUERY;

	    CrInf.Id := "NEW_QUERY";

	    CrInf.Name := "NEW_QUERY";

	    CrInf.Parent := Mb.Root;

	    MObj := Mb.CreateObject(CrInf).Edit;

	    Query := MObj As IQuery;

	    DB_obj := Mb.ItemById("DB").Bind;

	    Query.Database := DB_obj As IDatabase;

	    sql := Memo1.Text;

	    Query.Sql := sql;

	    DB_Inst := DB_obj.Open(Null) As IDatabaseInstance;

	    DalComm := DB_Inst.Connection.CreateCommand(sql);

	    Try

	        DalCur := DalComm.DescribeCursor;

	        MObj.Save;

	        WinApplication.InformationBox("Запрос создан");

	        DalCur.Close;

	        Except

	            WinApplication.InformationBox("Текст запроса содержит ошибку");

	    End Try;

	    DalComm.Close;

	End Sub Button1OnClick;


После выполнения примера, в репозитории будет создан запрос с текстом,
 указанным в компоненте «Memo1». Если текст запроса содержит ошибку, то
 будет выведено информационное сообщение об этом, запрос создан не будет.


См. также:


[IDalCommand](IDalCommand.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

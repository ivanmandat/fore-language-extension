# ISecurityConnection.Discover

ISecurityConnection.Discover
-


# ISecurityConnection.Discover


## Синтаксис


		Discover(SystemDictionary: [DalSystemDictionary](Dal.chm::/Enums/DalSystemDictionary.htm);
		 Filter: String): [IDalCursor](Dal.chm::/Interface/IDalCursor/IDalCursor.htm);


## Параметры


SystemDictionary. Тип курсора,
 который необходимо получить;


Filter. Фильтр, который применяется
 к курсору.


## Описание


Метод Discover возвращает выбранный
 тип курсора, содержащий информацию об объектах в СУБД репозитория.


## Комментарии


Если драйвер не поддерживает соответствующий SystemDictionary,
 будет возвращаться Null.


## Пример


Для выполнения примера подключите к модулю системные сборки Metabase
 и Dal.


					Sub Main;

		Var

		    Mb: IMetabase;

		    Connect: ISecurityConnection;

		    Cursor: IDalCursor;

		    CFields: IDalCursorFields;

		    CField: IDalCursorField;

		    i: Integer;

		Begin

		    Mb := MetabaseClass.Active;

		    Connect := Mb.LogonSession.PrimaryConnection;

		    Cursor := Connect.Discover(DalSystemDictionary.Tables, "");

		    CFields := Cursor.Fields;

		    While Not Cursor.Eof Do

		        For i := 0 To CFields.Count - 1 Do

		            CField := CFields.Item(i);

		            Debug.WriteLine(CField.Name + " | " + CField.Value);

		        End For;

		        Cursor.Next;

		    End While;

		End Sub Main;


После выполнения примера в окно консоли будет выведена системная информация
 о таблицах, хранящихся в текущем репозитории.


См. также:


[ISecurityConnection](ISecurityConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

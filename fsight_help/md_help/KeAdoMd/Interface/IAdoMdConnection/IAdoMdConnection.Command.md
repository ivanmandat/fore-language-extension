# IAdoMdConnection.Command

IAdoMdConnection.Command
-


# IAdoMdConnection.Command


## Синтаксис


Command(Text: String): [IDalCommand](Dal.chm::/Interface/IDalCommand/IDalCommand.htm);


## Параметры


Text.
 Текст MDX-запроса, c которым будет инициализирован объект.


## Описание


Метод Command инициализирует
 объект, позволяющий работать с сервером с помощью MDX-запросов.


## Пример


Для выполнения примера предполагается наличие в репозитории каталога
 ADOMD с идентификатором «ADOMDTest».


			Sub UserProc;

Var

    MB: IMetabase;

    Catalog: IAdoMdCatalogInstance;

    Connection: IAdoMdConnection;

    sMDX: String;

    Command: IDalCommand;

    ResultCursor: IDalCursor;

    CFields: IDalCursorFields;

    CField: IDalCursorField;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Catalog := MB.ItemById("ADOMDTest").Open(Null) As IAdoMdCatalogInstance;

    Connection := Catalog.Connection;

    sMDX := "SELECT ...";

    Command := Connection.Command(sMDX);

    //Выполнение MDX-запроса

    Command.Execute;

    //Получение результата выполнения

    ResultCursor := Command.CreateCursor;

    CFields := ResultCursor.Fields;

    While Not ResultCursor.Eof Do

        For i := 0 To CFields.Count - 1 Do

            CField := CFields.Item(i);

            Debug.WriteLine(CField.Name + " | " + CField.Value);

        End For;

        ResultCursor.Next;

    End While;

End Sub UserProc;


При выполнении примера будет создана команда, позволяющая выполнять
 многомерные запросы. После выполнения запроса будет создан курсор, содержащий
 результат. Полученные результаты будут выведены в консоль среды разработки.


См. также:


[IAdoMdConnection](IAdoMdConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

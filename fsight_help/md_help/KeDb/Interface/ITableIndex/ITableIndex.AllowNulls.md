# ITableIndex.AllowNulls

ITableIndex.AllowNulls
-


# ITableIndex.AllowNulls


## Синтаксис


AllowNulls: Boolean;


## Описание


Свойство AllowNulls определяет,
 допускает ли индекс пустые значения.


## Комментарии


Свойство актуально только для репозиториев, использующих СУБД MS SQL
 Server.


Допустимые значения:


	- True. Индекс допускает
	 пустые значения;


	- False. индекс не допускает
	 пустые значения.


## Пример


Для выполнения примера в репозитории предполагается наличие таблицы
 с идентификатором «T». Добавьте ссылки на системные сборки «Metabase»,
 «Db».


			Sub UserProc;

Var

    MB: IMetabase;

    Table: ITable;

    Inds: ITableIndexes;

    i: Integer;

    Index: ITableIndex;

    s: String;

Begin

    MB := MetabaseClass.Active;

    Table := MB.ItemById("T").Bind As ITable;

    Inds := Table.Indexes;

    For i := 0 To Inds.Count - 1 Do

        Index := Inds.Item(i);

        s := "Индекс '";

        s := s + Index.Id + "' ";

        If Index.AllowNulls Then

            s := s + "допускает пустые значения";

        Else

            s := s + "не допускает пустые значения";

        End If;

        Debug.WriteLine(s);

    End For;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены данные об индексах
 таблицы: могут ли они содержать нулевые значения.


См. также:


[ITableIndex](ITableIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

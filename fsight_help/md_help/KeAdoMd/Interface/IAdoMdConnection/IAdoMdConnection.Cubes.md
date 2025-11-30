# IAdoMdConnection.Cubes

IAdoMdConnection.Cubes
-


# IAdoMdConnection.Cubes


## Синтаксис


Cubes(Cube: String): [IDalCursor](Dal.chm::/Interface/IDalCursor/IDalCursor.htm);


## Параметры


Cube.
 Физическое имя куба.


## Описание


Метод Cubes возвращает курсор,
 содержащий системную информацию о кубе с указанным именем.


## Комментарии


Если параметр Cube не задан,
 то полученный курсор будет содержать информацию обо всех кубах, имеющихся
 в каталоге ADOMD. Для разделения информации по кубам в курсор будет добавляться
 отдельная запись. Первое поле в этой записи не будет иметь наименования,
 в качестве значения поля будет указан номер куба.


## Пример


Для выполнения примера предполагается наличие в репозитории каталога
 ADOMD с идентификатором «ADOMDTest».


			Sub UserProc;

Var

    MB: IMetabase;

    Catalog: IAdoMdCatalogInstance;

    Connection: IAdoMdConnection;

    Cubes: IDalCursor;

    CFields: IDalCursorFields;

    CField: IDalCursorField;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Catalog := MB.ItemById("ADOMDTest").Open(Null) As IAdoMdCatalogInstance;

    Connection := Catalog.Connection;

    Cubes := Connection.Cubes("");

    CFields := Cubes.Fields;

    While Not Cubes.Eof Do

        For i := 0 To CFields.Count - 1 Do

            CField := CFields.Item(i);

            Debug.WriteLine(CField.Name + " | " + CField.Value);

        End For;

        Cubes.Next;

    End While;

End Sub UserProc;


При выполнении примера будет получен курсор, содержащий информацию обо
 всех кубах, имеющихся в каталоге ADOMD. Данная информация будет выведена
 в консоль среды разработки.


См. также:


[IAdoMdConnection](IAdoMdConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

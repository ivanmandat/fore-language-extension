# IAdoMdConnection.CubeDimensions

IAdoMdConnection.CubeDimensions
-


# IAdoMdConnection.CubeDimensions


## Синтаксис


CubeDimensions(Cube: String; Dimension: String):
 [IDalCursor](Dal.chm::/Interface/IDalCursor/IDalCursor.htm);


## Параметры


Cube. Физическое имя куба.


Dimension. Физическое имя измерения
 куба.


## Описание


Метод CubeDimensions возвращает
 курсор, содержащий системную информацию об указанном измерении указанного
 куба.


## Комментарии


Если параметры Cube и Dimension не заданы, то полученный
 курсор будет содержать информацию обо всех измерениях, имеющихся в каталоге
 ADOMD. Если не задан параметр Cube,
 то курсор будет содержать информацию обо всех измерениях с указанным именем,
 имеющихся в каких-либо кубах каталога ADOMD.


Для разделения информации по измерениям в курсор будет добавляться отдельная
 запись. Первое поле в этой записи не будет иметь наименования, в качестве
 значения поля будет указан номер измерения.


## Пример


Для выполнения примера предполагается наличие в репозитории каталога
 ADOMD с идентификатором «ADOMDTest». В данном каталоге имеется куб с физическим
 именем «Test», в структуре этого куба имеется измерение с физическим именем
 «Dim_1».


			Sub UserProc;

Var

    MB: IMetabase;

    Catalog: IAdoMdCatalogInstance;

    Connection: IAdoMdConnection;

    Dim: IDalCursor;

    CFields: IDalCursorFields;

    CField: IDalCursorField;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Catalog := MB.ItemById("ADOMDTest").Open(Null) As IAdoMdCatalogInstance;

    Connection := Catalog.Connection;

    Dim := Connection.CubeDimensions("Test", "TestDim");

    CFields := Dim.Fields;

    While Not Dim.Eof Do

        For i := 0 To CFields.Count - 1 Do

            CField := CFields.Item(i);

            Debug.WriteLine(CField.Name + " | " + CField.Value);

        End For;

        Dim.Next;

    End While;

End Sub UserProc;


При выполнении примера будет получен курсор, содержащий информацию об
 указанном измерении куба ADOMD. Данная информация будет выведена в консоль
 среды разработки.


См. также:


[IAdoMdConnection](IAdoMdConnection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

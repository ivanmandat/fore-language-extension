# IAdoMdCellset.Cells

IAdoMdCellset.Cells
-


# IAdoMdCellset.Cells


## Синтаксис


Cells: [IDalCursor](Dal.chm::/Interface/IDalCursor/IDalCursor.htm);


## Описание


Свойство Cells возвращает курсор,
 содержащий информацию о наборе ячеек со значениями, которые получены в
 результате выполнения MDX-запроса к кубам.


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

    sMDX: String;

    Cellset: IAdoMdCellset;

    CellsCursor: IDalCursor;

    CFields: IDalCursorFields;

    CField: IDalCursorField;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    Catalog := MB.ItemById("ADOMDTest").Open(Null) As IAdoMdCatalogInstance;

    Connection := Catalog.Connection;

    sMDX := "SELECT ...";

    Cellset := Connection.Cellset(sMDX);

    //Курсор

    CellsCursor := Cellset.Cells;

    CFields := CellsCursor.Fields;

    While Not CellsCursor.Eof Do

        For i := 0 To CFields.Count - 1 Do

            CField := CFields.Item(i);

            Debug.WriteLine(CField.Name + " | " + CField.Value);

        End For;

        CellsCursor.Next;

    End While;

End Sub UserProc;


При выполнении примера будет получен курсор со значениями ячеек, которые
 являются результатом выполнения указанного многомерного запроса. Полученные
 результаты будут выведены в консоль среды разработки.


См. также:


[IAdoMdCellset](IAdoMdCellset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

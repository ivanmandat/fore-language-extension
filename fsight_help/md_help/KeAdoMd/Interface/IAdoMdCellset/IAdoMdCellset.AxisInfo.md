# IAdoMdCellset.AxisInfo

IAdoMdCellset.AxisInfo
-


# IAdoMdCellset.AxisInfo


## Синтаксис


AxisInfo: [IAdoMdAxisInfo](../IAdoMdAxisInfo/IAdoMdAxisInfo.htm);


## Описание


Свойство AxisInfo возвращает
 информацию об осях, по которым сформированы [данные](IAdoMdCellset.Cells.htm),
 получены в результате выполнения MDX-запроса.


## Пример


Для выполнения примера предполагается наличие в репозитории каталога
 ADOMD с идентификатором «ADOMDTest».


			Sub UserProc;

Var

    MB: IMetabase;

    Catalog: IAdoMdCatalogInstance;

    Connection: IAdoMdConnection;

    sMDX: String;

    Cellset: IAdoMdCellset;

    AxisInfo: IAdoMdAxisInfo;

    Axis: IAdoMdAxis;

    i, j: Integer;

Begin

    MB := MetabaseClass.Active;

    Catalog := MB.ItemById("ADOMDTest").Open(Null) As IAdoMdCatalogInstance;

    Connection := Catalog.Connection;

    sMDX := "SELECT ...";

    Cellset := Connection.Cellset(sMDX);

    AxisInfo := Cellset.AxisInfo;

    Debug.WriteLine("Количество осей: " + AxisInfo.Count.ToString);

    For i := 0 To AxisInfo.Count - 1 Do

        Debug.WriteLine("Ось: " + i.ToString);

        Axis := AxisInfo.Item(i);

        Debug.WriteLine("Количество измерений: " + Axis.DimCount.ToString);

        For j := 0 To Axis.DimCount - 1 Do

            Debug.Indent;

            Debug.WriteLine("Измерение: " + Axis.DimName(j) + "; (Количество атрибутов: " + Axis.DimCols(j).ToString + ")");

            Debug.Unindent;

        End For;

    End For;

End Sub UserProc;


При выполнении примера будет выполнен многомерный запрос для кубов указанного
 каталога ADOMD. Из результата выполнения будет получена информация об
 осях, по которым сформированы данные. В консоль среды разработки будет
 выведена информация по всем осям: количество и наименования измерений,
 которые использованы для составления координат оси, и количество атрибутов
 каждого измерения, которые описывают каждую координату.


См. также:


[IAdoMdCellset](IAdoMdCellset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

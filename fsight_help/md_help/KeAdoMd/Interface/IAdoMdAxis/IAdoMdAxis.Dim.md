# IAdoMdAxis.Dim

IAdoMdAxis.Dim
-


# IAdoMdAxis.Dim


## Синтаксис


Dim(Index: Integer): [IAdoMdAxisDim](../IAdoMdAxisDim/IAdoMdAxisDim.htm);


## Параметры


Index. Индекс измерения.


## Описание


Свойство Dim возвращает информацию
 об указанном измерении.


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

    Dim: IAdoMdAxisDim;

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

            Dim := Axis.Dim(j);

            Debug.Indent;

            Debug.WriteLine("Измерение: " + Dim.Name + "; (Количество атрибутов: " + Dim.Cols.ToString + ")");

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


[IAdoMdAxis](IAdoMdAxis.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IAdoMdCubeExecutor.OpenCellset

IAdoMdCubeExecutor.OpenCellset
-


# IAdoMdCubeExecutor.OpenCellset


## Синтаксис


OpenCellset: [IAdoMdCellset](../IAdoMdCellset/IAdoMdCellset.htm);


## Описание


Метод OpenCellset возвращает
 аналитические данные, полученные в результате выполнения произвольного
 MDX-запроса к кубу.


## Пример


Для выполнения примера предполагается наличие в репозитории каталога
 ADOMD с идентификатором «ADOMDTest». В каталоге имеется куб ADOMD с идентификатором
 «Cube_1».


			Sub UserProc;

Var

    MB: IMetabase;

    CubInst: ICubeInstance;

    CubDest: ICubeInstanceDestination;

    ExeCub: ICubeInstanceDestinationExecutor;

    ExeAdo: IAdoMdCubeExecutor;

    sMDX: String;

    Cellset: IAdoMdCellset;

    AxisInfo: IAdoMdAxisInfo;

    Axis: IAdoMdAxis;

    Dim: IAdoMdAxisDim;

    i, j: Integer;

Begin

    MB := MetabaseClass.Active;

    //Открываем куб ADOMD

    CubInst := MB.ItemByIdNamespace("Cube_1", MB.GetObjectKeyById("ADOMDTest")).Open(Null) As ICubeInstance;

    CubDest := CubInst.Destinations.DefaultDestination;

    //Создаем вычислитель

    ExeCub := CubDest.CreateExecutor;

    ExeAdo := ExeCub As IAdoMdCubeExecutor;

    //Указываем MDX-запрос

    sMDX := "SELECT ...";

    ExeAdo.MdxQuery := sMdx;

    //Получение аналитических
 данных в соответствии с указанным запросом

    Cellset := ExeAdo.OpenCellset;

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

            Debug.WriteLine("Количество элементов в измерении:" + Dim.Instance.Elements.Count.ToString);

            Debug.Unindent;

        End For;

    End For;

End Sub UserProc;


При выполнении примера будет выполнен многомерный запрос к указанному
 кубу ADOMD. Из результата выполнения будет получена информация об осях,
 по которым сформированы данные. В консоль среды разработки будет выведена
 информация по всем осям: количество и наименования измерений, которые
 использованы для составления координат оси, и количество атрибутов каждого
 измерения, которые описывают каждую координату.


См. также:


[IAdoMdCubeExecutor](IAdoMdCubeExecutor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

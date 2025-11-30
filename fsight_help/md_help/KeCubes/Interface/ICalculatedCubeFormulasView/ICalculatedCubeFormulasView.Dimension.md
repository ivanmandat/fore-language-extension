# ICalculatedCubeFormulasView.Dimension

ICalculatedCubeFormulasView.Dimension
-


# ICalculatedCubeFormulasView.Dimension


## Синтаксис


Dimension(Index: Integer): [IDimensionModel](kedims.chm::/interface/idimensionmodel/idimensionmodel.htm);


## Параметры


Index. Индекс измерения вычисляемого
 куба.


## Описание


Свойство Dimension возвращает
 структуру измерения, индекс которого передается посредством входного параметра.


## Пример


Для выполнения примера в репозитории предполагается наличие вычисляемого
 куба с идентификатором Calc_Cube.


			Sub UserProc;

Var

    MB: IMetabase;

    CubeInst: ICalculatedCubeInstance;

    View: ICalculatedCubeFormulasView;

    Dim: IDimensionModel;

    i, j, Key: Integer;

Begin

    MB := MetabaseClass.Active;

    CubeInst := MB.ItemById("Calc_Cube").Open(Null) As ICalculatedCubeInstance;

    View := CubeInst.View(Null);

    For i := 0 To View.Count - 1 Do

        Dim := View.Dimension(i);

        Key := (Dim As IMetabaseObject).Key;

        View.FormulaNaming(Key) := Dim.Attributes.Id;

        View.ViewNaming(Key) := Dim.Attributes.Id;

    End For;

    For i := 0 To CubeInst.Sources.Count - 1 Do

        View := CubeInst.View(CubeInst.Sources.Item(i));

        For j := 0 To View.Count - 1 Do

            Dim := View.Dimension(j);

            Key := (Dim As IMetabaseObject).Key;

            View.FormulaNaming(Key) := Dim.Attributes.Id;

            View.ViewNaming(Key) := Dim.Attributes.Id;

        End For;

    End For;

    CubeInst.SaveFormulas;

End Sub UserProc;


После выполнения примера, будет настроено отображение элементов измерений
 вычисляемого куба и всех кубов-источников. В измерениях и формулах будут
 отображаться идентификаторы элементов.


См. также:


[ICalculatedCubeFormulasView](ICalculatedCubeFormulasView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

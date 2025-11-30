# ICalculatedCubeInstance.View

ICalculatedCubeInstance.View
-


# ICalculatedCubeInstance.View


## Синтаксис


View(Source: [ICubeInstanceSource](../ICubeInstanceSource/ICubeInstanceSource.htm)):
 [ICalculatedCubeFormulasView](../ICalculatedCubeFormulasView/ICalculatedCubeFormulasView.htm);


## Параметры


Source. Куб, для которого необходимо
 настроить параметры отображения элементов измерений.


## Описание


Свойство View возвращает параметры
 отображения элементов измерений в кубе и в формулах куба.


## Пример


Для выполнения примера, предполагается наличие в репозитории вычисляемого
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


[ICalculatedCubeInstance](ICalculatedCubeInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

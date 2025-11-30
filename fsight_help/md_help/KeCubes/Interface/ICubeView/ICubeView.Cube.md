# ICubeView.Cube

ICubeView.Cube
-


# ICubeView.Cube


## Синтаксис


Cube: [ICubeModelDestination](../ICubeModelDestination/ICubeModelDestination.htm);


## Описание


Свойство Cube определяет исходный
 куб для представления-куба.


## Пример


Для выполнения примера предполагается наличие в репозитории виртуального
 куба с идентификатором ViewCube и куба с идентификатором SourceCube.


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: ICubeModel;

    ViewCube: ICubeView;

    FixInfo: ICubeDimensionFixInfo;

    DimFix: ICubeDimensionFix;

    i, c: Integer;

Begin

    MB := MetabaseClass.Active;

    ViewCube := MB.ItemById("ViewCube").Edit As ICubeView;

    Cube := MB.ItemById("SourceCube").Bind As ICubeModel;

    ViewCube.Cube := Cube.Destinations.DefaultDestination;

    FixInfo := ViewCube.FixInfo;

    c := FixInfo.Count;

    For i := 0 To c - 1 Do

        DimFix := FixInfo.Item(i);

        DimFix.Fixed := True;

        DimFix.Operation := BasicAggregatorOperation.Sum;

        DimFix.Selection.SelectAll;

    End For;

    (ViewCube As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в качестве исходного куба для представления-куба
 будет установлен куб с идентификатором SourceCube. Все измерения куба-источника
 будут зафиксированы.


См. также:


[ICubeView](ICubeView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

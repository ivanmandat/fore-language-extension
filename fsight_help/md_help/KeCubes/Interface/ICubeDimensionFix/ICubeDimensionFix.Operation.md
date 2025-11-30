# ICubeDimensionFix.Operation

ICubeDimensionFix.Operation
-


# ICubeDimensionFix.Operation


## Синтаксис


Operation: [BasicAggregatorOperation](kematrix.chm::/enums/basicaggregatoroperation.htm);


## Описание


Свойство Operation определяет
 метод агрегации применяемый для элементов фиксированного измерения.


## Комментарии


Агрегация осуществляется по элементам, добавленным в отметку в свойстве
 [Selection](ICubeDimensionFix.Selection.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории виртуального
 куба с идентификатором VIEW_CUBE, и куба с идентификатором SourceCube_1.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    Cube: ICubeModel;

    ViewCube: ICubeView;

    DimFix: ICubeDimensionFix;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("VIEW_CUBE").Edit;

    Cube := MB.ItemById("SourceCube_1").Bind As ICubeModel;

    ViewCube := MObj As ICubeView;

    ViewCube.Cube := Cube.Destinations.DefaultDestination;

    For i := 0 To ViewCube.FixInfo.Count - 1 Do

        DimFix := ViewCube.FixInfo.Item(i);

        DimFix.Fixed := True;

        DimFix.Operation := BasicAggregatorOperation.Sum;

        DimFix.Selection.SelectAll;

    End For;

    MObj.Save;

End Sub UserProc;


После выполнения примера в качестве исходного куба для представления-куба,
 будет установлен куб с идентификатором SourceCube_1. Все измерения куба-источника
 будут зафиксированы.


См. также:


[ICubeDimensionFix](ICubeDimensionFix.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

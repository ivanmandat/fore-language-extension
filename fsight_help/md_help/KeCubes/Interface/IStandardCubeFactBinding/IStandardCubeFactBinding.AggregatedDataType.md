# IStandardCubeFactBinding.AggregatedDataType

IStandardCubeFactBinding.AggregatedDataType
-


# IStandardCubeFactBinding.AggregatedDataType


## Синтаксис


AggregatedDataType: [CubeFactBindingAggregatedDataType](../../Enums/CubeFactBindingAggregatedDataType.htm);


## Описание


Свойство AggregatedDataType
 определяет тип данных после агрегации.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором OBJ_CUBE. В данном кубе должны быть настроены привязки
 фактов.


			Sub UserProc;

Var

    MB: IMetabase;

    StdCube: IStandardCube;

    Dest: IStandardCubeDestination;

    StdDataset: IStandardCubeDataset;

    FactBinds: IStandardCubeFactBindings;

    FactBind: IStandardCubeFactBinding;

    FactDimension: IDimInstance;

    Iter: IDimIterator;

    DimElements: IDimElements;

    Id: String;

Begin

    MB := MetabaseClass.Active;

    StdCube := MB.ItemById("OBJ_CUBE").Edit As IStandardCube;

    Dest := StdCube.Destinations.Item(0);

    FactDimension := Dest.FactDimension.OpenDimension;

    DimElements := FactDimension.Elements;

    Iter := DimElements.Elements.Iterator;

    Iter.First;

    While Iter.Next Do

        Id := DimElements.Id(Iter.Element);

        StdDataset := Dest.Datasets.Item(0);

        FactBinds := Dest.FactBindings(StdDataset);

        FactBind := FactBinds.Binding(id);

        If FactBind.Formula <> Null Then

            FactBind.AggregationType := CubeFactBindingAggregationType.Custom;

            FactBind.CustomAggregateFunction := "SUM";

            FactBind.DistinctAggregate := True;

            FactBind.AggregatedDataType := CubeFactBindingAggregatedDataType.FixedPoint;

            FactBind.AggregatedDataTypePrecision := 3;

        End If;

    End While;

    (StdCube As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для фактов куба будет определен пользовательский
 метод расчета агрегации на источнике данных. Результатом агрегации будут
 числа с фиксированной точкой, рассчитываемые с точностью до тысячных долей.
 Метод агрегации - сумма.


См. также:


[IStandardCubeFactBinding](IStandardCubeFactBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

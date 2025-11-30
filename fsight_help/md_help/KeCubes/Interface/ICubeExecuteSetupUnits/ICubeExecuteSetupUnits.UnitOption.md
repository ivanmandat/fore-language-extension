# ICubeExecuteSetupUnits.UnitOption

ICubeExecuteSetupUnits.UnitOption
-


# ICubeExecuteSetupUnits.UnitOption


## Синтаксис


UnitOption: [CubeExecuteSetupUnitOption](../../Enums/CubeExecuteSetupUnitOption.htm);


## Описание


Свойство UnitOption определяет
 единицы измерения, в которых будет производиться расчет.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 временных рядов с идентификатором «FC_DEP». Единицы измерения являются
 необязательным атрибутом рядов.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubInst: IRubricatorInstance;

    CubeInst: ICubeInstance;

    Dest: ICubeInstanceDestination;

    Sels: IDimSelectionSet;

    Sel: IDimSelection;

    ExecSetup: ICubeExecuteSetup;

    DimSetup: ICubeExecuteDimSetup;

    Executor: ICubeInstanceDestinationExecutor;

    Result: IMatrix;

Begin

    Mb := MetabaseClass.Active;

    //Получение экземпляра БДВР

    RubInst := Mb.ItemById("FC_DEP").Open(Null) As IRubricatorInstance;

    CubeInst := RubInst As ICubeInstance;

    Dest := CubeInst.Destinations.DefaultDestination;

    //Создание отметки, по которой будет производиться вычисление

    Sels := Dest.CreateDimSelectionSet;

    For Each Sel In Sels Do

        Sel.SelectAll;

    End For;

    //Добавление единиц измерения

    Sels.Add(RubInst.UnitsDimension);

    ExecSetup := Sels As ICubeExecuteSetup;

    DimSetup := ExecSetup.FindByTag(CubeDimensionTag.Units);

    //Указание единиц измерения, в которых будет производиться расчет

    (DimSetup.Predefined As ICubeExecuteSetupUnits).UnitOption := CubeExecuteSetupUnitOption.Natural;

    //Создание вычислителя

    Executor := Dest.CreateExecutor;

    Executor.WithoutScaling := True;

    Executor.PrepareExecute(Sels);

    Executor.PerformExecute;

    //Получение результирующей матрицы

    Result := Executor.Matrix;

End Sub UserProc;


При выполнении примера будет произведен расчет результирующей матрицы
 для рядов БДВР. Расчет будет производиться с использованием исходных данных.
 Результирующая матрица будет доступна в переменной Result.


См. также:


[ICubeExecuteSetupUnits](ICubeExecuteSetupUnits.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

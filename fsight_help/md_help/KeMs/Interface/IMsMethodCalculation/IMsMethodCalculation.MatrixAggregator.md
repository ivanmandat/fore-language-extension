# IMsMethodCalculation.MatrixAggregator

IMsMethodCalculation.MatrixAggregator
-


# IMsMethodCalculation.MatrixAggregator


## Синтаксис


MatrixAggregator(


Stub: [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm);


DimInstance: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm)): [IBasicMatrixAggregator](KeMatrix.chm::/Interface/IBasicMatrixAggregator/IBasicMatrixAggregator.htm);


## Параметры


Stub. Структура переменной, в которой осуществляется агрегация.


DimInstance. Данные, которые необходимо сагрегировать.


## Описание


Свойство MatrixAggregator возвращает объект, содержащий свойства и методы, необходимые для агрегации данных.


## Пример


			Public Class My_Method: Object, IMsUserTransformImplementation

    Sub Execute(Calculation: IMsMethodCalculation; Coo: IMsFormulaTransformCoord;

        Explained: IMsFormulaTerm; Explanatories: IMsFormulaTermList);

    Var

        ExpVarStub: IVariableStub;

        Matr: IMatrix;

        CalendarInst: IDimInstance;

        BasicAggr: IBasicMatrixAggregator;

        LevAggr: IBasicMatrixLevelAggregator;

        Lvls: IDimLevelsInstance;

        Cub: ICubeInstance;

    Begin

        ExpVarStub := Explained.Slice.Variable.VariableStub;

        Matr := Calculation.Variable(ExpVarStub);

        CalendarInst := (ExpVarStub.Calendar As IMetabaseObject).Open(Null) As IDimInstance;

        BasicAggr := Calculation.MatrixAggregator(ExpVarStub, CalendarInst);

        //Для уровня по умолчанию
        Lvls := CalendarInst.Levels;

        LevAggr := BasicAggr.LevelAggregation(Lvls.Item(0).Level);

        LevAggr.Operation := BasicAggregatorOperation.ArithmeticalMean;

        LevAggr.Include(Lvls.Item(1).Level) := True;

        //Получение матрицы агрегированных данных
        Matr := BasicAggr.Execute(0, Matr);

        //Сохранение агрегированных данных в куб переменной
        Cub := ((ExpVarStub As IMsVariable).Cube As IMetabaseObject).Open(Null) As ICubeInstance;

        Cub.Destinations.DefaultDestination.CreateStorage.SaveMatrix(Matr, Matr.ValueFlag);

    End Sub Execute;


    Sub Set_params(ParamValue: IMsUserMethodParams);

    Begin

        //Получение значений параметров
    End Sub Set_params;


End Class My_Method;


Данный пример является макросом, содержащим пользовательский метод расчета модели. Моделируемая переменная модели, которая использует при расчете пользовательский метод, в своей структуре должна иметь два шага расчета. При расчете модели будет осуществлена агрегация данных в моделируемой переменной. Агрегация производится с нижнего уровня на верхний с использованием метода арифметического среднего.


См. также:


[IMsMethodCalculation](IMsMethodCalculation.htm)|[IMsUserTransform](../IMsUserTransform/IMsUserTransform.htm)|[IMsUserTransform.Assembly](../IMsUserTransform/IMsUserTransform.Assembly.htm)|[IMsUserTransform.ClassName](../IMsUserTransform/IMsUserTransform.ClassName.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

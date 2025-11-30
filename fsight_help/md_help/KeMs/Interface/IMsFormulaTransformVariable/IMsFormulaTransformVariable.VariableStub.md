# IMsFormulaTransformVariable.VariableStub

IMsFormulaTransformVariable.VariableStub
-


# IMsFormulaTransformVariable.VariableStub


## Синтаксис


VariableStub: [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm);


## Описание


Свойство VariableStub возвращает
 объект, содержащий структуру измерений переменной.


## Пример


			Public Class My_Method: Object, IMsUserTransformImplementation

    Matr: IMatrix;

    Mcoo: IMatrixCoord;

    Cub: ICubeInstance;

    Sub Execute(Calculation: IMsMethodCalculation; Coo: IMsFormulaTransformCoord;

        Explained: IMsFormulaTerm; Explanatories: IMsFormulaTermList);

    Var

        i: Integer;

    Begin

        Matr := Calculation.Variable(Explained.Slice.Variable.VariableStub);

        Mcoo := Matr.CreateCoord;

        Matr.ValueFlag := Matr.ValueFlag + 1;

        For i := 0 To Calculation.Period.ForecastEndDate.Year - Calculation.Period.IdentificationStartDate.Year Do

            MCoo.Item(0) := i;

            MCoo.Item(1) := 1;

            Matr.Item(Mcoo) := Calculation.CurrentPoint.Year;

            Calculation.CurrentPoint := DateTime.AddYears(Calculation.CurrentPoint, 1);

        End For;

        Cub := (Explained.Slice.Variable.VariableStub As IMetabaseObject).Open(Null) As ICubeInstance;

        Cub.Destinations.DefaultDestination.CreateStorage.SaveMatrix(Matr, Matr.ValueFlag);

    End Sub Execute;

End Class My_Method;


Данный пример является макросом, содержащим пользовательский метод расчета
 модели. При расчете модели, настроенной на использование пользовательского
 метода, по первому сценарному измерению будут записаны значения года в
 точке расчета.


См. также:


[IMsFormulaTransformVariable](IMsFormulaTransformVariable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMsMethodCalculation.CurrentPoint

IMsMethodCalculation.CurrentPoint
-


# IMsMethodCalculation.CurrentPoint


## Синтаксис


CurrentPoint: DateTime;


## Описание


Свойство CurrentPoint определяет
 точку, в которой производится расчет метода. Данное свойство используется
 при расчете модели с помощью пользовательского метода расчета.


## Пример


			Public Class My_Method: Object, IMsUserTransformImplementation

    Matr: IMatrix;

    Mcoo: IMatrixCoord;

    Cub: ICubeInstance;

    Sub Execute(Calculation: IMsMethodCalculation; Coo: IMsFormulaTransformCoord; Explained: IMsFormulaTerm; Explanatories: IMsFormulaTermList);

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

        Cub := ((Explained.Slice.Variable.VariableStub As IMsVariable).Cube As IMetabaseObject).Open(Null) As ICubeInstance;

        Cub.Destinations.DefaultDestination.CreateStorage.SaveMatrix(Matr, Matr.ValueFlag);

    End Sub Execute;

End Class My_Method;


Данный пример является макросом, содержащим пользовательский метод расчета
 модели. При расчете модели, настроенной на использование пользовательского
 метода, по первому сценарному измерению будут записаны значения года в
 точке расчета.


См. также:


[IMsMethodCalculation](IMsMethodCalculation.htm)|[IMsUserTransform](../IMsUserTransform/IMsUserTransform.htm)|[IMsUserTransform.Assembly](../IMsUserTransform/IMsUserTransform.Assembly.htm)|[IMsUserTransform.ClassName](../IMsUserTransform/IMsUserTransform.ClassName.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

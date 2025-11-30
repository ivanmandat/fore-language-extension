# ICalculatedCubeFormula.ChangePeriod

ICalculatedCubeFormula.ChangePeriod
-


# ICalculatedCubeFormula.ChangePeriod


## Синтаксис


ChangePeriod(DateBegin: DateTime; DateEnd: DateTime);


## Параметры


DateBegin. Дата начала действия
 формулы, которую необходимо установить.


DateEnd. Дата окончания действия
 формулы, которую необходимо установить.


## Описание


Метод ChangePeriod осуществляет
 изменение даты начала и окончания действия формулы с корректировкой периодов
 соседних формул.


## Пример


Для выполнения примера, предполагается наличие в репозитории вычисляемого
 куба с идентификатором Calc_Cube. В кубе имеется два незафиксированных
 измерения, а также установлено измерение, управляющее выбором периода
 действия формул.


			Sub UserProc;

Var

    MB: IMetabase;

    CubeInst: ICalculatedCubeInstance;

    Coord: ICalculatedCubeInstanceCoord;

    Formulas: ICalculatedCubeFormulas;

    Formula: ICalculatedCubeFormula;

    d, d1: DateTime;

Begin

    MB := MetabaseClass.Active;

    CubeInst := MB.ItemById("Calc_Cube").Open(Null) As ICalculatedCubeInstance;

    Coord := CubeInst.CreateCoord;

    Coord.MatrixCoord.Item(0) := 0;

    Coord.MatrixCoord.Item(1) := 0;

    Formulas := CubeInst.Formula(Coord);

    Formula := Formulas.Item(0);

    d := Formula.DateBegin;

    d1 := Formula.DateEnd;

    d := DateTime.AddMonths(d, 6);

    d1 := DateTime.AddMonths(d, 6);

    Formula.ChangePeriod(d, d1);

    Formulas.Save;

    CubeInst.SaveFormulas;

End Sub UserProc;


После выполнения примера для полученной координаты куба будут изменены
 даты начала и окончания действия первой формулы. Данные даты будут сдвинуты
 на пол года вперед, даты для других формул будут автоматически скорректированы.


См. также:


[ICalculatedCubeFormula](ICalculatedCubeFormula.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

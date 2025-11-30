# ICalculatedCubeFormulas.Add

ICalculatedCubeFormulas.Add
-


# ICalculatedCubeFormulas.Add


## Синтаксис


Add(DateBegin: DateTime; DateEnd: DateTime): [ICalculatedCubeFormula](../ICalculatedCubeFormula/ICalculatedCubeFormula.htm);


## Параметры


DateBegin. Дата начала действия
 формулы.


DateEnd. Дата окончания действия
 формулы.


## Описание


Метод Add осуществляет добавление
 новой формулы.


## Комментарии


Метод используется, если для вычисляемого куба установлено измерение,
 управляющее выбором [периода
 действия формулы](../ICalculatedCubeDimension/ICalculatedCubeDimension.IsTime.htm). Если управление периодом действия формул в кубе
 не настроено, то для получения формул используйте свойство [ICalculatedCubeFormulas.Item](ICalculatedCubeFormulas.Item.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории вычисляемого
 куба с идентификатором «Calc_Cube». В кубе-источнике и вычисляемом кубе
 имеется два незафиксированных измерения, а также установлено измерение,
 управляющее выбором периода действия формул.


			Sub UserProc;

Var

    MB: IMetabase;

    CubeInst: ICalculatedCubeInstance;

    Coord, SourceCoord: ICalculatedCubeInstanceCoord;

    Formulas: ICalculatedCubeFormulas;

    Formula: ICalculatedCubeFormula;

    d: DateTime;

Begin

    MB := MetabaseClass.Active;

    CubeInst := MB.ItemById("Calc_Cube").Open(Null) As ICalculatedCubeInstance;

    //Получение координаты в вычисляемом кубе

    Coord := CubeInst.CreateCoord;

    Coord.MatrixCoord.Item(0) := 0;

    Coord.MatrixCoord.Item(1) := 0;

    //Получение координаты из источника

    SourceCoord := CubeInst.CreateSourceCoord(CubeInst.Sources.Item(0));

    SourceCoord.MatrixCoord.Item(0) := 0;

    SourceCoord.MatrixCoord.Item(1) := 0;

    Formulas := CubeInst.Formula(Coord);

    Formula := Formulas.Item(Formulas.Count - 1);

    d := Formula.DateEnd;

    Formula := Formulas.Add(d.AddDays(d, 1), d.AddMonths(d, 6));

    Formula.Expression.AsString := SourceCoord.AsTerm + "*10";

    Formulas.Save;

    CubeInst.SaveFormulas;

End Sub UserProc;


После выполнения примера в вычисляемом кубе по указанной координате
 будет добавлена одна формула. В выражении формулы будет использоваться
 терм, ссылающийся на соответствующую координату в кубе-источнике.


См. также:


[ICalculatedCubeFormulas](ICalculatedCubeFormulas.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

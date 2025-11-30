# ICalculatedCubeInstanceCoord.IsReference

ICalculatedCubeInstanceCoord.IsReference
-


# ICalculatedCubeInstanceCoord.IsReference


## Синтаксис


IsReference: Boolean;


## Описание


Свойство IsReference определяет признак передачи координаты по ссылке.


## Комментарии


Если свойству установлено значение True, то при вычислении в формулы будет передаваться не значение по данной координате, а ссылка на координату, описываемая интерфейсом [ICalculatedCubeInstanceCoord](ICalculatedCubeInstanceCoord.htm). По умолчанию свойству установлено значение False, при этом в формулы передается фактическое значение по данной координате. Установка свойству значения True эквивалентно установке символа «@» перед координатой в [редакторе формул](UiNavObj.chm::/equation_editor/UiMd_Equation_editor_CalculationCube.htm) вычислимого куба.


## Пример


Для выполнения примера предполагается наличие вычисляемого куба с идентификатором «Calc_Cube», в структуре куба имеется два измерения. Также предполагается наличие модуля с идентификатором «Calc_Functions», в котором реализованы функции для вычисляемого куба. Среди функций есть функция Test, сигнатура которой имеет единственный параметр с типом ICalculatedCubeInstanceCoord. Также необходимо подключить системные сборки Cubes, Matrix, Metabase.


			Sub EditFormula;

Var

    MB: IMetabase;

    CubeInst: ICalculatedCubeInstance;

    Formulas: ICalculatedCubeFormulas;

    Formula: ICalculatedCubeFormula;

    Coord, SourceCoord: ICalculatedCubeInstanceCoord;

Begin

    MB := MetabaseClass.Active;

    CubeInst := MB.ItemById("Calc_Cube").Open(Null) As ICalculatedCubeInstance;

    //Координата в вычисляемом кубе
    Coord := cubeInst.CreateCoord;

    Coord.MatrixCoord.Item(0) := 0;

    Coord.MatrixCoord.Item(1) := 0;

    //Формулы по этой координате
    Formulas := CubeInst.Formula(Coord);

    Formula := Formulas.Item(0);

    //Координата куба-источника
    SourceCoord := CubeInst.CreateSourceCoord(CubeInst.Sources.Item(0));

    SourceCoord.MatrixCoord.Item(0) := 0;

    SourceCoord.MatrixCoord.Item(1) := 0;

    //Передавать координату по ссылке
    SourceCoord.IsReference := True;

    //Задание формулы с использованием координаты куба-источника
    Formula.Expression.AsString := "Calc_Functions.Test(" + SourceCoord.AsTerm + ")";

    //Сохранение формул
    Formulas.Save;

    CubeInst.SaveFormulas;

End Sub EditFormula;


При выполнении примера по указанной координате вычисляемого куба будет задана формула: будет вызываться прикладная функция, в которую по ссылке будет передаваться координата куба.


См. также:


[ICalculatedCubeInstanceCoord](ICalculatedCubeInstanceCoord.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

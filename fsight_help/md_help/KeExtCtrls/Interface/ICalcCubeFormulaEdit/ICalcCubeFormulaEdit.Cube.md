# ICalcCubeFormulaEdit.Cube

ICalcCubeFormulaEdit.Cube
-


# ICalcCubeFormulaEdit.Cube


## Синтаксис


Cube: [ICalculatedCubeInstance](KeCubes.chm::/Interface/ICalculatedCubeInstance/ICalculatedCubeInstance.htm);


## Описание


Свойство Cube определяет вычисляемый
 куб, который является источником данных.


## Пример


Для выполнения примера предполагается наличие в репозитории формы, расположенной
 на ней кнопки с наименованием «Button1» и компонента CalcCubeFormulaEdit
 с наименованием «CalcCubeFormulaEdit1». Также в репозитории имеется вычисляемый
 куб с идентификатором CALC_CUBE. В данном кубе имеется одно незафиксированное
 измерение.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    CubeInst: ICalculatedCubeInstance;

	    Coord: ICalculatedCubeInstanceCoord;

	    Terms: ITermList;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    CubeInst := MB.ItemById("CALC_CUBE").Open(Null) As ICalculatedCubeInstance;

	    CalcCubeFormulaEdit1.Cube := CubeInst;

	    Coord := CubeInst.CreateCoord;

	    // Первая координата

	    Coord.MatrixCoord.Item(0) := 0;

	    CalcCubeFormulaEdit1.PutCoord(Coord,0);

	    Terms := CalcCubeFormulaEdit1.Terms;

	    i := Terms.Item(0).Text.Length;

	    // Знак «+»

	    CalcCubeFormulaEdit1.PutLiteral("+");

	    // Вторая координата

	    Coord.MatrixCoord.Item(0) := 1;

	    i := i + Terms.Item(1).Text.Length;

	    CalcCubeFormulaEdit1.PutCoord(Coord,i);

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для компонента «CalcCubeFormulaEdit1»
 будет установлен источник данных - куб с идентификатором CALC_CUBE. В
 поле редактирования компонента будут вставлены три терма: два терма соответствуют
 координатам куба и литеральный терм, соответствующий знаку «+».


См. также:


[ICalcCubeFormulaEdit](ICalcCubeFormulaEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IExpression.References

IExpression.References
-


# IExpression.References


## Синтаксис


References: String;


## Описание


Свойство References определяет
 список модулей/форм, содержащих пользовательские функции, используемые
 для создания выражения.


## Комментарии


Идентификаторы модулей/форм в списке разделяются знаком ";".
 Все функции, содержащиеся в данных модулях и используемые для создания
 выражения, должны быть объявлены с модификатором [Public](Fore.chm::/06_SyntRules/Fore_Synt_Visible.htm).


## Пример


Для выполнения примера предполагается наличие вычисляемого куба с идентификатором
 «Virt_Cube» и модулей «Module_1», «Module_2», содержащих пользовательские
 функции «MyFunc», «MyFunc1». Данные функции осуществляют расчет значений
 для указанных координат куба.


Добавьте ссылки на системные сборки: Cubes, Matrix, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CCI: ICalculatedCubeInstance;

	    Coo: ICalculatedCubeInstanceCoord;

	    Formulas: ICalculatedCubeFormulas;

	    Formula: ICalculatedCubeFormula;

	    Expr: IExpression;

	    i: Integer;

	Begin

	    Mb := MetabaseClass.Active;

	    CCI := Mb.ItemById("Virt_Cube").Open(Null) As ICalculatedCubeInstance;

	    Coo := CCI.CreateCoord;

	    For i := 0 To Coo.MatrixCoord.Count - 1 Do

	        Coo.MatrixCoord.Item(i) := 0;

	    End For;

	    Formulas := CCI.Formula(Coo);

	    Formula := Formulas.Item(0);

	    Expr := Formula.Expression;

	    Expr.References := "Module_1;Module_2";

	    Expr.AsString := "MyFunc-MyFunc1";

	    Formulas.Save;

	    CCI.SaveFormulas;

	End Sub UserProc;


После выполнения примера в вычисляемом кубе по
 указанной координате будет добавлена одна формула. В выражении формулы
 будут использоваться пользовательские функции, содержащиеся в модулях
 «Module_1» и «Module_2».


См. также:


[IExpression](IExpression.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

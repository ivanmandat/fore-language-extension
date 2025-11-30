# IMsFormulaTermInfo.Slice

IMsFormulaTermInfo.Slice
-


# IMsFormulaTermInfo.Slice


## Синтаксис


		Slice: [IMsFormulaTransformSlice](../IMsFormulaTransformSlice/IMsFormulaTransformSlice.htm);


## Описание


Свойство Slice определяет срез
 переменной, которому соответствует данный терм.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором KONT_MODEL. В данном контейнере имеется
 задача моделирования с идентификатором NEW_NONLINREG, использующая для
 расчета метод нелинейной регрессии.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Model: IMsModel;

		    Trans: IMsFormulaTransform;

		    NonLinear: IMsNonLinearRegressionTransform;

		    Oper: IMsFormulaTermList;

		    Info: IMsFormulaTermInfo;

		    Slice: IMsFormulaTransformSlice;

		    Sels: IDimSelectionSet;

		    Sel: IDimSelection;

		    i: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    Model := MB.ItemByIdNamespace("New_NonLinReg",MB.ItemById("KONT_MODEL").Key).Bind As IMsModel;

		    Trans := Model.Transform;

		    NonLinear := Trans.FormulaItem(0).Method As IMsNonLinearRegressionTransform;

		    Oper := NonLinear.Operands;

		    For i := 0 To Oper.Count - 1 Do

		        Info := Oper.Item(i).TermInfo;

		        Slice := Info.Slice;

		        Debug.WriteLine(Slice.Id+ " " + Slice.Name);

		        Sels := Slice.Selection;

		        For Each Sel In Sels Do

		            Debug.WriteLine("Измерение:" + Sel.Dimension.Ident + "; Отмеченные элементы: " + Sel.ToString);

		        End For;

		    End For;

		End Sub UserProc;


В результате выполнения примера в консоль среды разработки будет выведена
 информация о срезах, которым соответствуют термы, созданные в данной модели.
 Будут выведены наименования срезов, идентификаторы переменных моделирования,
 на базе которых они созданы, а также будет выведена отметка по дополнительным
 измерениям, если они имеются в переменных.


См. также:


[IMsFormulaTermInfo](IMsFormulaTermInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

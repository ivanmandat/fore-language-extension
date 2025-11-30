# IMsFormulaTermInfo.TermText

IMsFormulaTermInfo.TermText
-


# IMsFormulaTermInfo.TermText


## Синтаксис


		TermText: String;


## Описание


Свойство TermText возвращает
 наименование терма, которое отображается в списке термов.


## Комментарии


Данное наименование не включает начальное преобразование терма.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором KONT_MODEL. В данном контейнере имеется
 задача моделирования с идентификатором NEW_NONLINREG, использующая для
 расчёта метод нелинейной регрессии.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Model: IMsModel;

		    Trans: IMsFormulaTransform;

		    NonLinear: IMsNonLinearRegressionTransform;

		    Oper: IMsFormulaTermList;

		    Info: IMsFormulaTermInfo;

		    i: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    Model := MB.ItemByIdNamespace("New_NonLinReg",MB.ItemById("KONT_MODEL").Key).Bind As IMsModel;

		    Trans := Model.Transform;

		    NonLinear := Trans.FormulaItem(0).Method As IMsNonLinearRegressionTransform;

		    Oper := NonLinear.Operands;

		    For i := 0 To Oper.Count - 1 Do

		        Info := Oper.Item(i).TermInfo;

		        Debug.WriteLine(Info.TermText);

		    End For;

		End Sub UserProc;


В результате выполнения примера в консоль среды разработки будут выведены
 наименования термов, созданных в данной модели.


См. также:


[IMsFormulaTermInfo](IMsFormulaTermInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMsFormulaTermList.FindByTermText

IMsFormulaTermList.FindByTermText
-


# IMsFormulaTermList.FindByTermText


## Синтаксис


		FindByTermText(Value: String): Integer;


## Параметры


Value. Внутреннее представление
 терма.


## Описание


Метод FindByTermText возвращает
 индекс терма по внутреннему представлению.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL. Данный контейнер содержит
 модель детерминированного уравнения с идентификатором DETERM.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    ActiveMetabase: IMetabase;

		    ModelCont: IMetabaseObjectDescriptor;

		    Descript: IMetabaseObjectDescriptor;

		    Obj: IMetabaseObject;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		    Formula: IMsFormula;

		    Determ: IMsDeterministicTransform;

		    Operands: IMsFormulaTermList;

		    Term: IMsFormulaTermInfo;

		    ind: Integer;

		Begin

		    ActiveMetabase := MetabaseClass.Active;

		    ModelCont := ActiveMetabase.ItemById("CONT_MODEL");

		    Descript := ActiveMetabase.ItemByIdNamespace("DETERM", ModelCont.Key);

		    Obj := Descript.Edit;

		    Model := Obj As IMsModel;

		    Transform := Model.Transform;

		    Formula := Transform.FormulaItem(0);

		    Determ := Formula.Method As IMsDeterministicTransform;

		    Operands := Determ.Operands;

		    Term := Determ.Result.TermInfo;

		    ind := Operands.FindByTermText(Term.TermInnerText);

		    If ind <> -1 Then

		        Operands.Remove(ind);

		        Operands.Refresh;

		    End If;

		    Obj.Save;

		End Sub UserProc;


В результате выполнения примера из переменных, которые могут быть использованы
 для составления уравнения модели, будет удалена моделируемая переменная
 (если она там присутствует). Затем коллекция данных переменных будет обновлена.


См. также:


[IMsFormulaTermList](IMsFormulaTermList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

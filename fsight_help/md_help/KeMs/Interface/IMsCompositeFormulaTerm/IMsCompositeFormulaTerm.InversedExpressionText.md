# IMsCompositeFormulaTerm.InversedExpressionText

IMsCompositeFormulaTerm.InversedExpressionText
-


# IMsCompositeFormulaTerm.InversedExpressionText


## Синтаксис


		InversedExpressionText: String;


## Описание


Свойство InversedExpressionText
 возвращает текст формулы, по которой будет рассчитываться значение составного
 терма, с учётом преобразований над термом.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODEL_SPACE. В данном контейнере должна
 присутствовать модель с идентификатором MODEL, рассчитываемая методом
 линейной регрессии (оценка МНК).


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    ms: IMetabaseObjectDescriptor;

		    model: IMsModel;

		    fTransform: IMsFormulaTransform;

		    lin: IMsLinearRegressionTransform;

		    cfTerm: IMsCompositeFormulaTerm;

		Begin

		    mb := MetabaseClass.Active;

		    ms := mb.ItemById("MODEL_SPACE");

		    model := mb.ItemByIdNamespace("MODEL",ms.Key).Bind As IMsModel;

		    fTransform := model.Transform;

		    lin := fTransform.FormulaItem(0).Method As IMsLinearRegressionTransform;

		    cfTerm := lin.Explanatories.Item(0);

		    Debug.WriteLine(cfTerm.InversedExpressionText);

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен текст формулы,
 по которой рассчитывается значение первого терма модели, с учётом преобразований.


См. также:


[IMsCompositeFormulaTerm](IMsCompositeFormulaTerm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

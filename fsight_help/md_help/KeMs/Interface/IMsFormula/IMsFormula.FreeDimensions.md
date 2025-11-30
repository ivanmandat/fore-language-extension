# IMsFormula.FreeDimensions

IMsFormula.FreeDimensions
-


# IMsFormula.FreeDimensions


## Синтаксис


		FreeDimensions: [IMsDimensionFilterList](../IMsDimensionFilterList/IMsDimensionFilterList.htm);


## Описание


Свойство FreeDimensions
 возвращает коллекцию измерений, по которым разрешена множественная отметка.


## Комментарии


С помощью данного свойства доступна установка множественной отметки
 в моделируемой переменной.


Примечание.
 Множественная отметка в моделируемой переменной доступна только в модели детерминированного
 уравнения.


Если измерение содержится в коллекции FreeDimensions,
 то выходная переменная может иметь множественную отметку по данному измерению.
 Таким образом, в детерминированном уравнении расчет будет выполняться
 в цикле по всем выделенным элементам.


Особенности:


	- если в отметке моделируемой переменной есть незафиксированные
	 элементы и их измерения содержатся в коллекции FreeDimensions,
	 а свойство [IMsMethodCalculation.AllowEmptySelection](../IMsMethodCalculation/IMsMethodCalculation.AllowEmptySelection.htm)
	 принимает значение False,
	 то результат выгружается по всем элементам соответствующих измерений.
	 Если свойство [IMsMethodCalculation.AllowEmptySelection](../IMsMethodCalculation/IMsMethodCalculation.AllowEmptySelection.htm)
	 принимает значение True, то
	 результат выгружается только по отмеченным элементам;


	- если в измерениях моделируемой переменной задана множественная
	 отметка и данные измерения содержатся в коллекции FreeDimensions,
	 то результат выгружается по всем элементам отметки;


	- если в отметке входной переменной есть незафиксированные элементы,
	 то недостающая отметка берётся из моделируемой переменной;


	- если отметка входной переменной полностью зафиксирована, то
	 берётся соответствующее ей значение.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего модель детерминированного
 уравнения с идентификатором MODEL_FREEDIM.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsKey: Integer;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		    Formula: IMsFormula;

		    FreeDimensions: IMsDimensionFilterList;

		    OutputVar: IMsFormulaTransformVariable;

		    Slice: IMsFormulaTransformSlice;

		    DimSel: IDimSelection;

		    Dim: IDimensionModel;

		    Filter: IMsDimensionFilter;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем ключ контейнера моделирования

		    MsKey := mb.GetObjectKeyById("MS");

		    // Получаем модель

		    Model := mb.ItemByIdNamespace("MODEL_FREEDIM", MsKey).Edit As IMsModel;

		    // Получаем параметры расчета модели

		    Transform := Model.Transform;

		    // Получаем метод расчета модели

		    Formula := Transform.FormulaItem(0);

		    // Получаем список измерений, по которым разрешена множественная отметка

		    FreeDimensions := Formula.FreeDimensions;

		    // Получаем моделируемую переменную

		    OutputVar := Transform.Outputs.Item(0);

		    // Задаем множественную отметку по первому измерению переменной

		    Slice := OutputVar.Slices.Item(0);

		    DimSel := Slice.Selection.Item(0);

		    DimSel.DeselectAll;

		    DimSel.SelectElement(1, False);

		    DimSel.SelectElement(2, False);

		    // Получаем данное измерение и разрешаем в нем множественную отметку

		    Dim := Slice.ParametrizedDimensions.Item(0).Dimension;

		    Filter := FreeDimensions.Add(Dim);

		    // Указываем, что измерение нефиксированное

		    Filter.Fixed := False;

		    // Сохраняем изменения

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера расчёт модели будет выполняться по множественной
 отметке первого измерения моделируемой переменной.


См. также:


[IMsFormula](IMsFormula.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

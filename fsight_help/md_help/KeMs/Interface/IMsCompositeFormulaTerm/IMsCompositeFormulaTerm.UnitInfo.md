# IMsCompositeFormulaTerm.UnitInfo

IMsCompositeFormulaTerm.UnitInfo
-


# IMsCompositeFormulaTerm.UnitInfo


## Синтаксис


		UnitInfo: [IMsUnitInfo](../IMsUnitInfo/IMsUnitInfo.htm);


## Описание


Свойство UnitInfo возвращает
 данные о единицах измерения терма.


## Комментарии


Единицы измерения используются в термах, основанных на данных базы данных
 временных рядов.


Свойство возвращает информацию о том, что единицы измерения не определены,
 в следующих случаях:


	- термы, образующие составной терм, имеют различные единицы измерения;


	- единицы измерения не являются обязательным атрибутом базы данных
	 временных рядов.


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором FC. В контейнере моделирования данной
 базы содержится модель линейной регрессии (оценка МНК) с идентификатором
 LINEAR. Справочник единиц измерения не является обязательным атрибутом
 базы данных временных рядов.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Cat: IRubricator;

		    MsDesc: IMetabaseObjectDescriptor;

		    Model: IMsModel;

		    Formula: IMsFormula;

		    Linear: IMsLinearRegressionTransform;

		    i: Integer;

		    Explanatories: IMsCompositeFormulaTermList;

		    UnitInfo: IMsUnitInfo;

		    Elements: IDimElements;

		    Term: IMsCompositeFormulaTerm;

		Begin

		    Mb := MetabaseClass.Active;

		    Cat := Mb.ItemById("FC").Bind As IRubricator;

		    MsDesc := Cat.ModelSpace;

		    Model := mb.ItemByIdNamespace("LINEAR", MsDesc.Key).Bind As IMsModel;

		    Formula := Model.Transform.FormulaItem(0);

		    Linear := Formula.Method As IMsLinearRegressionTransform;

		    Explanatories := Linear.Explanatories;

		    UnitInfo := Explanatories.UnitInfo;

		    If UnitInfo.Unit <> -1 Then

		        Debug.WriteLine("Все объясняющие переменные модели имеют одинаковые единицы измерения: ");

		        Elements := UnitInfo.UnitsDimension.Elements;

		        Debug.WriteLine("  - единица измерения: " + Elements.Name(UnitInfo.Unit));

		    Else

		        Debug.WriteLine("Объясняющие переменные модели имеют различные единицы измерения: ");

		        For i := 0 To Explanatories.Count - 1 Do

		            Term := Explanatories.Item(i);

		            Debug.WriteLine("  " + Term.ExpressionText);

		            UnitInfo := Term.UnitInfo;

		            If UnitInfo.Unit <> -1 Then

		                Elements := UnitInfo.UnitsDimension.Elements;

		                Debug.WriteLine("  - единица измерения: " + Elements.Name(UnitInfo.Unit));

		            Else

		                Debug.WriteLine("  - единица измерения не определена");

		            End If;

		        End For;

		    End If;

		End Sub UserProc;


В результате выполнения примера, если все объясняющие переменные модели
 имеют общую единицу измерения, то информация о ней, будет выведена в окно
 консоли. Если объясняющие переменные имеют различные единицы измерения,
 то информация об единице измерения будет выведена для каждой переменной.


См. также:


[IMsCompositeFormulaTerm](IMsCompositeFormulaTerm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMsFormula.CreateStringGenerator

IMsFormula.CreateStringGenerator
-


# IMsFormula.CreateStringGenerator


## Синтаксис


		CreateStringGenerator: [IMsFormulaStringGenerator](../IMsFormulaStringGenerator/IMsFormulaStringGenerator.htm);


## Описание


Метод CreateStringGenerator
 создает генератор строкового представления метода расчёта модели.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL. В данном контейнере должна
 присутствовать модель с идентификатором MODEL.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    DescrCM:IMetabaseObjectDescriptor;

		    pModel:IMsModel;

		    Transform:IMsFormulaTransform;

		    pSelector:IMsFormulaTransformSelector;

		    pFormula:IMsFormula;

		    pGen:IMsFormulaStringGenerator;

		Begin

		    mb := MetabaseClass.Active;

		    DescrCM := mb.ItemById("CONT_MODEL");

		    pModel := mb.ItemByIdNamespace("MODEL",DescrCM.Key).Bind As IMsModel;

		    Transform := pModel.Transform;

		    pSelector := Transform.CreateSelector;

		    pSelector.Slice := Transform.Outputs.Item(0).Slices.Item(0);

		    pFormula := Transform.Transform(pSelector);

		    pGen := pFormula.CreateStringGenerator;

		    pGen.ShowFullVariableNames := False;

		    Debug.WriteLine("Наименование метода расчёта модели после автоматической генерации: '" + pGen.Execute
		 + "'");

		End Sub UserProc;


В результате выполнения примера будет сгенерировано и выведено в окно
 консоли строковое представление метода расчёта модели. Например:


Module execution started


Наименование метода расчёта модели после автоматической
 генерации: 'Y[t] = X1[t] * X2[t] + k'


Module execution finished


См. также:


[IMsFormula](IMsFormula.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

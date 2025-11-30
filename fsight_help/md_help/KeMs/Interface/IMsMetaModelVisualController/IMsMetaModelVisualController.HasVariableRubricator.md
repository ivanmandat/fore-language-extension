# IMsMetaModelVisualController.HasVariableRubricator

IMsMetaModelVisualController.HasVariableRubricator
-


# IMsMetaModelVisualController.HasVariableRubricator


## Синтаксис


HasVariableRubricator: Boolean;


## Описание


Свойство HasVariableRubricator
 определяет, есть ли у метамодели внутренняя база данных временных
 рядов.


## Комментарии


Допустимые значения:


	- True. Метамодель содержит
	 внутреннюю базу данных временных рядов;


	- False. В метамодели
	 отсутствует внутренняя база данных временных рядов.


При установке HasVariableRubricator
 в True внутренняя база данных
 временных рядов и справочник для хранения имен внутренних переменных создаются
 автоматически. При установке в False,
 если нет моделей, построенных на внутренней базе данных временных рядов,
 то справочник и БД удаляются, иначе генерируется исключительная ситуация.


## Пример


Для выполнения примера в репозитории должны присутствовать:


	- БД временных рядов с идентификатором «TSDB», содержащая временной
	 ряд с ключом «12»;


	- Контейнер моделирования с идентификатором «MS», содержащий метамодель
	 с идентификатором «META».


Добавьте ссылки на системные сборки: Dimensions, Metabase, Ms.


			Sub HasVariableRubricator;

Var

    mb: IMetabase;

    RubObj: IMetabaseObjectDescriptor;

    Meta: IMsMetaModel;

    MetaVisual: IMsMetaModelVisualController;

    VarInp, VarOutp: IMsCalculationChainVariable;

    VarEx: Boolean;

    InVarKey, InModelKey: Integer;

    InpKeys: Array[1] Of Integer;

    SimpleModel: IMsModel;

Begin

    mb := MetabaseClass.Active;

    // Получаем базу данных временных рядов

    RubObj := mb.ItemById("TSDB");

    // Получаем метамодель

    Meta := mb.ItemByIdNamespace("META", mb.ItemById("MS").Key).Edit As IMsMetaModel;

    MetaVisual := Meta.VisualController;

    // Если необходимо, то создаем для метамодели внутреннюю БД временных рядов

    If Not MetaVisual.HasVariableRubricator Then

        MetaVisual.HasVariableRubricator := True;

    End If;

    // Получаем ключ входной переменной

    VarInp := MetaVisual.GetVariableByFactor(RubObj.Key, 12, "", VarEx);

    InpKeys[0] := VarInp.Key;

    // Создаем моделируемую переменную

    VarOutp := MetaVisual.CreateVariable("Внутренняя моделируемая переменная", "", DimCalendarLevel.Year, VarEx);

    // Создаем внутреннюю модель

    SimpleModel := MetaVisual.CreateSimpleModel(-1, InpKeys, VarOutp.Key, MsFormulaKind.LinearRegression, "", InVarKey, InModelKey, -1, -1, True);

    // Добавляем внутреннюю переменную в качестве фактора в модель

    MetaVisual.AddFactor(SimpleModel, VarOutp.Key, "", InVarKey, InModelKey, -1);

    // Выводим наименование модели в окно консоли

    Debug.WriteLine(SimpleModel.CreateStringGenerator.Execute);

    // Сохраняем метамодель

    (Meta As IMetabaseObject).Save;

End Sub HasVariableRubricator;


Результат выполнения примера: в метамодели «META» будет создана внутренняя
 модель линейной регрессии, содержащая два фактора. Модель будет рассчитываться
 с помощью R. Наименование модели будет выведено в окно консоли.


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

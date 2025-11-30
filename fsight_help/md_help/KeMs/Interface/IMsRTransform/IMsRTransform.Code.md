# IMsRTransform.Code

IMsRTransform.Code
-


# IMsRTransform.Code


## Синтаксис


Code: String;


## Описание


Свойство Code определяет
 выражение для расчета модели.


## Комментарии


Для формирования выражения используйте язык R. Более подробное описание
 языка R приведено в [документации
 к R](http://cran.r-project.org/manuals.html).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащим модель с идентификатором
 «MODEL_LINEAR_R». Данная модель должна рассчитываться методом «R».
 В репозитории должна быть настроена интеграция с R. Подробнее о том, как
 можно настроить интеграцию вы можете узнать в разделе «[Как настроить
 интеграцию с R?](UiModelling.chm::/../../../FAQ/R_Integration.htm)».


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    msKey: Integer;

    modelObj: IMetabaseObject;

    transf: IMsFormulaTransform;

    formula: IMsFormula;

    RTransform: IMsRTransform;

    inputs: IMsFormulaTermList;

    inputTerm, result: IMsRFormulaTerm;

Begin

    // Получаем репозиторий

    mb := MetabaseClass.Active;

    // Получаем ключ контейнера моделирования

    msKey := mb.GetObjectKeyById("MS");

    // Получаем модель R

    modelObj := mb.ItemByIdNamespace("MODEL_LINEAR_R", msKey).Edit;

    // Получаем параметры расчета модели

    transf := (modelObj As IMsModel).Transform;

    formula := transf.FormulaItem(0);

    RTransform := formula.Method As IMsRTransform;

    // Получаем первую входную переменную

    inputs := RTransform.Inputs;

    inputTerm := inputs.Item(0) As IMsRFormulaTerm;

    // Переименовываем входную переменную

    inputTerm.Name := "a";

    // Получаем моделируемую
 переменную

    result := RTransform.Result As IMsRFormulaTerm;

    // Переименовываем выходную переменную

    result.Name := "res";

    // Задаем выражение
 для расчета модели

    RTransform.Code := "res <- a + 1;";

    // Сохраняем изменения

    modelObj.Save;

End Sub UserProc;


В результате выполнения примера для модели «MODEL_LINEAR_R» будет задан
 код для расчета.


См. также:


[IMsRTransform](IMsRTransform.htm)
 | Модель «[R](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/R.htm)»


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

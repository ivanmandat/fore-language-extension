# IMsMetaModelVisualController.Problem

IMsMetaModelVisualController.Problem
-


# IMsMetaModelVisualController.Problem


## Синтаксис


Problem: [IMsProblem](../IMsProblem/IMsProblem.htm);


## Описание


Свойство Problem определяет задачу моделирования, которая рассчитывает метамодель.


## Комментарии


Значение свойства должно быть обязательно задано для работы со сценариями моделирования. См. [IMsMetaModelVisualController.UseScenarios](IMsMetaModelVisualController.UseScenarios.htm), [IMsMetaModelVisualController.CopyScenarioData](IMsMetaModelVisualController.CopyScenarioData.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера моделирования с идентификатором «MODEL_SPACE», содержащего задачу моделирования с идентификатором «WEB_PROBLEM». Задача должна содержать внутреннюю метамодель.


Добавьте ссылки на системные сборки «Metabase», «Ms».


			Sub UseScenarios;

Var

    mb: IMetabase;

    msKey: Integer;

    Problem: IMsProblem;

    Meta: IMsMetaModel;

    MetaVisual: IMsMetaModelVisualController;

Begin

    mb := MetabaseClass.Active;

    // Получаем ключ контейнера моделирования
    msKey := mb.GetObjectKeyById("MODEL_SPACE");

    // Получаем задачу моделирования
    Problem := mb.ItemByIdNamespace("WEB_PROBLEM", msKey).Edit As IMsProblem;

    // Получаем метамодель
    Meta := Problem.MetaModel;

    MetaVisual := Meta.VisualController;

    // Задаем задачу моделирования
    MetaVisual.Problem := Problem;

    // Включаем сценарное моделирование
    If Not MetaVisual.UseScenarios Then

        MetaVisual.UseScenarios := True;

    End If;

    // Сохраняем изменения
    (Problem As IMetabaseObject).Save;

End Sub UseScenarios;


После выполнения примера для расчёта метамодели будет использоваться сценарное моделирование.


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

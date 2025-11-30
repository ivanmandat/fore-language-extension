# IMsProblem.EditMetaModel

IMsProblem.EditMetaModel
-


# IMsProblem.EditMetaModel


## Синтаксис


EditMetaModel: [IMsMetaModel](../IMsMetaModel/IMsMetaModel.htm);


## Описание


Свойство EditMetaModel
 возвращает внутреннюю метамодель.


## Комментарии


Для создания внутренней метамодели используйте метод [IMsProblem.CreateMetaModel](IMsProblem.CreateMetaModel.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащим задачу моделирования
 с идентификатором «PROBLEM_META» и модель с идентификатором «MODEL_LINEARREGR».
 Задача моделирования должна содержать внутреннюю метамодель.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    MsKey: Integer;

    CreateInfo: IMetabaseObjectCreateInfo;

    Problem: IMsProblem;

    Model: IMsModel;

    MetaModel: IMsMetaModel;

    CalcChain: IMsCalculationChainEntries;

Begin

    // Получаем репозиторий

    Mb := MetabaseClass.Active;

    // Получаем ключ контейнера моделирования

    MsKey := mb.GetObjectKeyById("MS");

    // Получаем задачу моделирования

    Problem := Mb.ItemByIdNamespace("PROBLEM_META", MsKey).Edit As IMsProblem;

    // Получаем внутреннюю метамодель

    MetaModel := Problem.EditMetaModel;

    // Получаем цепочку расчета метамодели

    CalcChain := MetaModel.CalculationChain;

    // Получаем модель

    Model := mb.ItemByIdNamespace("MODEL_LINEARREGR", MsKey).Edit As IMsModel;

    If CalcChain.FindById("MODEL_LINEARREGR") = Null Then

        // Добавляем полученную модель в цепочку расчета

        CalcChain.AddModel(Model);

    End If;

    // Сохраняем изменения

    (Problem As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в цепочку расчета задачи будет добавлена
 указанная модель.


См. также:


[IMsProblem](IMsProblem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

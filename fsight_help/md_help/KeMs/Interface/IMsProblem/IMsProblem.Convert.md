# IMsProblem.Convert

IMsProblem.Convert
-


# IMsProblem.Convert


## Синтаксис


Convert(format: [MsModelFormat](../../Enums/MsModelFormat.htm));


## Параметры


format. Требуемый формат метамодели.


## Описание


Метод Convert преобразует
 метамодель, рассчитываемую задачей, во внутреннюю без использования объектов
 и обратно.


## Комментарии


По умолчанию задачи, созданные в настольном приложении, используют метамодель,
 являющуюся отдельным объектом репозитория, а задачи, созданные в веб-приложении,
 используют внутренние метамодели, которые не являются отдельным объектом
 репозитория.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащим модель с идентификатором
 «MODEL_LINEARREGR».


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    Ms: IMetabaseObjectDescriptor;

    CreateInfo: IMetabaseObjectCreateInfo;

    Problem: IMsProblem;

    Model: IMsModel;

    MetaModel: IMsMetaModel;

    CalcChain: IMsCalculationChainEntries;

Begin

    // Получаем репозиторий

    Mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    Ms := mb.ItemById("MS");

    // Создаем задачу моделирования

    CreateInfo := Mb.CreateCreateInfo;

    CreateInfo.ClassId := MetabaseObjectClass.KE_CLASS_MSPROBLEM;

    CreateInfo.Parent := Ms;

    CreateInfo.Permanent := True;

    CreateInfo.Id := Mb.GenerateId("PROBLEM_META", Ms.Key);

    CreateInfo.Name := "Задача с внутренней метамоделью";

    Problem := Mb.CreateObject(CreateInfo).Edit As IMsProblem;

    // Преобразуем задачу

    Problem.Convert(MsModelFormat.WithoutObject);

    // Создаем внутреннюю метамодель

    MetaModel := Problem.CreateMetaModel;

    // Получаем цепочку расчета метамодели

    CalcChain := MetaModel.CalculationChain;

    // Получаем модель

    Model := mb.ItemByIdNamespace("MODEL_LINEARREGR", Ms.Key).Edit As IMsModel;

    // Добавляем полученную модель в цепочку расчета

    CalcChain.AddModel(Model);

    // Сохраняем изменения

    (Problem As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в контейнере моделирования будет создана
 задача, содержащая внутреннюю метамодель.


См. также:


[IMsProblem](IMsProblem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

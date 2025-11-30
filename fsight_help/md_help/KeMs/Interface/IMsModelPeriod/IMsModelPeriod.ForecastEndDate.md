# IMsModelPeriod.ForecastEndDate

IMsModelPeriod.ForecastEndDate
-


# IMsModelPeriod.ForecastEndDate


## Синтаксис


ForecastEndDate: [DateTime](ForeSys.chm::/Class/DateTime/DateTime.htm);


## Описание


Свойство ForecastEndDate определяет
 дату окончания периода прогнозирования.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором MODEL_SPACE. В контейнере создана модель
 с идентификатором MODEL_1.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    MB: IMetabase;

    Model: IMsModel;

    Period: IMsModelPeriod;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем модель

    Model := MB.ItemByIdNamespace("MODEL_1", MB.ItemById("MODEL_SPACE").Key).Edit As IMsModel;

    // Получаем периоды модели

    Period := Model.Transform.Period;

    // Задаём условия периода идентификации

    Period.IdentificationStartDate := DateTime.ComposeDay(2000, 1, 1);

    Period.IdentificationEndDate := DateTime.ComposeDay(2005, 12, 31);

    // Задаём условия периода прогнозирования

    Period.ForecastStartDate := DateTime.ComposeDay(2006, 1, 1);

    Period.ForecastEndDate := DateTime.ComposeDay(2010, 12, 31);

    // Задаём использование указанных периодов

    Model.UseModelPeriod := True;

    // Сохраняем изменения

    (Model As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера будут изменены периоды идентификации и прогнозирования
 для модели. Также для модели будет установлен признак использования указанных
 периодов при расчете задачи.


См. также:


[IMsModelPeriod](IMsModelPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IMsModelPeriod.AllowForecastBeforeIdent

IMsModelPeriod.AllowForecastBeforeIdent
-


# IMsModelPeriod.AllowForecastBeforeIdent


## Синтаксис


AllowForecastBeforeIdent: Boolean;


## Описание


Свойство AllowForecastBeforeIdent
 определяет, допустим ли период прогнозирования до периода идентификации.


## Комментарии


Допустимые значения:


	- True. Период прогнозирования
	 может идти до периода идентификации;


	- False. Период прогнозирования
	 может идти только после периода идентификации.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащим модель с идентификатором
 MODEL_FREEDIM.


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

    Model := MB.ItemByIdNamespace("MODEL_FREEDIM", MB.ItemById("MS").Key).Edit As IMsModel;

    // Получаем периоды модели

    Period := Model.Transform.Period;

    // Указываем, что период прогнозирования может идти до периода идентификации

    Period.AllowForecastBeforeIdent := True;

    // Задаем даты периода идентификации

    Period.IdentificationStartDate := DateTime.ComposeDay(2005, 1, 1);

    Period.IdentificationEndDate := DateTime.ComposeDay(2015, 12, 31);

    // Задаем даты периода прогнозирования

    Period.ForecastStartDate := DateTime.ComposeDay(2000, 1, 1);

    Period.ForecastEndDate := DateTime.ComposeDay(2004, 12, 31);

    // Указываем, что при расчете задачи моделирования будут использоваться периоды модели

    Model.UseModelPeriod := True;

    // Сохраняем изменения

    (Model As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера для модели будет задан период прогнозирования,
 идущий до периода идентификации.


См. также:


[IMsModelPeriod](IMsModelPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

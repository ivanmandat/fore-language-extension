# IMsModel.Chart

IMsModel.Chart
-


# IMsModel.Chart


## Синтаксис


Chart: [IChart](Chart.chm::/Interface/IChart/IChart.htm);


## Описание


Свойство Chart возвращает
 диаграмму модели.


## Комментарии


Диаграмма доступна только после расчета модели с помощью метода [IMsModel.Execute](IMsModel.Execute.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 ChartBox с идентификатором «ChartBox1».
 В репозитории должен существовать контейнер моделирования с идентификатором
 «MS», содержащий модель с идентификатором «MODEL_D».


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    MsKey: Integer;

    Model: IMsModel;

    Calcul: IMsModelCalculation;

    Per: IMsModelPeriod;

Begin

    // Получаем репозиторий

    mb := MetabaseClass.Active;

    // Получаем ключ контейнера моделирования

    MsKey := mb.GetObjectKeyById("MS");

    // Получаем модель

    Model := mb.ItemByIdNamespace("MODEL_D", MsKey).Bind As IMsModel;

    // Создаем параметры расчета модели

    Calcul := Model.CreateCalculation;

    // Задаем период расчета

    Per := Calcul.Period;

    Per.IdentificationStartDate := DateTime.Parse("01.01.1990");

    Per.IdentificationEndDate := DateTime.Parse("31.12.2010");

    Per.ForecastStartDate := DateTime.Parse("01.01.2011");

    Per.ForecastEndDate := DateTime.Parse("31.12.2015");

    // Рассчитываем модель

    Model.Execute(Calcul, -1);

    // Отображаем диаграмму модели в компоненте ChartBox1

    ChartBox1.Chart := Model.Chart;

End Sub UserProc;


В результате выполнения примера в компоненте «ChartBox1» будет отображена
 диаграмма модели «MODEL_D».


См. также:


[IMsModel](IMsModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

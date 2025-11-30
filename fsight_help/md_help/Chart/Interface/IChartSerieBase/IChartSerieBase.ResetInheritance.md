# IChartSerieBase.ResetInheritance

IChartSerieBase.ResetInheritance
-


# IChartSerieBase.ResetInheritance


## Синтаксис


		ResetInheritance(Value: [ChartSeriePropertyInheritance](../../Enums/ChartSeriePropertyInheritance.htm));


## Параметры


Value. Настройка, которую необходимо
 сбросить в соответствии с настройкой, заданной для ряда по умолчанию.


## Описание


Метод ResetInheritance сбрасывает
 настройку ряда и устанавливает для неё значение, определённое для ряда
 по умолчанию.


## Комментарии


Настройки ряда по умолчанию можно определить в свойстве [IChartSeries.DefaultSerie](../IChartSeries/IChartSeries.DefaultSerie.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором «REPORT». В отчёте на активном листе создана
 диаграмма. Диаграмма отображает минимум пять рядов данных.


Добавьте ссылки на системные сборки: Chart, Metabase, Report, Tab.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Rep: IPrxReport;

		    Tab: ITabSheet;

		    Chart: IChart;

		    Series: IChartSeries;

		    i: Integer;

		Begin

		    Mb := MetabaseClass.Active;

		    Rep := Mb.ItemById("REPORT").Edit As IPrxReport;

		    Tab := (Rep.ActiveSheet As IPrxTable).TabSheet;

		    Chart := Tab.Objects.Item(0) As IChart;

		    Series := Chart.Series;

		    Tab.BeginUpdate;

		    //Сброс настроек рядов

		    For i := 0 To 4 Do

		        Series.Item(i).ResetInheritance(ChartSeriePropertyInheritance.All);

		    End For;

		    Tab.EndUpdate;

		    //Сохранение отчёта

		    (Rep As IMetabaseObject).Save;

		End Sub UserProc;


При выполнении примера для первых пяти рядов данных будут сброшены настройки
 оформления.


См. также:


[IChartSerieBase](IChartSerieBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

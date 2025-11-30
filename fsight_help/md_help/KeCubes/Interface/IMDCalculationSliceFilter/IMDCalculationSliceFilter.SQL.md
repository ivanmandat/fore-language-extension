# IMDCalculationSliceFilter.SQL

IMDCalculationSliceFilter.SQL
-


# IMDCalculationSliceFilter.SQL


## Синтаксис


SQL: String;


## Описание


Свойство SQL определяет SQL-условие
 используемое для отбора элементов, по которым будет производиться расчет,
 в выбранном измерении.


## Комментарии


Актуально, если свойству [Type](IMDCalculationSliceFilter.Type.htm)
 установлено значение MDCalculationSliceFilterType.SQL.


## Пример


Для выполнения примера предполагается наличие в репозитории многомерного
 расчёта на сервере БД с идентификатором MDCalc_1. Приёмник данных построен
 на основе календарного измерения с идентификатором CALENDAR.


			Sub UserProc;

Var

    MB: IMetabase;

    MDInst: IMDCalculationInstance;

    Args: IMDCalculationCalculateArgs;

    Filter: IMDCalculationSliceFilter;

Begin

    MB := MetabaseClass.Active;

    MDInst := MB.ItemById("MDCalc_1").Open(Null) As IMDCalculationInstance;

    Args := MDInst.CreateCalculateArgs;

    // Фильтр с помощью SQL-условия

    Filter := Args.SliceFilter(MDInst.Calculation.Destination.Slices.FindById("CALENDAR"));

    Filter.Type := MDCalculationSliceFilterType.SQL;

    Filter.SQL := "%0:s >= TO_DATE('2025.01.01', 'YYYY.MM.DD') AND %0:s <= TO_DATE('2026.01.01', 'YYYY.MM.DD')";

    MDInst.Calculate(Args);

End Sub UserProc;


После выполнения примера будет осуществлен многомерный расчёт на сервере
 БД. Расчёт будет осуществляться по элементам, содержащим формулы и расположенные
 в период 2025-2026 г.


См. также:


[IMDCalculationSliceFilter](IMDCalculationSliceFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

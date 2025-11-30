# IEaxGrid.SparklinesPosition

IEaxGrid.SparklinesPosition
-


# IEaxGrid.SparklinesPosition


## Синтаксис


SparklinesPosition: [EaxSparklinesPosition](../../Enums/EaxSparklinesPosition.htm);


## Описание


Свойство SparklinesPosition
 определяет область построения спарклайнов в таблице.


## Комментарии


Спарклайны - небольшие диаграммы, отображающие данные только одного
 ряда. Спарклайны встраиваются в виде отдельной строки/столбца и строятся
 по данным, расположенным в строке/столбце. Если в таблице отображены спарклайны
 по строкам/столбцам и [итоги
 по строкам и/или столбцам](UiAnalyticalArea.chm::/Totals/Calculate_totals.htm), в таблице доступно отображение
 спарклайнов для итогов.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором EXPR_SLP_GRID, содержащего таблицу с данными, для которой
 настроено отображение итогов по столбцам.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Grid: IEaxGrid;

	Begin

	    // Получаем текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получаем экспресс-отчет

	    Express := MB.ItemById("EXPR_SLP_GRID").Edit As IEaxAnalyzer;

	    // Получаем таблицу экспресс-отчета

	    Grid := Express.Grid;

	    // Определяем отображение спарклайнов по строкам и для итогов

	    Grid.SparklinesPosition := EaxSparklinesPosition.Rows Or EaxSparklinesPosition.Totals;

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера в таблице экспресс-отчета будут отображены
 спарклайны по строкам и для итогов.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

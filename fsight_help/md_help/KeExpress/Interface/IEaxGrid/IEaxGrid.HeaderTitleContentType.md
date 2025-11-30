# IEaxGrid.HeaderTitleContentType

IEaxGrid.HeaderTitleContentType
-


# IEaxGrid.HeaderTitleContentType


## Синтаксис


HeaderTitleContentType: [EaxHeaderTitleContentType](../../Enums/EaxHeaderTitleContentType.htm);


## Описание


Свойство HeaderTitleContentType определяет
 вид наименования в заголовке [уголка
 таблицы](UiAnalyticalArea.chm::/TableView/Corner_show_dims.htm).


## Комментарии


Перед выбором вида наименования в заголовке уголка таблицы необходимо
 задать тип заголовка с помощью свойства [IEaxGrid.HeaderTitleType](IEaxGrid.HeaderTitleType.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета,
 содержащего таблицу данных, с идентификатором EXP_REPORT.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Grid: IEaxGrid;

	Begin

	    // Получаем текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получаем экспресс-отчет

	    MObj := MB.ItemById("EXP_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    // Получаем таблицу аналитической области данных

	    Grid := Expr.Grid;

	    // Задаём вид наименования в заголовке уголка таблицы

	    Grid.HeaderTitleType := EaxHeaderTitleType.Columns;

	    Grid.HeaderTitleContentType := EaxHeaderTitleContentType.DimensionAttributeName;

	    // Сохраняем отчет

	    MObj.Save;

	End Sub UserProc;


В результате выполнения примера в экспресс-отчете будут отображаться
 наименования атрибутов измерений по столбцам в заголовке уголка таблицы.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

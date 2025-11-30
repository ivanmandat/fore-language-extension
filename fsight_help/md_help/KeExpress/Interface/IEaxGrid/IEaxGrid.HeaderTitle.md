# IEaxGrid.HeaderTitle

IEaxGrid.HeaderTitle
-


# IEaxGrid.HeaderTitle


## Синтаксис


HeaderTitle: String;


## Описание


Свойство HeaderTitle определяет
 текст заголовка уголка.


## Комментарии


Текст может быть произвольным. Для пользовательского текста заголовка
 уголка надо использовать свойство [IEaxGrid.HeaderTitleType](IEaxGrid.HeaderTitleType.htm)
 со значением EaxHeaderTitleType.Custom.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором EXP_REPORT_HT.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Grid: IEaxGrid;

	Begin

	    // Получаем текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Получаем экспресс-отчет

	    MObj := mb.ItemById("EXP_REPORT_HT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    // Получаем таблицу

	    Grid := Expr.Grid;

	    // Задаем текст в уголке таблицы

	    Grid.HeaderTitleType := EaxHeaderTitleType.Custom;

	    Grid.HeaderTitle := "Произвольный текст";

	    // Сохраняем отчет

	    MObj.Save;

	End Sub UserProc;


В результате выполнения примера в экспресс-отчете в уголке будет задан
 пользовательский текст.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

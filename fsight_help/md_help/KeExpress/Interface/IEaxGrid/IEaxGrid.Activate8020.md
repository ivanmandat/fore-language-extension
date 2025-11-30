# IEaxGrid.Activate8020

IEaxGrid.Activate8020
-


# IEaxGrid.Activate8020


## Синтаксис


Activate8020(Value: Boolean);


## Параметры


Value. Признак активации анализа
 80/20.


## Описание


Метод Activate8020 осуществляет
 активацию/деактивацию анализа 80/20.


## Комментарии


Допустимые значения признака активации:


	- True. Анализ 80/20 активирован;


	- False. Анализ 80/20
	 не активирован.


## Пример


Для выполнения примера предполагается наличие экспресс-отчета с идентификатором
 EXPRESS_REPORT.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Grid: IEaxGrid;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Grid := Expr.Grid;

	    Grid.Activate8020(True);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для первого столбца с данными экспресс-отчета
 будет активирован анализ 80/20. По умолчанию будет активирован вариант
 распределения «Первые 80%».


См. также:


[IEaxGrid](IEaxGrid.htm) | [Анализ 80/20](UiAnalyticalArea.chm::/Analysis/distribution.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

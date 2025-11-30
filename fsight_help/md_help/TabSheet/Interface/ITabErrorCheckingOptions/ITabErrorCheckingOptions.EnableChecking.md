# ITabErrorCheckingOptions.EnableChecking

ITabErrorCheckingOptions.EnableChecking
-


# ITabErrorCheckingOptions.EnableChecking


## Синтаксис


EnableChecking: Boolean;


## Описание


Свойство EnableChecking определяет,
 осуществляется ли проверка и индикация ошибок в формулах.


## Комментарии


Допустимые значения:


	- True. Осуществляется
	 проверка формул и индикация ошибок;


	- False. Проверка формул
	 не производится. Пустые значения заменяются нулями для вычисления
	 формул.


Для определения цвета индикатора, отображаемого в ячейках, формулы которых
 содержат ошибки, используйте свойство [ITabErrorCheckingOptions.ErrorIndicatorsColor](ITabErrorCheckingOptions.ErrorIndicatorsColor.htm).


## Пример


Для выполнения примера предполагается наличие регламентного отчета с
 идентификатором «REGULAR_REPORT».


Добавьте ссылки на системные сборки Metabase, Report, Tab, Drawing.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    ErrOptions, Result: ITabErrorCheckingOptions;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("REGULAR_REPORT").Edit As IPrxReport;

    // == Параметры индикации ошибок ==

    ErrOptions := Report.Options.ErrorCheckingOptions;

    // Проверка и индикация ошибок

    ErrOptions.EnableChecking := True;

    // Действие для проверки формул, ссылающихся на пустые ячейки

    ErrOptions.EmptyValuesTreatmentType := TabEmptyValuesTreatmentType.AsZeroWithInfo;

    // Цвет индикатора

    ErrOptions.ErrorIndicatorsColor := GxColor.FromName("Blue");

    // Проверка, являются ли числа в ячейках текстом

    ErrOptions.NumberAsText := True;

    // Сброс пропущенных ошибок

    ErrOptions.ResetSkippedErrors;

    // Заполнение параметров индикации ошибок

    Result := ErrOptions;

    ErrOptions.Assign(Result);

    // Сохранение отчета

    (Report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера будут настроены параметры индикации ошибок
 в формулах таблицы:


	- включена проверка и индикация ошибок;


	- в формулы, ссылающиеся на пустые значения, для расчета будет
	 подставляться ноль и отображаться индикатор ошибки;


	- числа, отформатированные как текст, будут помечены ошибочными;


	- пропущенные ошибки будут сброшены.


См. также:


[ITabErrorCheckingOptions](ITabErrorCheckingOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IEaxDataArea.CalcOnChangedData

IEaxDataArea.CalcOnChangedData
-


# IEaxDataArea.CalcOnChangedData


## Синтаксис


CalcOnChangedData: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство CalcOnChangedData определяет,
 используется ли [расчёт
 формул](UiAnalyticalArea.chm::/Working_with_table_data/FormulaCalculation.htm) на измененных данных без предварительного сохранения
 данных в аналитической области.


## Комментарии


Допустимые значения:


	- TriState.OnOption. Расчёт
	 формул на измененных данных производится;


	- TriState.OffOption.
	 Расчёт формул на измененных данных не производится;


	- TriState.Undefined.
	 Значение по умолчанию. Расчёт формул на измененных данных не
	 производится.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Area: IEaxDataArea;

	Begin

	     // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим аналитическую область экспресс-отчёта

	    Area := Express.DataArea;

	    // Установим расчёт формул на измененных данных

	    If ( Area.CalcOnChangedData = TriState.OffOption) Or (Area.CalcOnChangedData = TriState.Undefined) Then

	        Area.CalcOnChangedData := TriState.OnOption;

	    End If;

	    // Сохраним отчёт

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера для аналитической области будет включен
 расчёт формул на измененных данных без предварительного сохранения данных.


См. также:


[IEaxDataArea](IEaxDataArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

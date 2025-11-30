# IPrxControl.RecalcSliceOnly

IPrxControl.RecalcSliceOnly
-


# IPrxControl.RecalcSliceOnly


## Синтаксис


RecalcSliceOnly: Boolean;


## Описание


Свойство RecalcSliceOnly определяет,
 будут ли вычисляться визуализаторы среза, измерение которого задано в
 качестве [управляемого измерения](IPrxControl.Dimension.htm),
 при смене значения элемента управления.


## Комментарии


Для использования свойства требуется, чтобы свойство [IPrxControl.RecalcOnChange](IPrxControl.RecalcOnChange.htm)
 имело значение True.


Допустимые значения:


	- True. Визуализаторы
	 будут вычисляться;


	- False. Визуализаторы
	 не будут вычисляться. Значение по умолчанию.


## Пример


Для выполнения примера необходимо наличие в репозитории регламентного
 отчёта с идентификатором REPORT. В отчёт добавлен источник данных и минимум
 один элемент управления, для которого указано управляемое измерение.


Добавьте ссылки на системные сборки: Metabase, Report.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IPrxReport;

    Contrls: IPrxControls;

    Contrl: IPrxControl;

Begin

    // Получаем репозиторий

    Mb := MetabaseClass.Active;

    // Получаем отчёт

    Report := MB.ItemById("REPORT").Edit As IPrxReport;

    // Получаем коллекцию элементов управления отчёта

    Contrls := Report.Controls;

    // Получаем элемент управления

    Contrl := Contrls.Item(0);

    // Задаем настройки вычисления отчёта

    Contrl.RecalcOnChange := True;

    Contrl.RecalcSliceOnly := True;

    // Сохраняем отчёт

    (Report As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера в отчёте будет установлен флажок «Вычислять при смене значения» и
 выбрано «[Только
 указанный срез](UIRepor.chm::/desktop/Source/UiReport_Source_ControlProp.htm)».


См. также:


[IPrxControl](IPrxControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

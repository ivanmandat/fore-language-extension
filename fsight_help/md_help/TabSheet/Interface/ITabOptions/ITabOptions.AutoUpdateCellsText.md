# ITabOptions.AutoUpdateCellsText

ITabOptions.AutoUpdateCellsText
-


# ITabOptions.AutoUpdateCellsText


## Синтаксис


AutoUpdateCellsText: Boolean;


## Описание


Свойство AutoUpdateCellsText
 определяет автоматическое обновление ячеек для корректного отображения
 множественной отметки справочника и группы элементов в ячейке.


## Комментарии


Допустимые значения:


	- True. Автоматическое
	 обновление ячеек выполняется;


	- False. Автоматическое
	 обновление ячеек не выполняется.


Свойство используется для отображения множественной отметки элементов
 справочника в ячейке регламентного отчёта, если дополнительно задана [группа
 элементов](UiNav.chm::/GUI/ValueEditorParameters.htm#dimension) в составе и отметке справочника. Множественная
 отметка элементов справочника отображается в ячейке с помощью типа значений
 «[Раскрывающийся
 список справочника](UiNav.chm::/GUI/ValueEditorParameters.htm#dimension)».


Группу элементов можно задать из другого справочника с помощью [редактора
 ячейки](UiNav.chm::/GUI/Format/UiReport_Table_Attribute_Format.htm#cell_editor) в формате:


GROUP="@<ключ
 группы элементов>"


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REPORT. Отчёт содержит аналитическую область
 данных, в которой отображается ячейка в виде [раскрывающегося
 списка](UiNav.chm::/GUI/ValueEditorParameters.htm#dimension). В раскрывающемся списке доступна множественная
 отметка элементов справочника, а также группа элементов другого справочника,
 заданная в [редакторе
 ячейки](UiNav.chm::/GUI/Format/UiReport_Table_Attribute_Format.htm#cell_editor) и в настройках [редактора
 значений](UiNav.chm::/GUI/ValueEditorParameters.htm#dimension).


Добавьте ссылки на системные сборки: Metabase, Report, Tab.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Report: IPrxReport;

	    Tab: ITabSheet;

	    Opt: ITabOptions;

	Begin

	    // Получаем текущий репозиторий

	    Mb := MetabaseClass.Active;

	    // Получаем регламентный отчет

	    Report := Mb.ItemById("REPORT").Edit As IPrxReport;

	    // Получаем таблицу активного
	 листа отчета

	    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

	    // Разрешаем автоматическое обновление ячеек

	    Opt := Tab.Options;

	    Opt.AutoUpdateCellsText := True;

	    // Сохраняем изменения

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет выполнятся автоматическое обновление
 ячеек регламентного отчёта для корректного отображения множественной отметки
 элементов справочника и группы элементов другого справочника в ячейке
 при выборе элементов из раскрывающегося списка.


См. также:


[ITabOptions](ITabOptions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

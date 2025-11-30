# ITabCellStyle.ActivationEditorMode

ITabCellStyle.ActivationEditorMode
-


# ITabCellStyle.ActivationEditorMode


## Синтаксис


		ActivationEditorMode: [TabActivationEditorMode](../../Enums/TabActivationEditorMode.htm);


## Описание


Свойство ActivationEditorMode
 определяет тип активации редактора ячейки.


## Комментарии


Для задания настроек редактора значений используйте свойство [ITabCellStyle.Binding](ITabCellStyle.Binding.htm).


Если для ячейки не задан редактор значений, то будет активирован редактор,
 соответствующий типу данных ячейки.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчета с идентификатором REPORT_ACT_EDITOR.


Добавьте ссылки на системные сборки: Metabase, Report, Tab.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    Report: IPrxReport;

		    BM: IBindingManager;

		    ComboBoxBinding: IBindingComboBox;

		    Tab: ITabSheet;

		    Style, UStyle: ITabCellStyle;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем регламентный отчет

		    Report := mb.ItemById("REPORT_ACT_EDITOR").Edit As IPrxReport;

		    // Создаем и настраиваем редактор значений в виде раскрывающегося списка

		    BM := New BindingManager.Create;

		    ComboBoxBinding := BM.CreateByUi("ComboBox") As IBindingComboBox;

		    ComboBoxBinding.Items := "1;2;3;4;5";

		    ComboBoxBinding.ListMode := True;

		    ComboBoxBinding.Separators := ";";

		    ComboBoxBinding.Value := "3";

		    // Получаем стиль ячейки в левом верхнем углу активного листа отчета

		    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

		    Style := Tab.Cell(0, 0).Style;

		    // Указываем, что для ячейки используется созданный редактор значений

		    Style.Binding := ComboBoxBinding.AsString;

		    // Указываем, что редактор будет активироваться, если ячейка получит фокус

		    Style.ActivationEditorMode := TabActivationEditorMode.OnFocus;

		    // Получаем стиль другой ячейки активного листа отчета

		    UStyle := Tab.Cell(1, 1).Style;

		    // Указываем, что ячейка не будет выделятся

		    UStyle.Unselectable := TriState.OnOption;

		    // Сохраняем изменения

		    (Report As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера для ячейки в левом верхнем углу активного
 листа отчета будет настроен редактор значений в виде раскрывающегося списка.
 Данный редактор будет активироваться при получении фокуса ячейкой. При
 просмотре отчёта при выделении ячеек одна ячейка выделяться не будет.


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

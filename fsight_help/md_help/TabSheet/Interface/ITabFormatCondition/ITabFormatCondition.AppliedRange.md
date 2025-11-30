# ITabFormatCondition.AppliedRange

ITabFormatCondition.AppliedRange
-


# ITabFormatCondition.AppliedRange


## Синтаксис


AppliedRange: [ITabRange](../ITabRange/ITabRange.htm);


## Описание


Свойство AppliedRange определяет
 диапазон ячеек, для которых выполняется [условное
 форматирование](UiAnalyticalArea.chm::/Analysis/Conditional_formatting.htm).


## Комментарии


Для настройки условного форматирования используйте интерфейс [ITabFormatCellContent](../ITabFormatCellContent/ITabFormatCellContent.htm).


Для получения списка [условий
 форматирования](UiAnalyticalArea.chm::/Analysis/Conditional_formatting.htm), которые выполняются для ячейки или
 диапазона ячеек, используйте [ITabRange.AppliedFormatConditions](../ITabRange/ITabRange.AppliedFormatConditions.htm).


## Пример


Для выполнения примера предполагается наличие формы с набором компонентов:


	- [Button](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Button.htm). Компонент,
	 реализующий кнопку, с наименованием «Button1»;


	- [UiTabSheet](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiTabSheet.htm). Компонент,
	 являющийся источником данных для компонента TabSheetBox, с наименованием «UiTabSheet1»;


	- [TabSheetBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/TabSheetBox.htm).
	 Компонент, отображающий таблицу, с наименованием «TabSheetBox1». Выберите
	 для компонента источник данных «UiTabSheet1» в свойстве «Source»;


	- [Memo](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Memo.htm). Компонент,
	 представляющий собой многострочный текстовый редактор, с наименованием
	 «Memo1».


Добавьте ссылки на системные сборки: Tab, Forms, Drawing.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    TSheet: ITabSheet;

    Range: ITabRange;

    FormCond: ITabFormatCondition;

    ValFormat: ITabFormatCellContent;

    Style: ITabCellStyle;

    Format: ITabFormatConditions;

Begin

    // Добавим в таблицу значения

    TSheet:= UiTabSheet1.TabSheet;

    TSheet.Cell(0, 0).Value := 5;

    TSheet.Cell(1, 0).Value := 6;

    TSheet.Cell(2, 0).Value := 2;

    TSheet.Cell(3, 0).Value := 7;

    // Выделим столбец с добавленными значениями

    TSheet.View.Selection.SelectColumns;

    // Добавим условное форматирование для выделенных значений

    TSheet := TabSheetBox1.Source.GetTabSheet;

    Range := TSheet.View.Selection.Range;

    FormCond := Range.FormatConditions.Add;

    FormCond.Type := TabConditionType.CellContent;

    ValFormat := FormCond.Details As ITabFormatCellContent;

    // Зададим условие «значение ячейки больше пяти»

    ValFormat.ContentType := TabFormatContentType.CellValue;

    ValFormat.ValueCondition := TabConditionCellContentValue.Above;

    ValFormat.CellValue := 5;

    // Создадим стиль для ячеек, в которых выполняется условие

    Style := New TabCellStyle.Create;

    Style.BackgroundColor := GxColor.FromName("Yellow");

    ValFormat.Style := Style;

    // Определим адреса ячеек, в которых выполняется условие

    Format := Range.FormatConditions;

    FormCond := Format.Item(0);

    Memo1.Text := FormCond.AppliedRange.Address;

End Sub Button1OnClick;


После нажатия на кнопку в таблице будет отображено условное форматирование
 к заданным значениям:


	- все значения больше пяти будут выделены желтым цветом;


	- адреса ячеек, в которых выполняется условие форматирования,
	 будут содержаться в компоненте Memo1.


См. также:


[ITabFormatCondition](ITabFormatCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

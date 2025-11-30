# ITabFormatConditions.Add

ITabFormatConditions.Add
-


# ITabFormatConditions.Add


## Синтаксис


Add: [ITabFormatCondition](../ITabFormatCondition/ITabFormatCondition.htm);


## Описание


Метод Add добавляет новый условный
 формат и возвращает на него ссылку.


## Пример


Для выполнения примера предполагается наличие формы. Разместите на форме
 компоненты [Button](uidevenv.chm::/02_Components_constructor_forms/01_Standart_Components/Button.htm),
 [TabSheetBox](uidevenv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/TabSheetBox.htm),
 [UiTabSheet](uidevenv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiTabSheet.htm)
 с наименованиями «Button1», «TabSheetBox1» и «UiTabSheet1» соответственно.
 Для компонента TabSheetBox
 установите свойству Source значение
 «UiTabSheet1».


Добавьте ссылки на системные сборки: Drawing, ExtCtrls, Forms, Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Tab: ITabSheet;

	    Range: ITabRange;

	    Conds: ITabFormatConditions;

	    Cond: ITabFormatCondition;

	    ValFormat: ITabFormatCellContent;

	    Style: ITabCellStyle;

	Begin

	    Style := New TabCellStyle.Create;

	    Style.Font.Color := GxColor.FromName("White");

	    Style.BackgroundBrush := New GxSolidBrush.Create(GxColor.FromName("Black"));

	    Tab := TabSheetBox1.Source.GetTabSheet;

	    // Получение диапазона ячеек

	    Range := Tab.ParseRange("A0:D3");

	    // Условные форматы диапазона ячеек

	    Conds := Range.FormatConditions;

	    // Отключение применения условных форматов

	    Conds.BeginUpdate;

	    Debug.WriteLine("Применение условных форматов отключено: " + Conds.IsInUpdate.ToString);

	    // Добавление условного формата

	    Cond := Conds.Add;

	    Cond.Type := TabConditionType.CellContent;

	    ValFormat := Cond.Details As ITabFormatCellContent;

	    ValFormat.ContentType := TabFormatContentType.CellValue;

	    ValFormat.ValueCondition := TabConditionCellContentValue.Above;

	    ValFormat.CellValue := 50;

	    ValFormat.Style := Style;

	    //...

	    // Дальнейшая настройка других условных форматов

	    //...

	    // Применение изменений условных форматов

	    Conds.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку для заданного диапазона
 ячеек будут добавлен условный формат, осуществляющий форматирование ячеек
 с определёнными значениями. Значения ячеек больше «50» будут отображаться
 белым шрифтом на чёрном фоне.


См. также:


[ITabFormatConditions](ITabFormatConditions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

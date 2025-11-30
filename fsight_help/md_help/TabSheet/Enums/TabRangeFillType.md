# TabRangeFillType

TabRangeFillType
-


# TabRangeFillType


## Описание


Перечисление TabRangeFillType
 содержит способы заполнения диапазона.


Используется следующим методом:


	- [ITabRange.AutoFill](../Interface/ITabRange/ITabRange.AutoFill.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 1
		 Formats. При заполнении
		 будет скопировано только оформление ячеек.

При копировании оформления копируются следующие
		 свойства стиля ячеек:


			- BackgroundColor;


			- [Binding](../Interface/ITabCellStyle/ITabCellStyle.Binding.htm);


			- [BorderColor](../Interface/ITabCellStyle/ITabCellStyle.BorderColor.htm);


			- [BorderStyle](../Interface/ITabCellStyle/ITabCellStyle.BorderStyle.htm);


			- [BorderWeight](../Interface/ITabCellStyle/ITabCellStyle.BorderWeight.htm);


			- [CustomFormat](../Interface/ITabCellStyle/ITabCellStyle.CustomFormat.htm);


			- [DisplayEmptyAs](../Interface/ITabCellStyle/ITabCellStyle.DisplayEmptyAs.htm);


			- [DisplayZeroAs](../Interface/ITabCellStyle/ITabCellStyle.DisplayZeroAs.htm);


			- [Font](../Interface/ITabCellStyle/ITabCellStyle.Font.htm);


			- [HorizontalAlignment](../Interface/ITabCellStyle/ITabCellStyle.HorizontalAlignment.htm);


			- [Hyperlink](../Interface/ITabCellStyle/ITabCellStyle.Hyperlink.htm);


			- [LocalCustomFormat](../Interface/ITabCellStyle/ITabCellStyle.LocalCustomFormat.htm);


			- [Margins](../Interface/ITabCellStyle/ITabCellStyle.Margins.htm);


			- PatternColor;


			- PatternStyle;


			- [VerticalAlignment](../Interface/ITabCellStyle/ITabCellStyle.VerticalAlignment.htm);


			- [WrapText](../Interface/ITabCellStyle/ITabCellStyle.WrapText.htm).


		 2
		 Values. При заполнении
		 будут скопированы только данные ячеек ([Формулы](../Interface/ITabRange/ITabRange.Formula.htm),
		 [значения](../Interface/ITabRange/ITabRange.Value.htm)
		 и [текст](../Interface/ITabRange/ITabRange.Text.htm)).
		 При использовании данного способа в методе [ITabRange.AutoFill](../Interface/ITabRange/ITabRange.AutoFill.htm)
		 можно указать шаг заполнения.


		 4
		 Fill. При заполнении
		 будет использован метод [линейного
		 тренда](UiNav.Chm::/GUI/UiExpress_Tabl_Operation_AutoFillData.htm).


		 5
		 Default_. Способ заполнения
		 по умолчанию. По умолчанию при заполнении будут скопированы данные
		 ячеек, их оформление и использован метод [линейного
		 тренда](UiNav.Chm::/GUI/UiExpress_Tabl_Operation_AutoFillData.htm).


См. также:


[Перечисления
 сборки Tab](TabSheet_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

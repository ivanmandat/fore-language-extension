# ILaner.CellStyle

ILaner.CellStyle
-


# ILaner.CellStyle


## Синтаксис


CellStyle(CellType: [LnCellType](../../Enums/LnCellType.htm)):
 [ILanerCellStyle](../ILanerCellStyle/ILanerCellStyle.htm);


## Параметры


CellType. Тип ячеек.


## Описание


Свойство CellStyle возвращает
 стиль оформления ячеек таблицы данных. Тип ячеек, стиль оформления которых
 необходимо получить, задается через параметр CellType.


Примечание.
 Данное свойство возвращает стиль оформления для ячеек любого типа, кроме
 [LnCellType.Normal](../../Enums/LnCellType.htm).


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с наименованиями Button1, TabSheetBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для TabSheetBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов, содержащая совмещенный ряд.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Drawing, Express, ExtCtrls, Forms,
 Laner, Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAnalyzer: IEaxAnalyzer;

	    Laner: ILaner;

	    Style: ILanerCellStyle;

	    Grid: IEaxGrid;

	Begin

	    ErAnalyzer := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAnalyzer.Laner;

	    Style := Laner.CellStyle(LnCellType.Splice);

	    // Изменяем цвет шрифта на красный

	    Style.FontColor := GxColor.FromName("Red");

	    // Изменяем цвет фона ячеек на оранжевый

	    Style.BackgroundColor := GxColor.FromName("Orange");

	    // Изменяем шрифт на «Arial»

	    Style.Font := New GxFont.Create("Arial", 8);

	    Grid := ErAnalyzer.Grid;

	    Grid.Refresh;

	End Sub Button1OnClick;


После выполнения примера будет изменено оформление для ячеек рядов,
 которые являются дочерними для результирующего совмещенного ряда:


![](../ILanerCellStyle/ILanerCellStyle_BackgroundColor.gif)


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

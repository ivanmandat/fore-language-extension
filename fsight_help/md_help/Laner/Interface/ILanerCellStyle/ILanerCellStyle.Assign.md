# ILanerCellStyle.Assign

ILanerCellStyle.Assign
-


# ILanerCellStyle.Assign


## Синтаксис


Assign(Value: [ILanerCellStyle](ILanerCellStyle.htm));


## Параметры


Value. Стиль оформления.


## Описание


Метод Assign устанавливает стиль
 ячеек в соответствии с заданным стилем.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с наименованиями Button1, TabSheetBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для TabSheetBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов, содержащая совмещенный ряд. Также предполагается наличие переменной
 «NormStyle», содержащей стиль оформления ячейки рабочей области.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAnalyzer: IEaxAnalyzer;

	    Laner: ILaner;

	    NormStyle, SplStyle: ILanerCellStyle;

	    Grid: IEaxGrid;

	Begin

	    ErAnalyzer := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAnalyzer.Laner;

	    SplStyle := Laner.CellStyle(LnCellType.Splice);

	    SplStyle.Assign(NormStyle);

	    Grid.Refresh;

	End Sub Button1OnClick;


После выполнения примера для ячеек рядов, которые являются дочерними
 для результирующего совмещенного ряда, оформление будет изменено на оформление,
 содержащееся в переменной «NormStyle».


См. также:


[ILanerCellStyle](ILanerCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

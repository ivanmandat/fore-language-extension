# ILanerTopHeader.DimensionDate

ILanerTopHeader.DimensionDate
-


# ILanerTopHeader.DimensionDate


## Синтаксис


DimensionDate(SlotIndex: Integer; ElementIndex:Integer):
 DateTime;


## Параметры


SlotIndex. Индекс слота в заголовке;


ElementIndex. Индекс элементов
 в заголовке.


## Описание


Свойство DimensionDate возвращает
 календарную точку, соответствующую указанному элементу в шапке заголовка.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с наименованиями Button1, TabSheetBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для TabSheetBox1.
 В UiErAnalyzer1 должна быть загружена рабочая книга базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	    Tbl: ILanerTable;

	    TopH: ILanerTopHeader;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    Tbl := Laner.Execute;

	    TopH := Tbl.TopHeader;

	    Debug.WriteLine(TopH.DimensionDate(0, 0));

	End Sub Button1OnClick;


После выполнения примера в окно консоли будет выведена первая календарная
 точка рабочей книги.


См. также:


[ILanerTopHeader](ILanerTopHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

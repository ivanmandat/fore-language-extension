# ILanerSerie.SelectedUnit

ILanerSerie.SelectedUnit
-


# ILanerSerie.SelectedUnit


## Синтаксис


SelectedUnit: Variant;


## Описание


Свойство SelectedUnit определяет
 единицы измерения, в которых отображаются данные ряда.


## Комментарии


Значение данного свойства соответствует значению атрибута «UNIT» для
 показателя.


Свойство не сохраняется. Оно влияет только на отображение данных в рабочей
 области.


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

	    Laner: ILaner;

	    Serie: ILanerSerie;

	Begin

	    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

	    Serie := laner.Series.Item(0);

	    Serie.SelectedUnit := 3530;

	End Sub Button1OnClick;


После выполнения примера единицы измерения для отображения первого ряда
 данных будут изменены.


См. также:


[ILanerSerie](ILanerSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

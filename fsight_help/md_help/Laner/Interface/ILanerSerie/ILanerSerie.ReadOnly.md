# ILanerSerie.ReadOnly

ILanerSerie.ReadOnly
-


# ILanerSerie.ReadOnly


## Синтаксис


ReadOnly: Boolean;


## Описание


Свойство ReadOnly определяет,
 доступен ли ряд только для чтения.


## Комментарии


Допустимые значения:


	- True. Ряд доступен только
	 для чтения;


	- False. Ряд доступен
	 для редактирования.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая книга базы данных временных
 рядов. Перед выполнением примера выделите один ряд в компоненте в LanerBox1.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub ReadOnlySeries;

	Var

	    Series: ILanerSerie;

	Begin

	    Series := LanerBox1.SelectedSeries(0);

	    Series.ReadOnly := True;

	End Sub ReadOnlySeries;


Результат выполнения примера: ряд, выделенный в «LanerBox1», будет доступен
 только для чтения.


См. также:


[ILanerSerie](ILanerSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

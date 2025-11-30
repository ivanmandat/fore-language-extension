# ILanerResultsBox.DerivedSerieVisible

ILanerResultsBox.DerivedSerieVisible
-


# ILanerResultsBox.DerivedSerieVisible


## Синтаксис


DerivedSerieVisible(SerieType: [LnDerivedSerieType](Laner.chm::/Enums/LnDerivedSerieType.htm)):
 Boolean;


## Параметры


SerieType. Тип дочернего ряда.


## Описание


Свойство DerivedSerieVisible
 определяет видимость дочерних рядов вычисляемого ряда на диаграмме.


## Комментарии


Допустимые значения:


	- True. Ряд отображается
	 на диаграмме;


	- False. Ряд не отображается
	 на диаграмме.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента LanerBox, компонента
 LanerResultsBox с наименованием «LanerResultsBox1» и компонента UiErAnalyzer,
 являющегося источником данных для LanerBox и LanerResultsBox. В «UiErAnalyzer1»
 должна быть загружена рабочая книга базы данных временных рядов.


Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender:Object; Args: IMouseEventArgs);

	Begin

	    LanerResultsBox1.DerivedSerieVisible(LnDerivedSerieType.Modelling) := False;

	End Sub Button1OnClick;


После выполнения примера модельный ряд не будет отображаться на диаграмме
 для вычисляемых рядов.


См. также:


[ILanerResultsBox](ILanerResultsBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

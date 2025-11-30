# ILanerResultsBox.ContainerVisible

ILanerResultsBox.ContainerVisible
-


# ILanerResultsBox.ContainerVisible


## Синтаксис


ContainerVisible(ContainerType: [LanerBoxContainerType](../../Enums/LanerBoxContainerType.htm)):
 Boolean;


## Параметры


ContainerType. Панель компонента
 LanerResultsBox.


## Описание


Свойство ContainerVisible определяет,
 отображать ли указанную панель.


## Комментарии


Допустимые значения:


	- True. Отображать указанную
	 панель;


	- False. Не отображать
	 указанную панель.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента LanerBox, компонента
 LanerResultsBox с наименованием «LanerResultsBox1» и компонента UiErAnalyzer,
 являющегося источником данных для LanerBox и LanerResultsBox. В «UiErAnalyzer1»
 должна быть загружена рабочая книга базы данных временных рядов.


Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    LanerResultsBox1.ContainerVisible(LanerBoxContainerType.Chart) := False;

	End Sub Button1OnClick;


После выполнения примера панель «Диаграмма» будет скрыта.


См. также:


[ILanerResultsBox](ILanerResultsBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# IDimensionViewer.AdjustWidthOnlyVisible

IDimensionViewer.AdjustWidthOnlyVisible
-


# IDimensionViewer.AdjustWidthOnlyVisible


## Синтаксис


AdjustWidthOnlyVisible: Boolean;


## Описание


Свойство AdjustWidthOnlyVisible
 определяет способ автоподгонки ширины столбцов.


## Комментарии


Допустимые значения:


	- True. Для автоподгонки
	 учитывается только ширина элементов, отображаемых в компоненте на
	 данный момент. Ширина элементов, доступных в компоненте с помощью
	 прокрутки, но не отображаемых на данный момент, не учитывается;


	- False. По умолчанию.
	 Для автоподгонки учитывается ширина всех элементов в компоненте.


Для выполнения автоподгонки ширины дважды щёлкните по границе между
 столбцами или используйте метод [IDimensionViewer.AdjustWidth](IDimensionViewer.AdjustWidth.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента DimensionTree с наименованием
 «DimensionTree1» и
 компонента UiDimension, который является источником данных для
 «DimensionTree1». К UiDimension
 подключен какой-либо справочник.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    DimensionTree1.ShowColumnHeaders := True;

	    DimensionTree1.AdjustWidthOnlyVisible := True;

	    DimensionTree1.HighlightTrack := False;

	    DimensionTree1.ShowHeaderButton := True;

	    DimensionTree1.AdjustWidth(0);

	    DimensionTree1.UseSystemImages := True;

	End Sub Button1OnClick;


При нажатии на кнопку в компоненте «DimensionTree1» будут отображены
 заголовки столбцов и кнопка для вызова их меню, будет выполнена автоподгонка
 ширины первого столбца с учётом только видимых элементов, будет отключена
 подсветка элементов при наведении на них мыши, будут использованы системные
 пиктограммы.


См. также:


[IDimensionViewer](IDimensionViewer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# ILanerBox.ShowMethodsBar

ILanerBox.ShowMethodsBar
-


# ILanerBox.ShowMethodsBar


## Синтаксис


ShowMethodsBar: Boolean;


## Описание


Свойство ShowMethodsBar определяет,
 отображать ли панель моделирования в компоненте.


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 Панель моделирования отображается в компоненте;


	- False. Панель моделирования
	 не отображается в компоненте.


Внешний вид панели моделирования и её назначение приведены в разделе
 «[Описание
 интерфейса анализа временных рядов](UiDw.chm::/Purpose/UiDw_Purpose_Basic_Window.htm)».


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента LanerBox с наименованием
 «LanerBox1» и компонента UiErAnalyzer, являющегося источником данных для
 LanerBox. В UiErAnalyzer должна быть загружена рабочая книга базы данных
 временных рядов.


Описанная процедура должна быть назначена обработчиком события OnClick
 для кнопки. Пример выполняется при нажатии кнопки.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    LanerBox1.ShowMethodsBar := False;

	    LanerBox1.ShowToolbar := False;

	    LanerBox1.ShowDimPanel := False;

	End Sub Button1OnClick;


После выполнения примера для LanerBox будут скрыты панель моделирования,
 панель инструментов и панель размерностей (при переходе в многомерный
 режим).


См. также:


[ILanerBox](ILanerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

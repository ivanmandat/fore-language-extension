# LanerBox.OnMoveAttribute

LanerBox.OnMoveAttribute
-


# LanerBox.OnMoveAttribute


## Синтаксис


OnMoveAttribute(Sender: Object; Args: [ILanerBoxAttributeEventArgs](../../Interface/ILanerBoxAttributeEventArgs/ILanerBoxAttributeEventArgs.htm));


## Параметры


Sender. Компонент, сгенерировавший
 событие;


Args. Параметры события.


## Описание


Событие OnMoveAttribute наступает
 при перемещении в рабочей книге столбцов со значениями атрибутов показателей.


## Комментарии


Параметры данного события нельзя изменить. Args.Index
 возвращает индекс перемещенного атрибута.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента LanerBox с наименованием «LanerBox1», компонента UiErAnalyzer,
 являющегося источником данных для LanerBox. В UiErAnalyzer должна быть
 загружена рабочая книга базы данных временных рядов. Также на форме
 присутствует компонент Memo с наименованием «Memo1».


Описанная процедура должна быть назначена обработчиком события OnMoveAttribute
 для LanerBox.


	Sub LanerBox1OnMoveAttribute(Sender: Object; Args: ILanerBoxAttributeEventArgs);

	Var

	    Col: Integer;

	Begin

	    Col := Args.Index + 2;

	    Memo1.Lines.Clear;

	    Memo1.Lines.Add("Была перемещена колонка №" + ColCount.ToString);

	End Sub LanerBox1OnMoveAttribute;


После перемещения столбцов со значениями атрибутов показателей в компонент
 «Memo1» будет выведен номер перемещенного столбца.


См. также:


[LanerBox](LanerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# LanerBox.OnMoveSerie

LanerBox.OnMoveSerie
-


# LanerBox.OnMoveSerie


## Синтаксис


OnMoveSerie(Sender: Object; Args: [LanerBoxSerieEventArgs](../LanerBoxSerieEventArgs/LanerBoxSerieEventArgs.htm));


## Параметры


Sender. Компонент, сгенерировавший
 событие;


Args. Параметры события.


## Описание


Событие OnMoveSerie наступает
 при перемещении ряда в рабочей книге.


## Комментарии


Параметры данного события нельзя изменить.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента LanerBox с наименованием «LanerBox1», компонента UiErAnalyzer,
 являющегося источником данных для LanerBox. В UiErAnalyzer должна быть
 загружена рабочая книга базы данных временных рядов. Также на форме
 присутствует компонент Memo с наименованием «Memo1».


Описанная процедура должна быть назначена обработчиком события OnMoveSerie
 для LanerBox.


	Sub LanerBox1OnMoveSerie(Sender: Object; Args: ILanerBoxSerieEventArgs);

	Begin

	    Memo1.Lines.Add("Индекс перемещенного
	 ряда: " + Args.SerieIndex.ToString);

	End Sub LanerBox1OnMoveSerie;


После перемещения ряда в рабочей книге информация об этом будет выведена
 в компонент «Memo1».


См. также:


[LanerBox](LanerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# LanerBox.OnAddSerie

LanerBox.OnAddSerie
-


# LanerBox.OnAddSerie


## Синтаксис


OnAddSerie(Sender: Object; Args: [ILanerBoxSerieEventArgs](../../Interface/ILanerBoxSerieEventArgs/ILanerBoxSerieEventArgs.htm));


## Параметры


Sender. Компонент, сгенерировавший
 событие;


Args. Параметры события.


## Описание


Событие OnAddSerie наступает
 при добавлении нового ряда в рабочую книгу.


## Комментарии


Параметры данного события нельзя изменить.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента LanerBox с наименованием «LanerBox1», компонента UiErAnalyzer,
 являющегося источником данных для LanerBox. В UiErAnalyzer должна быть
 загружена рабочая книга базы данных временных рядов. Также на форме
 присутствует компонент Memo с наименованием «Memo1».


Описанная процедура должна быть назначена обработчиком события OnAddSerie
 для LanerBox.


	Sub LanerBox1OnAddSerie(Sender: Object; Args: ILanerBoxSerieEventArgs);

	Begin

	    Memo1.Lines.Add("Индекс добавленного ряда: " + Args.SerieIndex.ToString);

	    If Args.Factor <> Null Then

	        Memo1.Lines.Add("Ключ показателя: " + Args.Factor.Factor.ToString);

	    End If;

	    If Args.Serie <> Null Then

	        Memo1.Lines.Add("Наименование ряда: " + Args.Serie.Name);

	    End If;

	End Sub LanerBox1OnAddSerie;


После добавления ряда в рабочую книгу информация о нем будет выведена
 в компонент «Memo1».


См. также:


[LanerBox](LanerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

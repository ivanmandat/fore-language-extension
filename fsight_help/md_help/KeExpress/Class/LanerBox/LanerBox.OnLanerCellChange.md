# LanerBox.OnLanerCellChange

LanerBox.OnLanerCellChange
-


# LanerBox.OnLanerCellChange


## Синтаксис


OnLanerCellChange(Sender: Object; Args: [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm));


## Параметры


Sender. Компонент, сгенерировавший
 событие;


Args. Параметры события.


## Описание


Событие OnLanerCellChange наступает
 при изменении значения в ячейке таблицы рабочей книги.


## Комментарии


Параметры данного события нельзя изменить.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента LanerBox с наименованием «LanerBox1», компонента UiErAnalyzer,
 являющегося источником данных для LanerBox. В UiErAnalyzer должна быть
 загружена рабочая книга базы данных временных рядов. Также на форме
 присутствует компонент Memo с наименованием «Memo1».


Описанная процедура должна быть назначена обработчиком события OnLanerCellChange
 для LanerBox.


	Sub LanerBox1OnLanerCellChange(Sender: Object; Args: IEventArgs);

	Begin

	    Memo1.Lines.Add("Изменено
	 значение в ячейке рабочей книги");

	End Sub LanerBox1OnLanerCellChange;


При изменении значения в ячейке таблицы рабочей книги информация об
 этом будет выведена в компонент «Memo1».


См. также:


[LanerBox](LanerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

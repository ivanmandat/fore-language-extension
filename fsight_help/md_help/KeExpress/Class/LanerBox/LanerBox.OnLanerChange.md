# LanerBox.OnLanerChange

LanerBox.OnLanerChange
-


# LanerBox.OnLanerChange


## Синтаксис


OnLanerChange(Sender: Object; Args: [ILanerBoxChangeEventArgs](../../Interface/ILanerBoxChangeEventArgs/ILanerBoxChangeEventArgs.htm));


## Параметры


Sender. Компонент, сгенерировавший
 событие;


Args. Параметры события.


## Описание


Событие OnLanerChange наступает
 при изменении рабочей книги.


## Комментарии


Используя параметр Args можно
 определить часть рабочей книги, в которой произошли изменения.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента LanerBox с наименованием «LanerBox1», компонента UiErAnalyzer,
 являющегося источником данных для LanerBox. В UiErAnalyzer должна быть
 загружена рабочая книга базы данных временных рядов. Также на форме
 присутствует компонент Memo с наименованием «Memo1».


Описанная процедура должна быть назначена обработчиком события OnLanerChange
 для LanerBox.


	Sub LanerBox1OnLanerChange(Sender: Object; Args: IEventArgs);

	Begin

	    Memo1.Lines.Add("Изменена
	 рабочая книга");

	End Sub LanerBox1OnLanerChange;


При изменении рабочей книги информация об этом будет выведена в компонент
 «Memo1».


См. также:


[LanerBox](LanerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

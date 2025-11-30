# LanerBox.OnStartExecute

LanerBox.OnStartExecute
-


# LanerBox.OnStartExecute


## Синтаксис


OnStartExecute(Sender: Object; Args: [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm));


## Параметры


Sender. Компонент, сгенерировавший
 событие;


Args. Параметры события.


## Описание


Событие OnStartExecute наступает
 перед началом выполнения вычисления всей рабочей книги.


## Комментарии


Параметры данного события нельзя изменить.


После окончания выполнения вычисления всей рабочей книги наступает событие
 [LanerBox.OnFinishExecute](LanerBox.OnFinishExecute.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента LanerBox с наименованием «LanerBox1», компонента UiErAnalyzer,
 являющегося источником данных для LanerBox. В UiErAnalyzer должна быть
 загружена рабочая книга базы данных временных рядов. Также на форме
 присутствует компонент Memo с наименованием «Memo1».


Описанная процедура должна быть назначена обработчиком события OnStartExecute
 для LanerBox.


	Sub LanerBox1OnStartExecute(Sender: Object; Args: ILanerBoxSerieEventArgs);

	Begin

	    Memo1.Lines.Add("Начаты вычисления в рабочей книге");

	End Sub LanerBox1OnStartExecute;


После начала вычислений в рабочей книге информация об этом будет выведена
 в компонент «Memo1».


См. также:


[LanerBox](LanerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

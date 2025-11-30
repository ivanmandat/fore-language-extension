# LanerBox.OnFinishExecute

LanerBox.OnFinishExecute
-


# LanerBox.OnFinishExecute


## Синтаксис


OnFinishExecute(Sender: Object; Args: [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm));


## Параметры


Sender. Компонент, сгенерировавший
 событие;


Args. Параметры события.


## Описание


Событие OnFinishExecute наступает
 после окончания выполнения вычисления всей рабочей книги.


## Комментарии


Параметры данного события нельзя изменить.


Перед началом выполнения вычисления всей рабочей книги наступает событие
 [LanerBox.OnStartExecute](LanerBox.OnStartExecute.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента LanerBox с наименованием «LanerBox1», компонента UiErAnalyzer,
 являющегося источником данных для LanerBox. В UiErAnalyzer должна быть
 загружена рабочая книга базы данных временных рядов. Также на форме
 присутствует компонент Memo с наименованием «Memo1».


Описанная процедура должна быть назначена обработчиком события OnFinishExecute
 для LanerBox.


	Sub LanerBox1OnFinishExecute(Sender: Object; Args: ILanerBoxSerieEventArgs);

	Begin

	    Memo1.Lines.Add("Закончены вычисления в рабочей книге");

	End Sub LanerBox1OnFinishExecute;


После окончания вычислений в рабочей книге информация об этом будет
 выведена в компонент «Memo1».


См. также:


[LanerBox](LanerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

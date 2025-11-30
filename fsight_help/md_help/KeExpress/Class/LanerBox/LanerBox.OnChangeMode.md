# LanerBox.OnChangeMode

LanerBox.OnChangeMode
-


# LanerBox.OnChangeMode


## Синтаксис


OnChangeMode(Sender: Object; Args: [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm));


## Параметры


Sender. Компонент, сгенерировавший
 событие;


Args. Параметры события.


## Описание


Событие OnChangeMode наступает
 при изменении режима отображения рабочей книги.


## Комментарии


Данное событие не генерирует параметры. Таким образом, Args
 не содержит значений.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента LanerBox с наименованием «LanerBox1», компонента UiErAnalyzer,
 являющегося источником данных для LanerBox. В UiErAnalyzer должна быть
 загружена рабочая книга базы данных временных рядов. Также на форме
 присутствует компонент Memo с наименованием «Memo1».


Описанная процедура должна быть назначена обработчиком события OnChangeMode
 для LanerBox.


	Sub LanerBox1OnChangeMode(Sender: Object; Args: IEventArgs);

	Begin

	    Memo1.Lines.Add("Режим отображения рабочей книги был изменен");

	End Sub LanerBox1OnChangeMode;


При смене режима отображения рабочей книги в компонент «Memo1» об этом
 будет выведено сообщение.


См. также:


[LanerBox](LanerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

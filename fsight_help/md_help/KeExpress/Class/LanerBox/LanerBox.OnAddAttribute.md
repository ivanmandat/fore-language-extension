# LanerBox.OnAddAttribute

LanerBox.OnAddAttribute
-


# LanerBox.OnAddAttribute


## Синтаксис


OnAddAttribute(Sender: Object; Args: [ILanerBoxAttributeEventArgs](../../Interface/ILanerBoxAttributeEventArgs/ILanerBoxAttributeEventArgs.htm));


## Параметры


Sender. Компонент, сгенерировавший
 событие;


Args. Параметры события.


## Описание


Событие OnAddAttribute наступает
 при добавлении в рабочую книгу столбцов со значениями атрибутов показателей.


## Комментарии


Параметры данного события нельзя изменить. Args.Index
 возвращает индекс добавленного атрибута.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента LanerBox с наименованием «LanerBox1», компонента UiErAnalyzer,
 являющегося источником данных для LanerBox. В UiErAnalyzer должна быть
 загружена рабочая книга базы данных временных рядов. Также на форме
 присутствует компонент Memo с наименованием «Memo1».


Описанная процедура должна быть назначена обработчиком события OnAddAttribute
 для LanerBox.


	Sub LanerBox1OnAddAttribute(Sender: Object; Args: ILanerBoxAttributeEventArgs);

	Var

	    ColCount: Integer;

	Begin

	    ColCount := Args.Index + 1;

	    Memo1.Lines.Clear;

	    Memo1.Lines.Add("Число дополнительных столбцов с атрибутами: " + ColCount.ToString);

	End Sub LanerBox1OnAddAttribute;


После добавления в рабочую книгу столбцов со значениями атрибутов показателей
 в компонент «Memo1» будет выведено количество данных столбцов.


См. также:


[LanerBox](LanerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

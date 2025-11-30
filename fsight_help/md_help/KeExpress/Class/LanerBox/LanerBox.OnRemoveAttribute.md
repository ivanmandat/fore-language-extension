# LanerBox.OnRemoveAttribute

LanerBox.OnRemoveAttribute
-


# LanerBox.OnRemoveAttribute


## Синтаксис


OnRemoveAttribute(Sender: Object; Args: [ILanerBoxAttributeEventArgs](../../Interface/ILanerBoxAttributeEventArgs/ILanerBoxAttributeEventArgs.htm));


## Параметры


Sender. Компонент, сгенерировавший
 событие;


Args. Параметры события.


## Описание


Событие OnRemoveAttribute наступает
 при удалении из рабочей книги столбца со значениями атрибута показателей.


## Комментарии


Параметры данного события нельзя изменить. Args.Index
 возвращает индекс удаленного атрибута.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента LanerBox с наименованием «LanerBox1», компонента UiErAnalyzer,
 являющегося источником данных для LanerBox. В UiErAnalyzer должна быть
 загружена рабочая книга базы данных временных рядов. Также на форме
 присутствует компонент Memo с наименованием «Memo1».


Описанная процедура должна быть назначена обработчиком события OnRemoveAttribute
 для LanerBox.


	Sub LanerBox1OnRemoveAttribute(Sender: Object; Args: ILanerBoxAttributeEventArgs);

	Var

	    Col: Integer;

	Begin

	    Col := Args.Index + 2;

	    Memo1.Lines.Clear;

	    Memo1.Lines.Add("Была удалена колонка № " + ColCount.ToString);

	End Sub LanerBox1OnRemoveAttribute;


После удаления столбца со значением атрибута показателей в компонент
 «Memo1» будет выведен номер удаленного столбца.


См. также:


[LanerBox](LanerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

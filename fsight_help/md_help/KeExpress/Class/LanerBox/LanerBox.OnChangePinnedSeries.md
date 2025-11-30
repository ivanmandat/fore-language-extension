# LanerBox.OnChangePinnedSeries

LanerBox.OnChangePinnedSeries
-


# LanerBox.OnChangePinnedSeries


## Синтаксис


OnChangePinnedSeries(Sender: Object; Args: [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm));


## Параметры


Sender. Компонент, сгенерировавший
 событие;


Args. Параметры события.


## Описание


Событие OnChangePinnedSeries
 наступает при закреплении/снятии закрепления вычисляемого ряда в рабочей
 книге.


## Комментарии


Параметры данного события нельзя изменить.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента LanerBox с наименованием «LanerBox1», компонента UiErAnalyzer,
 являющегося источником данных для LanerBox. В UiErAnalyzer должна быть
 загружена рабочая книга базы данных временных рядов. Также на форме
 присутствует компонент Memo с наименованием «Memo1».


Описанная процедура должна быть назначена обработчиком события OnChangePinnedSeries
 для LanerBox.


	Sub LanerBox1OnChangePinnedSeries(Sender: Object; Args: IEventArgs);

	Begin

	    Memo1.Lines.Add("Рабочий
	 ряд закреплен или с него снято закрепление");

	End Sub LanerBox1OnChangePinnedSeries;


После закреплении/снятии закрепления вычисляемого ряда информация об
 этом будет выведена в компонент «Memo1».


См. также:


[LanerBox](LanerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# WbkDataView.ObjSizeChanged

WbkDataView.ObjSizeChanged
-


# WbkDataView.ObjSizeChanged


## Синтаксис


ObjSizeChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ObjSizeChanged наступает
 после изменения размеров элементов компонента [StackPanel](dhtmlUi.chm::/Components/StackPanel/StackPanel.htm),
 содержащего карту, диаграмму и таблицу.


## Комментарии


При наведении курсора на границу между панелями появится двусторонняя
 стрелка, при перетаскивании которой будут изменяться размеры панелей.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WbkDataBox](../../../Components/TimeSeries/WbkDataBox/WbkDataBox.htm)
 c наименованием «wbkDataBox» (см. «[Конструктор
 WbkDataBox](../WbkDataBox/Constructor_WbkDataBox.htm)»), также необходимо в обработчике события открытия документа
 добавить следующий код:


wbkDataBox.ObjSizeChanged.add(onDummyActionFactory("Изменен размер панели, содержащей карту, диаграмму и таблицу"));

В результате выполнения примера после изменения размеров таблицы, диаграммы
 или карты в консоль браузера будет выведено сообщение «Изменен размер
 панели, содержащий карту, диаграмму и таблицу».


См. также:


[WbkDataView](WbkDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

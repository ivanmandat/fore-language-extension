# WbkDataView.setMainElementsVisible

WbkDataView.setMainElementsVisible
-


# WbkDataView.setMainElementsVisible


## Синтаксис


setMainElementsVisible (value);


## Параметры


value. Задает видимость разделителя,
 навигационной цепочки и панели инструментов.


## Описание


Метод setMainElementsVisible
 устанавливает видимость разделителя, навигационной цепочки и панели инструментов.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WbkDataBox](../../../Components/TimeSeries/WbkDataBox/WbkDataBox.htm)
 с наименованием «wbkDataBox» (см. «[Конструктор
 WbkDataBox](../WbkDataBox/Constructor_WbkDataBox.htm)»), также необходимо теге body добавить элемент div с идентификатором
 «params», а в обработчике события открытия документа добавить следующий
 код:


// Создаем [флажок](dhtmlUi.chm::/Classes/CheckBox/CheckBox.htm), при установке/снятии которого будут отображаться/скрываться разделитель, цепочка навигации и панель инструментов
	cbIsMainElementsVisible = new PP.Ui.CheckBox({
	ParentNode: "params", //родительский узел DOM
	Content: "IsMainElementsVisible", //подпись
	Checked: true //флажок установлен
});
// Привязывем обработчик к событию изменения состояния флажка isMainElementsVisible
cbIsMainElementsVisible.CheckedChanged.add(function (sender, args) {
	// Получаем значение флажка
	var mustMainElementsVisible = sender.getChecked();
	console.log("Задаем видимость разделителя, навигационной цепочки и панели инструментов");
	wbkDataBox.setMainElementsVisible(mustMainElementsVisible);
});

В результате выполнения примера после нажатия на флажок «IsMainElementsVisible» разделитель, навигационная
 цепочка и панель инструментов будут скрыты.


См. также:


[WbkDataView](WbkDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

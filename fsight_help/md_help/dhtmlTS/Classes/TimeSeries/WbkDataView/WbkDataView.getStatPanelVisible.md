# WbkDataView.getStatPanelVisible

WbkDataView.getStatPanelVisible
-


# WbkDataView.getStatPanelVisible


## Синтаксис


getStatPanelVisible ();


## Описание


Метод getStatPanelVisible возвращает
 признак, видна ли панель статистик.


## Комментарии


Если установлено значение true,
 панель статистик видна, false
 - скрыта.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WbkDataBox](../../../Components/TimeSeries/WbkDataBox/WbkDataBox.htm)
 c наименованием «wbkDataBox» (см. «[Конструктор
 WbkDataBox](../WbkDataBox/Constructor_WbkDataBox.htm)»), также необходимо в обработчике события открытия документа
 добавить следующий код:


// Создаем [флажок](dhtmlUi.chm::/Classes/CheckBox/CheckBox.htm) для демонстрации работы метода getStatPanelVisible()
cbIsStatPanelVisible = new PP.Ui.CheckBox({
	ParentNode: "params", //родительский узел DOM
	Content: "Показать/Скрыть панель статистик", //текст
	Checked: true //флажок установлен
});
// Привязывем обработчик к событию изменения состояния флажка Показать/Скрыть панель статистик
cbIsStatPanelVisible.CheckedChanged.add(function (sender, args) {
	// Получаем значение флажка
	var checked = sender.getChecked();
	console.log("Задаем видимость панели статистик");
	if (checked == true)
		wbkDataBox._TabStatPanel.expand();
	else
		wbkDataBox._TabStatPanel.collapse();
	var isStPanVisible = wbkDataBox.getStatPanelVisible();
	console.log("Панель статистик видна: " + isStPanVisible);
});

В результате выполнения примера после нажатия на флажок «Показать/Скрыть
 панель статистик» панель статистик будет раскрыта или скрыта в зависимости
 от состояния флажка, а в консоль браузера будет выведено true,
 если панель статистик раскрыта и false,
 если скрыта.


См. также:


[WbkDataView](WbkDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

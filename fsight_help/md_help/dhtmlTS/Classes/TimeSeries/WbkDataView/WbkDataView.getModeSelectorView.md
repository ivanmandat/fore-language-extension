# WbkDataView.getModeSelectorView

WbkDataView.getModeSelectorView
-


# WbkDataView.getModeSelectorView


## Синтаксис


getModeSelectorView ();


## Описание


Метод getModeSelectorView возвращает компонент для управления расположением представлений рабочей книги.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WbkDataBox](../../../Components/TimeSeries/WbkDataBox/WbkDataBox.htm) c наименованием «wbkDataBox» (см. «[Конструктор WbkDataBox](../WbkDataBox/Constructor_WbkDataBox.htm)»), также в рабочей области должно быть открыто несколько представлений данных, а в обработчике события открытия документа необходимо добавить следующий код:


var setVerticalButt = new PP.Ui.Button({
	ParentNode: document.body, //родительский узел DOM
	Content: "Установить вертикально", //текст
	Click: PP.Delegate(onClickSetVertical)
});
function onClickSetVertical(){
	//Получаем компонент для управления расположением представлений рабочей книги
	var modeSelector = wbkDataBox.getModeSelectorView();
	//Получаем метаданные изменения выбранного режима
	var pos = modeSelector.getModeSelectorState(PP.TS.Ui.ModeSelectorType.Horizontal);
	//Получаем метаданные рабочей книги
	var md = wbk.getMetadata();
	//Устанавливаем метаданные изменения выбранного режима в метаданные рабочей книги
	for (var prop in pos){
		md[prop] = pos[prop];
	}
	//Обновляем
	wbkDataBox.refreshAll();
}

После выполнения примера на странице будет размещена кнопка «Установить вертикально» при нажатии на которую будет изменено расположение представлений данных на вертикальное.


См. также:


[WbkDataView](WbkDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

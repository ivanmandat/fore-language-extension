# WbkDataView.getMapView

WbkDataView.getMapView
-


# WbkDataView.getMapView


## Синтаксис


getMapView ();


## Описание


Метод getMapView возвращает
 компонент для отображения карты.


## Комментарии


Метод возвращает экземпляр класса [EaxMapView](dhtmlExpress.chm::/Classes/Express/EaxMapView/EaxMapView.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо, чтобы в
 открываемой рабочей книге было активно представление «Карта», а в обработчике
 события открытия документа добавить следующий код:


var disableScrollButt = new PP.Ui.Button({
	ParentNode: document.body, //Родительский узел DOM
	Content: "Масштабирование колесиком", //Название кнопки
	Click: PP.Delegate(onClickScroll)
});
var useZoomOnWheel = false;
function onClickScroll(){
	//Получаем компонент для отображения данных рабочей книги
	var dataView = workbookBox.getDataView();
	//Получаем компонент для отображения карты
	var mapView = dataView.getMapView();
	//Отключаем масштабирование колесом
	mapView.setUseZoomOnWheel(useZoomOnWheel);
	useZoomOnWheel = !useZoomOnWheel;
}

После выполнения примера на html-странице будет размещена кнопка с наименованием
 «Масштабирование колесиком», при нажатии на которую отключается/включается
 возможность использования мыши для масштабирования карты.


См. также:


[WbkDataView](WbkDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

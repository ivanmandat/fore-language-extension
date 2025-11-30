# WbkDataView.updateSourcesCaptionSize

WbkDataView.updateSourcesCaptionSize
-


# WbkDataView.updateSourcesCaptionSize


## Синтаксис


updateSourcesCaptionSize ();


## Описание


Метод updateSourcesCaptionSize
 обновляет размер части навигационной цепочки, в которой отображено имя
 источника данных.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WbkDataBox](../../../Components/TimeSeries/WbkDataBox/WbkDataBox.htm)
 c наименованием «wbkDataBox» (см. «[Конструктор
 WbkDataBox](../WbkDataBox/Constructor_WbkDataBox.htm)»), также необходимо в обработчике события открытия документа
 добавить следующий код:


//Присвоим значение длины для части навигационной цепочки, в которой отображено имя источника данных, равное 200-м пикселям
wbkDataBox._BreadcrumbSourceDiv.style.width = "200px";
//Создаем экземпляр класса PP.Ui.Button
var updSourceCaptSize = new PP.Ui.Button({
ParentNode: 'example', //родительский узел DOM
Content: "Обновить размер", //подпись
Click: PP.Delegate(function () {wbkDataBox.updateSourcesCaptionSize();}) //обработчик события Click
});

После выполнения примера будет установлен компонент [WbkDataBox](../../../Components/TimeSeries/WbkDataBox/WbkDataBox.htm),
 где длина для части навигационной цепочки, в которой отображено имя источника
 данных равна 200 пикселям, и кнопка «Обновить размер», при нажатии на
 которую будет обновляться размер навигационной цепочки.


См. также:


[WbkDataView](WbkDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

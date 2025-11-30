# WbkDataView.showCannotOpenCube

WbkDataView.showCannotOpenCube
-


# WbkDataView.showCannotOpenCube


## Синтаксис


showCannotOpenCube ();


## Описание


Метод showCannotOpenCube отображает
 окно с предупреждением о том, что выбранный куб не может быть выбран в
 качестве источника .


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WbkDataBox](../../../Components/TimeSeries/WbkDataBox/WbkDataBox.htm)
 c наименованием «wbkDataBox» (см. «[Конструктор
 WbkDataBox](../WbkDataBox/Constructor_WbkDataBox.htm)»), также необходимо в обработчике события открытия документа
 добавить следующий код:


btnShowCannotOpenCube = new PP.Ui.Button({
	ParentNode: "params", //родительский узел DOM
	Content: "ShowCannotOpenCube" //подпись
});
// Привязывем обработчик к событию нажатия на кнопку
btnShowCannotOpenCube.Click.add(function (sender, args) {
	console.log("Отображаем окно с предупреждением о том, что выбранный куб не может быть выбран в качестве источника");
	wbkDataBox.showCannotOpenCube()
});

После выполнения примера на html-странице будет размещена кнопка ShowCannotOpenCube,
 при нажатии на которую появится окно с сообщением «Куб данной структуры
 не может быть выбран в качестве источника».


См. также:


[WbkDataView](WbkDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

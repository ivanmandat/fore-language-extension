# EquationAutoFitPanel.setSource

EquationAutoFitPanel.setSource
-


# EquationAutoFitPanel.setSource


## Синтаксис


setSource (value);


## Параметры


value. Задает [рабочую книгу](../Workbook/Workbook.htm).


## Описание


Метод setSource устанавливает рабочую книгу, данные которой отображаются в компоненте.


## Пример


Для выполнения предполагается наличие на странице компонента EquationAutoFitPanel с наименованием «equationAutoFitPanel» (см. «[Конструктор EquationAutoFitPanel](Constructor_EquationAutoFitPanel.htm)») и в обработчике события открытия документа добавить следующий код::


	console.log("Устанавливаем рабочую книгу, данные которой отображаются в компоненте");
	var value = args.Workbook;
	equationAutoFitPanel.setSource(value);

После выполнения примера будет установлена рабочая книга, данные которой будут отображаться в панели автоподбора параметров экспоненциального сглаживания и в консоль будет выведено соответствующее сообщение.


См. также:


[EquationAutoFitPanel](EquationAutoFitPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

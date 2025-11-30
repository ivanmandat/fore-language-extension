# TSService.getRubFromCube

TSService.getRubFromCube
-


# TSService.getRubFromCube


## Синтаксис


getRubFromCube (cubeKey, cubeName, callback);


## Параметры


cubeKey. Задает значение ключа куба;


cubeName. Задает имя куба;


callback. Задает делегат, который выполнится после завершения запроса.


## Описание


Метод getRubFromCube получает базу данных временных рядов из куба с указанным ключом.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Также предполагается наличие в репозитории куба с ключом 390857 и именем «Workbook with OLS.xls», содержащего дочернюю базу данных временных рядов, а в обработчике события открытия документа необходимо добавить следующий код:


	var getRubButt = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "Получить базу данных из куба", //Подпись
		Click: PP.Delegate(onClickGetRub)
	});

	function onClickGetRub()
	{
		var cubeKey = "390857";
		var cubeName = "Workbook with OLS.xls";
		//Получаем базу данных временных рядов из куба
		tsService.getRubFromCube(cubeKey, cubeName, PP.Delegate(onGetRubFromCube, this));
		// Обработчик события окончания выполнения метода getRubFromCube
		function onGetRubFromCube(sender, args){
			alert('RubKey: ' +  args.RubKey + '\n' + 'CubeKey: ' + args.CubeKey + '\n' + 'CubeName: ' + args.CubeName + '\n' + 'Args: ' + args.Args);
		}
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием «Получить базу данных из куба». При нажатии на кнопку будет получена база данных с указанным ключом и будет выведено сообщение с ключом базы данных временных рядов, ключом куба и его именем.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

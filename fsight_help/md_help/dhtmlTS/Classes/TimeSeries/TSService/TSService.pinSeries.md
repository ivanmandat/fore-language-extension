# TSService.pinSeries

TSService.pinSeries
-


# TSService.pinSeries


## Синтаксис


pinSeries (wbk, series, callback);


## Параметры


wbk. Задает значение [рабочей книги](../Workbook/Workbook.htm);


series. Задает ряд;


callback. Задает обработчик окончания выполнения операции.


## Описание


Метод pinSeries блокирует ряды.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)») и наличие в рабочей книге вычисляемого ряда. Также необходимо в обработчике события открытия документа добавить следующий код:


	//Создаем признак, который будет использоваться для того, чтобы определить, есть ли блокированные ряды в рабочей книге
	var someSerieIsPinnedFlag;
	//Переменная для хранения массива выбранных рядов
	var selSeries;
	//Кнопка, по нажатию на который блокируется или разблокируется выбранный ряд
	var pinSerieButton = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "Блокировать ряд", //Подпись
		Click: PP.Delegate(onClickPinSerie)
		});

	//Обработчик нажатия кнопки "Блокировать ряд"
	function onClickPinSerie()
	{
		//Создаем объект, содержащий ряд для блокирования/разблокирования
		var series = {};
		series.its = {};
		series.its.it = [];

		//Создаем объект, содержащий ряд для блокирования
		var pinnedSerie = {
			id: "",
			k: PP.Mb.UINT32MAXVALUE
			};

		if (selSeries && selSeries.length > 0)
		{
			var selSerie = undefined;
			//В зависимости от наличия блокированных рядов в рабочей книге, формируем объект, передаваемый методу
			//pinSeries в качестве параметра
			if (!someSerieIsPinnedFlag)
			{
				selSerie = selSeries[0];
				pinnedSerie.id = selSerie.id;
				pinnedSerie.k = selSerie.k;
			}
			else
			{
				for (var i = 0; i < selSeries.length; i++)
				{
					series.its.it.push({
						k: selSeries[i].k,
						id: selSeries[i].id,
						kind: selSeries[i].kind
				});
			}
		}
		}
			series.pinned = pinnedSerie;
			//Устанавливаем блокировку в рабочей книге
			wbk.getActiveSheet().setPinned(pinnedSerie.k != PP.Mb.UINT32MAXVALUE ? pinnedSerie : undefined);
			//Блокируем выбранный ряд
			tsService.pinSeries(wbk.getActiveSheet(), series, PP.Delegate(onResponse))
		}

		//Обработчик окончания выполнения метода pinSeries
		function onResponse()
		{
			//Обновляем весь компонент для отображения рабочей книги
			workbookBox.refreshAll();
		}

		//Обработчик окончания взаимодействия с репозиторием. Служит для установки доступности кнопки
		//"Блокировать ряд" в зависимости от возможности блокировки выбранного ряда и установки признака
		//наличия блокированных рядов в рабочей книге
		metabase.EndRequest.add(PP.Delegate(function(){
			selSeries = wbk.getActiveSheet().getSelectedSeries();
			if (selSeries.length == 1 && selSeries[0].calc && selSeries[0].calc.formula)
			{
				pinSerieButton.setEnabled(true);
			}
			else
			{
				pinSerieButton.setEnabled(false);
			}
		someSerieIsPinnedFlag = (wbk.getActiveSheet().getPinned() ? true : false);
	}));

После выполнения примера на html-странице будет размещена кнопка с наименованием «Блокировать ряд». Необходимо выбрать вычисляемый ряд и нажать кнопку «Блокировать ряд». После этого выбранный ряд будет заблокирован.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

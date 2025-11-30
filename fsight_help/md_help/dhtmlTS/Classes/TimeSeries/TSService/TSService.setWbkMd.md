# TSService.setWbkMd

TSService.setWbkMd
-


# TSService.setWbkMd


## Синтаксис


setWbkMd (report, callback);


## Параметры


report. Задает отчёт, для которого
 нужно отправить изменённые настройки на сервер;


callback. Задает функцию обратного
 вызова на получение метаданных отчета.


## Описание


Метод setWbkMd устанавливает
 метаданные в объект report.


## Комментарии


Метод возвращает true, если настройки на сервер были отправлены.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» и сервиса для работы с временными рядами
 «tsService» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике
 события открытия документа добавить следующий код:


	var loadWbkMdButt = new PP.Ui.Button({
		ParentNode: document.body, //Родительский узел DOM
		Content: "Устанавливаем метаданные", //Подпись
		Click: PP.Delegate(onClickLoadWbkMd)
	});

	function onClickLoadWbkMd()
	{
		//Устанавливаем метаданные в рабочую книгу
		var changes = tsService.setWbkMd(wbk, PP.Delegate(onWbkMd, this));
		// Обработчик события окончания выполнения метода loadWbkMd
			function onWbkMd(sender, args){
				//Добавлем кнопку проверки: отправлены ли настройки на сервер
				var checkButt = new PP.Ui.Button({
					ParentNode: document.body, //Родительский узел DOM
					Content: "Check", //Подпись
					Click: PP.Delegate(onClickCheck)
				});
			function onClickCheck(){
				//При нажатии на кнопку выводим сообщение по факту отправки настроек
				alert(changes);
			}
		}
	}

После выполнения примера на html-странице будет размещена кнопка с наименованием
 «Устанавливаем метаданные». При нажатии на кнопку метаданные будут установлены
 в объект report и создана кнопка проверки отправки данных на сервер с
 наименованием «Check». Нажав на эту кнопку, получим сообщение, содержащее
 результат проверки отправки настроек на сервер.


См. также:


[TSService](TSService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# WbkDataView.RequestMetadata

WbkDataView.RequestMetadata
-


# WbkDataView.RequestMetadata


## Синтаксис


RequestMetadata: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие RequestMetadata наступает при запросе метаданных.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


var demoRequestMetadataButt = new PP.Ui.Button({
	ParentNode: "params", //Родительский узел DOM
	Content: "Изменить языковые настройки", //Подпись
	Click: PP.Delegate(onClickDemoRequestMetadata)
});
function onClickDemoRequestMetadata()
	{
		workbookBox.getDataView().RequestMetadata.add(PP.Delegate(function(){
			alert("Произошло событие изменения параметра рабочей книги");
		}));
		PP.setCurrentCulture(PP.Cultures.en);
	}

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) и кнопка с наименованием «Изменить языковые настройки». По нажатию на кнопку изменятся языковые настройки и выведется сообщение «Произошло событие изменения параметра рабочей книги».


См. также:


[WbkDataView](WbkDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# WbkRibbonView.refresh

WbkRibbonView.refresh
-


# WbkRibbonView.refresh


## Синтаксис


refresh (args);


## Параметры


args. Информация о событии


## Описание


Метод refresh обновляет указанный элемент управления на ленте инструментов временных рядов.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также в репозитории должна содержаться рабочая книга с ключом 5183, а в обработчике события открытия документа необходимо добавить следующий код:


var NewKEY = 5183;
    tsService.openDocument(NewKEY, onSecondOpened);
    function onSecondOpened(sender, args)
    {
     //Получаем компонент для отображения меню в стиле Ribbon
     var ribbonView = workbookBox.getRibbonView();
     //Получаем новый источник данных
     var wbk2 = args.Workbook;
     //Устанавливаем выбранный ряд в новом источнике данных
     tsService.setSelectedSeries(wbk2, [1], [0]);

     var refreshButt = new PP.Ui.Button({
      ParentNode: document.body, //Родительский узел DOM
      Content: "Refresh", //Подпись
      Click: PP.Delegate(onClickRefresh)
     });
     function onClickRefresh(){
      //Обновлям указанный элемент управления на ленте инструментов временных рядов
      ribbonView.refresh('Data');
     }
    }

После выполнения примера на html-странице будет размещен компонент [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm), будет обновлен указанный элемент управления на ленте инструментов временных рядов. После нажатия кнопки «Refresh» на вкладке «Данные» меню ленты инструментов временных рядов, кнопки «Сохранить изменения» и «Отменить изменения» станут не активными.


См. также:


[WbkRibbonView](WbkRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

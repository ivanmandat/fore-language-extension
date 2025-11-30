# WbkRibbonView.Source

WbkRibbonView.Source
-


# WbkRibbonView.Source


## Синтаксис


Source: PP.TS.[WbkDocument](../WbkDocument/WbkDocument.htm);


## Описание


Свойство Source определяет источник данных для ленты инструментов.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также наличие в репозитории рабочей книги с ключом 5183, а в обработчике события открытия документа необходимо добавить следующий код:


 var NewKEY = 5183;
    tsService.openDocument(NewKEY, onSecondOpened);
    function onSecondOpened(sender, args)
    {
     //Получаем новый источник данных
     var wbk2 = args.Workbook;
     //Устанавливаем выбранный ряд в новом источнике данных
     tsService.setSelectedSeries(wbk2, [1], [0]);

     var setSourceButt = new PP.Ui.Button({
      ParentNode: document.body, //Родительский узел DOM
      Content: "Источник", //Подпись
      Click: PP.Delegate(onClickSetSource)
     });
     function onClickSetSource(){
      //Получаем компонент для отображения меню в стиле Ribbon
      var ribbonView = workbookBox.getRibbonView();
      //Устанавливаем новый источник
      ribbonView.Source = wbk2;

      //Обновляем компонент
      ribbonView.refreshAll();
     }
    }

После выполнения примера на html-странице будет открыта рабочая книга с ключом 5183 и размещена кнопка «Источник», при нажатии на которую обновится содержимое ленты в соответствии с новым источником (рабочей книгой с ключом  5183).


См. также:


[WbkRibbonView](WbkRibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

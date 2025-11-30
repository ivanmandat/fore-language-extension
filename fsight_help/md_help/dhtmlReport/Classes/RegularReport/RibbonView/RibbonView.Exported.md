# RibbonView.Exported

RibbonView.Exported
-


# RibbonView.Exported


## Синтаксис


Exported: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Exported наступает при сохранении отчета в файл внешнего формата.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox». Добавим обработчик события Exported:


reportBox.getRibbonView().Exported.add(function (sender, args) {


       alert("Экспорт отчета")


})


После выполнения команды главного меню «Сохранить как > [возможный вариант экспорта]>» и нажатия на кнопку «OK» открывшегося [диалога экспорта](../../../Components/RegularReport/Dialogs/ExportDialog.htm) будет выдаваться сообщение «Экспорт отчета».


См. также:


[RibbonView](RibbonView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

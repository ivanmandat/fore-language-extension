# Конструктор PdfExportDialog

Конструктор PdfExportDialog
-


# Конструктор PdfExportDialog


## Синтаксис


PP.Prx.Ui.PdfExportDialog(settings)


## Параметры


settings. JSON-объект с настройками компонента.


## Описание


Конструктор PdfExportDialog создает диалог для экспорта отчета в формат *.pdf.


## Пример


Для выполнения примера теге HEAD добавьте ссылки на следующие js-и css-файлы:


-
PP.js;


-
PP.css;


-
PP.Metabase.js;


-
PP.Report.js;


-
PP.Report.css;


-
resources.ru.js.


Добавьте следующий java-script код:


    var pdfExpDialog = new PP.Prx.Ui.PdfExportDialog();
    function ShowDialog() {
        pdfExpDialog.show(10, 30)
        }
    var btn = new PP.Ui.Button({
            ParentNode: document.getElementById("btn1"),
            Click: ShowDialog,
            Content: "Открыть"
        })

После выполнения примера на странице будет размещена кнопка «Открыть», при нажатии на которую будет открываться следующий диалог:


![](PdfExportDialog.gif)


См. также:


[PdfExportDialog](PdfExportDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# Конструктор XlsExportDialog

Конструктор XlsExportDialog
-


# Конструктор XlsExportDialog


## Синтаксис


PP.Prx.Ui.XlsExportDialog(settings)


## Параметры


settings. JSON-объект с настройками компонента.


## Описание


Конструктор RtfExportDialog создает диалог экспорта отчета в формат *.xls.


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


    var xlsExpDialog = new PP.Prx.Ui.XlsExportDialog();
    function ShowDialog() {
        xlsExpDialog.show(10, 30)
        }
    var btn = new PP.Ui.Button({
            ParentNode: document.getElementById("btn1"),
            Click: ShowDialog,
            Content: "Открыть"
        })

После выполнения примера на странице будет размещена кнопка «Открыть», при нажатии на которую будет открываться следующий диалог:


![](XlsExportDialog.gif)


См. также:


[XlsExportDialog](XlsExportDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

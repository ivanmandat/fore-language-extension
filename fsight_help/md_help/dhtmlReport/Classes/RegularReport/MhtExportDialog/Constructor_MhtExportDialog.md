# Конструктор MhtExportDialog

Конструктор MhtExportDialog
-


# Конструктор MhtExportDialog


## Синтаксис


PP.Prx.Ui.MhtExportDialog(settings)


## Параметры


settings. JSON-объект с настройками компонента.


## Описание


Конструктор MhtExportDialog создает диалог для экспорта отчета в формат *.mht.


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


    var mhtExpDialog = new PP.Prx.Ui.MhtExportDialog();
    function ShowDialog() {
        mhtExpDialog.show(10, 30)
        }
    var btn = new PP.Ui.Button({
            ParentNode: document.getElementById("btn1"),
            Click: ShowDialog,
            Content: "Открыть"
        })

После выполнения примера на странице будет размещена кнопка «Открыть», при нажатии на которую будет открываться следующий диалог:


![](MhtExportDialog.gif)


См. также:


[MhtExportDialog](MhtExportDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

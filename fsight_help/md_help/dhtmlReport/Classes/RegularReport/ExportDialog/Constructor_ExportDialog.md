# Конструктор ExportDialog

Конструктор ExportDialog
-


# Конструктор ExportDialog


## Синтаксис


PP.Prx.Ui.ExportDialog (settings)


## Параметры


settings. JSON-объект с настройками компонента.


## Описание


Конструктор ExportDialog создает базовый диалог для всех диалогов экспорта регламентного отчета.


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


    var expDialog = new PP.Prx.Ui.ExportDialog();
    function ShowDialog() {
        expDialog.show(10, 30)
        }
    var btn = new PP.Ui.Button({
            ParentNode: document.getElementById("btn1"),
            Click: ShowDialog,
            Content: "Открыть"
        })

После выполнения примера на странице будет размещена кнопка «Открыть», при нажатии на которую будет открываться следующий диалог:


![](ExportDialog.gif)


См. также:


[ExportDialog](ExportDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# Конструктор EmfExportDialog

Конструктор EmfExportDialog
-


# Конструктор EmfExportDialog


## Синтаксис


PP.Prx.Ui.EmfExportDialog


## Параметры


settings. JSON-объект с настройками компонента.


## Описание


Конструктор EmfExportDialog создает диалог для экспорта в формат *.emf.


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
resources.ru.js


Добавьте следующий java-script код:


    var emfExpDialog = new PP.Prx.Ui.XlsExportDialog();
    function ShowDialog() {
        emfExpDialog.show(10, 30)
        }
    var btn = new PP.Ui.Button({
            ParentNode: document.getElementById("btn1"),
            Click: ShowDialog,
            Content: "Открыть"
        })

После выполнения примера на странице будет размещена кнопка «Открыть», при нажатии на которую будет открываться следующий диалог:


![](EmfExportDialog.gif)


См. также:


[EmfExportDialog](EmfExportDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

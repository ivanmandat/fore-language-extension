# Control.isVisibleOnSheet

Control.isVisibleOnSheet
-


# Control.isVisibleOnSheet


## Синтаксис


isVisibleOnSheet (sheetKey);


## Параметры


sheetKey. Ключ листа.


## Описание


Метод isVisibleOnSheet определяет,
 отображается ли элемент управления на заданном листе отчета.


## Комментарии


Если метод возвращает значение true,
 значит элемент управления отображается для заданного листа отчета. Иначе
 возвращается значение false.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» (см. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Исходный регламентный отчет должен
 содержать как минимум три элемента управления.


        function getMd() {
            var ctrlV = reportBox.getDataView().getControlBar().getControl(3);
            if (ctrlV.getSource().isVisibleOnSheet(1) == true)
            { alert(ctrlV.getMetadata().Data.Id) }
        }

После выполнения функции getMd, если третий элемент управления является
 видимым для первого листа отчета, будет выведено сообщение с его идентификатором.


См. также:


[Control](Control.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

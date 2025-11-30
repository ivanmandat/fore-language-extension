# PP.Prx.Ui.GridView.AutoUpdateObjects

PP.Prx.Ui.GridView.AutoUpdateObjects
-


# GridView.AutoUpdateObjects


## Синтаксис


AutoUpdateObjects: Boolean


## Описание


Свойство AutoUpdateObjects определяет,
 будут ли автоматически обновляться визуальные объекты при смене отметки.


## Комментарии


По умолчанию установлено значение true,
 визуальные объекты обновляются при смене отметки в регламентном отчёте.


Значение свойства устанавливается из конструктора с помощью метода setAutoUpdateObjects, а возвращается
 методом getAutoUpdateObjects.


## Пример


Для выполнения примера разместите на html-странице компонент [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» (cм. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). В регламентном отчёте добавьте
 данные с визуальным объектом. Выключим автоматическое обновление объекта
 при смене отметки:


var moduleObject = PP.App.getModuleObject();
moduleObject.getReportBox().getDataView().getGridView().setAutoUpdateObjects(false);
После выполнения примера визуальный объект не будет обновляться при
 смене отметки.


См. также:


[GridView](GridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

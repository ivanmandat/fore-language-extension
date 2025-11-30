# Report.getDisplayTabs

Report.getDisplayTabs
-


# Report.getDisplayTabs


## Синтаксис


getDisplayTabs() : Boolean;


## Описание


Метод getDisplayTabs возвращает
 признак видимости вкладок листов.


## Комментарии


Вкладки листов расположены сверху и предназначены для навигации по листам.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» (см. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)») и модель регламентного отчета с
 наименованием «prxReport», содержащий несколько листов. Определим видимость
 вкладок листов:


// Получим признак отображения вкладок листов
result = prxReport.getDisplayTabs();
console.log(result ? "Вкладки листов отображены" : "Вкладки листов спрятаны");
В результате выполнения примера в консоль был выведен признак видимости
 вкладок.


См. также:


[Report](Report.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

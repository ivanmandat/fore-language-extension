# EaxMdService.setMapDrillDown

EaxMdService.setMapDrillDown
-


**


# EaxMdService.setMapDrillDown


## Синтаксис


setMapDrillDown(report: PP.Exp.[EaxDocument](../EaxDocument/EaxDocument.htm),
 territoryId: Number, method: [PP.Mb.DrillMethod](dhtmlMetabase.chm::/Enums/DrillMethod.htm),
 callback: PP.Delegate);


## Параметры


*report.* Документ экспресс-отчета;


*territoryId.* Идентификатор территории
 на карте;


*method.* Метод изменения
 уровня карты, задающий направление перехода;


*callback.* Возвратная
 функция.


## Описание


Метод setMapDrillDown**
 изменяет уровень карты экспресс-отчета в указанном направлении.


## Комментарии


Изменение уровня карты территории (детализация или обобщение) доступна
 при следующих условиях:


	- территориальное измерение источника данных должно
	 содержать атрибут TOPO_ID
	 с данными целого типа. В этом атрибуте нужно указать ключ карты, содержащейся
	 в репозитории. Данная карта будет открываться при детализации территории;


	- территориальное измерение должно быть иерархическим.


Более подробная информация приведена на странице «[Детализация
 территорий карты](UiMaps.chm::/Configure/MapConfigure.htm#drilldown)».


## Пример


Пример использования события приведен на странице описания метода [EaxMapBox.getService](../EaxMapBox/EaxMapBox.getService.htm).


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

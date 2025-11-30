# ITabSheetExporter.BreakIntoLayouts

ITabSheetExporter.BreakIntoLayouts
-


**


# ITabSheetExporter.BreakIntoLayouts


## Синтаксис


BreakIntoLayouts: Boolean;


## Описание


Свойство BreakIntoLayouts определяет,
 разбивать ли лист на печатные страницы при экспорте в формат RTF (*.rtf).


## Комментарии


Допустимые значения:


	- True. Значение по умолчанию.
	 Экспортируемые
	 листы будут разбиты на печатные страницы;


	- False. Экспортируемые
	 листы не будут разбиты на печатные страницы.


Если установлено значение False**, и на
 листе имеются сквозные строки, то для этих строк будет установлен флаг
 «Повторять как заголовок на каждой странице». Область ячеек до сквозных
 строк будет экспортирована как отдельная таблица.


## Пример


Использование свойства приведено в примере для [ITabSheetExporter.AutoHeight](ITabSheetExporter.AutoHeight.htm).


См. также:


[ITabSheetExporter](ITabSheetExporter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

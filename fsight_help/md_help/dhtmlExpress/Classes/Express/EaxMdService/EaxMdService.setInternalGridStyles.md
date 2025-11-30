# EaxMdService.setInternalGridStyles

EaxMdService.setInternalGridStyles
-


# EaxMdService.setInternalGridStyles


## Синтаксис


setInternalGridStyles(report, metadata, callback);


## Параметры


report. [PP.Exp.EaxAnalyzer](../EaxAnalyzer/EaxAnalyzer.htm).
 Экземпляр экспресс отчета.


metadata. Object.
 Метаданные.


callback. PP.Delegate
 | Function. Функция обратного
 вызова.


## Описание


Метод setInternalGridStyles
 устанавливает стиль ячеек всей таблицы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с
 наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»).


// Создадим метаданные
tableMeta = eaxAnalyzer.getMetadata();
meta = tableMeta.grid.style.internals;
// Поменяем размер шрифта
meta.Font["@S"] = 18;
// Установим стиль
eaxMdService.setInternalGridStyles(eaxAnalyzer, meta);
// Обновим область данных
dataV = expressBox.getDataView();
dataV.refresh();
В результате выполнения примера таблице данных был установлен новый
 размер шрифта.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,

# EaxMdService.setSelectPart

EaxMdService.setSelectPart
-


# EaxMdService.setSelectPart


## Синтаксис


setSelectPart(report: PP.Exp.[EaxDocument](../EaxDocument/EaxDocument.htm),
 part: Object, callback: PP.Delegate);


## Параметры


*report.* Документ экспресс-отчёта;


*part.* Метаданные о выделенной
 области.


*callback.* Возвратная функция.


## Описание


Метод setSelectPart задает выделенную
 область таблицы экспресс-отчета.


## Комментарии


Получить все доступные области таблицы можно при помощи метода [EaxAnalyzer.getTableParts](../EaxAnalyzer/EaxAnalyzer.getTableParts.htm).


Наименования областей представлены в перечислении [PP.Exp.Ui.EaxTablePart](../../../Enums/PP.Exp.Ui.EaxTablePart.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»).


// Получим документ экспресс-отчета
var eaxAnalyzer = expressBox.getSource();
// Определим метаданные
metadata = {
part : "TopHeader"
}
// Установим выделенную область таблицы
eaxMdService.setSelectPart(eaxAnalyzer, metadata);
// Обновим экспресс-отчет
expressBox.refreshAll();

В результате выполнения примера в качестве выделенной области была установлена
 шапка таблицы.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
